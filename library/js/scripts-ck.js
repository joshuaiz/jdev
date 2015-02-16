/*
 * Bones Scripts File
 * Author: Eddie Machado/Joshua Michaels
 *
 * This file should contain any js scripts you want to add to the site.
 * Instead of calling it in the header or throwing it inside wp_head()
 * this file will be called automatically in the footer so as not to
 * slow the page load.
 *
 * There are a lot of example functions and tools in here. If you don't
 * need any of it, just remove it. They are meant to be helpers and are
 * not required. It's your world baby, you can do whatever you want.
*//*
 * Get Viewport Dimensions
 * returns object with viewport dimensions to match css in width and height properties
 * ( source: http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript )
*/function updateViewportDimensions() {
    var e = window, t = document, n = t.documentElement, r = t.getElementsByTagName("body")[0], i = e.innerWidth || n.clientWidth || r.clientWidth, s = e.innerHeight || n.clientHeight || r.clientHeight;
    return {
        width: i,
        height: s
    };
}

function loadGravatars() {
    viewport = updateViewportDimensions();
    viewport.width >= 768 && jQuery(".comment img[data-gravatar]").each(function() {
        jQuery(this).attr("src", $(this).attr("data-gravatar"));
    });
}

function is_touch_device() {
    return "ontouchstart" in window;
}

var viewport = updateViewportDimensions(), waitForFinalEvent = function() {
    var e = {};
    return function(t, n, r) {
        r || (r = "Don't call this twice without a uniqueId");
        e[r] && clearTimeout(e[r]);
        e[r] = setTimeout(t, n);
    };
}(), timeToWaitForLast = 100;

jQuery(document).ready(function(e) {
    function n() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
    var t = 75;
    e(window).scroll(function() {
        var r = n();
        if (r >= t) {
            e(".header, .header-background").addClass("shrink");
            e("body").addClass("header-shrink");
            e(".breadcrumbs").addClass("bc-sticky");
        } else {
            e(".header, .header-background").removeClass("shrink");
            e("body").removeClass("header-shrink");
            e(".breadcrumbs").removeClass("bc-sticky");
        }
    });
    if (e(".ipad, .iphone").length > 0) {
        e(".header, .header-background").addClass("shrink-mobile");
        e(".breadcrumbs").addClass("bc-sticky");
    }
    navigator.userAgent.match(/iPhone/i) && (navigator.userAgent.match(/iPhone OS 4/i) || /iPhone OS 5/i) && e("body").addClass("iphone4");
    e("#menu-item-290 > ul.sub-menu").hover(function() {
        e("#menu-item-290 > a").toggleClass("jockey-red");
    });
    e("#menu-item-291 > ul.sub-menu").hover(function() {
        e("#menu-item-291 > a").toggleClass("jockey-red");
    });
    e("#menu-item-22 > ul.sub-menu").addClass("partner-ul");
    e("#menu-item-22 > ul li").slice(0, 10).wrapAll("<div class='partner-group columnleft'>").hover(function() {
        e("#menu-item-22 > a").toggleClass("jockey-red");
    });
    e("#menu-item-22 > ul li").slice(10, 20).wrapAll("<div class='partner-group columnright'>").hover(function() {
        e("#menu-item-22 > a").toggleClass("jockey-red");
    });
    e("<br />").insertAfter(".entry-content iframe");
    e('#breadcrumbs a[href*="global-seasonal-fashion"]').attr("href", "#");
    e('#breadcrumbs a[href*="global-programs"]').attr("href", "#");
});

jQuery(document).ready(function(e) {
    is_touch_device() && e("#menu-main li:not(.mobile-tl) > ul").each(function(t, n) {
        e(n).prev("a:first").click(function(e) {
            e.preventDefault();
        });
    });
});

!function() {
    function e() {}
    function t(e) {
        return s.retinaImageSuffix + e;
    }
    function n(e, n) {
        if (this.path = e || "", "undefined" != typeof n && null !== n) this.at_2x_path = n, this.perform_check = !1; else {
            if (void 0 !== document.createElement) {
                var r = document.createElement("a");
                r.href = this.path, r.pathname = r.pathname.replace(o, t), this.at_2x_path = r.href;
            } else {
                var i = this.path.split("?");
                i[0] = i[0].replace(o, t), this.at_2x_path = i.join("?");
            }
            this.perform_check = !0;
        }
    }
    function r(e) {
        this.el = e, this.path = new n(this.el.getAttribute("src"), this.el.getAttribute("data-at2x"));
        var t = this;
        this.path.check_2x_variant(function(e) {
            e && t.swap();
        });
    }
    var i = "undefined" == typeof exports ? window : exports, s = {
        retinaImageSuffix: "@2x",
        check_mime_type: !0,
        force_original_dimensions: !0
    };
    i.Retina = e, e.configure = function(e) {
        null === e && (e = {});
        for (var t in e) e.hasOwnProperty(t) && (s[t] = e[t]);
    }, e.init = function(e) {
        null === e && (e = i);
        var t = e.onload || function() {};
        e.onload = function() {
            var e, n, i = document.getElementsByTagName("img"), s = [];
            for (e = 0; e < i.length; e += 1) n = i[e], n.getAttributeNode("data-no-retina") || s.push(new r(n));
            t();
        };
    }, e.isRetina = function() {
        var e = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
        return i.devicePixelRatio > 1 ? !0 : i.matchMedia && i.matchMedia(e).matches ? !0 : !1;
    };
    var o = /\.\w+$/;
    i.RetinaImagePath = n, n.confirmed_paths = [], n.prototype.is_external = function() {
        return !!this.path.match(/^https?\:/i) && !this.path.match("//" + document.domain);
    }, n.prototype.check_2x_variant = function(e) {
        var t, r = this;
        return this.is_external() ? e(!1) : this.perform_check || "undefined" == typeof this.at_2x_path || null === this.at_2x_path ? this.at_2x_path in n.confirmed_paths ? e(!0) : (t = new XMLHttpRequest, t.open("HEAD", this.at_2x_path), t.onreadystatechange = function() {
            if (4 !== t.readyState) return e(!1);
            if (t.status >= 200 && t.status <= 399) {
                if (s.check_mime_type) {
                    var i = t.getResponseHeader("Content-Type");
                    if (null === i || !i.match(/^image/i)) return e(!1);
                }
                return n.confirmed_paths.push(r.at_2x_path), e(!0);
            }
            return e(!1);
        }, t.send(), void 0) : e(!0);
    }, i.RetinaImage = r, r.prototype.swap = function(e) {
        function t() {
            n.el.complete ? (s.force_original_dimensions && (n.el.setAttribute("width", n.el.offsetWidth), n.el.setAttribute("height", n.el.offsetHeight)), n.el.setAttribute("src", e)) : setTimeout(t, 5);
        }
        "undefined" == typeof e && (e = this.path.at_2x_path);
        var n = this;
        t();
    }, e.isRetina() && e.init(i);
}();

(function(e) {
    "use strict";
    function T() {
        w(!0);
    }
    var t = {};
    e.respond = t;
    t.update = function() {};
    var n = [], r = function() {
        var t = !1;
        try {
            t = new e.XMLHttpRequest;
        } catch (n) {
            t = new e.ActiveXObject("Microsoft.XMLHTTP");
        }
        return function() {
            return t;
        };
    }(), i = function(e, t) {
        var n = r();
        if (!n) return;
        n.open("GET", e, !0);
        n.onreadystatechange = function() {
            if (n.readyState !== 4 || n.status !== 200 && n.status !== 304) return;
            t(n.responseText);
        };
        if (n.readyState === 4) return;
        n.send(null);
    }, s = function(e) {
        return e.replace(t.regex.minmaxwh, "").match(t.regex.other);
    };
    t.ajax = i;
    t.queue = n;
    t.unsupportedmq = s;
    t.regex = {
        media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
        keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
        comments: /\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,
        urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
        findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
        only: /(only\s+)?([a-zA-Z]+)\s?/,
        minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
        maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
        minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
        other: /\([^\)]*\)/g
    };
    t.mediaQueriesSupported = e.matchMedia && e.matchMedia("only all") !== null && e.matchMedia("only all").matches;
    if (t.mediaQueriesSupported) return;
    var o = e.document, u = o.documentElement, a = [], f = [], l = [], c = {}, h = 30, p = o.getElementsByTagName("head")[0] || u, d = o.getElementsByTagName("base")[0], v = p.getElementsByTagName("link"), m, g, y, b = function() {
        var e, t = o.createElement("div"), n = o.body, r = u.style.fontSize, i = n && n.style.fontSize, s = !1;
        t.style.cssText = "position:absolute;font-size:1em;width:1em";
        if (!n) {
            n = s = o.createElement("body");
            n.style.background = "none";
        }
        u.style.fontSize = "100%";
        n.style.fontSize = "100%";
        n.appendChild(t);
        s && u.insertBefore(n, u.firstChild);
        e = t.offsetWidth;
        s ? u.removeChild(n) : n.removeChild(t);
        u.style.fontSize = r;
        i && (n.style.fontSize = i);
        e = y = parseFloat(e);
        return e;
    }, w = function(t) {
        var n = "clientWidth", r = u[n], i = o.compatMode === "CSS1Compat" && r || o.body[n] || r, s = {}, c = v[v.length - 1], d = (new Date).getTime();
        if (t && m && d - m < h) {
            e.clearTimeout(g);
            g = e.setTimeout(w, h);
            return;
        }
        m = d;
        for (var E in a) if (a.hasOwnProperty(E)) {
            var S = a[E], x = S.minw, T = S.maxw, N = x === null, C = T === null, k = "em";
            !x || (x = parseFloat(x) * (x.indexOf(k) > -1 ? y || b() : 1));
            !T || (T = parseFloat(T) * (T.indexOf(k) > -1 ? y || b() : 1));
            if (!S.hasquery || (!N || !C) && (N || i >= x) && (C || i <= T)) {
                s[S.media] || (s[S.media] = []);
                s[S.media].push(f[S.rules]);
            }
        }
        for (var L in l) l.hasOwnProperty(L) && l[L] && l[L].parentNode === p && p.removeChild(l[L]);
        l.length = 0;
        for (var A in s) if (s.hasOwnProperty(A)) {
            var O = o.createElement("style"), M = s[A].join("\n");
            O.type = "text/css";
            O.media = A;
            p.insertBefore(O, c.nextSibling);
            O.styleSheet ? O.styleSheet.cssText = M : O.appendChild(o.createTextNode(M));
            l.push(O);
        }
    }, E = function(e, n, r) {
        var i = e.replace(t.regex.comments, "").replace(t.regex.keyframes, "").match(t.regex.media), o = i && i.length || 0;
        n = n.substring(0, n.lastIndexOf("/"));
        var u = function(e) {
            return e.replace(t.regex.urls, "$1" + n + "$2$3");
        }, l = !o && r;
        n.length && (n += "/");
        l && (o = 1);
        for (var c = 0; c < o; c++) {
            var h, p, d, v;
            if (l) {
                h = r;
                f.push(u(e));
            } else {
                h = i[c].match(t.regex.findStyles) && RegExp.$1;
                f.push(RegExp.$2 && u(RegExp.$2));
            }
            d = h.split(",");
            v = d.length;
            for (var m = 0; m < v; m++) {
                p = d[m];
                if (s(p)) continue;
                a.push({
                    media: p.split("(")[0].match(t.regex.only) && RegExp.$2 || "all",
                    rules: f.length - 1,
                    hasquery: p.indexOf("(") > -1,
                    minw: p.match(t.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                    maxw: p.match(t.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                });
            }
        }
        w();
    }, S = function() {
        if (n.length) {
            var t = n.shift();
            i(t.href, function(n) {
                E(n, t.href, t.media);
                c[t.href] = !0;
                e.setTimeout(function() {
                    S();
                }, 0);
            });
        }
    }, x = function() {
        for (var t = 0; t < v.length; t++) {
            var r = v[t], i = r.href, s = r.media, o = r.rel && r.rel.toLowerCase() === "stylesheet";
            if (!!i && o && !c[i]) if (r.styleSheet && r.styleSheet.rawCssText) {
                E(r.styleSheet.rawCssText, i, s);
                c[i] = !0;
            } else if (!/^([a-zA-Z:]*\/\/)/.test(i) && !d || i.replace(RegExp.$1, "").split("/")[0] === e.location.host) {
                i.substring(0, 2) === "//" && (i = e.location.protocol + i);
                n.push({
                    href: i,
                    media: s
                });
            }
        }
        S();
    };
    x();
    t.update = x;
    t.getEmValue = b;
    e.addEventListener ? e.addEventListener("resize", T, !1) : e.attachEvent && e.attachEvent("onresize", T);
})(this);

(function(e) {
    function O(e) {
        return e.replace(v, A).replace(m, function(e, t, n) {
            var r = n.split(",");
            for (var i = 0, s = r.length; i < s; i++) {
                var o = I(r[i]) + L, u = [];
                r[i] = o.replace(g, function(e, t, n, r, i) {
                    if (t) {
                        if (u.length > 0) {
                            D(o.substring(0, i), u);
                            u = [];
                        }
                        return t;
                    }
                    var s = n ? _(n) : M(r);
                    if (s) {
                        u.push(s);
                        return "." + s.className;
                    }
                    return e;
                });
            }
            return t + r.join(",");
        });
    }
    function M(e) {
        return !S || S.test(e) ? {
            className: H(e),
            applyClass: !0
        } : null;
    }
    function _(t) {
        var r = !0, s = H(t.slice(1)), o = t.substring(0, 5) == ":not(", a, f;
        o && (t = t.slice(5, -1));
        var l = t.indexOf("(");
        l > -1 && (t = t.substring(0, l));
        if (t.charAt(0) == ":") switch (t.slice(1)) {
          case "root":
            r = function(e) {
                return o ? e != n : e == n;
            };
            break;
          case "target":
            if (i == 8) {
                r = function(t) {
                    var n = function() {
                        var e = location.hash, n = e.slice(1);
                        return o ? e == k || t.id != n : e != k && t.id == n;
                    };
                    U(e, "hashchange", function() {
                        q(t, s, n());
                    });
                    return n();
                };
                break;
            }
            return !1;
          case "checked":
            r = function(e) {
                E.test(e.type) && U(e, "propertychange", function() {
                    event.propertyName == "checked" && q(e, s, e.checked !== o);
                });
                return e.checked !== o;
            };
            break;
          case "disabled":
            o = !o;
          case "enabled":
            r = function(e) {
                if (w.test(e.tagName)) {
                    U(e, "propertychange", function() {
                        event.propertyName == "$disabled" && q(e, s, e.$disabled === o);
                    });
                    u.push(e);
                    e.$disabled = e.disabled;
                    return e.disabled === o;
                }
                return t == ":enabled" ? o : !o;
            };
            break;
          case "focus":
            a = "focus";
            f = "blur";
          case "hover":
            if (!a) {
                a = "mouseenter";
                f = "mouseleave";
            }
            r = function(e) {
                U(e, o ? f : a, function() {
                    q(e, s, !0);
                });
                U(e, o ? a : f, function() {
                    q(e, s, !1);
                });
                return o;
            };
            break;
          default:
            if (!d.test(t)) return !1;
        }
        return {
            className: s,
            applyClass: r
        };
    }
    function D(e, t) {
        var n, r = e.replace(y, k);
        if (r == k || r.charAt(r.length - 1) == L) r += "*";
        try {
            n = o(r);
        } catch (i) {
            B("Selector '" + e + "' threw exception '" + i + "'");
        }
        if (n) for (var s = 0, u = n.length; s < u; s++) {
            var a = n[s], f = a.className;
            for (var l = 0, c = t.length; l < c; l++) {
                var h = t[l];
                P(a, h) || h.applyClass && (h.applyClass === !0 || h.applyClass(a) === !0) && (f = R(f, h.className, !0));
            }
            a.className = f;
        }
    }
    function P(e, t) {
        return (new RegExp("(^|\\s)" + t.className + "(\\s|$)")).test(e.className);
    }
    function H(e) {
        return l + "-" + (i == 6 && f ? a++ : e.replace(b, function(e) {
            return e.charCodeAt(0);
        }));
    }
    function B(t) {
        e.console && e.console.log(t);
    }
    function j(e) {
        return e.replace(C, A);
    }
    function F(e) {
        return j(e).replace(N, L);
    }
    function I(e) {
        return F(e.replace(x, A).replace(T, A));
    }
    function q(e, t, n) {
        var r = e.className, i = R(r, t, n);
        if (i != r) {
            e.className = i;
            e.parentNode.className += k;
        }
    }
    function R(e, t, n) {
        var r = RegExp("(^|\\s)" + t + "(\\s|$)"), i = r.test(e);
        return n ? i ? e : e + L + t : i ? j(e.replace(r, A)) : e;
    }
    function U(e, t, n) {
        e.attachEvent("on" + t, n);
    }
    function z() {
        if (e.XMLHttpRequest) return new XMLHttpRequest;
        try {
            return new ActiveXObject("Microsoft.XMLHTTP");
        } catch (t) {
            return null;
        }
    }
    function W(e) {
        r.open("GET", e, !1);
        r.send();
        return r.status == 200 ? r.responseText : k;
    }
    function X(e, t) {
        function n(e) {
            return e.substring(0, e.indexOf("/", 8));
        }
        if (/^https?:\/\//i.test(e)) return n(t) == n(e) ? e : null;
        if (e.charAt(0) == "/") return n(t) + e;
        var r = t.split(/[?#]/)[0];
        e.charAt(0) != "?" && r.charAt(r.length - 1) != "/" && (r = r.substring(0, r.lastIndexOf("/") + 1));
        return r + e;
    }
    function V(e) {
        return e ? W(e).replace(c, k).replace(h, function(t, n, r, i, s) {
            return V(X(r || s, e));
        }).replace(p, function(t, n, r) {
            n = n || k;
            return " url(" + n + X(r, e) + n + ") ";
        }) : k;
    }
    function $() {
        var e, n, r = t.getElementsByTagName("BASE"), i = r.length > 0 ? r[0].href : t.location.href;
        for (var s = 0; s < t.styleSheets.length; s++) {
            n = t.styleSheets[s];
            if (n.href != k) {
                e = X(n.href, i);
                e && (n.cssText = O(V(e)));
            }
        }
        u.length > 0 && setInterval(function() {
            for (var e = 0, t = u.length; e < t; e++) {
                var n = u[e];
                if (n.disabled !== n.$disabled) if (n.disabled) {
                    n.disabled = !1;
                    n.$disabled = !0;
                    n.disabled = !0;
                } else n.$disabled = n.disabled;
            }
        }, 250);
    }
    function J(e, r) {
        var i = !1, s = !0, o = function(n) {
            if (n.type == "readystatechange" && t.readyState != "complete") return;
            (n.type == "load" ? e : t).detachEvent("on" + n.type, o, !1);
            !i && (i = !0) && r.call(e, n.type || n);
        }, u = function() {
            try {
                n.doScroll("left");
            } catch (e) {
                setTimeout(u, 50);
                return;
            }
            o("poll");
        };
        if (t.readyState == "complete") r.call(e, k); else {
            if (t.createEventObject && n.doScroll) {
                try {
                    s = !e.frameElement;
                } catch (a) {}
                s && u();
            }
            U(t, "readystatechange", o);
            U(e, "load", o);
        }
    }
    return;
})(this);