import {
  h as st,
  C as ni,
  d as Ln,
  s as Un,
  n as wo,
  r as un,
  o as oi,
  e as cn,
  i as ii,
  j as te,
  g as ce,
  k as ye,
  b as Ue,
  S as qn,
  ay as ri,
  Z as xt,
  f as Kn,
  Y as ai,
  L as li,
  l as Eo,
  ak as si,
  al as ui,
  _ as ci
} from "./index.69183727.js";
import { u as di } from "./hooks.5d98ec2d.js";
/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */ function Zn(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e &&
      (o = o.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      n.push.apply(n, o);
  }
  return n;
}
function Ie(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Zn(Object(n), !0).forEach(function (o) {
          fi(t, o, n[o]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
      : Zn(Object(n)).forEach(function (o) {
          Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
        });
  }
  return t;
}
function Xt(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Xt = function (e) {
          return typeof e;
        })
      : (Xt = function (e) {
          return e &&
            typeof Symbol == "function" &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        }),
    Xt(t)
  );
}
function fi(t, e, n) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (t[e] = n),
    t
  );
}
function Ne() {
  return (
    (Ne =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
        return t;
      }),
    Ne.apply(this, arguments)
  );
}
function hi(t, e) {
  if (t == null) return {};
  var n = {},
    o = Object.keys(t),
    i,
    r;
  for (r = 0; r < o.length; r++)
    (i = o[r]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
function pi(t, e) {
  if (t == null) return {};
  var n = hi(t, e),
    o,
    i;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    for (i = 0; i < r.length; i++)
      (o = r[i]),
        !(e.indexOf(o) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(t, o) || (n[o] = t[o]));
  }
  return n;
}
var gi = "1.15.0";
function Ae(t) {
  if (typeof window < "u" && window.navigator)
    return !!navigator.userAgent.match(t);
}
var Fe = Ae(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
  Tt = Ae(/Edge/i),
  Qn = Ae(/firefox/i),
  gt = Ae(/safari/i) && !Ae(/chrome/i) && !Ae(/android/i),
  yo = Ae(/iP(ad|od|hone)/i),
  Do = Ae(/chrome/i) && Ae(/android/i),
  So = { capture: !1, passive: !1 };
function I(t, e, n) {
  t.addEventListener(e, n, !Fe && So);
}
function S(t, e, n) {
  t.removeEventListener(e, n, !Fe && So);
}
function Ut(t, e) {
  if (!!e) {
    if ((e[0] === ">" && (e = e.substring(1)), t))
      try {
        if (t.matches) return t.matches(e);
        if (t.msMatchesSelector) return t.msMatchesSelector(e);
        if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
      } catch {
        return !1;
      }
    return !1;
  }
}
function mi(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function De(t, e, n, o) {
  if (t) {
    n = n || document;
    do {
      if (
        (e != null &&
          (e[0] === ">" ? t.parentNode === n && Ut(t, e) : Ut(t, e))) ||
        (o && t === n)
      )
        return t;
      if (t === n) break;
    } while ((t = mi(t)));
  }
  return null;
}
var Jn = /\s+/g;
function ae(t, e, n) {
  if (t && e)
    if (t.classList) t.classList[n ? "add" : "remove"](e);
    else {
      var o = (" " + t.className + " ")
        .replace(Jn, " ")
        .replace(" " + e + " ", " ");
      t.className = (o + (n ? " " + e : "")).replace(Jn, " ");
    }
}
function b(t, e, n) {
  var o = t && t.style;
  if (o) {
    if (n === void 0)
      return (
        document.defaultView && document.defaultView.getComputedStyle
          ? (n = document.defaultView.getComputedStyle(t, ""))
          : t.currentStyle && (n = t.currentStyle),
        e === void 0 ? n : n[e]
      );
    !(e in o) && e.indexOf("webkit") === -1 && (e = "-webkit-" + e),
      (o[e] = n + (typeof n == "string" ? "" : "px"));
  }
}
function ot(t, e) {
  var n = "";
  if (typeof t == "string") n = t;
  else
    do {
      var o = b(t, "transform");
      o && o !== "none" && (n = o + " " + n);
    } while (!e && (t = t.parentNode));
  var i =
    window.DOMMatrix ||
    window.WebKitCSSMatrix ||
    window.CSSMatrix ||
    window.MSCSSMatrix;
  return i && new i(n);
}
function To(t, e, n) {
  if (t) {
    var o = t.getElementsByTagName(e),
      i = 0,
      r = o.length;
    if (n) for (; i < r; i++) n(o[i], i);
    return o;
  }
  return [];
}
function Te() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function G(t, e, n, o, i) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var r, a, l, s, u, d, c;
    if (
      (t !== window && t.parentNode && t !== Te()
        ? ((r = t.getBoundingClientRect()),
          (a = r.top),
          (l = r.left),
          (s = r.bottom),
          (u = r.right),
          (d = r.height),
          (c = r.width))
        : ((a = 0),
          (l = 0),
          (s = window.innerHeight),
          (u = window.innerWidth),
          (d = window.innerHeight),
          (c = window.innerWidth)),
      (e || n) && t !== window && ((i = i || t.parentNode), !Fe))
    )
      do
        if (
          i &&
          i.getBoundingClientRect &&
          (b(i, "transform") !== "none" || (n && b(i, "position") !== "static"))
        ) {
          var p = i.getBoundingClientRect();
          (a -= p.top + parseInt(b(i, "border-top-width"))),
            (l -= p.left + parseInt(b(i, "border-left-width"))),
            (s = a + r.height),
            (u = l + r.width);
          break;
        }
      while ((i = i.parentNode));
    if (o && t !== window) {
      var v = ot(i || t),
        g = v && v.a,
        m = v && v.d;
      v && ((a /= m), (l /= g), (c /= g), (d /= m), (s = a + d), (u = l + c));
    }
    return { top: a, left: l, bottom: s, right: u, width: c, height: d };
  }
}
function eo(t, e, n) {
  for (var o = Le(t, !0), i = G(t)[e]; o; ) {
    var r = G(o)[n],
      a = void 0;
    if ((n === "top" || n === "left" ? (a = i >= r) : (a = i <= r), !a))
      return o;
    if (o === Te()) break;
    o = Le(o, !1);
  }
  return !1;
}
function rt(t, e, n, o) {
  for (var i = 0, r = 0, a = t.children; r < a.length; ) {
    if (
      a[r].style.display !== "none" &&
      a[r] !== _.ghost &&
      (o || a[r] !== _.dragged) &&
      De(a[r], n.draggable, t, !1)
    ) {
      if (i === e) return a[r];
      i++;
    }
    r++;
  }
  return null;
}
function Bn(t, e) {
  for (
    var n = t.lastElementChild;
    n && (n === _.ghost || b(n, "display") === "none" || (e && !Ut(n, e)));

  )
    n = n.previousElementSibling;
  return n || null;
}
function he(t, e) {
  var n = 0;
  if (!t || !t.parentNode) return -1;
  for (; (t = t.previousElementSibling); )
    t.nodeName.toUpperCase() !== "TEMPLATE" &&
      t !== _.clone &&
      (!e || Ut(t, e)) &&
      n++;
  return n;
}
function to(t) {
  var e = 0,
    n = 0,
    o = Te();
  if (t)
    do {
      var i = ot(t),
        r = i.a,
        a = i.d;
      (e += t.scrollLeft * r), (n += t.scrollTop * a);
    } while (t !== o && (t = t.parentNode));
  return [e, n];
}
function vi(t, e) {
  for (var n in t)
    if (!!t.hasOwnProperty(n)) {
      for (var o in e)
        if (e.hasOwnProperty(o) && e[o] === t[n][o]) return Number(n);
    }
  return -1;
}
function Le(t, e) {
  if (!t || !t.getBoundingClientRect) return Te();
  var n = t,
    o = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var i = b(n);
      if (
        (n.clientWidth < n.scrollWidth &&
          (i.overflowX == "auto" || i.overflowX == "scroll")) ||
        (n.clientHeight < n.scrollHeight &&
          (i.overflowY == "auto" || i.overflowY == "scroll"))
      ) {
        if (!n.getBoundingClientRect || n === document.body) return Te();
        if (o || e) return n;
        o = !0;
      }
    }
  while ((n = n.parentNode));
  return Te();
}
function bi(t, e) {
  if (t && e) for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
  return t;
}
function dn(t, e) {
  return (
    Math.round(t.top) === Math.round(e.top) &&
    Math.round(t.left) === Math.round(e.left) &&
    Math.round(t.height) === Math.round(e.height) &&
    Math.round(t.width) === Math.round(e.width)
  );
}
var mt;
function Co(t, e) {
  return function () {
    if (!mt) {
      var n = arguments,
        o = this;
      n.length === 1 ? t.call(o, n[0]) : t.apply(o, n),
        (mt = setTimeout(function () {
          mt = void 0;
        }, e));
    }
  };
}
function _i() {
  clearTimeout(mt), (mt = void 0);
}
function Io(t, e, n) {
  (t.scrollLeft += e), (t.scrollTop += n);
}
function Oo(t) {
  var e = window.Polymer,
    n = window.jQuery || window.Zepto;
  return e && e.dom
    ? e.dom(t).cloneNode(!0)
    : n
    ? n(t).clone(!0)[0]
    : t.cloneNode(!0);
}
var de = "Sortable" + new Date().getTime();
function wi() {
  var t = [],
    e;
  return {
    captureAnimationState: function () {
      if (((t = []), !!this.options.animation)) {
        var o = [].slice.call(this.el.children);
        o.forEach(function (i) {
          if (!(b(i, "display") === "none" || i === _.ghost)) {
            t.push({ target: i, rect: G(i) });
            var r = Ie({}, t[t.length - 1].rect);
            if (i.thisAnimationDuration) {
              var a = ot(i, !0);
              a && ((r.top -= a.f), (r.left -= a.e));
            }
            i.fromRect = r;
          }
        });
      }
    },
    addAnimationState: function (o) {
      t.push(o);
    },
    removeAnimationState: function (o) {
      t.splice(vi(t, { target: o }), 1);
    },
    animateAll: function (o) {
      var i = this;
      if (!this.options.animation) {
        clearTimeout(e), typeof o == "function" && o();
        return;
      }
      var r = !1,
        a = 0;
      t.forEach(function (l) {
        var s = 0,
          u = l.target,
          d = u.fromRect,
          c = G(u),
          p = u.prevFromRect,
          v = u.prevToRect,
          g = l.rect,
          m = ot(u, !0);
        m && ((c.top -= m.f), (c.left -= m.e)),
          (u.toRect = c),
          u.thisAnimationDuration &&
            dn(p, c) &&
            !dn(d, c) &&
            (g.top - c.top) / (g.left - c.left) ===
              (d.top - c.top) / (d.left - c.left) &&
            (s = yi(g, p, v, i.options)),
          dn(c, d) ||
            ((u.prevFromRect = d),
            (u.prevToRect = c),
            s || (s = i.options.animation),
            i.animate(u, g, c, s)),
          s &&
            ((r = !0),
            (a = Math.max(a, s)),
            clearTimeout(u.animationResetTimer),
            (u.animationResetTimer = setTimeout(function () {
              (u.animationTime = 0),
                (u.prevFromRect = null),
                (u.fromRect = null),
                (u.prevToRect = null),
                (u.thisAnimationDuration = null);
            }, s)),
            (u.thisAnimationDuration = s));
      }),
        clearTimeout(e),
        r
          ? (e = setTimeout(function () {
              typeof o == "function" && o();
            }, a))
          : typeof o == "function" && o(),
        (t = []);
    },
    animate: function (o, i, r, a) {
      if (a) {
        b(o, "transition", ""), b(o, "transform", "");
        var l = ot(this.el),
          s = l && l.a,
          u = l && l.d,
          d = (i.left - r.left) / (s || 1),
          c = (i.top - r.top) / (u || 1);
        (o.animatingX = !!d),
          (o.animatingY = !!c),
          b(o, "transform", "translate3d(" + d + "px," + c + "px,0)"),
          (this.forRepaintDummy = Ei(o)),
          b(
            o,
            "transition",
            "transform " +
              a +
              "ms" +
              (this.options.easing ? " " + this.options.easing : "")
          ),
          b(o, "transform", "translate3d(0,0,0)"),
          typeof o.animated == "number" && clearTimeout(o.animated),
          (o.animated = setTimeout(function () {
            b(o, "transition", ""),
              b(o, "transform", ""),
              (o.animated = !1),
              (o.animatingX = !1),
              (o.animatingY = !1);
          }, a));
      }
    }
  };
}
function Ei(t) {
  return t.offsetWidth;
}
function yi(t, e, n, o) {
  return (
    (Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) /
      Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2))) *
    o.animation
  );
}
var qe = [],
  fn = { initializeByDefault: !0 },
  Ct = {
    mount: function (e) {
      for (var n in fn) fn.hasOwnProperty(n) && !(n in e) && (e[n] = fn[n]);
      qe.forEach(function (o) {
        if (o.pluginName === e.pluginName)
          throw "Sortable: Cannot mount plugin ".concat(
            e.pluginName,
            " more than once"
          );
      }),
        qe.push(e);
    },
    pluginEvent: function (e, n, o) {
      var i = this;
      (this.eventCanceled = !1),
        (o.cancel = function () {
          i.eventCanceled = !0;
        });
      var r = e + "Global";
      qe.forEach(function (a) {
        !n[a.pluginName] ||
          (n[a.pluginName][r] && n[a.pluginName][r](Ie({ sortable: n }, o)),
          n.options[a.pluginName] &&
            n[a.pluginName][e] &&
            n[a.pluginName][e](Ie({ sortable: n }, o)));
      });
    },
    initializePlugins: function (e, n, o, i) {
      qe.forEach(function (l) {
        var s = l.pluginName;
        if (!(!e.options[s] && !l.initializeByDefault)) {
          var u = new l(e, n, e.options);
          (u.sortable = e),
            (u.options = e.options),
            (e[s] = u),
            Ne(o, u.defaults);
        }
      });
      for (var r in e.options)
        if (!!e.options.hasOwnProperty(r)) {
          var a = this.modifyOption(e, r, e.options[r]);
          typeof a < "u" && (e.options[r] = a);
        }
    },
    getEventProperties: function (e, n) {
      var o = {};
      return (
        qe.forEach(function (i) {
          typeof i.eventProperties == "function" &&
            Ne(o, i.eventProperties.call(n[i.pluginName], e));
        }),
        o
      );
    },
    modifyOption: function (e, n, o) {
      var i;
      return (
        qe.forEach(function (r) {
          !e[r.pluginName] ||
            (r.optionListeners &&
              typeof r.optionListeners[n] == "function" &&
              (i = r.optionListeners[n].call(e[r.pluginName], o)));
        }),
        i
      );
    }
  };
function Di(t) {
  var e = t.sortable,
    n = t.rootEl,
    o = t.name,
    i = t.targetEl,
    r = t.cloneEl,
    a = t.toEl,
    l = t.fromEl,
    s = t.oldIndex,
    u = t.newIndex,
    d = t.oldDraggableIndex,
    c = t.newDraggableIndex,
    p = t.originalEvent,
    v = t.putSortable,
    g = t.extraEventProperties;
  if (((e = e || (n && n[de])), !!e)) {
    var m,
      $ = e.options,
      H = "on" + o.charAt(0).toUpperCase() + o.substr(1);
    window.CustomEvent && !Fe && !Tt
      ? (m = new CustomEvent(o, { bubbles: !0, cancelable: !0 }))
      : ((m = document.createEvent("Event")), m.initEvent(o, !0, !0)),
      (m.to = a || n),
      (m.from = l || n),
      (m.item = i || n),
      (m.clone = r),
      (m.oldIndex = s),
      (m.newIndex = u),
      (m.oldDraggableIndex = d),
      (m.newDraggableIndex = c),
      (m.originalEvent = p),
      (m.pullMode = v ? v.lastPutMode : void 0);
    var C = Ie(Ie({}, g), Ct.getEventProperties(o, e));
    for (var F in C) m[F] = C[F];
    n && n.dispatchEvent(m), $[H] && $[H].call(e, m);
  }
}
var Si = ["evt"],
  ie = function (e, n) {
    var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i = o.evt,
      r = pi(o, Si);
    Ct.pluginEvent.bind(_)(
      e,
      n,
      Ie(
        {
          dragEl: f,
          parentEl: k,
          ghostEl: y,
          rootEl: P,
          nextEl: ze,
          lastDownEl: Yt,
          cloneEl: M,
          cloneHidden: Xe,
          dragStarted: ut,
          putSortable: U,
          activeSortable: _.active,
          originalEvent: i,
          oldIndex: tt,
          oldDraggableIndex: vt,
          newIndex: se,
          newDraggableIndex: ke,
          hideGhostForTarget: No,
          unhideGhostForTarget: $o,
          cloneNowHidden: function () {
            Xe = !0;
          },
          cloneNowShown: function () {
            Xe = !1;
          },
          dispatchSortableEvent: function (l) {
            ne({ sortable: n, name: l, originalEvent: i });
          }
        },
        r
      )
    );
  };
function ne(t) {
  Di(
    Ie(
      {
        putSortable: U,
        cloneEl: M,
        targetEl: f,
        rootEl: P,
        oldIndex: tt,
        oldDraggableIndex: vt,
        newIndex: se,
        newDraggableIndex: ke
      },
      t
    )
  );
}
var f,
  k,
  y,
  P,
  ze,
  Yt,
  M,
  Xe,
  tt,
  se,
  vt,
  ke,
  At,
  U,
  Je = !1,
  qt = !1,
  Kt = [],
  He,
  we,
  hn,
  pn,
  no,
  oo,
  ut,
  Ke,
  bt,
  _t = !1,
  Pt = !1,
  Lt,
  K,
  gn = [],
  Pn = !1,
  Zt = [],
  rn = typeof document < "u",
  Nt = yo,
  io = Tt || Fe ? "cssFloat" : "float",
  Ti = rn && !Do && !yo && "draggable" in document.createElement("div"),
  xo = (function () {
    if (!!rn) {
      if (Fe) return !1;
      var t = document.createElement("x");
      return (
        (t.style.cssText = "pointer-events:auto"),
        t.style.pointerEvents === "auto"
      );
    }
  })(),
  Ao = function (e, n) {
    var o = b(e),
      i =
        parseInt(o.width) -
        parseInt(o.paddingLeft) -
        parseInt(o.paddingRight) -
        parseInt(o.borderLeftWidth) -
        parseInt(o.borderRightWidth),
      r = rt(e, 0, n),
      a = rt(e, 1, n),
      l = r && b(r),
      s = a && b(a),
      u = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + G(r).width,
      d = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + G(a).width;
    if (o.display === "flex")
      return o.flexDirection === "column" ||
        o.flexDirection === "column-reverse"
        ? "vertical"
        : "horizontal";
    if (o.display === "grid")
      return o.gridTemplateColumns.split(" ").length <= 1
        ? "vertical"
        : "horizontal";
    if (r && l.float && l.float !== "none") {
      var c = l.float === "left" ? "left" : "right";
      return a && (s.clear === "both" || s.clear === c)
        ? "vertical"
        : "horizontal";
    }
    return r &&
      (l.display === "block" ||
        l.display === "flex" ||
        l.display === "table" ||
        l.display === "grid" ||
        (u >= i && o[io] === "none") ||
        (a && o[io] === "none" && u + d > i))
      ? "vertical"
      : "horizontal";
  },
  Ci = function (e, n, o) {
    var i = o ? e.left : e.top,
      r = o ? e.right : e.bottom,
      a = o ? e.width : e.height,
      l = o ? n.left : n.top,
      s = o ? n.right : n.bottom,
      u = o ? n.width : n.height;
    return i === l || r === s || i + a / 2 === l + u / 2;
  },
  Ii = function (e, n) {
    var o;
    return (
      Kt.some(function (i) {
        var r = i[de].options.emptyInsertThreshold;
        if (!(!r || Bn(i))) {
          var a = G(i),
            l = e >= a.left - r && e <= a.right + r,
            s = n >= a.top - r && n <= a.bottom + r;
          if (l && s) return (o = i);
        }
      }),
      o
    );
  },
  Po = function (e) {
    function n(r, a) {
      return function (l, s, u, d) {
        var c =
          l.options.group.name &&
          s.options.group.name &&
          l.options.group.name === s.options.group.name;
        if (r == null && (a || c)) return !0;
        if (r == null || r === !1) return !1;
        if (a && r === "clone") return r;
        if (typeof r == "function") return n(r(l, s, u, d), a)(l, s, u, d);
        var p = (a ? l : s).options.group.name;
        return (
          r === !0 ||
          (typeof r == "string" && r === p) ||
          (r.join && r.indexOf(p) > -1)
        );
      };
    }
    var o = {},
      i = e.group;
    (!i || Xt(i) != "object") && (i = { name: i }),
      (o.name = i.name),
      (o.checkPull = n(i.pull, !0)),
      (o.checkPut = n(i.put)),
      (o.revertClone = i.revertClone),
      (e.group = o);
  },
  No = function () {
    !xo && y && b(y, "display", "none");
  },
  $o = function () {
    !xo && y && b(y, "display", "");
  };
rn &&
  !Do &&
  document.addEventListener(
    "click",
    function (t) {
      if (qt)
        return (
          t.preventDefault(),
          t.stopPropagation && t.stopPropagation(),
          t.stopImmediatePropagation && t.stopImmediatePropagation(),
          (qt = !1),
          !1
        );
    },
    !0
  );
var We = function (e) {
    if (f) {
      e = e.touches ? e.touches[0] : e;
      var n = Ii(e.clientX, e.clientY);
      if (n) {
        var o = {};
        for (var i in e) e.hasOwnProperty(i) && (o[i] = e[i]);
        (o.target = o.rootEl = n),
          (o.preventDefault = void 0),
          (o.stopPropagation = void 0),
          n[de]._onDragOver(o);
      }
    }
  },
  Oi = function (e) {
    f && f.parentNode[de]._isOutsideThisEl(e.target);
  };
function _(t, e) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat(
      {}.toString.call(t)
    );
  (this.el = t), (this.options = e = Ne({}, e)), (t[de] = this);
  var n = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    invertSwap: !1,
    invertedSwapThreshold: null,
    removeCloneOnHide: !0,
    direction: function () {
      return Ao(t, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function (a, l) {
      a.setData("Text", l.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold:
      (Number.parseInt ? Number : window).parseInt(
        window.devicePixelRatio,
        10
      ) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: { x: 0, y: 0 },
    supportPointer: _.supportPointer !== !1 && "PointerEvent" in window && !gt,
    emptyInsertThreshold: 5
  };
  Ct.initializePlugins(this, t, n);
  for (var o in n) !(o in e) && (e[o] = n[o]);
  Po(e);
  for (var i in this)
    i.charAt(0) === "_" &&
      typeof this[i] == "function" &&
      (this[i] = this[i].bind(this));
  (this.nativeDraggable = e.forceFallback ? !1 : Ti),
    this.nativeDraggable && (this.options.touchStartThreshold = 1),
    e.supportPointer
      ? I(t, "pointerdown", this._onTapStart)
      : (I(t, "mousedown", this._onTapStart),
        I(t, "touchstart", this._onTapStart)),
    this.nativeDraggable && (I(t, "dragover", this), I(t, "dragenter", this)),
    Kt.push(this.el),
    e.store && e.store.get && this.sort(e.store.get(this) || []),
    Ne(this, wi());
}
_.prototype = {
  constructor: _,
  _isOutsideThisEl: function (e) {
    !this.el.contains(e) && e !== this.el && (Ke = null);
  },
  _getDirection: function (e, n) {
    return typeof this.options.direction == "function"
      ? this.options.direction.call(this, e, n, f)
      : this.options.direction;
  },
  _onTapStart: function (e) {
    if (!!e.cancelable) {
      var n = this,
        o = this.el,
        i = this.options,
        r = i.preventOnFilter,
        a = e.type,
        l =
          (e.touches && e.touches[0]) ||
          (e.pointerType && e.pointerType === "touch" && e),
        s = (l || e).target,
        u =
          (e.target.shadowRoot &&
            ((e.path && e.path[0]) ||
              (e.composedPath && e.composedPath()[0]))) ||
          s,
        d = i.filter;
      if (
        (ki(o),
        !f &&
          !(
            (/mousedown|pointerdown/.test(a) && e.button !== 0) ||
            i.disabled
          ) &&
          !u.isContentEditable &&
          !(
            !this.nativeDraggable &&
            gt &&
            s &&
            s.tagName.toUpperCase() === "SELECT"
          ) &&
          ((s = De(s, i.draggable, o, !1)), !(s && s.animated) && Yt !== s))
      ) {
        if (((tt = he(s)), (vt = he(s, i.draggable)), typeof d == "function")) {
          if (d.call(this, e, s, this)) {
            ne({
              sortable: n,
              rootEl: u,
              name: "filter",
              targetEl: s,
              toEl: o,
              fromEl: o
            }),
              ie("filter", n, { evt: e }),
              r && e.cancelable && e.preventDefault();
            return;
          }
        } else if (
          d &&
          ((d = d.split(",").some(function (c) {
            if (((c = De(u, c.trim(), o, !1)), c))
              return (
                ne({
                  sortable: n,
                  rootEl: c,
                  name: "filter",
                  targetEl: s,
                  fromEl: o,
                  toEl: o
                }),
                ie("filter", n, { evt: e }),
                !0
              );
          })),
          d)
        ) {
          r && e.cancelable && e.preventDefault();
          return;
        }
        (i.handle && !De(u, i.handle, o, !1)) ||
          this._prepareDragStart(e, l, s);
      }
    }
  },
  _prepareDragStart: function (e, n, o) {
    var i = this,
      r = i.el,
      a = i.options,
      l = r.ownerDocument,
      s;
    if (o && !f && o.parentNode === r) {
      var u = G(o);
      if (
        ((P = r),
        (f = o),
        (k = f.parentNode),
        (ze = f.nextSibling),
        (Yt = o),
        (At = a.group),
        (_.dragged = f),
        (He = {
          target: f,
          clientX: (n || e).clientX,
          clientY: (n || e).clientY
        }),
        (no = He.clientX - u.left),
        (oo = He.clientY - u.top),
        (this._lastX = (n || e).clientX),
        (this._lastY = (n || e).clientY),
        (f.style["will-change"] = "all"),
        (s = function () {
          if ((ie("delayEnded", i, { evt: e }), _.eventCanceled)) {
            i._onDrop();
            return;
          }
          i._disableDelayedDragEvents(),
            !Qn && i.nativeDraggable && (f.draggable = !0),
            i._triggerDragStart(e, n),
            ne({ sortable: i, name: "choose", originalEvent: e }),
            ae(f, a.chosenClass, !0);
        }),
        a.ignore.split(",").forEach(function (d) {
          To(f, d.trim(), mn);
        }),
        I(l, "dragover", We),
        I(l, "mousemove", We),
        I(l, "touchmove", We),
        I(l, "mouseup", i._onDrop),
        I(l, "touchend", i._onDrop),
        I(l, "touchcancel", i._onDrop),
        Qn &&
          this.nativeDraggable &&
          ((this.options.touchStartThreshold = 4), (f.draggable = !0)),
        ie("delayStart", this, { evt: e }),
        a.delay &&
          (!a.delayOnTouchOnly || n) &&
          (!this.nativeDraggable || !(Tt || Fe)))
      ) {
        if (_.eventCanceled) {
          this._onDrop();
          return;
        }
        I(l, "mouseup", i._disableDelayedDrag),
          I(l, "touchend", i._disableDelayedDrag),
          I(l, "touchcancel", i._disableDelayedDrag),
          I(l, "mousemove", i._delayedDragTouchMoveHandler),
          I(l, "touchmove", i._delayedDragTouchMoveHandler),
          a.supportPointer &&
            I(l, "pointermove", i._delayedDragTouchMoveHandler),
          (i._dragStartTimer = setTimeout(s, a.delay));
      } else s();
    }
  },
  _delayedDragTouchMoveHandler: function (e) {
    var n = e.touches ? e.touches[0] : e;
    Math.max(
      Math.abs(n.clientX - this._lastX),
      Math.abs(n.clientY - this._lastY)
    ) >=
      Math.floor(
        this.options.touchStartThreshold /
          ((this.nativeDraggable && window.devicePixelRatio) || 1)
      ) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function () {
    f && mn(f),
      clearTimeout(this._dragStartTimer),
      this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function () {
    var e = this.el.ownerDocument;
    S(e, "mouseup", this._disableDelayedDrag),
      S(e, "touchend", this._disableDelayedDrag),
      S(e, "touchcancel", this._disableDelayedDrag),
      S(e, "mousemove", this._delayedDragTouchMoveHandler),
      S(e, "touchmove", this._delayedDragTouchMoveHandler),
      S(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function (e, n) {
    (n = n || (e.pointerType == "touch" && e)),
      !this.nativeDraggable || n
        ? this.options.supportPointer
          ? I(document, "pointermove", this._onTouchMove)
          : n
          ? I(document, "touchmove", this._onTouchMove)
          : I(document, "mousemove", this._onTouchMove)
        : (I(f, "dragend", this), I(P, "dragstart", this._onDragStart));
    try {
      document.selection
        ? Bt(function () {
            document.selection.empty();
          })
        : window.getSelection().removeAllRanges();
    } catch {}
  },
  _dragStarted: function (e, n) {
    if (((Je = !1), P && f)) {
      ie("dragStarted", this, { evt: n }),
        this.nativeDraggable && I(document, "dragover", Oi);
      var o = this.options;
      !e && ae(f, o.dragClass, !1),
        ae(f, o.ghostClass, !0),
        (_.active = this),
        e && this._appendGhost(),
        ne({ sortable: this, name: "start", originalEvent: n });
    } else this._nulling();
  },
  _emulateDragOver: function () {
    if (we) {
      (this._lastX = we.clientX), (this._lastY = we.clientY), No();
      for (
        var e = document.elementFromPoint(we.clientX, we.clientY), n = e;
        e &&
        e.shadowRoot &&
        ((e = e.shadowRoot.elementFromPoint(we.clientX, we.clientY)), e !== n);

      )
        n = e;
      if ((f.parentNode[de]._isOutsideThisEl(e), n))
        do {
          if (n[de]) {
            var o = void 0;
            if (
              ((o = n[de]._onDragOver({
                clientX: we.clientX,
                clientY: we.clientY,
                target: e,
                rootEl: n
              })),
              o && !this.options.dragoverBubble)
            )
              break;
          }
          e = n;
        } while ((n = n.parentNode));
      $o();
    }
  },
  _onTouchMove: function (e) {
    if (He) {
      var n = this.options,
        o = n.fallbackTolerance,
        i = n.fallbackOffset,
        r = e.touches ? e.touches[0] : e,
        a = y && ot(y, !0),
        l = y && a && a.a,
        s = y && a && a.d,
        u = Nt && K && to(K),
        d =
          (r.clientX - He.clientX + i.x) / (l || 1) +
          (u ? u[0] - gn[0] : 0) / (l || 1),
        c =
          (r.clientY - He.clientY + i.y) / (s || 1) +
          (u ? u[1] - gn[1] : 0) / (s || 1);
      if (!_.active && !Je) {
        if (
          o &&
          Math.max(
            Math.abs(r.clientX - this._lastX),
            Math.abs(r.clientY - this._lastY)
          ) < o
        )
          return;
        this._onDragStart(e, !0);
      }
      if (y) {
        a
          ? ((a.e += d - (hn || 0)), (a.f += c - (pn || 0)))
          : (a = { a: 1, b: 0, c: 0, d: 1, e: d, f: c });
        var p = "matrix("
          .concat(a.a, ",")
          .concat(a.b, ",")
          .concat(a.c, ",")
          .concat(a.d, ",")
          .concat(a.e, ",")
          .concat(a.f, ")");
        b(y, "webkitTransform", p),
          b(y, "mozTransform", p),
          b(y, "msTransform", p),
          b(y, "transform", p),
          (hn = d),
          (pn = c),
          (we = r);
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function () {
    if (!y) {
      var e = this.options.fallbackOnBody ? document.body : P,
        n = G(f, !0, Nt, !0, e),
        o = this.options;
      if (Nt) {
        for (
          K = e;
          b(K, "position") === "static" &&
          b(K, "transform") === "none" &&
          K !== document;

        )
          K = K.parentNode;
        K !== document.body && K !== document.documentElement
          ? (K === document && (K = Te()),
            (n.top += K.scrollTop),
            (n.left += K.scrollLeft))
          : (K = Te()),
          (gn = to(K));
      }
      (y = f.cloneNode(!0)),
        ae(y, o.ghostClass, !1),
        ae(y, o.fallbackClass, !0),
        ae(y, o.dragClass, !0),
        b(y, "transition", ""),
        b(y, "transform", ""),
        b(y, "box-sizing", "border-box"),
        b(y, "margin", 0),
        b(y, "top", n.top),
        b(y, "left", n.left),
        b(y, "width", n.width),
        b(y, "height", n.height),
        b(y, "opacity", "0.8"),
        b(y, "position", Nt ? "absolute" : "fixed"),
        b(y, "zIndex", "100000"),
        b(y, "pointerEvents", "none"),
        (_.ghost = y),
        e.appendChild(y),
        b(
          y,
          "transform-origin",
          (no / parseInt(y.style.width)) * 100 +
            "% " +
            (oo / parseInt(y.style.height)) * 100 +
            "%"
        );
    }
  },
  _onDragStart: function (e, n) {
    var o = this,
      i = e.dataTransfer,
      r = o.options;
    if ((ie("dragStart", this, { evt: e }), _.eventCanceled)) {
      this._onDrop();
      return;
    }
    ie("setupClone", this),
      _.eventCanceled ||
        ((M = Oo(f)),
        M.removeAttribute("id"),
        (M.draggable = !1),
        (M.style["will-change"] = ""),
        this._hideClone(),
        ae(M, this.options.chosenClass, !1),
        (_.clone = M)),
      (o.cloneId = Bt(function () {
        ie("clone", o),
          !_.eventCanceled &&
            (o.options.removeCloneOnHide || P.insertBefore(M, f),
            o._hideClone(),
            ne({ sortable: o, name: "clone" }));
      })),
      !n && ae(f, r.dragClass, !0),
      n
        ? ((qt = !0), (o._loopId = setInterval(o._emulateDragOver, 50)))
        : (S(document, "mouseup", o._onDrop),
          S(document, "touchend", o._onDrop),
          S(document, "touchcancel", o._onDrop),
          i &&
            ((i.effectAllowed = "move"), r.setData && r.setData.call(o, i, f)),
          I(document, "drop", o),
          b(f, "transform", "translateZ(0)")),
      (Je = !0),
      (o._dragStartId = Bt(o._dragStarted.bind(o, n, e))),
      I(document, "selectstart", o),
      (ut = !0),
      gt && b(document.body, "user-select", "none");
  },
  _onDragOver: function (e) {
    var n = this.el,
      o = e.target,
      i,
      r,
      a,
      l = this.options,
      s = l.group,
      u = _.active,
      d = At === s,
      c = l.sort,
      p = U || u,
      v,
      g = this,
      m = !1;
    if (Pn) return;
    function $(_e, ln) {
      ie(
        _e,
        g,
        Ie(
          {
            evt: e,
            isOwner: d,
            axis: v ? "vertical" : "horizontal",
            revert: a,
            dragRect: i,
            targetRect: r,
            canSort: c,
            fromSortable: p,
            target: o,
            completed: C,
            onMove: function (lt, sn) {
              return $t(P, n, f, i, lt, G(lt), e, sn);
            },
            changed: F
          },
          ln
        )
      );
    }
    function H() {
      $("dragOverAnimationCapture"),
        g.captureAnimationState(),
        g !== p && p.captureAnimationState();
    }
    function C(_e) {
      return (
        $("dragOverCompleted", { insertion: _e }),
        _e &&
          (d ? u._hideClone() : u._showClone(g),
          g !== p &&
            (ae(f, U ? U.options.ghostClass : u.options.ghostClass, !1),
            ae(f, l.ghostClass, !0)),
          U !== g && g !== _.active
            ? (U = g)
            : g === _.active && U && (U = null),
          p === g && (g._ignoreWhileAnimating = o),
          g.animateAll(function () {
            $("dragOverAnimationComplete"), (g._ignoreWhileAnimating = null);
          }),
          g !== p && (p.animateAll(), (p._ignoreWhileAnimating = null))),
        ((o === f && !f.animated) || (o === n && !o.animated)) && (Ke = null),
        !l.dragoverBubble &&
          !e.rootEl &&
          o !== document &&
          (f.parentNode[de]._isOutsideThisEl(e.target), !_e && We(e)),
        !l.dragoverBubble && e.stopPropagation && e.stopPropagation(),
        (m = !0)
      );
    }
    function F() {
      (se = he(f)),
        (ke = he(f, l.draggable)),
        ne({
          sortable: g,
          name: "change",
          toEl: n,
          newIndex: se,
          newDraggableIndex: ke,
          originalEvent: e
        });
    }
    if (
      (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(),
      (o = De(o, l.draggable, n, !0)),
      $("dragOver"),
      _.eventCanceled)
    )
      return m;
    if (
      f.contains(e.target) ||
      (o.animated && o.animatingX && o.animatingY) ||
      g._ignoreWhileAnimating === o
    )
      return C(!1);
    if (
      ((qt = !1),
      u &&
        !l.disabled &&
        (d
          ? c || (a = k !== P)
          : U === this ||
            ((this.lastPutMode = At.checkPull(this, u, f, e)) &&
              s.checkPut(this, u, f, e))))
    ) {
      if (
        ((v = this._getDirection(e, o) === "vertical"),
        (i = G(f)),
        $("dragOverValid"),
        _.eventCanceled)
      )
        return m;
      if (a)
        return (
          (k = P),
          H(),
          this._hideClone(),
          $("revert"),
          _.eventCanceled || (ze ? P.insertBefore(f, ze) : P.appendChild(f)),
          C(!0)
        );
      var A = Bn(n, l.draggable);
      if (!A || (Ni(e, v, this) && !A.animated)) {
        if (A === f) return C(!1);
        if (
          (A && n === e.target && (o = A),
          o && (r = G(o)),
          $t(P, n, f, i, o, r, e, !!o) !== !1)
        )
          return (
            H(),
            A && A.nextSibling
              ? n.insertBefore(f, A.nextSibling)
              : n.appendChild(f),
            (k = n),
            F(),
            C(!0)
          );
      } else if (A && Pi(e, v, this)) {
        var Q = rt(n, 0, l, !0);
        if (Q === f) return C(!1);
        if (((o = Q), (r = G(o)), $t(P, n, f, i, o, r, e, !1) !== !1))
          return H(), n.insertBefore(f, Q), (k = n), F(), C(!0);
      } else if (o.parentNode === n) {
        r = G(o);
        var Y = 0,
          J,
          ge = f.parentNode !== n,
          x = !Ci(
            (f.animated && f.toRect) || i,
            (o.animated && o.toRect) || r,
            v
          ),
          me = v ? "top" : "left",
          z = eo(o, "top", "top") || eo(f, "top", "top"),
          ve = z ? z.scrollTop : void 0;
        Ke !== o && ((J = r[me]), (_t = !1), (Pt = (!x && l.invertSwap) || ge)),
          (Y = $i(
            e,
            o,
            r,
            v,
            x ? 1 : l.swapThreshold,
            l.invertedSwapThreshold == null
              ? l.swapThreshold
              : l.invertedSwapThreshold,
            Pt,
            Ke === o
          ));
        var W;
        if (Y !== 0) {
          var ee = he(f);
          do (ee -= Y), (W = k.children[ee]);
          while (W && (b(W, "display") === "none" || W === y));
        }
        if (Y === 0 || W === o) return C(!1);
        (Ke = o), (bt = Y);
        var be = o.nextElementSibling,
          V = !1;
        V = Y === 1;
        var xe = $t(P, n, f, i, o, r, e, V);
        if (xe !== !1)
          return (
            (xe === 1 || xe === -1) && (V = xe === 1),
            (Pn = !0),
            setTimeout(Ai, 30),
            H(),
            V && !be
              ? n.appendChild(f)
              : o.parentNode.insertBefore(f, V ? be : o),
            z && Io(z, 0, ve - z.scrollTop),
            (k = f.parentNode),
            J !== void 0 && !Pt && (Lt = Math.abs(J - G(o)[me])),
            F(),
            C(!0)
          );
      }
      if (n.contains(f)) return C(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function () {
    S(document, "mousemove", this._onTouchMove),
      S(document, "touchmove", this._onTouchMove),
      S(document, "pointermove", this._onTouchMove),
      S(document, "dragover", We),
      S(document, "mousemove", We),
      S(document, "touchmove", We);
  },
  _offUpEvents: function () {
    var e = this.el.ownerDocument;
    S(e, "mouseup", this._onDrop),
      S(e, "touchend", this._onDrop),
      S(e, "pointerup", this._onDrop),
      S(e, "touchcancel", this._onDrop),
      S(document, "selectstart", this);
  },
  _onDrop: function (e) {
    var n = this.el,
      o = this.options;
    if (
      ((se = he(f)),
      (ke = he(f, o.draggable)),
      ie("drop", this, { evt: e }),
      (k = f && f.parentNode),
      (se = he(f)),
      (ke = he(f, o.draggable)),
      _.eventCanceled)
    ) {
      this._nulling();
      return;
    }
    (Je = !1),
      (Pt = !1),
      (_t = !1),
      clearInterval(this._loopId),
      clearTimeout(this._dragStartTimer),
      Nn(this.cloneId),
      Nn(this._dragStartId),
      this.nativeDraggable &&
        (S(document, "drop", this), S(n, "dragstart", this._onDragStart)),
      this._offMoveEvents(),
      this._offUpEvents(),
      gt && b(document.body, "user-select", ""),
      b(f, "transform", ""),
      e &&
        (ut &&
          (e.cancelable && e.preventDefault(),
          !o.dropBubble && e.stopPropagation()),
        y && y.parentNode && y.parentNode.removeChild(y),
        (P === k || (U && U.lastPutMode !== "clone")) &&
          M &&
          M.parentNode &&
          M.parentNode.removeChild(M),
        f &&
          (this.nativeDraggable && S(f, "dragend", this),
          mn(f),
          (f.style["will-change"] = ""),
          ut &&
            !Je &&
            ae(f, U ? U.options.ghostClass : this.options.ghostClass, !1),
          ae(f, this.options.chosenClass, !1),
          ne({
            sortable: this,
            name: "unchoose",
            toEl: k,
            newIndex: null,
            newDraggableIndex: null,
            originalEvent: e
          }),
          P !== k
            ? (se >= 0 &&
                (ne({
                  rootEl: k,
                  name: "add",
                  toEl: k,
                  fromEl: P,
                  originalEvent: e
                }),
                ne({
                  sortable: this,
                  name: "remove",
                  toEl: k,
                  originalEvent: e
                }),
                ne({
                  rootEl: k,
                  name: "sort",
                  toEl: k,
                  fromEl: P,
                  originalEvent: e
                }),
                ne({
                  sortable: this,
                  name: "sort",
                  toEl: k,
                  originalEvent: e
                })),
              U && U.save())
            : se !== tt &&
              se >= 0 &&
              (ne({
                sortable: this,
                name: "update",
                toEl: k,
                originalEvent: e
              }),
              ne({ sortable: this, name: "sort", toEl: k, originalEvent: e })),
          _.active &&
            ((se == null || se === -1) && ((se = tt), (ke = vt)),
            ne({ sortable: this, name: "end", toEl: k, originalEvent: e }),
            this.save()))),
      this._nulling();
  },
  _nulling: function () {
    ie("nulling", this),
      (P =
        f =
        k =
        y =
        ze =
        M =
        Yt =
        Xe =
        He =
        we =
        ut =
        se =
        ke =
        tt =
        vt =
        Ke =
        bt =
        U =
        At =
        _.dragged =
        _.ghost =
        _.clone =
        _.active =
          null),
      Zt.forEach(function (e) {
        e.checked = !0;
      }),
      (Zt.length = hn = pn = 0);
  },
  handleEvent: function (e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        f && (this._onDragOver(e), xi(e));
        break;
      case "selectstart":
        e.preventDefault();
        break;
    }
  },
  toArray: function () {
    for (
      var e = [],
        n,
        o = this.el.children,
        i = 0,
        r = o.length,
        a = this.options;
      i < r;
      i++
    )
      (n = o[i]),
        De(n, a.draggable, this.el, !1) &&
          e.push(n.getAttribute(a.dataIdAttr) || Mi(n));
    return e;
  },
  sort: function (e, n) {
    var o = {},
      i = this.el;
    this.toArray().forEach(function (r, a) {
      var l = i.children[a];
      De(l, this.options.draggable, i, !1) && (o[r] = l);
    }, this),
      n && this.captureAnimationState(),
      e.forEach(function (r) {
        o[r] && (i.removeChild(o[r]), i.appendChild(o[r]));
      }),
      n && this.animateAll();
  },
  save: function () {
    var e = this.options.store;
    e && e.set && e.set(this);
  },
  closest: function (e, n) {
    return De(e, n || this.options.draggable, this.el, !1);
  },
  option: function (e, n) {
    var o = this.options;
    if (n === void 0) return o[e];
    var i = Ct.modifyOption(this, e, n);
    typeof i < "u" ? (o[e] = i) : (o[e] = n), e === "group" && Po(o);
  },
  destroy: function () {
    ie("destroy", this);
    var e = this.el;
    (e[de] = null),
      S(e, "mousedown", this._onTapStart),
      S(e, "touchstart", this._onTapStart),
      S(e, "pointerdown", this._onTapStart),
      this.nativeDraggable && (S(e, "dragover", this), S(e, "dragenter", this)),
      Array.prototype.forEach.call(
        e.querySelectorAll("[draggable]"),
        function (n) {
          n.removeAttribute("draggable");
        }
      ),
      this._onDrop(),
      this._disableDelayedDragEvents(),
      Kt.splice(Kt.indexOf(this.el), 1),
      (this.el = e = null);
  },
  _hideClone: function () {
    if (!Xe) {
      if ((ie("hideClone", this), _.eventCanceled)) return;
      b(M, "display", "none"),
        this.options.removeCloneOnHide &&
          M.parentNode &&
          M.parentNode.removeChild(M),
        (Xe = !0);
    }
  },
  _showClone: function (e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Xe) {
      if ((ie("showClone", this), _.eventCanceled)) return;
      f.parentNode == P && !this.options.group.revertClone
        ? P.insertBefore(M, f)
        : ze
        ? P.insertBefore(M, ze)
        : P.appendChild(M),
        this.options.group.revertClone && this.animate(f, M),
        b(M, "display", ""),
        (Xe = !1);
    }
  }
};
function xi(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"),
    t.cancelable && t.preventDefault();
}
function $t(t, e, n, o, i, r, a, l) {
  var s,
    u = t[de],
    d = u.options.onMove,
    c;
  return (
    window.CustomEvent && !Fe && !Tt
      ? (s = new CustomEvent("move", { bubbles: !0, cancelable: !0 }))
      : ((s = document.createEvent("Event")), s.initEvent("move", !0, !0)),
    (s.to = e),
    (s.from = t),
    (s.dragged = n),
    (s.draggedRect = o),
    (s.related = i || e),
    (s.relatedRect = r || G(e)),
    (s.willInsertAfter = l),
    (s.originalEvent = a),
    t.dispatchEvent(s),
    d && (c = d.call(u, s, a)),
    c
  );
}
function mn(t) {
  t.draggable = !1;
}
function Ai() {
  Pn = !1;
}
function Pi(t, e, n) {
  var o = G(rt(n.el, 0, n.options, !0)),
    i = 10;
  return e
    ? t.clientX < o.left - i || (t.clientY < o.top && t.clientX < o.right)
    : t.clientY < o.top - i || (t.clientY < o.bottom && t.clientX < o.left);
}
function Ni(t, e, n) {
  var o = G(Bn(n.el, n.options.draggable)),
    i = 10;
  return e
    ? t.clientX > o.right + i ||
        (t.clientX <= o.right && t.clientY > o.bottom && t.clientX >= o.left)
    : (t.clientX > o.right && t.clientY > o.top) ||
        (t.clientX <= o.right && t.clientY > o.bottom + i);
}
function $i(t, e, n, o, i, r, a, l) {
  var s = o ? t.clientY : t.clientX,
    u = o ? n.height : n.width,
    d = o ? n.top : n.left,
    c = o ? n.bottom : n.right,
    p = !1;
  if (!a) {
    if (l && Lt < u * i) {
      if (
        (!_t &&
          (bt === 1 ? s > d + (u * r) / 2 : s < c - (u * r) / 2) &&
          (_t = !0),
        _t)
      )
        p = !0;
      else if (bt === 1 ? s < d + Lt : s > c - Lt) return -bt;
    } else if (s > d + (u * (1 - i)) / 2 && s < c - (u * (1 - i)) / 2)
      return Fi(e);
  }
  return (
    (p = p || a),
    p && (s < d + (u * r) / 2 || s > c - (u * r) / 2)
      ? s > d + u / 2
        ? 1
        : -1
      : 0
  );
}
function Fi(t) {
  return he(f) < he(t) ? 1 : -1;
}
function Mi(t) {
  for (
    var e = t.tagName + t.className + t.src + t.href + t.textContent,
      n = e.length,
      o = 0;
    n--;

  )
    o += e.charCodeAt(n);
  return o.toString(36);
}
function ki(t) {
  Zt.length = 0;
  for (var e = t.getElementsByTagName("input"), n = e.length; n--; ) {
    var o = e[n];
    o.checked && Zt.push(o);
  }
}
function Bt(t) {
  return setTimeout(t, 0);
}
function Nn(t) {
  return clearTimeout(t);
}
rn &&
  I(document, "touchmove", function (t) {
    (_.active || Je) && t.cancelable && t.preventDefault();
  });
_.utils = {
  on: I,
  off: S,
  css: b,
  find: To,
  is: function (e, n) {
    return !!De(e, n, e, !1);
  },
  extend: bi,
  throttle: Co,
  closest: De,
  toggleClass: ae,
  clone: Oo,
  index: he,
  nextTick: Bt,
  cancelNextTick: Nn,
  detectDirection: Ao,
  getChild: rt
};
_.get = function (t) {
  return t[de];
};
_.mount = function () {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  e[0].constructor === Array && (e = e[0]),
    e.forEach(function (o) {
      if (!o.prototype || !o.prototype.constructor)
        throw "Sortable: Mounted plugin must be a constructor function, not ".concat(
          {}.toString.call(o)
        );
      o.utils && (_.utils = Ie(Ie({}, _.utils), o.utils)), Ct.mount(o);
    });
};
_.create = function (t, e) {
  return new _(t, e);
};
_.version = gi;
var L = [],
  ct,
  $n,
  Fn = !1,
  vn,
  bn,
  Qt,
  dt;
function Ri() {
  function t() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var e in this)
      e.charAt(0) === "_" &&
        typeof this[e] == "function" &&
        (this[e] = this[e].bind(this));
  }
  return (
    (t.prototype = {
      dragStarted: function (n) {
        var o = n.originalEvent;
        this.sortable.nativeDraggable
          ? I(document, "dragover", this._handleAutoScroll)
          : this.options.supportPointer
          ? I(document, "pointermove", this._handleFallbackAutoScroll)
          : o.touches
          ? I(document, "touchmove", this._handleFallbackAutoScroll)
          : I(document, "mousemove", this._handleFallbackAutoScroll);
      },
      dragOverCompleted: function (n) {
        var o = n.originalEvent;
        !this.options.dragOverBubble && !o.rootEl && this._handleAutoScroll(o);
      },
      drop: function () {
        this.sortable.nativeDraggable
          ? S(document, "dragover", this._handleAutoScroll)
          : (S(document, "pointermove", this._handleFallbackAutoScroll),
            S(document, "touchmove", this._handleFallbackAutoScroll),
            S(document, "mousemove", this._handleFallbackAutoScroll)),
          ro(),
          Ht(),
          _i();
      },
      nulling: function () {
        (Qt = $n = ct = Fn = dt = vn = bn = null), (L.length = 0);
      },
      _handleFallbackAutoScroll: function (n) {
        this._handleAutoScroll(n, !0);
      },
      _handleAutoScroll: function (n, o) {
        var i = this,
          r = (n.touches ? n.touches[0] : n).clientX,
          a = (n.touches ? n.touches[0] : n).clientY,
          l = document.elementFromPoint(r, a);
        if (
          ((Qt = n),
          o || this.options.forceAutoScrollFallback || Tt || Fe || gt)
        ) {
          _n(n, this.options, l, o);
          var s = Le(l, !0);
          Fn &&
            (!dt || r !== vn || a !== bn) &&
            (dt && ro(),
            (dt = setInterval(function () {
              var u = Le(document.elementFromPoint(r, a), !0);
              u !== s && ((s = u), Ht()), _n(n, i.options, u, o);
            }, 10)),
            (vn = r),
            (bn = a));
        } else {
          if (!this.options.bubbleScroll || Le(l, !0) === Te()) {
            Ht();
            return;
          }
          _n(n, this.options, Le(l, !1), !1);
        }
      }
    }),
    Ne(t, { pluginName: "scroll", initializeByDefault: !0 })
  );
}
function Ht() {
  L.forEach(function (t) {
    clearInterval(t.pid);
  }),
    (L = []);
}
function ro() {
  clearInterval(dt);
}
var _n = Co(function (t, e, n, o) {
    if (!!e.scroll) {
      var i = (t.touches ? t.touches[0] : t).clientX,
        r = (t.touches ? t.touches[0] : t).clientY,
        a = e.scrollSensitivity,
        l = e.scrollSpeed,
        s = Te(),
        u = !1,
        d;
      $n !== n &&
        (($n = n),
        Ht(),
        (ct = e.scroll),
        (d = e.scrollFn),
        ct === !0 && (ct = Le(n, !0)));
      var c = 0,
        p = ct;
      do {
        var v = p,
          g = G(v),
          m = g.top,
          $ = g.bottom,
          H = g.left,
          C = g.right,
          F = g.width,
          A = g.height,
          Q = void 0,
          Y = void 0,
          J = v.scrollWidth,
          ge = v.scrollHeight,
          x = b(v),
          me = v.scrollLeft,
          z = v.scrollTop;
        v === s
          ? ((Q =
              F < J &&
              (x.overflowX === "auto" ||
                x.overflowX === "scroll" ||
                x.overflowX === "visible")),
            (Y =
              A < ge &&
              (x.overflowY === "auto" ||
                x.overflowY === "scroll" ||
                x.overflowY === "visible")))
          : ((Q =
              F < J && (x.overflowX === "auto" || x.overflowX === "scroll")),
            (Y =
              A < ge && (x.overflowY === "auto" || x.overflowY === "scroll")));
        var ve =
            Q &&
            (Math.abs(C - i) <= a && me + F < J) -
              (Math.abs(H - i) <= a && !!me),
          W =
            Y &&
            (Math.abs($ - r) <= a && z + A < ge) -
              (Math.abs(m - r) <= a && !!z);
        if (!L[c]) for (var ee = 0; ee <= c; ee++) L[ee] || (L[ee] = {});
        (L[c].vx != ve || L[c].vy != W || L[c].el !== v) &&
          ((L[c].el = v),
          (L[c].vx = ve),
          (L[c].vy = W),
          clearInterval(L[c].pid),
          (ve != 0 || W != 0) &&
            ((u = !0),
            (L[c].pid = setInterval(
              function () {
                o && this.layer === 0 && _.active._onTouchMove(Qt);
                var be = L[this.layer].vy ? L[this.layer].vy * l : 0,
                  V = L[this.layer].vx ? L[this.layer].vx * l : 0;
                (typeof d == "function" &&
                  d.call(
                    _.dragged.parentNode[de],
                    V,
                    be,
                    t,
                    Qt,
                    L[this.layer].el
                  ) !== "continue") ||
                  Io(L[this.layer].el, V, be);
              }.bind({ layer: c }),
              24
            )))),
          c++;
      } while (e.bubbleScroll && p !== s && (p = Le(p, !1)));
      Fn = u;
    }
  }, 30),
  Fo = function (e) {
    var n = e.originalEvent,
      o = e.putSortable,
      i = e.dragEl,
      r = e.activeSortable,
      a = e.dispatchSortableEvent,
      l = e.hideGhostForTarget,
      s = e.unhideGhostForTarget;
    if (!!n) {
      var u = o || r;
      l();
      var d =
          n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n,
        c = document.elementFromPoint(d.clientX, d.clientY);
      s(),
        u &&
          !u.el.contains(c) &&
          (a("spill"), this.onSpill({ dragEl: i, putSortable: o }));
    }
  };
function Hn() {}
Hn.prototype = {
  startIndex: null,
  dragStart: function (e) {
    var n = e.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function (e) {
    var n = e.dragEl,
      o = e.putSortable;
    this.sortable.captureAnimationState(), o && o.captureAnimationState();
    var i = rt(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(n, i) : this.sortable.el.appendChild(n),
      this.sortable.animateAll(),
      o && o.animateAll();
  },
  drop: Fo
};
Ne(Hn, { pluginName: "revertOnSpill" });
function Wn() {}
Wn.prototype = {
  onSpill: function (e) {
    var n = e.dragEl,
      o = e.putSortable,
      i = o || this.sortable;
    i.captureAnimationState(),
      n.parentNode && n.parentNode.removeChild(n),
      i.animateAll();
  },
  drop: Fo
};
Ne(Wn, { pluginName: "removeOnSpill" });
_.mount(new Ri());
_.mount(Wn, Hn);
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */ function ao(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e &&
      (o = o.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      n.push.apply(n, o);
  }
  return n;
}
function Oe(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? ao(Object(n), !0).forEach(function (o) {
          Xi(t, o, n[o]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
      : ao(Object(n)).forEach(function (o) {
          Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
        });
  }
  return t;
}
function Wt(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Wt = function (e) {
          return typeof e;
        })
      : (Wt = function (e) {
          return e &&
            typeof Symbol == "function" &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        }),
    Wt(t)
  );
}
function Xi(t, e, n) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (t[e] = n),
    t
  );
}
function $e() {
  return (
    ($e =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
        return t;
      }),
    $e.apply(this, arguments)
  );
}
function Yi(t, e) {
  if (t == null) return {};
  var n = {},
    o = Object.keys(t),
    i,
    r;
  for (r = 0; r < o.length; r++)
    (i = o[r]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
function Li(t, e) {
  if (t == null) return {};
  var n = Yi(t, e),
    o,
    i;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    for (i = 0; i < r.length; i++)
      (o = r[i]),
        !(e.indexOf(o) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(t, o) || (n[o] = t[o]));
  }
  return n;
}
var Bi = "1.14.0";
function Pe(t) {
  if (typeof window < "u" && window.navigator)
    return !!navigator.userAgent.match(t);
}
var Me = Pe(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
  It = Pe(/Edge/i),
  lo = Pe(/firefox/i),
  wt = Pe(/safari/i) && !Pe(/chrome/i) && !Pe(/android/i),
  Mo = Pe(/iP(ad|od|hone)/i),
  Hi = Pe(/chrome/i) && Pe(/android/i),
  ko = { capture: !1, passive: !1 };
function O(t, e, n) {
  t.addEventListener(e, n, !Me && ko);
}
function T(t, e, n) {
  t.removeEventListener(e, n, !Me && ko);
}
function Jt(t, e) {
  if (!!e) {
    if ((e[0] === ">" && (e = e.substring(1)), t))
      try {
        if (t.matches) return t.matches(e);
        if (t.msMatchesSelector) return t.msMatchesSelector(e);
        if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
      } catch {
        return !1;
      }
    return !1;
  }
}
function Wi(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function Se(t, e, n, o) {
  if (t) {
    n = n || document;
    do {
      if (
        (e != null &&
          (e[0] === ">" ? t.parentNode === n && Jt(t, e) : Jt(t, e))) ||
        (o && t === n)
      )
        return t;
      if (t === n) break;
    } while ((t = Wi(t)));
  }
  return null;
}
var so = /\s+/g;
function le(t, e, n) {
  if (t && e)
    if (t.classList) t.classList[n ? "add" : "remove"](e);
    else {
      var o = (" " + t.className + " ")
        .replace(so, " ")
        .replace(" " + e + " ", " ");
      t.className = (o + (n ? " " + e : "")).replace(so, " ");
    }
}
function w(t, e, n) {
  var o = t && t.style;
  if (o) {
    if (n === void 0)
      return (
        document.defaultView && document.defaultView.getComputedStyle
          ? (n = document.defaultView.getComputedStyle(t, ""))
          : t.currentStyle && (n = t.currentStyle),
        e === void 0 ? n : n[e]
      );
    !(e in o) && e.indexOf("webkit") === -1 && (e = "-webkit-" + e),
      (o[e] = n + (typeof n == "string" ? "" : "px"));
  }
}
function it(t, e) {
  var n = "";
  if (typeof t == "string") n = t;
  else
    do {
      var o = w(t, "transform");
      o && o !== "none" && (n = o + " " + n);
    } while (!e && (t = t.parentNode));
  var i =
    window.DOMMatrix ||
    window.WebKitCSSMatrix ||
    window.CSSMatrix ||
    window.MSCSSMatrix;
  return i && new i(n);
}
function Ro(t, e, n) {
  if (t) {
    var o = t.getElementsByTagName(e),
      i = 0,
      r = o.length;
    if (n) for (; i < r; i++) n(o[i], i);
    return o;
  }
  return [];
}
function Ce() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function j(t, e, n, o, i) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var r, a, l, s, u, d, c;
    if (
      (t !== window && t.parentNode && t !== Ce()
        ? ((r = t.getBoundingClientRect()),
          (a = r.top),
          (l = r.left),
          (s = r.bottom),
          (u = r.right),
          (d = r.height),
          (c = r.width))
        : ((a = 0),
          (l = 0),
          (s = window.innerHeight),
          (u = window.innerWidth),
          (d = window.innerHeight),
          (c = window.innerWidth)),
      (e || n) && t !== window && ((i = i || t.parentNode), !Me))
    )
      do
        if (
          i &&
          i.getBoundingClientRect &&
          (w(i, "transform") !== "none" || (n && w(i, "position") !== "static"))
        ) {
          var p = i.getBoundingClientRect();
          (a -= p.top + parseInt(w(i, "border-top-width"))),
            (l -= p.left + parseInt(w(i, "border-left-width"))),
            (s = a + r.height),
            (u = l + r.width);
          break;
        }
      while ((i = i.parentNode));
    if (o && t !== window) {
      var v = it(i || t),
        g = v && v.a,
        m = v && v.d;
      v && ((a /= m), (l /= g), (c /= g), (d /= m), (s = a + d), (u = l + c));
    }
    return { top: a, left: l, bottom: s, right: u, width: c, height: d };
  }
}
function uo(t, e, n) {
  for (var o = Be(t, !0), i = j(t)[e]; o; ) {
    var r = j(o)[n],
      a = void 0;
    if ((n === "top" || n === "left" ? (a = i >= r) : (a = i <= r), !a))
      return o;
    if (o === Ce()) break;
    o = Be(o, !1);
  }
  return !1;
}
function at(t, e, n, o) {
  for (var i = 0, r = 0, a = t.children; r < a.length; ) {
    if (
      a[r].style.display !== "none" &&
      a[r] !== E.ghost &&
      (o || a[r] !== E.dragged) &&
      Se(a[r], n.draggable, t, !1)
    ) {
      if (i === e) return a[r];
      i++;
    }
    r++;
  }
  return null;
}
function Gn(t, e) {
  for (
    var n = t.lastElementChild;
    n && (n === E.ghost || w(n, "display") === "none" || (e && !Jt(n, e)));

  )
    n = n.previousElementSibling;
  return n || null;
}
function pe(t, e) {
  var n = 0;
  if (!t || !t.parentNode) return -1;
  for (; (t = t.previousElementSibling); )
    t.nodeName.toUpperCase() !== "TEMPLATE" &&
      t !== E.clone &&
      (!e || Jt(t, e)) &&
      n++;
  return n;
}
function co(t) {
  var e = 0,
    n = 0,
    o = Ce();
  if (t)
    do {
      var i = it(t),
        r = i.a,
        a = i.d;
      (e += t.scrollLeft * r), (n += t.scrollTop * a);
    } while (t !== o && (t = t.parentNode));
  return [e, n];
}
function Gi(t, e) {
  for (var n in t)
    if (!!t.hasOwnProperty(n)) {
      for (var o in e)
        if (e.hasOwnProperty(o) && e[o] === t[n][o]) return Number(n);
    }
  return -1;
}
function Be(t, e) {
  if (!t || !t.getBoundingClientRect) return Ce();
  var n = t,
    o = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var i = w(n);
      if (
        (n.clientWidth < n.scrollWidth &&
          (i.overflowX == "auto" || i.overflowX == "scroll")) ||
        (n.clientHeight < n.scrollHeight &&
          (i.overflowY == "auto" || i.overflowY == "scroll"))
      ) {
        if (!n.getBoundingClientRect || n === document.body) return Ce();
        if (o || e) return n;
        o = !0;
      }
    }
  while ((n = n.parentNode));
  return Ce();
}
function ji(t, e) {
  if (t && e) for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
  return t;
}
function wn(t, e) {
  return (
    Math.round(t.top) === Math.round(e.top) &&
    Math.round(t.left) === Math.round(e.left) &&
    Math.round(t.height) === Math.round(e.height) &&
    Math.round(t.width) === Math.round(e.width)
  );
}
var Et;
function Xo(t, e) {
  return function () {
    if (!Et) {
      var n = arguments,
        o = this;
      n.length === 1 ? t.call(o, n[0]) : t.apply(o, n),
        (Et = setTimeout(function () {
          Et = void 0;
        }, e));
    }
  };
}
function zi() {
  clearTimeout(Et), (Et = void 0);
}
function Yo(t, e, n) {
  (t.scrollLeft += e), (t.scrollTop += n);
}
function Lo(t) {
  var e = window.Polymer,
    n = window.jQuery || window.Zepto;
  return e && e.dom
    ? e.dom(t).cloneNode(!0)
    : n
    ? n(t).clone(!0)[0]
    : t.cloneNode(!0);
}
var fe = "Sortable" + new Date().getTime();
function Vi() {
  var t = [],
    e;
  return {
    captureAnimationState: function () {
      if (((t = []), !!this.options.animation)) {
        var o = [].slice.call(this.el.children);
        o.forEach(function (i) {
          if (!(w(i, "display") === "none" || i === E.ghost)) {
            t.push({ target: i, rect: j(i) });
            var r = Oe({}, t[t.length - 1].rect);
            if (i.thisAnimationDuration) {
              var a = it(i, !0);
              a && ((r.top -= a.f), (r.left -= a.e));
            }
            i.fromRect = r;
          }
        });
      }
    },
    addAnimationState: function (o) {
      t.push(o);
    },
    removeAnimationState: function (o) {
      t.splice(Gi(t, { target: o }), 1);
    },
    animateAll: function (o) {
      var i = this;
      if (!this.options.animation) {
        clearTimeout(e), typeof o == "function" && o();
        return;
      }
      var r = !1,
        a = 0;
      t.forEach(function (l) {
        var s = 0,
          u = l.target,
          d = u.fromRect,
          c = j(u),
          p = u.prevFromRect,
          v = u.prevToRect,
          g = l.rect,
          m = it(u, !0);
        m && ((c.top -= m.f), (c.left -= m.e)),
          (u.toRect = c),
          u.thisAnimationDuration &&
            wn(p, c) &&
            !wn(d, c) &&
            (g.top - c.top) / (g.left - c.left) ===
              (d.top - c.top) / (d.left - c.left) &&
            (s = qi(g, p, v, i.options)),
          wn(c, d) ||
            ((u.prevFromRect = d),
            (u.prevToRect = c),
            s || (s = i.options.animation),
            i.animate(u, g, c, s)),
          s &&
            ((r = !0),
            (a = Math.max(a, s)),
            clearTimeout(u.animationResetTimer),
            (u.animationResetTimer = setTimeout(function () {
              (u.animationTime = 0),
                (u.prevFromRect = null),
                (u.fromRect = null),
                (u.prevToRect = null),
                (u.thisAnimationDuration = null);
            }, s)),
            (u.thisAnimationDuration = s));
      }),
        clearTimeout(e),
        r
          ? (e = setTimeout(function () {
              typeof o == "function" && o();
            }, a))
          : typeof o == "function" && o(),
        (t = []);
    },
    animate: function (o, i, r, a) {
      if (a) {
        w(o, "transition", ""), w(o, "transform", "");
        var l = it(this.el),
          s = l && l.a,
          u = l && l.d,
          d = (i.left - r.left) / (s || 1),
          c = (i.top - r.top) / (u || 1);
        (o.animatingX = !!d),
          (o.animatingY = !!c),
          w(o, "transform", "translate3d(" + d + "px," + c + "px,0)"),
          (this.forRepaintDummy = Ui(o)),
          w(
            o,
            "transition",
            "transform " +
              a +
              "ms" +
              (this.options.easing ? " " + this.options.easing : "")
          ),
          w(o, "transform", "translate3d(0,0,0)"),
          typeof o.animated == "number" && clearTimeout(o.animated),
          (o.animated = setTimeout(function () {
            w(o, "transition", ""),
              w(o, "transform", ""),
              (o.animated = !1),
              (o.animatingX = !1),
              (o.animatingY = !1);
          }, a));
      }
    }
  };
}
function Ui(t) {
  return t.offsetWidth;
}
function qi(t, e, n, o) {
  return (
    (Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) /
      Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2))) *
    o.animation
  );
}
var Ze = [],
  En = { initializeByDefault: !0 },
  Ot = {
    mount: function (e) {
      for (var n in En) En.hasOwnProperty(n) && !(n in e) && (e[n] = En[n]);
      Ze.forEach(function (o) {
        if (o.pluginName === e.pluginName)
          throw "Sortable: Cannot mount plugin ".concat(
            e.pluginName,
            " more than once"
          );
      }),
        Ze.push(e);
    },
    pluginEvent: function (e, n, o) {
      var i = this;
      (this.eventCanceled = !1),
        (o.cancel = function () {
          i.eventCanceled = !0;
        });
      var r = e + "Global";
      Ze.forEach(function (a) {
        !n[a.pluginName] ||
          (n[a.pluginName][r] && n[a.pluginName][r](Oe({ sortable: n }, o)),
          n.options[a.pluginName] &&
            n[a.pluginName][e] &&
            n[a.pluginName][e](Oe({ sortable: n }, o)));
      });
    },
    initializePlugins: function (e, n, o, i) {
      Ze.forEach(function (l) {
        var s = l.pluginName;
        if (!(!e.options[s] && !l.initializeByDefault)) {
          var u = new l(e, n, e.options);
          (u.sortable = e),
            (u.options = e.options),
            (e[s] = u),
            $e(o, u.defaults);
        }
      });
      for (var r in e.options)
        if (!!e.options.hasOwnProperty(r)) {
          var a = this.modifyOption(e, r, e.options[r]);
          typeof a < "u" && (e.options[r] = a);
        }
    },
    getEventProperties: function (e, n) {
      var o = {};
      return (
        Ze.forEach(function (i) {
          typeof i.eventProperties == "function" &&
            $e(o, i.eventProperties.call(n[i.pluginName], e));
        }),
        o
      );
    },
    modifyOption: function (e, n, o) {
      var i;
      return (
        Ze.forEach(function (r) {
          !e[r.pluginName] ||
            (r.optionListeners &&
              typeof r.optionListeners[n] == "function" &&
              (i = r.optionListeners[n].call(e[r.pluginName], o)));
        }),
        i
      );
    }
  };
function Ki(t) {
  var e = t.sortable,
    n = t.rootEl,
    o = t.name,
    i = t.targetEl,
    r = t.cloneEl,
    a = t.toEl,
    l = t.fromEl,
    s = t.oldIndex,
    u = t.newIndex,
    d = t.oldDraggableIndex,
    c = t.newDraggableIndex,
    p = t.originalEvent,
    v = t.putSortable,
    g = t.extraEventProperties;
  if (((e = e || (n && n[fe])), !!e)) {
    var m,
      $ = e.options,
      H = "on" + o.charAt(0).toUpperCase() + o.substr(1);
    window.CustomEvent && !Me && !It
      ? (m = new CustomEvent(o, { bubbles: !0, cancelable: !0 }))
      : ((m = document.createEvent("Event")), m.initEvent(o, !0, !0)),
      (m.to = a || n),
      (m.from = l || n),
      (m.item = i || n),
      (m.clone = r),
      (m.oldIndex = s),
      (m.newIndex = u),
      (m.oldDraggableIndex = d),
      (m.newDraggableIndex = c),
      (m.originalEvent = p),
      (m.pullMode = v ? v.lastPutMode : void 0);
    var C = Oe(Oe({}, g), Ot.getEventProperties(o, e));
    for (var F in C) m[F] = C[F];
    n && n.dispatchEvent(m), $[H] && $[H].call(e, m);
  }
}
var Zi = ["evt"],
  re = function (e, n) {
    var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i = o.evt,
      r = Li(o, Zi);
    Ot.pluginEvent.bind(E)(
      e,
      n,
      Oe(
        {
          dragEl: h,
          parentEl: R,
          ghostEl: D,
          rootEl: N,
          nextEl: Ve,
          lastDownEl: Gt,
          cloneEl: X,
          cloneHidden: Ye,
          dragStarted: ft,
          putSortable: q,
          activeSortable: E.active,
          originalEvent: i,
          oldIndex: nt,
          oldDraggableIndex: yt,
          newIndex: ue,
          newDraggableIndex: Re,
          hideGhostForTarget: Go,
          unhideGhostForTarget: jo,
          cloneNowHidden: function () {
            Ye = !0;
          },
          cloneNowShown: function () {
            Ye = !1;
          },
          dispatchSortableEvent: function (l) {
            oe({ sortable: n, name: l, originalEvent: i });
          }
        },
        r
      )
    );
  };
function oe(t) {
  Ki(
    Oe(
      {
        putSortable: q,
        cloneEl: X,
        targetEl: h,
        rootEl: N,
        oldIndex: nt,
        oldDraggableIndex: yt,
        newIndex: ue,
        newDraggableIndex: Re
      },
      t
    )
  );
}
var h,
  R,
  D,
  N,
  Ve,
  Gt,
  X,
  Ye,
  nt,
  ue,
  yt,
  Re,
  Ft,
  q,
  et = !1,
  en = !1,
  tn = [],
  Ge,
  Ee,
  yn,
  Dn,
  fo,
  ho,
  ft,
  Qe,
  Dt,
  St = !1,
  Mt = !1,
  jt,
  Z,
  Sn = [],
  Mn = !1,
  nn = [],
  an = typeof document < "u",
  kt = Mo,
  po = It || Me ? "cssFloat" : "float",
  Qi = an && !Hi && !Mo && "draggable" in document.createElement("div"),
  Bo = (function () {
    if (!!an) {
      if (Me) return !1;
      var t = document.createElement("x");
      return (
        (t.style.cssText = "pointer-events:auto"),
        t.style.pointerEvents === "auto"
      );
    }
  })(),
  Ho = function (e, n) {
    var o = w(e),
      i =
        parseInt(o.width) -
        parseInt(o.paddingLeft) -
        parseInt(o.paddingRight) -
        parseInt(o.borderLeftWidth) -
        parseInt(o.borderRightWidth),
      r = at(e, 0, n),
      a = at(e, 1, n),
      l = r && w(r),
      s = a && w(a),
      u = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + j(r).width,
      d = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + j(a).width;
    if (o.display === "flex")
      return o.flexDirection === "column" ||
        o.flexDirection === "column-reverse"
        ? "vertical"
        : "horizontal";
    if (o.display === "grid")
      return o.gridTemplateColumns.split(" ").length <= 1
        ? "vertical"
        : "horizontal";
    if (r && l.float && l.float !== "none") {
      var c = l.float === "left" ? "left" : "right";
      return a && (s.clear === "both" || s.clear === c)
        ? "vertical"
        : "horizontal";
    }
    return r &&
      (l.display === "block" ||
        l.display === "flex" ||
        l.display === "table" ||
        l.display === "grid" ||
        (u >= i && o[po] === "none") ||
        (a && o[po] === "none" && u + d > i))
      ? "vertical"
      : "horizontal";
  },
  Ji = function (e, n, o) {
    var i = o ? e.left : e.top,
      r = o ? e.right : e.bottom,
      a = o ? e.width : e.height,
      l = o ? n.left : n.top,
      s = o ? n.right : n.bottom,
      u = o ? n.width : n.height;
    return i === l || r === s || i + a / 2 === l + u / 2;
  },
  er = function (e, n) {
    var o;
    return (
      tn.some(function (i) {
        var r = i[fe].options.emptyInsertThreshold;
        if (!(!r || Gn(i))) {
          var a = j(i),
            l = e >= a.left - r && e <= a.right + r,
            s = n >= a.top - r && n <= a.bottom + r;
          if (l && s) return (o = i);
        }
      }),
      o
    );
  },
  Wo = function (e) {
    function n(r, a) {
      return function (l, s, u, d) {
        var c =
          l.options.group.name &&
          s.options.group.name &&
          l.options.group.name === s.options.group.name;
        if (r == null && (a || c)) return !0;
        if (r == null || r === !1) return !1;
        if (a && r === "clone") return r;
        if (typeof r == "function") return n(r(l, s, u, d), a)(l, s, u, d);
        var p = (a ? l : s).options.group.name;
        return (
          r === !0 ||
          (typeof r == "string" && r === p) ||
          (r.join && r.indexOf(p) > -1)
        );
      };
    }
    var o = {},
      i = e.group;
    (!i || Wt(i) != "object") && (i = { name: i }),
      (o.name = i.name),
      (o.checkPull = n(i.pull, !0)),
      (o.checkPut = n(i.put)),
      (o.revertClone = i.revertClone),
      (e.group = o);
  },
  Go = function () {
    !Bo && D && w(D, "display", "none");
  },
  jo = function () {
    !Bo && D && w(D, "display", "");
  };
an &&
  document.addEventListener(
    "click",
    function (t) {
      if (en)
        return (
          t.preventDefault(),
          t.stopPropagation && t.stopPropagation(),
          t.stopImmediatePropagation && t.stopImmediatePropagation(),
          (en = !1),
          !1
        );
    },
    !0
  );
var je = function (e) {
    if (h) {
      e = e.touches ? e.touches[0] : e;
      var n = er(e.clientX, e.clientY);
      if (n) {
        var o = {};
        for (var i in e) e.hasOwnProperty(i) && (o[i] = e[i]);
        (o.target = o.rootEl = n),
          (o.preventDefault = void 0),
          (o.stopPropagation = void 0),
          n[fe]._onDragOver(o);
      }
    }
  },
  tr = function (e) {
    h && h.parentNode[fe]._isOutsideThisEl(e.target);
  };
function E(t, e) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat(
      {}.toString.call(t)
    );
  (this.el = t), (this.options = e = $e({}, e)), (t[fe] = this);
  var n = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    invertSwap: !1,
    invertedSwapThreshold: null,
    removeCloneOnHide: !0,
    direction: function () {
      return Ho(t, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function (a, l) {
      a.setData("Text", l.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold:
      (Number.parseInt ? Number : window).parseInt(
        window.devicePixelRatio,
        10
      ) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: { x: 0, y: 0 },
    supportPointer: E.supportPointer !== !1 && "PointerEvent" in window && !wt,
    emptyInsertThreshold: 5
  };
  Ot.initializePlugins(this, t, n);
  for (var o in n) !(o in e) && (e[o] = n[o]);
  Wo(e);
  for (var i in this)
    i.charAt(0) === "_" &&
      typeof this[i] == "function" &&
      (this[i] = this[i].bind(this));
  (this.nativeDraggable = e.forceFallback ? !1 : Qi),
    this.nativeDraggable && (this.options.touchStartThreshold = 1),
    e.supportPointer
      ? O(t, "pointerdown", this._onTapStart)
      : (O(t, "mousedown", this._onTapStart),
        O(t, "touchstart", this._onTapStart)),
    this.nativeDraggable && (O(t, "dragover", this), O(t, "dragenter", this)),
    tn.push(this.el),
    e.store && e.store.get && this.sort(e.store.get(this) || []),
    $e(this, Vi());
}
E.prototype = {
  constructor: E,
  _isOutsideThisEl: function (e) {
    !this.el.contains(e) && e !== this.el && (Qe = null);
  },
  _getDirection: function (e, n) {
    return typeof this.options.direction == "function"
      ? this.options.direction.call(this, e, n, h)
      : this.options.direction;
  },
  _onTapStart: function (e) {
    if (!!e.cancelable) {
      var n = this,
        o = this.el,
        i = this.options,
        r = i.preventOnFilter,
        a = e.type,
        l =
          (e.touches && e.touches[0]) ||
          (e.pointerType && e.pointerType === "touch" && e),
        s = (l || e).target,
        u =
          (e.target.shadowRoot &&
            ((e.path && e.path[0]) ||
              (e.composedPath && e.composedPath()[0]))) ||
          s,
        d = i.filter;
      if (
        (ur(o),
        !h &&
          !(
            (/mousedown|pointerdown/.test(a) && e.button !== 0) ||
            i.disabled
          ) &&
          !u.isContentEditable &&
          !(
            !this.nativeDraggable &&
            wt &&
            s &&
            s.tagName.toUpperCase() === "SELECT"
          ) &&
          ((s = Se(s, i.draggable, o, !1)), !(s && s.animated) && Gt !== s))
      ) {
        if (((nt = pe(s)), (yt = pe(s, i.draggable)), typeof d == "function")) {
          if (d.call(this, e, s, this)) {
            oe({
              sortable: n,
              rootEl: u,
              name: "filter",
              targetEl: s,
              toEl: o,
              fromEl: o
            }),
              re("filter", n, { evt: e }),
              r && e.cancelable && e.preventDefault();
            return;
          }
        } else if (
          d &&
          ((d = d.split(",").some(function (c) {
            if (((c = Se(u, c.trim(), o, !1)), c))
              return (
                oe({
                  sortable: n,
                  rootEl: c,
                  name: "filter",
                  targetEl: s,
                  fromEl: o,
                  toEl: o
                }),
                re("filter", n, { evt: e }),
                !0
              );
          })),
          d)
        ) {
          r && e.cancelable && e.preventDefault();
          return;
        }
        (i.handle && !Se(u, i.handle, o, !1)) ||
          this._prepareDragStart(e, l, s);
      }
    }
  },
  _prepareDragStart: function (e, n, o) {
    var i = this,
      r = i.el,
      a = i.options,
      l = r.ownerDocument,
      s;
    if (o && !h && o.parentNode === r) {
      var u = j(o);
      if (
        ((N = r),
        (h = o),
        (R = h.parentNode),
        (Ve = h.nextSibling),
        (Gt = o),
        (Ft = a.group),
        (E.dragged = h),
        (Ge = {
          target: h,
          clientX: (n || e).clientX,
          clientY: (n || e).clientY
        }),
        (fo = Ge.clientX - u.left),
        (ho = Ge.clientY - u.top),
        (this._lastX = (n || e).clientX),
        (this._lastY = (n || e).clientY),
        (h.style["will-change"] = "all"),
        (s = function () {
          if ((re("delayEnded", i, { evt: e }), E.eventCanceled)) {
            i._onDrop();
            return;
          }
          i._disableDelayedDragEvents(),
            !lo && i.nativeDraggable && (h.draggable = !0),
            i._triggerDragStart(e, n),
            oe({ sortable: i, name: "choose", originalEvent: e }),
            le(h, a.chosenClass, !0);
        }),
        a.ignore.split(",").forEach(function (d) {
          Ro(h, d.trim(), Tn);
        }),
        O(l, "dragover", je),
        O(l, "mousemove", je),
        O(l, "touchmove", je),
        O(l, "mouseup", i._onDrop),
        O(l, "touchend", i._onDrop),
        O(l, "touchcancel", i._onDrop),
        lo &&
          this.nativeDraggable &&
          ((this.options.touchStartThreshold = 4), (h.draggable = !0)),
        re("delayStart", this, { evt: e }),
        a.delay &&
          (!a.delayOnTouchOnly || n) &&
          (!this.nativeDraggable || !(It || Me)))
      ) {
        if (E.eventCanceled) {
          this._onDrop();
          return;
        }
        O(l, "mouseup", i._disableDelayedDrag),
          O(l, "touchend", i._disableDelayedDrag),
          O(l, "touchcancel", i._disableDelayedDrag),
          O(l, "mousemove", i._delayedDragTouchMoveHandler),
          O(l, "touchmove", i._delayedDragTouchMoveHandler),
          a.supportPointer &&
            O(l, "pointermove", i._delayedDragTouchMoveHandler),
          (i._dragStartTimer = setTimeout(s, a.delay));
      } else s();
    }
  },
  _delayedDragTouchMoveHandler: function (e) {
    var n = e.touches ? e.touches[0] : e;
    Math.max(
      Math.abs(n.clientX - this._lastX),
      Math.abs(n.clientY - this._lastY)
    ) >=
      Math.floor(
        this.options.touchStartThreshold /
          ((this.nativeDraggable && window.devicePixelRatio) || 1)
      ) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function () {
    h && Tn(h),
      clearTimeout(this._dragStartTimer),
      this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function () {
    var e = this.el.ownerDocument;
    T(e, "mouseup", this._disableDelayedDrag),
      T(e, "touchend", this._disableDelayedDrag),
      T(e, "touchcancel", this._disableDelayedDrag),
      T(e, "mousemove", this._delayedDragTouchMoveHandler),
      T(e, "touchmove", this._delayedDragTouchMoveHandler),
      T(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function (e, n) {
    (n = n || (e.pointerType == "touch" && e)),
      !this.nativeDraggable || n
        ? this.options.supportPointer
          ? O(document, "pointermove", this._onTouchMove)
          : n
          ? O(document, "touchmove", this._onTouchMove)
          : O(document, "mousemove", this._onTouchMove)
        : (O(h, "dragend", this), O(N, "dragstart", this._onDragStart));
    try {
      document.selection
        ? zt(function () {
            document.selection.empty();
          })
        : window.getSelection().removeAllRanges();
    } catch {}
  },
  _dragStarted: function (e, n) {
    if (((et = !1), N && h)) {
      re("dragStarted", this, { evt: n }),
        this.nativeDraggable && O(document, "dragover", tr);
      var o = this.options;
      !e && le(h, o.dragClass, !1),
        le(h, o.ghostClass, !0),
        (E.active = this),
        e && this._appendGhost(),
        oe({ sortable: this, name: "start", originalEvent: n });
    } else this._nulling();
  },
  _emulateDragOver: function () {
    if (Ee) {
      (this._lastX = Ee.clientX), (this._lastY = Ee.clientY), Go();
      for (
        var e = document.elementFromPoint(Ee.clientX, Ee.clientY), n = e;
        e &&
        e.shadowRoot &&
        ((e = e.shadowRoot.elementFromPoint(Ee.clientX, Ee.clientY)), e !== n);

      )
        n = e;
      if ((h.parentNode[fe]._isOutsideThisEl(e), n))
        do {
          if (n[fe]) {
            var o = void 0;
            if (
              ((o = n[fe]._onDragOver({
                clientX: Ee.clientX,
                clientY: Ee.clientY,
                target: e,
                rootEl: n
              })),
              o && !this.options.dragoverBubble)
            )
              break;
          }
          e = n;
        } while ((n = n.parentNode));
      jo();
    }
  },
  _onTouchMove: function (e) {
    if (Ge) {
      var n = this.options,
        o = n.fallbackTolerance,
        i = n.fallbackOffset,
        r = e.touches ? e.touches[0] : e,
        a = D && it(D, !0),
        l = D && a && a.a,
        s = D && a && a.d,
        u = kt && Z && co(Z),
        d =
          (r.clientX - Ge.clientX + i.x) / (l || 1) +
          (u ? u[0] - Sn[0] : 0) / (l || 1),
        c =
          (r.clientY - Ge.clientY + i.y) / (s || 1) +
          (u ? u[1] - Sn[1] : 0) / (s || 1);
      if (!E.active && !et) {
        if (
          o &&
          Math.max(
            Math.abs(r.clientX - this._lastX),
            Math.abs(r.clientY - this._lastY)
          ) < o
        )
          return;
        this._onDragStart(e, !0);
      }
      if (D) {
        a
          ? ((a.e += d - (yn || 0)), (a.f += c - (Dn || 0)))
          : (a = { a: 1, b: 0, c: 0, d: 1, e: d, f: c });
        var p = "matrix("
          .concat(a.a, ",")
          .concat(a.b, ",")
          .concat(a.c, ",")
          .concat(a.d, ",")
          .concat(a.e, ",")
          .concat(a.f, ")");
        w(D, "webkitTransform", p),
          w(D, "mozTransform", p),
          w(D, "msTransform", p),
          w(D, "transform", p),
          (yn = d),
          (Dn = c),
          (Ee = r);
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function () {
    if (!D) {
      var e = this.options.fallbackOnBody ? document.body : N,
        n = j(h, !0, kt, !0, e),
        o = this.options;
      if (kt) {
        for (
          Z = e;
          w(Z, "position") === "static" &&
          w(Z, "transform") === "none" &&
          Z !== document;

        )
          Z = Z.parentNode;
        Z !== document.body && Z !== document.documentElement
          ? (Z === document && (Z = Ce()),
            (n.top += Z.scrollTop),
            (n.left += Z.scrollLeft))
          : (Z = Ce()),
          (Sn = co(Z));
      }
      (D = h.cloneNode(!0)),
        le(D, o.ghostClass, !1),
        le(D, o.fallbackClass, !0),
        le(D, o.dragClass, !0),
        w(D, "transition", ""),
        w(D, "transform", ""),
        w(D, "box-sizing", "border-box"),
        w(D, "margin", 0),
        w(D, "top", n.top),
        w(D, "left", n.left),
        w(D, "width", n.width),
        w(D, "height", n.height),
        w(D, "opacity", "0.8"),
        w(D, "position", kt ? "absolute" : "fixed"),
        w(D, "zIndex", "100000"),
        w(D, "pointerEvents", "none"),
        (E.ghost = D),
        e.appendChild(D),
        w(
          D,
          "transform-origin",
          (fo / parseInt(D.style.width)) * 100 +
            "% " +
            (ho / parseInt(D.style.height)) * 100 +
            "%"
        );
    }
  },
  _onDragStart: function (e, n) {
    var o = this,
      i = e.dataTransfer,
      r = o.options;
    if ((re("dragStart", this, { evt: e }), E.eventCanceled)) {
      this._onDrop();
      return;
    }
    re("setupClone", this),
      E.eventCanceled ||
        ((X = Lo(h)),
        (X.draggable = !1),
        (X.style["will-change"] = ""),
        this._hideClone(),
        le(X, this.options.chosenClass, !1),
        (E.clone = X)),
      (o.cloneId = zt(function () {
        re("clone", o),
          !E.eventCanceled &&
            (o.options.removeCloneOnHide || N.insertBefore(X, h),
            o._hideClone(),
            oe({ sortable: o, name: "clone" }));
      })),
      !n && le(h, r.dragClass, !0),
      n
        ? ((en = !0), (o._loopId = setInterval(o._emulateDragOver, 50)))
        : (T(document, "mouseup", o._onDrop),
          T(document, "touchend", o._onDrop),
          T(document, "touchcancel", o._onDrop),
          i &&
            ((i.effectAllowed = "move"), r.setData && r.setData.call(o, i, h)),
          O(document, "drop", o),
          w(h, "transform", "translateZ(0)")),
      (et = !0),
      (o._dragStartId = zt(o._dragStarted.bind(o, n, e))),
      O(document, "selectstart", o),
      (ft = !0),
      wt && w(document.body, "user-select", "none");
  },
  _onDragOver: function (e) {
    var n = this.el,
      o = e.target,
      i,
      r,
      a,
      l = this.options,
      s = l.group,
      u = E.active,
      d = Ft === s,
      c = l.sort,
      p = q || u,
      v,
      g = this,
      m = !1;
    if (Mn) return;
    function $(_e, ln) {
      re(
        _e,
        g,
        Oe(
          {
            evt: e,
            isOwner: d,
            axis: v ? "vertical" : "horizontal",
            revert: a,
            dragRect: i,
            targetRect: r,
            canSort: c,
            fromSortable: p,
            target: o,
            completed: C,
            onMove: function (lt, sn) {
              return Rt(N, n, h, i, lt, j(lt), e, sn);
            },
            changed: F
          },
          ln
        )
      );
    }
    function H() {
      $("dragOverAnimationCapture"),
        g.captureAnimationState(),
        g !== p && p.captureAnimationState();
    }
    function C(_e) {
      return (
        $("dragOverCompleted", { insertion: _e }),
        _e &&
          (d ? u._hideClone() : u._showClone(g),
          g !== p &&
            (le(h, q ? q.options.ghostClass : u.options.ghostClass, !1),
            le(h, l.ghostClass, !0)),
          q !== g && g !== E.active
            ? (q = g)
            : g === E.active && q && (q = null),
          p === g && (g._ignoreWhileAnimating = o),
          g.animateAll(function () {
            $("dragOverAnimationComplete"), (g._ignoreWhileAnimating = null);
          }),
          g !== p && (p.animateAll(), (p._ignoreWhileAnimating = null))),
        ((o === h && !h.animated) || (o === n && !o.animated)) && (Qe = null),
        !l.dragoverBubble &&
          !e.rootEl &&
          o !== document &&
          (h.parentNode[fe]._isOutsideThisEl(e.target), !_e && je(e)),
        !l.dragoverBubble && e.stopPropagation && e.stopPropagation(),
        (m = !0)
      );
    }
    function F() {
      (ue = pe(h)),
        (Re = pe(h, l.draggable)),
        oe({
          sortable: g,
          name: "change",
          toEl: n,
          newIndex: ue,
          newDraggableIndex: Re,
          originalEvent: e
        });
    }
    if (
      (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(),
      (o = Se(o, l.draggable, n, !0)),
      $("dragOver"),
      E.eventCanceled)
    )
      return m;
    if (
      h.contains(e.target) ||
      (o.animated && o.animatingX && o.animatingY) ||
      g._ignoreWhileAnimating === o
    )
      return C(!1);
    if (
      ((en = !1),
      u &&
        !l.disabled &&
        (d
          ? c || (a = R !== N)
          : q === this ||
            ((this.lastPutMode = Ft.checkPull(this, u, h, e)) &&
              s.checkPut(this, u, h, e))))
    ) {
      if (
        ((v = this._getDirection(e, o) === "vertical"),
        (i = j(h)),
        $("dragOverValid"),
        E.eventCanceled)
      )
        return m;
      if (a)
        return (
          (R = N),
          H(),
          this._hideClone(),
          $("revert"),
          E.eventCanceled || (Ve ? N.insertBefore(h, Ve) : N.appendChild(h)),
          C(!0)
        );
      var A = Gn(n, l.draggable);
      if (!A || (rr(e, v, this) && !A.animated)) {
        if (A === h) return C(!1);
        if (
          (A && n === e.target && (o = A),
          o && (r = j(o)),
          Rt(N, n, h, i, o, r, e, !!o) !== !1)
        )
          return H(), n.appendChild(h), (R = n), F(), C(!0);
      } else if (A && ir(e, v, this)) {
        var Q = at(n, 0, l, !0);
        if (Q === h) return C(!1);
        if (((o = Q), (r = j(o)), Rt(N, n, h, i, o, r, e, !1) !== !1))
          return H(), n.insertBefore(h, Q), (R = n), F(), C(!0);
      } else if (o.parentNode === n) {
        r = j(o);
        var Y = 0,
          J,
          ge = h.parentNode !== n,
          x = !Ji(
            (h.animated && h.toRect) || i,
            (o.animated && o.toRect) || r,
            v
          ),
          me = v ? "top" : "left",
          z = uo(o, "top", "top") || uo(h, "top", "top"),
          ve = z ? z.scrollTop : void 0;
        Qe !== o && ((J = r[me]), (St = !1), (Mt = (!x && l.invertSwap) || ge)),
          (Y = ar(
            e,
            o,
            r,
            v,
            x ? 1 : l.swapThreshold,
            l.invertedSwapThreshold == null
              ? l.swapThreshold
              : l.invertedSwapThreshold,
            Mt,
            Qe === o
          ));
        var W;
        if (Y !== 0) {
          var ee = pe(h);
          do (ee -= Y), (W = R.children[ee]);
          while (W && (w(W, "display") === "none" || W === D));
        }
        if (Y === 0 || W === o) return C(!1);
        (Qe = o), (Dt = Y);
        var be = o.nextElementSibling,
          V = !1;
        V = Y === 1;
        var xe = Rt(N, n, h, i, o, r, e, V);
        if (xe !== !1)
          return (
            (xe === 1 || xe === -1) && (V = xe === 1),
            (Mn = !0),
            setTimeout(or, 30),
            H(),
            V && !be
              ? n.appendChild(h)
              : o.parentNode.insertBefore(h, V ? be : o),
            z && Yo(z, 0, ve - z.scrollTop),
            (R = h.parentNode),
            J !== void 0 && !Mt && (jt = Math.abs(J - j(o)[me])),
            F(),
            C(!0)
          );
      }
      if (n.contains(h)) return C(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function () {
    T(document, "mousemove", this._onTouchMove),
      T(document, "touchmove", this._onTouchMove),
      T(document, "pointermove", this._onTouchMove),
      T(document, "dragover", je),
      T(document, "mousemove", je),
      T(document, "touchmove", je);
  },
  _offUpEvents: function () {
    var e = this.el.ownerDocument;
    T(e, "mouseup", this._onDrop),
      T(e, "touchend", this._onDrop),
      T(e, "pointerup", this._onDrop),
      T(e, "touchcancel", this._onDrop),
      T(document, "selectstart", this);
  },
  _onDrop: function (e) {
    var n = this.el,
      o = this.options;
    if (
      ((ue = pe(h)),
      (Re = pe(h, o.draggable)),
      re("drop", this, { evt: e }),
      (R = h && h.parentNode),
      (ue = pe(h)),
      (Re = pe(h, o.draggable)),
      E.eventCanceled)
    ) {
      this._nulling();
      return;
    }
    (et = !1),
      (Mt = !1),
      (St = !1),
      clearInterval(this._loopId),
      clearTimeout(this._dragStartTimer),
      kn(this.cloneId),
      kn(this._dragStartId),
      this.nativeDraggable &&
        (T(document, "drop", this), T(n, "dragstart", this._onDragStart)),
      this._offMoveEvents(),
      this._offUpEvents(),
      wt && w(document.body, "user-select", ""),
      w(h, "transform", ""),
      e &&
        (ft &&
          (e.cancelable && e.preventDefault(),
          !o.dropBubble && e.stopPropagation()),
        D && D.parentNode && D.parentNode.removeChild(D),
        (N === R || (q && q.lastPutMode !== "clone")) &&
          X &&
          X.parentNode &&
          X.parentNode.removeChild(X),
        h &&
          (this.nativeDraggable && T(h, "dragend", this),
          Tn(h),
          (h.style["will-change"] = ""),
          ft &&
            !et &&
            le(h, q ? q.options.ghostClass : this.options.ghostClass, !1),
          le(h, this.options.chosenClass, !1),
          oe({
            sortable: this,
            name: "unchoose",
            toEl: R,
            newIndex: null,
            newDraggableIndex: null,
            originalEvent: e
          }),
          N !== R
            ? (ue >= 0 &&
                (oe({
                  rootEl: R,
                  name: "add",
                  toEl: R,
                  fromEl: N,
                  originalEvent: e
                }),
                oe({
                  sortable: this,
                  name: "remove",
                  toEl: R,
                  originalEvent: e
                }),
                oe({
                  rootEl: R,
                  name: "sort",
                  toEl: R,
                  fromEl: N,
                  originalEvent: e
                }),
                oe({
                  sortable: this,
                  name: "sort",
                  toEl: R,
                  originalEvent: e
                })),
              q && q.save())
            : ue !== nt &&
              ue >= 0 &&
              (oe({
                sortable: this,
                name: "update",
                toEl: R,
                originalEvent: e
              }),
              oe({ sortable: this, name: "sort", toEl: R, originalEvent: e })),
          E.active &&
            ((ue == null || ue === -1) && ((ue = nt), (Re = yt)),
            oe({ sortable: this, name: "end", toEl: R, originalEvent: e }),
            this.save()))),
      this._nulling();
  },
  _nulling: function () {
    re("nulling", this),
      (N =
        h =
        R =
        D =
        Ve =
        X =
        Gt =
        Ye =
        Ge =
        Ee =
        ft =
        ue =
        Re =
        nt =
        yt =
        Qe =
        Dt =
        q =
        Ft =
        E.dragged =
        E.ghost =
        E.clone =
        E.active =
          null),
      nn.forEach(function (e) {
        e.checked = !0;
      }),
      (nn.length = yn = Dn = 0);
  },
  handleEvent: function (e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        h && (this._onDragOver(e), nr(e));
        break;
      case "selectstart":
        e.preventDefault();
        break;
    }
  },
  toArray: function () {
    for (
      var e = [],
        n,
        o = this.el.children,
        i = 0,
        r = o.length,
        a = this.options;
      i < r;
      i++
    )
      (n = o[i]),
        Se(n, a.draggable, this.el, !1) &&
          e.push(n.getAttribute(a.dataIdAttr) || sr(n));
    return e;
  },
  sort: function (e, n) {
    var o = {},
      i = this.el;
    this.toArray().forEach(function (r, a) {
      var l = i.children[a];
      Se(l, this.options.draggable, i, !1) && (o[r] = l);
    }, this),
      n && this.captureAnimationState(),
      e.forEach(function (r) {
        o[r] && (i.removeChild(o[r]), i.appendChild(o[r]));
      }),
      n && this.animateAll();
  },
  save: function () {
    var e = this.options.store;
    e && e.set && e.set(this);
  },
  closest: function (e, n) {
    return Se(e, n || this.options.draggable, this.el, !1);
  },
  option: function (e, n) {
    var o = this.options;
    if (n === void 0) return o[e];
    var i = Ot.modifyOption(this, e, n);
    typeof i < "u" ? (o[e] = i) : (o[e] = n), e === "group" && Wo(o);
  },
  destroy: function () {
    re("destroy", this);
    var e = this.el;
    (e[fe] = null),
      T(e, "mousedown", this._onTapStart),
      T(e, "touchstart", this._onTapStart),
      T(e, "pointerdown", this._onTapStart),
      this.nativeDraggable && (T(e, "dragover", this), T(e, "dragenter", this)),
      Array.prototype.forEach.call(
        e.querySelectorAll("[draggable]"),
        function (n) {
          n.removeAttribute("draggable");
        }
      ),
      this._onDrop(),
      this._disableDelayedDragEvents(),
      tn.splice(tn.indexOf(this.el), 1),
      (this.el = e = null);
  },
  _hideClone: function () {
    if (!Ye) {
      if ((re("hideClone", this), E.eventCanceled)) return;
      w(X, "display", "none"),
        this.options.removeCloneOnHide &&
          X.parentNode &&
          X.parentNode.removeChild(X),
        (Ye = !0);
    }
  },
  _showClone: function (e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Ye) {
      if ((re("showClone", this), E.eventCanceled)) return;
      h.parentNode == N && !this.options.group.revertClone
        ? N.insertBefore(X, h)
        : Ve
        ? N.insertBefore(X, Ve)
        : N.appendChild(X),
        this.options.group.revertClone && this.animate(h, X),
        w(X, "display", ""),
        (Ye = !1);
    }
  }
};
function nr(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"),
    t.cancelable && t.preventDefault();
}
function Rt(t, e, n, o, i, r, a, l) {
  var s,
    u = t[fe],
    d = u.options.onMove,
    c;
  return (
    window.CustomEvent && !Me && !It
      ? (s = new CustomEvent("move", { bubbles: !0, cancelable: !0 }))
      : ((s = document.createEvent("Event")), s.initEvent("move", !0, !0)),
    (s.to = e),
    (s.from = t),
    (s.dragged = n),
    (s.draggedRect = o),
    (s.related = i || e),
    (s.relatedRect = r || j(e)),
    (s.willInsertAfter = l),
    (s.originalEvent = a),
    t.dispatchEvent(s),
    d && (c = d.call(u, s, a)),
    c
  );
}
function Tn(t) {
  t.draggable = !1;
}
function or() {
  Mn = !1;
}
function ir(t, e, n) {
  var o = j(at(n.el, 0, n.options, !0)),
    i = 10;
  return e
    ? t.clientX < o.left - i || (t.clientY < o.top && t.clientX < o.right)
    : t.clientY < o.top - i || (t.clientY < o.bottom && t.clientX < o.left);
}
function rr(t, e, n) {
  var o = j(Gn(n.el, n.options.draggable)),
    i = 10;
  return e
    ? t.clientX > o.right + i ||
        (t.clientX <= o.right && t.clientY > o.bottom && t.clientX >= o.left)
    : (t.clientX > o.right && t.clientY > o.top) ||
        (t.clientX <= o.right && t.clientY > o.bottom + i);
}
function ar(t, e, n, o, i, r, a, l) {
  var s = o ? t.clientY : t.clientX,
    u = o ? n.height : n.width,
    d = o ? n.top : n.left,
    c = o ? n.bottom : n.right,
    p = !1;
  if (!a) {
    if (l && jt < u * i) {
      if (
        (!St &&
          (Dt === 1 ? s > d + (u * r) / 2 : s < c - (u * r) / 2) &&
          (St = !0),
        St)
      )
        p = !0;
      else if (Dt === 1 ? s < d + jt : s > c - jt) return -Dt;
    } else if (s > d + (u * (1 - i)) / 2 && s < c - (u * (1 - i)) / 2)
      return lr(e);
  }
  return (
    (p = p || a),
    p && (s < d + (u * r) / 2 || s > c - (u * r) / 2)
      ? s > d + u / 2
        ? 1
        : -1
      : 0
  );
}
function lr(t) {
  return pe(h) < pe(t) ? 1 : -1;
}
function sr(t) {
  for (
    var e = t.tagName + t.className + t.src + t.href + t.textContent,
      n = e.length,
      o = 0;
    n--;

  )
    o += e.charCodeAt(n);
  return o.toString(36);
}
function ur(t) {
  nn.length = 0;
  for (var e = t.getElementsByTagName("input"), n = e.length; n--; ) {
    var o = e[n];
    o.checked && nn.push(o);
  }
}
function zt(t) {
  return setTimeout(t, 0);
}
function kn(t) {
  return clearTimeout(t);
}
an &&
  O(document, "touchmove", function (t) {
    (E.active || et) && t.cancelable && t.preventDefault();
  });
E.utils = {
  on: O,
  off: T,
  css: w,
  find: Ro,
  is: function (e, n) {
    return !!Se(e, n, e, !1);
  },
  extend: ji,
  throttle: Xo,
  closest: Se,
  toggleClass: le,
  clone: Lo,
  index: pe,
  nextTick: zt,
  cancelNextTick: kn,
  detectDirection: Ho,
  getChild: at
};
E.get = function (t) {
  return t[fe];
};
E.mount = function () {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  e[0].constructor === Array && (e = e[0]),
    e.forEach(function (o) {
      if (!o.prototype || !o.prototype.constructor)
        throw "Sortable: Mounted plugin must be a constructor function, not ".concat(
          {}.toString.call(o)
        );
      o.utils && (E.utils = Oe(Oe({}, E.utils), o.utils)), Ot.mount(o);
    });
};
E.create = function (t, e) {
  return new E(t, e);
};
E.version = Bi;
var B = [],
  ht,
  Rn,
  Xn = !1,
  Cn,
  In,
  on,
  pt;
function cr() {
  function t() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var e in this)
      e.charAt(0) === "_" &&
        typeof this[e] == "function" &&
        (this[e] = this[e].bind(this));
  }
  return (
    (t.prototype = {
      dragStarted: function (n) {
        var o = n.originalEvent;
        this.sortable.nativeDraggable
          ? O(document, "dragover", this._handleAutoScroll)
          : this.options.supportPointer
          ? O(document, "pointermove", this._handleFallbackAutoScroll)
          : o.touches
          ? O(document, "touchmove", this._handleFallbackAutoScroll)
          : O(document, "mousemove", this._handleFallbackAutoScroll);
      },
      dragOverCompleted: function (n) {
        var o = n.originalEvent;
        !this.options.dragOverBubble && !o.rootEl && this._handleAutoScroll(o);
      },
      drop: function () {
        this.sortable.nativeDraggable
          ? T(document, "dragover", this._handleAutoScroll)
          : (T(document, "pointermove", this._handleFallbackAutoScroll),
            T(document, "touchmove", this._handleFallbackAutoScroll),
            T(document, "mousemove", this._handleFallbackAutoScroll)),
          go(),
          Vt(),
          zi();
      },
      nulling: function () {
        (on = Rn = ht = Xn = pt = Cn = In = null), (B.length = 0);
      },
      _handleFallbackAutoScroll: function (n) {
        this._handleAutoScroll(n, !0);
      },
      _handleAutoScroll: function (n, o) {
        var i = this,
          r = (n.touches ? n.touches[0] : n).clientX,
          a = (n.touches ? n.touches[0] : n).clientY,
          l = document.elementFromPoint(r, a);
        if (
          ((on = n),
          o || this.options.forceAutoScrollFallback || It || Me || wt)
        ) {
          On(n, this.options, l, o);
          var s = Be(l, !0);
          Xn &&
            (!pt || r !== Cn || a !== In) &&
            (pt && go(),
            (pt = setInterval(function () {
              var u = Be(document.elementFromPoint(r, a), !0);
              u !== s && ((s = u), Vt()), On(n, i.options, u, o);
            }, 10)),
            (Cn = r),
            (In = a));
        } else {
          if (!this.options.bubbleScroll || Be(l, !0) === Ce()) {
            Vt();
            return;
          }
          On(n, this.options, Be(l, !1), !1);
        }
      }
    }),
    $e(t, { pluginName: "scroll", initializeByDefault: !0 })
  );
}
function Vt() {
  B.forEach(function (t) {
    clearInterval(t.pid);
  }),
    (B = []);
}
function go() {
  clearInterval(pt);
}
var On = Xo(function (t, e, n, o) {
    if (!!e.scroll) {
      var i = (t.touches ? t.touches[0] : t).clientX,
        r = (t.touches ? t.touches[0] : t).clientY,
        a = e.scrollSensitivity,
        l = e.scrollSpeed,
        s = Ce(),
        u = !1,
        d;
      Rn !== n &&
        ((Rn = n),
        Vt(),
        (ht = e.scroll),
        (d = e.scrollFn),
        ht === !0 && (ht = Be(n, !0)));
      var c = 0,
        p = ht;
      do {
        var v = p,
          g = j(v),
          m = g.top,
          $ = g.bottom,
          H = g.left,
          C = g.right,
          F = g.width,
          A = g.height,
          Q = void 0,
          Y = void 0,
          J = v.scrollWidth,
          ge = v.scrollHeight,
          x = w(v),
          me = v.scrollLeft,
          z = v.scrollTop;
        v === s
          ? ((Q =
              F < J &&
              (x.overflowX === "auto" ||
                x.overflowX === "scroll" ||
                x.overflowX === "visible")),
            (Y =
              A < ge &&
              (x.overflowY === "auto" ||
                x.overflowY === "scroll" ||
                x.overflowY === "visible")))
          : ((Q =
              F < J && (x.overflowX === "auto" || x.overflowX === "scroll")),
            (Y =
              A < ge && (x.overflowY === "auto" || x.overflowY === "scroll")));
        var ve =
            Q &&
            (Math.abs(C - i) <= a && me + F < J) -
              (Math.abs(H - i) <= a && !!me),
          W =
            Y &&
            (Math.abs($ - r) <= a && z + A < ge) -
              (Math.abs(m - r) <= a && !!z);
        if (!B[c]) for (var ee = 0; ee <= c; ee++) B[ee] || (B[ee] = {});
        (B[c].vx != ve || B[c].vy != W || B[c].el !== v) &&
          ((B[c].el = v),
          (B[c].vx = ve),
          (B[c].vy = W),
          clearInterval(B[c].pid),
          (ve != 0 || W != 0) &&
            ((u = !0),
            (B[c].pid = setInterval(
              function () {
                o && this.layer === 0 && E.active._onTouchMove(on);
                var be = B[this.layer].vy ? B[this.layer].vy * l : 0,
                  V = B[this.layer].vx ? B[this.layer].vx * l : 0;
                (typeof d == "function" &&
                  d.call(
                    E.dragged.parentNode[fe],
                    V,
                    be,
                    t,
                    on,
                    B[this.layer].el
                  ) !== "continue") ||
                  Yo(B[this.layer].el, V, be);
              }.bind({ layer: c }),
              24
            )))),
          c++;
      } while (e.bubbleScroll && p !== s && (p = Be(p, !1)));
      Xn = u;
    }
  }, 30),
  zo = function (e) {
    var n = e.originalEvent,
      o = e.putSortable,
      i = e.dragEl,
      r = e.activeSortable,
      a = e.dispatchSortableEvent,
      l = e.hideGhostForTarget,
      s = e.unhideGhostForTarget;
    if (!!n) {
      var u = o || r;
      l();
      var d =
          n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n,
        c = document.elementFromPoint(d.clientX, d.clientY);
      s(),
        u &&
          !u.el.contains(c) &&
          (a("spill"), this.onSpill({ dragEl: i, putSortable: o }));
    }
  };
function jn() {}
jn.prototype = {
  startIndex: null,
  dragStart: function (e) {
    var n = e.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function (e) {
    var n = e.dragEl,
      o = e.putSortable;
    this.sortable.captureAnimationState(), o && o.captureAnimationState();
    var i = at(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(n, i) : this.sortable.el.appendChild(n),
      this.sortable.animateAll(),
      o && o.animateAll();
  },
  drop: zo
};
$e(jn, { pluginName: "revertOnSpill" });
function zn() {}
zn.prototype = {
  onSpill: function (e) {
    var n = e.dragEl,
      o = e.putSortable,
      i = o || this.sortable;
    i.captureAnimationState(),
      n.parentNode && n.parentNode.removeChild(n),
      i.animateAll();
  },
  drop: zo
};
$e(zn, { pluginName: "removeOnSpill" });
E.mount(new cr());
E.mount(zn, jn);
function xn(t) {
  t.parentElement !== null && t.parentElement.removeChild(t);
}
function mo(t, e, n) {
  const o = n === 0 ? t.children[0] : t.children[n - 1].nextSibling;
  t.insertBefore(e, o);
}
function dr() {
  return typeof window < "u" ? window.console : global.console;
}
const fr = dr();
function hr(t) {
  const e = Object.create(null);
  return function (o) {
    return e[o] || (e[o] = t(o));
  };
}
const pr = /-(\w)/g,
  gr = hr(t => t.replace(pr, (e, n) => n.toUpperCase())),
  Vo = ["Start", "Add", "Remove", "Update", "End"],
  Uo = ["Choose", "Unchoose", "Sort", "Filter", "Clone"],
  qo = ["Move"],
  mr = [qo, Vo, Uo].flatMap(t => t).map(t => `on${t}`),
  Yn = { manage: qo, manageAndEmit: Vo, emit: Uo };
function vr(t) {
  return mr.indexOf(t) !== -1;
}
const br = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];
function _r(t) {
  return br.includes(t);
}
function wr(t) {
  return ["transition-group", "TransitionGroup"].includes(t);
}
function Ko(t) {
  return (
    ["id", "class", "role", "style"].includes(t) ||
    t.startsWith("data-") ||
    t.startsWith("aria-") ||
    t.startsWith("on")
  );
}
function Zo(t) {
  return t.reduce((e, [n, o]) => ((e[n] = o), e), {});
}
function Er({ $attrs: t, componentData: e = {} }) {
  return { ...Zo(Object.entries(t).filter(([o, i]) => Ko(o))), ...e };
}
function yr({ $attrs: t, callBackBuilder: e }) {
  const n = Zo(Qo(t));
  Object.entries(e).forEach(([i, r]) => {
    Yn[i].forEach(a => {
      n[`on${a}`] = r(a);
    });
  });
  const o = `[data-draggable]${n.draggable || ""}`;
  return { ...n, draggable: o };
}
function Qo(t) {
  return Object.entries(t)
    .filter(([e, n]) => !Ko(e))
    .map(([e, n]) => [gr(e), n])
    .filter(([e, n]) => !vr(e));
}
const vo = ({ el: t }) => t,
  Dr = (t, e) => (t.__draggable_context = e),
  bo = t => t.__draggable_context;
class Sr {
  constructor({
    nodes: { header: e, default: n, footer: o },
    root: i,
    realList: r
  }) {
    (this.defaultNodes = n),
      (this.children = [...e, ...n, ...o]),
      (this.externalComponent = i.externalComponent),
      (this.rootTransition = i.transition),
      (this.tag = i.tag),
      (this.realList = r);
  }
  get _isRootComponent() {
    return this.externalComponent || this.rootTransition;
  }
  render(e, n) {
    const { tag: o, children: i, _isRootComponent: r } = this;
    return e(o, n, r ? { default: () => i } : i);
  }
  updated() {
    const { defaultNodes: e, realList: n } = this;
    e.forEach((o, i) => {
      Dr(vo(o), { element: n[i], index: i });
    });
  }
  getUnderlyingVm(e) {
    return bo(e);
  }
  getVmIndexFromDomIndex(e, n) {
    const { defaultNodes: o } = this,
      { length: i } = o,
      r = n.children,
      a = r.item(e);
    if (a === null) return i;
    const l = bo(a);
    if (l) return l.index;
    if (i === 0) return 0;
    const s = vo(o[0]),
      u = [...r].findIndex(d => d === s);
    return e < u ? 0 : i;
  }
}
function Tr(t, e) {
  const n = t[e];
  return n ? n() : [];
}
function Cr({ $slots: t, realList: e, getKey: n }) {
  const o = e || [],
    [i, r] = ["header", "footer"].map(s => Tr(t, s)),
    { item: a } = t;
  if (!a) throw new Error("draggable element must have an item slot");
  const l = o.flatMap((s, u) =>
    a({ element: s, index: u }).map(
      d => (
        (d.key = n(s)),
        (d.props = { ...(d.props || {}), "data-draggable": !0 }),
        d
      )
    )
  );
  if (l.length !== o.length)
    throw new Error("Item slot must have only one child");
  return { header: i, footer: r, default: l };
}
function Ir(t) {
  const e = wr(t),
    n = !_r(t) && !e;
  return { transition: e, externalComponent: n, tag: n ? st(t) : e ? ni : t };
}
function Or({ $slots: t, tag: e, realList: n, getKey: o }) {
  const i = Cr({ $slots: t, realList: n, getKey: o }),
    r = Ir(e);
  return new Sr({ nodes: i, root: r, realList: n });
}
function Jo(t, e) {
  wo(() => this.$emit(t.toLowerCase(), e));
}
function ei(t) {
  return (e, n) => {
    if (this.realList !== null) return this[`onDrag${t}`](e, n);
  };
}
function xr(t) {
  const e = ei.call(this, t);
  return (n, o) => {
    e.call(this, n, o), Jo.call(this, t, n);
  };
}
let An = null;
const Ar = {
    list: { type: Array, required: !1, default: null },
    modelValue: { type: Array, required: !1, default: null },
    itemKey: { type: [String, Function], required: !0 },
    clone: { type: Function, default: t => t },
    tag: { type: String, default: "div" },
    move: { type: Function, default: null },
    componentData: { type: Object, required: !1, default: null }
  },
  Pr = [
    "update:modelValue",
    "change",
    ...[...Yn.manageAndEmit, ...Yn.emit].map(t => t.toLowerCase())
  ],
  Nr = Ln({
    name: "draggable",
    inheritAttrs: !1,
    props: Ar,
    emits: Pr,
    data() {
      return { error: !1 };
    },
    render() {
      try {
        this.error = !1;
        const {
            $slots: t,
            $attrs: e,
            tag: n,
            componentData: o,
            realList: i,
            getKey: r
          } = this,
          a = Or({ $slots: t, tag: n, realList: i, getKey: r });
        this.componentStructure = a;
        const l = Er({ $attrs: e, componentData: o });
        return a.render(Un, l);
      } catch (t) {
        return (
          (this.error = !0), Un("pre", { style: { color: "red" } }, t.stack)
        );
      }
    },
    created() {
      this.list !== null &&
        this.modelValue !== null &&
        fr.error(
          "modelValue and list props are mutually exclusive! Please set one or another."
        );
    },
    mounted() {
      if (this.error) return;
      const { $attrs: t, $el: e, componentStructure: n } = this;
      n.updated();
      const o = yr({
          $attrs: t,
          callBackBuilder: {
            manageAndEmit: r => xr.call(this, r),
            emit: r => Jo.bind(this, r),
            manage: r => ei.call(this, r)
          }
        }),
        i = e.nodeType === 1 ? e : e.parentElement;
      (this._sortable = new E(i, o)),
        (this.targetDomElement = i),
        (i.__draggable_component__ = this);
    },
    updated() {
      this.componentStructure.updated();
    },
    beforeUnmount() {
      this._sortable !== void 0 && this._sortable.destroy();
    },
    computed: {
      realList() {
        const { list: t } = this;
        return t || this.modelValue;
      },
      getKey() {
        const { itemKey: t } = this;
        return typeof t == "function" ? t : e => e[t];
      }
    },
    watch: {
      $attrs: {
        handler(t) {
          const { _sortable: e } = this;
          !e ||
            Qo(t).forEach(([n, o]) => {
              e.option(n, o);
            });
        },
        deep: !0
      }
    },
    methods: {
      getUnderlyingVm(t) {
        return this.componentStructure.getUnderlyingVm(t) || null;
      },
      getUnderlyingPotencialDraggableComponent(t) {
        return t.__draggable_component__;
      },
      emitChanges(t) {
        wo(() => this.$emit("change", t));
      },
      alterList(t) {
        if (this.list) {
          t(this.list);
          return;
        }
        const e = [...this.modelValue];
        t(e), this.$emit("update:modelValue", e);
      },
      spliceList() {
        const t = e => e.splice(...arguments);
        this.alterList(t);
      },
      updatePosition(t, e) {
        const n = o => o.splice(e, 0, o.splice(t, 1)[0]);
        this.alterList(n);
      },
      getRelatedContextFromMoveEvent({ to: t, related: e }) {
        const n = this.getUnderlyingPotencialDraggableComponent(t);
        if (!n) return { component: n };
        const o = n.realList,
          i = { list: o, component: n };
        return t !== e && o ? { ...(n.getUnderlyingVm(e) || {}), ...i } : i;
      },
      getVmIndexFromDomIndex(t) {
        return this.componentStructure.getVmIndexFromDomIndex(
          t,
          this.targetDomElement
        );
      },
      onDragStart(t) {
        (this.context = this.getUnderlyingVm(t.item)),
          (t.item._underlying_vm_ = this.clone(this.context.element)),
          (An = t.item);
      },
      onDragAdd(t) {
        const e = t.item._underlying_vm_;
        if (e === void 0) return;
        xn(t.item);
        const n = this.getVmIndexFromDomIndex(t.newIndex);
        this.spliceList(n, 0, e);
        const o = { element: e, newIndex: n };
        this.emitChanges({ added: o });
      },
      onDragRemove(t) {
        if ((mo(this.$el, t.item, t.oldIndex), t.pullMode === "clone")) {
          xn(t.clone);
          return;
        }
        const { index: e, element: n } = this.context;
        this.spliceList(e, 1);
        const o = { element: n, oldIndex: e };
        this.emitChanges({ removed: o });
      },
      onDragUpdate(t) {
        xn(t.item), mo(t.from, t.item, t.oldIndex);
        const e = this.context.index,
          n = this.getVmIndexFromDomIndex(t.newIndex);
        this.updatePosition(e, n);
        const o = { element: this.context.element, oldIndex: e, newIndex: n };
        this.emitChanges({ moved: o });
      },
      computeFutureIndex(t, e) {
        if (!t.element) return 0;
        const n = [...e.to.children].filter(a => a.style.display !== "none"),
          o = n.indexOf(e.related),
          i = t.component.getVmIndexFromDomIndex(o);
        return n.indexOf(An) !== -1 || !e.willInsertAfter ? i : i + 1;
      },
      onDragMove(t, e) {
        const { move: n, realList: o } = this;
        if (!n || !o) return !0;
        const i = this.getRelatedContextFromMoveEvent(t),
          r = this.computeFutureIndex(i, t),
          a = { ...this.context, futureIndex: r },
          l = { ...t, relatedContext: i, draggedContext: a };
        return n(l, e);
      },
      onDragEnd() {
        An = null;
      }
    }
  }),
  _o = Nr,
  Vn = t => (si("data-v-7602f9eb"), (t = t()), ui(), t),
  $r = { class: "card-header" },
  Fr = Eo(" \u62D6\u62FD\u7EC4\u4EF6\uFF0C\u91C7\u7528\u5F00\u6E90\u7684 "),
  Mr = Eo(" vuedraggable "),
  kr = { class: "drag-container" },
  Rr = Vn(() =>
    ce(
      "div",
      { class: "card-header" },
      [ce("span", null, "grid\u5217\u8868\u62D6\u62FD")],
      -1
    )
  ),
  Xr = Vn(() =>
    ce(
      "div",
      { class: "card-header" },
      [ce("span", null, "\u5355\u5217\u62D6\u62FD")],
      -1
    )
  ),
  Yr = { class: "item-single" },
  Lr = Vn(() =>
    ce(
      "div",
      { class: "card-header" },
      [
        ce(
          "span",
          null,
          "\u62D6\u62FD\u5B9E\u73B0\u5143\u7D20\u4F4D\u7F6E\u5207\u6362"
        )
      ],
      -1
    )
  ),
  Br = { class: "cut-container" },
  Hr = Ln({ name: "Draggable" }),
  Wr = Ln({
    ...Hr,
    setup(t) {
      let e = un([
          { grid: "cn", num: 1 },
          { grid: "cn", num: 2 },
          { grid: "cn", num: 3 },
          { grid: "cn", num: 4 },
          { grid: "cn", num: 5 },
          { grid: "cn", num: 6 },
          { grid: "cn", num: 7 },
          { grid: "cn", num: 8 },
          { grid: "cn", num: 9 }
        ]),
        n = un([
          { people: "cn", id: 1, name: "www.itxst.com" },
          { people: "cn", id: 2, name: "www.baidu.com" },
          { people: "cn", id: 3, name: "www.taobao.com" },
          { people: "cn", id: 4, name: "www.google.com" }
        ]),
        o = un([
          { people: "cn", id: 1, name: "cut1" },
          { people: "cn", id: 2, name: "cut2" },
          { people: "cn", id: 3, name: "cut3" },
          { people: "cn", id: 4, name: "cut4" }
        ]);
      const i = r => {};
      return (
        oi(() => {
          new _(document.querySelector(".cut-container"), {
            swap: !0,
            forceFallback: !0,
            chosenClass: "chosen",
            swapClass: "highlight",
            animation: 300
          });
        }),
        (r, a) => {
          const l = st("el-link"),
            s = st("el-card"),
            u = st("el-col"),
            d = st("el-row");
          return (
            cn(),
            ii(s, null, {
              header: te(() => [
                ce("div", $r, [
                  ce("span", null, [
                    Fr,
                    ye(
                      l,
                      {
                        href: "https://sortablejs.github.io/vue.draggable.next/#/simple",
                        target: "_blank",
                        icon: Ue(di)("rank"),
                        style: { "font-size": "16px", margin: "0 4px 5px" }
                      },
                      { default: te(() => [Mr]), _: 1 },
                      8,
                      ["icon"]
                    )
                  ])
                ])
              ]),
              default: te(() => [
                ce("div", kr, [
                  ye(
                    d,
                    { gutter: 25 },
                    {
                      default: te(() => [
                        ye(
                          u,
                          { xs: 25, sm: 8, md: 8, lg: 8 },
                          {
                            default: te(() => [
                              ye(s, null, {
                                header: te(() => [Rr]),
                                default: te(() => [
                                  ye(
                                    Ue(_o),
                                    {
                                      modelValue: Ue(e),
                                      "onUpdate:modelValue":
                                        a[0] ||
                                        (a[0] = c =>
                                          qn(e) ? (e.value = c) : (e = c)),
                                      class: "grid-container",
                                      "item-key": "grid",
                                      animation: "300",
                                      chosenClass: "chosen",
                                      forceFallback: "true"
                                    },
                                    {
                                      item: te(({ element: c }) => [
                                        ce(
                                          "div",
                                          { class: ri("item item-" + c.num) },
                                          xt(c.num),
                                          3
                                        )
                                      ]),
                                      _: 1
                                    },
                                    8,
                                    ["modelValue"]
                                  )
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }
                        ),
                        ye(
                          u,
                          { xs: 25, sm: 8, md: 8, lg: 8 },
                          {
                            default: te(() => [
                              ye(s, null, {
                                header: te(() => [Xr]),
                                default: te(() => [
                                  ye(
                                    Ue(_o),
                                    {
                                      modelValue: Ue(n),
                                      "onUpdate:modelValue":
                                        a[1] ||
                                        (a[1] = c =>
                                          qn(n) ? (n.value = c) : (n = c)),
                                      "item-key": "name",
                                      onChange: i,
                                      "chosen-class": "chosen",
                                      "force-fallback": "true",
                                      animation: "300"
                                    },
                                    {
                                      item: te(({ element: c, index: p }) => [
                                        ce(
                                          "div",
                                          Yr,
                                          xt(c.name) + " " + xt(p),
                                          1
                                        )
                                      ]),
                                      _: 1
                                    },
                                    8,
                                    ["modelValue"]
                                  )
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }
                        ),
                        ye(
                          u,
                          { xs: 25, sm: 8, md: 8, lg: 8 },
                          {
                            default: te(() => [
                              ye(s, null, {
                                header: te(() => [Lr]),
                                default: te(() => [
                                  ce("div", Br, [
                                    (cn(!0),
                                    Kn(
                                      li,
                                      null,
                                      ai(
                                        Ue(o),
                                        (c, p) => (
                                          cn(),
                                          Kn(
                                            "div",
                                            { class: "item-cut", key: p },
                                            [ce("p", null, xt(c.name), 1)]
                                          )
                                        )
                                      ),
                                      128
                                    ))
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }
                        )
                      ]),
                      _: 1
                    }
                  )
                ])
              ]),
              _: 1
            })
          );
        }
      );
    }
  });
const zr = ci(Wr, [["__scopeId", "data-v-7602f9eb"]]);
export { zr as default };
