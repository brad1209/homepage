_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [14], {
        0: function(e, t, n) {
            n("74v/"), e.exports = n("nOHt")
        },
        "20a2": function(e, t, n) {
            e.exports = n("nOHt")
        },
        "74v/": function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n("cha2")
            }])
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
                c = n("elyg"),
                i = n("nOHt"),
                s = n("vNVm"),
                u = {};

            function l(e, t, n, r) {
                if ((0, c.isLocalURL)(t)) {
                    e.prefetch(t, n, r).catch((function(e) {
                        0
                    }));
                    var o = r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
                    u[t + "%" + n + (o ? "%" + o : "")] = !0
                }
            }
            var f = function(e) {
                var t = !1 !== e.prefetch,
                    n = (0, i.useRouter)(),
                    o = n && n.pathname || "/",
                    f = a.default.useMemo((function() {
                        var t = (0, c.resolveHref)(o, e.href, !0),
                            n = r(t, 2),
                            a = n[0],
                            i = n[1];
                        return {
                            href: a,
                            as: e.as ? (0, c.resolveHref)(o, e.as) : i || a
                        }
                    }), [o, e.href, e.as]),
                    d = f.href,
                    m = f.as,
                    h = e.children,
                    p = e.replace,
                    v = e.shallow,
                    b = e.scroll,
                    j = e.locale;
                "string" === typeof h && (h = a.default.createElement("a", null, h));
                var g = a.Children.only(h),
                    O = g && "object" === typeof g && g.ref,
                    y = (0, s.useIntersection)({
                        rootMargin: "200px"
                    }),
                    x = r(y, 2),
                    w = x[0],
                    k = x[1],
                    E = a.default.useCallback((function(e) {
                        w(e), O && ("function" === typeof O ? O(e) : "object" === typeof O && (O.current = e))
                    }), [O, w]);
                (0, a.useEffect)((function() {
                    var e = k && t && (0, c.isLocalURL)(d),
                        r = "undefined" !== typeof j ? j : n && n.locale,
                        o = u[d + "%" + m + (r ? "%" + r : "")];
                    e && !o && l(n, d, m, {
                        locale: r
                    })
                }), [m, d, k, j, t, n]);
                var T = {
                    ref: E,
                    onClick: function(e) {
                        g.props && "function" === typeof g.props.onClick && g.props.onClick(e), e.defaultPrevented || function(e, t, n, r, o, a, i, s) {
                            ("A" !== e.currentTarget.nodeName || ! function(e) {
                                var t = e.currentTarget.target;
                                return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                            }(e) && (0, c.isLocalURL)(n)) && (e.preventDefault(), null == i && (i = r.indexOf("#") < 0), t[o ? "replace" : "push"](n, r, {
                                shallow: a,
                                locale: s
                            }).then((function(e) {
                                e && i && (window.scrollTo(0, 0), document.body.focus())
                            })))
                        }(e, n, d, m, p, v, b, j)
                    },
                    onMouseEnter: function(e) {
                        (0, c.isLocalURL)(d) && (g.props && "function" === typeof g.props.onMouseEnter && g.props.onMouseEnter(e), l(n, d, m, {
                            priority: !0
                        }))
                    }
                };
                return (e.passHref || "a" === g.type && !("href" in g.props)) && (T.href = (0, c.addBasePath)((0, c.addLocale)(m, "undefined" !== typeof j ? j : n && n.locale, n && n.defaultLocale))), a.default.cloneElement(g, T)
            };
            t.default = f
        },
        cha2: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("rePB"),
                o = n("nKUr"),
                a = (n("zPlV"), n("YFqc")),
                c = n.n(a),
                i = n("IP2g"),
                s = n("q1tI"),
                u = n.n(s),
                l = n("g4pe"),
                f = n.n(l),
                d = Object(s.createContext)({
                    setTheme: function(e) {},
                    themes: []
                }),
                m = function(e) {
                    var t = e.forcedTheme,
                        n = e.disableTransitionOnChange,
                        r = void 0 !== n && n,
                        o = e.enableSystem,
                        a = void 0 === o || o,
                        c = e.storageKey,
                        i = void 0 === c ? "theme" : c,
                        l = e.themes,
                        f = void 0 === l ? ["light", "dark"] : l,
                        m = e.defaultTheme,
                        b = void 0 === m ? "light" : m,
                        j = e.attribute,
                        g = void 0 === j ? "data-theme" : j,
                        O = e.value,
                        y = e.children,
                        x = Object(s.useState)((function() {
                            return p(i)
                        })),
                        w = x[0],
                        k = x[1],
                        E = Object(s.useState)((function() {
                            return p(i)
                        })),
                        T = E[0],
                        _ = E[1],
                        S = O ? Object.values(O) : f,
                        N = Object(s.useCallback)((function(e, t) {
                            void 0 === t && (t = !0);
                            var n = (null == O ? void 0 : O[e]) || e,
                                o = r ? v() : null;
                            if (t) try {
                                localStorage.setItem(i, e)
                            } catch (e) {}
                            var a, c = document.documentElement;
                            "class" === g ? ((a = c.classList).remove.apply(a, S), c.classList.add(n)) : c.setAttribute(g, n), null == o || o()
                        }), []),
                        C = Object(s.useCallback)((function(e) {
                            var t = e.matches ? "dark" : "light";
                            _(t), "system" === w && N(t, !1)
                        }), [w]);
                    Object(s.useEffect)((function() {
                        if (a) {
                            var e = window.matchMedia("(prefers-color-scheme: dark)");
                            return e.addListener(C), C(e),
                                function() {
                                    return e.removeListener(C)
                                }
                        }
                    }), [C]);
                    var I = Object(s.useCallback)((function(e) {
                        t || (N(e), k(e))
                    }), []);
                    return Object(s.useEffect)((function() {
                        var e = function(e) {
                            e.key === i && I(e.newValue)
                        };
                        return window.addEventListener("storage", e),
                            function() {
                                return window.removeEventListener("storage", e)
                            }
                    }), []), u.a.createElement(d.Provider, {
                        value: {
                            theme: w,
                            setTheme: I,
                            forcedTheme: t,
                            resolvedTheme: "system" === w ? T : w,
                            themes: a ? [].concat(f, ["system"]) : f,
                            systemTheme: a ? T : void 0
                        }
                    }, u.a.createElement(h, {
                        forcedTheme: t,
                        storageKey: i,
                        attribute: g,
                        value: O,
                        enableSystem: a,
                        defaultTheme: b,
                        attrs: S
                    }), y)
                },
                h = Object(s.memo)((function(e) {
                    var t = e.forcedTheme,
                        n = e.storageKey,
                        r = e.attribute,
                        o = e.enableSystem,
                        a = e.defaultTheme,
                        c = e.value,
                        i = "class" === r ? "var d=document.documentElement.classList;d.remove(" + e.attrs.map((function(e) {
                            return "'" + e + "'"
                        })).join(",") + ");" : "var d=document.documentElement;",
                        s = function(e, t) {
                            e = (null == c ? void 0 : c[e]) || e;
                            var n = t ? e : "'" + e + "'";
                            return "class" === r ? "d.add(" + n + ")" : "d.setAttribute('" + r + "', " + n + ")"
                        };
                    return u.a.createElement(f.a, null, u.a.createElement("script", t ? {
                        key: "next-themes-script",
                        dangerouslySetInnerHTML: {
                            __html: "!function(){" + i + s(t) + "}()"
                        }
                    } : o ? {
                        key: "next-themes-script",
                        dangerouslySetInnerHTML: {
                            __html: "!function(){try {" + i + "var e=localStorage.getItem('" + n + "');if(!e)return localStorage.setItem('" + n + "','" + a + "')," + s(a) + ';if("system"===e){var t="(prefers-color-scheme: dark)",m=window.matchMedia(t);m.media!==t||m.matches?' + s("dark") + ":" + s("light") + "}else " + (c ? "var x=" + JSON.stringify(c) + ";" : "") + s(c ? "x[e]" : "e", !0) + "}catch(e){}}()"
                        }
                    } : {
                        key: "next-themes-script",
                        dangerouslySetInnerHTML: {
                            __html: "!function(){try{" + i + 'var t=localStorage.getItem("' + n + '");if(!t)return localStorage.setItem("' + n + '","' + a + '"),' + s(a) + ";" + (c ? "var x=" + JSON.stringify(c) + ";" : "") + s(c ? "x[t]" : "t", !0) + "}catch(t){}}();"
                        }
                    }))
                }), (function(e, t) {
                    return e.forcedTheme === t.forcedTheme
                })),
                p = function(e) {
                    if ("undefined" != typeof window) {
                        var t;
                        try {
                            t = localStorage.getItem(e) || void 0
                        } catch (e) {}
                        return t
                    }
                },
                v = function() {
                    var e = document.createElement("style");
                    return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(e),
                        function() {
                            window.getComputedStyle(e), document.head.removeChild(e)
                        }
                },
                b = function() {
                    var e = Object(s.useState)(!1),
                        t = e[0],
                        n = e[1],
                        r = Object(s.useContext)(d),
                        a = r.theme,
                        c = r.setTheme;
                    return Object(s.useEffect)((function() {
                        return n(!0)
                    }), []), Object(o.jsx)("button", {
                        "aria-label": "Toggle Dark Mode",
                        type: "button",
                        className: "focus:outline-none bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10",
                        onClick: function() {
                            return c("dark" === a ? "light" : "dark")
                        },
                        children: t && Object(o.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            stroke: "currentColor",
                            className: "h-4 w-4 text-gray-800 dark:text-gray-200",
                            children: "light" === a ? Object(o.jsx)(i.a, {
                                icon: ["far", "moon"]
                            }) : Object(o.jsx)(i.a, {
                                icon: ["fad", "sun"]
                            })
                        })
                    })
                },
                j = function() {
                    return Object(o.jsxs)("nav", {
                        className: "w-full flex justify-start items-center mx-auto max-w-4xl px-8 my-20",
                        children: [Object(o.jsx)(c.a, {
                            href: "/",
                            children: Object(o.jsx)("a", {
                                "aria-label": "Home",
                                className: "focus:outline-none mr-10 transition duration-300 ease-in-out hover:text-indigo-900 dark:hover:text-indigo-200",
                                children: Object(o.jsx)(i.a, {
                                    icon: ["fas", "globe-europe"]
                                })
                            })
                        }), Object(o.jsx)(c.a, {
                            href: "/projects",
                            children: Object(o.jsx)("a", {
                                className: "focus:outline-none mr-10 transition duration-300 ease-in-out hover:text-indigo-900 dark:hover:text-indigo-200",
                                children: "Projects"
                            })
                        }), Object(o.jsx)(c.a, {
                            href: "/blog",
                            children: Object(o.jsx)("a", {
                                className: "focus:outline-none mr-10 transition duration-300 ease-in-out hover:text-indigo-900 dark:hover:text-indigo-200",
                                children: "Blog"
                            })
                        }), Object(o.jsx)("div", {
                            className: "ml-auto",
                            children: Object(o.jsx)(b, {})
                        })]
                    })
                },
                g = n("20a2"),
                O = n("5I6T"),
                y = n("7O5W"),
                x = n("8tEE"),
                w = n("wHSu"),
                k = {
                    prefix: "far",
                    iconName: "clock",
                    icon: [512, 512, [], "f017", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"]
                },
                E = n("uB96"),
                T = n("IIzM");

            function _(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? _(Object(n), !0).forEach((function(t) {
                        Object(r.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            y.b.add(x.d, x.b, x.a, x.c, w.b, w.a, w.c, k, E.a, E.c, E.e, E.d, E.b, T.a);
            t.default = function(e) {
                var t = e.Component,
                    n = e.pageProps,
                    r = Object(g.useRouter)();
                return Object(o.jsxs)(m, {
                    attribute: "class",
                    defaultTheme: "dark",
                    children: [Object(o.jsxs)(f.a, {
                        children: [Object(o.jsx)("meta", {
                            property: "og:url",
                            content: "https://ling-nyc.com"
                        }), Object(o.jsx)("meta", {
                            property: "og:site_name",
                            content: "ling-nyc"
                        }), Object(o.jsx)("meta", {
                            property: "og:image",
                            content: "/ven.png"
                        }), Object(o.jsx)("meta", {
                            name: "theme-color",
                            content: "#6a0dad"
                        }), Object(o.jsx)("meta", {
                            name: "twitter:card",
                            content: "summary"
                        })]
                    }), Object(o.jsxs)("div", {
                        className: "flex flex-col min-h-screen",
                        children: ["/planet" !== r.pathname && Object(o.jsx)(j, {}), Object(o.jsx)(O.a, {
                            position: "bottom-left"
                        }), Object(o.jsx)("div", {
                            className: "h-full md:px-0 ".concat("/planet" !== r.pathname && "px-10"),
                            children: Object(o.jsx)(t, S({}, n))
                        })]
                    })]
                })
            }
        },
        rePB: function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        vNVm: function(e, t, n) {
            "use strict";
            var r = n("J4zp"),
                o = n("TqRt");
            t.__esModule = !0, t.useIntersection = function(e) {
                var t = e.rootMargin,
                    n = e.disabled || !i,
                    o = (0, a.useRef)(),
                    u = (0, a.useState)(!1),
                    l = r(u, 2),
                    f = l[0],
                    d = l[1],
                    m = (0, a.useCallback)((function(e) {
                        o.current && (o.current(), o.current = void 0), n || f || e && e.tagName && (o.current = function(e, t, n) {
                            var r = function(e) {
                                    var t = e.rootMargin || "",
                                        n = s.get(t);
                                    if (n) return n;
                                    var r = new Map,
                                        o = new IntersectionObserver((function(e) {
                                            e.forEach((function(e) {
                                                var t = r.get(e.target),
                                                    n = e.isIntersecting || e.intersectionRatio > 0;
                                                t && n && t(n)
                                            }))
                                        }), e);
                                    return s.set(t, n = {
                                        id: t,
                                        observer: o,
                                        elements: r
                                    }), n
                                }(n),
                                o = r.id,
                                a = r.observer,
                                c = r.elements;
                            return c.set(e, t), a.observe(e),
                                function() {
                                    a.unobserve(e), 0 === c.size && (a.disconnect(), s.delete(o))
                                }
                        }(e, (function(e) {
                            return e && d(e)
                        }), {
                            rootMargin: t
                        }))
                    }), [n, t, f]);
                return (0, a.useEffect)((function() {
                    i || f || (0, c.default)((function() {
                        return d(!0)
                    }))
                }), [f]), [m, f]
            };
            var a = n("q1tI"),
                c = o(n("0G5g")),
                i = "undefined" !== typeof IntersectionObserver;
            var s = new Map
        },
        zPlV: function(e, t, n) {}
    },
    [
        [0, 0, 1, 8, 10, 7, 9, 2, 3, 4]
    ]
]);
