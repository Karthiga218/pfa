(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    182: function(e, t, a) {
      e.exports = a(429);
    },
    389: function(e, t, a) {},
    428: function(e, t, a) {},
    429: function(e, t, a) {
      "use strict";
      a.r(t);
      a(183);
      var n = a(0),
        l = a.n(n),
        r = a(58),
        c = a.n(r),
        o = (a(389), a(49)),
        s = a(70),
        i = function(e) {
          return l.a.createElement(
            "div",
            { style: { marginBottom: "80px" }, className: "container" },
            l.a.createElement(
              "nav",
              {
                className:
                  "navbar fixed-top  navbar-expand-sm navbar-dark bg-danger mb-3 p-0"
              },
              l.a.createElement(
                "div",
                { className: "container" },
                l.a.createElement(
                  "div",
                  { className: "  navbar-collapse" },
                  l.a.createElement(
                    "a",
                    { className: "navbar-left" },
                    l.a.createElement("img", {
                      className: "img-responsive",
                      src: "/pfa/images/logo.png"
                    })
                  ),
                  l.a.createElement(
                    "a",
                    { className: "navbar-left whitelogo" },
                    l.a.createElement("h1", null, "PFA")
                  )
                ),
                l.a.createElement(
                  "div",
                  { className: "container", style: { paddingRight: "0px" } },
                  l.a.createElement(
                    "ul",
                    { className: "navbar-nav" },
                    l.a.createElement(
                      "li",
                      { className: "nav-item" },
                      l.a.createElement(
                        o.b,
                        {
                          to: "/",
                          className: "nav-link",
                          exact: !0,
                          activeClassName: "active"
                        },
                        "Terminal Assignment"
                      )
                    ),
                    l.a.createElement(
                      "li",
                      { className: "nav-item" },
                      l.a.createElement(
                        o.b,
                        {
                          to: "/centralstations",
                          className: "nav-link",
                          activeClassName: "active"
                        },
                        "Central Stations"
                      )
                    ),
                    l.a.createElement(
                      "li",
                      { className: "nav-item" },
                      l.a.createElement(
                        o.b,
                        {
                          to: "/reports",
                          className: "nav-link",
                          activeClassName: "active"
                        },
                        "Reports"
                      )
                    )
                  ),
                  l.a.createElement(
                    "div",
                    { className: "profilediv" },
                    l.a.createElement(
                      "ul",
                      { className: "navbar-nav mr-auto" },
                      l.a.createElement(
                        "li",
                        { className: "nav-item" },
                        l.a.createElement(
                          "a",
                          { className: "nav-link" },
                          "Welcome John Doe"
                        )
                      ),
                      l.a.createElement(
                        "li",
                        { className: "nav-item" },
                        l.a.createElement("a", { className: "nav-link" }, "|")
                      ),
                      l.a.createElement(
                        "li",
                        { className: "nav-item" },
                        l.a.createElement(
                          "a",
                          { href: "/", className: "nav-link" },
                          "Logout"
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        },
        m = a(12),
        p = a(13),
        d = a(15),
        u = a(14),
        h = a(7),
        g = a(16),
        E = a(430),
        _ = (function(e) {
          function t(e) {
            var a;
            return (
              Object(m.a)(this, t),
              ((a = Object(d.a)(
                this,
                Object(u.a)(t).call(this, e)
              )).addNewTerminal = function(e) {
                a.props.history.push("/terminal/new");
              }),
              (a.addNewterminal = a.addNewTerminal.bind(Object(h.a)(a))),
              a
            );
          }
          return (
            Object(g.a)(t, e),
            Object(p.a)(t, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    "div",
                    { className: "container actionContainer" },
                    l.a.createElement(
                      E.a,
                      { color: "primary", onClick: this.addNewTerminal },
                      l.a.createElement("i", {
                        className: "fas fa-plus",
                        style: { marginRight: "5px" }
                      }),
                      " ",
                      "New"
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        y = Object(s.e)(_),
        f = (a(398), a(99)),
        b = a(28),
        v = a(4),
        C = a.n(v),
        N = function(e) {
          return l.a.createElement("button", e, e.children);
        },
        x = (function(e) {
          function t(e) {
            var a;
            return (
              Object(m.a)(this, t),
              ((a = Object(d.a)(
                this,
                Object(u.a)(t).call(this)
              )).filterPages = function(e, t) {
                return e.filter(function(e) {
                  return e <= t;
                });
              }),
              (a.getVisiblePages = function(e, t) {
                return t < 7
                  ? a.filterPages([1, 2, 3, 4, 5, 6], t)
                  : e % 5 >= 0 && e > 4 && e + 2 < t
                  ? [1, e - 1, e, e + 1, t]
                  : e % 5 >= 0 && e > 4 && e + 2 >= t
                  ? [1, t - 3, t - 2, t - 1, t]
                  : [1, 2, 3, 4, 5, t];
              }),
              (a.getSafePage = a.getSafePage.bind(Object(h.a)(a))),
              (a.changePage = a.changePage.bind(Object(h.a)(a))),
              (a.applyPage = a.applyPage.bind(Object(h.a)(a))),
              console.log(
                "visible pages = " +
                  e.pages +
                  "::::::::" +
                  a.getVisiblePages(null, e.pages)
              ),
              (a.state = {
                page: e.page,
                visiblePages: a.getVisiblePages(null, e.pages)
              }),
              a
            );
          }
          return (
            Object(g.a)(t, e),
            Object(p.a)(t, [
              {
                key: "componentWillReceiveProps",
                value: function(e) {
                  this.setState({ page: e.page }),
                    this.props.pages !== e.pages &&
                      this.setState({
                        visiblePages: this.getVisiblePages(null, e.pages)
                      }),
                    this.changePage(e.page + 1);
                }
              },
              {
                key: "getSafePage",
                value: function(e) {
                  return (
                    isNaN(e) && (e = this.props.page),
                    this.props.canNextFromData
                      ? e
                      : Math.min(Math.max(e, 0), this.props.pages - 1)
                  );
                }
              },
              {
                key: "changePage",
                value: function(e) {
                  var t = this.props.page + 1;
                  if ((console.log("pages=" + this.props.pageSize), e !== t)) {
                    var a = this.getVisiblePages(e, this.props.pages);
                    this.setState({
                      visiblePages: this.filterPages(a, this.props.pages)
                    }),
                      this.props.onPageChange(e - 1);
                  }
                }
              },
              {
                key: "applyPage",
                value: function(e) {
                  e && e.preventDefault();
                  var t = this.state.page;
                  this.changePage("" === t ? this.props.page : t);
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.props,
                    a = t.pages,
                    n = t.page,
                    r = t.showPageSizeOptions,
                    c = t.pageSizeOptions,
                    o = t.pageSize,
                    s = t.data,
                    i = t.showPageJump,
                    m = (t.canPrevious, t.canNextFromData, t.onPageSizeChange),
                    p = t.className,
                    d = (t.PreviousComponent,
                    t.NextComponent,
                    t.showTotalPages),
                    u = void 0 === d || d,
                    h = (this.props.canNextFromData
                      ? s && s.length
                      : this.props.canNext,
                    this.props.PageButtonComponent),
                    g = void 0 === h ? N : h,
                    E = this.state.visiblePages,
                    _ = this.props.page + 1;
                  return l.a.createElement(
                    "div",
                    {
                      className: C()(p, "-pagination"),
                      style: this.props.style
                    },
                    l.a.createElement(
                      "div",
                      { className: "-center" },
                      l.a.createElement(
                        "span",
                        { className: "-pageInfo pagejumper" },
                        this.props.pageText,
                        " ",
                        i
                          ? l.a.createElement(
                              "div",
                              { className: "-pageJump" },
                              l.a.createElement("input", {
                                type:
                                  "" === this.state.page ? "text" : "number",
                                onChange: function(t) {
                                  var a = t.target.value,
                                    n = a - 1;
                                  if ("" === a) return e.setState({ page: a });
                                  e.setState({ page: e.getSafePage(n) });
                                },
                                value:
                                  "" === this.state.page
                                    ? ""
                                    : this.state.page + 1,
                                onBlur: this.applyPage,
                                onKeyPress: function(t) {
                                  (13 !== t.which && 13 !== t.keyCode) ||
                                    e.applyPage();
                                }
                              })
                            )
                          : l.a.createElement(
                              "span",
                              { className: "-currentPage" },
                              n + 1
                            ),
                        " ",
                        u
                          ? l.a.createElement(
                              l.a.Fragment,
                              null,
                              this.props.ofText,
                              " ",
                              l.a.createElement(
                                "span",
                                { className: "-totalPages" },
                                a || 1
                              )
                            )
                          : null
                      ),
                      r &&
                        l.a.createElement(
                          "span",
                          { className: "select-wrap -pageSizeOptions" },
                          l.a.createElement(
                            "span",
                            { className: "rowsPerPage" },
                            " Rows per page:"
                          ),
                          l.a.createElement(
                            "select",
                            {
                              onChange: function(e) {
                                return m(Number(e.target.value));
                              },
                              value: o
                            },
                            c.map(function(e, t) {
                              return l.a.createElement(
                                "option",
                                { key: t, value: e },
                                e
                              );
                            })
                          ),
                          l.a.createElement(
                            "span",
                            { className: "rowsPerPage" },
                            " ",
                            this.state.page * this.props.pageSize + 1,
                            " ",
                            "-",
                            this.state.page * this.props.pageSize +
                              this.props.pageSize,
                            " of ",
                            this.props.sortedData.length
                          )
                        )
                    ),
                    l.a.createElement(
                      "div",
                      { className: "Table__pagination" },
                      l.a.createElement(
                        "div",
                        { className: "Table__prevPageWrapper" },
                        l.a.createElement(
                          g,
                          {
                            className: "Table__pageButton",
                            onClick: function() {
                              1 !== _ && e.changePage(_ - 1);
                            },
                            disabled: 1 === _
                          },
                          l.a.createElement("i", {
                            className: "fas fa-chevron-left"
                          })
                        )
                      ),
                      l.a.createElement(
                        "div",
                        { className: "Table__visiblePagesWrapper" },
                        E.map(function(t, a, n) {
                          return l.a.createElement(
                            g,
                            {
                              key: t,
                              className:
                                _ === t
                                  ? "Table__pageButton Table__pageButton--active"
                                  : "Table__pageButton",
                              onClick: e.changePage.bind(null, t)
                            },
                            n[a - 1] + 2 < t ? "...".concat(t) : t
                          );
                        })
                      ),
                      l.a.createElement(
                        "div",
                        { className: "Table__nextPageWrapper" },
                        l.a.createElement(
                          g,
                          {
                            className: "Table__pageButton",
                            onClick: function() {
                              _ !== e.props.pages && e.changePage(_ + 1);
                            },
                            disabled: _ === this.props.pages
                          },
                          l.a.createElement("i", {
                            className: "fas fa-chevron-right"
                          })
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        O = a(25),
        S = a(1),
        j = a.n(S),
        T = a(23),
        k = a.n(T),
        A = a(53),
        w = a(50),
        P = a.n(w),
        M = (function(e) {
          function t() {
            var e, a;
            Object(m.a)(this, t);
            for (var n = arguments.length, l = new Array(n), r = 0; r < n; r++)
              l[r] = arguments[r];
            return (
              ((a = Object(d.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(l))
              )).addFilterPlaceholder = function() {
                var e = document.querySelectorAll("div.rt-th > input");
                (e[0].placeholder = "Filter Ref..."),
                  (e[1].placeholder = "Filter Boro..."),
                  (e[2].placeholder = "Box..."),
                  (e[3].placeholder = "Filter Terminal..."),
                  (e[4].placeholder = "Filter Premise..."),
                  (e[5].placeholder = "Company");
              }),
              (a.componentDidMount = function() {
                a.props.getTerminals(), a.addFilterPlaceholder();
              }),
              a
            );
          }
          return (
            Object(g.a)(t, e),
            Object(p.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.props.terminals,
                    a = [
                      {
                        Header: "REF #",
                        accessor: "ref",
                        filterMethod: function(e, t) {
                          return Object(b.a)(t, String(e.value), {
                            keys: ["ref"]
                          });
                        },
                        filterAll: !0,
                        maxWidth: 100
                      },
                      {
                        Header: "BORO",
                        accessor: "borough",
                        filterMethod: function(e, t) {
                          return Object(b.a)(t, e.value, { keys: ["borough"] });
                        },
                        filterAll: !0,
                        maxWidth: 100
                      },
                      {
                        Header: "BOX",
                        accessor: "box",
                        filterMethod: function(e, t) {
                          return Object(b.a)(t, e.value, { keys: ["box"] });
                        },
                        filterAll: !0,
                        maxWidth: 100
                      },
                      {
                        Header: "TERMINALS",
                        id: "terminal",
                        accessor: function(e) {
                          return (
                            e.terminal1 + " " + e.terminal2 + " " + e.terminal3
                          );
                        },
                        filterMethod: function(e, t) {
                          return Object(b.a)(t, e.value, {
                            keys: ["terminal"]
                          });
                        },
                        filterAll: !0
                      },
                      {
                        Header: "PREMISE",
                        accessor: "address",
                        filterMethod: function(e, t) {
                          return Object(b.a)(t, e.value, { keys: ["address"] });
                        },
                        filterAll: !0,
                        maxWidth: 300
                      },
                      {
                        Header: "COMP",
                        accessor: "company",
                        filterMethod: function(e, t) {
                          return Object(b.a)(t, e.value, { keys: ["company"] });
                        },
                        filterAll: !0,
                        maxWidth: 100
                      }
                    ];
                  return l.a.createElement(
                    "div",
                    { className: "container tablecontainer" },
                    l.a.createElement(
                      "h4",
                      { className: "display-5 tabtitle" },
                      "Terminal Assignment List"
                    ),
                    l.a.createElement(f.a, {
                      filterable: !0,
                      data: t,
                      columns: a,
                      defaultPageSize: 10,
                      PaginationComponent: x,
                      className: "MyReactTableClass -striped -highlight",
                      getTrProps: function(a, n) {
                        return n && n.row
                          ? {
                              onClick: function(a) {
                                console.log(n.index),
                                  e.props.history.push(
                                    "/terminal/edit/" + t[n.index].ref
                                  );
                              }
                            }
                          : {};
                      }
                    })
                  );
                }
              }
            ]),
            t
          );
        })(n.Component);
      M.contextTypes = { router: j.a.object };
      var F = Object(s.e)(
          Object(O.b)(
            function(e) {
              return { terminals: e.terminals.terminals, page: 100 };
            },
            {
              getTerminals: function() {
                return (function() {
                  var e = Object(A.a)(
                    k.a.mark(function e(t) {
                      var a;
                      return k.a.wrap(function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                P.a.get("/pfa/json/terminals.json")
                              );
                            case 2:
                              (a = e.sent),
                                t({ type: "GET_TERMINALS", payload: a.data });
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                })();
              }
            }
          )(M)
        ),
        D = (function(e) {
          function t() {
            return (
              Object(m.a)(this, t),
              Object(d.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(g.a)(t, e),
            Object(p.a)(t, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    "div",
                    { className: "container table-responsive" },
                    l.a.createElement(y, null),
                    l.a.createElement(F, null)
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        R = a(26),
        B = a(431),
        I = a(432),
        L = a(433),
        W = a(434),
        z = a(435),
        H = a(436),
        J = a(437),
        V = (function(e) {
          function t(e) {
            var a;
            return (
              Object(m.a)(this, t),
              ((a = Object(d.a)(
                this,
                Object(u.a)(t).call(this, e)
              )).resetCard = function(e) {
                a.setState({
                  term_type_cd: "",
                  building_flag: "",
                  terminal_loc: "",
                  terminal_descr: ""
                });
                var t = a.props.onChange;
                t(a.props.id, "term_type_cd", ""),
                  t(a.props.id, "building_flag", ""),
                  t(a.props.id, "terminal_loc", ""),
                  t(a.props.id, "terminal_descr", "");
              }),
              (a.changeState = function(e) {
                e.target.name.startsWith("loc2")
                  ? a.setState({ building_flag: "O" })
                  : e.target.name.startsWith("loc")
                  ? a.setState({ building_flag: "E" })
                  : a.setState(Object(R.a)({}, e.target.name, e.target.value)),
                  (0, a.props.onChange)(
                    a.props.id,
                    e.target.name,
                    e.target.value
                  );
              }),
              (a.changeState = a.changeState.bind(Object(h.a)(a))),
              (a.resetCard = a.resetCard.bind(Object(h.a)(a))),
              (a.state = {
                id: "",
                t: "",
                term_type_cd: "",
                building_flag: "",
                terminal_loc: "",
                terminal_descr: "",
                terminal_types: []
              }),
              a
            );
          }
          return (
            Object(g.a)(t, e),
            Object(p.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  this.props.getTerminalTypes();
                }
              },
              {
                key: "componentWillReceiveProps",
                value: function(e, t) {
                  console.log("prop received."), console.log(e);
                  var a = e.terminal_types.terminal_type;
                  void 0 !== e &&
                    this.setState({
                      id: e.id,
                      t: e.t,
                      term_type_cd: e.term_type_cd,
                      building_flag: e.building_flag,
                      terminal_loc: e.terminal_loc,
                      terminal_descr: e.terminal_descr
                    }),
                    this.setState({ terminal_type: a });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.props,
                    a = t.isNew,
                    n = (t.id, this.state),
                    r = n.t,
                    c = (n.term_type_cd, n.building_flag),
                    o = n.terminal_loc;
                  n.terminal_descr, n.terminal_types;
                  return l.a.createElement(
                    B.a,
                    null,
                    l.a.createElement(
                      I.a,
                      { tag: "h6", className: "display-8" },
                      (function(e, t) {
                        return "true" === e
                          ? "New Terminal"
                          : "Terminal Number " + t;
                      })(a, r),
                      (function(e) {
                        return "false" === e
                          ? l.a.createElement(
                              "button",
                              {
                                type: "button",
                                className: "close",
                                "aria-label": "Close"
                              },
                              l.a.createElement(
                                "span",
                                { title: "Close", "aria-hidden": "true" },
                                "\xd7"
                              )
                            )
                          : "";
                      })(a),
                      (function(e, t) {
                        return "true" === e
                          ? l.a.createElement(
                              "button",
                              {
                                type: "button",
                                className: "close",
                                "aria-label": "Close",
                                title: "Reset",
                                style: {
                                  marginTop: "-2px",
                                  paddingRight: "10px"
                                },
                                onClick: t
                              },
                              l.a.createElement("i", {
                                style: { fontSize: "0.6em" },
                                title: "Reset",
                                className: "fas fa-redo"
                              })
                            )
                          : "";
                      })(a, this.resetCard)
                    ),
                    l.a.createElement(
                      L.a,
                      null,
                      l.a.createElement(
                        W.a,
                        null,
                        l.a.createElement(
                          "div",
                          null,
                          l.a.createElement(
                            W.a,
                            null,
                            l.a.createElement(
                              z.a,
                              { for: "terminalType" },
                              "Terminal Type"
                            ),
                            l.a.createElement(
                              H.a,
                              {
                                type: "select",
                                name: "term_type_cd",
                                id: "term_type_cd",
                                value: this.term_type_cd,
                                onChange: this.changeState
                              },
                              l.a.createElement(
                                "option",
                                null,
                                "Select Terminal Type"
                              ),
                              this.props.terminal_types.map(function(t, a) {
                                return l.a.createElement(
                                  "option",
                                  {
                                    key: t.lookup_code,
                                    value: t.display_text,
                                    selected:
                                      t.lookup_code === e.state.term_type_cd
                                        ? "selected"
                                        : ""
                                  },
                                  t.display_text
                                );
                              })
                            )
                          ),
                          l.a.createElement(H.a, {
                            type: "radio",
                            label: "Entire Building",
                            id: "loc." + r,
                            name: "loc." + r,
                            inline: !0,
                            style: { fontSize: "1em" },
                            checked: "E" === c,
                            onChange: this.changeState
                          }),
                          l.a.createElement(H.a, {
                            type: "radio",
                            label: "Other Location",
                            name: "loc2." + r,
                            id: "loc2." + r,
                            inline: !0,
                            onChange: this.changeState,
                            checked: "O" === c
                          })
                        )
                      ),
                      l.a.createElement(
                        W.a,
                        null,
                        l.a.createElement(
                          z.a,
                          { for: "location" },
                          "Location (Optional)"
                        ),
                        l.a.createElement(J.a, {
                          type: "text",
                          name: "terminal_loc",
                          id: "terminal_loc",
                          placeholder: "Location",
                          autoComplete: "nope",
                          value: o,
                          onChange: this.changeState
                        })
                      ),
                      l.a.createElement(
                        W.a,
                        null,
                        l.a.createElement(
                          z.a,
                          { for: "description" },
                          "Description (Optional)"
                        ),
                        l.a.createElement(J.a, {
                          type: "textarea",
                          name: "terminal_descr",
                          id: "terminal_descr",
                          value: this.state.terminal_descr,
                          onChange: this.changeState
                        })
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        K = Object(O.b)(
          function(e) {
            return { terminal_types: e.terminals.terminal_types };
          },
          {
            getTerminalTypes: function() {
              return (function() {
                var e = Object(A.a)(
                  k.a.mark(function e(t) {
                    var a;
                    return k.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              P.a.get("/pfa/json/terminal_types.json")
                            );
                          case 2:
                            (a = e.sent),
                              t({
                                type: "GET_TERMINAL_TYPES",
                                payload: a.data
                              });
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function(t) {
                  return e.apply(this, arguments);
                };
              })();
            }
          }
        )(V),
        Y = a(438),
        X = a(439),
        G = a(440),
        Z = a(441),
        U = a(447),
        q = a(442),
        Q = a(443),
        $ = a(444),
        ee = (function(e) {
          function t(e) {
            var a, n;
            return (
              Object(m.a)(this, t),
              ((n = Object(d.a)(
                this,
                Object(u.a)(t).call(this, e)
              )).componentDidMount = function() {
                n.props.addTerminal();
              }),
              (n.goBack = function(e) {
                e.preventDefault(), n.props.history.goBack();
              }),
              (n.submitForm = function(e) {
                console.log("hello"),
                  e.preventDefault(),
                  console.log(n.state),
                  console.log(n.props);
              }),
              (n.changeState = function(e) {
                n.setState(Object(R.a)({}, e.target.name, e.target.value));
              }),
              (n.changeTC = function(e, t, a) {
                var l = n.state.terminals_list;
                t.startsWith("loc2")
                  ? (l[e].building_flag = "O")
                  : t.startsWith("loc") && (l[e].building_flag = "E"),
                  "terminal_descr" === t && (l[e].terminal_descr = a),
                  "terminal_loc" === t && (l[e].terminal_loc = a),
                  "building_flag" === t && (l[e].building_flag = a),
                  "term_type_cd" === t && (l[e].term_type_cd = a),
                  n.setState({ terminals_list: l });
              }),
              (n.toggle = n.toggle.bind(Object(h.a)(n))),
              (n.submitForm = n.submitForm.bind(Object(h.a)(n))),
              (n.changeTC = n.changeTC.bind(Object(h.a)(n))),
              (n.changeState = n.changeState.bind(Object(h.a)(n))),
              (n.state = ((a = {
                modal: !1,
                unmountOnClose: !1,
                cModal: !1,
                fc_pfa_id: "",
                borough: "",
                box_nbr: "",
                subscriber_nm: "",
                bin: "",
                street_address: "",
                comp_name: "",
                terminals_list: [],
                terminal1: {
                  t: "",
                  term_type_cd: "",
                  building_flag: "",
                  terminal_loc: "",
                  terminal_desc: ""
                },
                terminal2: {
                  t: "",
                  term_type_cd: "",
                  building_flag: "",
                  terminal_loc: "",
                  terminal_desc: ""
                },
                terminal3: {
                  t: "",
                  term_type_cd: "",
                  building_flag: "",
                  terminal_loc: "",
                  terminal_desc: ""
                },
                comment: ""
              }),
              Object(R.a)(a, "comp_name", ""),
              Object(R.a)(a, "aka", ""),
              a)),
              n
            );
          }
          return (
            Object(g.a)(t, e),
            Object(p.a)(t, [
              {
                key: "toggle",
                value: function() {
                  this.setState(function(e) {
                    return { modal: !e.modal };
                  });
                }
              },
              {
                key: "componentWillReceiveProps",
                value: function(e, t) {
                  console.log("component will receive......");
                  var a = e.terminal,
                    n = a.fc_pfa_id,
                    l = a.borough,
                    r = a.box_nbr,
                    c = a.subscriber_nm,
                    o = a.bin,
                    s = a.street_address,
                    i = a.comp_name,
                    m = a.terminals_list,
                    p = (a.terminal1, a.terminal2, a.terminal3, a.comment),
                    d = a.aka;
                  this.setState({
                    terminal1: m[0],
                    terminal2: m[1],
                    terminal3: m[2]
                  }),
                    this.setState({
                      fc_pfa_id: n,
                      borough: l,
                      box_nbr: r,
                      subscriber_nm: c,
                      bin: o,
                      street_address: s,
                      comp_name: i,
                      terminals_list: m,
                      comment: p,
                      aka: d
                    });
                }
              },
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    Y.a,
                    { style: { padding: "15px 0px" } },
                    l.a.createElement(
                      "div",
                      { className: "card" },
                      l.a.createElement(
                        "div",
                        { className: "card-header" },
                        l.a.createElement(
                          "h4",
                          { className: "display-6" },
                          "New Terminal Assignment"
                        )
                      ),
                      l.a.createElement(
                        "div",
                        { className: "card-body" },
                        l.a.createElement(
                          X.a,
                          null,
                          l.a.createElement(
                            G.a,
                            null,
                            l.a.createElement(
                              Z.a,
                              { md: 2, style: { paddingRight: "0px" } },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(
                                  z.a,
                                  { for: "borough" },
                                  "Borough"
                                ),
                                l.a.createElement(
                                  J.a,
                                  {
                                    style: { borderRadius: "0px" },
                                    type: "select",
                                    name: "type",
                                    id: "typeT"
                                  },
                                  l.a.createElement("option", null, "Borough"),
                                  l.a.createElement(
                                    "option",
                                    null,
                                    "Manhattan"
                                  ),
                                  l.a.createElement("option", null, "Queens"),
                                  l.a.createElement("option", null, "Brooklyn"),
                                  l.a.createElement("option", null, "Bronx"),
                                  l.a.createElement(
                                    "option",
                                    null,
                                    "Staten Island"
                                  )
                                )
                              )
                            ),
                            l.a.createElement(
                              Z.a,
                              { md: 1, style: { padding: "0px" } },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(
                                  z.a,
                                  { for: "houseNo" },
                                  "House No."
                                ),
                                l.a.createElement(J.a, {
                                  type: "text",
                                  name: "houseNo",
                                  id: "houseNo",
                                  placeholder: "House No.",
                                  style: { borderRadius: "0px", width: "100px" }
                                })
                              )
                            ),
                            l.a.createElement(
                              Z.a,
                              { md: 4, style: { padding: "0px" } },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(
                                  z.a,
                                  { for: "street" },
                                  "Street"
                                ),
                                l.a.createElement(J.a, {
                                  type: "text",
                                  name: "street",
                                  id: "street",
                                  placeholder: "Enter Street",
                                  autoComplete: "off",
                                  style: { borderRadius: "0px" }
                                })
                              )
                            ),
                            l.a.createElement(
                              Z.a,
                              {
                                md: 1,
                                style: { paddingLeft: "0px", marginTop: "31px" }
                              },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(
                                  E.a,
                                  {
                                    style: {
                                      borderTopLeftRadius: "0px",
                                      borderBottomLeftRadius: "0px"
                                    },
                                    color: "primary"
                                  },
                                  "Verify"
                                )
                              ),
                              " "
                            ),
                            l.a.createElement(
                              Z.a,
                              { md: 2 },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(
                                  z.a,
                                  { for: "boxno" },
                                  "Box Number"
                                ),
                                l.a.createElement(J.a, {
                                  type: "text",
                                  name: "boxno",
                                  id: "boxno",
                                  placeholder: "Box Number",
                                  disabled: !0
                                })
                              )
                            ),
                            l.a.createElement(
                              Z.a,
                              { md: 1 },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(
                                  z.a,
                                  { for: "houseNo" },
                                  "BIN"
                                ),
                                l.a.createElement(J.a, {
                                  type: "text",
                                  name: "bin",
                                  id: "bin",
                                  placeholder: "BIN",
                                  disabled: !0
                                })
                              )
                            )
                          ),
                          l.a.createElement(
                            G.a,
                            null,
                            l.a.createElement(
                              Z.a,
                              { md: 5 },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(
                                  z.a,
                                  { for: "company" },
                                  "Company"
                                ),
                                l.a.createElement(
                                  J.a,
                                  {
                                    style: { borderRadius: "0px" },
                                    type: "select",
                                    name: "comp_name",
                                    id: "comp_name",
                                    value: this.state.comp_name,
                                    onChange: this.changeState
                                  },
                                  l.a.createElement(
                                    "option",
                                    null,
                                    "Select Company"
                                  ),
                                  l.a.createElement(
                                    "option",
                                    null,
                                    "Statewide Fire Corporation"
                                  ),
                                  l.a.createElement(
                                    "option",
                                    null,
                                    "ADT Security Services"
                                  ),
                                  l.a.createElement(
                                    "option",
                                    null,
                                    "NY Security ADT"
                                  ),
                                  l.a.createElement(
                                    "option",
                                    null,
                                    "AFA Protective Systems Inc."
                                  ),
                                  l.a.createElement(
                                    "option",
                                    null,
                                    "Distinct Central Solution"
                                  )
                                )
                              )
                            ),
                            l.a.createElement(
                              Z.a,
                              { md: 2 },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(z.a, { for: "aka" }, "AKA"),
                                l.a.createElement(
                                  J.a,
                                  {
                                    style: { borderRadius: "0px" },
                                    type: "select",
                                    name: "aka",
                                    id: "aka",
                                    value: this.state.aka,
                                    onChange: this.changeState
                                  },
                                  l.a.createElement(
                                    "option",
                                    null,
                                    "Select AKA"
                                  ),
                                  l.a.createElement("option", null, "SFC"),
                                  l.a.createElement("option", null, "ADT"),
                                  l.a.createElement("option", null, "NYADT"),
                                  l.a.createElement("option", null, "AFA"),
                                  l.a.createElement("option", null, "DCS")
                                )
                              )
                            ),
                            l.a.createElement(
                              Z.a,
                              { md: 5 },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(
                                  z.a,
                                  { for: "boxno" },
                                  "Premise"
                                ),
                                l.a.createElement(J.a, {
                                  type: "text",
                                  name: "street_address",
                                  id: "street_address",
                                  placeholder: "Premise",
                                  value: this.state.street_address,
                                  onChange: this.changeState
                                })
                              )
                            )
                          ),
                          l.a.createElement(
                            G.a,
                            null,
                            l.a.createElement(
                              Z.a,
                              null,
                              l.a.createElement(K, {
                                id: "0",
                                onSubmit: this.onFormSubmit,
                                isNew: "true",
                                t: this.state.terminal1.t,
                                term_type_cd: this.state.terminal1.term_type_cd,
                                building_flag: this.state.terminal1
                                  .building_flag,
                                terminal_loc: this.state.terminal1.terminal_loc,
                                terminal_descr: this.state.terminal1
                                  .terminal_descr,
                                onChange: this.changeTC
                              })
                            ),
                            l.a.createElement(
                              Z.a,
                              null,
                              l.a.createElement(K, {
                                id: "1",
                                onSubmit: this.onFormSubmit,
                                isNew: "true",
                                t: this.state.terminal2.t,
                                term_type_cd: this.state.terminal2.term_type_cd,
                                building_flag: this.state.terminal2
                                  .building_flag,
                                terminal_loc: this.state.terminal2.terminal_loc,
                                terminal_descr: this.state.terminal2
                                  .terminal_descr,
                                onChange: this.changeTC
                              })
                            ),
                            l.a.createElement(
                              Z.a,
                              null,
                              l.a.createElement(K, {
                                id: "2",
                                onSubmit: this.onFormSubmit,
                                isNew: "true",
                                t: this.state.terminal3.t,
                                term_type_cd: this.state.terminal3.term_type_cd,
                                building_flag: this.state.terminal3
                                  .building_flag,
                                terminal_loc: this.state.terminal3.terminal_loc,
                                terminal_descr: this.state.terminal3
                                  .terminal_descr,
                                onChange: this.changeTC
                              })
                            )
                          )
                        ),
                        l.a.createElement(
                          G.a,
                          { style: { marginTop: "15px" } },
                          l.a.createElement(
                            Z.a,
                            { md: 12 },
                            l.a.createElement(
                              W.a,
                              null,
                              l.a.createElement(
                                z.a,
                                { for: "comment" },
                                "Comment"
                              ),
                              l.a.createElement(J.a, {
                                type: "text",
                                name: "comment",
                                id: "comment",
                                placeholder: "Comment",
                                value: this.state.comment,
                                onChange: this.changeState
                              })
                            )
                          )
                        ),
                        l.a.createElement(
                          G.a,
                          null,
                          l.a.createElement(
                            Z.a,
                            null,
                            l.a.createElement(
                              E.a,
                              {
                                style: { minWidth: "100px", float: "right" },
                                color: "primary",
                                onClick: this.submitForm
                              },
                              l.a.createElement("i", {
                                className: "far fa-save"
                              }),
                              "  ",
                              "Save"
                            ),
                            l.a.createElement(
                              E.a,
                              {
                                style: {
                                  paddingLeft: "20px",
                                  paddingRight: "20px",
                                  float: "right",
                                  marginRight: "20px"
                                },
                                color: "secondary",
                                outline: !0,
                                onClick: this.goBack
                              },
                              "Back"
                            )
                          )
                        )
                      )
                    ),
                    l.a.createElement(
                      U.a,
                      {
                        isOpen: this.state.modal,
                        toggle: this.toggle,
                        className: this.props.className,
                        unmountOnClose: this.state.unmountOnClose
                      },
                      l.a.createElement(
                        q.a,
                        { toggle: this.toggle },
                        "Terminal Cancellation"
                      ),
                      l.a.createElement(
                        Q.a,
                        null,
                        l.a.createElement(
                          z.a,
                          { for: "reason" },
                          "Please provide a reason for the terminal cancellation."
                        ),
                        l.a.createElement(J.a, {
                          type: "textarea",
                          placeholder: "Enter reason",
                          rows: 5
                        })
                      ),
                      l.a.createElement(
                        $.a,
                        null,
                        l.a.createElement(
                          E.a,
                          {
                            outline: !0,
                            color: "secondary",
                            onClick: this.toggle
                          },
                          "Close"
                        ),
                        " ",
                        l.a.createElement(
                          E.a,
                          { color: "primary", onClick: this.toggle },
                          "Cancel Terminal"
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        te = Object(O.b)(
          function(e) {
            return { terminal: e.terminals.terminal };
          },
          {
            addTerminal: function() {
              return (function() {
                var e = Object(A.a)(
                  k.a.mark(function e(t) {
                    var a;
                    return k.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              P.a.get("/pfa/json/newterminal.json")
                            );
                          case 2:
                            (a = e.sent),
                              t({ type: "ADD_TERMINAL", payload: a.data });
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function(t) {
                  return e.apply(this, arguments);
                };
              })();
            }
          }
        )(ee),
        ae = (function(e) {
          function t(e) {
            var a;
            return (
              Object(m.a)(this, t),
              ((a = Object(d.a)(
                this,
                Object(u.a)(t).call(this, e)
              )).addNewCompany = function(e) {
                a.props.history.push("/company/new");
              }),
              (a.addNewCompany = a.addNewCompany.bind(Object(h.a)(a))),
              a
            );
          }
          return (
            Object(g.a)(t, e),
            Object(p.a)(t, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    "div",
                    { className: "container actionContainer" },
                    l.a.createElement(
                      E.a,
                      {
                        color: "primary",
                        to: "/terminal/new",
                        type: "button",
                        onClick: this.addNewCompany
                      },
                      l.a.createElement("i", {
                        className: "fas fa-plus",
                        style: { marginRight: "5px" }
                      }),
                      " ",
                      "New"
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        ne = Object(s.e)(ae),
        le = (function(e) {
          function t(e) {
            var a;
            return (
              Object(m.a)(this, t),
              ((a = Object(d.a)(
                this,
                Object(u.a)(t).call(this, e)
              )).addFilterPlaceholder = function() {
                var e = document.querySelectorAll("div.rt-th > input");
                console.log("length=" + e.length),
                  (e[0].placeholder = "Filter Code..."),
                  (e[1].placeholder = "Filter Aka..."),
                  (e[2].placeholder = "Filter Name..."),
                  (e[3].placeholder = "Filter Phone..."),
                  (e[4].placeholder = "Filter Contact..."),
                  (e[5].placeholder = "Filter Ann.Date...");
              }),
              (a.componentDidMount = function() {
                a.props.getCompanies(), a.addFilterPlaceholder();
              }),
              (a.state = { showList: !0, showDetail: !1 }),
              a
            );
          }
          return (
            Object(g.a)(t, e),
            Object(p.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.props.companies,
                    a = [
                      {
                        Header: "CODE",
                        accessor: "cs_comp_code",
                        filterMethod: function(e, t) {
                          return Object(b.a)(t, String(e.value), {
                            keys: ["cs_comp_code"]
                          });
                        },
                        filterAll: !0,
                        width: 100
                      },
                      {
                        Header: "AKA",
                        accessor: "cs_short_name",
                        filterMethod: function(e, t) {
                          return Object(b.a)(t, e.value, {
                            keys: ["cs_short_name"]
                          });
                        },
                        filterAll: !0,
                        width: 125
                      },
                      {
                        Header: "NAME",
                        accessor: "cs_comp_name",
                        filterMethod: function(e, t) {
                          return Object(b.a)(t, e.value, {
                            keys: ["cs_comp_name"]
                          });
                        },
                        filterAll: !0
                      },
                      {
                        Header: "PHONE",
                        accessor: "cs_phone1",
                        filterMethod: function(e, t) {
                          return Object(b.a)(t, e.value, {
                            keys: ["cs_phone1"]
                          });
                        },
                        filterAll: !0
                      },
                      {
                        Header: "CONTACT",
                        accessor: "cs_contact1",
                        filterMethod: function(e, t) {
                          return Object(b.a)(t, e.value, {
                            keys: ["cs_contact1"]
                          });
                        },
                        filterAll: !0
                      },
                      {
                        Header: "ANNIV.",
                        accessor: "cs_anniversary_date",
                        filterMethod: function(e, t) {
                          return Object(b.a)(t, e.value, {
                            keys: ["cs_anniversary_date"]
                          });
                        },
                        filterAll: !0,
                        width: 160
                      }
                    ];
                  return l.a.createElement(
                    "div",
                    null,
                    this.state.showList &&
                      l.a.createElement(
                        "div",
                        { className: "container tablecontainer" },
                        l.a.createElement(
                          "h4",
                          { className: "display-5 tabtitle" },
                          "Central Station List"
                        ),
                        l.a.createElement(f.a, {
                          filterable: !0,
                          data: t,
                          columns: a,
                          defaultPageSize: 10,
                          PaginationComponent: x,
                          className: "-striped -highlight",
                          getTrProps: function(a, n) {
                            return n && n.row
                              ? {
                                  onClick: function(a) {
                                    console.log(n.index),
                                      e.props.history.push(
                                        "/company/edit/" +
                                          t[n.index].cs_comp_code
                                      );
                                  }
                                }
                              : {};
                          }
                        })
                      )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component);
      le.contextTypes = { router: j.a.object };
      var re = Object(s.e)(
          Object(O.b)(
            function(e) {
              return {
                companies: e.companies.companies,
                showDetail: e.companies.showDetail,
                showList: e.companies.showList
              };
            },
            {
              getCompanies: function() {
                return (function() {
                  var e = Object(A.a)(
                    k.a.mark(function e(t) {
                      var a;
                      return k.a.wrap(function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                P.a.get("/pfa/json/companies.json")
                              );
                            case 2:
                              (a = e.sent),
                                t({ type: "GET_COMPANIES", payload: a.data });
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                })();
              }
            }
          )(le)
        ),
        ce = (function(e) {
          function t() {
            return (
              Object(m.a)(this, t),
              Object(d.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(g.a)(t, e),
            Object(p.a)(t, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    "div",
                    { className: "container table-responsive" },
                    l.a.createElement(ne, null),
                    l.a.createElement(re, null)
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        oe = (function(e) {
          function t() {
            return (
              Object(m.a)(this, t),
              Object(d.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(g.a)(t, e),
            Object(p.a)(t, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    "div",
                    { className: "container table-responsive" },
                    l.a.createElement(
                      "h4",
                      { className: "display-4" },
                      "Reports placeholder"
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        se = (function(e) {
          function t() {
            return (
              Object(m.a)(this, t),
              Object(d.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(g.a)(t, e),
            Object(p.a)(t, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    "div",
                    { className: "container" },
                    l.a.createElement(
                      "h1",
                      { className: "display-4" },
                      l.a.createElement(
                        "span",
                        { style: { color: "red" } },
                        "404"
                      ),
                      " Page Not Found"
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      { className: "lead" },
                      "Sorry, that page does not exist."
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        ie = a(43),
        me = a(181),
        pe = a(27),
        de = { terminals: [], terminal: {}, terminal_types: [] },
        ue = { companies: [""], company: {}, showList: !0, showDetail: !1 },
        he = Object(ie.c)({
          terminals: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : de,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "GET_TERMINALS":
                return Object(pe.a)({}, e, { terminals: t.payload });
              case "EDIT_TERMINAL":
              case "ADD_TERMINAL":
                return Object(pe.a)({}, e, { terminal: t.payload });
              case "GET_TERMINAL_TYPES":
                return Object(pe.a)({}, e, { terminal_types: t.payload });
              default:
                return e;
            }
          },
          companies: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : ue,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (
              (console.log("called with state=" + e + ":" + t.type), t.type)
            ) {
              case "GET_COMPANIES":
                return Object(pe.a)({}, e, { companies: t.payload.items });
              case "EDIT_COMPANY":
                return Object(pe.a)({}, e, { company: t.payload });
              default:
                return e;
            }
          }
        }),
        ge = {},
        Ee = [me.a],
        _e =
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.navigator.userAgent.includes("Chrome")
            ? Object(ie.e)(
                he,
                ge,
                Object(ie.d)(
                  ie.a.apply(void 0, Ee),
                  window.__REDUX_DEVTOOLS_EXTENSION__ &&
                    window.__REDUX_DEVTOOLS_EXTENSION__()
                )
              )
            : Object(ie.e)(he, ge, Object(ie.d)(ie.a.apply(void 0, Ee))),
        ye = (a(427),
        a(428),
        (function(e) {
          function t(e) {
            var a;
            return (
              Object(m.a)(this, t),
              ((a = Object(d.a)(
                this,
                Object(u.a)(t).call(this, e)
              )).componentDidMount = function() {}),
              (a.goBack = function(e) {
                e.preventDefault(), a.props.history.goBack();
              }),
              (a.cancelTerminal = function(e) {
                e.preventDefault(), console.log("cancel");
              }),
              (a.changeState = function(e) {
                a.setState(Object(R.a)({}, e.target.name, e.target.value));
              }),
              (a.submitForm = function(e) {
                console.log("hello"), e.preventDefault(), console.log(a.state);
              }),
              (a.submitForm = a.submitForm.bind(Object(h.a)(a))),
              (a.state = {
                cs_comp_name: "",
                cs_short_name: "",
                cs_anniversary_date: "",
                cs_comments: "",
                cs_contact1: "",
                cs_contact2: "",
                cs_phone1: "",
                cs_phone2: "",
                cs_address1: "",
                cs_city: "",
                cs_zipcode: "",
                cs_state: "",
                cs_email: ""
              }),
              a
            );
          }
          return (
            Object(g.a)(t, e),
            Object(p.a)(t, [
              {
                key: "componentWillReceiveProps",
                value: function(e, t) {
                  var a = e.company,
                    n = a.cs_comp_name,
                    l = a.cs_short_name,
                    r = a.cs_anniversary_date,
                    c = a.cs_comments,
                    o = a.cs_contact1,
                    s = a.cs_contact2,
                    i = a.cs_phone1,
                    m = a.cs_phone2,
                    p = a.cs_city,
                    d = a.cs_state,
                    u = a.cs_address1,
                    h = a.cs_zipcode,
                    g = a.cs_email;
                  this.setState({
                    cs_comp_name: n,
                    cs_short_name: l,
                    cs_anniversary_date: r,
                    cs_comments: c,
                    cs_contact1: o,
                    cs_contact2: s,
                    cs_phone1: i,
                    cs_phone2: m,
                    cs_city: p,
                    cs_state: d,
                    cs_address1: u,
                    cs_zipcode: h,
                    cs_email: g
                  });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.state,
                    t = e.cs_comp_name,
                    a = e.cs_short_name,
                    n = e.cs_anniversary_date,
                    r = e.cs_comments,
                    c = e.cs_contact1,
                    o = e.cs_contact2,
                    s = e.cs_phone1,
                    i = e.cs_phone2,
                    m = e.cs_city,
                    p = e.cs_state,
                    d = e.cs_address1,
                    u = e.cs_zipcode,
                    h = e.cs_email;
                  return l.a.createElement(
                    Y.a,
                    { style: { padding: "15px 0px" } },
                    l.a.createElement(
                      "div",
                      { className: "card" },
                      l.a.createElement(
                        "div",
                        { className: "card-header" },
                        l.a.createElement(
                          "h4",
                          { className: "display-6" },
                          "New Company Details "
                        )
                      ),
                      l.a.createElement(
                        "div",
                        { className: "card-body" },
                        l.a.createElement(
                          X.a,
                          { onSubmit: this.submitForm },
                          l.a.createElement(
                            G.a,
                            null,
                            l.a.createElement(
                              Z.a,
                              { md: 5, style: {} },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(z.a, { for: "name" }, "Name"),
                                l.a.createElement(J.a, {
                                  type: "text",
                                  name: "cs_comp_name",
                                  id: "cs_comp_name",
                                  placeholder: "Name",
                                  style: {},
                                  value: t,
                                  onChange: this.changeState
                                })
                              )
                            ),
                            l.a.createElement(
                              Z.a,
                              { md: 1, style: {} },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(z.a, { for: "aka" }, "AKA"),
                                l.a.createElement(J.a, {
                                  type: "text",
                                  name: "cs_short_name",
                                  id: "cs_short_name",
                                  placeholder: "AKA",
                                  style: {},
                                  value: a,
                                  onChange: this.changeState
                                })
                              )
                            ),
                            l.a.createElement(
                              Z.a,
                              { md: 3, style: {} },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(
                                  z.a,
                                  { for: "aka" },
                                  "Anniversary Date"
                                ),
                                l.a.createElement(J.a, {
                                  type: "date",
                                  name: "cs_anniversary_date",
                                  id: "cs_anniversary_date",
                                  placeholder: "Anniversary Date",
                                  style: {},
                                  value: n,
                                  onChange: this.changeState
                                })
                              )
                            ),
                            l.a.createElement(
                              Z.a,
                              { md: 3, style: { padding: "0px" } },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(
                                  z.a,
                                  { for: "aka" },
                                  "Email Address"
                                ),
                                l.a.createElement(J.a, {
                                  type: "text",
                                  name: "cs_email",
                                  id: "cs_email",
                                  placeholder: "Email Address",
                                  style: {},
                                  value: h,
                                  onChange: this.changeState
                                })
                              )
                            )
                          ),
                          l.a.createElement(
                            G.a,
                            null,
                            l.a.createElement(
                              Z.a,
                              { md: 6, style: {} },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(
                                  z.a,
                                  { for: "address" },
                                  "Address"
                                ),
                                l.a.createElement(J.a, {
                                  type: "text",
                                  name: "cs_address1",
                                  id: "cs_address1",
                                  placeholder: "Address",
                                  style: {},
                                  value: d,
                                  onChange: this.changeState
                                })
                              )
                            ),
                            l.a.createElement(
                              Z.a,
                              { md: 3, style: {} },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(z.a, { for: "city" }, "City"),
                                l.a.createElement(J.a, {
                                  type: "text",
                                  name: "cs_city",
                                  id: "cs_city",
                                  placeholder: "City",
                                  style: {},
                                  value: m,
                                  onChange: this.changeState
                                })
                              )
                            ),
                            l.a.createElement(
                              Z.a,
                              { md: 1, style: {} },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(
                                  z.a,
                                  { for: "state" },
                                  "State"
                                ),
                                l.a.createElement(
                                  J.a,
                                  {
                                    style: { borderRadius: "0px" },
                                    type: "select",
                                    name: "cs_state",
                                    id: "cs_state",
                                    value: p,
                                    onChange: this.changeState
                                  },
                                  l.a.createElement("option", null, "NY"),
                                  l.a.createElement("option", null, "NJ"),
                                  l.a.createElement("option", null, "FL"),
                                  l.a.createElement("option", null, "TX")
                                )
                              )
                            ),
                            l.a.createElement(
                              Z.a,
                              { md: 2, style: {} },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(
                                  z.a,
                                  { for: "city" },
                                  "Zipcode"
                                ),
                                l.a.createElement(J.a, {
                                  type: "text",
                                  name: "cs_zipcode",
                                  id: "cs_zipcode",
                                  placeholder: "Zipcode",
                                  style: {},
                                  value: u,
                                  onChange: this.changeState
                                })
                              )
                            )
                          ),
                          l.a.createElement(
                            G.a,
                            null,
                            l.a.createElement(
                              Z.a,
                              { md: 3, style: {} },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(
                                  z.a,
                                  { for: "city" },
                                  "Contact 1"
                                ),
                                l.a.createElement(J.a, {
                                  type: "text",
                                  name: "cs_contact1",
                                  id: "cs_contact1",
                                  placeholder: "Contact",
                                  style: {},
                                  value: c,
                                  onChange: this.changeState
                                })
                              )
                            ),
                            l.a.createElement(
                              Z.a,
                              { md: 3, style: {} },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(
                                  z.a,
                                  { for: "city" },
                                  "Phone Number"
                                ),
                                l.a.createElement(J.a, {
                                  type: "text",
                                  name: "cs_phone1",
                                  id: "cs_phone1",
                                  placeholder: "Phone Number",
                                  style: {},
                                  value: s,
                                  onChange: this.changeState
                                })
                              )
                            ),
                            l.a.createElement(
                              Z.a,
                              { md: 3, style: {} },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(
                                  z.a,
                                  { for: "city" },
                                  "Contact 2"
                                ),
                                l.a.createElement(J.a, {
                                  type: "text",
                                  name: "cs_contact2",
                                  id: "cs_contact2",
                                  placeholder: "Contact",
                                  style: {},
                                  value: o,
                                  onChange: this.changeState
                                })
                              )
                            ),
                            l.a.createElement(
                              Z.a,
                              { md: 3, style: {} },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(
                                  z.a,
                                  { for: "phonenumber" },
                                  "Phone Number"
                                ),
                                l.a.createElement(J.a, {
                                  type: "text",
                                  name: "cs_phone2",
                                  id: "cs_phone2",
                                  placeholder: "Phone Number",
                                  style: {},
                                  value: i,
                                  onChange: this.changeState
                                })
                              )
                            )
                          ),
                          l.a.createElement(
                            G.a,
                            null,
                            l.a.createElement(
                              Z.a,
                              { md: 12 },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(
                                  z.a,
                                  { for: "comment" },
                                  "Comment"
                                ),
                                l.a.createElement(J.a, {
                                  type: "text",
                                  name: "comment",
                                  id: "comment",
                                  placeholder: "Comment",
                                  value: r,
                                  onChange: this.changeState
                                })
                              )
                            )
                          ),
                          l.a.createElement(
                            G.a,
                            null,
                            l.a.createElement(
                              Z.a,
                              null,
                              l.a.createElement(
                                E.a,
                                {
                                  style: { minWidth: "100px", float: "right" },
                                  color: "primary"
                                },
                                l.a.createElement("i", {
                                  className: "far fa-save"
                                }),
                                "  ",
                                "Save"
                              ),
                              l.a.createElement(
                                E.a,
                                {
                                  style: {
                                    paddingLeft: "20px",
                                    paddingRight: "20px",
                                    float: "right",
                                    marginRight: "20px"
                                  },
                                  color: "secondary",
                                  outline: !0,
                                  onClick: this.goBack
                                },
                                "Back"
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component)),
        fe = a(445),
        be = (function(e) {
          function t(e) {
            var a;
            return (
              Object(m.a)(this, t),
              ((a = Object(d.a)(
                this,
                Object(u.a)(t).call(this, e)
              )).componentDidMount = function() {
                var e = a.props.match.params.id;
                a.props.editCompany(e);
              }),
              (a.goBack = function(e) {
                e.preventDefault(), a.props.history.goBack();
              }),
              (a.changeState = function(e) {
                a.setState(Object(R.a)({}, e.target.name, e.target.value));
              }),
              (a.submitForm = function(e) {
                console.log("hello"), e.preventDefault(), console.log(a.state);
              }),
              (a.submitForm = a.submitForm.bind(Object(h.a)(a))),
              (a.cToggle = a.cToggle.bind(Object(h.a)(a))),
              (a.toggle = a.toggle.bind(Object(h.a)(a))),
              (a.state = {
                cModal: !1,
                modal: !1,
                cs_comp_name: "",
                cs_short_name: "",
                cs_anniversary_date: "",
                cs_comments: "",
                cs_contact1: "",
                cs_contact2: "",
                cs_phone1: "",
                cs_phone2: "",
                cs_address1: "",
                cs_city: "",
                cs_zipcode: "",
                cs_state: "",
                cs_email: ""
              }),
              a
            );
          }
          return (
            Object(g.a)(t, e),
            Object(p.a)(t, [
              {
                key: "componentWillReceiveProps",
                value: function(e, t) {
                  var a = e.company,
                    n = a.cs_comp_name,
                    l = a.cs_short_name,
                    r = a.cs_anniversary_date,
                    c = a.cs_comments,
                    o = a.cs_contact1,
                    s = a.cs_contact2,
                    i = a.cs_phone1,
                    m = a.cs_phone2,
                    p = a.cs_city,
                    d = a.cs_state,
                    u = a.cs_address1,
                    h = a.cs_zipcode,
                    g = a.cs_email;
                  this.setState({
                    cs_comp_name: n,
                    cs_short_name: l,
                    cs_anniversary_date: r,
                    cs_comments: c,
                    cs_contact1: o,
                    cs_contact2: s,
                    cs_phone1: i,
                    cs_phone2: m,
                    cs_city: p,
                    cs_state: d,
                    cs_address1: u,
                    cs_zipcode: h,
                    cs_email: g
                  });
                }
              },
              {
                key: "toggle",
                value: function() {
                  this.setState(function(e) {
                    return { modal: !e.modal };
                  });
                }
              },
              {
                key: "cToggle",
                value: function() {
                  this.setState(function(e) {
                    return { cModal: !e.cModal };
                  });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.state,
                    t = e.cs_comp_name,
                    a = e.cs_short_name,
                    n = e.cs_anniversary_date,
                    r = e.cs_comments,
                    c = e.cs_contact1,
                    o = e.cs_contact2,
                    s = e.cs_phone1,
                    i = e.cs_phone2,
                    m = e.cs_city,
                    p = e.cs_state,
                    d = e.cs_address1,
                    u = e.cs_zipcode,
                    h = e.cs_email;
                  return l.a.createElement(
                    Y.a,
                    { style: { padding: "15px 0px" } },
                    l.a.createElement(
                      "div",
                      { className: "card" },
                      l.a.createElement(
                        "div",
                        { className: "card-header" },
                        l.a.createElement(
                          "h4",
                          { className: "display-6" },
                          "Company Details - ",
                          a,
                          " "
                        )
                      ),
                      l.a.createElement(
                        "div",
                        { className: "card-body" },
                        l.a.createElement(
                          X.a,
                          { onSubmit: this.submitForm },
                          l.a.createElement(
                            G.a,
                            null,
                            l.a.createElement(
                              Z.a,
                              { md: 5, style: {} },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(z.a, { for: "name" }, "Name"),
                                l.a.createElement(J.a, {
                                  type: "text",
                                  name: "cs_comp_name",
                                  id: "cs_comp_name",
                                  placeholder: "Name",
                                  style: {},
                                  value: t,
                                  onChange: this.changeState
                                })
                              )
                            ),
                            l.a.createElement(
                              Z.a,
                              { md: 1, style: {} },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(z.a, { for: "aka" }, "AKA"),
                                l.a.createElement(J.a, {
                                  type: "text",
                                  name: "cs_short_name",
                                  id: "cs_short_name",
                                  placeholder: "AKA",
                                  style: {},
                                  value: a,
                                  onChange: this.changeState
                                })
                              )
                            ),
                            l.a.createElement(
                              Z.a,
                              { md: 3, style: {} },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(
                                  z.a,
                                  { for: "aka" },
                                  "Anniversary Date"
                                ),
                                l.a.createElement(J.a, {
                                  type: "date",
                                  name: "cs_anniversary_date",
                                  id: "cs_anniversary_date",
                                  placeholder: "Anniversary Date",
                                  style: {},
                                  value: n,
                                  onChange: this.changeState
                                })
                              )
                            ),
                            l.a.createElement(
                              Z.a,
                              { md: 3, style: { padding: "0px" } },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(
                                  z.a,
                                  { for: "aka" },
                                  "Email Address"
                                ),
                                l.a.createElement(J.a, {
                                  type: "text",
                                  name: "cs_email",
                                  id: "cs_email",
                                  placeholder: "Email Address",
                                  style: {},
                                  value: h,
                                  onChange: this.changeState
                                })
                              )
                            )
                          ),
                          l.a.createElement(
                            G.a,
                            null,
                            l.a.createElement(
                              Z.a,
                              { md: 6, style: {} },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(
                                  z.a,
                                  { for: "address" },
                                  "Address"
                                ),
                                l.a.createElement(J.a, {
                                  type: "text",
                                  name: "cs_address1",
                                  id: "cs_address1",
                                  placeholder: "Address",
                                  style: {},
                                  value: d,
                                  onChange: this.changeState
                                })
                              )
                            ),
                            l.a.createElement(
                              Z.a,
                              { md: 3, style: {} },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(z.a, { for: "city" }, "City"),
                                l.a.createElement(J.a, {
                                  type: "text",
                                  name: "cs_city",
                                  id: "cs_city",
                                  placeholder: "City",
                                  style: {},
                                  value: m,
                                  onChange: this.changeState
                                })
                              )
                            ),
                            l.a.createElement(
                              Z.a,
                              { md: 1, style: {} },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(
                                  z.a,
                                  { for: "state" },
                                  "State"
                                ),
                                l.a.createElement(
                                  J.a,
                                  {
                                    style: { borderRadius: "0px" },
                                    type: "select",
                                    name: "cs_state",
                                    id: "cs_state",
                                    value: p,
                                    onChange: this.changeState
                                  },
                                  l.a.createElement("option", null, "NY"),
                                  l.a.createElement("option", null, "NJ"),
                                  l.a.createElement("option", null, "FL"),
                                  l.a.createElement("option", null, "TX")
                                )
                              )
                            ),
                            l.a.createElement(
                              Z.a,
                              { md: 2, style: {} },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(
                                  z.a,
                                  { for: "city" },
                                  "Zipcode"
                                ),
                                l.a.createElement(J.a, {
                                  type: "text",
                                  name: "cs_zipcode",
                                  id: "cs_zipcode",
                                  placeholder: "Zipcode",
                                  style: {},
                                  value: u,
                                  onChange: this.changeState
                                })
                              )
                            )
                          ),
                          l.a.createElement(
                            G.a,
                            null,
                            l.a.createElement(
                              Z.a,
                              { md: 3, style: {} },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(
                                  z.a,
                                  { for: "city" },
                                  "Contact 1"
                                ),
                                l.a.createElement(J.a, {
                                  type: "text",
                                  name: "cs_contact1",
                                  id: "cs_contact1",
                                  placeholder: "Contact",
                                  style: {},
                                  value: c,
                                  onChange: this.changeState
                                })
                              )
                            ),
                            l.a.createElement(
                              Z.a,
                              { md: 3, style: {} },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(
                                  z.a,
                                  { for: "city" },
                                  "Phone Number"
                                ),
                                l.a.createElement(J.a, {
                                  type: "text",
                                  name: "cs_phone1",
                                  id: "cs_phone1",
                                  placeholder: "Phone Number",
                                  style: {},
                                  value: s,
                                  onChange: this.changeState
                                })
                              )
                            ),
                            l.a.createElement(
                              Z.a,
                              { md: 3, style: {} },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(
                                  z.a,
                                  { for: "city" },
                                  "Contact 2"
                                ),
                                l.a.createElement(J.a, {
                                  type: "text",
                                  name: "cs_contact2",
                                  id: "cs_contact2",
                                  placeholder: "Contact",
                                  style: {},
                                  value: o,
                                  onChange: this.changeState
                                })
                              )
                            ),
                            l.a.createElement(
                              Z.a,
                              { md: 3, style: {} },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(
                                  z.a,
                                  { for: "phonenumber" },
                                  "Phone Number"
                                ),
                                l.a.createElement(J.a, {
                                  type: "text",
                                  name: "cs_phone2",
                                  id: "cs_phone2",
                                  placeholder: "Phone Number",
                                  style: {},
                                  value: i,
                                  onChange: this.changeState
                                })
                              )
                            )
                          ),
                          l.a.createElement(
                            G.a,
                            null,
                            l.a.createElement(
                              Z.a,
                              { md: 2 },
                              l.a.createElement(
                                E.a,
                                {
                                  style: { marginTop: "25px" },
                                  color: "link",
                                  onClick: this.cToggle
                                },
                                "Comments ",
                                l.a.createElement(
                                  fe.a,
                                  { color: "secondary" },
                                  "3"
                                )
                              )
                            ),
                            l.a.createElement(
                              Z.a,
                              { md: 10 },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(
                                  z.a,
                                  { for: "comment" },
                                  "Comment"
                                ),
                                l.a.createElement(J.a, {
                                  type: "text",
                                  name: "comment",
                                  id: "comment",
                                  placeholder: "Comment",
                                  value: r,
                                  onChange: this.changeState
                                })
                              )
                            )
                          ),
                          l.a.createElement(
                            G.a,
                            null,
                            l.a.createElement(
                              Z.a,
                              null,
                              l.a.createElement(
                                E.a,
                                {
                                  style: { minWidth: "100px", float: "right" },
                                  color: "primary"
                                },
                                l.a.createElement("i", {
                                  className: "far fa-save"
                                }),
                                "  ",
                                "Save"
                              ),
                              l.a.createElement(
                                E.a,
                                {
                                  style: {
                                    paddingLeft: "20px",
                                    paddingRight: "20px",
                                    float: "right",
                                    marginRight: "20px"
                                  },
                                  color: "secondary",
                                  outline: !0,
                                  onClick: this.goBack
                                },
                                "Back"
                              ),
                              l.a.createElement(
                                E.a,
                                {
                                  style: {
                                    float: "right",
                                    paddingRight: "25px",
                                    textDecoration: "underline"
                                  },
                                  color: "link",
                                  onClick: this.toggle
                                },
                                "Cancel Company"
                              )
                            )
                          )
                        )
                      )
                    ),
                    l.a.createElement(
                      U.a,
                      {
                        isOpen: this.state.modal,
                        toggle: this.toggle,
                        className: this.props.className,
                        unmountOnClose: this.state.unmountOnClose
                      },
                      l.a.createElement(
                        q.a,
                        { toggle: this.toggle },
                        "Company Cancellation"
                      ),
                      l.a.createElement(
                        Q.a,
                        null,
                        l.a.createElement(
                          z.a,
                          { for: "reason" },
                          "Please provide a reason for the company cancellation."
                        ),
                        l.a.createElement(J.a, {
                          type: "textarea",
                          placeholder: "Enter reason",
                          rows: 5
                        })
                      ),
                      l.a.createElement(
                        $.a,
                        null,
                        l.a.createElement(
                          E.a,
                          {
                            outline: !0,
                            color: "secondary",
                            onClick: this.toggle
                          },
                          "Close"
                        ),
                        " ",
                        l.a.createElement(
                          E.a,
                          { color: "primary", onClick: this.toggle },
                          "Cancel Company"
                        )
                      )
                    ),
                    l.a.createElement(
                      U.a,
                      {
                        isOpen: this.state.cModal,
                        toggle: this.cToggle,
                        className: this.props.cClassName,
                        unmountOnClose: this.state.unmountOnClose
                      },
                      l.a.createElement(
                        q.a,
                        { toggle: this.cToggle },
                        "Comments"
                      ),
                      l.a.createElement(
                        Q.a,
                        null,
                        l.a.createElement(
                          "div",
                          { className: "commentsHeader" },
                          l.a.createElement(
                            "div",
                            { className: "author" },
                            "By John Snow"
                          ),
                          l.a.createElement(
                            "div",
                            { className: "cTime" },
                            "May 9,2019 at 10.38 AM"
                          )
                        ),
                        l.a.createElement(
                          "p",
                          { className: "lead" },
                          "Approval as Central staton, approved. Expires on March 31 2013. COF on SITE. Approval as Central staton, approved. Expires on March 31 2013. COF on SITE. Approval as Central staton, approved. Expires on March 31 2013. COF on SITE.",
                          " "
                        ),
                        l.a.createElement(
                          "div",
                          { className: "commentsHeader" },
                          l.a.createElement(
                            "div",
                            { className: "author" },
                            "By Luke Doe"
                          ),
                          l.a.createElement(
                            "div",
                            { className: "cTime" },
                            "Mar 9,2019 at 12.38 AM"
                          )
                        ),
                        l.a.createElement(
                          "p",
                          { className: "lead" },
                          "Approval as Central staton, approved. Expires on March 31 2013. COF on SITE. Approval as Central staton, approved. Expires on March 31 2013. COF on SITE."
                        ),
                        l.a.createElement(
                          "div",
                          { className: "commentsHeader" },
                          l.a.createElement(
                            "div",
                            { className: "author" },
                            "By Jane Snow"
                          ),
                          l.a.createElement(
                            "div",
                            { className: "cTime" },
                            "June 19,2018 at 09.38 AM"
                          )
                        ),
                        l.a.createElement(
                          "p",
                          { className: "lead" },
                          "Approval as Central staton, approved. Expires on March 31 2013. COF on SITE. Approval as Central staton, approved. Expires on March 31 2013. COF on SITE."
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        ve = Object(O.b)(
          function(e) {
            return { company: e.companies.company };
          },
          {
            editCompany: function(e) {
              return (function() {
                var t = Object(A.a)(
                  k.a.mark(function t(a) {
                    var n;
                    return k.a.wrap(function(t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              P.a.get(
                                "/pfa/json/company.json?cs_comp_code=".concat(e)
                              )
                            );
                          case 2:
                            (n = t.sent),
                              a({ type: "EDIT_COMPANY", payload: n.data });
                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function(e) {
                  return t.apply(this, arguments);
                };
              })();
            }
          }
        )(be),
        Ce = a(446),
        Ne = (function(e) {
          function t(e) {
            var a;
            return (
              Object(m.a)(this, t),
              ((a = Object(d.a)(
                this,
                Object(u.a)(t).call(this, e)
              )).componentDidMount = function() {
                var e = a.props.match.params.id;
                a.props.editTerminal(e);
              }),
              (a.goBack = function(e) {
                e.preventDefault(), a.props.history.goBack();
              }),
              (a.submitForm = function(e) {
                console.log("hello"),
                  e.preventDefault(),
                  console.log(a.state),
                  console.log(a.props);
              }),
              (a.changeState = function(e) {
                a.setState(Object(R.a)({}, e.target.name, e.target.value));
              }),
              (a.changeTC = function(e, t, n) {
                var l = a.state.terminals_list;
                t.startsWith("loc2")
                  ? (l[e].building_flag = "O")
                  : t.startsWith("loc") && (l[e].building_flag = "E"),
                  "terminal_descr" === t && (l[e].terminal_descr = n),
                  "terminal_loc" === t && (l[e].terminal_loc = n),
                  "building_flag" === t && (l[e].building_flag = n),
                  "term_type_cd" === t && (l[e].term_type_cd = n),
                  a.setState({ terminals_list: l });
              }),
              (a.toggle = a.toggle.bind(Object(h.a)(a))),
              (a.cToggle = a.cToggle.bind(Object(h.a)(a))),
              (a.submitForm = a.submitForm.bind(Object(h.a)(a))),
              (a.changeTC = a.changeTC.bind(Object(h.a)(a))),
              (a.changeState = a.changeState.bind(Object(h.a)(a))),
              (a.state = {
                modal: !1,
                unmountOnClose: !1,
                cModal: !1,
                fc_pfa_id: "",
                borough: "",
                box_nbr: "",
                subscriber_nm: "",
                bin: "",
                street_address: "",
                comp_name: "",
                terminals_list: [],
                terminal1: {
                  t: "",
                  term_type_cd: "",
                  building_flag: "",
                  terminal_loc: "",
                  terminal_desc: ""
                },
                terminal2: {
                  t: "",
                  term_type_cd: "",
                  building_flag: "",
                  terminal_loc: "",
                  terminal_desc: ""
                },
                terminal3: {
                  t: "",
                  term_type_cd: "",
                  building_flag: "",
                  terminal_loc: "",
                  terminal_desc: ""
                },
                comment: ""
              }),
              a
            );
          }
          return (
            Object(g.a)(t, e),
            Object(p.a)(t, [
              {
                key: "toggle",
                value: function() {
                  this.setState(function(e) {
                    return { modal: !e.modal };
                  });
                }
              },
              {
                key: "cToggle",
                value: function() {
                  this.setState(function(e) {
                    return { cModal: !e.cModal };
                  });
                }
              },
              {
                key: "componentWillReceiveProps",
                value: function(e, t) {
                  console.log("component will receive......");
                  var a = e.terminal,
                    n = a.fc_pfa_id,
                    l = a.borough,
                    r = a.box_nbr,
                    c = a.subscriber_nm,
                    o = a.bin,
                    s = a.street_address,
                    i = a.comp_name,
                    m = a.terminals_list,
                    p = (a.terminal1, a.terminal2, a.terminal3, a.comment);
                  this.setState({
                    terminal1: m[0],
                    terminal2: m[1],
                    terminal3: m[2]
                  }),
                    this.setState({
                      fc_pfa_id: n,
                      borough: l,
                      box_nbr: r,
                      subscriber_nm: c,
                      bin: o,
                      street_address: s,
                      comp_name: i,
                      terminals_list: m,
                      comment: p
                    });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.state,
                    t = (e.fc_pfa_id, e.borough, e.box_nbr),
                    a = e.subscriber_nm,
                    n = e.bin,
                    r = e.street_address,
                    c = e.comp_name,
                    o = (e.terminal1, e.terminal2),
                    s = e.terminal3,
                    i = (e.terminals_list, e.comment);
                  return l.a.createElement(
                    Y.a,
                    { style: { padding: "15px 0px" } },
                    l.a.createElement(
                      "div",
                      { className: "card" },
                      l.a.createElement(
                        "div",
                        { className: "card-header" },
                        l.a.createElement(
                          "h4",
                          { className: "display-6" },
                          "Terminal Assignment Details"
                        )
                      ),
                      l.a.createElement(
                        "div",
                        { className: "card-body" },
                        l.a.createElement(
                          Ce.a,
                          { bordered: !0 },
                          l.a.createElement(
                            "thead",
                            null,
                            l.a.createElement(
                              "tr",
                              null,
                              l.a.createElement("th", null, "Address"),
                              l.a.createElement("th", null, "Box"),
                              l.a.createElement("th", null, "Bin"),
                              l.a.createElement("th", null, "Company"),
                              l.a.createElement("th", null, "Premise")
                            )
                          ),
                          l.a.createElement(
                            "tbody",
                            null,
                            l.a.createElement(
                              "tr",
                              null,
                              l.a.createElement("td", null, r),
                              l.a.createElement("td", null, t),
                              l.a.createElement("td", null, n),
                              l.a.createElement("td", null, c),
                              l.a.createElement(
                                "td",
                                null,
                                a,
                                l.a.createElement("i", {
                                  title: "Edit",
                                  style: { float: "right", cursor: "pointer" },
                                  className: "fas fa-pencil-alt"
                                })
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          X.a,
                          null,
                          l.a.createElement(
                            "div",
                            { id: "editSection", style: { display: "none" } },
                            l.a.createElement(
                              G.a,
                              null,
                              l.a.createElement(
                                Z.a,
                                { md: 2, style: { paddingRight: "0px" } },
                                l.a.createElement(
                                  W.a,
                                  null,
                                  l.a.createElement(
                                    z.a,
                                    { for: "borough" },
                                    "Borough"
                                  ),
                                  l.a.createElement(
                                    J.a,
                                    {
                                      style: { borderRadius: "0px" },
                                      type: "select",
                                      name: "type",
                                      id: "typeT"
                                    },
                                    l.a.createElement(
                                      "option",
                                      null,
                                      "Borough"
                                    ),
                                    l.a.createElement(
                                      "option",
                                      null,
                                      "Manhattan"
                                    ),
                                    l.a.createElement("option", null, "Queens"),
                                    l.a.createElement(
                                      "option",
                                      null,
                                      "Brooklyn"
                                    ),
                                    l.a.createElement("option", null, "Bronx"),
                                    l.a.createElement(
                                      "option",
                                      null,
                                      "Staten Island"
                                    )
                                  )
                                )
                              ),
                              l.a.createElement(
                                Z.a,
                                { md: 1, style: { padding: "0px" } },
                                l.a.createElement(
                                  W.a,
                                  null,
                                  l.a.createElement(
                                    z.a,
                                    { for: "houseNo" },
                                    "House No."
                                  ),
                                  l.a.createElement(J.a, {
                                    type: "text",
                                    name: "houseNo",
                                    id: "houseNo",
                                    placeholder: "House No.",
                                    style: {
                                      borderRadius: "0px",
                                      width: "100px",
                                      paddingRight: "0px"
                                    }
                                  })
                                )
                              ),
                              l.a.createElement(
                                Z.a,
                                { md: 4, style: { padding: "0px" } },
                                l.a.createElement(
                                  W.a,
                                  null,
                                  l.a.createElement(
                                    z.a,
                                    { for: "street" },
                                    "Street"
                                  ),
                                  l.a.createElement(J.a, {
                                    type: "text",
                                    name: "street",
                                    id: "street",
                                    placeholder: "Enter Street",
                                    autoComplete: "off",
                                    style: { borderRadius: "0px" }
                                  })
                                )
                              ),
                              l.a.createElement(
                                Z.a,
                                {
                                  md: 1,
                                  style: {
                                    paddingLeft: "0px",
                                    marginTop: "31px"
                                  }
                                },
                                l.a.createElement(
                                  W.a,
                                  null,
                                  l.a.createElement(
                                    E.a,
                                    {
                                      style: {
                                        borderTopLeftRadius: "0px",
                                        borderBottomLeftRadius: "0px"
                                      },
                                      color: "primary"
                                    },
                                    "Verify"
                                  )
                                ),
                                " "
                              ),
                              l.a.createElement(
                                Z.a,
                                { md: 2 },
                                l.a.createElement(
                                  W.a,
                                  null,
                                  l.a.createElement(
                                    z.a,
                                    { for: "boxno" },
                                    "Box Number"
                                  ),
                                  l.a.createElement(J.a, {
                                    type: "text",
                                    name: "boxno",
                                    id: "boxno",
                                    placeholder: "Box Number"
                                  })
                                )
                              ),
                              l.a.createElement(
                                Z.a,
                                { md: 2 },
                                l.a.createElement(
                                  W.a,
                                  null,
                                  l.a.createElement(
                                    z.a,
                                    { for: "houseNo" },
                                    "BIN"
                                  ),
                                  l.a.createElement(J.a, {
                                    type: "text",
                                    name: "bin",
                                    id: "bin",
                                    placeholder: "BIN"
                                  })
                                )
                              )
                            ),
                            l.a.createElement(
                              G.a,
                              null,
                              l.a.createElement(
                                Z.a,
                                { md: 5 },
                                l.a.createElement(
                                  W.a,
                                  null,
                                  l.a.createElement(
                                    z.a,
                                    { for: "company" },
                                    "Company"
                                  ),
                                  l.a.createElement(
                                    J.a,
                                    {
                                      style: { borderRadius: "0px" },
                                      type: "select",
                                      name: "type",
                                      id: "company"
                                    },
                                    l.a.createElement(
                                      "option",
                                      null,
                                      "Select Company"
                                    ),
                                    l.a.createElement(
                                      "option",
                                      null,
                                      "Statewide Fire Corporation"
                                    ),
                                    l.a.createElement(
                                      "option",
                                      null,
                                      "ADT Security Services"
                                    ),
                                    l.a.createElement(
                                      "option",
                                      null,
                                      "NY Security ADT"
                                    ),
                                    l.a.createElement(
                                      "option",
                                      null,
                                      "AFA Protective Systems Inc."
                                    ),
                                    l.a.createElement(
                                      "option",
                                      null,
                                      "Distinct Central Solution"
                                    )
                                  )
                                )
                              ),
                              l.a.createElement(
                                Z.a,
                                { md: 2 },
                                l.a.createElement(
                                  W.a,
                                  null,
                                  l.a.createElement(z.a, { for: "aka" }, "AKA"),
                                  l.a.createElement(
                                    J.a,
                                    {
                                      style: { borderRadius: "0px" },
                                      type: "select",
                                      name: "type",
                                      id: "aka"
                                    },
                                    l.a.createElement(
                                      "option",
                                      null,
                                      "Select AKA"
                                    ),
                                    l.a.createElement("option", null, "SFC"),
                                    l.a.createElement("option", null, "ADT"),
                                    l.a.createElement("option", null, "NYADT"),
                                    l.a.createElement("option", null, "AFA"),
                                    l.a.createElement("option", null, "DCS")
                                  )
                                )
                              ),
                              l.a.createElement(
                                Z.a,
                                { md: 5 },
                                l.a.createElement(
                                  W.a,
                                  null,
                                  l.a.createElement(
                                    z.a,
                                    { for: "boxno" },
                                    "Premise"
                                  ),
                                  l.a.createElement(J.a, {
                                    type: "text",
                                    name: "premise",
                                    id: "premise",
                                    placeholder: "Premise"
                                  })
                                )
                              )
                            )
                          ),
                          l.a.createElement(
                            G.a,
                            null,
                            l.a.createElement(
                              Z.a,
                              null,
                              l.a.createElement(K, {
                                id: "0",
                                onSubmit: this.onFormSubmit,
                                isNew: "false",
                                t: this.state.terminal1.t,
                                term_type_cd: this.state.terminal1.term_type_cd,
                                building_flag: this.state.terminal1
                                  .building_flag,
                                terminal_loc: this.state.terminal1.terminal_loc,
                                terminal_descr: this.state.terminal1
                                  .terminal_descr,
                                onChange: this.changeTC
                              })
                            ),
                            l.a.createElement(
                              Z.a,
                              null,
                              l.a.createElement(K, {
                                id: "1",
                                isNew: "false",
                                onChange: this.changeTC,
                                onSubmit: this.onFormSubmit,
                                t: this.state.terminal2.t,
                                term_type_cd: this.state.terminal2.term_type_cd,
                                building_flag: o.building_flag,
                                terminal_loc: o.terminal_loc,
                                terminal_descr: o.terminal_descr
                              })
                            ),
                            l.a.createElement(
                              Z.a,
                              null,
                              l.a.createElement(K, {
                                id: "2",
                                isNew: "false",
                                onChange: this.changeTC,
                                onSubmit: this.onFormSubmit,
                                t: s.t,
                                term_type_cd: s.term_type_cd,
                                building_flag: s.building_flag,
                                terminal_loc: s.terminal_loc,
                                terminal_descr: s.terminal_descr
                              })
                            )
                          ),
                          l.a.createElement(
                            G.a,
                            { style: { marginTop: "15px" } },
                            l.a.createElement(
                              Z.a,
                              {
                                style: {
                                  minWidth: "220px",
                                  marginTop: "25px",
                                  paddingRight: "0px"
                                },
                                sm: 2
                              },
                              l.a.createElement(
                                E.a,
                                { color: "link", onClick: this.cToggle },
                                "Comments ",
                                l.a.createElement(
                                  fe.a,
                                  { color: "secondary" },
                                  "3"
                                )
                              )
                            ),
                            l.a.createElement(
                              Z.a,
                              { md: 9 },
                              l.a.createElement(
                                W.a,
                                null,
                                l.a.createElement(
                                  z.a,
                                  { for: "comment" },
                                  "Comment"
                                ),
                                l.a.createElement(J.a, {
                                  type: "text",
                                  name: "comment",
                                  id: "comment",
                                  placeholder: "Comment",
                                  value: i,
                                  onChange: this.changeState
                                })
                              )
                            )
                          ),
                          l.a.createElement(
                            G.a,
                            null,
                            l.a.createElement(
                              Z.a,
                              null,
                              l.a.createElement(
                                E.a,
                                {
                                  style: { minWidth: "100px", float: "right" },
                                  color: "primary",
                                  onClick: this.submitForm
                                },
                                l.a.createElement("i", {
                                  className: "far fa-save"
                                }),
                                "  ",
                                "Save"
                              ),
                              l.a.createElement(
                                E.a,
                                {
                                  style: {
                                    paddingLeft: "20px",
                                    paddingRight: "20px",
                                    float: "right",
                                    marginRight: "20px"
                                  },
                                  color: "secondary",
                                  outline: !0,
                                  onClick: this.goBack
                                },
                                "Back"
                              ),
                              l.a.createElement(
                                E.a,
                                {
                                  style: {
                                    float: "right",
                                    paddingRight: "25px",
                                    textDecoration: "underline"
                                  },
                                  color: "link",
                                  onClick: this.toggle
                                },
                                " ",
                                "Cancel Terminals"
                              )
                            )
                          )
                        )
                      )
                    ),
                    l.a.createElement(
                      U.a,
                      {
                        isOpen: this.state.modal,
                        toggle: this.toggle,
                        className: this.props.className,
                        unmountOnClose: this.state.unmountOnClose
                      },
                      l.a.createElement(
                        q.a,
                        { toggle: this.toggle },
                        "Terminal Cancellation"
                      ),
                      l.a.createElement(
                        Q.a,
                        null,
                        l.a.createElement(
                          z.a,
                          { for: "reason" },
                          "Please provide a reason for the terminal cancellation."
                        ),
                        l.a.createElement(J.a, {
                          type: "textarea",
                          placeholder: "Enter reason",
                          rows: 5
                        })
                      ),
                      l.a.createElement(
                        $.a,
                        null,
                        l.a.createElement(
                          E.a,
                          {
                            outline: !0,
                            color: "secondary",
                            onClick: this.toggle
                          },
                          "Close"
                        ),
                        " ",
                        l.a.createElement(
                          E.a,
                          { color: "primary", onClick: this.toggle },
                          "Cancel Terminal"
                        )
                      )
                    ),
                    l.a.createElement(
                      U.a,
                      {
                        isOpen: this.state.cModal,
                        toggle: this.cToggle,
                        className: this.props.cClassName,
                        unmountOnClose: this.state.unmountOnClose
                      },
                      l.a.createElement(
                        q.a,
                        { toggle: this.cToggle },
                        "Comments"
                      ),
                      l.a.createElement(
                        Q.a,
                        null,
                        l.a.createElement(
                          "div",
                          { className: "commentsHeader" },
                          l.a.createElement(
                            "div",
                            { className: "author" },
                            "By John Snow"
                          ),
                          l.a.createElement(
                            "div",
                            { className: "cTime" },
                            "May 9,2019 at 10.38 AM"
                          )
                        ),
                        l.a.createElement(
                          "p",
                          { className: "lead" },
                          "Approval as Central staton, approved. Expires on March 31 2013. COF on SITE. Approval as Central staton, approved. Expires on March 31 2013. COF on SITE. Approval as Central staton, approved. Expires on March 31 2013. COF on SITE.",
                          " "
                        ),
                        l.a.createElement(
                          "div",
                          { className: "commentsHeader" },
                          l.a.createElement(
                            "div",
                            { className: "author" },
                            "By Luke Doe"
                          ),
                          l.a.createElement(
                            "div",
                            { className: "cTime" },
                            "Mar 9,2019 at 12.38 AM"
                          )
                        ),
                        l.a.createElement(
                          "p",
                          { className: "lead" },
                          "Approval as Central staton, approved. Expires on March 31 2013. COF on SITE. Approval as Central staton, approved. Expires on March 31 2013. COF on SITE."
                        ),
                        l.a.createElement(
                          "div",
                          { className: "commentsHeader" },
                          l.a.createElement(
                            "div",
                            { className: "author" },
                            "By Jane Snow"
                          ),
                          l.a.createElement(
                            "div",
                            { className: "cTime" },
                            "June 19,2018 at 09.38 AM"
                          )
                        ),
                        l.a.createElement(
                          "p",
                          { className: "lead" },
                          "Approval as Central staton, approved. Expires on March 31 2013. COF on SITE. Approval as Central staton, approved. Expires on March 31 2013. COF on SITE."
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        xe = Object(O.b)(
          function(e) {
            return { terminal: e.terminals.terminal };
          },
          {
            editTerminal: function(e) {
              return (function() {
                var t = Object(A.a)(
                  k.a.mark(function t(a) {
                    var n;
                    return k.a.wrap(function(t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              P.a.get("/pfa/json/terminal.json?ref=".concat(e))
                            );
                          case 2:
                            (n = t.sent),
                              a({ type: "EDIT_TERMINAL", payload: n.data });
                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function(e) {
                  return t.apply(this, arguments);
                };
              })();
            }
          }
        )(Ne);
      var Oe = function() {
        return l.a.createElement(
          O.a,
          { store: _e },
          l.a.createElement(
            o.a,
            null,
            l.a.createElement(i, null),
            l.a.createElement(
              s.c,
              null,
              l.a.createElement(s.a, { exact: !0, path: "/", component: D }),
              l.a.createElement(s.a, {
                exact: !0,
                path: "/terminal/new",
                component: te
              }),
              l.a.createElement(s.a, {
                exact: !0,
                path: "/terminal/edit/:id",
                component: xe
              }),
              l.a.createElement(s.a, {
                exact: !0,
                path: "/centralstations",
                component: ce
              }),
              l.a.createElement(s.a, {
                exact: !0,
                path: "/company/new",
                component: ye
              }),
              l.a.createElement(s.a, {
                exact: !0,
                path: "/company/edit/:id",
                component: ve
              }),
              l.a.createElement(s.a, {
                exact: !0,
                path: "/reports",
                component: oe
              }),
              l.a.createElement(s.a, { component: se })
            )
          )
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      c.a.render(l.a.createElement(Oe, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    }
  },
  [[182, 1, 2]]
]);
//# sourceMappingURL=main.c5423015.chunk.js.map
