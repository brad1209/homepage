_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [16], {
        "/0+H": function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.isInAmpMode = i, t.useAmp = function() {
                return i(o.default.useContext(a.AmpStateContext))
            };
            var r, o = (r = n("q1tI")) && r.__esModule ? r : {
                    default: r
                },
                a = n("lwAK");

            function i() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.ampFirst,
                    n = void 0 !== t && t,
                    r = e.hybrid,
                    o = void 0 !== r && r,
                    a = e.hasQuery,
                    i = void 0 !== a && a;
                return n || o && i
            }
        },
        "8Kt/": function(e, t, n) {
            "use strict";
            n("lSNA");
            t.__esModule = !0, t.defaultHead = l, t.default = void 0;
            var r, o = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== typeof e && "function" !== typeof e) return {
                        default: e
                    };
                    var t = s();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("q1tI")),
                a = (r = n("Xuae")) && r.__esModule ? r : {
                    default: r
                },
                i = n("lwAK"),
                c = n("FYa8"),
                u = n("/0+H");

            function s() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return s = function() {
                    return e
                }, e
            }

            function l() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = [o.default.createElement("meta", {
                        charSet: "utf-8"
                    })];
                return e || t.push(o.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), t
            }

            function f(e, t) {
                return "string" === typeof t || "number" === typeof t ? e : t.type === o.default.Fragment ? e.concat(o.default.Children.toArray(t.props.children).reduce((function(e, t) {
                    return "string" === typeof t || "number" === typeof t ? e : e.concat(t)
                }), [])) : e.concat(t)
            }
            var p = ["name", "httpEquiv", "charSet", "itemProp"];

            function d(e, t) {
                return e.reduce((function(e, t) {
                    var n = o.default.Children.toArray(t.props.children);
                    return e.concat(n)
                }), []).reduce(f, []).reverse().concat(l(t.inAmpMode)).filter(function() {
                    var e = new Set,
                        t = new Set,
                        n = new Set,
                        r = {};
                    return function(o) {
                        var a = !0;
                        if (o.key && "number" !== typeof o.key && o.key.indexOf("$") > 0) {
                            var i = o.key.slice(o.key.indexOf("$") + 1);
                            e.has(i) ? a = !1 : e.add(i)
                        }
                        switch (o.type) {
                            case "title":
                            case "base":
                                t.has(o.type) ? a = !1 : t.add(o.type);
                                break;
                            case "meta":
                                for (var c = 0, u = p.length; c < u; c++) {
                                    var s = p[c];
                                    if (o.props.hasOwnProperty(s))
                                        if ("charSet" === s) n.has(s) ? a = !1 : n.add(s);
                                        else {
                                            var l = o.props[s],
                                                f = r[s] || new Set;
                                            f.has(l) ? a = !1 : (f.add(l), r[s] = f)
                                        }
                                }
                        }
                        return a
                    }
                }()).reverse().map((function(e, t) {
                    var n = e.key || t;
                    return o.default.cloneElement(e, {
                        key: n
                    })
                }))
            }

            function h(e) {
                var t = e.children,
                    n = (0, o.useContext)(i.AmpStateContext),
                    r = (0, o.useContext)(c.HeadManagerContext);
                return o.default.createElement(a.default, {
                    reduceComponentsToState: d,
                    headManager: r,
                    inAmpMode: (0, u.isInAmpMode)(n)
                }, t)
            }
            h.rewind = function() {};
            var y = h;
            t.default = y
        },
        Bnag: function(e, t) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
        },
        EbDI: function(e, t) {
            e.exports = function(e) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }
        },
        HfOp: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "__N_SSG", (function() {
                return p
            }));
            var r = n("nKUr"),
                o = n("g4pe"),
                a = n.n(o),
                i = n("YFqc"),
                c = n.n(i),
                u = function(e) {
                    var t = e.slug,
                        n = (e.date, e.title),
                        o = e.excerpt;
                    return Object(r.jsx)(c.a, {
                        href: "/blog/[slug]",
                        as: "/blog/".concat(t),
                        children: Object(r.jsxs)("a", {
                            className: "inline-block w-full",
                            children: [Object(r.jsx)("h1", {
                                className: "text-3xl font-medium max-w-lg font-bold tracking-tight",
                                children: n
                            }), Object(r.jsx)("p", {
                                className: "mt-2 text-gray-600 dark:text-gray-400 max-w-xl",
                                children: o
                            })]
                        })
                    }, t)
                },
                s = n("dmF/"),
                l = n.n(s),
                f = "A collection of blog posts I've written. Sorted chronologically.",
                p = !0;
            t.default = function(e) {
                var t = e.allPostsData;
                return Object(r.jsxs)(r.Fragment, {
                    children: [Object(r.jsxs)(a.a, {
                        children: [Object(r.jsx)("title", {
                            children: "Blog"
                        }), Object(r.jsx)("meta", {
                            property: "og:title",
                            content: "Blog"
                        }), Object(r.jsx)("meta", {
                            name: "description",
                            content: f
                        }), Object(r.jsx)("meta", {
                            property: "og:description",
                            content: f
                        })]
                    }), Object(r.jsxs)(l.a, {
                        className: "h-full w-full flex flex-col max-w-3xl mx-auto mb-16 sm:px-0",
                        children: [Object(r.jsx)("h1", {
                            className: "text-5xl font-bold",
                            children: "Blog"
                        }), Object(r.jsx)("p", {
                            className: "text-gray-600 dark:text-gray-400 mt-3",
                            children: f
                        }), Object(r.jsx)("div", {
                            className: "mt-8 grid gap-8",
                            children: t.map((function(e, t) {
                                var n = e.slug,
                                    o = e.date,
                                    a = e.title,
                                    i = e.excerpt;
                                return Object(r.jsx)(u, {
                                    slug: n,
                                    date: o,
                                    title: a,
                                    excerpt: i
                                }, t)
                            }))
                        })]
                    })]
                })
            }
        },
        Ijbi: function(e, t, n) {
            var r = n("WkPL");
            e.exports = function(e) {
                if (Array.isArray(e)) return r(e)
            }
        },
        R055: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== a(e) && "function" !== typeof e) return {
                    default: e
                };
                var t = o();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                    if (Object.prototype.hasOwnProperty.call(e, i)) {
                        var c = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        c && (c.get || c.set) ? Object.defineProperty(n, i, c) : n[i] = e[i]
                    }
                n.default = e, t && t.set(e, n);
                return n
            }(n("q1tI"));

            function o() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return o = function() {
                    return e
                }, e
            }

            function a(e) {
                return (a = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function c(e, t) {
                return (c = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function u(e, t) {
                return !t || "object" !== a(t) && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function s() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }

            function l(e) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var f = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && c(e, t)
                }(p, e);
                var t, n, o, a, f = (t = p, function() {
                    var e, n = l(t);
                    if (s()) {
                        var r = l(this).constructor;
                        e = Reflect.construct(n, arguments, r)
                    } else e = n.apply(this, arguments);
                    return u(this, e)
                });

                function p() {
                    var e;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, p), (e = f.call(this)).state = {
                        maxIsVisible: 0
                    }, e
                }
                return n = p, (o = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this,
                            t = r.default.Children.count(this.props.children),
                            n = 0;
                        this.interval = setInterval((function() {
                            ++n > t && clearInterval(e.interval), e.setState({
                                maxIsVisible: n
                            })
                        }), this.delay)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearInterval(this.interval)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.transitionDuration,
                            n = this.props.wrapperTag || "div",
                            o = this.props.childTag || "div";
                        return r.default.createElement(n, {
                            className: this.props.className
                        }, r.default.Children.map(this.props.children, (function(n, a) {
                            return r.default.createElement(o, {
                                className: e.props.childClassName,
                                style: {
                                    transition: "opacity ".concat(t, "ms, transform ").concat(t, "ms"),
                                    transform: e.state.maxIsVisible > a ? "none" : "translateY(20px)",
                                    opacity: e.state.maxIsVisible > a ? 1 : 0
                                }
                            }, n)
                        })))
                    }
                }, {
                    key: "delay",
                    get: function() {
                        return this.props.delay || 50
                    }
                }, {
                    key: "transitionDuration",
                    get: function() {
                        return this.props.transitionDuration || 400
                    }
                }]) && i(n.prototype, o), a && i(n, a), p
            }(r.Component);
            t.default = f
        },
        RIqP: function(e, t, n) {
            var r = n("Ijbi"),
                o = n("EbDI"),
                a = n("ZhPi"),
                i = n("Bnag");
            e.exports = function(e) {
                return r(e) || o(e) || a(e) || i()
            }
        },
        Xuae: function(e, t, n) {
            "use strict";
            var r = n("RIqP"),
                o = n("lwsE"),
                a = n("W8MJ"),
                i = (n("PJYZ"), n("7W2i")),
                c = n("a1gu"),
                u = n("Nsbk");

            function s(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = u(e);
                    if (t) {
                        var o = u(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            t.__esModule = !0, t.default = void 0;
            var l = n("q1tI"),
                f = function(e) {
                    i(n, e);
                    var t = s(n);

                    function n(e) {
                        var a;
                        return o(this, n), (a = t.call(this, e))._hasHeadManager = void 0, a.emitChange = function() {
                            a._hasHeadManager && a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances), a.props))
                        }, a._hasHeadManager = a.props.headManager && a.props.headManager.mountedInstances, a
                    }
                    return a(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this._hasHeadManager && this.props.headManager.mountedInstances.add(this), this.emitChange()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.emitChange()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._hasHeadManager && this.props.headManager.mountedInstances.delete(this), this.emitChange()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return null
                        }
                    }]), n
                }(l.Component);
            t.default = f
        },
        YFqc: function(e, t, n) {
            e.exports = n("cTJO")
        },
        cTJO: function(e, t, n) {
            "use strict";
            var r = n("J4zp"),
                o = n("284h");
            t.__esModule = !0, t.default = void 0;
            var a = o(n("q1tI")),
                i = n("elyg"),
                c = n("nOHt"),
                u = n("vNVm"),
                s = {};

            function l(e, t, n, r) {
                if ((0, i.isLocalURL)(t)) {
                    e.prefetch(t, n, r).catch((function(e) {
                        0
                    }));
                    var o = r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
                    s[t + "%" + n + (o ? "%" + o : "")] = !0
                }
            }
            var f = function(e) {
                var t = !1 !== e.prefetch,
                    n = (0, c.useRouter)(),
                    o = n && n.pathname || "/",
                    f = a.default.useMemo((function() {
                        var t = (0, i.resolveHref)(o, e.href, !0),
                            n = r(t, 2),
                            a = n[0],
                            c = n[1];
                        return {
                            href: a,
                            as: e.as ? (0, i.resolveHref)(o, e.as) : c || a
                        }
                    }), [o, e.href, e.as]),
                    p = f.href,
                    d = f.as,
                    h = e.children,
                    y = e.replace,
                    v = e.shallow,
                    m = e.scroll,
                    b = e.locale;
                "string" === typeof h && (h = a.default.createElement("a", null, h));
                var g = a.Children.only(h),
                    x = g && "object" === typeof g && g.ref,
                    j = (0, u.useIntersection)({
                        rootMargin: "200px"
                    }),
                    w = r(j, 2),
                    O = w[0],
                    _ = w[1],
                    M = a.default.useCallback((function(e) {
                        O(e), x && ("function" === typeof x ? x(e) : "object" === typeof x && (x.current = e))
                    }), [x, O]);
                (0, a.useEffect)((function() {
                    var e = _ && t && (0, i.isLocalURL)(p),
                        r = "undefined" !== typeof b ? b : n && n.locale,
                        o = s[p + "%" + d + (r ? "%" + r : "")];
                    e && !o && l(n, p, d, {
                        locale: r
                    })
                }), [d, p, _, b, t, n]);
                var k = {
                    ref: M,
                    onClick: function(e) {
                        g.props && "function" === typeof g.props.onClick && g.props.onClick(e), e.defaultPrevented || function(e, t, n, r, o, a, c, u) {
                            ("A" !== e.currentTarget.nodeName || ! function(e) {
                                var t = e.currentTarget.target;
                                return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                            }(e) && (0, i.isLocalURL)(n)) && (e.preventDefault(), null == c && (c = r.indexOf("#") < 0), t[o ? "replace" : "push"](n, r, {
                                shallow: a,
                                locale: u
                            }).then((function(e) {
                                e && c && (window.scrollTo(0, 0), document.body.focus())
                            })))
                        }(e, n, p, d, y, v, m, b)
                    },
                    onMouseEnter: function(e) {
                        (0, i.isLocalURL)(p) && (g.props && "function" === typeof g.props.onMouseEnter && g.props.onMouseEnter(e), l(n, p, d, {
                            priority: !0
                        }))
                    }
                };
                return (e.passHref || "a" === g.type && !("href" in g.props)) && (k.href = (0, i.addBasePath)((0, i.addLocale)(d, "undefined" !== typeof b ? b : n && n.locale, n && n.defaultLocale))), a.default.cloneElement(g, k)
            };
            t.default = f
        },
        "dmF/": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            });
            var r, o = (r = n("R055")) && r.__esModule ? r : {
                default: r
            }
        },
        g4pe: function(e, t, n) {
            e.exports = n("8Kt/")
        },
        lSNA: function(e, t) {
            e.exports = function(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
        },
        lwAK: function(e, t, n) {
            "use strict";
            var r;
            t.__esModule = !0, t.AmpStateContext = void 0;
            var o = ((r = n("q1tI")) && r.__esModule ? r : {
                default: r
            }).default.createContext({});
            t.AmpStateContext = o
        },
        uh6c: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/blog", function() {
                return n("HfOp")
            }])
        },
        vNVm: function(e, t, n) {
            "use strict";
            var r = n("J4zp"),
                o = n("TqRt");
            t.__esModule = !0, t.useIntersection = function(e) {
                var t = e.rootMargin,
                    n = e.disabled || !c,
                    o = (0, a.useRef)(),
                    s = (0, a.useState)(!1),
                    l = r(s, 2),
                    f = l[0],
                    p = l[1],
                    d = (0, a.useCallback)((function(e) {
                        o.current && (o.current(), o.current = void 0), n || f || e && e.tagName && (o.current = function(e, t, n) {
                            var r = function(e) {
                                    var t = e.rootMargin || "",
                                        n = u.get(t);
                                    if (n) return n;
                                    var r = new Map,
                                        o = new IntersectionObserver((function(e) {
                                            e.forEach((function(e) {
                                                var t = r.get(e.target),
                                                    n = e.isIntersecting || e.intersectionRatio > 0;
                                                t && n && t(n)
                                            }))
                                        }), e);
                                    return u.set(t, n = {
                                        id: t,
                                        observer: o,
                                        elements: r
                                    }), n
                                }(n),
                                o = r.id,
                                a = r.observer,
                                i = r.elements;
                            return i.set(e, t), a.observe(e),
                                function() {
                                    a.unobserve(e), 0 === i.size && (a.disconnect(), u.delete(o))
                                }
                        }(e, (function(e) {
                            return e && p(e)
                        }), {
                            rootMargin: t
                        }))
                    }), [n, t, f]);
                return (0, a.useEffect)((function() {
                    c || f || (0, i.default)((function() {
                        return p(!0)
                    }))
                }), [f]), [d, f]
            };
            var a = n("q1tI"),
                i = o(n("0G5g")),
                c = "undefined" !== typeof IntersectionObserver;
            var u = new Map
        }
    },
    [
        ["uh6c", 0, 1, 2]
    ]
]);