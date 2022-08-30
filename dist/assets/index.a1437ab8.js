import {
  a1 as re,
  a8 as pe,
  d as oe,
  o as de,
  aA as ge,
  h as ie,
  e as ye,
  i as ve,
  j as ne,
  g as ae,
  k as he,
  b as xe,
  l as le,
  ak as me,
  al as be,
  _ as ke
} from "./index.69183727.js";
import { u as Ee } from "./hooks.5d98ec2d.js";
var se = { exports: {} };
(function (X, Q) {
  (function (s, r) {
    X.exports = r();
  })(pe, function () {
    return (function (d) {
      var s = {};
      function r(e) {
        if (s[e]) return s[e].exports;
        var o = (s[e] = { i: e, l: !1, exports: {} });
        return d[e].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
      }
      return (
        (r.m = d),
        (r.c = s),
        (r.d = function (e, o, y) {
          r.o(e, o) || Object.defineProperty(e, o, { enumerable: !0, get: y });
        }),
        (r.r = function (e) {
          typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (r.t = function (e, o) {
          if (
            (o & 1 && (e = r(e)),
            o & 8 || (o & 4 && typeof e == "object" && e && e.__esModule))
          )
            return e;
          var y = Object.create(null);
          if (
            (r.r(y),
            Object.defineProperty(y, "default", { enumerable: !0, value: e }),
            o & 2 && typeof e != "string")
          )
            for (var n in e)
              r.d(
                y,
                n,
                function (p) {
                  return e[p];
                }.bind(null, n)
              );
          return y;
        }),
        (r.n = function (e) {
          var o =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return r.d(o, "a", o), o;
        }),
        (r.o = function (e, o) {
          return Object.prototype.hasOwnProperty.call(e, o);
        }),
        (r.p = ""),
        r((r.s = 173))
      );
    })([
      function (d, s, r) {
        Object.defineProperty(s, "__esModule", { value: !0 }),
          (s.util = s.PresentationMode = void 0),
          (s.createDom = n),
          (s.hasClass = p),
          (s.addClass = m),
          (s.removeClass = v),
          (s.toggleClass = l),
          (s.findDom = u),
          (s.padStart = g),
          (s.format = b),
          (s.event = h),
          (s.typeOf = x),
          (s.deepCopy = T),
          (s.getBgImage = O),
          (s.copyDom = L),
          (s._setInterval = R),
          (s._clearInterval = A),
          (s.createImgBtn = M),
          (s.isWeiXin = N),
          (s.isUc = U),
          (s.computeWatchDur = C),
          (s.offInDestroy = a),
          (s.on = i),
          (s.once = t),
          (s.getBuffered2 = c),
          (s.checkIsBrowser = E),
          (s.setStyle = k),
          (s.checkWebkitSetPresentationMode = P);
        var e = r(7),
          o = y(e);
        function y(f) {
          return f && f.__esModule ? f : { default: f };
        }
        function n() {
          var f =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : "div",
            w =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : "",
            S =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : {},
            I =
              arguments.length > 3 && arguments[3] !== void 0
                ? arguments[3]
                : "",
            F = document.createElement(f);
          return (
            (F.className = I),
            (F.innerHTML = w),
            Object.keys(S).forEach(function (_) {
              var D = _,
                B = S[_];
              f === "video" || f === "audio"
                ? B && F.setAttribute(D, B)
                : F.setAttribute(D, B);
            }),
            F
          );
        }
        function p(f, w) {
          return f
            ? f.classList
              ? Array.prototype.some.call(f.classList, function (S) {
                  return S === w;
                })
              : f.className
              ? !!f.className.match(new RegExp("(\\s|^)" + w + "(\\s|$)"))
              : !1
            : !1;
        }
        function m(f, w) {
          !f ||
            (f.classList
              ? w
                  .replace(/(^\s+|\s+$)/g, "")
                  .split(/\s+/g)
                  .forEach(function (S) {
                    S && f.classList.add(S);
                  })
              : p(f, w) || (f.className += " " + w));
        }
        function v(f, w) {
          !f ||
            (f.classList
              ? w.split(/\s+/g).forEach(function (S) {
                  f.classList.remove(S);
                })
              : p(f, w) &&
                w.split(/\s+/g).forEach(function (S) {
                  var I = new RegExp("(\\s|^)" + S + "(\\s|$)");
                  f.className = f.className.replace(I, " ");
                }));
        }
        function l(f, w) {
          !f ||
            w.split(/\s+/g).forEach(function (S) {
              p(f, S) ? v(f, S) : m(f, S);
            });
        }
        function u() {
          var f =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : document,
            w = arguments[1],
            S = void 0;
          try {
            S = f.querySelector(w);
          } catch {
            w.indexOf("#") === 0 && (S = f.getElementById(w.slice(1)));
          }
          return S;
        }
        function g(f, w, S) {
          for (
            var I = String(S),
              F = w >> 0,
              _ = Math.ceil(F / I.length),
              D = [],
              B = String(f);
            _--;

          )
            D.push(I);
          return D.join("").substring(0, F - B.length) + B;
        }
        function b(f) {
          if (window.isNaN(f)) return "";
          var w = g(Math.floor(f / 3600), 2, 0),
            S = g(Math.floor((f - w * 3600) / 60), 2, 0),
            I = g(Math.floor(f - w * 3600 - S * 60), 2, 0);
          return (w === "00" ? [S, I] : [w, S, I]).join(":");
        }
        function h(f) {
          if (f.touches) {
            var w = f.touches[0] || f.changedTouches[0];
            (f.clientX = w.clientX || 0),
              (f.clientY = w.clientY || 0),
              (f.offsetX = w.pageX - w.target.offsetLeft),
              (f.offsetY = w.pageY - w.target.offsetTop);
          }
          f._target = f.target || f.srcElement;
        }
        function x(f) {
          return Object.prototype.toString
            .call(f)
            .match(/([^\s.*]+)(?=]$)/g)[0];
        }
        function T(f, w) {
          if (x(w) === "Object" && x(f) === "Object")
            return (
              Object.keys(w).forEach(function (S) {
                x(w[S]) === "Object" && !(w[S] instanceof Node)
                  ? f[S]
                    ? T(f[S], w[S])
                    : (f[S] = w[S])
                  : x(w[S]) === "Array"
                  ? (f[S] = x(f[S]) === "Array" ? f[S].concat(w[S]) : w[S])
                  : (f[S] = w[S]);
              }),
              f
            );
        }
        function O(f) {
          var w = (f.currentStyle || window.getComputedStyle(f, null))
            .backgroundImage;
          if (!w || w === "none") return "";
          var S = document.createElement("a");
          return (S.href = w.replace(/url\("|"\)/g, "")), S.href;
        }
        function L(f) {
          if (f && f.nodeType === 1) {
            var w = document.createElement(f.tagName);
            return (
              Array.prototype.forEach.call(f.attributes, function (S) {
                w.setAttribute(S.name, S.value);
              }),
              f.innerHTML && (w.innerHTML = f.innerHTML),
              w
            );
          } else return "";
        }
        function R(f, w, S, I) {
          f._interval[w] || (f._interval[w] = setInterval(S.bind(f), I));
        }
        function A(f, w) {
          clearInterval(f._interval[w]), (f._interval[w] = null);
        }
        function M(f, w, S, I) {
          var F = n("xg-" + f, "", {}, "xgplayer-" + f + "-img");
          if (((F.style.backgroundImage = 'url("' + w + '")'), S && I)) {
            var _ = void 0,
              D = void 0,
              B = void 0;
            ["px", "rem", "em", "pt", "dp", "vw", "vh", "vm", "%"].every(
              function (j) {
                return S.indexOf(j) > -1 && I.indexOf(j) > -1
                  ? ((_ = Number(S.slice(0, S.indexOf(j)).trim())),
                    (D = Number(I.slice(0, I.indexOf(j)).trim())),
                    (B = j),
                    !1)
                  : !0;
              }
            ),
              (F.style.width = "" + _ + B),
              (F.style.height = "" + D + B),
              (F.style.backgroundSize = "" + _ + B + " " + D + B),
              f === "start"
                ? (F.style.margin =
                    "-" + D / 2 + B + " auto auto -" + _ / 2 + B)
                : (F.style.margin = "auto 5px auto 5px");
          }
          return F;
        }
        function N() {
          var f = window.navigator.userAgent.toLowerCase();
          return f.indexOf("micromessenger") > -1;
        }
        function U() {
          var f = window.navigator.userAgent.toLowerCase();
          return f.indexOf("ucbrowser") > -1;
        }
        function C() {
          for (
            var f =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : [],
              w = [],
              S = 0;
            S < f.length;
            S++
          )
            if (
              !(
                !f[S].end ||
                f[S].begin < 0 ||
                f[S].end < 0 ||
                f[S].end < f[S].begin
              )
            )
              if (w.length < 1) w.push({ begin: f[S].begin, end: f[S].end });
              else
                for (var I = 0; I < w.length; I++) {
                  var F = f[S].begin,
                    _ = f[S].end;
                  if (_ < w[I].begin) {
                    w.splice(I, 0, { begin: F, end: _ });
                    break;
                  } else if (F > w[I].end) {
                    if (I > w.length - 2) {
                      w.push({ begin: F, end: _ });
                      break;
                    }
                  } else {
                    var D = w[I].begin,
                      B = w[I].end;
                    (w[I].begin = Math.min(F, D)), (w[I].end = Math.max(_, B));
                    break;
                  }
                }
          for (var j = 0, z = 0; z < w.length; z++) j += w[z].end - w[z].begin;
          return j;
        }
        function a(f, w, S, I) {
          function F() {
            f.off(w, S), f.off(I, F);
          }
          f.once(I, F);
        }
        function i(f, w, S, I) {
          if (I) f.on(w, S), a(f, w, S, I);
          else {
            var F = function _(D) {
              S(D), f.off(w, _);
            };
            f.on(w, F);
          }
        }
        function t(f, w, S, I) {
          if (I) f.once(w, S), a(f, w, S, I);
          else {
            var F = function _(D) {
              S(D), f.off(w, _);
            };
            f.once(w, F);
          }
        }
        function c(f) {
          for (
            var w =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : 0.5,
              S = [],
              I = 0;
            I < f.length;
            I++
          )
            S.push({ start: f.start(I) < 0.5 ? 0 : f.start(I), end: f.end(I) });
          S.sort(function (j, z) {
            var V = j.start - z.start;
            return V || z.end - j.end;
          });
          var F = [];
          if (w)
            for (var _ = 0; _ < S.length; _++) {
              var D = F.length;
              if (D) {
                var B = F[D - 1].end;
                S[_].start - B < w
                  ? S[_].end > B && (F[D - 1].end = S[_].end)
                  : F.push(S[_]);
              } else F.push(S[_]);
            }
          else F = S;
          return new o.default(F);
        }
        function E() {
          return !(
            typeof window > "u" ||
            typeof window.document > "u" ||
            typeof window.document.createElement > "u"
          );
        }
        function k(f, w, S) {
          var I = f.style;
          try {
            I[w] = S;
          } catch {
            I.setProperty(w, S);
          }
        }
        s.PresentationMode = {
          PIP: "picture-in-picture",
          INLINE: "inline",
          FULLSCREEN: "fullscreen"
        };
        function P(f) {
          return typeof f.webkitSetPresentationMode == "function";
        }
        s.util = {
          createDom: n,
          hasClass: p,
          addClass: m,
          removeClass: v,
          toggleClass: l,
          findDom: u,
          padStart: g,
          format: b,
          event: h,
          typeOf: x,
          deepCopy: T,
          getBgImage: O,
          copyDom: L,
          setInterval: R,
          clearInterval: A,
          createImgBtn: M,
          isWeiXin: N,
          isUc: U,
          computeWatchDur: C,
          offInDestroy: a,
          on: i,
          once: t,
          getBuffered2: c,
          checkIsBrowser: E,
          setStyle: k
        };
      },
      function (d, s) {
        d.exports = function (o) {
          var y = [];
          return (
            (y.toString = function () {
              return this.map(function (p) {
                var m = r(p, o);
                return p[2] ? "@media " + p[2] + "{" + m + "}" : m;
              }).join("");
            }),
            (y.i = function (n, p) {
              typeof n == "string" && (n = [[null, n, ""]]);
              for (var m = {}, v = 0; v < this.length; v++) {
                var l = this[v][0];
                typeof l == "number" && (m[l] = !0);
              }
              for (v = 0; v < n.length; v++) {
                var u = n[v];
                (typeof u[0] != "number" || !m[u[0]]) &&
                  (p && !u[2]
                    ? (u[2] = p)
                    : p && (u[2] = "(" + u[2] + ") and (" + p + ")"),
                  y.push(u));
              }
            }),
            y
          );
        };
        function r(o, y) {
          var n = o[1] || "",
            p = o[3];
          if (!p) return n;
          if (y && typeof btoa == "function") {
            var m = e(p),
              v = p.sources.map(function (l) {
                return "/*# sourceURL=" + p.sourceRoot + l + " */";
              });
            return [n].concat(v).concat([m]).join(`
`);
          }
          return [n].join(`
`);
        }
        function e(o) {
          var y = btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
            n =
              "sourceMappingURL=data:application/json;charset=utf-8;base64," +
              y;
          return "/*# " + n + " */";
        }
      },
      function (d, s, r) {
        var e = {},
          o = function (C) {
            var a;
            return function () {
              return typeof a > "u" && (a = C.apply(this, arguments)), a;
            };
          },
          y = o(function () {
            return window && document && document.all && !window.atob;
          }),
          n = function (C) {
            return document.querySelector(C);
          },
          p = (function (C) {
            var a = {};
            return function (i) {
              if (typeof i == "function") return i();
              if (typeof a[i] > "u") {
                var t = n.call(this, i);
                if (
                  window.HTMLIFrameElement &&
                  t instanceof window.HTMLIFrameElement
                )
                  try {
                    t = t.contentDocument.head;
                  } catch {
                    t = null;
                  }
                a[i] = t;
              }
              return a[i];
            };
          })(),
          m = null,
          v = 0,
          l = [],
          u = r(36);
        d.exports = function (C, a) {
          if (typeof DEBUG < "u" && DEBUG && typeof document != "object")
            throw new Error(
              "The style-loader cannot be used in a non-browser environment"
            );
          (a = a || {}),
            (a.attrs = typeof a.attrs == "object" ? a.attrs : {}),
            !a.singleton &&
              typeof a.singleton != "boolean" &&
              (a.singleton = y()),
            a.insertInto || (a.insertInto = "head"),
            a.insertAt || (a.insertAt = "bottom");
          var i = b(C, a);
          return (
            g(i, a),
            function (c) {
              for (var E = [], k = 0; k < i.length; k++) {
                var P = i[k],
                  f = e[P.id];
                f.refs--, E.push(f);
              }
              if (c) {
                var w = b(c, a);
                g(w, a);
              }
              for (var k = 0; k < E.length; k++) {
                var f = E[k];
                if (f.refs === 0) {
                  for (var S = 0; S < f.parts.length; S++) f.parts[S]();
                  delete e[f.id];
                }
              }
            }
          );
        };
        function g(C, a) {
          for (var i = 0; i < C.length; i++) {
            var t = C[i],
              c = e[t.id];
            if (c) {
              c.refs++;
              for (var E = 0; E < c.parts.length; E++) c.parts[E](t.parts[E]);
              for (; E < t.parts.length; E++) c.parts.push(R(t.parts[E], a));
            } else {
              for (var k = [], E = 0; E < t.parts.length; E++)
                k.push(R(t.parts[E], a));
              e[t.id] = { id: t.id, refs: 1, parts: k };
            }
          }
        }
        function b(C, a) {
          for (var i = [], t = {}, c = 0; c < C.length; c++) {
            var E = C[c],
              k = a.base ? E[0] + a.base : E[0],
              P = E[1],
              f = E[2],
              w = E[3],
              S = { css: P, media: f, sourceMap: w };
            t[k] ? t[k].parts.push(S) : i.push((t[k] = { id: k, parts: [S] }));
          }
          return i;
        }
        function h(C, a) {
          var i = p(C.insertInto);
          if (!i)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
            );
          var t = l[l.length - 1];
          if (C.insertAt === "top")
            t
              ? t.nextSibling
                ? i.insertBefore(a, t.nextSibling)
                : i.appendChild(a)
              : i.insertBefore(a, i.firstChild),
              l.push(a);
          else if (C.insertAt === "bottom") i.appendChild(a);
          else if (typeof C.insertAt == "object" && C.insertAt.before) {
            var c = p(C.insertInto + " " + C.insertAt.before);
            i.insertBefore(a, c);
          } else
            throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);
        }
        function x(C) {
          if (C.parentNode === null) return !1;
          C.parentNode.removeChild(C);
          var a = l.indexOf(C);
          a >= 0 && l.splice(a, 1);
        }
        function T(C) {
          var a = document.createElement("style");
          return (C.attrs.type = "text/css"), L(a, C.attrs), h(C, a), a;
        }
        function O(C) {
          var a = document.createElement("link");
          return (
            (C.attrs.type = "text/css"),
            (C.attrs.rel = "stylesheet"),
            L(a, C.attrs),
            h(C, a),
            a
          );
        }
        function L(C, a) {
          Object.keys(a).forEach(function (i) {
            C.setAttribute(i, a[i]);
          });
        }
        function R(C, a) {
          var i, t, c, E;
          if (a.transform && C.css)
            if (((E = a.transform(C.css)), E)) C.css = E;
            else return function () {};
          if (a.singleton) {
            var k = v++;
            (i = m || (m = T(a))),
              (t = M.bind(null, i, k, !1)),
              (c = M.bind(null, i, k, !0));
          } else
            C.sourceMap &&
            typeof URL == "function" &&
            typeof URL.createObjectURL == "function" &&
            typeof URL.revokeObjectURL == "function" &&
            typeof Blob == "function" &&
            typeof btoa == "function"
              ? ((i = O(a)),
                (t = U.bind(null, i, a)),
                (c = function () {
                  x(i), i.href && URL.revokeObjectURL(i.href);
                }))
              : ((i = T(a)),
                (t = N.bind(null, i)),
                (c = function () {
                  x(i);
                }));
          return (
            t(C),
            function (f) {
              if (f) {
                if (
                  f.css === C.css &&
                  f.media === C.media &&
                  f.sourceMap === C.sourceMap
                )
                  return;
                t((C = f));
              } else c();
            }
          );
        }
        var A = (function () {
          var C = [];
          return function (a, i) {
            return (
              (C[a] = i),
              C.filter(Boolean).join(`
`)
            );
          };
        })();
        function M(C, a, i, t) {
          var c = i ? "" : t.css;
          if (C.styleSheet) C.styleSheet.cssText = A(a, c);
          else {
            var E = document.createTextNode(c),
              k = C.childNodes;
            k[a] && C.removeChild(k[a]),
              k.length ? C.insertBefore(E, k[a]) : C.appendChild(E);
          }
        }
        function N(C, a) {
          var i = a.css,
            t = a.media;
          if ((t && C.setAttribute("media", t), C.styleSheet))
            C.styleSheet.cssText = i;
          else {
            for (; C.firstChild; ) C.removeChild(C.firstChild);
            C.appendChild(document.createTextNode(i));
          }
        }
        function U(C, a, i) {
          var t = i.css,
            c = i.sourceMap,
            E = a.convertToAbsoluteUrls === void 0 && c;
          (a.convertToAbsoluteUrls || E) && (t = u(t)),
            c &&
              (t +=
                `
/*# sourceMappingURL=data:application/json;base64,` +
                btoa(unescape(encodeURIComponent(JSON.stringify(c)))) +
                " */");
          var k = new Blob([t], { type: "text/css" }),
            P = C.href;
          (C.href = URL.createObjectURL(k)), P && URL.revokeObjectURL(P);
        }
      },
      function (d, s, r) {
        var e = r(24)();
        d.exports = function (o) {
          return o !== e && o !== null;
        };
      },
      function (d, s, r) {
        Object.defineProperty(s, "__esModule", { value: !0 });
        var e = r(8);
        function o(p, m) {
          if (!(p instanceof m))
            throw new TypeError("Cannot call a class as a function");
        }
        var y = {
            network: {
              code: 1,
              msg: "\u89C6\u9891\u4E0B\u8F7D\u9519\u8BEF",
              remark:
                "\u53EA\u8981\u89C6\u9891\u4E0B\u8F7D\u9519\u8BEF\u5C31\u4F7F\u7528\u6B64\u7C7B\u578B\uFF0C\u65E0\u8BBA\u662Fvideo\u672C\u8EAB\u7684\u8D85\u65F6\u8FD8\u662Fxhr\u7684\u5206\u6BB5\u8BF7\u6C42\u8D85\u65F6\u6216\u8005\u8D44\u6E90\u4E0D\u5B58\u5728"
            },
            mse: {
              code: 2,
              msg: "\u6D41\u8FFD\u52A0\u9519\u8BEF",
              remark:
                "\u8FFD\u52A0\u6D41\u7684\u65F6\u5019\u5982\u679C\u7C7B\u578B\u4E0D\u5BF9\u3001\u65E0\u6CD5\u88AB\u6B63\u786E\u89E3\u7801\u5219\u4F1A\u89E6\u53D1\u6B64\u7C7B\u9519\u8BEF"
            },
            parse: {
              code: 3,
              msg: "\u89E3\u6790\u9519\u8BEF",
              remark:
                "mp4\u3001hls\u3001flv\u6211\u4EEC\u90FD\u662F\u4F7F\u7528js\u8FDB\u884C\u683C\u5F0F\u89E3\u6790\uFF0C\u5982\u679C\u89E3\u6790\u5931\u8D25\u5219\u4F1A\u89E6\u53D1\u6B64\u7C7B\u9519\u8BEF"
            },
            format: {
              code: 4,
              msg: "\u683C\u5F0F\u9519\u8BEF",
              remark:
                "\u5982\u679C\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u7684\u683C\u5F0F\u5BFC\u81F4\u64AD\u653E\u9519\u8BEF"
            },
            decoder: {
              code: 5,
              msg: "\u89E3\u7801\u9519\u8BEF",
              remark:
                "\u6D4F\u89C8\u5668\u89E3\u7801\u5F02\u5E38\u4F1A\u629B\u51FA\u6B64\u7C7B\u578B\u9519\u8BEF"
            },
            runtime: {
              code: 6,
              msg: "\u8BED\u6CD5\u9519\u8BEF",
              remark: "\u64AD\u653E\u5668\u8BED\u6CD5\u9519\u8BEF"
            },
            timeout: {
              code: 7,
              msg: "\u64AD\u653E\u8D85\u65F6",
              remark:
                "\u64AD\u653E\u8FC7\u7A0B\u4E2D\u65E0\u6CD5\u6B63\u5E38\u8BF7\u6C42\u4E0B\u4E00\u4E2A\u5206\u6BB5\u5BFC\u81F4\u64AD\u653E\u4E2D\u65AD"
            },
            other: {
              code: 8,
              msg: "\u5176\u4ED6\u9519\u8BEF",
              remark:
                "\u4E0D\u53EF\u77E5\u7684\u9519\u8BEF\u6216\u88AB\u5FFD\u7565\u7684\u9519\u8BEF\u7C7B\u578B"
            }
          },
          n = function p(m, v, l, u, g, b, h, x) {
            var T =
                arguments.length > 8 && arguments[8] !== void 0
                  ? arguments[8]
                  : { line: "", handle: "", msg: "", version: "" },
              O = arguments[9],
              L = arguments[10];
            o(this, p);
            var R = {};
            if (arguments.length > 1)
              (R.playerVersion = e.version),
                (R.errorType = m),
                (R.domain = document.domain),
                (R.duration = l),
                (R.currentTime = v),
                (R.networkState = u),
                (R.readyState = g),
                (R.currentSrc = h),
                (R.src = b),
                (R.ended = x),
                (R.errd = T),
                (R.ex = (y[m] || {}).msg),
                (R.errorCode = O),
                (R.mediaError = L);
            else {
              var A = arguments[0];
              Object.keys(A).map(function (M) {
                R[M] = A[M];
              }),
                (R.ex = ((A.type && y[A.type]) || {}).msg);
            }
            return R;
          };
        (s.default = n), (d.exports = s.default);
      },
      function (d, s, r) {
        Object.defineProperty(s, "__esModule", { value: !0 });
        var e = {};
        Object.defineProperty(e, "device", {
          get: function () {
            var y = e.os;
            return y.isPc ? "pc" : "mobile";
          }
        }),
          Object.defineProperty(e, "browser", {
            get: function () {
              var y = navigator.userAgent.toLowerCase(),
                n = {
                  ie: /rv:([\d.]+)\) like gecko/,
                  firfox: /firefox\/([\d.]+)/,
                  chrome: /chrome\/([\d.]+)/,
                  opera: /opera.([\d.]+)/,
                  safari: /version\/([\d.]+).*safari/
                };
              return (
                [].concat(
                  Object.keys(n).filter(function (p) {
                    return n[p].test(y);
                  })
                )[0] || ""
              );
            }
          }),
          Object.defineProperty(e, "os", {
            get: function () {
              var y = navigator.userAgent,
                n = /(?:Windows Phone)/.test(y),
                p = /(?:SymbianOS)/.test(y) || n,
                m = /(?:Android)/.test(y),
                v = /(?:Firefox)/.test(y),
                l =
                  /(?:iPad|PlayBook)/.test(y) ||
                  (m && !/(?:Mobile)/.test(y)) ||
                  (v && /(?:Tablet)/.test(y)),
                u = /(?:iPhone)/.test(y) && !l,
                g = !u && !m && !p && !l;
              return {
                isTablet: l,
                isPhone: u,
                isAndroid: m,
                isPc: g,
                isSymbian: p,
                isWindowsPhone: n,
                isFireFox: v
              };
            }
          }),
          (s.default = e),
          (d.exports = s.default);
      },
      function (d, s, r) {
        var e = void 0;
        d.exports = function (o) {
          return o !== e && o !== null;
        };
      },
      function (d, s, r) {
        Object.defineProperty(s, "__esModule", { value: !0 });
        var e = (function () {
          function n(p, m) {
            for (var v = 0; v < m.length; v++) {
              var l = m[v];
              (l.enumerable = l.enumerable || !1),
                (l.configurable = !0),
                "value" in l && (l.writable = !0),
                Object.defineProperty(p, l.key, l);
            }
          }
          return function (p, m, v) {
            return m && n(p.prototype, m), v && n(p, v), p;
          };
        })();
        function o(n, p) {
          if (!(n instanceof p))
            throw new TypeError("Cannot call a class as a function");
        }
        var y = (function () {
          function n(p) {
            o(this, n), (this.bufferedList = p);
          }
          return (
            e(n, [
              {
                key: "start",
                value: function (m) {
                  return this.bufferedList[m].start;
                }
              },
              {
                key: "end",
                value: function (m) {
                  return this.bufferedList[m].end;
                }
              },
              {
                key: "length",
                get: function () {
                  return this.bufferedList.length;
                }
              }
            ]),
            n
          );
        })();
        (s.default = y), (d.exports = s.default);
      },
      function (d) {
        d.exports = JSON.parse('{"version":"2.31.7"}');
      },
      function (d, s, r) {
        Object.defineProperty(s, "__esModule", { value: !0 });
        var e = (function () {
            function C(a, i) {
              for (var t = 0; t < i.length; t++) {
                var c = i[t];
                (c.enumerable = c.enumerable || !1),
                  (c.configurable = !0),
                  "value" in c && (c.writable = !0),
                  Object.defineProperty(a, c.key, c);
              }
            }
            return function (a, i, t) {
              return i && C(a.prototype, i), t && C(a, t), a;
            };
          })(),
          o = function C(a, i, t) {
            a === null && (a = Function.prototype);
            var c = Object.getOwnPropertyDescriptor(a, i);
            if (c === void 0) {
              var E = Object.getPrototypeOf(a);
              return E === null ? void 0 : C(E, i, t);
            } else {
              if ("value" in c) return c.value;
              var k = c.get;
              return k === void 0 ? void 0 : k.call(t);
            }
          },
          y = r(11),
          n = R(y),
          p = r(0),
          m = r(5),
          v = R(m),
          l = r(7),
          u = R(l),
          g = r(4),
          b = R(g),
          h = r(31),
          x = R(h),
          T = r(10),
          O = R(T);
        r(34);
        var L = r(8);
        function R(C) {
          return C && C.__esModule ? C : { default: C };
        }
        function A(C, a) {
          if (!(C instanceof a))
            throw new TypeError("Cannot call a class as a function");
        }
        function M(C, a) {
          if (!C)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return a && (typeof a == "object" || typeof a == "function") ? a : C;
        }
        function N(C, a) {
          if (typeof a != "function" && a !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof a
            );
          (C.prototype = Object.create(a && a.prototype, {
            constructor: {
              value: C,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            a &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(C, a)
                : (C.__proto__ = a));
        }
        var U = (function (C) {
          N(a, C);
          function a(i) {
            A(this, a);
            var t = M(
              this,
              (a.__proto__ || Object.getPrototypeOf(a)).call(this, i)
            );
            if (
              ((t.config = (0, p.deepCopy)(
                {
                  width: 600,
                  height: 337.5,
                  ignores: [],
                  whitelist: [],
                  lang: (
                    document.documentElement.getAttribute("lang") ||
                    navigator.language ||
                    "zh-cn"
                  ).toLocaleLowerCase(),
                  inactive: 3e3,
                  volume: 0.6,
                  controls: !0,
                  controlsList: ["nodownload"]
                },
                i
              )),
              (t.version = L.version),
              (t.userTimer = null),
              (t.waitTimer = null),
              (t.history = []),
              (t.isProgressMoving = !1),
              (t.root = (0, p.findDom)(document, "#" + t.config.id)),
              (t.controls = (0, p.createDom)(
                "xg-controls",
                "",
                { unselectable: "on", onselectstart: "return false" },
                "xgplayer-controls"
              )),
              t.config.isShowControl && (t.controls.style.display = "none"),
              !t.root)
            ) {
              var c = t.config.el;
              if (c && c.nodeType === 1) t.root = c;
              else {
                var E;
                return (
                  t.emit(
                    "error",
                    new b.default({
                      type: "use",
                      errd: {
                        line: 45,
                        handle: "Constructor",
                        msg: "container id can't be empty"
                      },
                      vid: t.config.vid
                    })
                  ),
                  console.error("container id can't be empty"),
                  (E = !1),
                  M(t, E)
                );
              }
            }
            if (
              ((0, p.addClass)(
                t.root,
                "xgplayer xgplayer-" +
                  v.default.device +
                  " xgplayer-nostart xgplayer-pause " +
                  (t.config.controls ? "" : "xgplayer-no-controls")
              ),
              t.root.appendChild(t.controls),
              t.config.fluid
                ? ((t.root.style["max-width"] = "100%"),
                  (t.root.style.width = "100%"),
                  (t.root.style.height = "0"),
                  (t.root.style["padding-top"] =
                    (t.config.height * 100) / t.config.width + "%"),
                  (t.video.style.position = "absolute"),
                  (t.video.style.top = "0"),
                  (t.video.style.left = "0"))
                : (t.config.width &&
                    (typeof t.config.width != "number"
                      ? (t.root.style.width = t.config.width)
                      : (t.root.style.width = t.config.width + "px")),
                  t.config.height &&
                    (typeof t.config.height != "number"
                      ? (t.root.style.height = t.config.height)
                      : (t.root.style.height = t.config.height + "px"))),
              t.config.execBeforePluginsCall &&
                t.config.execBeforePluginsCall.forEach(function (w) {
                  w.call(t, t);
                }),
              t.config.closeI18n || a.install(O.default.name, O.default.method),
              t.config.controlStyle &&
                (0, p.typeOf)(t.config.controlStyle) === "String")
            ) {
              var k = t;
              fetch(k.config.controlStyle, {
                method: "GET",
                headers: { Accept: "application/json" }
              })
                .then(function (w) {
                  w.ok &&
                    w.json().then(function (S) {
                      for (var I in S)
                        S.hasOwnProperty(I) && (k.config[I] = S[I]);
                      k.pluginsCall();
                    });
                })
                .catch(function (w) {
                  console.log("Fetch\u9519\u8BEF:" + w);
                });
            } else t.pluginsCall();
            t.config.controlPlugins &&
              a.controlsRun(t.config.controlPlugins, t),
              t.ev.forEach(function (w) {
                var S = Object.keys(w)[0],
                  I = t[w[S]];
                I && t.on(S, I);
              }),
              ["focus", "blur"].forEach(function (w) {
                t.on(w, t["on" + w.charAt(0).toUpperCase() + w.slice(1)]);
              });
            var P = t;
            (t.mousemoveFunc = function () {
              P.emit("focus"), P.config.closeFocusVideoFocus || P.video.focus();
            }),
              t.root.addEventListener("mousemove", t.mousemoveFunc),
              (t.playFunc = function () {
                P.emit("focus"),
                  P.config.closePlayVideoFocus || P.video.focus();
              }),
              P.once("play", t.playFunc),
              (t.getVideoSize = function () {
                if (this.video.videoWidth && this.video.videoHeight) {
                  var w = P.root.getBoundingClientRect();
                  P.config.fitVideoSize === "auto"
                    ? w.width / w.height >
                      this.video.videoWidth / this.video.videoHeight
                      ? (P.root.style.height =
                          (this.video.videoHeight / this.video.videoWidth) *
                            w.width +
                          "px")
                      : (P.root.style.width =
                          (this.video.videoWidth / this.video.videoHeight) *
                            w.height +
                          "px")
                    : P.config.fitVideoSize === "fixWidth"
                    ? (P.root.style.height =
                        (this.video.videoHeight / this.video.videoWidth) *
                          w.width +
                        "px")
                    : P.config.fitVideoSize === "fixHeight" &&
                      (P.root.style.width =
                        (this.video.videoWidth / this.video.videoHeight) *
                          w.height +
                        "px");
                }
              }),
              P.once("loadeddata", t.getVideoSize),
              setTimeout(function () {
                t.emit("ready"), (t.isReady = !0);
              }, 0),
              t.config.videoInit &&
                (0, p.hasClass)(t.root, "xgplayer-nostart") &&
                t.start(),
              P.config.rotate &&
                (P.on("requestFullscreen", t.updateRotateDeg),
                P.on("exitFullscreen", t.updateRotateDeg));
            function f() {
              P.root.removeEventListener("mousemove", P.mousemoveFunc),
                P.off("destroy", f);
            }
            return P.once("destroy", f), t;
          }
          return (
            e(
              a,
              [
                {
                  key: "attachVideo",
                  value: function () {
                    var t = this;
                    this.video &&
                      this.video.nodeType === 1 &&
                      this.root.insertBefore(this.video, this.root.firstChild),
                      setTimeout(function () {
                        t.emit("complete"),
                          t.danmu &&
                            typeof t.danmu.resize == "function" &&
                            t.danmu.resize();
                      }, 1);
                  }
                },
                {
                  key: "start",
                  value: function () {
                    var t = this,
                      c =
                        arguments.length > 0 && arguments[0] !== void 0
                          ? arguments[0]
                          : this.config.url;
                    if (!!this.video) {
                      var E = this;
                      if (!c || c === "") {
                        this.emit("urlNull");
                        return;
                      }
                      (this.canPlayFunc = function () {
                        E.off("canplay", E.canPlayFunc);
                        var k = E.video.play();
                        k !== void 0 &&
                          k &&
                          k
                            .then(function () {
                              E.emit("autoplay started");
                            })
                            .catch(function () {
                              E.emit("autoplay was prevented"),
                                (0, p.addClass)(E.root, "xgplayer-is-autoplay");
                            });
                      }),
                        (0, p.typeOf)(c) !== "Array"
                          ? ((0, p.typeOf)(c) === "String" &&
                              c.indexOf("blob:") > -1 &&
                              c === this.video.src) ||
                            (this.video.src = c)
                          : c.forEach(function (k) {
                              t.video.appendChild(
                                (0, p.createDom)("source", "", {
                                  src: "" + k.src,
                                  type: "" + (k.type || "")
                                })
                              );
                            }),
                        this.config.autoplay &&
                          (v.default.os.isPhone
                            ? this.canPlayFunc()
                            : this.on("canplay", this.canPlayFunc)),
                        this.config.disableStartLoad || this.video.load(),
                        this.attachVideo();
                    }
                  }
                },
                {
                  key: "reload",
                  value: function () {
                    this.video.load(),
                      (this.reloadFunc = function () {
                        var t = this.play();
                        t !== void 0 && t && t.catch(function (c) {});
                      }),
                      this.once("loadeddata", this.reloadFunc);
                  }
                },
                {
                  key: "destroy",
                  value: function () {
                    var t = this,
                      c =
                        arguments.length > 0 && arguments[0] !== void 0
                          ? arguments[0]
                          : !0,
                      E = this;
                    clearInterval(this.bulletResizeTimer);
                    for (var k in this._interval)
                      clearInterval(this._interval[k]),
                        (this._interval[k] = null);
                    this.checkTimer && clearInterval(this.checkTimer),
                      this.waitTimer && clearTimeout(this.waitTimer),
                      this.ev.forEach(function (f) {
                        var w = Object.keys(f)[0],
                          S = t[f[w]];
                        S && t.off(w, S);
                      }),
                      this.loadeddataFunc &&
                        this.off("loadeddata", this.loadeddataFunc),
                      this.reloadFunc &&
                        this.off("loadeddata", this.reloadFunc),
                      this.replayFunc && this.off("play", this.replayFunc),
                      this.playFunc && this.off("play", this.playFunc),
                      this.getVideoSize &&
                        this.off("loadeddata", this.getVideoSize),
                      ["focus", "blur"].forEach(function (f) {
                        t.off(
                          f,
                          t["on" + f.charAt(0).toUpperCase() + f.slice(1)]
                        );
                      }),
                      (!this.config.keyShortcut ||
                        this.config.keyShortcut === "on") &&
                        ["video", "controls"].forEach(function (f) {
                          t[f] &&
                            t[f].removeEventListener("keydown", function (w) {
                              E.onKeydown(w, E);
                            });
                        });
                    function P() {
                      if (
                        (this.emit("destroy"),
                        this.video.removeAttribute("src"),
                        this.video.load(),
                        c)
                      ) {
                        this.root.innerHTML = "";
                        var f = this.root.className.split(" ");
                        f.length > 0
                          ? (this.root.className = f
                              .filter(function (S) {
                                return S.indexOf("xgplayer") < 0;
                              })
                              .join(" "))
                          : (this.root.className = "");
                      }
                      for (var w in this) delete this[w];
                      (0, x.default)(this);
                    }
                    P.call(this),
                      o(
                        a.prototype.__proto__ ||
                          Object.getPrototypeOf(a.prototype),
                        "destroy",
                        this
                      ).call(this);
                  }
                },
                {
                  key: "replay",
                  value: function () {
                    var t = this._replay;
                    if (
                      ((0, p.removeClass)(this.root, "xgplayer-ended"),
                      v.default.browser.indexOf("ie") > -1 &&
                        (this.emit("play"), this.emit("playing")),
                      t && t instanceof Function)
                    )
                      t();
                    else {
                      this.currentTime = 0;
                      var c = this.play();
                      c !== void 0 && c && c.catch(function (E) {});
                    }
                  }
                },
                {
                  key: "userGestureTrigEvent",
                  value: function (t, c) {
                    var E = this,
                      k = function (f, w) {
                        E.emit(f, w);
                      };
                    this.config.userGestureEventMiddleware &&
                    typeof this.config.userGestureEventMiddleware[t] ==
                      "function"
                      ? this.config.userGestureEventMiddleware[t].call(
                          this,
                          this,
                          t,
                          c,
                          k
                        )
                      : k.call(this, t, c);
                  }
                },
                {
                  key: "pluginsCall",
                  value: function () {
                    var t = this;
                    a.plugins.s_i18n && a.plugins.s_i18n.call(this, this);
                    var c = this;
                    if (a.plugins) {
                      var E = this.config.ignores;
                      Object.keys(a.plugins).forEach(function (k) {
                        var P = a.plugins[k];
                        !P || typeof P != "function"
                          ? console.warn("plugin name", k, "is invalid")
                          : !E.some(function (f) {
                              return k === f || k === "s_" + f;
                            }) &&
                            k !== "s_i18n" &&
                            (["pc", "tablet", "mobile"].some(function (f) {
                              return f === k;
                            })
                              ? k === v.default.device &&
                                setTimeout(function () {
                                  !c.video || P.call(c, c);
                                }, 0)
                              : P.call(t, t));
                      });
                    }
                  }
                },
                {
                  key: "onFocus",
                  value: function () {
                    var t = this;
                    (0, p.hasClass)(this.root, "xgplayer-inactive") &&
                      t.emit("controlShow"),
                      (0, p.removeClass)(this.root, "xgplayer-inactive"),
                      t.userTimer && clearTimeout(t.userTimer),
                      (t.userTimer = setTimeout(function () {
                        t.emit("blur");
                      }, t.config.inactive));
                  }
                },
                {
                  key: "onBlur",
                  value: function () {
                    (this.config.enablePausedInactive || !this.paused) &&
                      !this.ended &&
                      !this.config.closeInactive &&
                      ((0, p.hasClass)(this.root, "xgplayer-inactive") ||
                        this.emit("controlHide"),
                      (0, p.addClass)(this.root, "xgplayer-inactive"));
                  }
                },
                {
                  key: "onPlay",
                  value: function () {
                    (0, p.addClass)(this.root, "xgplayer-isloading"),
                      (0, p.addClass)(this.root, "xgplayer-playing"),
                      (0, p.removeClass)(this.root, "xgplayer-pause");
                  }
                },
                {
                  key: "onPause",
                  value: function () {
                    (0, p.addClass)(this.root, "xgplayer-pause"),
                      this.userTimer && clearTimeout(this.userTimer),
                      this.emit("focus");
                  }
                },
                {
                  key: "onEnded",
                  value: function () {
                    (0, p.addClass)(this.root, "xgplayer-ended"),
                      (0, p.removeClass)(this.root, "xgplayer-playing");
                  }
                },
                {
                  key: "onSeeking",
                  value: function () {
                    (this.isSeeking = !0), this.onWaiting();
                  }
                },
                {
                  key: "onSeeked",
                  value: function () {
                    var t = this;
                    this.once("timeupdate", function () {
                      t.isSeeking = !1;
                    }),
                      this.waitTimer && clearTimeout(this.waitTimer),
                      (0, p.removeClass)(this.root, "xgplayer-isloading");
                  }
                },
                {
                  key: "onWaiting",
                  value: function () {
                    var t = this;
                    t.waitTimer && clearTimeout(t.waitTimer),
                      t.checkTimer &&
                        (clearInterval(t.checkTimer), (t.checkTimer = null));
                    var c = t.currentTime;
                    t.waitTimer = setTimeout(function () {
                      (0, p.addClass)(t.root, "xgplayer-isloading"),
                        (t.checkTimer = setInterval(function () {
                          t.currentTime !== c &&
                            ((0, p.removeClass)(t.root, "xgplayer-isloading"),
                            clearInterval(t.checkTimer),
                            (t.checkTimer = null));
                        }, 1e3));
                    }, 500);
                  }
                },
                {
                  key: "onPlaying",
                  value: function () {
                    this.paused ||
                      ((this.isSeeking = !1),
                      this.waitTimer && clearTimeout(this.waitTimer),
                      (0, p.removeClass)(
                        this.root,
                        "xgplayer-isloading xgplayer-nostart xgplayer-pause xgplayer-ended xgplayer-is-error xgplayer-replay"
                      ),
                      (0, p.addClass)(this.root, "xgplayer-playing"));
                  }
                }
              ],
              [
                {
                  key: "install",
                  value: function (t, c) {
                    !(0, p.checkIsBrowser)() ||
                      (a.plugins || (a.plugins = {}),
                      a.plugins[t] || (a.plugins[t] = c));
                  }
                },
                {
                  key: "installAll",
                  value: function (t) {
                    for (var c = 0; c < t.length; c++)
                      a.install(t[c].name, t[c].method);
                  }
                },
                {
                  key: "use",
                  value: function (t, c) {
                    a.plugins || (a.plugins = {}), (a.plugins[t] = c);
                  }
                },
                {
                  key: "useAll",
                  value: function (t) {
                    for (var c in t) a.use(t[c].name, t[c].method);
                  }
                },
                {
                  key: "controlsRun",
                  value: function (t, c) {
                    t.forEach(function (E) {
                      E.method.call(c);
                    });
                  }
                }
              ]
            ),
            a
          );
        })(n.default);
        (U.util = p.util),
          (U.sniffer = v.default),
          (U.Errors = b.default),
          (U.XgplayerTimeRange = u.default),
          (s.default = U),
          (d.exports = s.default);
      },
      function (d, s, r) {
        Object.defineProperty(s, "__esModule", { value: !0 });
        var e = r(0),
          o = function () {
            var n = this,
              p = {};
            (p.en = {
              HAVE_NOTHING:
                "There is no information on whether audio/video is ready",
              HAVE_METADATA: "Audio/video metadata is ready ",
              HAVE_CURRENT_DATA:
                "Data about the current play location is available, but there is not enough data to play the next frame/millisecond",
              HAVE_FUTURE_DATA:
                "Current and at least one frame of data is available",
              HAVE_ENOUGH_DATA:
                "The available data is sufficient to start playing",
              NETWORK_EMPTY: "Audio/video has not been initialized",
              NETWORK_IDLE:
                "Audio/video is active and has been selected for resources, but no network is used",
              NETWORK_LOADING: "The browser is downloading the data",
              NETWORK_NO_SOURCE: "No audio/video source was found",
              MEDIA_ERR_ABORTED: "The fetch process is aborted by the user",
              MEDIA_ERR_NETWORK: "An error occurred while downloading",
              MEDIA_ERR_DECODE: "An error occurred while decoding",
              MEDIA_ERR_SRC_NOT_SUPPORTED: "Audio/video is not supported",
              REPLAY: "Replay",
              ERROR: "Network is offline",
              PLAY_TIPS: "Play",
              PAUSE_TIPS: "Pause",
              PLAYNEXT_TIPS: "Play next",
              DOWNLOAD_TIPS: "Download",
              ROTATE_TIPS: "Rotate",
              RELOAD_TIPS: "Reload",
              FULLSCREEN_TIPS: "Fullscreen",
              EXITFULLSCREEN_TIPS: "Exit fullscreen",
              CSSFULLSCREEN_TIPS: "Cssfullscreen",
              EXITCSSFULLSCREEN_TIPS: "Exit cssfullscreen",
              TEXTTRACK: "Caption",
              PIP: "Pip",
              MINIPLAYER: "Miniplayer",
              SCREENSHOT: "Screenshot",
              LIVE: "LIVE",
              OFF: "Off",
              MINIPLAYER_DRAG: "Click and hold to drag",
              AIRPLAY_TIPS: "Airplay"
            }),
              (p["zh-cn"] = {
                HAVE_NOTHING:
                  "\u6CA1\u6709\u5173\u4E8E\u97F3\u9891/\u89C6\u9891\u662F\u5426\u5C31\u7EEA\u7684\u4FE1\u606F",
                HAVE_METADATA:
                  "\u97F3\u9891/\u89C6\u9891\u7684\u5143\u6570\u636E\u5DF2\u5C31\u7EEA",
                HAVE_CURRENT_DATA:
                  "\u5173\u4E8E\u5F53\u524D\u64AD\u653E\u4F4D\u7F6E\u7684\u6570\u636E\u662F\u53EF\u7528\u7684\uFF0C\u4F46\u6CA1\u6709\u8DB3\u591F\u7684\u6570\u636E\u6765\u64AD\u653E\u4E0B\u4E00\u5E27/\u6BEB\u79D2",
                HAVE_FUTURE_DATA:
                  "\u5F53\u524D\u53CA\u81F3\u5C11\u4E0B\u4E00\u5E27\u7684\u6570\u636E\u662F\u53EF\u7528\u7684",
                HAVE_ENOUGH_DATA:
                  "\u53EF\u7528\u6570\u636E\u8DB3\u4EE5\u5F00\u59CB\u64AD\u653E",
                NETWORK_EMPTY:
                  "\u97F3\u9891/\u89C6\u9891\u5C1A\u672A\u521D\u59CB\u5316",
                NETWORK_IDLE:
                  "\u97F3\u9891/\u89C6\u9891\u662F\u6D3B\u52A8\u7684\u4E14\u5DF2\u9009\u53D6\u8D44\u6E90\uFF0C\u4F46\u5E76\u672A\u4F7F\u7528\u7F51\u7EDC",
                NETWORK_LOADING:
                  "\u6D4F\u89C8\u5668\u6B63\u5728\u4E0B\u8F7D\u6570\u636E",
                NETWORK_NO_SOURCE:
                  "\u672A\u627E\u5230\u97F3\u9891/\u89C6\u9891\u6765\u6E90",
                MEDIA_ERR_ABORTED:
                  "\u53D6\u56DE\u8FC7\u7A0B\u88AB\u7528\u6237\u4E2D\u6B62",
                MEDIA_ERR_NETWORK:
                  "\u5F53\u4E0B\u8F7D\u65F6\u53D1\u751F\u9519\u8BEF",
                MEDIA_ERR_DECODE:
                  "\u5F53\u89E3\u7801\u65F6\u53D1\u751F\u9519\u8BEF",
                MEDIA_ERR_SRC_NOT_SUPPORTED:
                  "\u4E0D\u652F\u6301\u7684\u97F3\u9891/\u89C6\u9891\u683C\u5F0F",
                REPLAY: "\u91CD\u64AD",
                ERROR:
                  "\u7F51\u7EDC\u8FDE\u63A5\u4F3C\u4E4E\u51FA\u73B0\u4E86\u95EE\u9898",
                PLAY_TIPS: "\u64AD\u653E",
                PAUSE_TIPS: "\u6682\u505C",
                PLAYNEXT_TIPS: "\u4E0B\u4E00\u96C6",
                DOWNLOAD_TIPS: "\u4E0B\u8F7D",
                ROTATE_TIPS: "\u65CB\u8F6C",
                RELOAD_TIPS: "\u91CD\u65B0\u8F7D\u5165",
                FULLSCREEN_TIPS: "\u8FDB\u5165\u5168\u5C4F",
                EXITFULLSCREEN_TIPS: "\u9000\u51FA\u5168\u5C4F",
                CSSFULLSCREEN_TIPS: "\u8FDB\u5165\u6837\u5F0F\u5168\u5C4F",
                EXITCSSFULLSCREEN_TIPS: "\u9000\u51FA\u6837\u5F0F\u5168\u5C4F",
                TEXTTRACK: "\u5B57\u5E55",
                PIP: "\u753B\u4E2D\u753B",
                MINIPLAYER: "\u8FF7\u4F60\u64AD\u653E\u5668",
                SCREENSHOT: "\u622A\u56FE",
                LIVE: "\u6B63\u5728\u76F4\u64AD",
                OFF: "\u5173\u95ED",
                MINIPLAYER_DRAG:
                  "\u70B9\u51FB\u6309\u4F4F\u53EF\u62D6\u52A8\u89C6\u9891",
                AIRPLAY_TIPS: "\u9694\u7A7A\u64AD\u653E"
              }),
              (p["zh-hk"] = {
                HAVE_NOTHING:
                  "\u6C92\u6709\u95DC\u65BC\u97F3\u983B/\u8996\u983B\u662F\u5426\u5C31\u7DD2\u7684\u4FE1\u606F",
                HAVE_METADATA:
                  "\u97F3\u983B/\u8996\u983B\u7684\u5143\u6578\u64DA\u5DF2\u5C31\u7DD2",
                HAVE_CURRENT_DATA:
                  "\u95DC\u65BC\u7576\u524D\u64AD\u653E\u4F4D\u7F6E\u7684\u6578\u64DA\u662F\u53EF\u7528\u7684\uFF0C\u4F46\u6C92\u6709\u8DB3\u5920\u7684\u6578\u64DA\u4F86\u64AD\u653E\u4E0B\u58F9\u5E40/\u6BEB\u79D2",
                HAVE_FUTURE_DATA:
                  "\u7576\u524D\u53CA\u81F3\u5C11\u4E0B\u58F9\u5E40\u7684\u6578\u64DA\u662F\u53EF\u7528\u7684",
                HAVE_ENOUGH_DATA:
                  "\u53EF\u7528\u6578\u64DA\u8DB3\u4EE5\u958B\u59CB\u64AD\u653E",
                NETWORK_EMPTY:
                  "\u97F3\u983B/\u8996\u983B\u5C1A\u672A\u521D\u59CB\u5316",
                NETWORK_IDLE:
                  "\u97F3\u983B/\u8996\u983B\u662F\u6D3B\u52D5\u7684\u4E14\u5DF2\u9078\u53D6\u8CC7\u6E90\uFF0C\u4F46\u4E26\u672A\u4F7F\u7528\u7DB2\u7D61",
                NETWORK_LOADING:
                  "\u700F\u89BD\u5668\u6B63\u5728\u4E0B\u8F09\u6578\u64DA",
                NETWORK_NO_SOURCE:
                  "\u672A\u627E\u5230\u97F3\u983B/\u8996\u983B\u4F86\u6E90",
                MEDIA_ERR_ABORTED:
                  "\u53D6\u56DE\u904E\u7A0B\u88AB\u7528\u6236\u4E2D\u6B62",
                MEDIA_ERR_NETWORK:
                  "\u7576\u4E0B\u8F09\u6642\u767C\u751F\u932F\u8AA4",
                MEDIA_ERR_DECODE:
                  "\u7576\u89E3\u78BC\u6642\u767C\u751F\u932F\u8AA4",
                MEDIA_ERR_SRC_NOT_SUPPORTED:
                  "\u4E0D\u652F\u6301\u7684\u97F3\u983B/\u8996\u983B\u683C\u5F0F",
                REPLAY: "\u91CD\u64AD",
                ERROR:
                  "\u7DB2\u7D61\u9023\u63A5\u4F3C\u4E4E\u51FA\u73FE\u4E86\u554F\u984C",
                PLAY_TIPS: "\u64AD\u653E",
                PAUSE_TIPS: "\u66AB\u505C",
                PLAYNEXT_TIPS: "\u4E0B\u58F9\u96C6",
                DOWNLOAD_TIPS: "\u4E0B\u8F09",
                ROTATE_TIPS: "\u65CB\u8F49",
                RELOAD_TIPS: "\u91CD\u65B0\u8F09\u5165",
                FULLSCREEN_TIPS: "\u9032\u5165\u5168\u5C4F",
                EXITFULLSCREEN_TIPS: "\u9000\u51FA\u5168\u5C4F",
                CSSFULLSCREEN_TIPS: "\u9032\u5165\u6A23\u5F0F\u5168\u5C4F",
                EXITCSSFULLSCREEN_TIPS: "\u9000\u51FA\u6A23\u5F0F\u5168\u5C4F",
                TEXTTRACK: "\u5B57\u5E55",
                PIP: "\u756B\u4E2D\u756B",
                MINIPLAYER: "\u8FF7\u59B3\u64AD\u653E\u5668",
                SCREENSHOT: "\u622A\u5716",
                LIVE: "\u6B63\u5728\u76F4\u64AD",
                OFF: "\u95DC\u9589",
                MINIPLAYER_DRAG:
                  "\u9EDE\u64CA\u6309\u4F4F\u53EF\u62D6\u52D5\u8996\u983B",
                AIRPLAY_TIPS: "\u9694\u7A7A\u64AD\u653E"
              }),
              (p.jp = {
                HAVE_NOTHING:
                  "\u30AA\u30FC\u30C7\u30A3\u30AA/\u30D3\u30C7\u30AA\u304C\u6E96\u5099\u3067\u304D\u3066\u3044\u308B\u304B\u60C5\u5831\u304C\u3042\u308A\u307E\u305B\u3093",
                HAVE_METADATA:
                  "\u30AA\u30FC\u30C7\u30A3\u30AA/\u30D3\u30C7\u30AA\u306E\u30E1\u30BF\u30C7\u30FC\u30BF\u306F\u6E96\u5099\u3067\u304D\u3066\u3044\u307E\u3059",
                HAVE_CURRENT_DATA:
                  "\u73FE\u5728\u306E\u518D\u751F\u4F4D\u7F6E\u306B\u95A2\u3059\u308B\u30C7\u30FC\u30BF\u306F\u5229\u7528\u53EF\u80FD\u3067\u3059\u304C\u3001\u6B21\u306E\u30D5\u30EC\u30FC\u30E0/\u30DF\u30EA\u79D2\u3092\u518D\u751F\u3059\u308B\u306E\u306B\u5341\u5206\u306A\u30C7\u30FC\u30BF\u304C\u3042\u308A\u307E\u305B\u3093",
                HAVE_FUTURE_DATA:
                  "\u73FE\u5728\u3001\u5C11\u306A\u304F\u3068\u3082\u6B21\u306E\u30D5\u30EC\u30FC\u30E0\u306E\u30C7\u30FC\u30BF\u304C\u5229\u7528\u53EF\u80FD\u3067\u3059",
                HAVE_ENOUGH_DATA:
                  "\u5229\u7528\u53EF\u80FD\u306A\u30C7\u30FC\u30BF\u306F\u518D\u751F\u3092\u958B\u59CB\u3059\u308B\u306E\u306B\u5341\u5206\u3067\u3059",
                NETWORK_EMPTY:
                  "\u30AA\u30FC\u30C7\u30A3\u30AA/\u30D3\u30C7\u30AA\u304C\u521D\u671F\u5316\u3055\u308C\u3066\u3044\u307E\u305B\u3093",
                NETWORK_IDLE:
                  "\u30AA\u30FC\u30C7\u30A3\u30AA/\u30D3\u30C7\u30AA\u306F\u30A2\u30AF\u30C6\u30A3\u30D6\u3067\u30EA\u30BD\u30FC\u30B9\u304C\u9078\u629E\u3055\u308C\u3066\u3044\u307E\u3059\u304C\u3001\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u304C\u4F7F\u7528\u3055\u308C\u3066\u3044\u307E\u305B\u3093",
                NETWORK_LOADING:
                  "\u30D6\u30E9\u30A6\u30B6\u30FC\u306F\u30C7\u30FC\u30BF\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u3066\u3044\u307E\u3059",
                NETWORK_NO_SOURCE:
                  "\u30AA\u30FC\u30C7\u30A3\u30AA/\u30D3\u30C7\u30AA \u306E\u30BD\u30FC\u30B9\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093",
                MEDIA_ERR_ABORTED:
                  "\u30E6\u30FC\u30B6\u30FC\u306B\u3088\u3063\u3066\u30D5\u30A7\u30C3\u30C1\u30D7\u30ED\u30BB\u30B9\u304C\u4E2D\u6B62\u3055\u308C\u307E\u3057\u305F",
                MEDIA_ERR_NETWORK:
                  "\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u4E2D\u306B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F",
                MEDIA_ERR_DECODE:
                  "\u30C7\u30B3\u30FC\u30C9\u4E2D\u306B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F",
                MEDIA_ERR_SRC_NOT_SUPPORTED:
                  "\u30AA\u30FC\u30C7\u30A3\u30AA/\u30D3\u30C7\u30AA \u306E\u5F62\u5F0F\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u305B\u3093",
                REPLAY: "\u30EA\u30D7\u30EC\u30A4",
                ERROR:
                  "\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u306E\u63A5\u7D9A\u306B\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F",
                PLAY_TIPS: "\u30D7\u30EC\u30A4",
                PAUSE_TIPS: "\u4E00\u6642\u505C\u6B62",
                PLAYNEXT_TIPS: "\u6B21\u3092\u30D7\u30EC\u30A4",
                DOWNLOAD_TIPS: "\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9",
                ROTATE_TIPS: "\u56DE\u8EE2",
                RELOAD_TIPS: "\u518D\u8AAD\u307F\u8FBC\u307F",
                FULLSCREEN_TIPS: "\u30D5\u30EB\u30B9\u30AF\u30EA\u30FC\u30F3",
                EXITFULLSCREEN_TIPS:
                  "\u30D5\u30EB\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u7D42\u4E86",
                CSSFULLSCREEN_TIPS:
                  "\u30B7\u30A2\u30BF\u30FC\u30E2\u30FC\u30C9",
                EXITCSSFULLSCREEN_TIPS:
                  "\u30B7\u30A2\u30BF\u30FC\u30E2\u30FC\u30C9\u3092\u7D42\u4E86",
                TEXTTRACK: "\u5B57\u5E55",
                PIP: "\u30DF\u30CB\u30D7\u30EC\u30FC\u30E4\u30FC",
                MINIPLAYER: "\u30DF\u30CB\u30D7\u30EC\u30FC\u30E4\u30FC",
                SCREENSHOT:
                  "\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8",
                LIVE: "\u751F\u653E\u9001",
                OFF: "\u30AA\u30D5",
                MINIPLAYER_DRAG:
                  "\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u50CD\u753B\u3092\u30C9\u30E9\u30C3\u30B0\u3059\u308B",
                AIRPLAY_TIPS: "\u9694\u7A7A\u653E\u9001"
              }),
              Object.defineProperty(n, "lang", {
                get: function () {
                  return (n.config && p[n.config.lang]) || p.en;
                },
                set: function (v) {
                  (0, e.typeOf)(v) === "Object" &&
                    Object.keys(v).forEach(function (l) {
                      p[l] = v[l];
                    });
                }
              });
          };
        (s.default = { name: "s_i18n", method: o }), (d.exports = s.default);
      },
      function (d, s, r) {
        Object.defineProperty(s, "__esModule", { value: !0 });
        var e = (function () {
            function b(h, x) {
              for (var T = 0; T < x.length; T++) {
                var O = x[T];
                (O.enumerable = O.enumerable || !1),
                  (O.configurable = !0),
                  "value" in O && (O.writable = !0),
                  Object.defineProperty(h, O.key, O);
              }
            }
            return function (h, x, T) {
              return x && b(h.prototype, x), T && b(h, T), h;
            };
          })(),
          o = r(12),
          y = v(o),
          n = r(0),
          p = r(4),
          m = v(p);
        function v(b) {
          return b && b.__esModule ? b : { default: b };
        }
        function l(b, h, x) {
          return (
            h in b
              ? Object.defineProperty(b, h, {
                  value: x,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (b[h] = x),
            b
          );
        }
        function u(b, h) {
          if (!(b instanceof h))
            throw new TypeError("Cannot call a class as a function");
        }
        var g = (function () {
          function b(h) {
            var x = this;
            u(this, b),
              (this._hasStart = !1),
              (this.videoConfig = {
                controls: !!h.isShowControl,
                autoplay: h.autoplay,
                playsinline: h.playsinline,
                "webkit-playsinline": h.playsinline,
                "x5-playsinline": h.playsinline,
                "x5-video-player-type":
                  h["x5-video-player-type"] || h.x5VideoPlayerType,
                "x5-video-player-fullscreen":
                  h["x5-video-player-fullscreen"] || h.x5VideoPlayerFullscreen,
                "x5-video-orientation":
                  h["x5-video-orientation"] || h.x5VideoOrientation,
                airplay: h.airplay,
                "webkit-airplay": h.airplay,
                tabindex: 2,
                mediaType: h.mediaType || "video"
              }),
              h.muted && (this.videoConfig.muted = "muted"),
              h.loop && (this.videoConfig.loop = "loop");
            var T = "";
            if (
              ((this.textTrackShowDefault = !0),
              h.nativeTextTrack &&
                Array.isArray(h.nativeTextTrack) &&
                (h.nativeTextTrack.length > 0 &&
                  !h.nativeTextTrack.some(function (c) {
                    return c.default;
                  }) &&
                  ((h.nativeTextTrack[0].default = !0),
                  (this.textTrackShowDefault = !1)),
                h.nativeTextTrack.some(function (c) {
                  if (c.src && c.label && c.default)
                    return (
                      (T += '<track src="' + c.src + '" '),
                      c.kind && (T += 'kind="' + c.kind + '" '),
                      (T += 'label="' + c.label + '" '),
                      c.srclang && (T += 'srclang="' + c.srclang + '" '),
                      (T += (c.default ? "default" : "") + ">"),
                      !0
                    );
                }),
                (this.videoConfig.crossorigin = "anonymous")),
              h.textTrackStyle)
            ) {
              var O = document.createElement("style");
              (this.textTrackStyle = O), document.head.appendChild(O);
              var L = "";
              for (var R in h.textTrackStyle)
                L += R + ": " + h.textTrackStyle[R] + ";";
              var A = h.id
                ? "#" + h.id
                : h.el.id
                ? "#" + h.el.id
                : "." + h.el.className;
              O.sheet.insertRule
                ? O.sheet.insertRule(A + " video::cue { " + L + " }", 0)
                : O.sheet.addRule && O.sheet.addRule(A + " video::cue", L);
            }
            var M = h.el ? h.el : (0, n.findDom)(document, "#" + h.id),
              N = this.constructor.XgVideoProxy;
            if (
              (N && this.videoConfig.mediaType === N.mediaType
                ? (this.video = new N(M, h))
                : (this.video = (0, n.createDom)(
                    this.videoConfig.mediaType,
                    T,
                    this.videoConfig,
                    ""
                  )),
              h.videoStyle &&
                Object.keys(h.videoStyle).forEach(function (c) {
                  (0, n.setStyle)(x.video, c, h.videoStyle[c]);
                }),
              !this.textTrackShowDefault && T)
            ) {
              var U = this.video.getElementsByTagName("Track");
              U[0].track.mode = "hidden";
            }
            h.autoplay &&
              ((this.video.autoplay = !0),
              h.autoplayMuted && (this.video.muted = !0)),
              (this.ev = [
                "play",
                "playing",
                "pause",
                "ended",
                "error",
                "seeking",
                "seeked",
                "progress",
                "timeupdate",
                "waiting",
                "canplay",
                "canplaythrough",
                "durationchange",
                "volumechange",
                "ratechange",
                "loadedmetadata",
                "loadeddata",
                "loadstart"
              ].map(function (c) {
                return l({}, c, "on" + c.charAt(0).toUpperCase() + c.slice(1));
              })),
              (0, y.default)(this),
              (this._interval = {});
            var C = "0,0",
              a = this,
              i = function (E) {
                !x ||
                  (E === "play"
                    ? (x.hasStart = !0)
                    : E === "canplay"
                    ? (0, n.removeClass)(x.root, "xgplayer-is-enter")
                    : E === "waiting"
                    ? (x.inWaitingStart = new Date().getTime())
                    : E === "playing" &&
                      ((0, n.removeClass)(x.root, "xgplayer-is-enter"),
                      x.inWaitingStart && (x.inWaitingStart = void 0)),
                  E === "error" ? x._onError(E) : x.emit(E, x),
                  x.hasOwnProperty("_interval") &&
                    (["ended", "error", "timeupdate"].indexOf(E) < 0
                      ? ((0, n._clearInterval)(x, "bufferedChange"),
                        (0, n._setInterval)(
                          x,
                          "bufferedChange",
                          function () {
                            if (this.video && this.video.buffered) {
                              for (
                                var k = [],
                                  P = 0,
                                  f = this.video.buffered.length;
                                P < f;
                                P++
                              )
                                k.push([
                                  this.video.buffered.start(P),
                                  this.video.buffered.end(P)
                                ]);
                              k.toString() !== C &&
                                ((C = k.toString()),
                                this.emit("bufferedChange", k));
                            }
                          },
                          200
                        ))
                      : E !== "timeupdate" &&
                        (0, n._clearInterval)(x, "bufferedChange")));
              },
              t = function (E) {
                h.videoEventMiddleware &&
                typeof h.videoEventMiddleware[E] == "function"
                  ? h.videoEventMiddleware[E].call(x, x, E, i)
                  : i.call(x, E);
              };
            this.ev.forEach(function (c) {
              a.evItem = Object.keys(c)[0];
              var E = Object.keys(c)[0];
              a.video.addEventListener(Object.keys(c)[0], t.bind(a, E));
            });
          }
          return (
            e(b, [
              {
                key: "_onError",
                value: function (x) {
                  this.video &&
                    this.video.error &&
                    this.emit(
                      x,
                      new m.default(
                        "other",
                        this.currentTime,
                        this.duration,
                        this.networkState,
                        this.readyState,
                        this.currentSrc,
                        this.src,
                        this.ended,
                        { line: 162, msg: this.error, handle: "Constructor" },
                        this.video.error.code,
                        this.video.error
                      )
                    );
                }
              },
              {
                key: "destroy",
                value: function () {
                  this.textTrackStyle &&
                    this.textTrackStyle.parentNode.removeChild(
                      this.textTrackStyle
                    );
                }
              },
              {
                key: "play",
                value: function () {
                  return this.video.play();
                }
              },
              {
                key: "pause",
                value: function () {
                  this.video.pause();
                }
              },
              {
                key: "canPlayType",
                value: function (x) {
                  return this.video.canPlayType(x);
                }
              },
              {
                key: "getBufferedRange",
                value: function (x) {
                  var T = [0, 0],
                    O = this.video;
                  x || (x = O.buffered);
                  var L = O.currentTime;
                  if (x)
                    for (
                      var R = 0, A = x.length;
                      R < A &&
                      ((T[0] = x.start(R)),
                      (T[1] = x.end(R)),
                      !(T[0] <= L && L <= T[1]));
                      R++
                    );
                  return T[0] - L <= 0 && L - T[1] <= 0 ? T : [0, 0];
                }
              },
              {
                key: "proxyOn",
                value: function (x, T) {
                  (0, n.on)(this, x, T, "destroy");
                }
              },
              {
                key: "proxyOnce",
                value: function (x, T) {
                  (0, n.once)(this, x, T, "destroy");
                }
              },
              {
                key: "hasStart",
                get: function () {
                  return this._hasStart;
                },
                set: function (x) {
                  typeof x == "boolean" &&
                    x === !0 &&
                    !this._hasStart &&
                    ((this._hasStart = !0), this.emit("hasstart"));
                }
              },
              {
                key: "autoplay",
                set: function (x) {
                  this.video && (this.video.autoplay = x);
                },
                get: function () {
                  return this.video ? this.video.autoplay : !1;
                }
              },
              {
                key: "buffered",
                get: function () {
                  if (this.video) return this.video.buffered;
                }
              },
              {
                key: "buffered2",
                get: function () {
                  return (0, n.getBuffered2)(this.video.buffered);
                }
              },
              {
                key: "crossOrigin",
                get: function () {
                  return this.video ? this.video.crossOrigin : !1;
                },
                set: function (x) {
                  this.video && (this.video.crossOrigin = x);
                }
              },
              {
                key: "currentSrc",
                get: function () {
                  if (this.video) return this.video.currentSrc;
                }
              },
              {
                key: "currentTime",
                get: function () {
                  return (this.video && this.video.currentTime) || 0;
                },
                set: function (x) {
                  var T = this;
                  (typeof isFinite == "function" && !isFinite(x)) ||
                    ((0, n.hasClass)(this.root, "xgplayer-ended")
                      ? (this.once("playing", function () {
                          T.video.currentTime = x;
                        }),
                        this.replay())
                      : (this.video.currentTime = x),
                    this.emit("currentTimeChange", x));
                }
              },
              {
                key: "defaultMuted",
                get: function () {
                  return this.video ? this.video.defaultMuted : !1;
                },
                set: function (x) {
                  this.video && (this.video.defaultMuted = x);
                }
              },
              {
                key: "duration",
                get: function () {
                  return this.config.duration
                    ? this.video
                      ? Math.min(this.config.duration, this.video.duration)
                      : this.config.duration
                    : this.video
                    ? this.video.duration
                    : null;
                }
              },
              {
                key: "ended",
                get: function () {
                  return this.video ? this.video.ended || !1 : !0;
                }
              },
              {
                key: "error",
                get: function () {
                  var x = this.video.error;
                  if (!x) return null;
                  var T = [
                    {
                      en: "MEDIA_ERR_ABORTED",
                      cn: "\u53D6\u56DE\u8FC7\u7A0B\u88AB\u7528\u6237\u4E2D\u6B62"
                    },
                    {
                      en: "MEDIA_ERR_NETWORK",
                      cn: "\u5F53\u4E0B\u8F7D\u65F6\u53D1\u751F\u9519\u8BEF"
                    },
                    {
                      en: "MEDIA_ERR_DECODE",
                      cn: "\u5F53\u89E3\u7801\u65F6\u53D1\u751F\u9519\u8BEF"
                    },
                    {
                      en: "MEDIA_ERR_SRC_NOT_SUPPORTED",
                      cn: "\u4E0D\u652F\u6301\u97F3\u9891/\u89C6\u9891"
                    }
                  ];
                  return this.lang
                    ? this.lang[T[x.code - 1].en]
                    : T[x.code - 1].en;
                }
              },
              {
                key: "loop",
                get: function () {
                  return this.video ? this.video.loop : !1;
                },
                set: function (x) {
                  this.video && (this.video.loop = x);
                }
              },
              {
                key: "muted",
                get: function () {
                  return this.video ? this.video.muted : !1;
                },
                set: function (x) {
                  this.video && (this.video.muted = x);
                }
              },
              {
                key: "networkState",
                get: function () {
                  var x = [
                    {
                      en: "NETWORK_EMPTY",
                      cn: "\u97F3\u9891/\u89C6\u9891\u5C1A\u672A\u521D\u59CB\u5316"
                    },
                    {
                      en: "NETWORK_IDLE",
                      cn: "\u97F3\u9891/\u89C6\u9891\u662F\u6D3B\u52A8\u7684\u4E14\u5DF2\u9009\u53D6\u8D44\u6E90\uFF0C\u4F46\u5E76\u672A\u4F7F\u7528\u7F51\u7EDC"
                    },
                    {
                      en: "NETWORK_LOADING",
                      cn: "\u6D4F\u89C8\u5668\u6B63\u5728\u4E0B\u8F7D\u6570\u636E"
                    },
                    {
                      en: "NETWORK_NO_SOURCE",
                      cn: "\u672A\u627E\u5230\u97F3\u9891/\u89C6\u9891\u6765\u6E90"
                    }
                  ];
                  return this.lang
                    ? this.lang[x[this.video.networkState].en]
                    : x[this.video.networkState].en;
                }
              },
              {
                key: "paused",
                get: function () {
                  return (0, n.hasClass)(this.root, "xgplayer-pause");
                }
              },
              {
                key: "playbackRate",
                get: function () {
                  return this.video ? this.video.playbackRate : 1;
                },
                set: function (x) {
                  this.video && (this.video.playbackRate = x);
                }
              },
              {
                key: "played",
                get: function () {
                  if (this.video) return this.video.played;
                }
              },
              {
                key: "preload",
                get: function () {
                  return this.video ? this.video.preload : !1;
                },
                set: function (x) {
                  this.video && (this.video.preload = x);
                }
              },
              {
                key: "readyState",
                get: function () {
                  var x = [
                    {
                      en: "HAVE_NOTHING",
                      cn: "\u6CA1\u6709\u5173\u4E8E\u97F3\u9891/\u89C6\u9891\u662F\u5426\u5C31\u7EEA\u7684\u4FE1\u606F"
                    },
                    {
                      en: "HAVE_METADATA",
                      cn: "\u5173\u4E8E\u97F3\u9891/\u89C6\u9891\u5C31\u7EEA\u7684\u5143\u6570\u636E"
                    },
                    {
                      en: "HAVE_CURRENT_DATA",
                      cn: "\u5173\u4E8E\u5F53\u524D\u64AD\u653E\u4F4D\u7F6E\u7684\u6570\u636E\u662F\u53EF\u7528\u7684\uFF0C\u4F46\u6CA1\u6709\u8DB3\u591F\u7684\u6570\u636E\u6765\u64AD\u653E\u4E0B\u4E00\u5E27/\u6BEB\u79D2"
                    },
                    {
                      en: "HAVE_FUTURE_DATA",
                      cn: "\u5F53\u524D\u53CA\u81F3\u5C11\u4E0B\u4E00\u5E27\u7684\u6570\u636E\u662F\u53EF\u7528\u7684"
                    },
                    {
                      en: "HAVE_ENOUGH_DATA",
                      cn: "\u53EF\u7528\u6570\u636E\u8DB3\u4EE5\u5F00\u59CB\u64AD\u653E"
                    }
                  ];
                  return this.lang
                    ? this.lang[x[this.video.readyState].en]
                    : x[this.video.readyState];
                }
              },
              {
                key: "seekable",
                get: function () {
                  return this.video ? this.video.seekable : !1;
                }
              },
              {
                key: "seeking",
                get: function () {
                  return this.video ? this.video.seeking : !1;
                }
              },
              {
                key: "src",
                get: function () {
                  if (this.video) return this.video.src;
                },
                set: function (x) {
                  (0, n.hasClass)(this.root, "xgplayer-ended") ||
                    this.emit("urlchange", this.video.src),
                    (0, n.removeClass)(
                      this.root,
                      "xgplayer-ended xgplayer-is-replay xgplayer-is-error"
                    ),
                    this.video.pause(),
                    this.emit("pause"),
                    (this.video.src = x),
                    this.emit("srcChange");
                }
              },
              {
                key: "poster",
                set: function (x) {
                  var T = (0, n.findDom)(this.root, ".xgplayer-poster");
                  T && (T.style.backgroundImage = "url(" + x + ")");
                }
              },
              {
                key: "volume",
                get: function () {
                  return this.video ? this.video.volume : 1;
                },
                set: function (x) {
                  this.video && (this.video.volume = x);
                }
              },
              {
                key: "fullscreen",
                get: function () {
                  return (
                    (0, n.hasClass)(this.root, "xgplayer-is-fullscreen") ||
                    (0, n.hasClass)(this.root, "xgplayer-fullscreen-active")
                  );
                }
              },
              {
                key: "bullet",
                get: function () {
                  return (0, n.findDom)(this.root, "xg-danmu")
                    ? (0, n.hasClass)(
                        (0, n.findDom)(this.root, "xg-danmu"),
                        "xgplayer-has-danmu"
                      )
                    : !1;
                }
              },
              {
                key: "textTrack",
                get: function () {
                  return (0, n.hasClass)(this.root, "xgplayer-is-textTrack");
                }
              },
              {
                key: "pip",
                get: function () {
                  return (0, n.hasClass)(this.root, "xgplayer-pip-active");
                }
              },
              {
                key: "isMiniPlayer",
                get: function () {
                  return (0, n.hasClass)(
                    this.root,
                    "xgplayer-miniplayer-active"
                  );
                }
              }
            ]),
            b
          );
        })();
        (s.default = g), (d.exports = s.default);
      },
      function (d, s, r) {
        var e = r(13),
          o = r(30),
          y = Function.prototype.apply,
          n = Function.prototype.call,
          p = Object.create,
          m = Object.defineProperty,
          v = Object.defineProperties,
          l = Object.prototype.hasOwnProperty,
          u = { configurable: !0, enumerable: !1, writable: !0 },
          g,
          b,
          h,
          x,
          T,
          O,
          L;
        (g = function (R, A) {
          var M;
          return (
            o(A),
            l.call(this, "__ee__")
              ? (M = this.__ee__)
              : ((M = u.value = p(null)),
                m(this, "__ee__", u),
                (u.value = null)),
            M[R]
              ? typeof M[R] == "object"
                ? M[R].push(A)
                : (M[R] = [M[R], A])
              : (M[R] = A),
            this
          );
        }),
          (b = function (R, A) {
            var M, N;
            return (
              o(A),
              (N = this),
              g.call(
                this,
                R,
                (M = function () {
                  h.call(N, R, M), y.call(A, this, arguments);
                })
              ),
              (M.__eeOnceListener__ = A),
              this
            );
          }),
          (h = function (R, A) {
            var M, N, U, C;
            if ((o(A), !l.call(this, "__ee__"))) return this;
            if (((M = this.__ee__), !M[R])) return this;
            if (((N = M[R]), typeof N == "object"))
              for (C = 0; (U = N[C]); ++C)
                (U === A || U.__eeOnceListener__ === A) &&
                  (N.length === 2 ? (M[R] = N[C ? 0 : 1]) : N.splice(C, 1));
            else (N === A || N.__eeOnceListener__ === A) && delete M[R];
            return this;
          }),
          (x = function (R) {
            var A, M, N, U, C;
            if (!!l.call(this, "__ee__") && ((U = this.__ee__[R]), !!U))
              if (typeof U == "object") {
                for (
                  M = arguments.length, C = new Array(M - 1), A = 1;
                  A < M;
                  ++A
                )
                  C[A - 1] = arguments[A];
                for (U = U.slice(), A = 0; (N = U[A]); ++A) y.call(N, this, C);
              } else
                switch (arguments.length) {
                  case 1:
                    n.call(U, this);
                    break;
                  case 2:
                    n.call(U, this, arguments[1]);
                    break;
                  case 3:
                    n.call(U, this, arguments[1], arguments[2]);
                    break;
                  default:
                    for (
                      M = arguments.length, C = new Array(M - 1), A = 1;
                      A < M;
                      ++A
                    )
                      C[A - 1] = arguments[A];
                    y.call(U, this, C);
                }
          }),
          (T = { on: g, once: b, off: h, emit: x }),
          (O = { on: e(g), once: e(b), off: e(h), emit: e(x) }),
          (L = v({}, O)),
          (d.exports = s =
            function (R) {
              return R == null ? p(L) : v(Object(R), O);
            }),
          (s.methods = T);
      },
      function (d, s, r) {
        var e = r(6),
          o = r(14),
          y = r(18),
          n = r(26),
          p = r(27),
          m = (d.exports = function (v, l) {
            var u, g, b, h, x;
            return (
              arguments.length < 2 || typeof v != "string"
                ? ((h = l), (l = v), (v = null))
                : (h = arguments[2]),
              e(v)
                ? ((u = p.call(v, "c")),
                  (g = p.call(v, "e")),
                  (b = p.call(v, "w")))
                : ((u = b = !0), (g = !1)),
              (x = { value: l, configurable: u, enumerable: g, writable: b }),
              h ? y(n(h), x) : x
            );
          });
        m.gs = function (v, l, u) {
          var g, b, h, x;
          return (
            typeof v != "string"
              ? ((h = u), (u = l), (l = v), (v = null))
              : (h = arguments[3]),
            e(l)
              ? o(l)
                ? e(u)
                  ? o(u) || ((h = u), (u = void 0))
                  : (u = void 0)
                : ((h = l), (l = u = void 0))
              : (l = void 0),
            e(v)
              ? ((g = p.call(v, "c")), (b = p.call(v, "e")))
              : ((g = !0), (b = !1)),
            (x = { get: l, set: u, configurable: g, enumerable: b }),
            h ? y(n(h), x) : x
          );
        };
      },
      function (d, s, r) {
        var e = r(15),
          o = /^\s*class[\s{/}]/,
          y = Function.prototype.toString;
        d.exports = function (n) {
          return !(!e(n) || o.test(y.call(n)));
        };
      },
      function (d, s, r) {
        var e = r(16);
        d.exports = function (o) {
          if (typeof o != "function" || !hasOwnProperty.call(o, "length"))
            return !1;
          try {
            if (
              typeof o.length != "number" ||
              typeof o.call != "function" ||
              typeof o.apply != "function"
            )
              return !1;
          } catch {
            return !1;
          }
          return !e(o);
        };
      },
      function (d, s, r) {
        var e = r(17);
        d.exports = function (o) {
          if (!e(o)) return !1;
          try {
            return o.constructor ? o.constructor.prototype === o : !1;
          } catch {
            return !1;
          }
        };
      },
      function (d, s, r) {
        var e = r(6),
          o = { object: !0, function: !0, undefined: !0 };
        d.exports = function (y) {
          return e(y) ? hasOwnProperty.call(o, typeof y) : !1;
        };
      },
      function (d, s, r) {
        d.exports = r(19)() ? Object.assign : r(20);
      },
      function (d, s, r) {
        d.exports = function () {
          var e = Object.assign,
            o;
          return typeof e != "function"
            ? !1
            : ((o = { foo: "raz" }),
              e(o, { bar: "dwa" }, { trzy: "trzy" }),
              o.foo + o.bar + o.trzy === "razdwatrzy");
        };
      },
      function (d, s, r) {
        var e = r(21),
          o = r(25),
          y = Math.max;
        d.exports = function (n, p) {
          var m,
            v,
            l = y(arguments.length, 2),
            u;
          for (
            n = Object(o(n)),
              u = function (g) {
                try {
                  n[g] = p[g];
                } catch (b) {
                  m || (m = b);
                }
              },
              v = 1;
            v < l;
            ++v
          )
            (p = arguments[v]), e(p).forEach(u);
          if (m !== void 0) throw m;
          return n;
        };
      },
      function (d, s, r) {
        d.exports = r(22)() ? Object.keys : r(23);
      },
      function (d, s, r) {
        d.exports = function () {
          try {
            return Object.keys("primitive"), !0;
          } catch {
            return !1;
          }
        };
      },
      function (d, s, r) {
        var e = r(3),
          o = Object.keys;
        d.exports = function (y) {
          return o(e(y) ? Object(y) : y);
        };
      },
      function (d, s, r) {
        d.exports = function () {};
      },
      function (d, s, r) {
        var e = r(3);
        d.exports = function (o) {
          if (!e(o)) throw new TypeError("Cannot use null or undefined");
          return o;
        };
      },
      function (d, s, r) {
        var e = r(3),
          o = Array.prototype.forEach,
          y = Object.create,
          n = function (p, m) {
            var v;
            for (v in p) m[v] = p[v];
          };
        d.exports = function (p) {
          var m = y(null);
          return (
            o.call(arguments, function (v) {
              !e(v) || n(Object(v), m);
            }),
            m
          );
        };
      },
      function (d, s, r) {
        d.exports = r(28)() ? String.prototype.contains : r(29);
      },
      function (d, s, r) {
        var e = "razdwatrzy";
        d.exports = function () {
          return typeof e.contains != "function"
            ? !1
            : e.contains("dwa") === !0 && e.contains("foo") === !1;
        };
      },
      function (d, s, r) {
        var e = String.prototype.indexOf;
        d.exports = function (o) {
          return e.call(this, o, arguments[1]) > -1;
        };
      },
      function (d, s, r) {
        d.exports = function (e) {
          if (typeof e != "function")
            throw new TypeError(e + " is not a function");
          return e;
        };
      },
      function (d, s, r) {
        var e = r(32),
          o = Object.prototype.hasOwnProperty;
        d.exports = function (y) {
          var n = arguments[1],
            p;
          if ((e(y), n !== void 0)) {
            if (((p = o.call(y, "__ee__") && y.__ee__), !p)) return;
            p[n] && delete p[n];
            return;
          }
          o.call(y, "__ee__") && delete y.__ee__;
        };
      },
      function (d, s, r) {
        var e = r(33);
        d.exports = function (o) {
          if (!e(o)) throw new TypeError(o + " is not an Object");
          return o;
        };
      },
      function (d, s, r) {
        var e = r(3),
          o = { function: !0, object: !0 };
        d.exports = function (y) {
          return (e(y) && o[typeof y]) || !1;
        };
      },
      function (d, s, r) {
        var e = r(35);
        typeof e == "string" && (e = [[d.i, e, ""]]);
        var o,
          y = { hmr: !0 };
        (y.transform = o),
          (y.insertInto = void 0),
          r(2)(e, y),
          e.locals && (d.exports = e.locals);
      },
      function (d, s, r) {
        (s = d.exports = r(1)(!1)),
          s.push([
            d.i,
            ".xgplayer-skin-default{background:#000;width:100%;height:100%;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;-ms-user-select:none}.xgplayer-skin-default *{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}.xgplayer-skin-default.xgplayer-rotate-fullscreen{position:absolute;top:0;left:100%;bottom:0;right:0;height:100vw!important;width:100vh!important;-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.xgplayer-skin-default.xgplayer-is-fullscreen{width:100%!important;height:100%!important;padding-top:0!important;z-index:9999}.xgplayer-skin-default.xgplayer-is-fullscreen.xgplayer-inactive{cursor:none}.xgplayer-skin-default video{width:100%;height:100%;outline:none}.xgplayer-skin-default .xgplayer-none{display:none}@-webkit-keyframes loadingRotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingRotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes loadingDashOffset{0%{stroke-dashoffset:236}to{stroke-dashoffset:0}}@keyframes loadingDashOffset{0%{stroke-dashoffset:236}to{stroke-dashoffset:0}}.xgplayer-skin-default .xgplayer-controls{display:-webkit-flex;display:-moz-box;display:flex;position:absolute;bottom:0;left:0;right:0;height:40px;background-image:linear-gradient(180deg,transparent,rgba(0,0,0,.37),rgba(0,0,0,.75),rgba(0,0,0,.75));z-index:10}.xgplayer-skin-default.xgplayer-inactive .xgplayer-controls,.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls .xgplayer-progress,.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls .xgplayer-time,.xgplayer-skin-default.xgplayer-no-controls .xgplayer-controls,.xgplayer-skin-default.xgplayer-nostart .xgplayer-controls{display:none}.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls .xgplayer-live{display:block}.xgplayer-skin-default .xgplayer-live{display:block;font-size:12px;color:#fff;line-height:40px;-webkit-order:1;-moz-box-ordinal-group:2;order:1}.xgplayer-skin-default .xgplayer-icon{display:block;width:40px;height:40px;overflow:hidden;fill:#fff}.xgplayer-skin-default .xgplayer-icon svg{position:absolute}.xgplayer-skin-default .xgplayer-tips{background:rgba(0,0,0,.54);border-radius:1px;display:none;position:absolute;font-family:PingFangSC-Regular;font-size:11px;color:#fff;padding:2px 4px;text-align:center;top:-30px;left:50%;margin-left:-16px;width:auto;white-space:nowrap}.xgplayer-skin-default.xgplayer-mobile .xgplayer-tips{display:none!important}.xgplayer-skin-default .xgplayer-screen-container{display:block;width:100%}",
            ""
          ]);
      },
      function (d, s) {
        d.exports = function (r) {
          var e = typeof window < "u" && window.location;
          if (!e) throw new Error("fixUrls requires window.location");
          if (!r || typeof r != "string") return r;
          var o = e.protocol + "//" + e.host,
            y = o + e.pathname.replace(/\/[^\/]*$/, "/"),
            n = r.replace(
              /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
              function (p, m) {
                var v = m
                  .trim()
                  .replace(/^"(.*)"$/, function (u, g) {
                    return g;
                  })
                  .replace(/^'(.*)'$/, function (u, g) {
                    return g;
                  });
                if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(v))
                  return p;
                var l;
                return (
                  v.indexOf("//") === 0
                    ? (l = v)
                    : v.indexOf("/") === 0
                    ? (l = o + v)
                    : (l = y + v.replace(/^\.\//, "")),
                  "url(" + JSON.stringify(l) + ")"
                );
              }
            );
          return n;
        };
      },
      function (d, s, r) {
        Object.defineProperty(s, "__esModule", { value: !0 });
        var e = r(0),
          o = function () {
            var n = this,
              p = n.root,
              m = 0,
              v = void 0,
              l = { first: "", second: "" };
            n.onElementTouchend = function (b, h) {
              this.config.closeVideoPreventDefault || b.preventDefault(),
                this.config.closeVideoStopPropagation || b.stopPropagation();
              var x = this;
              if (
                ((0, e.hasClass)(p, "xgplayer-inactive")
                  ? x.emit("focus")
                  : x.emit("blur"),
                !x.config.closeVideoTouch && !x.isTouchMove)
              ) {
                var T = function () {
                  v = setTimeout(function () {
                    if ((0, e.hasClass)(x.root, "xgplayer-nostart")) return !1;
                    if (!x.ended)
                      if (x.paused) {
                        var L = x.play();
                        L !== void 0 && L && L.catch(function (R) {});
                      } else x.pause();
                    m = 0;
                  }, 200);
                };
                x.config.closeVideoClick ||
                  (m++,
                  v && clearTimeout(v),
                  m === 1
                    ? x.config.enableVideoDbltouch
                      ? (l.first = new Date())
                      : T()
                    : m === 2 && x.config.enableVideoDbltouch
                    ? ((l.second = new Date()),
                      Math.abs(l.first - l.second) < 400
                        ? T()
                        : ((l.first = new Date()), (m = 1)))
                    : (m = 0));
              }
            };
            function u(b) {
              n.video.addEventListener("touchend", function (h) {
                n.onElementTouchend(h, n.video);
              }),
                n.video.addEventListener("touchstart", function () {
                  n.isTouchMove = !1;
                }),
                n.video.addEventListener("touchmove", function () {
                  n.isTouchMove = !0;
                }),
                n.config.autoplay && n.start();
            }
            n.once("ready", u);
            function g() {
              n.off("ready", u), n.off("destroy", g);
            }
            n.once("destroy", g);
          };
        (s.default = { name: "mobile", method: o }), (d.exports = s.default);
      },
      function (d, s, r) {
        Object.defineProperty(s, "__esModule", { value: !0 });
        var e = r(0),
          o = function () {
            var n = this;
            if (!n.controls || !n.video) return;
            var p = n.controls,
              m = n.root,
              v = 0,
              l = void 0;
            (n.onElementClick = function (L, R) {
              this.config.closeVideoPreventDefault || L.preventDefault(),
                this.config.closeVideoStopPropagation || L.stopPropagation();
              var A = this;
              A.config.closeVideoClick ||
                (v++,
                l && clearTimeout(l),
                v === 1
                  ? (l = setTimeout(function () {
                      if ((0, e.hasClass)(A.root, "xgplayer-nostart"))
                        return !1;
                      if (!A.ended)
                        if (A.paused) {
                          var M = A.play();
                          M !== void 0 && M && M.catch(function (N) {});
                        } else A.pause();
                      v = 0;
                    }, 200))
                  : (v = 0));
            }),
              n.video.addEventListener(
                "click",
                function (L) {
                  n.onElementClick(L, n.video);
                },
                !1
              ),
              (n.onElementDblclick = function (L, R) {
                this.config.closeVideoPreventDefault || L.preventDefault(),
                  this.config.closeVideoStopPropagation || L.stopPropagation();
                var A = this;
                if (!A.config.closeVideoDblclick) {
                  var M = p.querySelector(".xgplayer-fullscreen");
                  if (M) {
                    var N = void 0;
                    document.createEvent
                      ? ((N = document.createEvent("Event")),
                        N.initEvent("click", !0, !0))
                      : (N = new Event("click")),
                      M.dispatchEvent(N);
                  }
                }
              }),
              n.video.addEventListener(
                "dblclick",
                function (L) {
                  n.onElementDblclick(L, n.video);
                },
                !1
              );
            function u() {
              clearTimeout(n.leavePlayerTimer), n.emit("focus", n);
            }
            m.addEventListener("mouseenter", u);
            function g() {
              n.config.closePlayerBlur ||
                (n.leavePlayerTimer = setTimeout(function () {
                  n.emit("blur", n);
                }, n.config.leavePlayerTime || 0));
            }
            m.addEventListener("mouseleave", g);
            function b(L) {
              n.userTimer && clearTimeout(n.userTimer);
            }
            p.addEventListener("mouseenter", b);
            function h(L) {
              n.config.closeControlsBlur || n.emit("focus", n);
            }
            p.addEventListener("mouseleave", h);
            function x(L) {
              L.preventDefault(), L.stopPropagation();
            }
            p.addEventListener("click", x);
            function T(L) {
              n.config.autoplay && n.start();
            }
            n.once("ready", T);
            function O() {
              m.removeEventListener("mouseenter", u),
                m.removeEventListener("mouseleave", g),
                n.off("ready", T),
                n.off("destroy", O);
            }
            n.once("destroy", O);
          };
        (s.default = { name: "pc", method: o }), (d.exports = s.default);
      },
      function (d, s, r) {
        Object.defineProperty(s, "__esModule", { value: !0 });
        var e = r(0),
          o = function () {
            var n = this,
              p = n.root;
            function m() {
              n.off("canplay", m);
              var u = n.play();
              u !== void 0 && u && u.catch(function (g) {});
            }
            function v() {
              (0, e.hasClass)(p, "xgplayer-nostart")
                ? ((0, e.removeClass)(p, "xgplayer-nostart"),
                  (0, e.addClass)(p, "xgplayer-is-enter"),
                  typeof p.contains == "function"
                    ? (n.video &&
                        n.video.nodeType === 1 &&
                        !p.contains(n.video)) ||
                      (n.video &&
                        n.video.nodeType !== 1 &&
                        n.video.mediaSource === void 0)
                      ? (n.once("canplay", m), n.start())
                      : m()
                    : (n.video &&
                        n.video.nodeType === 1 &&
                        !p.querySelector(this.videoConfig.mediaType)) ||
                      (n.video &&
                        n.video.nodeType !== 1 &&
                        n.video.mediaSource === void 0)
                    ? (n.once("canplay", m), n.start())
                    : m())
                : n.paused &&
                  ((0, e.removeClass)(p, "xgplayer-nostart xgplayer-isloading"),
                  setTimeout(function () {
                    var u = n.play();
                    u !== void 0 && u && u.catch(function (g) {});
                  }, 10));
            }
            n.on("startBtnClick", v);
            function l() {
              n.off("startBtnClick", v),
                n.off("canplay", m),
                n.off("destroy", l);
            }
            n.once("destroy", l);
          };
        (s.default = { name: "start", method: o }), (d.exports = s.default);
      },
      function (d, s, r) {
        Object.defineProperty(s, "__esModule", { value: !0 });
        var e = r(0),
          o = r(41),
          y = m(o),
          n = r(42),
          p = m(n);
        r(43);
        function m(l) {
          return l && l.__esModule ? l : { default: l };
        }
        var v = function () {
          var u = this,
            g = u.root,
            b = (0, e.createDom)(
              "xg-start",
              '<div class="xgplayer-icon-play">' +
                y.default +
                `</div>
                                      <div class="xgplayer-icon-pause">` +
                p.default +
                "</div>",
              {},
              "xgplayer-start"
            );
          function h(x) {
            (0, e.addClass)(x.root, "xgplayer-skin-default"),
              x.config &&
                (x.config.autoplay &&
                  !(0, e.isWeiXin)() &&
                  !(0, e.isUc)() &&
                  (0, e.addClass)(x.root, "xgplayer-is-enter"),
                x.config.lang && x.config.lang === "en"
                  ? (0, e.addClass)(x.root, "xgplayer-lang-is-en")
                  : x.config.lang === "jp" &&
                    (0, e.addClass)(x.root, "xgplayer-lang-is-jp"),
                x.config.enableContextmenu ||
                  x.video.addEventListener("contextmenu", function (T) {
                    T.preventDefault(), T.stopPropagation();
                  }));
          }
          u.config &&
            u.config.hideStartBtn &&
            (0, e.addClass)(g, "xgplayer-start-hide"),
            u.isReady
              ? (g.appendChild(b), h(u))
              : u.once("ready", function () {
                  g.appendChild(b), h(u);
                }),
            u.once("autoplay was prevented", function () {
              (0, e.removeClass)(u.root, "xgplayer-is-enter"),
                (0, e.addClass)(u.root, "xgplayer-nostart");
            }),
            u.once("canplay", function () {
              (0, e.removeClass)(u.root, "xgplayer-is-enter");
            }),
            (b.onclick = function (x) {
              x.preventDefault(),
                x.stopPropagation(),
                u.userGestureTrigEvent("startBtnClick");
            });
        };
        (s.default = { name: "s_start", method: v }), (d.exports = s.default);
      },
      function (d, s, r) {
        r.r(s),
          (s.default = `<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">
  <path transform="translate(15,15) scale(0.04,0.04)" d="M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z"></path>
</svg>
`);
      },
      function (d, s, r) {
        r.r(s),
          (s.default = `<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">
  <path transform="translate(15,15) scale(0.04 0.04)" d="M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z"></path>
</svg>
`);
      },
      function (d, s, r) {
        var e = r(44);
        typeof e == "string" && (e = [[d.i, e, ""]]);
        var o,
          y = { hmr: !0 };
        (y.transform = o),
          (y.insertInto = void 0),
          r(2)(e, y),
          e.locals && (d.exports = e.locals);
      },
      function (d, s, r) {
        (s = d.exports = r(1)(!1)),
          s.push([
            d.i,
            ".xgplayer-skin-default .xgplayer-start{border-radius:50%;display:inline-block;width:70px;height:70px;background:rgba(0,0,0,.38);overflow:hidden;text-align:center;line-height:70px;vertical-align:middle;position:absolute;left:50%;top:50%;z-index:115;margin:-35px auto auto -35px;cursor:pointer}.xgplayer-skin-default .xgplayer-start div{position:absolute}.xgplayer-skin-default .xgplayer-start div svg{fill:hsla(0,0%,100%,.7)}.xgplayer-skin-default .xgplayer-start .xgplayer-icon-play{display:block}.xgplayer-skin-default .xgplayer-start .xgplayer-icon-pause{display:none}.xgplayer-skin-default .xgplayer-start:hover{opacity:.85}.xgplayer-skin-default.xgplayer-pause.xgplayer-start-hide .xgplayer-start,.xgplayer-skin-default.xgplayer-playing .xgplayer-start,.xgplayer-skin-default.xgplayer-playing .xgplayer-start .xgplayer-icon-play,.xgplayer-skin-default.xgplayer-start-hide .xgplayer-start{display:none}.xgplayer-skin-default.xgplayer-playing .xgplayer-start .xgplayer-icon-pause{display:block}.xgplayer-skin-default.xgplayer-pause .xgplayer-start{display:inline-block}.xgplayer-skin-default.xgplayer-pause .xgplayer-start .xgplayer-icon-play{display:block}.xgplayer-skin-default.xgplayer-is-replay .xgplayer-start,.xgplayer-skin-default.xgplayer-pause .xgplayer-start .xgplayer-icon-pause{display:none}.xgplayer-skin-default.xgplayer-is-replay .xgplayer-start .xgplayer-icon-play{display:block}.xgplayer-skin-default.xgplayer-is-replay .xgplayer-start .xgplayer-icon-pause{display:none}",
            ""
          ]);
      },
      function (d, s, r) {
        Object.defineProperty(s, "__esModule", { value: !0 });
        var e = r(0),
          o = function () {
            var n = this,
              p = n.root;
            function m() {
              n.config.rotateFullscreen
                ? (0, e.hasClass)(p, "xgplayer-rotate-fullscreen")
                  ? n.exitRotateFullscreen()
                  : n.getRotateFullscreen()
                : (0, e.hasClass)(p, "xgplayer-is-fullscreen")
                ? n.exitFullscreen(p)
                : n.getFullscreen(p);
            }
            n.on("fullscreenBtnClick", m);
            function v() {
              var g =
                document.fullscreenElement ||
                document.webkitFullscreenElement ||
                document.mozFullScreenElement ||
                document.msFullscreenElement;
              g && g === p
                ? ((0, e.addClass)(p, "xgplayer-is-fullscreen"),
                  n.emit("requestFullscreen"))
                : (0, e.hasClass)(p, "xgplayer-is-fullscreen") &&
                  ((0, e.removeClass)(p, "xgplayer-is-fullscreen"),
                  n.emit("exitFullscreen")),
                n.danmu &&
                  typeof n.danmu.resize == "function" &&
                  n.danmu.resize();
            }
            [
              "fullscreenchange",
              "webkitfullscreenchange",
              "mozfullscreenchange",
              "MSFullscreenChange"
            ].forEach(function (g) {
              document.addEventListener(g, v);
            }),
              n.video.addEventListener("webkitbeginfullscreen", function () {
                (0, e.addClass)(p, "xgplayer-is-fullscreen"),
                  n.emit("requestFullscreen");
              }),
              n.video.addEventListener("webkitendfullscreen", function () {
                (0, e.removeClass)(p, "xgplayer-is-fullscreen"),
                  n.emit("exitFullscreen");
              });
            function l(g) {
              var b = n.video.webkitPresentationMode;
              b !== e.PresentationMode.FULLSCREEN &&
                ((0, e.removeClass)(p, "xgplayer-is-fullscreen"),
                n.emit("exitFullscreen"));
            }
            (0, e.checkWebkitSetPresentationMode)(n.video) &&
              n.video.addEventListener("webkitpresentationmodechanged", l);
            function u() {
              n.off("fullscreenBtnClick", m),
                [
                  "fullscreenchange",
                  "webkitfullscreenchange",
                  "mozfullscreenchange",
                  "MSFullscreenChange"
                ].forEach(function (g) {
                  document.removeEventListener(g, v);
                }),
                (0, e.checkWebkitSetPresentationMode)(n.video) &&
                  n.video.removeEventListener(
                    "webkitpresentationmodechanged",
                    l
                  ),
                n.off("destroy", u);
            }
            n.once("destroy", u),
              (n.getFullscreen = function (g) {
                var b = this;
                if (g.requestFullscreen) {
                  var h = g.requestFullscreen();
                  h &&
                    h.catch(function () {
                      b.emit("fullscreen error");
                    });
                } else
                  g.mozRequestFullScreen
                    ? g.mozRequestFullScreen()
                    : g.webkitRequestFullscreen
                    ? g.webkitRequestFullscreen(
                        window.Element.ALLOW_KEYBOARD_INPUT
                      )
                    : b.video.webkitSupportsFullscreen
                    ? b.video.webkitEnterFullscreen()
                    : g.msRequestFullscreen
                    ? g.msRequestFullscreen()
                    : (0, e.addClass)(g, "xgplayer-is-cssfullscreen");
              }),
              (n.exitFullscreen = function (g) {
                document.exitFullscreen
                  ? document.exitFullscreen()
                  : document.webkitExitFullscreen
                  ? document.webkitExitFullscreen()
                  : document.mozCancelFullScreen
                  ? document.mozCancelFullScreen()
                  : document.msExitFullscreen && document.msExitFullscreen(),
                  (0, e.removeClass)(g, "xgplayer-is-cssfullscreen");
              }),
              (n.getRotateFullscreen = function () {
                var g = this;
                (document.documentElement.style.width = "100%"),
                  (document.documentElement.style.height = "100%"),
                  g.config.fluid &&
                    ((g.root.style["padding-top"] = ""),
                    (g.root.style["max-width"] = "unset")),
                  g.root &&
                    !(0, e.hasClass)(g.root, "xgplayer-rotate-fullscreen") &&
                    (0, e.addClass)(g.root, "xgplayer-rotate-fullscreen"),
                  g.emit("getRotateFullscreen");
              }),
              (n.exitRotateFullscreen = function () {
                var g = this;
                (document.documentElement.style.width = "unset"),
                  (document.documentElement.style.height = "unset"),
                  g.config.fluid &&
                    ((g.root.style.width = "100%"),
                    (g.root.style.height = "0"),
                    (g.root.style["padding-top"] =
                      (g.config.height * 100) / g.config.width + "%"),
                    (g.root.style["max-width"] = "100%")),
                  g.root &&
                    (0, e.hasClass)(g.root, "xgplayer-rotate-fullscreen") &&
                    (0, e.removeClass)(g.root, "xgplayer-rotate-fullscreen"),
                  g.emit("exitRotateFullscreen");
              });
          };
        (s.default = { name: "fullscreen", method: o }),
          (d.exports = s.default);
      },
      function (d, s, r) {
        Object.defineProperty(s, "__esModule", { value: !0 });
        var e = r(0),
          o = function () {
            var n = this;
            function p() {
              if (!(!n.config.allowPlayAfterEnded && n.ended))
                if (
                  ((0, e.hasClass)(n.root, "xgplayer-nostart") && n.start(),
                  n.paused)
                ) {
                  var v = n.play();
                  v !== void 0 && v && v.catch(function (l) {});
                } else n.pause();
            }
            n.on("playBtnClick", p);
            function m() {
              n.off("playBtnClick", p), n.off("destroy", m);
            }
            n.once("destroy", m);
          };
        (s.default = { name: "play", method: o }), (d.exports = s.default);
      },
      function (d, s, r) {
        Object.defineProperty(s, "__esModule", { value: !0 });
        var e = r(0),
          o = function () {
            var n = this,
              p = n.root;
            function m() {
              (0, e.removeClass)(p, "xgplayer-is-replay"), n.replay();
            }
            n.on("replayBtnClick", m);
            function v() {
              n.config.loop || (0, e.addClass)(p, "xgplayer-is-replay");
            }
            n.on("ended", v);
            function l() {
              n.off("replayBtnClick", m), n.off("destroy", l);
            }
            n.once("destroy", l);
          };
        (s.default = { name: "replay", method: o }), (d.exports = s.default);
      },
      function (d, s, r) {
        Object.defineProperty(s, "__esModule", { value: !0 });
        var e = r(0),
          o = r(49),
          y = m(o),
          n = r(50),
          p = m(n);
        r(51);
        function m(l) {
          return l && l.__esModule ? l : { default: l };
        }
        var v = function () {
          var u = this,
            g = u.config.playBtn ? u.config.playBtn : {},
            b = void 0;
          g.type === "img"
            ? (b = (0, e.createImgBtn)("play", g.url.play, g.width, g.height))
            : (b = (0, e.createDom)(
                "xg-play",
                `<xg-icon class="xgplayer-icon">
                                      <div class="xgplayer-icon-play">` +
                  y.default +
                  `</div>
                                      <div class="xgplayer-icon-pause">` +
                  p.default +
                  `</div>
                                     </xg-icon>`,
                {},
                "xgplayer-play"
              ));
          var h = {};
          (h.play = u.lang.PLAY_TIPS), (h.pause = u.lang.PAUSE_TIPS);
          var x = (0, e.createDom)(
            "xg-tips",
            '<span class="xgplayer-tip-play">' +
              h.play +
              `</span>
                                        <span class="xgplayer-tip-pause">` +
              h.pause +
              "</span>",
            {},
            "xgplayer-tips"
          );
          b.appendChild(x),
            u.once("ready", function () {
              u.controls && u.controls.appendChild(b);
            }),
            ["click", "touchend"].forEach(function (T) {
              b.addEventListener(T, function (O) {
                O.preventDefault(),
                  O.stopPropagation(),
                  u.userGestureTrigEvent("playBtnClick");
              });
            });
        };
        (s.default = { name: "s_play", method: v }), (d.exports = s.default);
      },
      function (d, s, r) {
        r.r(s),
          (s.default = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
  <path transform="translate(2,2) scale(0.0320625 0.0320625)" d="M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z"></path>
</svg>
`);
      },
      function (d, s, r) {
        r.r(s),
          (s.default = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
  <path transform="translate(2,2) scale(0.0320625 0.0320625)" d="M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z"></path>
</svg>
`);
      },
      function (d, s, r) {
        var e = r(52);
        typeof e == "string" && (e = [[d.i, e, ""]]);
        var o,
          y = { hmr: !0 };
        (y.transform = o),
          (y.insertInto = void 0),
          r(2)(e, y),
          e.locals && (d.exports = e.locals);
      },
      function (d, s, r) {
        (s = d.exports = r(1)(!1)),
          s.push([
            d.i,
            ".xgplayer-skin-default .xgplayer-play,.xgplayer-skin-default .xgplayer-play-img{width:40px;position:relative;-webkit-order:0;-moz-box-ordinal-group:1;order:0;display:block;cursor:pointer;margin-left:3px}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon,.xgplayer-skin-default .xgplayer-play .xgplayer-icon{margin-top:3px;width:32px}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon div,.xgplayer-skin-default .xgplayer-play .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default .xgplayer-play .xgplayer-icon .xgplayer-icon-play{display:block}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon .xgplayer-icon-pause,.xgplayer-skin-default .xgplayer-play .xgplayer-icon .xgplayer-icon-pause{display:none}.xgplayer-skin-default .xgplayer-play-img .xgplayer-tips .xgplayer-tip-play,.xgplayer-skin-default .xgplayer-play .xgplayer-tips .xgplayer-tip-play{display:block}.xgplayer-skin-default .xgplayer-play-img .xgplayer-tips .xgplayer-tip-pause,.xgplayer-skin-default .xgplayer-play .xgplayer-tips .xgplayer-tip-pause{display:none}.xgplayer-skin-default .xgplayer-play-img:hover,.xgplayer-skin-default .xgplayer-play:hover{opacity:.85}.xgplayer-skin-default .xgplayer-play-img:hover .xgplayer-tips,.xgplayer-skin-default .xgplayer-play:hover .xgplayer-tips{display:block}.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-icon .xgplayer-icon-play{display:none}.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-icon .xgplayer-icon-pause,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-icon .xgplayer-icon-pause{display:block}.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-tips .xgplayer-tip-play,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-tips .xgplayer-tip-play{display:none}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-tips .xgplayer-tip-pause,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-tips .xgplayer-tip-pause{display:block}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-icon .xgplayer-icon-pause,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-icon .xgplayer-icon-pause{display:none}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-tips .xgplayer-tip-play,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-tips .xgplayer-tip-play{display:block}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-tips .xgplayer-tip-pause,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-tips .xgplayer-tip-pause{display:none}",
            ""
          ]);
      },
      function (d, s, r) {
        Object.defineProperty(s, "__esModule", { value: !0 });
        var e = r(0);
        r(54);
        var o = function () {
          var n = this,
            p = n.root;
          if (!!n.config.poster) {
            var m = (0, e.createDom)("xg-poster", "", {}, "xgplayer-poster");
            (m.style.backgroundImage = "url(" + n.config.poster + ")"),
              p.appendChild(m);
          }
        };
        (s.default = { name: "s_poster", method: o }), (d.exports = s.default);
      },
      function (d, s, r) {
        var e = r(55);
        typeof e == "string" && (e = [[d.i, e, ""]]);
        var o,
          y = { hmr: !0 };
        (y.transform = o),
          (y.insertInto = void 0),
          r(2)(e, y),
          e.locals && (d.exports = e.locals);
      },
      function (d, s, r) {
        (s = d.exports = r(1)(!1)),
          s.push([
            d.i,
            ".xgplayer-skin-default .xgplayer-poster{display:none;position:absolute;left:0;top:0;width:100%;height:100%;z-index:100;background-size:cover;background-position:50%}.xgplayer-skin-default.xgplayer-nostart .xgplayer-poster{display:block}",
            ""
          ]);
      },
      function (d, s, r) {
        Object.defineProperty(s, "__esModule", { value: !0 });
        var e = r(0);
        r(57);
        var o = function () {
          var n = this,
            p = (0, e.createDom)(
              "xg-placeholder",
              "",
              {},
              "xgplayer-placeholder"
            );
          n.controls.appendChild(p);
        };
        (s.default = { name: "s_flex", method: o }), (d.exports = s.default);
      },
      function (d, s, r) {
        var e = r(58);
        typeof e == "string" && (e = [[d.i, e, ""]]);
        var o,
          y = { hmr: !0 };
        (y.transform = o),
          (y.insertInto = void 0),
          r(2)(e, y),
          e.locals && (d.exports = e.locals);
      },
      function (d, s, r) {
        (s = d.exports = r(1)(!1)),
          s.push([
            d.i,
            ".xgplayer-skin-default .xgplayer-placeholder{-webkit-flex:1;-moz-box-flex:1;flex:1;-webkit-order:3;-moz-box-ordinal-group:4;order:3;display:block}",
            ""
          ]);
      },
      function (d, s, r) {
        Object.defineProperty(s, "__esModule", { value: !0 });
        var e = r(0),
          o = r(60),
          y = m(o),
          n = r(61),
          p = m(n);
        r(62);
        function m(l) {
          return l && l.__esModule ? l : { default: l };
        }
        var v = function () {
          var u = this,
            g = u.config.fullscreenBtn ? u.config.fullscreenBtn : {},
            b = void 0;
          g.type === "img"
            ? (b = (0, e.createImgBtn)(
                "fullscreen",
                g.url.request,
                g.width,
                g.height
              ))
            : (b = (0, e.createDom)(
                "xg-fullscreen",
                `<xg-icon class="xgplayer-icon">
                                             <div class="xgplayer-icon-requestfull">` +
                  y.default +
                  `</div>
                                             <div class="xgplayer-icon-exitfull">` +
                  p.default +
                  `</div>
                                           </xg-icon>`,
                {},
                "xgplayer-fullscreen"
              ));
          var h = {};
          (h.requestfull = u.lang.FULLSCREEN_TIPS),
            (h.exitfull = u.lang.EXITFULLSCREEN_TIPS);
          var x = (0, e.createDom)(
            "xg-tips",
            '<span class="xgplayer-tip-requestfull">' +
              h.requestfull +
              `</span>
                                        <span class="xgplayer-tip-exitfull">` +
              h.exitfull +
              "</span>",
            {},
            "xgplayer-tips"
          );
          b.appendChild(x),
            u.once("ready", function () {
              u.controls && u.controls.appendChild(b);
            }),
            ["click", "touchend"].forEach(function (T) {
              b.addEventListener(T, function (O) {
                O.preventDefault(),
                  O.stopPropagation(),
                  u.userGestureTrigEvent("fullscreenBtnClick");
              });
            });
        };
        (s.default = { name: "s_fullscreen", method: v }),
          (d.exports = s.default);
      },
      function (d, s, r) {
        r.r(s),
          (s.default = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
  <path transform="scale(0.0320625 0.0320625)" d="M598 214h212v212h-84v-128h-128v-84zM726 726v-128h84v212h-212v-84h128zM214 426v-212h212v84h-128v128h-84zM298 598v128h128v84h-212v-212h84z"></path>
</svg>
`);
      },
      function (d, s, r) {
        r.r(s),
          (s.default = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
  <path transform="scale(0.0320625 0.0320625)" d="M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z"></path>
</svg>
`);
      },
      function (d, s, r) {
        var e = r(63);
        typeof e == "string" && (e = [[d.i, e, ""]]);
        var o,
          y = { hmr: !0 };
        (y.transform = o),
          (y.insertInto = void 0),
          r(2)(e, y),
          e.locals && (d.exports = e.locals);
      },
      function (d, s, r) {
        (s = d.exports = r(1)(!1)),
          s.push([
            d.i,
            ".xgplayer-skin-default .xgplayer-fullscreen,.xgplayer-skin-default .xgplayer-fullscreen-img{position:relative;-webkit-order:13;-moz-box-ordinal-group:14;order:13;display:block;cursor:pointer;margin-left:5px;margin-right:3px}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-icon,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-icon{margin-top:3px}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-icon div,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-requestfull{display:block}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-exitfull{display:none}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-tips,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-tips{position:absolute;right:0;left:auto}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-requestfull{display:block}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-exitfull{display:none}.xgplayer-skin-default .xgplayer-fullscreen-img:hover,.xgplayer-skin-default .xgplayer-fullscreen:hover{opacity:.85}.xgplayer-skin-default .xgplayer-fullscreen-img:hover .xgplayer-tips,.xgplayer-skin-default .xgplayer-fullscreen:hover .xgplayer-tips{display:block}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-requestfull{display:none}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-exitfull{display:block}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-requestfull{display:none}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-exitfull{display:block}",
            ""
          ]);
      },
      function (d, s, r) {
        Object.defineProperty(s, "__esModule", { value: !0 });
        var e = r(0),
          o = r(65),
          y = n(o);
        r(66);
        function n(m) {
          return m && m.__esModule ? m : { default: m };
        }
        var p = function () {
          var v = this,
            l = v.root,
            u = (0, e.createDom)(
              "xg-loading",
              "" + y.default,
              {},
              "xgplayer-loading"
            );
          v.once("ready", function () {
            l.appendChild(u);
          });
        };
        (s.default = { name: "s_loading", method: p }), (d.exports = s.default);
      },
      function (d, s, r) {
        r.r(s),
          (s.default = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewbox="0 0 100 100">
  <path d="M100,50A50,50,0,1,1,50,0"></path>
</svg>
`);
      },
      function (d, s, r) {
        var e = r(67);
        typeof e == "string" && (e = [[d.i, e, ""]]);
        var o,
          y = { hmr: !0 };
        (y.transform = o),
          (y.insertInto = void 0),
          r(2)(e, y),
          e.locals && (d.exports = e.locals);
      },
      function (d, s, r) {
        (s = d.exports = r(1)(!1)),
          s.push([
            d.i,
            ".xgplayer-skin-default .xgplayer-loading{display:none;width:100px;height:100px;overflow:hidden;-webkit-transform:scale(.7);-ms-transform:scale(.7);transform:scale(.7);position:absolute;left:50%;top:50%;margin:-50px auto auto -50px}.xgplayer-skin-default .xgplayer-loading svg{border-radius:50%;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-animation:loadingRotate 1s linear infinite;animation:loadingRotate 1s linear infinite}.xgplayer-skin-default .xgplayer-loading svg path{stroke:#ddd;stroke-dasharray:236;-webkit-animation:loadingDashOffset 2s linear infinite;animation:loadingDashOffset 2s linear infinite;animation-direction:alternate-reverse;fill:none;stroke-width:12px}.xgplayer-skin-default.xgplayer-nostart .xgplayer-loading{display:none}.xgplayer-skin-default.xgplayer-pause .xgplayer-loading{display:none!important}.xgplayer-skin-default.xgplayer-isloading .xgplayer-loading{display:block}",
            ""
          ]);
      },
      function (d, s, r) {
        Object.defineProperty(s, "__esModule", { value: !0 });
        var e = r(0),
          o = r(5),
          y = n(o);
        r(69);
        function n(v) {
          return v && v.__esModule ? v : { default: v };
        }
        var p = function (l) {
            return (0, e.hasClass)(l.root, "xgplayer-rotate-fullscreen");
          },
          m = function () {
            var l = this,
              u = (0, e.createDom)(
                "xg-progress",
                `<xg-outer class="xgplayer-progress-outer">
                                                   <xg-cache class="xgplayer-progress-cache"></xg-cache>
                                                   <xg-played class="xgplayer-progress-played">
                                                     <xg-progress-btn class="xgplayer-progress-btn"></xg-progress-btn>
                                                     <xg-point class="xgplayer-progress-point xgplayer-tips"></xg-point>
                                                     <xg-thumbnail class="xgplayer-progress-thumbnail xgplayer-tips"></xg-thumbnail>
                                                   </xg-played>
                                                 </xg-outer>`,
                { tabindex: 1 },
                "xgplayer-progress"
              ),
              g = void 0;
            l.controls.appendChild(u);
            var b = u.querySelector(".xgplayer-progress-played"),
              h = u.querySelector(".xgplayer-progress-outer"),
              x = u.querySelector(".xgplayer-progress-cache"),
              T = u.querySelector(".xgplayer-progress-point"),
              O = u.querySelector(".xgplayer-progress-thumbnail");
            l.dotArr = {};
            function L(_, D) {
              _.addEventListener("mouseenter", function (B) {
                D &&
                  ((0, e.addClass)(_, "xgplayer-progress-dot-show"),
                  (0, e.addClass)(u, "xgplayer-progress-dot-active"));
              }),
                _.addEventListener("mouseleave", function (B) {
                  D &&
                    ((0, e.removeClass)(_, "xgplayer-progress-dot-show"),
                    (0, e.removeClass)(u, "xgplayer-progress-dot-active"));
                }),
                _.addEventListener("touchend", function (B) {
                  B.stopPropagation(),
                    D &&
                      ((0, e.hasClass)(_, "xgplayer-progress-dot-show") ||
                        Object.keys(l.dotArr).forEach(function (j) {
                          l.dotArr[j] &&
                            (0, e.removeClass)(
                              l.dotArr[j],
                              "xgplayer-progress-dot-show"
                            );
                        }),
                      (0, e.toggleClass)(_, "xgplayer-progress-dot-show"),
                      (0, e.toggleClass)(u, "xgplayer-progress-dot-active"));
                });
            }
            function R() {
              l.config.progressDot &&
                (0, e.typeOf)(l.config.progressDot) === "Array" &&
                l.config.progressDot.forEach(function (_) {
                  if (_.time >= 0 && _.time <= l.duration) {
                    var D = (0, e.createDom)(
                      "xg-progress-dot",
                      _.text
                        ? '<span class="xgplayer-progress-tip">' +
                            _.text +
                            "</span>"
                        : "",
                      {},
                      "xgplayer-progress-dot"
                    );
                    if (
                      ((D.style.left = (_.time / l.duration) * 100 + "%"),
                      _.duration >= 0 &&
                        (D.style.width =
                          (Math.min(_.duration, l.duration - _.time) /
                            l.duration) *
                            100 +
                          "%"),
                      _.style)
                    )
                      for (var B in _.style) D.style[B] = _.style[B];
                    h.appendChild(D), (l.dotArr[_.time] = D), L(D, _.text);
                  }
                });
            }
            l.once("canplay", R),
              (l.addProgressDot = function (_, D, B, j) {
                if (!l.dotArr[_] && _ >= 0 && _ <= l.duration) {
                  var z = (0, e.createDom)(
                    "xg-progress-dot",
                    D
                      ? '<span class="xgplayer-progress-tip">' + D + "</span>"
                      : "",
                    {},
                    "xgplayer-progress-dot"
                  );
                  if (
                    ((z.style.left = (_ / l.duration) * 100 + "%"),
                    B >= 0 &&
                      (z.style.width =
                        (Math.min(B, l.duration - _) / l.duration) * 100 + "%"),
                    j)
                  )
                    for (var V in j) z.style[V] = j[V];
                  h.appendChild(z), (l.dotArr[_] = z), L(z, D);
                }
              }),
              (l.removeProgressDot = function (_) {
                if (_ >= 0 && _ <= l.duration && l.dotArr[_]) {
                  var D = l.dotArr[_];
                  D.parentNode.removeChild(D), (D = null), (l.dotArr[_] = null);
                }
              }),
              (l.removeAllProgressDot = function () {
                Object.keys(l.dotArr).forEach(function (_) {
                  if (l.dotArr[_]) {
                    var D = l.dotArr[_];
                    D.parentNode.removeChild(D),
                      (D = null),
                      (l.dotArr[_] = null);
                  }
                });
              });
            var A = 0,
              M = 0,
              N = 0,
              U = 0,
              C = 0,
              a = 0,
              i = [],
              t = void 0,
              c = void 0,
              E = function () {
                l.config.thumbnail &&
                  (l.config.thumbnail.isShowCoverPreview &&
                    !t &&
                    (b.removeChild(O),
                    (t = (0, e.createDom)(
                      "xg-coverpreview",
                      `<xg-outer class="xgplayer-coverpreview-outer">
            <xg-thumbnail class="xgplayer-coverpreview-thumbnail"></xg-thumbnail>
            <xg-point class="xgplayer-coverpreview-point"></xg-point>
          </xg-outer>`,
                      { tabindex: 1 },
                      "xgplayer-coverpreview"
                    )),
                    t.querySelector(".xgplayer-coverpreview-outer"),
                    (c = t.querySelector(".xgplayer-coverpreview-point")),
                    (O = t.querySelector(".xgplayer-coverpreview-thumbnail")),
                    l.root.appendChild(t)),
                  (A = l.config.thumbnail.pic_num),
                  (M = l.config.thumbnail.width),
                  (N = l.config.thumbnail.height),
                  (U = l.config.thumbnail.col),
                  (C = l.config.thumbnail.row),
                  (i = l.config.thumbnail.urls),
                  (O.style.width = M + "px"),
                  (O.style.height = N + "px"));
              };
            l.on("loadedmetadata", E),
              typeof l.config.disableSwipeHandler == "function" &&
                typeof l.config.enableSwipeHandler == "function" &&
                (l.root.addEventListener("touchmove", function (_) {
                  _.preventDefault(),
                    l.disableSwipe ||
                      ((l.disableSwipe = !0),
                      l.config.disableSwipeHandler.call(l));
                }),
                l.root.addEventListener("touchstart", function (_) {
                  (l.disableSwipe = !0), l.config.disableSwipeHandler.call(l);
                }),
                l.root.addEventListener("touchend", function (_) {
                  (l.disableSwipe = !1), l.config.enableSwipeHandler.call(l);
                }));
            var k = ["touchstart", "mousedown"];
            y.default.device === "mobile" && k.pop(),
              k.forEach(function (_) {
                u.addEventListener(_, function (D) {
                  if (!l.config.disableProgress) {
                    if (
                      (D.stopPropagation(),
                      (0, e.event)(D),
                      D._target === T ||
                        (!l.config.allowSeekAfterEnded && l.ended))
                    )
                      return !0;
                    u.focus();
                    var B = b.getBoundingClientRect(),
                      j = B.left,
                      z = p(l);
                    z
                      ? ((j = b.getBoundingClientRect().top),
                        (g = u.getBoundingClientRect().height))
                      : ((g = u.getBoundingClientRect().width),
                        (j = b.getBoundingClientRect().left));
                    var V = function (H) {
                        H.stopPropagation(),
                          (0, e.event)(H),
                          (l.isProgressMoving = !0);
                        var Y = (z ? H.clientY : H.clientX) - j;
                        Y > g && (Y = g);
                        var W = (Y / g) * l.duration;
                        if (
                          (W < 0 && (W = 0),
                          !(
                            l.config.allowSeekPlayed &&
                            Number(W).toFixed(1) > l.maxPlayedTime
                          ))
                        )
                          if (
                            ((b.style.width = (Y * 100) / g + "%"),
                            l.videoConfig.mediaType === "video" &&
                              !l.dash &&
                              !l.config.closeMoveSeek)
                          )
                            console.log("trigger touchmove"),
                              (l.currentTime = Number(W).toFixed(1));
                          else {
                            var q = (0, e.findDom)(
                              l.controls,
                              ".xgplayer-time"
                            );
                            q &&
                              (q.innerHTML =
                                '<span class="xgplayer-time-current">' +
                                (0, e.format)(W || 0) +
                                "</span><span>" +
                                (0, e.format)(l.duration) +
                                "</span>");
                          }
                        if (
                          l.config.thumbnail &&
                          l.config.thumbnail.isShowCoverPreview
                        ) {
                          (c.innerHTML =
                            "<span>" +
                            (0, e.format)(W) +
                            "</span> / " +
                            (0, e.format)(l.duration || 0)),
                            (a = l.duration / A);
                          var J = Math.floor(W / a);
                          O.style.backgroundImage =
                            "url(" + i[Math.ceil((J + 1) / (U * C)) - 1] + ")";
                          var Z =
                              J +
                              1 -
                              U * C * (Math.ceil((J + 1) / (U * C)) - 1),
                            te = Math.ceil(Z / C) - 1,
                            G = Z - te * C - 1;
                          (O.style["background-position"] =
                            "-" + G * M + "px -" + te * N + "px"),
                            (t.style.display = "block");
                        }
                        l.emit("focus");
                      },
                      ee = function $(H) {
                        if (
                          (console.log("up event", H),
                          H.stopPropagation(),
                          (0, e.event)(H),
                          window.removeEventListener("mousemove", V),
                          window.removeEventListener("touchmove", V, {
                            passive: !1
                          }),
                          window.removeEventListener("mouseup", $),
                          window.removeEventListener("touchend", $),
                          y.default.browser.indexOf("ie") < 0 && u.blur(),
                          !l.isProgressMoving ||
                            (l.videoConfig &&
                              l.videoConfig.mediaType === "audio") ||
                            l.dash ||
                            l.config.closeMoveSeek)
                        ) {
                          var Y = (z ? H.clientY : H.clientX) - j;
                          Y > g && (Y = g);
                          var W = (Y / g) * l.duration;
                          W < 0 && (W = 0),
                            (l.config.allowSeekPlayed &&
                              Number(W).toFixed(1) > l.maxPlayedTime) ||
                              ((b.style.width = (Y * 100) / g + "%"),
                              console.warn("trigger touchup"),
                              (l.currentTime = Number(W).toFixed(1)));
                        }
                        l.config.thumbnail &&
                          l.config.thumbnail.isShowCoverPreview &&
                          (t.style.display = "none"),
                          l.emit("focus"),
                          (l.isProgressMoving = !1);
                      };
                    return (
                      window.addEventListener("touchmove", V, { passive: !1 }),
                      window.addEventListener("touchend", ee),
                      window.addEventListener("mousemove", V),
                      window.addEventListener("mouseup", ee),
                      !0
                    );
                  }
                });
              }),
              u.addEventListener(
                "mouseenter",
                function (_) {
                  if (!l.config.allowSeekAfterEnded && l.ended) return !0;
                  var D = p(l),
                    B = D
                      ? u.getBoundingClientRect().top
                      : u.getBoundingClientRect().left,
                    j = D
                      ? u.getBoundingClientRect().height
                      : u.getBoundingClientRect().width,
                    z = function (H) {
                      var Y =
                        (((D ? H.clientY : H.clientX) - B) / j) * l.duration;
                      (Y = Y < 0 ? 0 : Y), (T.textContent = (0, e.format)(Y));
                      var W = T.getBoundingClientRect().width;
                      if (
                        l.config.thumbnail &&
                        !l.config.thumbnail.isShowCoverPreview
                      ) {
                        a = l.duration / A;
                        var q = Math.floor(Y / a);
                        O.style.backgroundImage =
                          "url(" + i[Math.ceil((q + 1) / (U * C)) - 1] + ")";
                        var J =
                            q + 1 - U * C * (Math.ceil((q + 1) / (U * C)) - 1),
                          Z = Math.ceil(J / C) - 1,
                          te = J - Z * C - 1;
                        O.style["background-position"] =
                          "-" + te * M + "px -" + Z * N + "px";
                        var G = (D ? H.clientY : H.clientX) - B - M / 2;
                        (G = G > 0 ? G : 0),
                          (G = G < j - M ? G : j - M),
                          (O.style.left = G + "px"),
                          (O.style.top = -10 - N + "px"),
                          (O.style.display = "block"),
                          (T.style.left = G + M / 2 - W / 2 + "px");
                      } else {
                        var K = H.clientX - B - W / 2;
                        (K = K > 0 ? K : 0),
                          (K = K > j - W ? j - W : K),
                          (T.style.left = K + "px");
                      }
                      (0, e.hasClass)(u, "xgplayer-progress-dot-active")
                        ? (T.style.display = "none")
                        : (T.style.display = "block");
                    },
                    V = function (H) {
                      z(H);
                    },
                    ee = function $(H) {
                      u.removeEventListener("mousemove", V, !1),
                        u.removeEventListener("mouseleave", $, !1),
                        z(H),
                        (T.style.display = "none"),
                        l.config.thumbnail &&
                          !l.config.thumbnail.isShowCoverPreview &&
                          (O.style.display = "none");
                    };
                  u.addEventListener("mousemove", V, !1),
                    u.addEventListener("mouseleave", ee, !1),
                    z(_);
                },
                !1
              );
            var P = function () {
              if (
                (l.maxPlayedTime === void 0 && (l.maxPlayedTime = 0),
                l.maxPlayedTime < l.currentTime &&
                  (l.maxPlayedTime = l.currentTime),
                !g && u && (g = u.getBoundingClientRect().width),
                !l.isProgressMoving && !l.isSeeking && !l.seeking)
              ) {
                var D = l.currentTime / l.duration,
                  B =
                    Number(b.style.width.replace("%", "") || "0") /
                    Number(u.style.width || "100");
                Math.abs(D - B) <= 1 &&
                  (b.style.width = (l.currentTime * 100) / l.duration + "%");
              }
            };
            l.on("timeupdate", P);
            var f = function (D) {
              b.style.width = (D * 100) / l.duration + "%";
            };
            l.on("currentTimeChange", f);
            var w = function () {
              b.style.width = "0%";
            };
            l.on("srcChange", w);
            var S = function () {
                var D = l.buffered;
                if (D && D.length > 0) {
                  for (
                    var B = D.end(D.length - 1), j = 0, z = D.length;
                    j < z;
                    j++
                  )
                    if (
                      l.currentTime >= D.start(j) &&
                      l.currentTime <= D.end(j)
                    ) {
                      B = D.end(j);
                      for (var V = j + 1; V < D.length; V++)
                        if (D.start(V) - D.end(V - 1) >= 2) {
                          B = D.end(V - 1);
                          break;
                        }
                      break;
                    }
                  x.style.width = (B / l.duration) * 100 + "%";
                }
              },
              I = ["bufferedChange", "cacheupdate", "ended", "timeupdate"];
            I.forEach(function (_) {
              l.on(_, S);
            });
            function F() {
              l.removeAllProgressDot(),
                l.off("canplay", R),
                l.off("timeupdate", P),
                l.off("currentTimeChange", f),
                l.off("srcChange", w),
                l.off("loadedmetadata", E),
                I.forEach(function (_) {
                  l.off(_, S);
                }),
                l.off("destroy", F);
            }
            l.once("destroy", F);
          };
        (s.default = { name: "s_progress", method: m }),
          (d.exports = s.default);
      },
      function (d, s, r) {
        var e = r(70);
        typeof e == "string" && (e = [[d.i, e, ""]]);
        var o,
          y = { hmr: !0 };
        (y.transform = o),
          (y.insertInto = void 0),
          r(2)(e, y),
          e.locals && (d.exports = e.locals);
      },
      function (d, s, r) {
        (s = d.exports = r(1)(!1)),
          s.push([
            d.i,
            ".xgplayer-skin-default .xgplayer-progress{display:block;position:absolute;height:20px;line-height:20px;left:12px;right:12px;outline:none;top:-15px;z-index:35}.xgplayer-skin-default .xgplayer-progress-outer{background:hsla(0,0%,100%,.3);display:block;height:3px;line-height:3px;margin-top:8.5px;width:100%;position:relative;cursor:pointer}.xgplayer-skin-default .xgplayer-progress-cache,.xgplayer-skin-default .xgplayer-progress-played{display:block;height:100%;line-height:1;position:absolute;left:0;top:0}.xgplayer-skin-default .xgplayer-progress-cache{width:0;background:hsla(0,0%,100%,.5)}.xgplayer-skin-default .xgplayer-progress-played{display:block;width:0;background-image:linear-gradient(-90deg,#fa1f41,#e31106);border-radius:0 1.5px 1.5px 0}.xgplayer-skin-default .xgplayer-progress-btn{display:none;position:absolute;left:0;top:-5px;width:13px;height:13px;border-radius:30px;background:#fff;box-shadow:0 0 2px 0 rgba(0,0,0,.26);left:100%;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%);z-index:36}.xgplayer-skin-default .xgplayer-progress-point{position:absolute}.xgplayer-skin-default .xgplayer-progress-point.xgplayer-tips{margin-left:0;top:-25px;display:none;z-index:100}.xgplayer-skin-default .xgplayer-progress-dot{display:inline-block;position:absolute;height:3px;width:5px;top:0;background:#fff;border-radius:6px;z-index:16}.xgplayer-skin-default .xgplayer-progress-dot .xgplayer-progress-tip{position:absolute;bottom:200%;right:50%;-webkit-transform:translateX(50%);-ms-transform:translateX(50%);transform:translateX(50%);height:auto;line-height:30px;width:auto;background:rgba(0,0,0,.3);border-radius:6px;border:1px solid rgba(0,0,0,.8);cursor:default;white-space:nowrap;display:none}.xgplayer-skin-default .xgplayer-progress-dot-show .xgplayer-progress-tip{display:block}.xgplayer-skin-default .xgplayer-progress-thumbnail{position:absolute;-moz-box-sizing:border-box;box-sizing:border-box}.xgplayer-skin-default .xgplayer-progress-thumbnail.xgplayer-tips{margin-left:0;display:none;z-index:99}.xgplayer-skin-default .xgplayer-coverpreview{position:absolute;width:100%;height:100%;top:0;left:0;display:none}.xgplayer-skin-default .xgplayer-coverpreview .xgplayer-coverpreview-outer{position:absolute;display:block;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.xgplayer-skin-default .xgplayer-coverpreview .xgplayer-coverpreview-outer .xgplayer-coverpreview-thumbnail{display:block}.xgplayer-skin-default .xgplayer-coverpreview .xgplayer-coverpreview-outer .xgplayer-coverpreview-point{display:block;text-align:center;font-family:PingFangSC-Regular;font-size:11px;color:#ccc;padding:2px 4px}.xgplayer-skin-default .xgplayer-coverpreview .xgplayer-coverpreview-outer .xgplayer-coverpreview-point span{color:#fff}.xgplayer-skin-default .xgplayer-progress:focus .xgplayer-progress-outer,.xgplayer-skin-default .xgplayer-progress:hover .xgplayer-progress-outer{height:6px;margin-top:7px}.xgplayer-skin-default .xgplayer-progress:focus .xgplayer-progress-dot,.xgplayer-skin-default .xgplayer-progress:hover .xgplayer-progress-dot{height:6px}.xgplayer-skin-default .xgplayer-progress:focus .xgplayer-progress-btn,.xgplayer-skin-default .xgplayer-progress:hover .xgplayer-progress-btn{display:block;top:-3px}.xgplayer-skin-default.xgplayer-definition-active .xgplayer-progress,.xgplayer-skin-default.xgplayer-playbackrate-active .xgplayer-progress,.xgplayer-skin-default.xgplayer-texttrack-active .xgplayer-progress,.xgplayer-skin-default.xgplayer-volume-active .xgplayer-progress{z-index:15}.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress-btn{display:block!important}.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress:focus .xgplayer-progress-outer,.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress:hover .xgplayer-progress-outer{height:3px!important;margin-top:8.5px!important}.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress:focus .xgplayer-progress-btn,.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress:hover .xgplayer-progress-btn{display:block!important;top:-5px!important}",
            ""
          ]);
      },
      function (d, s, r) {
        Object.defineProperty(s, "__esModule", { value: !0 });
        var e = r(0);
        r(72);
        var o = function () {
          var n = this,
            p = (0, e.createDom)(
              "xg-time",
              '<span class="xgplayer-time-current">' +
                (n.currentTime || (0, e.format)(0)) +
                `</span>
                                           <span>` +
                (n.duration || (0, e.format)(0)) +
                "</span>",
              {},
              "xgplayer-time"
            );
          n.once("ready", function () {
            n.controls && n.controls.appendChild(p);
          });
          var m = function () {
            (n.videoConfig.mediaType !== "audio" ||
              !n.isProgressMoving ||
              !n.dash) &&
              (p.innerHTML =
                '<span class="xgplayer-time-current">' +
                (0, e.format)(n.currentTime || 0) +
                "</span>" +
                ("<span>" + (0, e.format)(n.duration) + "</span>"));
          };
          n.on("durationchange", m), n.on("timeupdate", m);
          function v() {
            n.off("durationchange", m),
              n.off("timeupdate", m),
              n.off("destroy", v);
          }
          n.once("destroy", v);
        };
        (s.default = { name: "s_time", method: o }), (d.exports = s.default);
      },
      function (d, s, r) {
        var e = r(73);
        typeof e == "string" && (e = [[d.i, e, ""]]);
        var o,
          y = { hmr: !0 };
        (y.transform = o),
          (y.insertInto = void 0),
          r(2)(e, y),
          e.locals && (d.exports = e.locals);
      },
      function (d, s, r) {
        (s = d.exports = r(1)(!1)),
          s.push([
            d.i,
            '.xgplayer-skin-default .xgplayer-time{-webkit-order:2;-moz-box-ordinal-group:3;order:2;font-family:ArialMT;font-size:13px;color:#fff;line-height:40px;height:40px;text-align:center;display:inline-block;margin:auto 8px}.xgplayer-skin-default .xgplayer-time span{color:hsla(0,0%,100%,.5)}.xgplayer-skin-default .xgplayer-time .xgplayer-time-current{color:#fff}.xgplayer-skin-default .xgplayer-time .xgplayer-time-current:after{content:"/";display:inline-block;padding:0 3px}',
            ""
          ]);
      },
      function (d, s, r) {
        Object.defineProperty(s, "__esModule", { value: !0 });
        var e = r(0),
          o = r(75),
          y = n(o);
        r(76);
        function n(m) {
          return m && m.__esModule ? m : { default: m };
        }
        var p = function () {
          var v = this,
            l = v.root,
            u = v.lang.REPLAY,
            g = (0, e.createDom)(
              "xg-replay",
              y.default +
                `
                                         <xg-replay-txt class="xgplayer-replay-txt">` +
                u +
                `</xg-replay-txt>
                                        `,
              {},
              "xgplayer-replay"
            );
          v.once("ready", function () {
            l.appendChild(g);
          });
          function b() {
            var O = g.querySelector("path");
            if (O) {
              var L = window.getComputedStyle(O).getPropertyValue("transform");
              if (typeof L == "string" && L.indexOf("none") > -1) return;
              O.setAttribute("transform", L);
            }
          }
          v.on("ended", b);
          function h(O) {
            O.preventDefault(), O.stopPropagation();
          }
          g.addEventListener("click", h);
          var x = g.querySelector("svg");
          ["click", "touchend"].forEach(function (O) {
            x.addEventListener(O, function (L) {
              L.preventDefault(),
                L.stopPropagation(),
                v.userGestureTrigEvent("replayBtnClick");
            });
          });
          function T() {
            v.off("ended", b), v.off("destroy", T);
          }
          v.once("destroy", T);
        };
        (s.default = { name: "s_replay", method: p }), (d.exports = s.default);
      },
      function (d, s, r) {
        r.r(s),
          (s.default = `<svg class="xgplayer-replay-svg" xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewbox="0 0 78 78">
  <path d="M8.22708362,13.8757234 L11.2677371,12.6472196 C11.7798067,12.4403301 12.3626381,12.6877273 12.5695276,13.1997969 L12.9441342,14.1269807 C13.1510237,14.6390502 12.9036264,15.2218816 12.3915569,15.4287712 L6.8284538,17.6764107 L5.90126995,18.0510173 C5.38920044,18.2579068 4.80636901,18.0105096 4.5994795,17.49844 L1.97723335,11.0081531 C1.77034384,10.4960836 2.0177411,9.91325213 2.52981061,9.70636262 L3.45699446,9.33175602 C3.96906396,9.12486652 4.5518954,9.37226378 4.75878491,9.88433329 L5.67885163,12.1615783 C7.99551726,6.6766934 13.3983951,3 19.5,3 C27.7842712,3 34.5,9.71572875 34.5,18 C34.5,26.2842712 27.7842712,33 19.5,33 C15.4573596,33 11.6658607,31.3912946 8.87004692,28.5831991 C8.28554571,27.9961303 8.28762719,27.0463851 8.87469603,26.4618839 C9.46176488,25.8773827 10.4115101,25.8794641 10.9960113,26.466533 C13.2344327,28.7147875 16.263503,30 19.5,30 C26.127417,30 31.5,24.627417 31.5,18 C31.5,11.372583 26.127417,6 19.5,6 C14.4183772,6 9.94214483,9.18783811 8.22708362,13.8757234 Z"></path>
</svg>
`);
      },
      function (d, s, r) {
        var e = r(77);
        typeof e == "string" && (e = [[d.i, e, ""]]);
        var o,
          y = { hmr: !0 };
        (y.transform = o),
          (y.insertInto = void 0),
          r(2)(e, y),
          e.locals && (d.exports = e.locals);
      },
      function (d, s, r) {
        (s = d.exports = r(1)(!1)),
          s.push([
            d.i,
            ".xgplayer-skin-default .xgplayer-replay{position:absolute;left:0;top:0;width:100%;height:100%;z-index:105;display:none;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;background:rgba(0,0,0,.54);-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column}.xgplayer-skin-default .xgplayer-replay svg{background:rgba(0,0,0,.58);border-radius:100%;cursor:pointer}.xgplayer-skin-default .xgplayer-replay svg path{-webkit-transform:translate(20px,21px);-ms-transform:translate(20px,21px);transform:translate(20px,21px);fill:#ddd}.xgplayer-skin-default .xgplayer-replay svg:hover{background:rgba(0,0,0,.38)}.xgplayer-skin-default .xgplayer-replay svg:hover path{fill:#fff}.xgplayer-skin-default .xgplayer-replay .xgplayer-replay-txt{display:inline-block;font-family:PingFangSC-Regular;font-size:14px;color:#fff;line-height:34px}.xgplayer-skin-default.xgplayer.xgplayer-ended .xgplayer-controls{display:none}.xgplayer-skin-default.xgplayer.xgplayer-ended .xgplayer-replay{display:-webkit-flex;display:-moz-box;display:flex}",
            ""
          ]);
      },
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      function (d, s, r) {
        d.exports = r(174);
      },
      function (d, s, r) {
        Object.defineProperty(s, "__esModule", { value: !0 });
        var e = r(9),
          o = I(e),
          y = r(56),
          n = I(y),
          p = r(45),
          m = I(p),
          v = r(59),
          l = I(v),
          u = r(64),
          g = I(u),
          b = r(37),
          h = I(b),
          x = r(38),
          T = I(x),
          O = r(46),
          L = I(O),
          R = r(48),
          A = I(R),
          M = r(68),
          N = I(M),
          U = r(53),
          C = I(U),
          a = r(71),
          i = I(a),
          t = r(39),
          c = I(t),
          E = r(40),
          k = I(E),
          P = r(47),
          f = I(P),
          w = r(74),
          S = I(w);
        function I(_) {
          return _ && _.__esModule ? _ : { default: _ };
        }
        var F = [
          n.default,
          m.default,
          l.default,
          g.default,
          h.default,
          T.default,
          L.default,
          A.default,
          N.default,
          C.default,
          i.default,
          c.default,
          k.default,
          f.default,
          S.default
        ];
        F.forEach(function (_) {
          o.default.install(_.name, _.method);
        }),
          (s.default = o.default),
          (d.exports = s.default);
      }
    ]);
  });
})(se);
const we = re(se.exports);
var ue = { exports: {} };
(function (X, Q) {
  (function (d, s) {
    X.exports = s();
  })(window, function () {
    return (function (d) {
      var s = {};
      function r(e) {
        if (s[e]) return s[e].exports;
        var o = (s[e] = { i: e, l: !1, exports: {} });
        return d[e].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
      }
      return (
        (r.m = d),
        (r.c = s),
        (r.d = function (e, o, y) {
          r.o(e, o) || Object.defineProperty(e, o, { enumerable: !0, get: y });
        }),
        (r.r = function (e) {
          typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (r.t = function (e, o) {
          if (
            (1 & o && (e = r(e)),
            8 & o || (4 & o && typeof e == "object" && e && e.__esModule))
          )
            return e;
          var y = Object.create(null);
          if (
            (r.r(y),
            Object.defineProperty(y, "default", { enumerable: !0, value: e }),
            2 & o && typeof e != "string")
          )
            for (var n in e)
              r.d(
                y,
                n,
                function (p) {
                  return e[p];
                }.bind(null, n)
              );
          return y;
        }),
        (r.n = function (e) {
          var o =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return r.d(o, "a", o), o;
        }),
        (r.o = function (e, o) {
          return Object.prototype.hasOwnProperty.call(e, o);
        }),
        (r.p = ""),
        r((r.s = 5))
      );
    })([
      function (d, s, r) {
        var e = r(1);
        typeof e == "string" && (e = [[d.i, e, ""]]);
        var o = { hmr: !0, transform: void 0, insertInto: void 0 };
        r(3)(e, o), e.locals && (d.exports = e.locals);
      },
      function (d, s, r) {
        (d.exports = r(2)(!1)).push([
          d.i,
          '.xgplayer-skin-default .xgplayer-volume{outline:none;-webkit-order:4;-moz-box-ordinal-group:5;order:4;width:40px;height:40px;display:block;position:relative;z-index:18}.xgplayer-skin-default .xgplayer-volume .xgplayer-icon{margin-top:8px;cursor:pointer;position:absolute;bottom:-9px}.xgplayer-skin-default .xgplayer-volume .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-volume .xgplayer-icon .xgplayer-icon-large{display:block}.xgplayer-skin-default .xgplayer-volume .xgplayer-icon .xgplayer-icon-muted,.xgplayer-skin-default .xgplayer-volume .xgplayer-icon .xgplayer-icon-small{display:none}.xgplayer-skin-default .xgplayer-slider{display:none;position:absolute;width:28px;height:92px;background:rgba(0,0,0,.54);border-radius:1px;bottom:42px;outline:none}.xgplayer-skin-default .xgplayer-slider:after{content:" ";display:block;height:15px;width:28px;position:absolute;bottom:-15px;left:0;z-index:20}.xgplayer-skin-default .xgplayer-bar,.xgplayer-skin-default .xgplayer-drag{display:block;position:absolute;bottom:6px;left:12px;background:hsla(0,0%,100%,.3);border-radius:100px;width:4px;height:76px;outline:none;cursor:pointer}.xgplayer-skin-default .xgplayer-drag{bottom:0;left:0;background:#fa1f41;max-height:76px}.xgplayer-skin-default .xgplayer-drag:after{content:" ";display:inline-block;width:8px;height:8px;background:#fff;box-shadow:0 0 5px 0 rgba(0,0,0,.26);position:absolute;border-radius:50%;left:-2px;top:-6px}.xgplayer-skin-default.xgplayer-volume-active .xgplayer-slider,.xgplayer-skin-default.xgplayer-volume-large .xgplayer-volume .xgplayer-icon .xgplayer-icon-large{display:block}.xgplayer-skin-default.xgplayer-volume-large .xgplayer-volume .xgplayer-icon .xgplayer-icon-muted,.xgplayer-skin-default.xgplayer-volume-large .xgplayer-volume .xgplayer-icon .xgplayer-icon-small,.xgplayer-skin-default.xgplayer-volume-small .xgplayer-volume .xgplayer-icon .xgplayer-icon-large{display:none}.xgplayer-skin-default.xgplayer-volume-small .xgplayer-volume .xgplayer-icon .xgplayer-icon-small{display:block}.xgplayer-skin-default.xgplayer-volume-muted .xgplayer-volume .xgplayer-icon .xgplayer-icon-large,.xgplayer-skin-default.xgplayer-volume-muted .xgplayer-volume .xgplayer-icon .xgplayer-icon-small,.xgplayer-skin-default.xgplayer-volume-small .xgplayer-volume .xgplayer-icon .xgplayer-icon-muted{display:none}.xgplayer-skin-default.xgplayer-volume-muted .xgplayer-volume .xgplayer-icon .xgplayer-icon-muted{display:block}.xgplayer-skin-default.xgplayer-mobile .xgplayer-volume .xgplayer-slider{display:none}',
          ""
        ]);
      },
      function (d, s) {
        d.exports = function (r) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (o) {
                var y = (function (n, p) {
                  var m = n[1] || "",
                    v = n[3];
                  if (!v) return m;
                  if (p && typeof btoa == "function") {
                    var l =
                        ((g = v),
                        "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                          btoa(
                            unescape(encodeURIComponent(JSON.stringify(g)))
                          ) +
                          " */"),
                      u = v.sources.map(function (b) {
                        return "/*# sourceURL=" + v.sourceRoot + b + " */";
                      });
                    return [m].concat(u).concat([l]).join(`
`);
                  }
                  var g;
                  return [m].join(`
`);
                })(o, r);
                return o[2] ? "@media " + o[2] + "{" + y + "}" : y;
              }).join("");
            }),
            (e.i = function (o, y) {
              typeof o == "string" && (o = [[null, o, ""]]);
              for (var n = {}, p = 0; p < this.length; p++) {
                var m = this[p][0];
                typeof m == "number" && (n[m] = !0);
              }
              for (p = 0; p < o.length; p++) {
                var v = o[p];
                (typeof v[0] == "number" && n[v[0]]) ||
                  (y && !v[2]
                    ? (v[2] = y)
                    : y && (v[2] = "(" + v[2] + ") and (" + y + ")"),
                  e.push(v));
              }
            }),
            e
          );
        };
      },
      function (d, s, r) {
        var e,
          o,
          y = {},
          n =
            ((e = function () {
              return window && document && document.all && !window.atob;
            }),
            function () {
              return o === void 0 && (o = e.apply(this, arguments)), o;
            }),
          p = function (a) {
            return document.querySelector(a);
          },
          m = (function (a) {
            var i = {};
            return function (t) {
              if (typeof t == "function") return t();
              if (i[t] === void 0) {
                var c = p.call(this, t);
                if (
                  window.HTMLIFrameElement &&
                  c instanceof window.HTMLIFrameElement
                )
                  try {
                    c = c.contentDocument.head;
                  } catch {
                    c = null;
                  }
                i[t] = c;
              }
              return i[t];
            };
          })(),
          v = null,
          l = 0,
          u = [],
          g = r(4);
        function b(a, i) {
          for (var t = 0; t < a.length; t++) {
            var c = a[t],
              E = y[c.id];
            if (E) {
              E.refs++;
              for (var k = 0; k < E.parts.length; k++) E.parts[k](c.parts[k]);
              for (; k < c.parts.length; k++) E.parts.push(R(c.parts[k], i));
            } else {
              var P = [];
              for (k = 0; k < c.parts.length; k++) P.push(R(c.parts[k], i));
              y[c.id] = { id: c.id, refs: 1, parts: P };
            }
          }
        }
        function h(a, i) {
          for (var t = [], c = {}, E = 0; E < a.length; E++) {
            var k = a[E],
              P = i.base ? k[0] + i.base : k[0],
              f = { css: k[1], media: k[2], sourceMap: k[3] };
            c[P] ? c[P].parts.push(f) : t.push((c[P] = { id: P, parts: [f] }));
          }
          return t;
        }
        function x(a, i) {
          var t = m(a.insertInto);
          if (!t)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
            );
          var c = u[u.length - 1];
          if (a.insertAt === "top")
            c
              ? c.nextSibling
                ? t.insertBefore(i, c.nextSibling)
                : t.appendChild(i)
              : t.insertBefore(i, t.firstChild),
              u.push(i);
          else if (a.insertAt === "bottom") t.appendChild(i);
          else {
            if (typeof a.insertAt != "object" || !a.insertAt.before)
              throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);
            var E = m(a.insertInto + " " + a.insertAt.before);
            t.insertBefore(i, E);
          }
        }
        function T(a) {
          if (a.parentNode === null) return !1;
          a.parentNode.removeChild(a);
          var i = u.indexOf(a);
          i >= 0 && u.splice(i, 1);
        }
        function O(a) {
          var i = document.createElement("style");
          return (a.attrs.type = "text/css"), L(i, a.attrs), x(a, i), i;
        }
        function L(a, i) {
          Object.keys(i).forEach(function (t) {
            a.setAttribute(t, i[t]);
          });
        }
        function R(a, i) {
          var t, c, E, k;
          if (i.transform && a.css) {
            if (!(k = i.transform(a.css))) return function () {};
            a.css = k;
          }
          if (i.singleton) {
            var P = l++;
            (t = v || (v = O(i))),
              (c = N.bind(null, t, P, !1)),
              (E = N.bind(null, t, P, !0));
          } else
            a.sourceMap &&
            typeof URL == "function" &&
            typeof URL.createObjectURL == "function" &&
            typeof URL.revokeObjectURL == "function" &&
            typeof Blob == "function" &&
            typeof btoa == "function"
              ? ((t = (function (f) {
                  var w = document.createElement("link");
                  return (
                    (f.attrs.type = "text/css"),
                    (f.attrs.rel = "stylesheet"),
                    L(w, f.attrs),
                    x(f, w),
                    w
                  );
                })(i)),
                (c = C.bind(null, t, i)),
                (E = function () {
                  T(t), t.href && URL.revokeObjectURL(t.href);
                }))
              : ((t = O(i)),
                (c = U.bind(null, t)),
                (E = function () {
                  T(t);
                }));
          return (
            c(a),
            function (f) {
              if (f) {
                if (
                  f.css === a.css &&
                  f.media === a.media &&
                  f.sourceMap === a.sourceMap
                )
                  return;
                c((a = f));
              } else E();
            }
          );
        }
        d.exports = function (a, i) {
          if (typeof DEBUG < "u" && DEBUG && typeof document != "object")
            throw new Error(
              "The style-loader cannot be used in a non-browser environment"
            );
          ((i = i || {}).attrs = typeof i.attrs == "object" ? i.attrs : {}),
            i.singleton ||
              typeof i.singleton == "boolean" ||
              (i.singleton = n()),
            i.insertInto || (i.insertInto = "head"),
            i.insertAt || (i.insertAt = "bottom");
          var t = h(a, i);
          return (
            b(t, i),
            function (c) {
              for (var E = [], k = 0; k < t.length; k++) {
                var P = t[k];
                (f = y[P.id]).refs--, E.push(f);
              }
              for (c && b(h(c, i), i), k = 0; k < E.length; k++) {
                var f;
                if ((f = E[k]).refs === 0) {
                  for (var w = 0; w < f.parts.length; w++) f.parts[w]();
                  delete y[f.id];
                }
              }
            }
          );
        };
        var A,
          M =
            ((A = []),
            function (a, i) {
              return (
                (A[a] = i),
                A.filter(Boolean).join(`
`)
              );
            });
        function N(a, i, t, c) {
          var E = t ? "" : c.css;
          if (a.styleSheet) a.styleSheet.cssText = M(i, E);
          else {
            var k = document.createTextNode(E),
              P = a.childNodes;
            P[i] && a.removeChild(P[i]),
              P.length ? a.insertBefore(k, P[i]) : a.appendChild(k);
          }
        }
        function U(a, i) {
          var t = i.css,
            c = i.media;
          if ((c && a.setAttribute("media", c), a.styleSheet))
            a.styleSheet.cssText = t;
          else {
            for (; a.firstChild; ) a.removeChild(a.firstChild);
            a.appendChild(document.createTextNode(t));
          }
        }
        function C(a, i, t) {
          var c = t.css,
            E = t.sourceMap,
            k = i.convertToAbsoluteUrls === void 0 && E;
          (i.convertToAbsoluteUrls || k) && (c = g(c)),
            E &&
              (c +=
                `
/*# sourceMappingURL=data:application/json;base64,` +
                btoa(unescape(encodeURIComponent(JSON.stringify(E)))) +
                " */");
          var P = new Blob([c], { type: "text/css" }),
            f = a.href;
          (a.href = URL.createObjectURL(P)), f && URL.revokeObjectURL(f);
        }
      },
      function (d, s) {
        d.exports = function (r) {
          var e = typeof window < "u" && window.location;
          if (!e) throw new Error("fixUrls requires window.location");
          if (!r || typeof r != "string") return r;
          var o = e.protocol + "//" + e.host,
            y = o + e.pathname.replace(/\/[^\/]*$/, "/");
          return r.replace(
            /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
            function (n, p) {
              var m,
                v = p
                  .trim()
                  .replace(/^"(.*)"$/, function (l, u) {
                    return u;
                  })
                  .replace(/^'(.*)'$/, function (l, u) {
                    return u;
                  });
              return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(v)
                ? n
                : ((m =
                    v.indexOf("//") === 0
                      ? v
                      : v.indexOf("/") === 0
                      ? o + v
                      : y + v.replace(/^\.\//, "")),
                  "url(" + JSON.stringify(m) + ")");
            }
          );
        };
      },
      function (d, s, r) {
        r.r(s);
        function e(g = "div", b = "", h = {}, x = "") {
          let T = document.createElement(g);
          return (
            (T.className = x),
            (T.innerHTML = b),
            Object.keys(h).forEach(O => {
              let L = O,
                R = h[O];
              g === "video" || g === "audio"
                ? R && T.setAttribute(L, R)
                : T.setAttribute(L, R);
            }),
            T
          );
        }
        function o(g, b) {
          return (
            !!g &&
            (g.classList
              ? Array.prototype.some.call(g.classList, h => h === b)
              : !!g.className &&
                !!g.className.match(new RegExp("(\\s|^)" + b + "(\\s|$)")))
          );
        }
        function y(g, b) {
          g &&
            (g.classList
              ? b
                  .replace(/(^\s+|\s+$)/g, "")
                  .split(/\s+/g)
                  .forEach(h => {
                    h && g.classList.add(h);
                  })
              : o(g, b) || (g.className += " " + b));
        }
        function n(g, b) {
          g &&
            (g.classList
              ? b.split(/\s+/g).forEach(h => {
                  g.classList.remove(h);
                })
              : o(g, b) &&
                b.split(/\s+/g).forEach(h => {
                  let x = new RegExp("(\\s|^)" + h + "(\\s|$)");
                  g.className = g.className.replace(x, " ");
                }));
        }
        function p(g) {
          if (g.touches) {
            let b = g.touches[0] || g.changedTouches[0];
            (g.clientX = b.clientX || 0),
              (g.clientY = b.clientY || 0),
              (g.offsetX = b.pageX - b.target.offsetLeft),
              (g.offsetY = b.pageY - b.target.offsetTop);
          }
          g._target = g.target || g.srcElement;
        }
        let m = {};
        Object.defineProperty(m, "device", {
          get: function () {
            return m.os.isPc ? "pc" : "mobile";
          }
        }),
          Object.defineProperty(m, "browser", {
            get: function () {
              let g = navigator.userAgent.toLowerCase(),
                b = {
                  ie: /rv:([\d.]+)\) like gecko/,
                  firfox: /firefox\/([\d.]+)/,
                  chrome: /chrome\/([\d.]+)/,
                  opera: /opera.([\d.]+)/,
                  safari: /version\/([\d.]+).*safari/
                };
              return (
                [].concat(Object.keys(b).filter(h => b[h].test(g)))[0] || ""
              );
            }
          }),
          Object.defineProperty(m, "os", {
            get: function () {
              let g = navigator.userAgent,
                b = /(?:Windows Phone)/.test(g),
                h = /(?:SymbianOS)/.test(g) || b,
                x = /(?:Android)/.test(g),
                T = /(?:Firefox)/.test(g),
                O =
                  /(?:iPad|PlayBook)/.test(g) ||
                  (x && !/(?:Mobile)/.test(g)) ||
                  (T && /(?:Tablet)/.test(g)),
                L = /(?:iPhone)/.test(g) && !O;
              return {
                isTablet: O,
                isPhone: L,
                isAndroid: x,
                isPc: !(L || x || h || O),
                isSymbian: h,
                isWindowsPhone: b,
                isFireFox: T
              };
            }
          });
        var v = m,
          l = {
            name: "volume",
            method: function () {
              let g,
                b,
                h,
                x,
                T = this,
                O = T.root;
              function L() {
                T.controls &&
                  ((T.volume = T.config.volume),
                  (g = T.controls.querySelector(".xgplayer-volume")),
                  g &&
                    ((b = g.querySelector(".xgplayer-slider")),
                    (h = g.querySelector(".xgplayer-bar")),
                    (x = g.querySelector(".xgplayer-drag")),
                    v.device === "mobile" &&
                      (T.volume === 0 && (T.video.muted = !0), C())));
              }
              function R(a) {
                if (!b) return;
                (T.video.muted = !1), b.focus(), p(a);
                let i = h.getBoundingClientRect(),
                  t = (a.clientX, a.clientY),
                  c = x.getBoundingClientRect().height,
                  E = !1,
                  k = function (f) {
                    f.preventDefault(), f.stopPropagation(), p(f), (E = !0);
                    let w = c - f.clientY + t,
                      S = w / i.height;
                    (x.style.height = w + "px"),
                      (T.volume = Math.max(Math.min(S, 1), 0));
                  },
                  P = function (f) {
                    if (
                      (f.preventDefault(),
                      f.stopPropagation(),
                      p(f),
                      window.removeEventListener("mousemove", k),
                      window.removeEventListener("touchmove", k),
                      window.removeEventListener("mouseup", P),
                      window.removeEventListener("touchend", P),
                      !E)
                    ) {
                      let w = i.height - (f.clientY - i.top),
                        S = w / i.height;
                      (x.style.height = w + "px"),
                        S <= 0 &&
                          (T.volume > 0
                            ? (x.volume = T.video.volume)
                            : (S = x.volume)),
                        (T.volume = Math.max(Math.min(S, 1), 0));
                    }
                    (b.volume = T.volume), (E = !1);
                  };
                return (
                  window.addEventListener("mousemove", k),
                  window.addEventListener("touchmove", k),
                  window.addEventListener("mouseup", P),
                  window.addEventListener("touchend", P),
                  !1
                );
              }
              function A() {
                if (v.device === "mobile")
                  T.video.muted
                    ? ((T.video.muted = !1), T.emit("unmute"), (T.volume = 1))
                    : ((T.video.muted = !0), T.emit("mute"), (T.volume = 0));
                else {
                  if (!b) return;
                  (T.video.muted = !1),
                    T.volume < 0.1
                      ? (b.volume < 0.1
                          ? (T.volume = 0.6)
                          : (T.volume = b.volume),
                        T.emit("unmute"))
                      : ((T.volume = 0), T.emit("mute"));
                }
              }
              function M() {
                y(O, "xgplayer-volume-active"), g && g.focus();
              }
              function N() {
                n(O, "xgplayer-volume-active");
              }
              T.once("canplay", L),
                T.on("volumeBarClick", R),
                T.on("volumeIconClick", A),
                T.on("volumeIconEnter", M),
                T.on("volumeIconLeave", N);
              let U = null;
              function C() {
                U && clearTimeout(U),
                  (U = setTimeout(() => {
                    if (v.device === "mobile")
                      n(O, "xgplayer-volume-muted"),
                        n(O, "xgplayer-volume-large"),
                        T.video.muted || T.video.defaultMuted
                          ? (T.video.muted || (T.video.muted = !0),
                            (T.video.defaultMuted = !1),
                            y(O, "xgplayer-volume-muted"))
                          : y(O, "xgplayer-volume-large");
                    else {
                      if (
                        (n(O, "xgplayer-volume-muted"),
                        n(O, "xgplayer-volume-small"),
                        n(O, "xgplayer-volume-large"),
                        T.volume === 0 || T.muted
                          ? y(O, "xgplayer-volume-muted")
                          : T.volume < 0.5
                          ? y(O, "xgplayer-volume-small")
                          : y(O, "xgplayer-volume-large"),
                        !h)
                      )
                        return;
                      let a = h.getBoundingClientRect().height || 76;
                      x.style.height = T.volume * a + "px";
                    }
                  }, 50));
              }
              T.on("volumechange", C),
                T.once("destroy", function a() {
                  T.off("canplay", L),
                    T.off("volumeBarClick", R),
                    T.off("volumeIconClick", A),
                    T.off("volumeIconEnter", M),
                    T.off("volumeIconLeave", N),
                    T.off("volumechange", C),
                    T.off("destroy", a),
                    U && (clearTimeout(U), (U = null));
                });
            }
          };
        r(0);
        var u = {
          name: "s_volume",
          method: function () {
            let g = this,
              b = e(
                "xg-volume",
                `<xg-icon class="xgplayer-icon">
                                         <div class="xgplayer-icon-large"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
  <path transform="scale(0.0220625 0.0220625)" d="M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z"></path>
  <path transform="scale(0.0220625 0.0220625)" d="M940.632 837.632l-72.192-72.192c65.114-64.745 105.412-154.386 105.412-253.44s-40.299-188.695-105.396-253.424l-0.016-0.016 72.192-72.192c83.639 83.197 135.401 198.37 135.401 325.632s-51.762 242.434-135.381 325.612l-0.020 0.020zM795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021z"></path>
</svg>
</div>
                                         <div class="xgplayer-icon-small"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
  <path transform="scale(0.0220625 0.0220625)" d="M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z"></path>
  <path transform="scale(0.0220625 0.0220625)" d="M795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021zM795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021z"></path>
</svg>
</div>
                                         <div class="xgplayer-icon-muted"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
  <path transform="scale(0.0220625 0.0220625)" d="M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z"></path>
  <path transform="scale(0.0220625 0.0220625)" d="M920.4 439.808l-108.544-109.056-72.704 72.704 109.568 108.544-109.056 108.544 72.704 72.704 108.032-109.568 108.544 109.056 72.704-72.704-109.568-108.032 109.056-108.544-72.704-72.704-108.032 109.568z"></path>
</svg>
</div>
                                       </xg-icon>
                                       <xg-slider class="xgplayer-slider" tabindex="2">
                                         <xg-bar class="xgplayer-bar">
                                           <xg-drag class="xgplayer-drag"></xg-drag>
                                         </xg-bar>
                                       </xg-slider>`,
                {},
                "xgplayer-volume"
              );
            g.once("ready", () => {
              g.controls && g.controls.appendChild(b);
            });
            let h = b.querySelector(".xgplayer-slider"),
              x = b.querySelector(".xgplayer-bar"),
              T = b.querySelector(".xgplayer-drag"),
              O = b.querySelector(".xgplayer-icon");
            (T.style.height = 100 * g.config.volume + "%"),
              (h.volume = g.config.volume),
              x.addEventListener("mousedown", L => {
                L.preventDefault(),
                  L.stopPropagation(),
                  g.userGestureTrigEvent("volumeBarClick", L);
              }),
              ["click", "touchend"].forEach(L => {
                O.addEventListener(L, R => {
                  R.preventDefault(),
                    R.stopPropagation(),
                    g.userGestureTrigEvent("volumeIconClick");
                });
              }),
              O.addEventListener("mouseenter", L => {
                L.preventDefault(),
                  L.stopPropagation(),
                  g.userGestureTrigEvent("volumeIconEnter");
              }),
              ["blur", "mouseleave"].forEach(L => {
                b.addEventListener(L, R => {
                  R.preventDefault(),
                    R.stopPropagation(),
                    g.userGestureTrigEvent("volumeIconLeave");
                });
              });
          }
        };
        s.default = {
          name: "volume",
          method: function () {
            l.method.call(this), u.method.call(this);
          }
        };
      }
    ]);
  });
})(ue);
const Te = re(ue.exports);
var fe = { exports: {} };
(function (X, Q) {
  (function (d, s) {
    X.exports = s();
  })(window, function () {
    return (function (d) {
      var s = {};
      function r(e) {
        if (s[e]) return s[e].exports;
        var o = (s[e] = { i: e, l: !1, exports: {} });
        return d[e].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
      }
      return (
        (r.m = d),
        (r.c = s),
        (r.d = function (e, o, y) {
          r.o(e, o) || Object.defineProperty(e, o, { enumerable: !0, get: y });
        }),
        (r.r = function (e) {
          typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (r.t = function (e, o) {
          if (
            (1 & o && (e = r(e)),
            8 & o || (4 & o && typeof e == "object" && e && e.__esModule))
          )
            return e;
          var y = Object.create(null);
          if (
            (r.r(y),
            Object.defineProperty(y, "default", { enumerable: !0, value: e }),
            2 & o && typeof e != "string")
          )
            for (var n in e)
              r.d(
                y,
                n,
                function (p) {
                  return e[p];
                }.bind(null, n)
              );
          return y;
        }),
        (r.n = function (e) {
          var o =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return r.d(o, "a", o), o;
        }),
        (r.o = function (e, o) {
          return Object.prototype.hasOwnProperty.call(e, o);
        }),
        (r.p = ""),
        r((r.s = 5))
      );
    })([
      function (d, s, r) {
        var e = r(1);
        typeof e == "string" && (e = [[d.i, e, ""]]);
        var o = { hmr: !0, transform: void 0, insertInto: void 0 };
        r(3)(e, o), e.locals && (d.exports = e.locals);
      },
      function (d, s, r) {
        (d.exports = r(2)(!1)).push([
          d.i,
          ".xgplayer-skin-default .xgplayer-screenshot{-webkit-order:11;-moz-box-ordinal-group:12;order:11;position:relative;outline:none;display:block;cursor:pointer;height:20px;top:10px}.xgplayer-skin-default .xgplayer-screenshot .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;line-height:20px;height:20px;color:hsla(0,0%,100%,.8)}.xgplayer-skin-default .xgplayer-screenshot .name span{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:0 10px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-lang-is-en .xgplayer-screenshot .name span,.xgplayer-lang-is-jp .xgplayer-screenshot .name span{width:75px;height:20px}",
          ""
        ]);
      },
      function (d, s) {
        d.exports = function (r) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (o) {
                var y = (function (n, p) {
                  var m = n[1] || "",
                    v = n[3];
                  if (!v) return m;
                  if (p && typeof btoa == "function") {
                    var l =
                        ((g = v),
                        "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                          btoa(
                            unescape(encodeURIComponent(JSON.stringify(g)))
                          ) +
                          " */"),
                      u = v.sources.map(function (b) {
                        return "/*# sourceURL=" + v.sourceRoot + b + " */";
                      });
                    return [m].concat(u).concat([l]).join(`
`);
                  }
                  var g;
                  return [m].join(`
`);
                })(o, r);
                return o[2] ? "@media " + o[2] + "{" + y + "}" : y;
              }).join("");
            }),
            (e.i = function (o, y) {
              typeof o == "string" && (o = [[null, o, ""]]);
              for (var n = {}, p = 0; p < this.length; p++) {
                var m = this[p][0];
                typeof m == "number" && (n[m] = !0);
              }
              for (p = 0; p < o.length; p++) {
                var v = o[p];
                (typeof v[0] == "number" && n[v[0]]) ||
                  (y && !v[2]
                    ? (v[2] = y)
                    : y && (v[2] = "(" + v[2] + ") and (" + y + ")"),
                  e.push(v));
              }
            }),
            e
          );
        };
      },
      function (d, s, r) {
        var e,
          o,
          y = {},
          n =
            ((e = function () {
              return window && document && document.all && !window.atob;
            }),
            function () {
              return o === void 0 && (o = e.apply(this, arguments)), o;
            }),
          p = function (a) {
            return document.querySelector(a);
          },
          m = (function (a) {
            var i = {};
            return function (t) {
              if (typeof t == "function") return t();
              if (i[t] === void 0) {
                var c = p.call(this, t);
                if (
                  window.HTMLIFrameElement &&
                  c instanceof window.HTMLIFrameElement
                )
                  try {
                    c = c.contentDocument.head;
                  } catch {
                    c = null;
                  }
                i[t] = c;
              }
              return i[t];
            };
          })(),
          v = null,
          l = 0,
          u = [],
          g = r(4);
        function b(a, i) {
          for (var t = 0; t < a.length; t++) {
            var c = a[t],
              E = y[c.id];
            if (E) {
              E.refs++;
              for (var k = 0; k < E.parts.length; k++) E.parts[k](c.parts[k]);
              for (; k < c.parts.length; k++) E.parts.push(R(c.parts[k], i));
            } else {
              var P = [];
              for (k = 0; k < c.parts.length; k++) P.push(R(c.parts[k], i));
              y[c.id] = { id: c.id, refs: 1, parts: P };
            }
          }
        }
        function h(a, i) {
          for (var t = [], c = {}, E = 0; E < a.length; E++) {
            var k = a[E],
              P = i.base ? k[0] + i.base : k[0],
              f = { css: k[1], media: k[2], sourceMap: k[3] };
            c[P] ? c[P].parts.push(f) : t.push((c[P] = { id: P, parts: [f] }));
          }
          return t;
        }
        function x(a, i) {
          var t = m(a.insertInto);
          if (!t)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
            );
          var c = u[u.length - 1];
          if (a.insertAt === "top")
            c
              ? c.nextSibling
                ? t.insertBefore(i, c.nextSibling)
                : t.appendChild(i)
              : t.insertBefore(i, t.firstChild),
              u.push(i);
          else if (a.insertAt === "bottom") t.appendChild(i);
          else {
            if (typeof a.insertAt != "object" || !a.insertAt.before)
              throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);
            var E = m(a.insertInto + " " + a.insertAt.before);
            t.insertBefore(i, E);
          }
        }
        function T(a) {
          if (a.parentNode === null) return !1;
          a.parentNode.removeChild(a);
          var i = u.indexOf(a);
          i >= 0 && u.splice(i, 1);
        }
        function O(a) {
          var i = document.createElement("style");
          return (a.attrs.type = "text/css"), L(i, a.attrs), x(a, i), i;
        }
        function L(a, i) {
          Object.keys(i).forEach(function (t) {
            a.setAttribute(t, i[t]);
          });
        }
        function R(a, i) {
          var t, c, E, k;
          if (i.transform && a.css) {
            if (!(k = i.transform(a.css))) return function () {};
            a.css = k;
          }
          if (i.singleton) {
            var P = l++;
            (t = v || (v = O(i))),
              (c = N.bind(null, t, P, !1)),
              (E = N.bind(null, t, P, !0));
          } else
            a.sourceMap &&
            typeof URL == "function" &&
            typeof URL.createObjectURL == "function" &&
            typeof URL.revokeObjectURL == "function" &&
            typeof Blob == "function" &&
            typeof btoa == "function"
              ? ((t = (function (f) {
                  var w = document.createElement("link");
                  return (
                    (f.attrs.type = "text/css"),
                    (f.attrs.rel = "stylesheet"),
                    L(w, f.attrs),
                    x(f, w),
                    w
                  );
                })(i)),
                (c = C.bind(null, t, i)),
                (E = function () {
                  T(t), t.href && URL.revokeObjectURL(t.href);
                }))
              : ((t = O(i)),
                (c = U.bind(null, t)),
                (E = function () {
                  T(t);
                }));
          return (
            c(a),
            function (f) {
              if (f) {
                if (
                  f.css === a.css &&
                  f.media === a.media &&
                  f.sourceMap === a.sourceMap
                )
                  return;
                c((a = f));
              } else E();
            }
          );
        }
        d.exports = function (a, i) {
          if (typeof DEBUG < "u" && DEBUG && typeof document != "object")
            throw new Error(
              "The style-loader cannot be used in a non-browser environment"
            );
          ((i = i || {}).attrs = typeof i.attrs == "object" ? i.attrs : {}),
            i.singleton ||
              typeof i.singleton == "boolean" ||
              (i.singleton = n()),
            i.insertInto || (i.insertInto = "head"),
            i.insertAt || (i.insertAt = "bottom");
          var t = h(a, i);
          return (
            b(t, i),
            function (c) {
              for (var E = [], k = 0; k < t.length; k++) {
                var P = t[k];
                (f = y[P.id]).refs--, E.push(f);
              }
              for (c && b(h(c, i), i), k = 0; k < E.length; k++) {
                var f;
                if ((f = E[k]).refs === 0) {
                  for (var w = 0; w < f.parts.length; w++) f.parts[w]();
                  delete y[f.id];
                }
              }
            }
          );
        };
        var A,
          M =
            ((A = []),
            function (a, i) {
              return (
                (A[a] = i),
                A.filter(Boolean).join(`
`)
              );
            });
        function N(a, i, t, c) {
          var E = t ? "" : c.css;
          if (a.styleSheet) a.styleSheet.cssText = M(i, E);
          else {
            var k = document.createTextNode(E),
              P = a.childNodes;
            P[i] && a.removeChild(P[i]),
              P.length ? a.insertBefore(k, P[i]) : a.appendChild(k);
          }
        }
        function U(a, i) {
          var t = i.css,
            c = i.media;
          if ((c && a.setAttribute("media", c), a.styleSheet))
            a.styleSheet.cssText = t;
          else {
            for (; a.firstChild; ) a.removeChild(a.firstChild);
            a.appendChild(document.createTextNode(t));
          }
        }
        function C(a, i, t) {
          var c = t.css,
            E = t.sourceMap,
            k = i.convertToAbsoluteUrls === void 0 && E;
          (i.convertToAbsoluteUrls || k) && (c = g(c)),
            E &&
              (c +=
                `
/*# sourceMappingURL=data:application/json;base64,` +
                btoa(unescape(encodeURIComponent(JSON.stringify(E)))) +
                " */");
          var P = new Blob([c], { type: "text/css" }),
            f = a.href;
          (a.href = URL.createObjectURL(P)), f && URL.revokeObjectURL(f);
        }
      },
      function (d, s) {
        d.exports = function (r) {
          var e = typeof window < "u" && window.location;
          if (!e) throw new Error("fixUrls requires window.location");
          if (!r || typeof r != "string") return r;
          var o = e.protocol + "//" + e.host,
            y = o + e.pathname.replace(/\/[^\/]*$/, "/");
          return r.replace(
            /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
            function (n, p) {
              var m,
                v = p
                  .trim()
                  .replace(/^"(.*)"$/, function (l, u) {
                    return u;
                  })
                  .replace(/^'(.*)'$/, function (l, u) {
                    return u;
                  });
              return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(v)
                ? n
                : ((m =
                    v.indexOf("//") === 0
                      ? v
                      : v.indexOf("/") === 0
                      ? o + v
                      : y + v.replace(/^\.\//, "")),
                  "url(" + JSON.stringify(m) + ")");
            }
          );
        };
      },
      function (d, s, r) {
        r.r(s);
        var e = {
          name: "screenShot",
          method: function () {
            let n = this,
              p = n.config.screenShot;
            if (!p) return;
            n.video.setAttribute("crossOrigin", "anonymous");
            let m = 0.92;
            (p.quality || p.quality === 0) && (m = p.quality);
            let v = p.type === void 0 ? "image/png" : p.type,
              l = p.format === void 0 ? ".png" : p.format,
              u = document.createElement("canvas"),
              g = u.getContext("2d"),
              b = new Image();
            (u.width = this.config.width || 600),
              (u.height = this.config.height || 337.5),
              (n.screenShot = function (h = !0) {
                (h = p.saveImg === void 0 ? h : p.saveImg),
                  (u.width = n.video.videoWidth || 600),
                  (u.height = n.video.videoHeight || 337.5),
                  (b.onload = (function () {
                    g.drawImage(n.video, 0, 0, u.width, u.height),
                      (b.src = u
                        .toDataURL(v, m)
                        .replace(v, "image/octet-stream"));
                    let x = b.src.replace(
                      /^data:image\/[^;]+/,
                      "data:application/octet-stream"
                    );
                    n.emit("screenShot", x),
                      h &&
                        (function (T, O) {
                          let L = document.createElement("a");
                          (L.href = T), (L.download = O);
                          let R = document.createEvent("MouseEvents");
                          R.initMouseEvent(
                            "click",
                            !0,
                            !1,
                            window,
                            0,
                            0,
                            0,
                            0,
                            0,
                            !1,
                            !1,
                            !1,
                            !1,
                            0,
                            null
                          ),
                            L.dispatchEvent(R);
                        })(x, "\u622A\u56FE" + l);
                  })());
              }),
              n.on("screenShotBtnClick", n.screenShot),
              n.once("destroy", function h() {
                n.off("screenShotBtnClick", n.screenShot), n.off("destroy", h);
              });
          }
        };
        function o(n = "div", p = "", m = {}, v = "") {
          let l = document.createElement(n);
          return (
            (l.className = v),
            (l.innerHTML = p),
            Object.keys(m).forEach(u => {
              let g = u,
                b = m[u];
              n === "video" || n === "audio"
                ? b && l.setAttribute(g, b)
                : l.setAttribute(g, b);
            }),
            l
          );
        }
        r(0);
        var y = {
          name: "s_screenShot",
          method: function () {
            let n = this;
            if (!n.config.screenShot || n.config.screenShot.hideButton) return;
            let p = n.lang.SCREENSHOT,
              m = o(
                "xg-screenshot",
                `<p class="name"><span>${
                  n.config.screenShot.iconText || p
                }</span></p>`,
                { tabindex: 11 },
                "xgplayer-screenshot"
              );
            n.once("ready", () => {
              n.controls.appendChild(m);
            }),
              ["click", "touchend"].forEach(v => {
                m.addEventListener(v, l => {
                  l.preventDefault(),
                    l.stopPropagation(),
                    n.userGestureTrigEvent("screenShotBtnClick");
                });
              });
          }
        };
        s.default = {
          name: "screenShot",
          method: function () {
            e.method.call(this), y.method.call(this);
          }
        };
      }
    ]);
  });
})(fe);
const Ce = re(fe.exports);
var ce = { exports: {} };
(function (X, Q) {
  (function (d, s) {
    X.exports = s();
  })(window, function () {
    return (function (d) {
      var s = {};
      function r(e) {
        if (s[e]) return s[e].exports;
        var o = (s[e] = { i: e, l: !1, exports: {} });
        return d[e].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
      }
      return (
        (r.m = d),
        (r.c = s),
        (r.d = function (e, o, y) {
          r.o(e, o) || Object.defineProperty(e, o, { enumerable: !0, get: y });
        }),
        (r.r = function (e) {
          typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (r.t = function (e, o) {
          if (
            (1 & o && (e = r(e)),
            8 & o || (4 & o && typeof e == "object" && e && e.__esModule))
          )
            return e;
          var y = Object.create(null);
          if (
            (r.r(y),
            Object.defineProperty(y, "default", { enumerable: !0, value: e }),
            2 & o && typeof e != "string")
          )
            for (var n in e)
              r.d(
                y,
                n,
                function (p) {
                  return e[p];
                }.bind(null, n)
              );
          return y;
        }),
        (r.n = function (e) {
          var o =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return r.d(o, "a", o), o;
        }),
        (r.o = function (e, o) {
          return Object.prototype.hasOwnProperty.call(e, o);
        }),
        (r.p = ""),
        r((r.s = 5))
      );
    })([
      function (d, s, r) {
        var e = r(1);
        typeof e == "string" && (e = [[d.i, e, ""]]);
        var o = { hmr: !0, transform: void 0, insertInto: void 0 };
        r(3)(e, o), e.locals && (d.exports = e.locals);
      },
      function (d, s, r) {
        (d.exports = r(2)(!1)).push([
          d.i,
          ".xgplayer-skin-default .xgplayer-playbackrate{-webkit-order:8;-moz-box-ordinal-group:9;order:8;width:60px;height:150px;z-index:18;position:relative;display:inline-block;cursor:default;margin-top:-119px}.xgplayer-skin-default .xgplayer-playbackrate ul{display:none;list-style:none;width:78px;background:rgba(0,0,0,.54);border-radius:1px;position:absolute;bottom:30px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);text-align:left;white-space:nowrap;z-index:26;cursor:pointer}.xgplayer-skin-default .xgplayer-playbackrate ul li{opacity:.7;font-family:PingFangSC-Regular;font-size:11px;color:hsla(0,0%,100%,.8);position:relative;padding:4px 0;text-align:center}.xgplayer-skin-default .xgplayer-playbackrate ul li.selected,.xgplayer-skin-default .xgplayer-playbackrate ul li:hover{color:#fff;opacity:1}.xgplayer-skin-default .xgplayer-playbackrate ul li:first-child{position:relative;margin-top:12px}.xgplayer-skin-default .xgplayer-playbackrate ul li:last-child{position:relative;margin-bottom:12px}.xgplayer-skin-default .xgplayer-playbackrate .name{width:60px;height:20px;position:absolute;bottom:0;text-align:center;font-family:PingFangSC-Regular;font-size:13px;background:rgba(0,0,0,.38);color:hsla(0,0%,100%,.8);border-radius:10px;line-height:20px}.xgplayer-skin-default .xgplayer-playbackrate span{position:relative;top:19px;font-weight:700;text-shadow:0 0 4px rgba(0,0,0,.6)}.xgplayer-skin-default .xgplayer-playbackrate:hover{opacity:1}.xgplayer-skin-default.xgplayer-playbackrate-active .xgplayer-playbackrate ul{display:block}",
          ""
        ]);
      },
      function (d, s) {
        d.exports = function (r) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (o) {
                var y = (function (n, p) {
                  var m = n[1] || "",
                    v = n[3];
                  if (!v) return m;
                  if (p && typeof btoa == "function") {
                    var l =
                        ((g = v),
                        "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                          btoa(
                            unescape(encodeURIComponent(JSON.stringify(g)))
                          ) +
                          " */"),
                      u = v.sources.map(function (b) {
                        return "/*# sourceURL=" + v.sourceRoot + b + " */";
                      });
                    return [m].concat(u).concat([l]).join(`
`);
                  }
                  var g;
                  return [m].join(`
`);
                })(o, r);
                return o[2] ? "@media " + o[2] + "{" + y + "}" : y;
              }).join("");
            }),
            (e.i = function (o, y) {
              typeof o == "string" && (o = [[null, o, ""]]);
              for (var n = {}, p = 0; p < this.length; p++) {
                var m = this[p][0];
                typeof m == "number" && (n[m] = !0);
              }
              for (p = 0; p < o.length; p++) {
                var v = o[p];
                (typeof v[0] == "number" && n[v[0]]) ||
                  (y && !v[2]
                    ? (v[2] = y)
                    : y && (v[2] = "(" + v[2] + ") and (" + y + ")"),
                  e.push(v));
              }
            }),
            e
          );
        };
      },
      function (d, s, r) {
        var e,
          o,
          y = {},
          n =
            ((e = function () {
              return window && document && document.all && !window.atob;
            }),
            function () {
              return o === void 0 && (o = e.apply(this, arguments)), o;
            }),
          p = function (a) {
            return document.querySelector(a);
          },
          m = (function (a) {
            var i = {};
            return function (t) {
              if (typeof t == "function") return t();
              if (i[t] === void 0) {
                var c = p.call(this, t);
                if (
                  window.HTMLIFrameElement &&
                  c instanceof window.HTMLIFrameElement
                )
                  try {
                    c = c.contentDocument.head;
                  } catch {
                    c = null;
                  }
                i[t] = c;
              }
              return i[t];
            };
          })(),
          v = null,
          l = 0,
          u = [],
          g = r(4);
        function b(a, i) {
          for (var t = 0; t < a.length; t++) {
            var c = a[t],
              E = y[c.id];
            if (E) {
              E.refs++;
              for (var k = 0; k < E.parts.length; k++) E.parts[k](c.parts[k]);
              for (; k < c.parts.length; k++) E.parts.push(R(c.parts[k], i));
            } else {
              var P = [];
              for (k = 0; k < c.parts.length; k++) P.push(R(c.parts[k], i));
              y[c.id] = { id: c.id, refs: 1, parts: P };
            }
          }
        }
        function h(a, i) {
          for (var t = [], c = {}, E = 0; E < a.length; E++) {
            var k = a[E],
              P = i.base ? k[0] + i.base : k[0],
              f = { css: k[1], media: k[2], sourceMap: k[3] };
            c[P] ? c[P].parts.push(f) : t.push((c[P] = { id: P, parts: [f] }));
          }
          return t;
        }
        function x(a, i) {
          var t = m(a.insertInto);
          if (!t)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
            );
          var c = u[u.length - 1];
          if (a.insertAt === "top")
            c
              ? c.nextSibling
                ? t.insertBefore(i, c.nextSibling)
                : t.appendChild(i)
              : t.insertBefore(i, t.firstChild),
              u.push(i);
          else if (a.insertAt === "bottom") t.appendChild(i);
          else {
            if (typeof a.insertAt != "object" || !a.insertAt.before)
              throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);
            var E = m(a.insertInto + " " + a.insertAt.before);
            t.insertBefore(i, E);
          }
        }
        function T(a) {
          if (a.parentNode === null) return !1;
          a.parentNode.removeChild(a);
          var i = u.indexOf(a);
          i >= 0 && u.splice(i, 1);
        }
        function O(a) {
          var i = document.createElement("style");
          return (a.attrs.type = "text/css"), L(i, a.attrs), x(a, i), i;
        }
        function L(a, i) {
          Object.keys(i).forEach(function (t) {
            a.setAttribute(t, i[t]);
          });
        }
        function R(a, i) {
          var t, c, E, k;
          if (i.transform && a.css) {
            if (!(k = i.transform(a.css))) return function () {};
            a.css = k;
          }
          if (i.singleton) {
            var P = l++;
            (t = v || (v = O(i))),
              (c = N.bind(null, t, P, !1)),
              (E = N.bind(null, t, P, !0));
          } else
            a.sourceMap &&
            typeof URL == "function" &&
            typeof URL.createObjectURL == "function" &&
            typeof URL.revokeObjectURL == "function" &&
            typeof Blob == "function" &&
            typeof btoa == "function"
              ? ((t = (function (f) {
                  var w = document.createElement("link");
                  return (
                    (f.attrs.type = "text/css"),
                    (f.attrs.rel = "stylesheet"),
                    L(w, f.attrs),
                    x(f, w),
                    w
                  );
                })(i)),
                (c = C.bind(null, t, i)),
                (E = function () {
                  T(t), t.href && URL.revokeObjectURL(t.href);
                }))
              : ((t = O(i)),
                (c = U.bind(null, t)),
                (E = function () {
                  T(t);
                }));
          return (
            c(a),
            function (f) {
              if (f) {
                if (
                  f.css === a.css &&
                  f.media === a.media &&
                  f.sourceMap === a.sourceMap
                )
                  return;
                c((a = f));
              } else E();
            }
          );
        }
        d.exports = function (a, i) {
          if (typeof DEBUG < "u" && DEBUG && typeof document != "object")
            throw new Error(
              "The style-loader cannot be used in a non-browser environment"
            );
          ((i = i || {}).attrs = typeof i.attrs == "object" ? i.attrs : {}),
            i.singleton ||
              typeof i.singleton == "boolean" ||
              (i.singleton = n()),
            i.insertInto || (i.insertInto = "head"),
            i.insertAt || (i.insertAt = "bottom");
          var t = h(a, i);
          return (
            b(t, i),
            function (c) {
              for (var E = [], k = 0; k < t.length; k++) {
                var P = t[k];
                (f = y[P.id]).refs--, E.push(f);
              }
              for (c && b(h(c, i), i), k = 0; k < E.length; k++) {
                var f;
                if ((f = E[k]).refs === 0) {
                  for (var w = 0; w < f.parts.length; w++) f.parts[w]();
                  delete y[f.id];
                }
              }
            }
          );
        };
        var A,
          M =
            ((A = []),
            function (a, i) {
              return (
                (A[a] = i),
                A.filter(Boolean).join(`
`)
              );
            });
        function N(a, i, t, c) {
          var E = t ? "" : c.css;
          if (a.styleSheet) a.styleSheet.cssText = M(i, E);
          else {
            var k = document.createTextNode(E),
              P = a.childNodes;
            P[i] && a.removeChild(P[i]),
              P.length ? a.insertBefore(k, P[i]) : a.appendChild(k);
          }
        }
        function U(a, i) {
          var t = i.css,
            c = i.media;
          if ((c && a.setAttribute("media", c), a.styleSheet))
            a.styleSheet.cssText = t;
          else {
            for (; a.firstChild; ) a.removeChild(a.firstChild);
            a.appendChild(document.createTextNode(t));
          }
        }
        function C(a, i, t) {
          var c = t.css,
            E = t.sourceMap,
            k = i.convertToAbsoluteUrls === void 0 && E;
          (i.convertToAbsoluteUrls || k) && (c = g(c)),
            E &&
              (c +=
                `
/*# sourceMappingURL=data:application/json;base64,` +
                btoa(unescape(encodeURIComponent(JSON.stringify(E)))) +
                " */");
          var P = new Blob([c], { type: "text/css" }),
            f = a.href;
          (a.href = URL.createObjectURL(P)), f && URL.revokeObjectURL(f);
        }
      },
      function (d, s) {
        d.exports = function (r) {
          var e = typeof window < "u" && window.location;
          if (!e) throw new Error("fixUrls requires window.location");
          if (!r || typeof r != "string") return r;
          var o = e.protocol + "//" + e.host,
            y = o + e.pathname.replace(/\/[^\/]*$/, "/");
          return r.replace(
            /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
            function (n, p) {
              var m,
                v = p
                  .trim()
                  .replace(/^"(.*)"$/, function (l, u) {
                    return u;
                  })
                  .replace(/^'(.*)'$/, function (l, u) {
                    return u;
                  });
              return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(v)
                ? n
                : ((m =
                    v.indexOf("//") === 0
                      ? v
                      : v.indexOf("/") === 0
                      ? o + v
                      : y + v.replace(/^\.\//, "")),
                  "url(" + JSON.stringify(m) + ")");
            }
          );
        };
      },
      function (d, s, r) {
        r.r(s);
        function e(u = "div", g = "", b = {}, h = "") {
          let x = document.createElement(u);
          return (
            (x.className = h),
            (x.innerHTML = g),
            Object.keys(b).forEach(T => {
              let O = T,
                L = b[T];
              u === "video" || u === "audio"
                ? L && x.setAttribute(O, L)
                : x.setAttribute(O, L);
            }),
            x
          );
        }
        function o(u, g) {
          return (
            !!u &&
            (u.classList
              ? Array.prototype.some.call(u.classList, b => b === g)
              : !!u.className &&
                !!u.className.match(new RegExp("(\\s|^)" + g + "(\\s|$)")))
          );
        }
        function y(u, g) {
          u &&
            (u.classList
              ? g
                  .replace(/(^\s+|\s+$)/g, "")
                  .split(/\s+/g)
                  .forEach(b => {
                    b && u.classList.add(b);
                  })
              : o(u, g) || (u.className += " " + g));
        }
        function n(u, g) {
          u &&
            (u.classList
              ? g.split(/\s+/g).forEach(b => {
                  u.classList.remove(b);
                })
              : o(u, g) &&
                g.split(/\s+/g).forEach(b => {
                  let h = new RegExp("(\\s|^)" + b + "(\\s|$)");
                  u.className = u.className.replace(h, " ");
                }));
        }
        function p(u, g) {
          u &&
            g.split(/\s+/g).forEach(b => {
              o(u, b) ? n(u, b) : y(u, b);
            });
        }
        let m = {};
        Object.defineProperty(m, "device", {
          get: function () {
            return m.os.isPc ? "pc" : "mobile";
          }
        }),
          Object.defineProperty(m, "browser", {
            get: function () {
              let u = navigator.userAgent.toLowerCase(),
                g = {
                  ie: /rv:([\d.]+)\) like gecko/,
                  firfox: /firefox\/([\d.]+)/,
                  chrome: /chrome\/([\d.]+)/,
                  opera: /opera.([\d.]+)/,
                  safari: /version\/([\d.]+).*safari/
                };
              return (
                [].concat(Object.keys(g).filter(b => g[b].test(u)))[0] || ""
              );
            }
          }),
          Object.defineProperty(m, "os", {
            get: function () {
              let u = navigator.userAgent,
                g = /(?:Windows Phone)/.test(u),
                b = /(?:SymbianOS)/.test(u) || g,
                h = /(?:Android)/.test(u),
                x = /(?:Firefox)/.test(u),
                T =
                  /(?:iPad|PlayBook)/.test(u) ||
                  (h && !/(?:Mobile)/.test(u)) ||
                  (x && /(?:Tablet)/.test(u)),
                O = /(?:iPhone)/.test(u) && !T;
              return {
                isTablet: T,
                isPhone: O,
                isAndroid: h,
                isPc: !(O || h || b || T),
                isSymbian: b,
                isWindowsPhone: g,
                isFireFox: x
              };
            }
          });
        var v = m;
        r(0);
        var l = {
          name: "s_playbackRate",
          method: function () {
            let u = this,
              g = [];
            if (!u.config.playbackRate) return !1;
            (g = [].concat(u.config.playbackRate)), g.sort((R, A) => A - R);
            let b =
                u.config.playbackRateUnit !== void 0
                  ? u.config.playbackRateUnit
                  : "x",
              h = e("xg-playbackrate", " ", {}, "xgplayer-playbackrate");
            v.device === "mobile" && (u.config.playbackRateActive = "click");
            let x = [];
            g.forEach(R => {
              x.push({ name: "" + R, rate: `${R}${b}`, selected: !1 });
            });
            let T = 1,
              O = ["<ul>"];
            x.forEach(R => {
              u.config.defaultPlaybackRate &&
              u.config.defaultPlaybackRate.toString() === R.name
                ? ((R.selected = !0),
                  (T = u.config.defaultPlaybackRate),
                  u.once("playing", () => {
                    u.video.playbackRate = u.config.defaultPlaybackRate;
                  }))
                : (R.name !== "1.0" && R.name !== "1") ||
                  (u.config.defaultPlaybackRate &&
                    u.config.defaultPlaybackRate !== 1) ||
                  (R.selected = !0),
                O.push(
                  `<li cname='${R.name}' class='${
                    R.selected ? "selected" : ""
                  }'>${R.rate}</li>`
                );
            }),
              O.push(`</ul><p class='name'>${T}${b}</p>`);
            let L = u.root.querySelector(".xgplayer-playbackrate");
            if (L) {
              L.innerHTML = O.join("");
              let R = L.querySelector(".name");
              (u.config.playbackRateActive &&
                u.config.playbackRateActive !== "hover") ||
                R.addEventListener("mouseenter", A => {
                  A.preventDefault(),
                    A.stopPropagation(),
                    y(u.root, "xgplayer-playbackrate-active"),
                    L.focus();
                });
            } else {
              h.innerHTML = O.join("");
              let R = h.querySelector(".name");
              (u.config.playbackRateActive &&
                u.config.playbackRateActive !== "hover") ||
                R.addEventListener("mouseenter", A => {
                  A.preventDefault(),
                    A.stopPropagation(),
                    y(u.root, "xgplayer-playbackrate-active"),
                    h.focus();
                }),
                u.once("ready", () => {
                  u.controls.appendChild(h);
                });
            }
            ["touchend", "click"].forEach(R => {
              h.addEventListener(
                R,
                A => {
                  A.stopPropagation(), A.preventDefault();
                  let M = A.target;
                  if (M && M.tagName.toLocaleLowerCase() === "li") {
                    let N, U;
                    x.forEach(C => {
                      (C.selected = !1),
                        M.textContent.replace(/\s+/g, "") === C.rate &&
                          (Array.prototype.forEach.call(
                            M.parentNode.childNodes,
                            a => {
                              o(a, "selected") &&
                                ((N = Number(a.getAttribute("cname"))),
                                n(a, "selected"));
                            }
                          ),
                          (C.selected = !0),
                          (u.video.playbackRate = 1 * C.name),
                          (T = 1 * C.name));
                    }),
                      y(M, "selected"),
                      (U = Number(M.getAttribute("cname"))),
                      (M.parentNode.nextSibling.innerHTML = `${M.getAttribute(
                        "cname"
                      )}${b}`),
                      u.emit("playbackrateChange", { from: N, to: U }),
                      v.device === "mobile" &&
                        n(u.root, "xgplayer-playbackrate-active");
                  } else
                    u.config.playbackRateActive !== "click" ||
                      !M ||
                      (M.tagName.toLocaleLowerCase() !== "p" &&
                        M.tagName.toLocaleLowerCase() !== "span") ||
                      (v.device === "mobile"
                        ? p(u.root, "xgplayer-playbackrate-active")
                        : y(u.root, "xgplayer-playbackrate-active"),
                      h.focus());
                  u.emit("focus");
                },
                !1
              );
            }),
              h.addEventListener("mouseleave", R => {
                R.preventDefault(),
                  R.stopPropagation(),
                  n(u.root, "xgplayer-playbackrate-active");
              }),
              u.on("blur", function () {
                n(u.root, "xgplayer-playbackrate-active");
              }),
              u.on("play", () => {
                u.video.playbackRate.toFixed(1) !== T.toFixed(1) &&
                  (u.video.playbackRate = T);
              }),
              (u.switchPlaybackRate = function (R = {}) {
                let A = u.controls.querySelectorAll(
                  ".xgplayer-playbackrate ul li"
                );
                for (let M = 0; M < A.length; M++)
                  o(A[M], "selected") ||
                    (A[M].getAttribute("cname") !== "" + R.playbackRate &&
                      M !== R.index) ||
                    A[M].click();
              }),
              u.on("ratechange", () => {
                u.switchPlaybackRate({ playbackRate: u.playbackRate });
              });
          }
        };
        s.default = {
          name: "playbackRate",
          method: function () {
            l.method.call(this);
          }
        };
      }
    ]);
  });
})(ce);
const Se = re(ce.exports),
  Re = X => (me("data-v-2748d9cb"), (X = X()), be(), X),
  Pe = { class: "card-header" },
  Oe = { class: "font-medium" },
  Le = le(" \u89C6\u9891\u7EC4\u4EF6\uFF0C\u91C7\u7528\u5F00\u6E90\u7684 "),
  Ae = le(" \u897F\u74DC\u64AD\u653E\u5668 "),
  _e = Re(() => ae("div", { id: "mse" }, null, -1)),
  Me = oe({ name: "Video" }),
  Ie = oe({
    ...Me,
    setup(X) {
      return (
        de(() => {
          new we({
            id: "mse",
            volume: 0,
            autoplay: !1,
            screenShot: !0,
            url: "https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4",
            poster:
              "https://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg",
            fluid: ge(),
            controlPlugins: [Te, Se, Ce],
            playbackRate: [0.5, 0.75, 1, 1.5, 2]
          });
        }),
        (Q, d) => {
          const s = ie("el-link"),
            r = ie("el-card");
          return (
            ye(),
            ve(r, null, {
              header: ne(() => [
                ae("div", Pe, [
                  ae("span", Oe, [
                    Le,
                    he(
                      s,
                      {
                        href: "https://v2.h5player.bytedance.com",
                        target: "_blank",
                        icon: xe(Ee)("video-play"),
                        style: { "font-size": "16px", margin: "0 4px 5px" }
                      },
                      { default: ne(() => [Ae]), _: 1 },
                      8,
                      ["icon"]
                    )
                  ])
                ])
              ]),
              default: ne(() => [_e]),
              _: 1
            })
          );
        }
      );
    }
  });
const Ue = ke(Ie, [["__scopeId", "data-v-2748d9cb"]]);
export { Ue as default };
