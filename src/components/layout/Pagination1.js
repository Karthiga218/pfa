import React, { Component } from "react";
import classnames from "classnames";

import PropTypes from "prop-types";

const defaultButton = props => <button {...props}>{props.children}</button>;

export default class ReactTablePagination extends Component {
  constructor(props) {
    super();

    this.getSafePage = this.getSafePage.bind(this);
    this.changePage = this.changePage.bind(this);
    this.applyPage = this.applyPage.bind(this);
    console.log(
      "visible pages = " +
        props.pages +
        "::::::::" +
        this.getVisiblePages(null, props.pages)
    );
    this.state = {
      page: props.page,
      visiblePages: this.getVisiblePages(null, props.pages)
    };
  }

  static propTypes = {
    pages: PropTypes.number,
    page: PropTypes.number,
    PageButtonComponent: PropTypes.any,
    onPageChange: PropTypes.func,
    previousText: PropTypes.string,
    nextText: PropTypes.string
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ page: nextProps.page });

    if (this.props.pages !== nextProps.pages) {
      this.setState({
        visiblePages: this.getVisiblePages(null, nextProps.pages)
      });
    }

    this.changePage(nextProps.page + 1);
  }

  filterPages = (visiblePages, totalPages) => {
    return visiblePages.filter(page => page <= totalPages);
  };

  getVisiblePages = (page, total) => {
    if (total < 7) {
      return this.filterPages([1, 2, 3, 4, 5, 6], total);
    } else {
      if (page % 5 >= 0 && page > 4 && page + 2 < total) {
        return [1, page - 1, page, page + 1, total];
      } else if (page % 5 >= 0 && page > 4 && page + 2 >= total) {
        return [1, total - 3, total - 2, total - 1, total];
      } else {
        return [1, 2, 3, 4, 5, total];
      }
    }
  };

  getSafePage(page) {
    if (isNaN(page)) {
      page = this.props.page;
    }
    if (this.props.canNextFromData) return page;

    return Math.min(Math.max(page, 0), this.props.pages - 1);
  }

  changePage(page) {
    const activePage = this.props.page + 1;
    console.log("pages=" + this.props.pageSize);

    if (page === activePage) {
      return;
    }

    const visiblePages = this.getVisiblePages(page, this.props.pages);

    this.setState({
      visiblePages: this.filterPages(visiblePages, this.props.pages)
    });

    this.props.onPageChange(page - 1);
  }

  applyPage(e) {
    if (e) {
      e.preventDefault();
    }
    const page = this.state.page;
    this.changePage(page === "" ? this.props.page : page);
  }

  render() {
    const {
      // Computed
      pages,
      // Props
      page,
      showPageSizeOptions,
      pageSizeOptions,
      pageSize,
      data,
      showPageJump,
      canPrevious,
      canNextFromData,
      onPageSizeChange,
      className,
      PreviousComponent = defaultButton,
      NextComponent = defaultButton,
      showTotalPages = true
    } = this.props;

    const canNext = this.props.canNextFromData
      ? data && data.length == pageSize
      : this.props.canNext;

    const { PageButtonComponent = defaultButton } = this.props;
    const { visiblePages } = this.state;
    const activePage = this.props.page + 1;
    return (
      <div
        className={classnames(className, "-pagination")}
        style={this.props.style}
      >
        <div className="-center">
          <span className="-pageInfo pagejumper">
            {this.props.pageText}{" "}
            {showPageJump ? (
              <div className="-pageJump">
                <input
                  type={this.state.page === "" ? "text" : "number"}
                  onChange={e => {
                    const val = e.target.value;
                    const page = val - 1;
                    if (val === "") {
                      return this.setState({ page: val });
                    }
                    this.setState({ page: this.getSafePage(page) });
                  }}
                  value={this.state.page === "" ? "" : this.state.page + 1}
                  onBlur={this.applyPage}
                  onKeyPress={e => {
                    if (e.which === 13 || e.keyCode === 13) {
                      this.applyPage();
                    }
                  }}
                />
              </div>
            ) : (
              <span className="-currentPage">{page + 1}</span>
            )}{" "}
            {showTotalPages ? (
              <React.Fragment>
                {this.props.ofText}{" "}
                <span className="-totalPages">{pages || 1}</span>
              </React.Fragment>
            ) : null}
          </span>
          {showPageSizeOptions && (
            <span className="select-wrap -pageSizeOptions">
              <span className="rowsPerPage"> Rows per page:</span>
              <select
                onChange={e => onPageSizeChange(Number(e.target.value))}
                value={pageSize}
              >
                {pageSizeOptions.map((option, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <option key={i} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <span className="rowsPerPage">
                {" "}
                {this.state.page * this.props.pageSize + 1} {"-"}
                {this.state.page * this.props.pageSize +
                  this.props.pageSize} of {this.props.sortedData.length}
              </span>
            </span>
          )}
        </div>

        <div className="Table__pagination">
          <div className="Table__prevPageWrapper">
            <PageButtonComponent
              className="Table__pageButton"
              onClick={() => {
                if (activePage === 1) return;
                this.changePage(activePage - 1);
              }}
              disabled={activePage === 1}
            >
              <i className="fas fa-chevron-left" />
            </PageButtonComponent>
          </div>
          <div className="Table__visiblePagesWrapper">
            {visiblePages.map((page, index, array) => {
              return (
                <PageButtonComponent
                  key={page}
                  className={
                    activePage === page
                      ? "Table__pageButton Table__pageButton--active"
                      : "Table__pageButton"
                  }
                  onClick={this.changePage.bind(null, page)}
                >
                  {array[index - 1] + 2 < page ? `...${page}` : page}
                </PageButtonComponent>
              );
            })}
          </div>
          <div className="Table__nextPageWrapper">
            <PageButtonComponent
              className="Table__pageButton"
              onClick={() => {
                if (activePage === this.props.pages) return;
                this.changePage(activePage + 1);
              }}
              disabled={activePage === this.props.pages}
            >
              <i className="fas fa-chevron-right" />
            </PageButtonComponent>
          </div>
        </div>
      </div>
    );
  }
}
