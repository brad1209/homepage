_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [20], {
        "7W2i": function(t, e, r) {
            var n = r("SksO");
            t.exports = function(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && n(t, e)
            }
        },
        FYa8: function(t, e, r) {
            "use strict";
            var n;
            e.__esModule = !0, e.HeadManagerContext = void 0;
            var o = ((n = r("q1tI")) && n.__esModule ? n : {
                default: n
            }).default.createContext({});
            e.HeadManagerContext = o
        },
        Nsbk: function(t, e) {
            function r(e) {
                return t.exports = r = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, r(e)
            }
            t.exports = r
        },
        PJYZ: function(t, e) {
            t.exports = function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }
        },
        Qetd: function(t, e, r) {
            "use strict";
            var n = Object.assign.bind(Object);
            t.exports = n, t.exports.default = t.exports
        },
        R055: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = function(t) {
                if (t && t.__esModule) return t;
                if (null === t || "object" !== i(t) && "function" !== typeof t) return {
                    default: t
                };
                var e = o();
                if (e && e.has(t)) return e.get(t);
                var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var c in t)
                    if (Object.prototype.hasOwnProperty.call(t, c)) {
                        var s = n ? Object.getOwnPropertyDescriptor(t, c) : null;
                        s && (s.get || s.set) ? Object.defineProperty(r, c, s) : r[c] = t[c]
                    }
                r.default = t, e && e.set(t, r);
                return r
            }(r("q1tI"));

            function o() {
                if ("function" !== typeof WeakMap) return null;
                var t = new WeakMap;
                return o = function() {
                    return t
                }, t
            }

            function i(t) {
                return (i = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function c(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function s(t, e) {
                return (s = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function a(t, e) {
                return !e || "object" !== i(e) && "function" !== typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function u() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }

            function l(t) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var f = function(t) {
                ! function(t, e) {
                    if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && s(t, e)
                }(p, t);
                var e, r, o, i, f = (e = p, function() {
                    var t, r = l(e);
                    if (u()) {
                        var n = l(this).constructor;
                        t = Reflect.construct(r, arguments, n)
                    } else t = r.apply(this, arguments);
                    return a(this, t)
                });

                function p() {
                    var t;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, p), (t = f.call(this)).state = {
                        maxIsVisible: 0
                    }, t
                }
                return r = p, (o = [{
                    key: "componentDidMount",
                    value: function() {
                        var t = this,
                            e = n.default.Children.count(this.props.children),
                            r = 0;
                        this.interval = setInterval((function() {
                            ++r > e && clearInterval(t.interval), t.setState({
                                maxIsVisible: r
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
                        var t = this,
                            e = this.transitionDuration,
                            r = this.props.wrapperTag || "div",
                            o = this.props.childTag || "div";
                        return n.default.createElement(r, {
                            className: this.props.className
                        }, n.default.Children.map(this.props.children, (function(r, i) {
                            return n.default.createElement(o, {
                                className: t.props.childClassName,
                                style: {
                                    transition: "opacity ".concat(e, "ms, transform ").concat(e, "ms"),
                                    transform: t.state.maxIsVisible > i ? "none" : "translateY(20px)",
                                    opacity: t.state.maxIsVisible > i ? 1 : 0
                                }
                            }, r)
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
                }]) && c(r.prototype, o), i && c(r, i), p
            }(n.Component);
            e.default = f
        },
        SksO: function(t, e) {
            function r(e, n) {
                return t.exports = r = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, r(e, n)
            }
            t.exports = r
        },
        SpL8: function(t, e, r) {
            "use strict";
            r.r(e);
            var n = r("nKUr"),
                o = r("g4pe"),
                i = r.n(o),
                c = r("dmF/"),
                s = r.n(c),
                a = r("IP2g"),
                u = function(t) {
                    var e = t.title,
                        r = t.description,
                        o = t.url,
                        i = t.icon;
                    return Object(n.jsxs)("a", {
                        href: o,
                        rel: "noopener",
                        target: "_blank",
                        className: "focus:outline-none transition duration-300 ease-in-out transform hover:scale-102.5 flex flex-col sm:flex-row text-center sm:text-left px-8 sm:px-6 py-6 rounded-md border border-gray-800 shadow flex flex-row max-w-2xl",
                        children: [Object(n.jsxs)("div", {
                            className: "flex items-center justify-center text-4xl w-full sm:w-1/12 mr-6 mb-4 sm:mb-0",
                            children: ["discord.bio" === i && Object(n.jsx)(a.a, {
                                icon: ["fab", "discord"]
                            }), "ling-nyc" === i && Object(n.jsx)(a.a, {
                                icon: ["fas", "globe-europe"]
                            })]
                        }), Object(n.jsxs)("div", {
                            className: "flex flex-col w-full sm:w-11/12",
                            children: [Object(n.jsx)("div", {
                                className: "font-bold",
                                children: e
                            }), Object(n.jsx)("div", {
                                className: "text-gray-600 dark:text-gray-300",
                                children: r
                            })]
                        })]
                    })
                },
                l = "A list of all of the projects I've worked on or currently working on.";
            e.default = function() {
                return Object(n.jsxs)(n.Fragment, {
                    children: [Object(n.jsxs)(i.a, {
                        children: [Object(n.jsx)("title", {
                            children: "Projects"
                        }), Object(n.jsx)("meta", {
                            property: "og:title",
                            content: "Projects"
                        }), Object(n.jsx)("meta", {
                            name: "description",
                            content: l
                        }), Object(n.jsx)("meta", {
                            property: "og:description",
                            content: l
                        })]
                    }), Object(n.jsxs)(s.a, {
                        className: "h-full w-full flex flex-col max-w-3xl mx-auto mb-16 sm:px-0",
                        children: [Object(n.jsx)("h1", {
                            className: "text-5xl font-bold",
                            children: "Projects"
                        }), Object(n.jsx)("p", {
                            className: "text-gray-600 dark:text-gray-400 mt-2",
                            children: l
                        }), Object(n.jsxs)("div", {
                            className: "mt-8 grid gap-6",
                            children: [Object(n.jsx)(u, {
                                title: "ling-nyc.com",
                                description: "The website you're currently on! Made with Next.js and utilises serverless functions.",
                                icon: "ven.earth"

                            })]
                        })]
                    })]
                })
            }
        },
        Tk32: function(t, e, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/projects", function() {
                return r("SpL8")
            }])
        },
        W8MJ: function(t, e) {
            function r(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            t.exports = function(t, e, n) {
                return e && r(t.prototype, e), n && r(t, n), t
            }
        },
        WkPL: function(t, e) {
            t.exports = function(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }
        },
        ZhPi: function(t, e, r) {
            var n = r("WkPL");
            t.exports = function(t, e) {
                if (t) {
                    if ("string" === typeof t) return n(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(t, e) : void 0
                }
            }
        },
        a1gu: function(t, e, r) {
            var n = r("cDf5"),
                o = r("PJYZ");
            t.exports = function(t, e) {
                return !e || "object" !== n(e) && "function" !== typeof e ? o(t) : e
            }
        },
        cDf5: function(t, e) {
            function r(e) {
                return "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? t.exports = r = function(t) {
                    return typeof t
                } : t.exports = r = function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, r(e)
            }
            t.exports = r
        },
        "dmF/": function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            });
            var n, o = (n = r("R055")) && n.__esModule ? n : {
                default: n
            }
        },
        lwsE: function(t, e) {
            t.exports = function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
        }
    },
    [
        ["Tk32", 0, 1, 3]
    ]
]);
