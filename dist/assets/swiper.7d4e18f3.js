import {
  s as A,
  r as _,
  v as Te,
  B as Ee,
  y as We,
  n as qe,
  o as xe,
  F as Pe,
  X as Xe,
  A as Ye,
  d as Me,
  h as X,
  e as Z,
  i as Ue,
  j as F,
  g as J,
  k as V,
  f as fe,
  Y as ce,
  Z as pe,
  b as he,
  ap as Ke,
  aq as Ze,
  L as ge,
  l as ae,
  _ as Je
} from "./index.69183727.js";
function me(t) {
  return (
    t !== null &&
    typeof t == "object" &&
    "constructor" in t &&
    t.constructor === Object
  );
}
function re(t = {}, e = {}) {
  Object.keys(e).forEach(i => {
    typeof t[i] > "u"
      ? (t[i] = e[i])
      : me(e[i]) && me(t[i]) && Object.keys(e[i]).length > 0 && re(t[i], e[i]);
  });
}
const Oe = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function L() {
  const t = typeof document < "u" ? document : {};
  return re(t, Oe), t;
}
const Qe = {
  document: Oe,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(t) {
    return typeof setTimeout > "u" ? (t(), null) : setTimeout(t, 0);
  },
  cancelAnimationFrame(t) {
    typeof setTimeout > "u" || clearTimeout(t);
  }
};
function $() {
  const t = typeof window < "u" ? window : {};
  return re(t, Qe), t;
}
function et(t) {
  const e = t.__proto__;
  Object.defineProperty(t, "__proto__", {
    get() {
      return e;
    },
    set(i) {
      e.__proto__ = i;
    }
  });
}
class N extends Array {
  constructor(e) {
    typeof e == "number" ? super(e) : (super(...(e || [])), et(this));
  }
}
function q(t = []) {
  const e = [];
  return (
    t.forEach(i => {
      Array.isArray(i) ? e.push(...q(i)) : e.push(i);
    }),
    e
  );
}
function $e(t, e) {
  return Array.prototype.filter.call(t, e);
}
function tt(t) {
  const e = [];
  for (let i = 0; i < t.length; i += 1) e.indexOf(t[i]) === -1 && e.push(t[i]);
  return e;
}
function it(t, e) {
  if (typeof t != "string") return [t];
  const i = [],
    n = e.querySelectorAll(t);
  for (let a = 0; a < n.length; a += 1) i.push(n[a]);
  return i;
}
function S(t, e) {
  const i = $(),
    n = L();
  let a = [];
  if (!e && t instanceof N) return t;
  if (!t) return new N(a);
  if (typeof t == "string") {
    const s = t.trim();
    if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
      let l = "div";
      s.indexOf("<li") === 0 && (l = "ul"),
        s.indexOf("<tr") === 0 && (l = "tbody"),
        (s.indexOf("<td") === 0 || s.indexOf("<th") === 0) && (l = "tr"),
        s.indexOf("<tbody") === 0 && (l = "table"),
        s.indexOf("<option") === 0 && (l = "select");
      const o = n.createElement(l);
      o.innerHTML = s;
      for (let r = 0; r < o.childNodes.length; r += 1) a.push(o.childNodes[r]);
    } else a = it(t.trim(), e || n);
  } else if (t.nodeType || t === i || t === n) a.push(t);
  else if (Array.isArray(t)) {
    if (t instanceof N) return t;
    a = t;
  }
  return new N(tt(a));
}
S.fn = N.prototype;
function nt(...t) {
  const e = q(t.map(i => i.split(" ")));
  return (
    this.forEach(i => {
      i.classList.add(...e);
    }),
    this
  );
}
function st(...t) {
  const e = q(t.map(i => i.split(" ")));
  return (
    this.forEach(i => {
      i.classList.remove(...e);
    }),
    this
  );
}
function at(...t) {
  const e = q(t.map(i => i.split(" ")));
  this.forEach(i => {
    e.forEach(n => {
      i.classList.toggle(n);
    });
  });
}
function rt(...t) {
  const e = q(t.map(i => i.split(" ")));
  return (
    $e(this, i => e.filter(n => i.classList.contains(n)).length > 0).length > 0
  );
}
function lt(t, e) {
  if (arguments.length === 1 && typeof t == "string")
    return this[0] ? this[0].getAttribute(t) : void 0;
  for (let i = 0; i < this.length; i += 1)
    if (arguments.length === 2) this[i].setAttribute(t, e);
    else for (const n in t) (this[i][n] = t[n]), this[i].setAttribute(n, t[n]);
  return this;
}
function ot(t) {
  for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
  return this;
}
function dt(t) {
  for (let e = 0; e < this.length; e += 1) this[e].style.transform = t;
  return this;
}
function ut(t) {
  for (let e = 0; e < this.length; e += 1)
    this[e].style.transitionDuration = typeof t != "string" ? `${t}ms` : t;
  return this;
}
function ft(...t) {
  let [e, i, n, a] = t;
  typeof t[1] == "function" && (([e, n, a] = t), (i = void 0)), a || (a = !1);
  function s(d) {
    const u = d.target;
    if (!u) return;
    const f = d.target.dom7EventData || [];
    if ((f.indexOf(d) < 0 && f.unshift(d), S(u).is(i))) n.apply(u, f);
    else {
      const p = S(u).parents();
      for (let m = 0; m < p.length; m += 1) S(p[m]).is(i) && n.apply(p[m], f);
    }
  }
  function l(d) {
    const u = d && d.target ? d.target.dom7EventData || [] : [];
    u.indexOf(d) < 0 && u.unshift(d), n.apply(this, u);
  }
  const o = e.split(" ");
  let r;
  for (let d = 0; d < this.length; d += 1) {
    const u = this[d];
    if (i)
      for (r = 0; r < o.length; r += 1) {
        const f = o[r];
        u.dom7LiveListeners || (u.dom7LiveListeners = {}),
          u.dom7LiveListeners[f] || (u.dom7LiveListeners[f] = []),
          u.dom7LiveListeners[f].push({ listener: n, proxyListener: s }),
          u.addEventListener(f, s, a);
      }
    else
      for (r = 0; r < o.length; r += 1) {
        const f = o[r];
        u.dom7Listeners || (u.dom7Listeners = {}),
          u.dom7Listeners[f] || (u.dom7Listeners[f] = []),
          u.dom7Listeners[f].push({ listener: n, proxyListener: l }),
          u.addEventListener(f, l, a);
      }
  }
  return this;
}
function ct(...t) {
  let [e, i, n, a] = t;
  typeof t[1] == "function" && (([e, n, a] = t), (i = void 0)), a || (a = !1);
  const s = e.split(" ");
  for (let l = 0; l < s.length; l += 1) {
    const o = s[l];
    for (let r = 0; r < this.length; r += 1) {
      const d = this[r];
      let u;
      if (
        (!i && d.dom7Listeners
          ? (u = d.dom7Listeners[o])
          : i && d.dom7LiveListeners && (u = d.dom7LiveListeners[o]),
        u && u.length)
      )
        for (let f = u.length - 1; f >= 0; f -= 1) {
          const p = u[f];
          (n && p.listener === n) ||
          (n &&
            p.listener &&
            p.listener.dom7proxy &&
            p.listener.dom7proxy === n)
            ? (d.removeEventListener(o, p.proxyListener, a), u.splice(f, 1))
            : n ||
              (d.removeEventListener(o, p.proxyListener, a), u.splice(f, 1));
        }
    }
  }
  return this;
}
function pt(...t) {
  const e = $(),
    i = t[0].split(" "),
    n = t[1];
  for (let a = 0; a < i.length; a += 1) {
    const s = i[a];
    for (let l = 0; l < this.length; l += 1) {
      const o = this[l];
      if (e.CustomEvent) {
        const r = new e.CustomEvent(s, {
          detail: n,
          bubbles: !0,
          cancelable: !0
        });
        (o.dom7EventData = t.filter((d, u) => u > 0)),
          o.dispatchEvent(r),
          (o.dom7EventData = []),
          delete o.dom7EventData;
      }
    }
  }
  return this;
}
function ht(t) {
  const e = this;
  function i(n) {
    n.target === this && (t.call(this, n), e.off("transitionend", i));
  }
  return t && e.on("transitionend", i), this;
}
function gt(t) {
  if (this.length > 0) {
    if (t) {
      const e = this.styles();
      return (
        this[0].offsetWidth +
        parseFloat(e.getPropertyValue("margin-right")) +
        parseFloat(e.getPropertyValue("margin-left"))
      );
    }
    return this[0].offsetWidth;
  }
  return null;
}
function mt(t) {
  if (this.length > 0) {
    if (t) {
      const e = this.styles();
      return (
        this[0].offsetHeight +
        parseFloat(e.getPropertyValue("margin-top")) +
        parseFloat(e.getPropertyValue("margin-bottom"))
      );
    }
    return this[0].offsetHeight;
  }
  return null;
}
function vt() {
  if (this.length > 0) {
    const t = $(),
      e = L(),
      i = this[0],
      n = i.getBoundingClientRect(),
      a = e.body,
      s = i.clientTop || a.clientTop || 0,
      l = i.clientLeft || a.clientLeft || 0,
      o = i === t ? t.scrollY : i.scrollTop,
      r = i === t ? t.scrollX : i.scrollLeft;
    return { top: n.top + o - s, left: n.left + r - l };
  }
  return null;
}
function wt() {
  const t = $();
  return this[0] ? t.getComputedStyle(this[0], null) : {};
}
function bt(t, e) {
  const i = $();
  let n;
  if (arguments.length === 1)
    if (typeof t == "string") {
      if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(t);
    } else {
      for (n = 0; n < this.length; n += 1)
        for (const a in t) this[n].style[a] = t[a];
      return this;
    }
  if (arguments.length === 2 && typeof t == "string") {
    for (n = 0; n < this.length; n += 1) this[n].style[t] = e;
    return this;
  }
  return this;
}
function St(t) {
  return t
    ? (this.forEach((e, i) => {
        t.apply(e, [e, i]);
      }),
      this)
    : this;
}
function yt(t) {
  const e = $e(this, t);
  return S(e);
}
function Ct(t) {
  if (typeof t > "u") return this[0] ? this[0].innerHTML : null;
  for (let e = 0; e < this.length; e += 1) this[e].innerHTML = t;
  return this;
}
function Tt(t) {
  if (typeof t > "u") return this[0] ? this[0].textContent.trim() : null;
  for (let e = 0; e < this.length; e += 1) this[e].textContent = t;
  return this;
}
function Et(t) {
  const e = $(),
    i = L(),
    n = this[0];
  let a, s;
  if (!n || typeof t > "u") return !1;
  if (typeof t == "string") {
    if (n.matches) return n.matches(t);
    if (n.webkitMatchesSelector) return n.webkitMatchesSelector(t);
    if (n.msMatchesSelector) return n.msMatchesSelector(t);
    for (a = S(t), s = 0; s < a.length; s += 1) if (a[s] === n) return !0;
    return !1;
  }
  if (t === i) return n === i;
  if (t === e) return n === e;
  if (t.nodeType || t instanceof N) {
    for (a = t.nodeType ? [t] : t, s = 0; s < a.length; s += 1)
      if (a[s] === n) return !0;
    return !1;
  }
  return !1;
}
function xt() {
  let t = this[0],
    e;
  if (t) {
    for (e = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (e += 1);
    return e;
  }
}
function Pt(t) {
  if (typeof t > "u") return this;
  const e = this.length;
  if (t > e - 1) return S([]);
  if (t < 0) {
    const i = e + t;
    return i < 0 ? S([]) : S([this[i]]);
  }
  return S([this[t]]);
}
function Mt(...t) {
  let e;
  const i = L();
  for (let n = 0; n < t.length; n += 1) {
    e = t[n];
    for (let a = 0; a < this.length; a += 1)
      if (typeof e == "string") {
        const s = i.createElement("div");
        for (s.innerHTML = e; s.firstChild; ) this[a].appendChild(s.firstChild);
      } else if (e instanceof N)
        for (let s = 0; s < e.length; s += 1) this[a].appendChild(e[s]);
      else this[a].appendChild(e);
  }
  return this;
}
function Ot(t) {
  const e = L();
  let i, n;
  for (i = 0; i < this.length; i += 1)
    if (typeof t == "string") {
      const a = e.createElement("div");
      for (a.innerHTML = t, n = a.childNodes.length - 1; n >= 0; n -= 1)
        this[i].insertBefore(a.childNodes[n], this[i].childNodes[0]);
    } else if (t instanceof N)
      for (n = 0; n < t.length; n += 1)
        this[i].insertBefore(t[n], this[i].childNodes[0]);
    else this[i].insertBefore(t, this[i].childNodes[0]);
  return this;
}
function $t(t) {
  return this.length > 0
    ? t
      ? this[0].nextElementSibling && S(this[0].nextElementSibling).is(t)
        ? S([this[0].nextElementSibling])
        : S([])
      : this[0].nextElementSibling
      ? S([this[0].nextElementSibling])
      : S([])
    : S([]);
}
function Lt(t) {
  const e = [];
  let i = this[0];
  if (!i) return S([]);
  for (; i.nextElementSibling; ) {
    const n = i.nextElementSibling;
    t ? S(n).is(t) && e.push(n) : e.push(n), (i = n);
  }
  return S(e);
}
function Bt(t) {
  if (this.length > 0) {
    const e = this[0];
    return t
      ? e.previousElementSibling && S(e.previousElementSibling).is(t)
        ? S([e.previousElementSibling])
        : S([])
      : e.previousElementSibling
      ? S([e.previousElementSibling])
      : S([]);
  }
  return S([]);
}
function _t(t) {
  const e = [];
  let i = this[0];
  if (!i) return S([]);
  for (; i.previousElementSibling; ) {
    const n = i.previousElementSibling;
    t ? S(n).is(t) && e.push(n) : e.push(n), (i = n);
  }
  return S(e);
}
function It(t) {
  const e = [];
  for (let i = 0; i < this.length; i += 1)
    this[i].parentNode !== null &&
      (t
        ? S(this[i].parentNode).is(t) && e.push(this[i].parentNode)
        : e.push(this[i].parentNode));
  return S(e);
}
function zt(t) {
  const e = [];
  for (let i = 0; i < this.length; i += 1) {
    let n = this[i].parentNode;
    for (; n; ) t ? S(n).is(t) && e.push(n) : e.push(n), (n = n.parentNode);
  }
  return S(e);
}
function kt(t) {
  let e = this;
  return typeof t > "u" ? S([]) : (e.is(t) || (e = e.parents(t).eq(0)), e);
}
function At(t) {
  const e = [];
  for (let i = 0; i < this.length; i += 1) {
    const n = this[i].querySelectorAll(t);
    for (let a = 0; a < n.length; a += 1) e.push(n[a]);
  }
  return S(e);
}
function Dt(t) {
  const e = [];
  for (let i = 0; i < this.length; i += 1) {
    const n = this[i].children;
    for (let a = 0; a < n.length; a += 1) (!t || S(n[a]).is(t)) && e.push(n[a]);
  }
  return S(e);
}
function Nt() {
  for (let t = 0; t < this.length; t += 1)
    this[t].parentNode && this[t].parentNode.removeChild(this[t]);
  return this;
}
const ve = {
  addClass: nt,
  removeClass: st,
  hasClass: rt,
  toggleClass: at,
  attr: lt,
  removeAttr: ot,
  transform: dt,
  transition: ut,
  on: ft,
  off: ct,
  trigger: pt,
  transitionEnd: ht,
  outerWidth: gt,
  outerHeight: mt,
  styles: wt,
  offset: vt,
  css: bt,
  each: St,
  html: Ct,
  text: Tt,
  is: Et,
  index: xt,
  eq: Pt,
  append: Mt,
  prepend: Ot,
  next: $t,
  nextAll: Lt,
  prev: Bt,
  prevAll: _t,
  parent: It,
  parents: zt,
  closest: kt,
  find: At,
  children: Dt,
  filter: yt,
  remove: Nt
};
Object.keys(ve).forEach(t => {
  Object.defineProperty(S.fn, t, { value: ve[t], writable: !0 });
});
function Gt(t) {
  const e = t;
  Object.keys(e).forEach(i => {
    try {
      e[i] = null;
    } catch {}
    try {
      delete e[i];
    } catch {}
  });
}
function K(t, e) {
  return e === void 0 && (e = 0), setTimeout(t, e);
}
function H() {
  return Date.now();
}
function Ft(t) {
  const e = $();
  let i;
  return (
    e.getComputedStyle && (i = e.getComputedStyle(t, null)),
    !i && t.currentStyle && (i = t.currentStyle),
    i || (i = t.style),
    i
  );
}
function Rt(t, e) {
  e === void 0 && (e = "x");
  const i = $();
  let n, a, s;
  const l = Ft(t);
  return (
    i.WebKitCSSMatrix
      ? ((a = l.transform || l.webkitTransform),
        a.split(",").length > 6 &&
          (a = a
            .split(", ")
            .map(o => o.replace(",", "."))
            .join(", ")),
        (s = new i.WebKitCSSMatrix(a === "none" ? "" : a)))
      : ((s =
          l.MozTransform ||
          l.OTransform ||
          l.MsTransform ||
          l.msTransform ||
          l.transform ||
          l
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (n = s.toString().split(","))),
    e === "x" &&
      (i.WebKitCSSMatrix
        ? (a = s.m41)
        : n.length === 16
        ? (a = parseFloat(n[12]))
        : (a = parseFloat(n[4]))),
    e === "y" &&
      (i.WebKitCSSMatrix
        ? (a = s.m42)
        : n.length === 16
        ? (a = parseFloat(n[13]))
        : (a = parseFloat(n[5]))),
    a || 0
  );
}
function Y(t) {
  return (
    typeof t == "object" &&
    t !== null &&
    t.constructor &&
    Object.prototype.toString.call(t).slice(8, -1) === "Object"
  );
}
function jt(t) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? t instanceof HTMLElement
    : t && (t.nodeType === 1 || t.nodeType === 11);
}
function I() {
  const t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    e = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < arguments.length; i += 1) {
    const n = i < 0 || arguments.length <= i ? void 0 : arguments[i];
    if (n != null && !jt(n)) {
      const a = Object.keys(Object(n)).filter(s => e.indexOf(s) < 0);
      for (let s = 0, l = a.length; s < l; s += 1) {
        const o = a[s],
          r = Object.getOwnPropertyDescriptor(n, o);
        r !== void 0 &&
          r.enumerable &&
          (Y(t[o]) && Y(n[o])
            ? n[o].__swiper__
              ? (t[o] = n[o])
              : I(t[o], n[o])
            : !Y(t[o]) && Y(n[o])
            ? ((t[o] = {}), n[o].__swiper__ ? (t[o] = n[o]) : I(t[o], n[o]))
            : (t[o] = n[o]));
      }
    }
  }
  return t;
}
function U(t, e, i) {
  t.style.setProperty(e, i);
}
function Le(t) {
  let { swiper: e, targetPosition: i, side: n } = t;
  const a = $(),
    s = -e.translate;
  let l = null,
    o;
  const r = e.params.speed;
  (e.wrapperEl.style.scrollSnapType = "none"),
    a.cancelAnimationFrame(e.cssModeFrameID);
  const d = i > s ? "next" : "prev",
    u = (p, m) => (d === "next" && p >= m) || (d === "prev" && p <= m),
    f = () => {
      (o = new Date().getTime()), l === null && (l = o);
      const p = Math.max(Math.min((o - l) / r, 1), 0),
        m = 0.5 - Math.cos(p * Math.PI) / 2;
      let g = s + m * (i - s);
      if ((u(g, i) && (g = i), e.wrapperEl.scrollTo({ [n]: g }), u(g, i))) {
        (e.wrapperEl.style.overflow = "hidden"),
          (e.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (e.wrapperEl.style.overflow = ""), e.wrapperEl.scrollTo({ [n]: g });
          }),
          a.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = a.requestAnimationFrame(f);
    };
  f();
}
let Q;
function Vt() {
  const t = $(),
    e = L();
  return {
    smoothScroll:
      e.documentElement && "scrollBehavior" in e.documentElement.style,
    touch: !!(
      "ontouchstart" in t ||
      (t.DocumentTouch && e instanceof t.DocumentTouch)
    ),
    passiveListener: (function () {
      let n = !1;
      try {
        const a = Object.defineProperty({}, "passive", {
          get() {
            n = !0;
          }
        });
        t.addEventListener("testPassiveListener", null, a);
      } catch {}
      return n;
    })(),
    gestures: (function () {
      return "ongesturestart" in t;
    })()
  };
}
function Be() {
  return Q || (Q = Vt()), Q;
}
let ee;
function Ht(t) {
  let { userAgent: e } = t === void 0 ? {} : t;
  const i = Be(),
    n = $(),
    a = n.navigator.platform,
    s = e || n.navigator.userAgent,
    l = { ios: !1, android: !1 },
    o = n.screen.width,
    r = n.screen.height,
    d = s.match(/(Android);?[\s\/]+([\d.]+)?/);
  let u = s.match(/(iPad).*OS\s([\d_]+)/);
  const f = s.match(/(iPod)(.*OS\s([\d_]+))?/),
    p = !u && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    m = a === "Win32";
  let g = a === "MacIntel";
  const v = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810"
  ];
  return (
    !u &&
      g &&
      i.touch &&
      v.indexOf(`${o}x${r}`) >= 0 &&
      ((u = s.match(/(Version)\/([\d.]+)/)),
      u || (u = [0, 1, "13_0_0"]),
      (g = !1)),
    d && !m && ((l.os = "android"), (l.android = !0)),
    (u || p || f) && ((l.os = "ios"), (l.ios = !0)),
    l
  );
}
function Wt(t) {
  return t === void 0 && (t = {}), ee || (ee = Ht(t)), ee;
}
let te;
function qt() {
  const t = $();
  function e() {
    const i = t.navigator.userAgent.toLowerCase();
    return (
      i.indexOf("safari") >= 0 &&
      i.indexOf("chrome") < 0 &&
      i.indexOf("android") < 0
    );
  }
  return {
    isSafari: e(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      t.navigator.userAgent
    )
  };
}
function Xt() {
  return te || (te = qt()), te;
}
function Yt(t) {
  let { swiper: e, on: i, emit: n } = t;
  const a = $();
  let s = null,
    l = null;
  const o = () => {
      !e || e.destroyed || !e.initialized || (n("beforeResize"), n("resize"));
    },
    r = () => {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((s = new ResizeObserver(f => {
          l = a.requestAnimationFrame(() => {
            const { width: p, height: m } = e;
            let g = p,
              v = m;
            f.forEach(c => {
              let { contentBoxSize: h, contentRect: w, target: b } = c;
              (b && b !== e.el) ||
                ((g = w ? w.width : (h[0] || h).inlineSize),
                (v = w ? w.height : (h[0] || h).blockSize));
            }),
              (g !== p || v !== m) && o();
          });
        })),
        s.observe(e.el));
    },
    d = () => {
      l && a.cancelAnimationFrame(l),
        s && s.unobserve && e.el && (s.unobserve(e.el), (s = null));
    },
    u = () => {
      !e || e.destroyed || !e.initialized || n("orientationchange");
    };
  i("init", () => {
    if (e.params.resizeObserver && typeof a.ResizeObserver < "u") {
      r();
      return;
    }
    a.addEventListener("resize", o), a.addEventListener("orientationchange", u);
  }),
    i("destroy", () => {
      d(),
        a.removeEventListener("resize", o),
        a.removeEventListener("orientationchange", u);
    });
}
function Ut(t) {
  let { swiper: e, extendParams: i, on: n, emit: a } = t;
  const s = [],
    l = $(),
    o = function (u, f) {
      f === void 0 && (f = {});
      const p = l.MutationObserver || l.WebkitMutationObserver,
        m = new p(g => {
          if (g.length === 1) {
            a("observerUpdate", g[0]);
            return;
          }
          const v = function () {
            a("observerUpdate", g[0]);
          };
          l.requestAnimationFrame
            ? l.requestAnimationFrame(v)
            : l.setTimeout(v, 0);
        });
      m.observe(u, {
        attributes: typeof f.attributes > "u" ? !0 : f.attributes,
        childList: typeof f.childList > "u" ? !0 : f.childList,
        characterData: typeof f.characterData > "u" ? !0 : f.characterData
      }),
        s.push(m);
    },
    r = () => {
      if (!!e.params.observer) {
        if (e.params.observeParents) {
          const u = e.$el.parents();
          for (let f = 0; f < u.length; f += 1) o(u[f]);
        }
        o(e.$el[0], { childList: e.params.observeSlideChildren }),
          o(e.$wrapperEl[0], { attributes: !1 });
      }
    },
    d = () => {
      s.forEach(u => {
        u.disconnect();
      }),
        s.splice(0, s.length);
    };
  i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    n("init", r),
    n("destroy", d);
}
const Kt = {
  on(t, e, i) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const a = i ? "unshift" : "push";
    return (
      t.split(" ").forEach(s => {
        n.eventsListeners[s] || (n.eventsListeners[s] = []),
          n.eventsListeners[s][a](e);
      }),
      n
    );
  },
  once(t, e, i) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    function a() {
      n.off(t, a), a.__emitterProxy && delete a.__emitterProxy;
      for (var s = arguments.length, l = new Array(s), o = 0; o < s; o++)
        l[o] = arguments[o];
      e.apply(n, l);
    }
    return (a.__emitterProxy = e), n.on(t, a, i);
  },
  onAny(t, e) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof t != "function") return i;
    const n = e ? "unshift" : "push";
    return i.eventsAnyListeners.indexOf(t) < 0 && i.eventsAnyListeners[n](t), i;
  },
  offAny(t) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const i = e.eventsAnyListeners.indexOf(t);
    return i >= 0 && e.eventsAnyListeners.splice(i, 1), e;
  },
  off(t, e) {
    const i = this;
    return (
      !i.eventsListeners ||
        i.destroyed ||
        !i.eventsListeners ||
        t.split(" ").forEach(n => {
          typeof e > "u"
            ? (i.eventsListeners[n] = [])
            : i.eventsListeners[n] &&
              i.eventsListeners[n].forEach((a, s) => {
                (a === e || (a.__emitterProxy && a.__emitterProxy === e)) &&
                  i.eventsListeners[n].splice(s, 1);
              });
        }),
      i
    );
  },
  emit() {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
    let e, i, n;
    for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++)
      s[l] = arguments[l];
    return (
      typeof s[0] == "string" || Array.isArray(s[0])
        ? ((e = s[0]), (i = s.slice(1, s.length)), (n = t))
        : ((e = s[0].events), (i = s[0].data), (n = s[0].context || t)),
      i.unshift(n),
      (Array.isArray(e) ? e : e.split(" ")).forEach(r => {
        t.eventsAnyListeners &&
          t.eventsAnyListeners.length &&
          t.eventsAnyListeners.forEach(d => {
            d.apply(n, [r, ...i]);
          }),
          t.eventsListeners &&
            t.eventsListeners[r] &&
            t.eventsListeners[r].forEach(d => {
              d.apply(n, i);
            });
      }),
      t
    );
  }
};
function Zt() {
  const t = this;
  let e, i;
  const n = t.$el;
  typeof t.params.width < "u" && t.params.width !== null
    ? (e = t.params.width)
    : (e = n[0].clientWidth),
    typeof t.params.height < "u" && t.params.height !== null
      ? (i = t.params.height)
      : (i = n[0].clientHeight),
    !((e === 0 && t.isHorizontal()) || (i === 0 && t.isVertical())) &&
      ((e =
        e -
        parseInt(n.css("padding-left") || 0, 10) -
        parseInt(n.css("padding-right") || 0, 10)),
      (i =
        i -
        parseInt(n.css("padding-top") || 0, 10) -
        parseInt(n.css("padding-bottom") || 0, 10)),
      Number.isNaN(e) && (e = 0),
      Number.isNaN(i) && (i = 0),
      Object.assign(t, {
        width: e,
        height: i,
        size: t.isHorizontal() ? e : i
      }));
}
function Jt() {
  const t = this;
  function e(T) {
    return t.isHorizontal()
      ? T
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom"
        }[T];
  }
  function i(T, x) {
    return parseFloat(T.getPropertyValue(e(x)) || 0);
  }
  const n = t.params,
    { $wrapperEl: a, size: s, rtlTranslate: l, wrongRTL: o } = t,
    r = t.virtual && n.virtual.enabled,
    d = r ? t.virtual.slides.length : t.slides.length,
    u = a.children(`.${t.params.slideClass}`),
    f = r ? t.virtual.slides.length : u.length;
  let p = [];
  const m = [],
    g = [];
  let v = n.slidesOffsetBefore;
  typeof v == "function" && (v = n.slidesOffsetBefore.call(t));
  let c = n.slidesOffsetAfter;
  typeof c == "function" && (c = n.slidesOffsetAfter.call(t));
  const h = t.snapGrid.length,
    w = t.slidesGrid.length;
  let b = n.spaceBetween,
    y = -v,
    O = 0,
    C = 0;
  if (typeof s > "u") return;
  typeof b == "string" &&
    b.indexOf("%") >= 0 &&
    (b = (parseFloat(b.replace("%", "")) / 100) * s),
    (t.virtualSize = -b),
    l
      ? u.css({ marginLeft: "", marginBottom: "", marginTop: "" })
      : u.css({ marginRight: "", marginBottom: "", marginTop: "" }),
    n.centeredSlides &&
      n.cssMode &&
      (U(t.wrapperEl, "--swiper-centered-offset-before", ""),
      U(t.wrapperEl, "--swiper-centered-offset-after", ""));
  const M = n.grid && n.grid.rows > 1 && t.grid;
  M && t.grid.initSlides(f);
  let E;
  const B =
    n.slidesPerView === "auto" &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      T => typeof n.breakpoints[T].slidesPerView < "u"
    ).length > 0;
  for (let T = 0; T < f; T += 1) {
    E = 0;
    const x = u.eq(T);
    if ((M && t.grid.updateSlide(T, x, f, e), x.css("display") !== "none")) {
      if (n.slidesPerView === "auto") {
        B && (u[T].style[e("width")] = "");
        const P = getComputedStyle(x[0]),
          D = x[0].style.transform,
          k = x[0].style.webkitTransform;
        if (
          (D && (x[0].style.transform = "none"),
          k && (x[0].style.webkitTransform = "none"),
          n.roundLengths)
        )
          E = t.isHorizontal() ? x.outerWidth(!0) : x.outerHeight(!0);
        else {
          const le = i(P, "width"),
            Re = i(P, "padding-left"),
            je = i(P, "padding-right"),
            oe = i(P, "margin-left"),
            de = i(P, "margin-right"),
            ue = P.getPropertyValue("box-sizing");
          if (ue && ue === "border-box") E = le + oe + de;
          else {
            const { clientWidth: Ve, offsetWidth: He } = x[0];
            E = le + Re + je + oe + de + (He - Ve);
          }
        }
        D && (x[0].style.transform = D),
          k && (x[0].style.webkitTransform = k),
          n.roundLengths && (E = Math.floor(E));
      } else
        (E = (s - (n.slidesPerView - 1) * b) / n.slidesPerView),
          n.roundLengths && (E = Math.floor(E)),
          u[T] && (u[T].style[e("width")] = `${E}px`);
      u[T] && (u[T].swiperSlideSize = E),
        g.push(E),
        n.centeredSlides
          ? ((y = y + E / 2 + O / 2 + b),
            O === 0 && T !== 0 && (y = y - s / 2 - b),
            T === 0 && (y = y - s / 2 - b),
            Math.abs(y) < 1 / 1e3 && (y = 0),
            n.roundLengths && (y = Math.floor(y)),
            C % n.slidesPerGroup === 0 && p.push(y),
            m.push(y))
          : (n.roundLengths && (y = Math.floor(y)),
            (C - Math.min(t.params.slidesPerGroupSkip, C)) %
              t.params.slidesPerGroup ===
              0 && p.push(y),
            m.push(y),
            (y = y + E + b)),
        (t.virtualSize += E + b),
        (O = E),
        (C += 1);
    }
  }
  if (
    ((t.virtualSize = Math.max(t.virtualSize, s) + c),
    l &&
      o &&
      (n.effect === "slide" || n.effect === "coverflow") &&
      a.css({ width: `${t.virtualSize + n.spaceBetween}px` }),
    n.setWrapperSize &&
      a.css({ [e("width")]: `${t.virtualSize + n.spaceBetween}px` }),
    M && t.grid.updateWrapperSize(E, p, e),
    !n.centeredSlides)
  ) {
    const T = [];
    for (let x = 0; x < p.length; x += 1) {
      let P = p[x];
      n.roundLengths && (P = Math.floor(P)),
        p[x] <= t.virtualSize - s && T.push(P);
    }
    (p = T),
      Math.floor(t.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 &&
        p.push(t.virtualSize - s);
  }
  if ((p.length === 0 && (p = [0]), n.spaceBetween !== 0)) {
    const T = t.isHorizontal() && l ? "marginLeft" : e("marginRight");
    u.filter((x, P) => (n.cssMode ? P !== u.length - 1 : !0)).css({
      [T]: `${b}px`
    });
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let T = 0;
    g.forEach(P => {
      T += P + (n.spaceBetween ? n.spaceBetween : 0);
    }),
      (T -= n.spaceBetween);
    const x = T - s;
    p = p.map(P => (P < 0 ? -v : P > x ? x + c : P));
  }
  if (n.centerInsufficientSlides) {
    let T = 0;
    if (
      (g.forEach(x => {
        T += x + (n.spaceBetween ? n.spaceBetween : 0);
      }),
      (T -= n.spaceBetween),
      T < s)
    ) {
      const x = (s - T) / 2;
      p.forEach((P, D) => {
        p[D] = P - x;
      }),
        m.forEach((P, D) => {
          m[D] = P + x;
        });
    }
  }
  if (
    (Object.assign(t, {
      slides: u,
      snapGrid: p,
      slidesGrid: m,
      slidesSizesGrid: g
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    U(t.wrapperEl, "--swiper-centered-offset-before", `${-p[0]}px`),
      U(
        t.wrapperEl,
        "--swiper-centered-offset-after",
        `${t.size / 2 - g[g.length - 1] / 2}px`
      );
    const T = -t.snapGrid[0],
      x = -t.slidesGrid[0];
    (t.snapGrid = t.snapGrid.map(P => P + T)),
      (t.slidesGrid = t.slidesGrid.map(P => P + x));
  }
  if (
    (f !== d && t.emit("slidesLengthChange"),
    p.length !== h &&
      (t.params.watchOverflow && t.checkOverflow(),
      t.emit("snapGridLengthChange")),
    m.length !== w && t.emit("slidesGridLengthChange"),
    n.watchSlidesProgress && t.updateSlidesOffset(),
    !r && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
  ) {
    const T = `${n.containerModifierClass}backface-hidden`,
      x = t.$el.hasClass(T);
    f <= n.maxBackfaceHiddenSlides
      ? x || t.$el.addClass(T)
      : x && t.$el.removeClass(T);
  }
}
function Qt(t) {
  const e = this,
    i = [],
    n = e.virtual && e.params.virtual.enabled;
  let a = 0,
    s;
  typeof t == "number"
    ? e.setTransition(t)
    : t === !0 && e.setTransition(e.params.speed);
  const l = o =>
    n
      ? e.slides.filter(
          r => parseInt(r.getAttribute("data-swiper-slide-index"), 10) === o
        )[0]
      : e.slides.eq(o)[0];
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || S([])).each(o => {
        i.push(o);
      });
    else
      for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
        const o = e.activeIndex + s;
        if (o > e.slides.length && !n) break;
        i.push(l(o));
      }
  else i.push(l(e.activeIndex));
  for (s = 0; s < i.length; s += 1)
    if (typeof i[s] < "u") {
      const o = i[s].offsetHeight;
      a = o > a ? o : a;
    }
  (a || a === 0) && e.$wrapperEl.css("height", `${a}px`);
}
function ei() {
  const t = this,
    e = t.slides;
  for (let i = 0; i < e.length; i += 1)
    e[i].swiperSlideOffset = t.isHorizontal()
      ? e[i].offsetLeft
      : e[i].offsetTop;
}
function ti(t) {
  t === void 0 && (t = (this && this.translate) || 0);
  const e = this,
    i = e.params,
    { slides: n, rtlTranslate: a, snapGrid: s } = e;
  if (n.length === 0) return;
  typeof n[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let l = -t;
  a && (l = t),
    n.removeClass(i.slideVisibleClass),
    (e.visibleSlidesIndexes = []),
    (e.visibleSlides = []);
  for (let o = 0; o < n.length; o += 1) {
    const r = n[o];
    let d = r.swiperSlideOffset;
    i.cssMode && i.centeredSlides && (d -= n[0].swiperSlideOffset);
    const u =
        (l + (i.centeredSlides ? e.minTranslate() : 0) - d) /
        (r.swiperSlideSize + i.spaceBetween),
      f =
        (l - s[0] + (i.centeredSlides ? e.minTranslate() : 0) - d) /
        (r.swiperSlideSize + i.spaceBetween),
      p = -(l - d),
      m = p + e.slidesSizesGrid[o];
    ((p >= 0 && p < e.size - 1) ||
      (m > 1 && m <= e.size) ||
      (p <= 0 && m >= e.size)) &&
      (e.visibleSlides.push(r),
      e.visibleSlidesIndexes.push(o),
      n.eq(o).addClass(i.slideVisibleClass)),
      (r.progress = a ? -u : u),
      (r.originalProgress = a ? -f : f);
  }
  e.visibleSlides = S(e.visibleSlides);
}
function ii(t) {
  const e = this;
  if (typeof t > "u") {
    const d = e.rtlTranslate ? -1 : 1;
    t = (e && e.translate && e.translate * d) || 0;
  }
  const i = e.params,
    n = e.maxTranslate() - e.minTranslate();
  let { progress: a, isBeginning: s, isEnd: l } = e;
  const o = s,
    r = l;
  n === 0
    ? ((a = 0), (s = !0), (l = !0))
    : ((a = (t - e.minTranslate()) / n), (s = a <= 0), (l = a >= 1)),
    Object.assign(e, { progress: a, isBeginning: s, isEnd: l }),
    (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
      e.updateSlidesProgress(t),
    s && !o && e.emit("reachBeginning toEdge"),
    l && !r && e.emit("reachEnd toEdge"),
    ((o && !s) || (r && !l)) && e.emit("fromEdge"),
    e.emit("progress", a);
}
function ni() {
  const t = this,
    { slides: e, params: i, $wrapperEl: n, activeIndex: a, realIndex: s } = t,
    l = t.virtual && i.virtual.enabled;
  e.removeClass(
    `${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`
  );
  let o;
  l
    ? (o = t.$wrapperEl.find(
        `.${i.slideClass}[data-swiper-slide-index="${a}"]`
      ))
    : (o = e.eq(a)),
    o.addClass(i.slideActiveClass),
    i.loop &&
      (o.hasClass(i.slideDuplicateClass)
        ? n
            .children(
              `.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${s}"]`
            )
            .addClass(i.slideDuplicateActiveClass)
        : n
            .children(
              `.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${s}"]`
            )
            .addClass(i.slideDuplicateActiveClass));
  let r = o.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);
  i.loop && r.length === 0 && ((r = e.eq(0)), r.addClass(i.slideNextClass));
  let d = o.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);
  i.loop && d.length === 0 && ((d = e.eq(-1)), d.addClass(i.slidePrevClass)),
    i.loop &&
      (r.hasClass(i.slideDuplicateClass)
        ? n
            .children(
              `.${i.slideClass}:not(.${
                i.slideDuplicateClass
              })[data-swiper-slide-index="${r.attr(
                "data-swiper-slide-index"
              )}"]`
            )
            .addClass(i.slideDuplicateNextClass)
        : n
            .children(
              `.${i.slideClass}.${
                i.slideDuplicateClass
              }[data-swiper-slide-index="${r.attr("data-swiper-slide-index")}"]`
            )
            .addClass(i.slideDuplicateNextClass),
      d.hasClass(i.slideDuplicateClass)
        ? n
            .children(
              `.${i.slideClass}:not(.${
                i.slideDuplicateClass
              })[data-swiper-slide-index="${d.attr(
                "data-swiper-slide-index"
              )}"]`
            )
            .addClass(i.slideDuplicatePrevClass)
        : n
            .children(
              `.${i.slideClass}.${
                i.slideDuplicateClass
              }[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`
            )
            .addClass(i.slideDuplicatePrevClass)),
    t.emitSlidesClasses();
}
function si(t) {
  const e = this,
    i = e.rtlTranslate ? e.translate : -e.translate,
    {
      slidesGrid: n,
      snapGrid: a,
      params: s,
      activeIndex: l,
      realIndex: o,
      snapIndex: r
    } = e;
  let d = t,
    u;
  if (typeof d > "u") {
    for (let p = 0; p < n.length; p += 1)
      typeof n[p + 1] < "u"
        ? i >= n[p] && i < n[p + 1] - (n[p + 1] - n[p]) / 2
          ? (d = p)
          : i >= n[p] && i < n[p + 1] && (d = p + 1)
        : i >= n[p] && (d = p);
    s.normalizeSlideIndex && (d < 0 || typeof d > "u") && (d = 0);
  }
  if (a.indexOf(i) >= 0) u = a.indexOf(i);
  else {
    const p = Math.min(s.slidesPerGroupSkip, d);
    u = p + Math.floor((d - p) / s.slidesPerGroup);
  }
  if ((u >= a.length && (u = a.length - 1), d === l)) {
    u !== r && ((e.snapIndex = u), e.emit("snapIndexChange"));
    return;
  }
  const f = parseInt(e.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
  Object.assign(e, {
    snapIndex: u,
    realIndex: f,
    previousIndex: l,
    activeIndex: d
  }),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    o !== f && e.emit("realIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange");
}
function ai(t) {
  const e = this,
    i = e.params,
    n = S(t).closest(`.${i.slideClass}`)[0];
  let a = !1,
    s;
  if (n) {
    for (let l = 0; l < e.slides.length; l += 1)
      if (e.slides[l] === n) {
        (a = !0), (s = l);
        break;
      }
  }
  if (n && a)
    (e.clickedSlide = n),
      e.virtual && e.params.virtual.enabled
        ? (e.clickedIndex = parseInt(S(n).attr("data-swiper-slide-index"), 10))
        : (e.clickedIndex = s);
  else {
    (e.clickedSlide = void 0), (e.clickedIndex = void 0);
    return;
  }
  i.slideToClickedSlide &&
    e.clickedIndex !== void 0 &&
    e.clickedIndex !== e.activeIndex &&
    e.slideToClickedSlide();
}
const ri = {
  updateSize: Zt,
  updateSlides: Jt,
  updateAutoHeight: Qt,
  updateSlidesOffset: ei,
  updateSlidesProgress: ti,
  updateProgress: ii,
  updateSlidesClasses: ni,
  updateActiveIndex: si,
  updateClickedSlide: ai
};
function li(t) {
  t === void 0 && (t = this.isHorizontal() ? "x" : "y");
  const e = this,
    { params: i, rtlTranslate: n, translate: a, $wrapperEl: s } = e;
  if (i.virtualTranslate) return n ? -a : a;
  if (i.cssMode) return a;
  let l = Rt(s[0], t);
  return n && (l = -l), l || 0;
}
function oi(t, e) {
  const i = this,
    {
      rtlTranslate: n,
      params: a,
      $wrapperEl: s,
      wrapperEl: l,
      progress: o
    } = i;
  let r = 0,
    d = 0;
  const u = 0;
  i.isHorizontal() ? (r = n ? -t : t) : (d = t),
    a.roundLengths && ((r = Math.floor(r)), (d = Math.floor(d))),
    a.cssMode
      ? (l[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal()
          ? -r
          : -d)
      : a.virtualTranslate ||
        s.transform(`translate3d(${r}px, ${d}px, ${u}px)`),
    (i.previousTranslate = i.translate),
    (i.translate = i.isHorizontal() ? r : d);
  let f;
  const p = i.maxTranslate() - i.minTranslate();
  p === 0 ? (f = 0) : (f = (t - i.minTranslate()) / p),
    f !== o && i.updateProgress(t),
    i.emit("setTranslate", i.translate, e);
}
function di() {
  return -this.snapGrid[0];
}
function ui() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function fi(t, e, i, n, a) {
  t === void 0 && (t = 0),
    e === void 0 && (e = this.params.speed),
    i === void 0 && (i = !0),
    n === void 0 && (n = !0);
  const s = this,
    { params: l, wrapperEl: o } = s;
  if (s.animating && l.preventInteractionOnTransition) return !1;
  const r = s.minTranslate(),
    d = s.maxTranslate();
  let u;
  if (
    (n && t > r ? (u = r) : n && t < d ? (u = d) : (u = t),
    s.updateProgress(u),
    l.cssMode)
  ) {
    const f = s.isHorizontal();
    if (e === 0) o[f ? "scrollLeft" : "scrollTop"] = -u;
    else {
      if (!s.support.smoothScroll)
        return (
          Le({ swiper: s, targetPosition: -u, side: f ? "left" : "top" }), !0
        );
      o.scrollTo({ [f ? "left" : "top"]: -u, behavior: "smooth" });
    }
    return !0;
  }
  return (
    e === 0
      ? (s.setTransition(0),
        s.setTranslate(u),
        i && (s.emit("beforeTransitionStart", e, a), s.emit("transitionEnd")))
      : (s.setTransition(e),
        s.setTranslate(u),
        i && (s.emit("beforeTransitionStart", e, a), s.emit("transitionStart")),
        s.animating ||
          ((s.animating = !0),
          s.onTranslateToWrapperTransitionEnd ||
            (s.onTranslateToWrapperTransitionEnd = function (p) {
              !s ||
                s.destroyed ||
                (p.target === this &&
                  (s.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    s.onTranslateToWrapperTransitionEnd
                  ),
                  s.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    s.onTranslateToWrapperTransitionEnd
                  ),
                  (s.onTranslateToWrapperTransitionEnd = null),
                  delete s.onTranslateToWrapperTransitionEnd,
                  i && s.emit("transitionEnd")));
            }),
          s.$wrapperEl[0].addEventListener(
            "transitionend",
            s.onTranslateToWrapperTransitionEnd
          ),
          s.$wrapperEl[0].addEventListener(
            "webkitTransitionEnd",
            s.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
const ci = {
  getTranslate: li,
  setTranslate: oi,
  minTranslate: di,
  maxTranslate: ui,
  translateTo: fi
};
function pi(t, e) {
  const i = this;
  i.params.cssMode || i.$wrapperEl.transition(t), i.emit("setTransition", t, e);
}
function _e(t) {
  let { swiper: e, runCallbacks: i, direction: n, step: a } = t;
  const { activeIndex: s, previousIndex: l } = e;
  let o = n;
  if (
    (o || (s > l ? (o = "next") : s < l ? (o = "prev") : (o = "reset")),
    e.emit(`transition${a}`),
    i && s !== l)
  ) {
    if (o === "reset") {
      e.emit(`slideResetTransition${a}`);
      return;
    }
    e.emit(`slideChangeTransition${a}`),
      o === "next"
        ? e.emit(`slideNextTransition${a}`)
        : e.emit(`slidePrevTransition${a}`);
  }
}
function hi(t, e) {
  t === void 0 && (t = !0);
  const i = this,
    { params: n } = i;
  n.cssMode ||
    (n.autoHeight && i.updateAutoHeight(),
    _e({ swiper: i, runCallbacks: t, direction: e, step: "Start" }));
}
function gi(t, e) {
  t === void 0 && (t = !0);
  const i = this,
    { params: n } = i;
  (i.animating = !1),
    !n.cssMode &&
      (i.setTransition(0),
      _e({ swiper: i, runCallbacks: t, direction: e, step: "End" }));
}
const mi = { setTransition: pi, transitionStart: hi, transitionEnd: gi };
function vi(t, e, i, n, a) {
  if (
    (t === void 0 && (t = 0),
    e === void 0 && (e = this.params.speed),
    i === void 0 && (i = !0),
    typeof t != "number" && typeof t != "string")
  )
    throw new Error(
      `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof t}] given.`
    );
  if (typeof t == "string") {
    const b = parseInt(t, 10);
    if (!isFinite(b))
      throw new Error(
        `The passed-in 'index' (string) couldn't be converted to 'number'. [${t}] given.`
      );
    t = b;
  }
  const s = this;
  let l = t;
  l < 0 && (l = 0);
  const {
    params: o,
    snapGrid: r,
    slidesGrid: d,
    previousIndex: u,
    activeIndex: f,
    rtlTranslate: p,
    wrapperEl: m,
    enabled: g
  } = s;
  if ((s.animating && o.preventInteractionOnTransition) || (!g && !n && !a))
    return !1;
  const v = Math.min(s.params.slidesPerGroupSkip, l);
  let c = v + Math.floor((l - v) / s.params.slidesPerGroup);
  c >= r.length && (c = r.length - 1),
    (f || o.initialSlide || 0) === (u || 0) &&
      i &&
      s.emit("beforeSlideChangeStart");
  const h = -r[c];
  if ((s.updateProgress(h), o.normalizeSlideIndex))
    for (let b = 0; b < d.length; b += 1) {
      const y = -Math.floor(h * 100),
        O = Math.floor(d[b] * 100),
        C = Math.floor(d[b + 1] * 100);
      typeof d[b + 1] < "u"
        ? y >= O && y < C - (C - O) / 2
          ? (l = b)
          : y >= O && y < C && (l = b + 1)
        : y >= O && (l = b);
    }
  if (
    s.initialized &&
    l !== f &&
    ((!s.allowSlideNext && h < s.translate && h < s.minTranslate()) ||
      (!s.allowSlidePrev &&
        h > s.translate &&
        h > s.maxTranslate() &&
        (f || 0) !== l))
  )
    return !1;
  let w;
  if (
    (l > f ? (w = "next") : l < f ? (w = "prev") : (w = "reset"),
    (p && -h === s.translate) || (!p && h === s.translate))
  )
    return (
      s.updateActiveIndex(l),
      o.autoHeight && s.updateAutoHeight(),
      s.updateSlidesClasses(),
      o.effect !== "slide" && s.setTranslate(h),
      w !== "reset" && (s.transitionStart(i, w), s.transitionEnd(i, w)),
      !1
    );
  if (o.cssMode) {
    const b = s.isHorizontal(),
      y = p ? h : -h;
    if (e === 0) {
      const O = s.virtual && s.params.virtual.enabled;
      O &&
        ((s.wrapperEl.style.scrollSnapType = "none"),
        (s._immediateVirtual = !0)),
        (m[b ? "scrollLeft" : "scrollTop"] = y),
        O &&
          requestAnimationFrame(() => {
            (s.wrapperEl.style.scrollSnapType = ""),
              (s._swiperImmediateVirtual = !1);
          });
    } else {
      if (!s.support.smoothScroll)
        return (
          Le({ swiper: s, targetPosition: y, side: b ? "left" : "top" }), !0
        );
      m.scrollTo({ [b ? "left" : "top"]: y, behavior: "smooth" });
    }
    return !0;
  }
  return (
    s.setTransition(e),
    s.setTranslate(h),
    s.updateActiveIndex(l),
    s.updateSlidesClasses(),
    s.emit("beforeTransitionStart", e, n),
    s.transitionStart(i, w),
    e === 0
      ? s.transitionEnd(i, w)
      : s.animating ||
        ((s.animating = !0),
        s.onSlideToWrapperTransitionEnd ||
          (s.onSlideToWrapperTransitionEnd = function (y) {
            !s ||
              s.destroyed ||
              (y.target === this &&
                (s.$wrapperEl[0].removeEventListener(
                  "transitionend",
                  s.onSlideToWrapperTransitionEnd
                ),
                s.$wrapperEl[0].removeEventListener(
                  "webkitTransitionEnd",
                  s.onSlideToWrapperTransitionEnd
                ),
                (s.onSlideToWrapperTransitionEnd = null),
                delete s.onSlideToWrapperTransitionEnd,
                s.transitionEnd(i, w)));
          }),
        s.$wrapperEl[0].addEventListener(
          "transitionend",
          s.onSlideToWrapperTransitionEnd
        ),
        s.$wrapperEl[0].addEventListener(
          "webkitTransitionEnd",
          s.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function wi(t, e, i, n) {
  if (
    (t === void 0 && (t = 0),
    e === void 0 && (e = this.params.speed),
    i === void 0 && (i = !0),
    typeof t == "string")
  ) {
    const l = parseInt(t, 10);
    if (!isFinite(l))
      throw new Error(
        `The passed-in 'index' (string) couldn't be converted to 'number'. [${t}] given.`
      );
    t = l;
  }
  const a = this;
  let s = t;
  return a.params.loop && (s += a.loopedSlides), a.slideTo(s, e, i, n);
}
function bi(t, e, i) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
  const n = this,
    { animating: a, enabled: s, params: l } = n;
  if (!s) return n;
  let o = l.slidesPerGroup;
  l.slidesPerView === "auto" &&
    l.slidesPerGroup === 1 &&
    l.slidesPerGroupAuto &&
    (o = Math.max(n.slidesPerViewDynamic("current", !0), 1));
  const r = n.activeIndex < l.slidesPerGroupSkip ? 1 : o;
  if (l.loop) {
    if (a && l.loopPreventsSlide) return !1;
    n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
  }
  return l.rewind && n.isEnd
    ? n.slideTo(0, t, e, i)
    : n.slideTo(n.activeIndex + r, t, e, i);
}
function Si(t, e, i) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
  const n = this,
    {
      params: a,
      animating: s,
      snapGrid: l,
      slidesGrid: o,
      rtlTranslate: r,
      enabled: d
    } = n;
  if (!d) return n;
  if (a.loop) {
    if (s && a.loopPreventsSlide) return !1;
    n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
  }
  const u = r ? n.translate : -n.translate;
  function f(c) {
    return c < 0 ? -Math.floor(Math.abs(c)) : Math.floor(c);
  }
  const p = f(u),
    m = l.map(c => f(c));
  let g = l[m.indexOf(p) - 1];
  if (typeof g > "u" && a.cssMode) {
    let c;
    l.forEach((h, w) => {
      p >= h && (c = w);
    }),
      typeof c < "u" && (g = l[c > 0 ? c - 1 : c]);
  }
  let v = 0;
  if (
    (typeof g < "u" &&
      ((v = o.indexOf(g)),
      v < 0 && (v = n.activeIndex - 1),
      a.slidesPerView === "auto" &&
        a.slidesPerGroup === 1 &&
        a.slidesPerGroupAuto &&
        ((v = v - n.slidesPerViewDynamic("previous", !0) + 1),
        (v = Math.max(v, 0)))),
    a.rewind && n.isBeginning)
  ) {
    const c =
      n.params.virtual && n.params.virtual.enabled && n.virtual
        ? n.virtual.slides.length - 1
        : n.slides.length - 1;
    return n.slideTo(c, t, e, i);
  }
  return n.slideTo(v, t, e, i);
}
function yi(t, e, i) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
  const n = this;
  return n.slideTo(n.activeIndex, t, e, i);
}
function Ci(t, e, i, n) {
  t === void 0 && (t = this.params.speed),
    e === void 0 && (e = !0),
    n === void 0 && (n = 0.5);
  const a = this;
  let s = a.activeIndex;
  const l = Math.min(a.params.slidesPerGroupSkip, s),
    o = l + Math.floor((s - l) / a.params.slidesPerGroup),
    r = a.rtlTranslate ? a.translate : -a.translate;
  if (r >= a.snapGrid[o]) {
    const d = a.snapGrid[o],
      u = a.snapGrid[o + 1];
    r - d > (u - d) * n && (s += a.params.slidesPerGroup);
  } else {
    const d = a.snapGrid[o - 1],
      u = a.snapGrid[o];
    r - d <= (u - d) * n && (s -= a.params.slidesPerGroup);
  }
  return (
    (s = Math.max(s, 0)),
    (s = Math.min(s, a.slidesGrid.length - 1)),
    a.slideTo(s, t, e, i)
  );
}
function Ti() {
  const t = this,
    { params: e, $wrapperEl: i } = t,
    n = e.slidesPerView === "auto" ? t.slidesPerViewDynamic() : e.slidesPerView;
  let a = t.clickedIndex,
    s;
  if (e.loop) {
    if (t.animating) return;
    (s = parseInt(S(t.clickedSlide).attr("data-swiper-slide-index"), 10)),
      e.centeredSlides
        ? a < t.loopedSlides - n / 2 ||
          a > t.slides.length - t.loopedSlides + n / 2
          ? (t.loopFix(),
            (a = i
              .children(
                `.${e.slideClass}[data-swiper-slide-index="${s}"]:not(.${e.slideDuplicateClass})`
              )
              .eq(0)
              .index()),
            K(() => {
              t.slideTo(a);
            }))
          : t.slideTo(a)
        : a > t.slides.length - n
        ? (t.loopFix(),
          (a = i
            .children(
              `.${e.slideClass}[data-swiper-slide-index="${s}"]:not(.${e.slideDuplicateClass})`
            )
            .eq(0)
            .index()),
          K(() => {
            t.slideTo(a);
          }))
        : t.slideTo(a);
  } else t.slideTo(a);
}
const Ei = {
  slideTo: vi,
  slideToLoop: wi,
  slideNext: bi,
  slidePrev: Si,
  slideReset: yi,
  slideToClosest: Ci,
  slideToClickedSlide: Ti
};
function xi() {
  const t = this,
    e = L(),
    { params: i, $wrapperEl: n } = t,
    a = n.children().length > 0 ? S(n.children()[0].parentNode) : n;
  a.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
  let s = a.children(`.${i.slideClass}`);
  if (i.loopFillGroupWithBlank) {
    const r = i.slidesPerGroup - (s.length % i.slidesPerGroup);
    if (r !== i.slidesPerGroup) {
      for (let d = 0; d < r; d += 1) {
        const u = S(e.createElement("div")).addClass(
          `${i.slideClass} ${i.slideBlankClass}`
        );
        a.append(u);
      }
      s = a.children(`.${i.slideClass}`);
    }
  }
  i.slidesPerView === "auto" && !i.loopedSlides && (i.loopedSlides = s.length),
    (t.loopedSlides = Math.ceil(
      parseFloat(i.loopedSlides || i.slidesPerView, 10)
    )),
    (t.loopedSlides += i.loopAdditionalSlides),
    t.loopedSlides > s.length &&
      t.params.loopedSlidesLimit &&
      (t.loopedSlides = s.length);
  const l = [],
    o = [];
  s.each((r, d) => {
    S(r).attr("data-swiper-slide-index", d);
  });
  for (let r = 0; r < t.loopedSlides; r += 1) {
    const d = r - Math.floor(r / s.length) * s.length;
    o.push(s.eq(d)[0]), l.unshift(s.eq(s.length - d - 1)[0]);
  }
  for (let r = 0; r < o.length; r += 1)
    a.append(S(o[r].cloneNode(!0)).addClass(i.slideDuplicateClass));
  for (let r = l.length - 1; r >= 0; r -= 1)
    a.prepend(S(l[r].cloneNode(!0)).addClass(i.slideDuplicateClass));
}
function Pi() {
  const t = this;
  t.emit("beforeLoopFix");
  const {
    activeIndex: e,
    slides: i,
    loopedSlides: n,
    allowSlidePrev: a,
    allowSlideNext: s,
    snapGrid: l,
    rtlTranslate: o
  } = t;
  let r;
  (t.allowSlidePrev = !0), (t.allowSlideNext = !0);
  const u = -l[e] - t.getTranslate();
  e < n
    ? ((r = i.length - n * 3 + e),
      (r += n),
      t.slideTo(r, 0, !1, !0) &&
        u !== 0 &&
        t.setTranslate((o ? -t.translate : t.translate) - u))
    : e >= i.length - n &&
      ((r = -i.length + e + n),
      (r += n),
      t.slideTo(r, 0, !1, !0) &&
        u !== 0 &&
        t.setTranslate((o ? -t.translate : t.translate) - u)),
    (t.allowSlidePrev = a),
    (t.allowSlideNext = s),
    t.emit("loopFix");
}
function Mi() {
  const t = this,
    { $wrapperEl: e, params: i, slides: n } = t;
  e
    .children(
      `.${i.slideClass}.${i.slideDuplicateClass},.${i.slideClass}.${i.slideBlankClass}`
    )
    .remove(),
    n.removeAttr("data-swiper-slide-index");
}
const Oi = { loopCreate: xi, loopFix: Pi, loopDestroy: Mi };
function $i(t) {
  const e = this;
  if (
    e.support.touch ||
    !e.params.simulateTouch ||
    (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode
  )
    return;
  const i = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  (i.style.cursor = "move"), (i.style.cursor = t ? "grabbing" : "grab");
}
function Li() {
  const t = this;
  t.support.touch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode ||
    (t[
      t.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = "");
}
const Bi = { setGrabCursor: $i, unsetGrabCursor: Li };
function _i(t, e) {
  e === void 0 && (e = this);
  function i(n) {
    if (!n || n === L() || n === $()) return null;
    n.assignedSlot && (n = n.assignedSlot);
    const a = n.closest(t);
    return !a && !n.getRootNode ? null : a || i(n.getRootNode().host);
  }
  return i(e);
}
function Ii(t) {
  const e = this,
    i = L(),
    n = $(),
    a = e.touchEventsData,
    { params: s, touches: l, enabled: o } = e;
  if (!o || (e.animating && s.preventInteractionOnTransition)) return;
  !e.animating && s.cssMode && s.loop && e.loopFix();
  let r = t;
  r.originalEvent && (r = r.originalEvent);
  let d = S(r.target);
  if (
    (s.touchEventsTarget === "wrapper" && !d.closest(e.wrapperEl).length) ||
    ((a.isTouchEvent = r.type === "touchstart"),
    !a.isTouchEvent && "which" in r && r.which === 3) ||
    (!a.isTouchEvent && "button" in r && r.button > 0) ||
    (a.isTouched && a.isMoved)
  )
    return;
  !!s.noSwipingClass &&
    s.noSwipingClass !== "" &&
    r.target &&
    r.target.shadowRoot &&
    t.path &&
    t.path[0] &&
    (d = S(t.path[0]));
  const f = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
    p = !!(r.target && r.target.shadowRoot);
  if (s.noSwiping && (p ? _i(f, d[0]) : d.closest(f)[0])) {
    e.allowClick = !0;
    return;
  }
  if (s.swipeHandler && !d.closest(s.swipeHandler)[0]) return;
  (l.currentX = r.type === "touchstart" ? r.targetTouches[0].pageX : r.pageX),
    (l.currentY = r.type === "touchstart" ? r.targetTouches[0].pageY : r.pageY);
  const m = l.currentX,
    g = l.currentY,
    v = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
    c = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
  if (v && (m <= c || m >= n.innerWidth - c))
    if (v === "prevent") t.preventDefault();
    else return;
  if (
    (Object.assign(a, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0
    }),
    (l.startX = m),
    (l.startY = g),
    (a.touchStartTime = H()),
    (e.allowClick = !0),
    e.updateSize(),
    (e.swipeDirection = void 0),
    s.threshold > 0 && (a.allowThresholdMove = !1),
    r.type !== "touchstart")
  ) {
    let h = !0;
    d.is(a.focusableElements) &&
      ((h = !1), d[0].nodeName === "SELECT" && (a.isTouched = !1)),
      i.activeElement &&
        S(i.activeElement).is(a.focusableElements) &&
        i.activeElement !== d[0] &&
        i.activeElement.blur();
    const w = h && e.allowTouchMove && s.touchStartPreventDefault;
    (s.touchStartForcePreventDefault || w) &&
      !d[0].isContentEditable &&
      r.preventDefault();
  }
  e.params.freeMode &&
    e.params.freeMode.enabled &&
    e.freeMode &&
    e.animating &&
    !s.cssMode &&
    e.freeMode.onTouchStart(),
    e.emit("touchStart", r);
}
function zi(t) {
  const e = L(),
    i = this,
    n = i.touchEventsData,
    { params: a, touches: s, rtlTranslate: l, enabled: o } = i;
  if (!o) return;
  let r = t;
  if ((r.originalEvent && (r = r.originalEvent), !n.isTouched)) {
    n.startMoving && n.isScrolling && i.emit("touchMoveOpposite", r);
    return;
  }
  if (n.isTouchEvent && r.type !== "touchmove") return;
  const d =
      r.type === "touchmove" &&
      r.targetTouches &&
      (r.targetTouches[0] || r.changedTouches[0]),
    u = r.type === "touchmove" ? d.pageX : r.pageX,
    f = r.type === "touchmove" ? d.pageY : r.pageY;
  if (r.preventedByNestedSwiper) {
    (s.startX = u), (s.startY = f);
    return;
  }
  if (!i.allowTouchMove) {
    S(r.target).is(n.focusableElements) || (i.allowClick = !1),
      n.isTouched &&
        (Object.assign(s, { startX: u, startY: f, currentX: u, currentY: f }),
        (n.touchStartTime = H()));
    return;
  }
  if (n.isTouchEvent && a.touchReleaseOnEdges && !a.loop) {
    if (i.isVertical()) {
      if (
        (f < s.startY && i.translate <= i.maxTranslate()) ||
        (f > s.startY && i.translate >= i.minTranslate())
      ) {
        (n.isTouched = !1), (n.isMoved = !1);
        return;
      }
    } else if (
      (u < s.startX && i.translate <= i.maxTranslate()) ||
      (u > s.startX && i.translate >= i.minTranslate())
    )
      return;
  }
  if (
    n.isTouchEvent &&
    e.activeElement &&
    r.target === e.activeElement &&
    S(r.target).is(n.focusableElements)
  ) {
    (n.isMoved = !0), (i.allowClick = !1);
    return;
  }
  if (
    (n.allowTouchCallbacks && i.emit("touchMove", r),
    r.targetTouches && r.targetTouches.length > 1)
  )
    return;
  (s.currentX = u), (s.currentY = f);
  const p = s.currentX - s.startX,
    m = s.currentY - s.startY;
  if (i.params.threshold && Math.sqrt(p ** 2 + m ** 2) < i.params.threshold)
    return;
  if (typeof n.isScrolling > "u") {
    let h;
    (i.isHorizontal() && s.currentY === s.startY) ||
    (i.isVertical() && s.currentX === s.startX)
      ? (n.isScrolling = !1)
      : p * p + m * m >= 25 &&
        ((h = (Math.atan2(Math.abs(m), Math.abs(p)) * 180) / Math.PI),
        (n.isScrolling = i.isHorizontal()
          ? h > a.touchAngle
          : 90 - h > a.touchAngle));
  }
  if (
    (n.isScrolling && i.emit("touchMoveOpposite", r),
    typeof n.startMoving > "u" &&
      (s.currentX !== s.startX || s.currentY !== s.startY) &&
      (n.startMoving = !0),
    n.isScrolling)
  ) {
    n.isTouched = !1;
    return;
  }
  if (!n.startMoving) return;
  (i.allowClick = !1),
    !a.cssMode && r.cancelable && r.preventDefault(),
    a.touchMoveStopPropagation && !a.nested && r.stopPropagation(),
    n.isMoved ||
      (a.loop && !a.cssMode && i.loopFix(),
      (n.startTranslate = i.getTranslate()),
      i.setTransition(0),
      i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
      (n.allowMomentumBounce = !1),
      a.grabCursor &&
        (i.allowSlideNext === !0 || i.allowSlidePrev === !0) &&
        i.setGrabCursor(!0),
      i.emit("sliderFirstMove", r)),
    i.emit("sliderMove", r),
    (n.isMoved = !0);
  let g = i.isHorizontal() ? p : m;
  (s.diff = g),
    (g *= a.touchRatio),
    l && (g = -g),
    (i.swipeDirection = g > 0 ? "prev" : "next"),
    (n.currentTranslate = g + n.startTranslate);
  let v = !0,
    c = a.resistanceRatio;
  if (
    (a.touchReleaseOnEdges && (c = 0),
    g > 0 && n.currentTranslate > i.minTranslate()
      ? ((v = !1),
        a.resistance &&
          (n.currentTranslate =
            i.minTranslate() -
            1 +
            (-i.minTranslate() + n.startTranslate + g) ** c))
      : g < 0 &&
        n.currentTranslate < i.maxTranslate() &&
        ((v = !1),
        a.resistance &&
          (n.currentTranslate =
            i.maxTranslate() +
            1 -
            (i.maxTranslate() - n.startTranslate - g) ** c)),
    v && (r.preventedByNestedSwiper = !0),
    !i.allowSlideNext &&
      i.swipeDirection === "next" &&
      n.currentTranslate < n.startTranslate &&
      (n.currentTranslate = n.startTranslate),
    !i.allowSlidePrev &&
      i.swipeDirection === "prev" &&
      n.currentTranslate > n.startTranslate &&
      (n.currentTranslate = n.startTranslate),
    !i.allowSlidePrev &&
      !i.allowSlideNext &&
      (n.currentTranslate = n.startTranslate),
    a.threshold > 0)
  )
    if (Math.abs(g) > a.threshold || n.allowThresholdMove) {
      if (!n.allowThresholdMove) {
        (n.allowThresholdMove = !0),
          (s.startX = s.currentX),
          (s.startY = s.currentY),
          (n.currentTranslate = n.startTranslate),
          (s.diff = i.isHorizontal()
            ? s.currentX - s.startX
            : s.currentY - s.startY);
        return;
      }
    } else {
      n.currentTranslate = n.startTranslate;
      return;
    }
  !a.followFinger ||
    a.cssMode ||
    (((a.freeMode && a.freeMode.enabled && i.freeMode) ||
      a.watchSlidesProgress) &&
      (i.updateActiveIndex(), i.updateSlidesClasses()),
    i.params.freeMode &&
      a.freeMode.enabled &&
      i.freeMode &&
      i.freeMode.onTouchMove(),
    i.updateProgress(n.currentTranslate),
    i.setTranslate(n.currentTranslate));
}
function ki(t) {
  const e = this,
    i = e.touchEventsData,
    { params: n, touches: a, rtlTranslate: s, slidesGrid: l, enabled: o } = e;
  if (!o) return;
  let r = t;
  if (
    (r.originalEvent && (r = r.originalEvent),
    i.allowTouchCallbacks && e.emit("touchEnd", r),
    (i.allowTouchCallbacks = !1),
    !i.isTouched)
  ) {
    i.isMoved && n.grabCursor && e.setGrabCursor(!1),
      (i.isMoved = !1),
      (i.startMoving = !1);
    return;
  }
  n.grabCursor &&
    i.isMoved &&
    i.isTouched &&
    (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
    e.setGrabCursor(!1);
  const d = H(),
    u = d - i.touchStartTime;
  if (e.allowClick) {
    const w = r.path || (r.composedPath && r.composedPath());
    e.updateClickedSlide((w && w[0]) || r.target),
      e.emit("tap click", r),
      u < 300 &&
        d - i.lastClickTime < 300 &&
        e.emit("doubleTap doubleClick", r);
  }
  if (
    ((i.lastClickTime = H()),
    K(() => {
      e.destroyed || (e.allowClick = !0);
    }),
    !i.isTouched ||
      !i.isMoved ||
      !e.swipeDirection ||
      a.diff === 0 ||
      i.currentTranslate === i.startTranslate)
  ) {
    (i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
    return;
  }
  (i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
  let f;
  if (
    (n.followFinger
      ? (f = s ? e.translate : -e.translate)
      : (f = -i.currentTranslate),
    n.cssMode)
  )
    return;
  if (e.params.freeMode && n.freeMode.enabled) {
    e.freeMode.onTouchEnd({ currentPos: f });
    return;
  }
  let p = 0,
    m = e.slidesSizesGrid[0];
  for (
    let w = 0;
    w < l.length;
    w += w < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
  ) {
    const b = w < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
    typeof l[w + b] < "u"
      ? f >= l[w] && f < l[w + b] && ((p = w), (m = l[w + b] - l[w]))
      : f >= l[w] && ((p = w), (m = l[l.length - 1] - l[l.length - 2]));
  }
  let g = null,
    v = null;
  n.rewind &&
    (e.isBeginning
      ? (v =
          e.params.virtual && e.params.virtual.enabled && e.virtual
            ? e.virtual.slides.length - 1
            : e.slides.length - 1)
      : e.isEnd && (g = 0));
  const c = (f - l[p]) / m,
    h = p < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
  if (u > n.longSwipesMs) {
    if (!n.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" &&
      (c >= n.longSwipesRatio
        ? e.slideTo(n.rewind && e.isEnd ? g : p + h)
        : e.slideTo(p)),
      e.swipeDirection === "prev" &&
        (c > 1 - n.longSwipesRatio
          ? e.slideTo(p + h)
          : v !== null && c < 0 && Math.abs(c) > n.longSwipesRatio
          ? e.slideTo(v)
          : e.slideTo(p));
  } else {
    if (!n.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation &&
    (r.target === e.navigation.nextEl || r.target === e.navigation.prevEl)
      ? r.target === e.navigation.nextEl
        ? e.slideTo(p + h)
        : e.slideTo(p)
      : (e.swipeDirection === "next" && e.slideTo(g !== null ? g : p + h),
        e.swipeDirection === "prev" && e.slideTo(v !== null ? v : p));
  }
}
function we() {
  const t = this,
    { params: e, el: i } = t;
  if (i && i.offsetWidth === 0) return;
  e.breakpoints && t.setBreakpoint();
  const { allowSlideNext: n, allowSlidePrev: a, snapGrid: s } = t;
  (t.allowSlideNext = !0),
    (t.allowSlidePrev = !0),
    t.updateSize(),
    t.updateSlides(),
    t.updateSlidesClasses(),
    (e.slidesPerView === "auto" || e.slidesPerView > 1) &&
    t.isEnd &&
    !t.isBeginning &&
    !t.params.centeredSlides
      ? t.slideTo(t.slides.length - 1, 0, !1, !0)
      : t.slideTo(t.activeIndex, 0, !1, !0),
    t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.run(),
    (t.allowSlidePrev = a),
    (t.allowSlideNext = n),
    t.params.watchOverflow && s !== t.snapGrid && t.checkOverflow();
}
function Ai(t) {
  const e = this;
  !e.enabled ||
    e.allowClick ||
    (e.params.preventClicks && t.preventDefault(),
    e.params.preventClicksPropagation &&
      e.animating &&
      (t.stopPropagation(), t.stopImmediatePropagation()));
}
function Di() {
  const t = this,
    { wrapperEl: e, rtlTranslate: i, enabled: n } = t;
  if (!n) return;
  (t.previousTranslate = t.translate),
    t.isHorizontal()
      ? (t.translate = -e.scrollLeft)
      : (t.translate = -e.scrollTop),
    t.translate === 0 && (t.translate = 0),
    t.updateActiveIndex(),
    t.updateSlidesClasses();
  let a;
  const s = t.maxTranslate() - t.minTranslate();
  s === 0 ? (a = 0) : (a = (t.translate - t.minTranslate()) / s),
    a !== t.progress && t.updateProgress(i ? -t.translate : t.translate),
    t.emit("setTranslate", t.translate, !1);
}
let be = !1;
function Ni() {}
const Ie = (t, e) => {
  const i = L(),
    {
      params: n,
      touchEvents: a,
      el: s,
      wrapperEl: l,
      device: o,
      support: r
    } = t,
    d = !!n.nested,
    u = e === "on" ? "addEventListener" : "removeEventListener",
    f = e;
  if (!r.touch)
    s[u](a.start, t.onTouchStart, !1),
      i[u](a.move, t.onTouchMove, d),
      i[u](a.end, t.onTouchEnd, !1);
  else {
    const p =
      a.start === "touchstart" && r.passiveListener && n.passiveListeners
        ? { passive: !0, capture: !1 }
        : !1;
    s[u](a.start, t.onTouchStart, p),
      s[u](
        a.move,
        t.onTouchMove,
        r.passiveListener ? { passive: !1, capture: d } : d
      ),
      s[u](a.end, t.onTouchEnd, p),
      a.cancel && s[u](a.cancel, t.onTouchEnd, p);
  }
  (n.preventClicks || n.preventClicksPropagation) &&
    s[u]("click", t.onClick, !0),
    n.cssMode && l[u]("scroll", t.onScroll),
    n.updateOnWindowResize
      ? t[f](
          o.ios || o.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          we,
          !0
        )
      : t[f]("observerUpdate", we, !0);
};
function Gi() {
  const t = this,
    e = L(),
    { params: i, support: n } = t;
  (t.onTouchStart = Ii.bind(t)),
    (t.onTouchMove = zi.bind(t)),
    (t.onTouchEnd = ki.bind(t)),
    i.cssMode && (t.onScroll = Di.bind(t)),
    (t.onClick = Ai.bind(t)),
    n.touch && !be && (e.addEventListener("touchstart", Ni), (be = !0)),
    Ie(t, "on");
}
function Fi() {
  Ie(this, "off");
}
const Ri = { attachEvents: Gi, detachEvents: Fi },
  Se = (t, e) => t.grid && e.grid && e.grid.rows > 1;
function ji() {
  const t = this,
    {
      activeIndex: e,
      initialized: i,
      loopedSlides: n = 0,
      params: a,
      $el: s
    } = t,
    l = a.breakpoints;
  if (!l || (l && Object.keys(l).length === 0)) return;
  const o = t.getBreakpoint(l, t.params.breakpointsBase, t.el);
  if (!o || t.currentBreakpoint === o) return;
  const d = (o in l ? l[o] : void 0) || t.originalParams,
    u = Se(t, a),
    f = Se(t, d),
    p = a.enabled;
  u && !f
    ? (s.removeClass(
        `${a.containerModifierClass}grid ${a.containerModifierClass}grid-column`
      ),
      t.emitContainerClasses())
    : !u &&
      f &&
      (s.addClass(`${a.containerModifierClass}grid`),
      ((d.grid.fill && d.grid.fill === "column") ||
        (!d.grid.fill && a.grid.fill === "column")) &&
        s.addClass(`${a.containerModifierClass}grid-column`),
      t.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach(c => {
      const h = a[c] && a[c].enabled,
        w = d[c] && d[c].enabled;
      h && !w && t[c].disable(), !h && w && t[c].enable();
    });
  const m = d.direction && d.direction !== a.direction,
    g = a.loop && (d.slidesPerView !== a.slidesPerView || m);
  m && i && t.changeDirection(), I(t.params, d);
  const v = t.params.enabled;
  Object.assign(t, {
    allowTouchMove: t.params.allowTouchMove,
    allowSlideNext: t.params.allowSlideNext,
    allowSlidePrev: t.params.allowSlidePrev
  }),
    p && !v ? t.disable() : !p && v && t.enable(),
    (t.currentBreakpoint = o),
    t.emit("_beforeBreakpoint", d),
    g &&
      i &&
      (t.loopDestroy(),
      t.loopCreate(),
      t.updateSlides(),
      t.slideTo(e - n + t.loopedSlides, 0, !1)),
    t.emit("breakpoint", d);
}
function Vi(t, e, i) {
  if ((e === void 0 && (e = "window"), !t || (e === "container" && !i))) return;
  let n = !1;
  const a = $(),
    s = e === "window" ? a.innerHeight : i.clientHeight,
    l = Object.keys(t).map(o => {
      if (typeof o == "string" && o.indexOf("@") === 0) {
        const r = parseFloat(o.substr(1));
        return { value: s * r, point: o };
      }
      return { value: o, point: o };
    });
  l.sort((o, r) => parseInt(o.value, 10) - parseInt(r.value, 10));
  for (let o = 0; o < l.length; o += 1) {
    const { point: r, value: d } = l[o];
    e === "window"
      ? a.matchMedia(`(min-width: ${d}px)`).matches && (n = r)
      : d <= i.clientWidth && (n = r);
  }
  return n || "max";
}
const Hi = { setBreakpoint: ji, getBreakpoint: Vi };
function Wi(t, e) {
  const i = [];
  return (
    t.forEach(n => {
      typeof n == "object"
        ? Object.keys(n).forEach(a => {
            n[a] && i.push(e + a);
          })
        : typeof n == "string" && i.push(e + n);
    }),
    i
  );
}
function qi() {
  const t = this,
    { classNames: e, params: i, rtl: n, $el: a, device: s, support: l } = t,
    o = Wi(
      [
        "initialized",
        i.direction,
        { "pointer-events": !l.touch },
        { "free-mode": t.params.freeMode && i.freeMode.enabled },
        { autoheight: i.autoHeight },
        { rtl: n },
        { grid: i.grid && i.grid.rows > 1 },
        {
          "grid-column": i.grid && i.grid.rows > 1 && i.grid.fill === "column"
        },
        { android: s.android },
        { ios: s.ios },
        { "css-mode": i.cssMode },
        { centered: i.cssMode && i.centeredSlides },
        { "watch-progress": i.watchSlidesProgress }
      ],
      i.containerModifierClass
    );
  e.push(...o), a.addClass([...e].join(" ")), t.emitContainerClasses();
}
function Xi() {
  const t = this,
    { $el: e, classNames: i } = t;
  e.removeClass(i.join(" ")), t.emitContainerClasses();
}
const Yi = { addClasses: qi, removeClasses: Xi };
function Ui(t, e, i, n, a, s) {
  const l = $();
  let o;
  function r() {
    s && s();
  }
  !S(t).parent("picture")[0] && (!t.complete || !a) && e
    ? ((o = new l.Image()),
      (o.onload = r),
      (o.onerror = r),
      n && (o.sizes = n),
      i && (o.srcset = i),
      e && (o.src = e))
    : r();
}
function Ki() {
  const t = this;
  t.imagesToLoad = t.$el.find("img");
  function e() {
    typeof t > "u" ||
      t === null ||
      !t ||
      t.destroyed ||
      (t.imagesLoaded !== void 0 && (t.imagesLoaded += 1),
      t.imagesLoaded === t.imagesToLoad.length &&
        (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady")));
  }
  for (let i = 0; i < t.imagesToLoad.length; i += 1) {
    const n = t.imagesToLoad[i];
    t.loadImage(
      n,
      n.currentSrc || n.getAttribute("src"),
      n.srcset || n.getAttribute("srcset"),
      n.sizes || n.getAttribute("sizes"),
      !0,
      e
    );
  }
}
const Zi = { loadImage: Ui, preloadImages: Ki };
function Ji() {
  const t = this,
    { isLocked: e, params: i } = t,
    { slidesOffsetBefore: n } = i;
  if (n) {
    const a = t.slides.length - 1,
      s = t.slidesGrid[a] + t.slidesSizesGrid[a] + n * 2;
    t.isLocked = t.size > s;
  } else t.isLocked = t.snapGrid.length === 1;
  i.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked),
    i.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked),
    e && e !== t.isLocked && (t.isEnd = !1),
    e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock");
}
const Qi = { checkOverflow: Ji },
  ye = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopedSlidesLimit: !0,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1
  };
function en(t, e) {
  return function (n) {
    n === void 0 && (n = {});
    const a = Object.keys(n)[0],
      s = n[a];
    if (typeof s != "object" || s === null) {
      I(e, n);
      return;
    }
    if (
      (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 &&
        t[a] === !0 &&
        (t[a] = { auto: !0 }),
      !(a in t && "enabled" in s))
    ) {
      I(e, n);
      return;
    }
    t[a] === !0 && (t[a] = { enabled: !0 }),
      typeof t[a] == "object" && !("enabled" in t[a]) && (t[a].enabled = !0),
      t[a] || (t[a] = { enabled: !1 }),
      I(e, n);
  };
}
const ie = {
    eventsEmitter: Kt,
    update: ri,
    translate: ci,
    transition: mi,
    slide: Ei,
    loop: Oi,
    grabCursor: Bi,
    events: Ri,
    breakpoints: Hi,
    checkOverflow: Qi,
    classes: Yi,
    images: Zi
  },
  ne = {};
class z {
  constructor() {
    let e, i;
    for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
      a[s] = arguments[s];
    if (
      (a.length === 1 &&
      a[0].constructor &&
      Object.prototype.toString.call(a[0]).slice(8, -1) === "Object"
        ? (i = a[0])
        : ([e, i] = a),
      i || (i = {}),
      (i = I({}, i)),
      e && !i.el && (i.el = e),
      i.el && S(i.el).length > 1)
    ) {
      const d = [];
      return (
        S(i.el).each(u => {
          const f = I({}, i, { el: u });
          d.push(new z(f));
        }),
        d
      );
    }
    const l = this;
    (l.__swiper__ = !0),
      (l.support = Be()),
      (l.device = Wt({ userAgent: i.userAgent })),
      (l.browser = Xt()),
      (l.eventsListeners = {}),
      (l.eventsAnyListeners = []),
      (l.modules = [...l.__modules__]),
      i.modules && Array.isArray(i.modules) && l.modules.push(...i.modules);
    const o = {};
    l.modules.forEach(d => {
      d({
        swiper: l,
        extendParams: en(i, o),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l)
      });
    });
    const r = I({}, ye, o);
    return (
      (l.params = I({}, r, ne, i)),
      (l.originalParams = I({}, l.params)),
      (l.passedParams = I({}, i)),
      l.params &&
        l.params.on &&
        Object.keys(l.params.on).forEach(d => {
          l.on(d, l.params.on[d]);
        }),
      l.params && l.params.onAny && l.onAny(l.params.onAny),
      (l.$ = S),
      Object.assign(l, {
        enabled: l.params.enabled,
        el: e,
        classNames: [],
        slides: S(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return l.params.direction === "horizontal";
        },
        isVertical() {
          return l.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: l.params.allowSlideNext,
        allowSlidePrev: l.params.allowSlidePrev,
        touchEvents: (function () {
          const u = ["touchstart", "touchmove", "touchend", "touchcancel"],
            f = ["pointerdown", "pointermove", "pointerup"];
          return (
            (l.touchEventsTouch = {
              start: u[0],
              move: u[1],
              end: u[2],
              cancel: u[3]
            }),
            (l.touchEventsDesktop = { start: f[0], move: f[1], end: f[2] }),
            l.support.touch || !l.params.simulateTouch
              ? l.touchEventsTouch
              : l.touchEventsDesktop
          );
        })(),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: l.params.focusableElements,
          lastClickTime: H(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0
        },
        allowClick: !0,
        allowTouchMove: l.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0
      }),
      l.emit("_swiper"),
      l.params.init && l.init(),
      l
    );
  }
  enable() {
    const e = this;
    e.enabled ||
      ((e.enabled = !0),
      e.params.grabCursor && e.setGrabCursor(),
      e.emit("enable"));
  }
  disable() {
    const e = this;
    !e.enabled ||
      ((e.enabled = !1),
      e.params.grabCursor && e.unsetGrabCursor(),
      e.emit("disable"));
  }
  setProgress(e, i) {
    const n = this;
    e = Math.min(Math.max(e, 0), 1);
    const a = n.minTranslate(),
      l = (n.maxTranslate() - a) * e + a;
    n.translateTo(l, typeof i > "u" ? 0 : i),
      n.updateActiveIndex(),
      n.updateSlidesClasses();
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const i = e.el.className
      .split(" ")
      .filter(
        n =>
          n.indexOf("swiper") === 0 ||
          n.indexOf(e.params.containerModifierClass) === 0
      );
    e.emit("_containerClasses", i.join(" "));
  }
  getSlideClasses(e) {
    const i = this;
    return i.destroyed
      ? ""
      : e.className
          .split(" ")
          .filter(
            n =>
              n.indexOf("swiper-slide") === 0 ||
              n.indexOf(i.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const i = [];
    e.slides.each(n => {
      const a = e.getSlideClasses(n);
      i.push({ slideEl: n, classNames: a }), e.emit("_slideClass", n, a);
    }),
      e.emit("_slideClasses", i);
  }
  slidesPerViewDynamic(e, i) {
    e === void 0 && (e = "current"), i === void 0 && (i = !1);
    const n = this,
      {
        params: a,
        slides: s,
        slidesGrid: l,
        slidesSizesGrid: o,
        size: r,
        activeIndex: d
      } = n;
    let u = 1;
    if (a.centeredSlides) {
      let f = s[d].swiperSlideSize,
        p;
      for (let m = d + 1; m < s.length; m += 1)
        s[m] &&
          !p &&
          ((f += s[m].swiperSlideSize), (u += 1), f > r && (p = !0));
      for (let m = d - 1; m >= 0; m -= 1)
        s[m] &&
          !p &&
          ((f += s[m].swiperSlideSize), (u += 1), f > r && (p = !0));
    } else if (e === "current")
      for (let f = d + 1; f < s.length; f += 1)
        (i ? l[f] + o[f] - l[d] < r : l[f] - l[d] < r) && (u += 1);
    else for (let f = d - 1; f >= 0; f -= 1) l[d] - l[f] < r && (u += 1);
    return u;
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const { snapGrid: i, params: n } = e;
    n.breakpoints && e.setBreakpoint(),
      e.updateSize(),
      e.updateSlides(),
      e.updateProgress(),
      e.updateSlidesClasses();
    function a() {
      const l = e.rtlTranslate ? e.translate * -1 : e.translate,
        o = Math.min(Math.max(l, e.maxTranslate()), e.minTranslate());
      e.setTranslate(o), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let s;
    e.params.freeMode && e.params.freeMode.enabled
      ? (a(), e.params.autoHeight && e.updateAutoHeight())
      : ((e.params.slidesPerView === "auto" || e.params.slidesPerView > 1) &&
        e.isEnd &&
        !e.params.centeredSlides
          ? (s = e.slideTo(e.slides.length - 1, 0, !1, !0))
          : (s = e.slideTo(e.activeIndex, 0, !1, !0)),
        s || a()),
      n.watchOverflow && i !== e.snapGrid && e.checkOverflow(),
      e.emit("update");
  }
  changeDirection(e, i) {
    i === void 0 && (i = !0);
    const n = this,
      a = n.params.direction;
    return (
      e || (e = a === "horizontal" ? "vertical" : "horizontal"),
      e === a ||
        (e !== "horizontal" && e !== "vertical") ||
        (n.$el
          .removeClass(`${n.params.containerModifierClass}${a}`)
          .addClass(`${n.params.containerModifierClass}${e}`),
        n.emitContainerClasses(),
        (n.params.direction = e),
        n.slides.each(s => {
          e === "vertical" ? (s.style.width = "") : (s.style.height = "");
        }),
        n.emit("changeDirection"),
        i && n.update()),
      n
    );
  }
  changeLanguageDirection(e) {
    const i = this;
    (i.rtl && e === "rtl") ||
      (!i.rtl && e === "ltr") ||
      ((i.rtl = e === "rtl"),
      (i.rtlTranslate = i.params.direction === "horizontal" && i.rtl),
      i.rtl
        ? (i.$el.addClass(`${i.params.containerModifierClass}rtl`),
          (i.el.dir = "rtl"))
        : (i.$el.removeClass(`${i.params.containerModifierClass}rtl`),
          (i.el.dir = "ltr")),
      i.update());
  }
  mount(e) {
    const i = this;
    if (i.mounted) return !0;
    const n = S(e || i.params.el);
    if (((e = n[0]), !e)) return !1;
    e.swiper = i;
    const a = () =>
      `.${(i.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let l = (() => {
      if (e && e.shadowRoot && e.shadowRoot.querySelector) {
        const o = S(e.shadowRoot.querySelector(a()));
        return (o.children = r => n.children(r)), o;
      }
      return n.children ? n.children(a()) : S(n).children(a());
    })();
    if (l.length === 0 && i.params.createElements) {
      const r = L().createElement("div");
      (l = S(r)),
        (r.className = i.params.wrapperClass),
        n.append(r),
        n.children(`.${i.params.slideClass}`).each(d => {
          l.append(d);
        });
    }
    return (
      Object.assign(i, {
        $el: n,
        el: e,
        $wrapperEl: l,
        wrapperEl: l[0],
        mounted: !0,
        rtl: e.dir.toLowerCase() === "rtl" || n.css("direction") === "rtl",
        rtlTranslate:
          i.params.direction === "horizontal" &&
          (e.dir.toLowerCase() === "rtl" || n.css("direction") === "rtl"),
        wrongRTL: l.css("display") === "-webkit-box"
      }),
      !0
    );
  }
  init(e) {
    const i = this;
    return (
      i.initialized ||
        i.mount(e) === !1 ||
        (i.emit("beforeInit"),
        i.params.breakpoints && i.setBreakpoint(),
        i.addClasses(),
        i.params.loop && i.loopCreate(),
        i.updateSize(),
        i.updateSlides(),
        i.params.watchOverflow && i.checkOverflow(),
        i.params.grabCursor && i.enabled && i.setGrabCursor(),
        i.params.preloadImages && i.preloadImages(),
        i.params.loop
          ? i.slideTo(
              i.params.initialSlide + i.loopedSlides,
              0,
              i.params.runCallbacksOnInit,
              !1,
              !0
            )
          : i.slideTo(
              i.params.initialSlide,
              0,
              i.params.runCallbacksOnInit,
              !1,
              !0
            ),
        i.attachEvents(),
        (i.initialized = !0),
        i.emit("init"),
        i.emit("afterInit")),
      i
    );
  }
  destroy(e, i) {
    e === void 0 && (e = !0), i === void 0 && (i = !0);
    const n = this,
      { params: a, $el: s, $wrapperEl: l, slides: o } = n;
    return (
      typeof n.params > "u" ||
        n.destroyed ||
        (n.emit("beforeDestroy"),
        (n.initialized = !1),
        n.detachEvents(),
        a.loop && n.loopDestroy(),
        i &&
          (n.removeClasses(),
          s.removeAttr("style"),
          l.removeAttr("style"),
          o &&
            o.length &&
            o
              .removeClass(
                [
                  a.slideVisibleClass,
                  a.slideActiveClass,
                  a.slideNextClass,
                  a.slidePrevClass
                ].join(" ")
              )
              .removeAttr("style")
              .removeAttr("data-swiper-slide-index")),
        n.emit("destroy"),
        Object.keys(n.eventsListeners).forEach(r => {
          n.off(r);
        }),
        e !== !1 && ((n.$el[0].swiper = null), Gt(n)),
        (n.destroyed = !0)),
      null
    );
  }
  static extendDefaults(e) {
    I(ne, e);
  }
  static get extendedDefaults() {
    return ne;
  }
  static get defaults() {
    return ye;
  }
  static installModule(e) {
    z.prototype.__modules__ || (z.prototype.__modules__ = []);
    const i = z.prototype.__modules__;
    typeof e == "function" && i.indexOf(e) < 0 && i.push(e);
  }
  static use(e) {
    return Array.isArray(e)
      ? (e.forEach(i => z.installModule(i)), z)
      : (z.installModule(e), z);
  }
}
Object.keys(ie).forEach(t => {
  Object.keys(ie[t]).forEach(e => {
    z.prototype[e] = ie[t][e];
  });
});
z.use([Yt, Ut]);
const W = z;
function ze(t, e, i, n) {
  const a = L();
  return (
    t.params.createElements &&
      Object.keys(n).forEach(s => {
        if (!i[s] && i.auto === !0) {
          let l = t.$el.children(`.${n[s]}`)[0];
          l ||
            ((l = a.createElement("div")),
            (l.className = n[s]),
            t.$el.append(l)),
            (i[s] = l),
            (e[s] = l);
        }
      }),
    i
  );
}
function tn(t) {
  let { swiper: e, extendParams: i, on: n, emit: a } = t;
  i({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  }),
    (e.navigation = {
      nextEl: null,
      $nextEl: null,
      prevEl: null,
      $prevEl: null
    });
  function s(g) {
    let v;
    return (
      g &&
        ((v = S(g)),
        e.params.uniqueNavElements &&
          typeof g == "string" &&
          v.length > 1 &&
          e.$el.find(g).length === 1 &&
          (v = e.$el.find(g))),
      v
    );
  }
  function l(g, v) {
    const c = e.params.navigation;
    g &&
      g.length > 0 &&
      (g[v ? "addClass" : "removeClass"](c.disabledClass),
      g[0] && g[0].tagName === "BUTTON" && (g[0].disabled = v),
      e.params.watchOverflow &&
        e.enabled &&
        g[e.isLocked ? "addClass" : "removeClass"](c.lockClass));
  }
  function o() {
    if (e.params.loop) return;
    const { $nextEl: g, $prevEl: v } = e.navigation;
    l(v, e.isBeginning && !e.params.rewind), l(g, e.isEnd && !e.params.rewind);
  }
  function r(g) {
    g.preventDefault(),
      !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
        (e.slidePrev(), a("navigationPrev"));
  }
  function d(g) {
    g.preventDefault(),
      !(e.isEnd && !e.params.loop && !e.params.rewind) &&
        (e.slideNext(), a("navigationNext"));
  }
  function u() {
    const g = e.params.navigation;
    if (
      ((e.params.navigation = ze(
        e,
        e.originalParams.navigation,
        e.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
      )),
      !(g.nextEl || g.prevEl))
    )
      return;
    const v = s(g.nextEl),
      c = s(g.prevEl);
    v && v.length > 0 && v.on("click", d),
      c && c.length > 0 && c.on("click", r),
      Object.assign(e.navigation, {
        $nextEl: v,
        nextEl: v && v[0],
        $prevEl: c,
        prevEl: c && c[0]
      }),
      e.enabled || (v && v.addClass(g.lockClass), c && c.addClass(g.lockClass));
  }
  function f() {
    const { $nextEl: g, $prevEl: v } = e.navigation;
    g &&
      g.length &&
      (g.off("click", d), g.removeClass(e.params.navigation.disabledClass)),
      v &&
        v.length &&
        (v.off("click", r), v.removeClass(e.params.navigation.disabledClass));
  }
  n("init", () => {
    e.params.navigation.enabled === !1 ? m() : (u(), o());
  }),
    n("toEdge fromEdge lock unlock", () => {
      o();
    }),
    n("destroy", () => {
      f();
    }),
    n("enable disable", () => {
      const { $nextEl: g, $prevEl: v } = e.navigation;
      g &&
        g[e.enabled ? "removeClass" : "addClass"](
          e.params.navigation.lockClass
        ),
        v &&
          v[e.enabled ? "removeClass" : "addClass"](
            e.params.navigation.lockClass
          );
    }),
    n("click", (g, v) => {
      const { $nextEl: c, $prevEl: h } = e.navigation,
        w = v.target;
      if (e.params.navigation.hideOnClick && !S(w).is(h) && !S(w).is(c)) {
        if (
          e.pagination &&
          e.params.pagination &&
          e.params.pagination.clickable &&
          (e.pagination.el === w || e.pagination.el.contains(w))
        )
          return;
        let b;
        c
          ? (b = c.hasClass(e.params.navigation.hiddenClass))
          : h && (b = h.hasClass(e.params.navigation.hiddenClass)),
          a(b === !0 ? "navigationShow" : "navigationHide"),
          c && c.toggleClass(e.params.navigation.hiddenClass),
          h && h.toggleClass(e.params.navigation.hiddenClass);
      }
    });
  const p = () => {
      e.$el.removeClass(e.params.navigation.navigationDisabledClass), u(), o();
    },
    m = () => {
      e.$el.addClass(e.params.navigation.navigationDisabledClass), f();
    };
  Object.assign(e.navigation, {
    enable: p,
    disable: m,
    update: o,
    init: u,
    destroy: f
  });
}
function j(t) {
  return (
    t === void 0 && (t = ""),
    `.${t
      .trim()
      .replace(/([\.:!\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  );
}
function nn(t) {
  let { swiper: e, extendParams: i, on: n, emit: a } = t;
  const s = "swiper-pagination";
  i({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: c => c,
      formatFractionTotal: c => c,
      bulletClass: `${s}-bullet`,
      bulletActiveClass: `${s}-bullet-active`,
      modifierClass: `${s}-`,
      currentClass: `${s}-current`,
      totalClass: `${s}-total`,
      hiddenClass: `${s}-hidden`,
      progressbarFillClass: `${s}-progressbar-fill`,
      progressbarOppositeClass: `${s}-progressbar-opposite`,
      clickableClass: `${s}-clickable`,
      lockClass: `${s}-lock`,
      horizontalClass: `${s}-horizontal`,
      verticalClass: `${s}-vertical`,
      paginationDisabledClass: `${s}-disabled`
    }
  }),
    (e.pagination = { el: null, $el: null, bullets: [] });
  let l,
    o = 0;
  function r() {
    return (
      !e.params.pagination.el ||
      !e.pagination.el ||
      !e.pagination.$el ||
      e.pagination.$el.length === 0
    );
  }
  function d(c, h) {
    const { bulletActiveClass: w } = e.params.pagination;
    c[h]().addClass(`${w}-${h}`)[h]().addClass(`${w}-${h}-${h}`);
  }
  function u() {
    const c = e.rtl,
      h = e.params.pagination;
    if (r()) return;
    const w =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.slides.length,
      b = e.pagination.$el;
    let y;
    const O = e.params.loop
      ? Math.ceil((w - e.loopedSlides * 2) / e.params.slidesPerGroup)
      : e.snapGrid.length;
    if (
      (e.params.loop
        ? ((y = Math.ceil(
            (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
          )),
          y > w - 1 - e.loopedSlides * 2 && (y -= w - e.loopedSlides * 2),
          y > O - 1 && (y -= O),
          y < 0 && e.params.paginationType !== "bullets" && (y = O + y))
        : typeof e.snapIndex < "u"
        ? (y = e.snapIndex)
        : (y = e.activeIndex || 0),
      h.type === "bullets" &&
        e.pagination.bullets &&
        e.pagination.bullets.length > 0)
    ) {
      const C = e.pagination.bullets;
      let M, E, B;
      if (
        (h.dynamicBullets &&
          ((l = C.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
          b.css(
            e.isHorizontal() ? "width" : "height",
            `${l * (h.dynamicMainBullets + 4)}px`
          ),
          h.dynamicMainBullets > 1 &&
            e.previousIndex !== void 0 &&
            ((o += y - (e.previousIndex - e.loopedSlides || 0)),
            o > h.dynamicMainBullets - 1
              ? (o = h.dynamicMainBullets - 1)
              : o < 0 && (o = 0)),
          (M = Math.max(y - o, 0)),
          (E = M + (Math.min(C.length, h.dynamicMainBullets) - 1)),
          (B = (E + M) / 2)),
        C.removeClass(
          ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
            .map(T => `${h.bulletActiveClass}${T}`)
            .join(" ")
        ),
        b.length > 1)
      )
        C.each(T => {
          const x = S(T),
            P = x.index();
          P === y && x.addClass(h.bulletActiveClass),
            h.dynamicBullets &&
              (P >= M && P <= E && x.addClass(`${h.bulletActiveClass}-main`),
              P === M && d(x, "prev"),
              P === E && d(x, "next"));
        });
      else {
        const T = C.eq(y),
          x = T.index();
        if ((T.addClass(h.bulletActiveClass), h.dynamicBullets)) {
          const P = C.eq(M),
            D = C.eq(E);
          for (let k = M; k <= E; k += 1)
            C.eq(k).addClass(`${h.bulletActiveClass}-main`);
          if (e.params.loop)
            if (x >= C.length) {
              for (let k = h.dynamicMainBullets; k >= 0; k -= 1)
                C.eq(C.length - k).addClass(`${h.bulletActiveClass}-main`);
              C.eq(C.length - h.dynamicMainBullets - 1).addClass(
                `${h.bulletActiveClass}-prev`
              );
            } else d(P, "prev"), d(D, "next");
          else d(P, "prev"), d(D, "next");
        }
      }
      if (h.dynamicBullets) {
        const T = Math.min(C.length, h.dynamicMainBullets + 4),
          x = (l * T - l) / 2 - B * l,
          P = c ? "right" : "left";
        C.css(e.isHorizontal() ? P : "top", `${x}px`);
      }
    }
    if (
      (h.type === "fraction" &&
        (b.find(j(h.currentClass)).text(h.formatFractionCurrent(y + 1)),
        b.find(j(h.totalClass)).text(h.formatFractionTotal(O))),
      h.type === "progressbar")
    ) {
      let C;
      h.progressbarOpposite
        ? (C = e.isHorizontal() ? "vertical" : "horizontal")
        : (C = e.isHorizontal() ? "horizontal" : "vertical");
      const M = (y + 1) / O;
      let E = 1,
        B = 1;
      C === "horizontal" ? (E = M) : (B = M),
        b
          .find(j(h.progressbarFillClass))
          .transform(`translate3d(0,0,0) scaleX(${E}) scaleY(${B})`)
          .transition(e.params.speed);
    }
    h.type === "custom" && h.renderCustom
      ? (b.html(h.renderCustom(e, y + 1, O)), a("paginationRender", b[0]))
      : a("paginationUpdate", b[0]),
      e.params.watchOverflow &&
        e.enabled &&
        b[e.isLocked ? "addClass" : "removeClass"](h.lockClass);
  }
  function f() {
    const c = e.params.pagination;
    if (r()) return;
    const h =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.slides.length,
      w = e.pagination.$el;
    let b = "";
    if (c.type === "bullets") {
      let y = e.params.loop
        ? Math.ceil((h - e.loopedSlides * 2) / e.params.slidesPerGroup)
        : e.snapGrid.length;
      e.params.freeMode &&
        e.params.freeMode.enabled &&
        !e.params.loop &&
        y > h &&
        (y = h);
      for (let O = 0; O < y; O += 1)
        c.renderBullet
          ? (b += c.renderBullet.call(e, O, c.bulletClass))
          : (b += `<${c.bulletElement} class="${c.bulletClass}"></${c.bulletElement}>`);
      w.html(b), (e.pagination.bullets = w.find(j(c.bulletClass)));
    }
    c.type === "fraction" &&
      (c.renderFraction
        ? (b = c.renderFraction.call(e, c.currentClass, c.totalClass))
        : (b = `<span class="${c.currentClass}"></span> / <span class="${c.totalClass}"></span>`),
      w.html(b)),
      c.type === "progressbar" &&
        (c.renderProgressbar
          ? (b = c.renderProgressbar.call(e, c.progressbarFillClass))
          : (b = `<span class="${c.progressbarFillClass}"></span>`),
        w.html(b)),
      c.type !== "custom" && a("paginationRender", e.pagination.$el[0]);
  }
  function p() {
    e.params.pagination = ze(
      e,
      e.originalParams.pagination,
      e.params.pagination,
      { el: "swiper-pagination" }
    );
    const c = e.params.pagination;
    if (!c.el) return;
    let h = S(c.el);
    h.length !== 0 &&
      (e.params.uniqueNavElements &&
        typeof c.el == "string" &&
        h.length > 1 &&
        ((h = e.$el.find(c.el)),
        h.length > 1 &&
          (h = h.filter(w => S(w).parents(".swiper")[0] === e.el))),
      c.type === "bullets" && c.clickable && h.addClass(c.clickableClass),
      h.addClass(c.modifierClass + c.type),
      h.addClass(e.isHorizontal() ? c.horizontalClass : c.verticalClass),
      c.type === "bullets" &&
        c.dynamicBullets &&
        (h.addClass(`${c.modifierClass}${c.type}-dynamic`),
        (o = 0),
        c.dynamicMainBullets < 1 && (c.dynamicMainBullets = 1)),
      c.type === "progressbar" &&
        c.progressbarOpposite &&
        h.addClass(c.progressbarOppositeClass),
      c.clickable &&
        h.on("click", j(c.bulletClass), function (b) {
          b.preventDefault();
          let y = S(this).index() * e.params.slidesPerGroup;
          e.params.loop && (y += e.loopedSlides), e.slideTo(y);
        }),
      Object.assign(e.pagination, { $el: h, el: h[0] }),
      e.enabled || h.addClass(c.lockClass));
  }
  function m() {
    const c = e.params.pagination;
    if (r()) return;
    const h = e.pagination.$el;
    h.removeClass(c.hiddenClass),
      h.removeClass(c.modifierClass + c.type),
      h.removeClass(e.isHorizontal() ? c.horizontalClass : c.verticalClass),
      e.pagination.bullets &&
        e.pagination.bullets.removeClass &&
        e.pagination.bullets.removeClass(c.bulletActiveClass),
      c.clickable && h.off("click", j(c.bulletClass));
  }
  n("init", () => {
    e.params.pagination.enabled === !1 ? v() : (p(), f(), u());
  }),
    n("activeIndexChange", () => {
      (e.params.loop || typeof e.snapIndex > "u") && u();
    }),
    n("snapIndexChange", () => {
      e.params.loop || u();
    }),
    n("slidesLengthChange", () => {
      e.params.loop && (f(), u());
    }),
    n("snapGridLengthChange", () => {
      e.params.loop || (f(), u());
    }),
    n("destroy", () => {
      m();
    }),
    n("enable disable", () => {
      const { $el: c } = e.pagination;
      c &&
        c[e.enabled ? "removeClass" : "addClass"](
          e.params.pagination.lockClass
        );
    }),
    n("lock unlock", () => {
      u();
    }),
    n("click", (c, h) => {
      const w = h.target,
        { $el: b } = e.pagination;
      if (
        e.params.pagination.el &&
        e.params.pagination.hideOnClick &&
        b &&
        b.length > 0 &&
        !S(w).hasClass(e.params.pagination.bulletClass)
      ) {
        if (
          e.navigation &&
          ((e.navigation.nextEl && w === e.navigation.nextEl) ||
            (e.navigation.prevEl && w === e.navigation.prevEl))
        )
          return;
        const y = b.hasClass(e.params.pagination.hiddenClass);
        a(y === !0 ? "paginationShow" : "paginationHide"),
          b.toggleClass(e.params.pagination.hiddenClass);
      }
    });
  const g = () => {
      e.$el.removeClass(e.params.pagination.paginationDisabledClass),
        e.pagination.$el &&
          e.pagination.$el.removeClass(
            e.params.pagination.paginationDisabledClass
          ),
        p(),
        f(),
        u();
    },
    v = () => {
      e.$el.addClass(e.params.pagination.paginationDisabledClass),
        e.pagination.$el &&
          e.pagination.$el.addClass(
            e.params.pagination.paginationDisabledClass
          ),
        m();
    };
  Object.assign(e.pagination, {
    enable: g,
    disable: v,
    render: f,
    update: u,
    init: p,
    destroy: m
  });
}
function sn(t) {
  let { swiper: e, extendParams: i, on: n, emit: a } = t,
    s;
  (e.autoplay = { running: !1, paused: !1 }),
    i({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1
      }
    });
  function l() {
    if (!e.size) {
      (e.autoplay.running = !1), (e.autoplay.paused = !1);
      return;
    }
    const c = e.slides.eq(e.activeIndex);
    let h = e.params.autoplay.delay;
    c.attr("data-swiper-autoplay") &&
      (h = c.attr("data-swiper-autoplay") || e.params.autoplay.delay),
      clearTimeout(s),
      (s = K(() => {
        let w;
        e.params.autoplay.reverseDirection
          ? e.params.loop
            ? (e.loopFix(),
              (w = e.slidePrev(e.params.speed, !0, !0)),
              a("autoplay"))
            : e.isBeginning
            ? e.params.autoplay.stopOnLastSlide
              ? r()
              : ((w = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0)),
                a("autoplay"))
            : ((w = e.slidePrev(e.params.speed, !0, !0)), a("autoplay"))
          : e.params.loop
          ? (e.loopFix(),
            (w = e.slideNext(e.params.speed, !0, !0)),
            a("autoplay"))
          : e.isEnd
          ? e.params.autoplay.stopOnLastSlide
            ? r()
            : ((w = e.slideTo(0, e.params.speed, !0, !0)), a("autoplay"))
          : ((w = e.slideNext(e.params.speed, !0, !0)), a("autoplay")),
          ((e.params.cssMode && e.autoplay.running) || w === !1) && l();
      }, h));
  }
  function o() {
    return typeof s < "u" || e.autoplay.running
      ? !1
      : ((e.autoplay.running = !0), a("autoplayStart"), l(), !0);
  }
  function r() {
    return !e.autoplay.running || typeof s > "u"
      ? !1
      : (s && (clearTimeout(s), (s = void 0)),
        (e.autoplay.running = !1),
        a("autoplayStop"),
        !0);
  }
  function d(c) {
    !e.autoplay.running ||
      e.autoplay.paused ||
      (s && clearTimeout(s),
      (e.autoplay.paused = !0),
      c === 0 || !e.params.autoplay.waitForTransition
        ? ((e.autoplay.paused = !1), l())
        : ["transitionend", "webkitTransitionEnd"].forEach(h => {
            e.$wrapperEl[0].addEventListener(h, f);
          }));
  }
  function u() {
    const c = L();
    c.visibilityState === "hidden" && e.autoplay.running && d(),
      c.visibilityState === "visible" &&
        e.autoplay.paused &&
        (l(), (e.autoplay.paused = !1));
  }
  function f(c) {
    !e ||
      e.destroyed ||
      !e.$wrapperEl ||
      (c.target === e.$wrapperEl[0] &&
        (["transitionend", "webkitTransitionEnd"].forEach(h => {
          e.$wrapperEl[0].removeEventListener(h, f);
        }),
        (e.autoplay.paused = !1),
        e.autoplay.running ? l() : r()));
  }
  function p() {
    e.params.autoplay.disableOnInteraction ? r() : (a("autoplayPause"), d()),
      ["transitionend", "webkitTransitionEnd"].forEach(c => {
        e.$wrapperEl[0].removeEventListener(c, f);
      });
  }
  function m() {
    e.params.autoplay.disableOnInteraction ||
      ((e.autoplay.paused = !1), a("autoplayResume"), l());
  }
  function g() {
    e.params.autoplay.pauseOnMouseEnter &&
      (e.$el.on("mouseenter", p), e.$el.on("mouseleave", m));
  }
  function v() {
    e.$el.off("mouseenter", p), e.$el.off("mouseleave", m);
  }
  n("init", () => {
    e.params.autoplay.enabled &&
      (o(), L().addEventListener("visibilitychange", u), g());
  }),
    n("beforeTransitionStart", (c, h, w) => {
      e.autoplay.running &&
        (w || !e.params.autoplay.disableOnInteraction
          ? e.autoplay.pause(h)
          : r());
    }),
    n("sliderFirstMove", () => {
      e.autoplay.running &&
        (e.params.autoplay.disableOnInteraction ? r() : d());
    }),
    n("touchEnd", () => {
      e.params.cssMode &&
        e.autoplay.paused &&
        !e.params.autoplay.disableOnInteraction &&
        l();
    }),
    n("destroy", () => {
      v(),
        e.autoplay.running && r(),
        L().removeEventListener("visibilitychange", u);
    }),
    Object.assign(e.autoplay, { pause: d, run: l, start: o, stop: r });
}
function R(t) {
  return (
    typeof t == "object" &&
    t !== null &&
    t.constructor &&
    Object.prototype.toString.call(t).slice(8, -1) === "Object"
  );
}
function G(t, e) {
  const i = ["__proto__", "constructor", "prototype"];
  Object.keys(e)
    .filter(n => i.indexOf(n) < 0)
    .forEach(n => {
      typeof t[n] > "u"
        ? (t[n] = e[n])
        : R(e[n]) && R(t[n]) && Object.keys(e[n]).length > 0
        ? e[n].__swiper__
          ? (t[n] = e[n])
          : G(t[n], e[n])
        : (t[n] = e[n]);
    });
}
function ke(t) {
  return (
    t === void 0 && (t = {}),
    t.navigation &&
      typeof t.navigation.nextEl > "u" &&
      typeof t.navigation.prevEl > "u"
  );
}
function Ae(t) {
  return t === void 0 && (t = {}), t.pagination && typeof t.pagination.el > "u";
}
function De(t) {
  return t === void 0 && (t = {}), t.scrollbar && typeof t.scrollbar.el > "u";
}
function Ne(t) {
  t === void 0 && (t = "");
  const e = t
      .split(" ")
      .map(n => n.trim())
      .filter(n => !!n),
    i = [];
  return (
    e.forEach(n => {
      i.indexOf(n) < 0 && i.push(n);
    }),
    i.join(" ")
  );
}
const Ge = [
  "modules",
  "init",
  "_direction",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_preloadImages",
  "updateOnImagesReady",
  "_loop",
  "_loopAdditionalSlides",
  "_loopedSlides",
  "_loopedSlidesLimit",
  "_loopFillGroupWithBlank",
  "loopPreventsSlide",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideBlankClass",
  "slideActiveClass",
  "slideDuplicateActiveClass",
  "slideVisibleClass",
  "slideDuplicateClass",
  "slideNextClass",
  "slideDuplicateNextClass",
  "slidePrevClass",
  "slideDuplicatePrevClass",
  "wrapperClass",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "lazy",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom"
];
function Ce(t, e) {
  t === void 0 && (t = {}), e === void 0 && (e = !0);
  const i = { on: {} },
    n = {},
    a = {};
  G(i, W.defaults),
    G(i, W.extendedDefaults),
    (i._emitClasses = !0),
    (i.init = !1);
  const s = {},
    l = Ge.map(r => r.replace(/_/, "")),
    o = Object.assign({}, t);
  return (
    Object.keys(o).forEach(r => {
      typeof t[r] > "u" ||
        (l.indexOf(r) >= 0
          ? R(t[r])
            ? ((i[r] = {}), (a[r] = {}), G(i[r], t[r]), G(a[r], t[r]))
            : ((i[r] = t[r]), (a[r] = t[r]))
          : r.search(/on[A-Z]/) === 0 && typeof t[r] == "function"
          ? e
            ? (n[`${r[2].toLowerCase()}${r.substr(3)}`] = t[r])
            : (i.on[`${r[2].toLowerCase()}${r.substr(3)}`] = t[r])
          : (s[r] = t[r]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach(r => {
      i[r] === !0 && (i[r] = {}), i[r] === !1 && delete i[r];
    }),
    { params: i, passedParams: a, rest: s, events: n }
  );
}
function an(t, e) {
  let {
    el: i,
    nextEl: n,
    prevEl: a,
    paginationEl: s,
    scrollbarEl: l,
    swiper: o
  } = t;
  ke(e) &&
    n &&
    a &&
    ((o.params.navigation.nextEl = n),
    (o.originalParams.navigation.nextEl = n),
    (o.params.navigation.prevEl = a),
    (o.originalParams.navigation.prevEl = a)),
    Ae(e) &&
      s &&
      ((o.params.pagination.el = s), (o.originalParams.pagination.el = s)),
    De(e) &&
      l &&
      ((o.params.scrollbar.el = l), (o.originalParams.scrollbar.el = l)),
    o.init(i);
}
function Fe(t, e) {
  let i = e.slidesPerView;
  if (e.breakpoints) {
    const a = W.prototype.getBreakpoint(e.breakpoints),
      s = a in e.breakpoints ? e.breakpoints[a] : void 0;
    s && s.slidesPerView && (i = s.slidesPerView);
  }
  let n = Math.ceil(parseFloat(e.loopedSlides || i, 10));
  return (
    (n += e.loopAdditionalSlides),
    n > t.length && e.loopedSlidesLimit && (n = t.length),
    n
  );
}
function rn(t, e, i) {
  const n = e.map(
    (r, d) => (
      r.props || (r.props = {}),
      (r.props.swiperRef = t),
      (r.props["data-swiper-slide-index"] = d),
      r
    )
  );
  function a(r, d, u) {
    return (
      r.props || (r.props = {}),
      A(
        r.type,
        {
          ...r.props,
          key: `${r.key}-duplicate-${d}-${u}`,
          class: `${r.props.className || ""} ${i.slideDuplicateClass} ${
            r.props.class || ""
          }`
        },
        r.children
      )
    );
  }
  if (i.loopFillGroupWithBlank) {
    const r = i.slidesPerGroup - (n.length % i.slidesPerGroup);
    if (r !== i.slidesPerGroup)
      for (let d = 0; d < r; d += 1) {
        const u = A("div", { class: `${i.slideClass} ${i.slideBlankClass}` });
        n.push(u);
      }
  }
  i.slidesPerView === "auto" && !i.loopedSlides && (i.loopedSlides = n.length);
  const s = Fe(n, i),
    l = [],
    o = [];
  for (let r = 0; r < s; r += 1) {
    const d = r - Math.floor(r / n.length) * n.length;
    o.push(a(n[d], r, "append")),
      l.unshift(a(n[n.length - d - 1], r, "prepend"));
  }
  return t.value && (t.value.loopedSlides = s), [...l, ...n, ...o];
}
function ln(t, e, i, n, a) {
  const s = [];
  if (!e) return s;
  const l = r => {
    s.indexOf(r) < 0 && s.push(r);
  };
  if (i && n) {
    const r = n.map(a),
      d = i.map(a);
    r.join("") !== d.join("") && l("children"),
      n.length !== i.length && l("children");
  }
  return (
    Ge.filter(r => r[0] === "_")
      .map(r => r.replace(/_/, ""))
      .forEach(r => {
        if (r in t && r in e)
          if (R(t[r]) && R(e[r])) {
            const d = Object.keys(t[r]),
              u = Object.keys(e[r]);
            d.length !== u.length
              ? l(r)
              : (d.forEach(f => {
                  t[r][f] !== e[r][f] && l(r);
                }),
                u.forEach(f => {
                  t[r][f] !== e[r][f] && l(r);
                }));
          } else t[r] !== e[r] && l(r);
      }),
    s
  );
}
function se(t, e, i) {
  t === void 0 && (t = {});
  const n = [],
    a = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": []
    },
    s = (l, o) => {
      !Array.isArray(l) ||
        l.forEach(r => {
          const d = typeof r.type == "symbol";
          o === "default" && (o = "container-end"),
            d && r.children
              ? s(r.children, "default")
              : r.type &&
                (r.type.name === "SwiperSlide" ||
                  r.type.name === "AsyncComponentWrapper")
              ? n.push(r)
              : a[o] && a[o].push(r);
        });
    };
  return (
    Object.keys(t).forEach(l => {
      if (typeof t[l] != "function") return;
      const o = t[l]();
      s(o, l);
    }),
    (i.value = e.value),
    (e.value = n),
    { slides: n, slots: a }
  );
}
function on(t) {
  let {
    swiper: e,
    slides: i,
    passedParams: n,
    changedParams: a,
    nextEl: s,
    prevEl: l,
    scrollbarEl: o,
    paginationEl: r
  } = t;
  const d = a.filter(C => C !== "children" && C !== "direction"),
    {
      params: u,
      pagination: f,
      navigation: p,
      scrollbar: m,
      virtual: g,
      thumbs: v
    } = e;
  let c, h, w, b, y;
  a.includes("thumbs") &&
    n.thumbs &&
    n.thumbs.swiper &&
    u.thumbs &&
    !u.thumbs.swiper &&
    (c = !0),
    a.includes("controller") &&
      n.controller &&
      n.controller.control &&
      u.controller &&
      !u.controller.control &&
      (h = !0),
    a.includes("pagination") &&
      n.pagination &&
      (n.pagination.el || r) &&
      (u.pagination || u.pagination === !1) &&
      f &&
      !f.el &&
      (w = !0),
    a.includes("scrollbar") &&
      n.scrollbar &&
      (n.scrollbar.el || o) &&
      (u.scrollbar || u.scrollbar === !1) &&
      m &&
      !m.el &&
      (b = !0),
    a.includes("navigation") &&
      n.navigation &&
      (n.navigation.prevEl || l) &&
      (n.navigation.nextEl || s) &&
      (u.navigation || u.navigation === !1) &&
      p &&
      !p.prevEl &&
      !p.nextEl &&
      (y = !0);
  const O = C => {
    !e[C] ||
      (e[C].destroy(),
      C === "navigation"
        ? ((u[C].prevEl = void 0),
          (u[C].nextEl = void 0),
          (e[C].prevEl = void 0),
          (e[C].nextEl = void 0))
        : ((u[C].el = void 0), (e[C].el = void 0)));
  };
  d.forEach(C => {
    if (R(u[C]) && R(n[C])) G(u[C], n[C]);
    else {
      const M = n[C];
      (M === !0 || M === !1) &&
      (C === "navigation" || C === "pagination" || C === "scrollbar")
        ? M === !1 && O(C)
        : (u[C] = n[C]);
    }
  }),
    d.includes("controller") &&
      !h &&
      e.controller &&
      e.controller.control &&
      u.controller &&
      u.controller.control &&
      (e.controller.control = u.controller.control),
    a.includes("children") && i && g && u.virtual.enabled
      ? ((g.slides = i), g.update(!0))
      : a.includes("children") &&
        e.lazy &&
        e.params.lazy.enabled &&
        e.lazy.load(),
    c && v.init() && v.update(!0),
    h && (e.controller.control = u.controller.control),
    w && (r && (u.pagination.el = r), f.init(), f.render(), f.update()),
    b &&
      (o && (u.scrollbar.el = o), m.init(), m.updateSize(), m.setTranslate()),
    y &&
      (s && (u.navigation.nextEl = s),
      l && (u.navigation.prevEl = l),
      p.init(),
      p.update()),
    a.includes("allowSlideNext") && (e.allowSlideNext = n.allowSlideNext),
    a.includes("allowSlidePrev") && (e.allowSlidePrev = n.allowSlidePrev),
    a.includes("direction") && e.changeDirection(n.direction, !1),
    e.update();
}
function dn(t, e, i) {
  if (!i) return null;
  const n = t.value.isHorizontal()
    ? { [t.value.rtlTranslate ? "right" : "left"]: `${i.offset}px` }
    : { top: `${i.offset}px` };
  return e
    .filter((a, s) => s >= i.from && s <= i.to)
    .map(
      a => (
        a.props || (a.props = {}),
        a.props.style || (a.props.style = {}),
        (a.props.swiperRef = t),
        (a.props.style = n),
        A(a.type, { ...a.props }, a.children)
      )
    );
}
const un = t => {
    !t ||
      t.destroyed ||
      !t.params.virtual ||
      (t.params.virtual && !t.params.virtual.enabled) ||
      (t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses(),
      t.lazy && t.params.lazy.enabled && t.lazy.load(),
      t.parallax &&
        t.params.parallax &&
        t.params.parallax.enabled &&
        t.parallax.setTranslate());
  },
  fn = {
    name: "Swiper",
    props: {
      tag: { type: String, default: "div" },
      wrapperTag: { type: String, default: "div" },
      modules: { type: Array, default: void 0 },
      init: { type: Boolean, default: void 0 },
      direction: { type: String, default: void 0 },
      touchEventsTarget: { type: String, default: void 0 },
      initialSlide: { type: Number, default: void 0 },
      speed: { type: Number, default: void 0 },
      cssMode: { type: Boolean, default: void 0 },
      updateOnWindowResize: { type: Boolean, default: void 0 },
      resizeObserver: { type: Boolean, default: void 0 },
      nested: { type: Boolean, default: void 0 },
      focusableElements: { type: String, default: void 0 },
      width: { type: Number, default: void 0 },
      height: { type: Number, default: void 0 },
      preventInteractionOnTransition: { type: Boolean, default: void 0 },
      userAgent: { type: String, default: void 0 },
      url: { type: String, default: void 0 },
      edgeSwipeDetection: { type: [Boolean, String], default: void 0 },
      edgeSwipeThreshold: { type: Number, default: void 0 },
      autoHeight: { type: Boolean, default: void 0 },
      setWrapperSize: { type: Boolean, default: void 0 },
      virtualTranslate: { type: Boolean, default: void 0 },
      effect: { type: String, default: void 0 },
      breakpoints: { type: Object, default: void 0 },
      spaceBetween: { type: Number, default: void 0 },
      slidesPerView: { type: [Number, String], default: void 0 },
      maxBackfaceHiddenSlides: { type: Number, default: void 0 },
      slidesPerGroup: { type: Number, default: void 0 },
      slidesPerGroupSkip: { type: Number, default: void 0 },
      slidesPerGroupAuto: { type: Boolean, default: void 0 },
      centeredSlides: { type: Boolean, default: void 0 },
      centeredSlidesBounds: { type: Boolean, default: void 0 },
      slidesOffsetBefore: { type: Number, default: void 0 },
      slidesOffsetAfter: { type: Number, default: void 0 },
      normalizeSlideIndex: { type: Boolean, default: void 0 },
      centerInsufficientSlides: { type: Boolean, default: void 0 },
      watchOverflow: { type: Boolean, default: void 0 },
      roundLengths: { type: Boolean, default: void 0 },
      touchRatio: { type: Number, default: void 0 },
      touchAngle: { type: Number, default: void 0 },
      simulateTouch: { type: Boolean, default: void 0 },
      shortSwipes: { type: Boolean, default: void 0 },
      longSwipes: { type: Boolean, default: void 0 },
      longSwipesRatio: { type: Number, default: void 0 },
      longSwipesMs: { type: Number, default: void 0 },
      followFinger: { type: Boolean, default: void 0 },
      allowTouchMove: { type: Boolean, default: void 0 },
      threshold: { type: Number, default: void 0 },
      touchMoveStopPropagation: { type: Boolean, default: void 0 },
      touchStartPreventDefault: { type: Boolean, default: void 0 },
      touchStartForcePreventDefault: { type: Boolean, default: void 0 },
      touchReleaseOnEdges: { type: Boolean, default: void 0 },
      uniqueNavElements: { type: Boolean, default: void 0 },
      resistance: { type: Boolean, default: void 0 },
      resistanceRatio: { type: Number, default: void 0 },
      watchSlidesProgress: { type: Boolean, default: void 0 },
      grabCursor: { type: Boolean, default: void 0 },
      preventClicks: { type: Boolean, default: void 0 },
      preventClicksPropagation: { type: Boolean, default: void 0 },
      slideToClickedSlide: { type: Boolean, default: void 0 },
      preloadImages: { type: Boolean, default: void 0 },
      updateOnImagesReady: { type: Boolean, default: void 0 },
      loop: { type: Boolean, default: void 0 },
      loopAdditionalSlides: { type: Number, default: void 0 },
      loopedSlides: { type: Number, default: void 0 },
      loopedSlidesLimit: { type: Boolean, default: !0 },
      loopFillGroupWithBlank: { type: Boolean, default: void 0 },
      loopPreventsSlide: { type: Boolean, default: void 0 },
      rewind: { type: Boolean, default: void 0 },
      allowSlidePrev: { type: Boolean, default: void 0 },
      allowSlideNext: { type: Boolean, default: void 0 },
      swipeHandler: { type: Boolean, default: void 0 },
      noSwiping: { type: Boolean, default: void 0 },
      noSwipingClass: { type: String, default: void 0 },
      noSwipingSelector: { type: String, default: void 0 },
      passiveListeners: { type: Boolean, default: void 0 },
      containerModifierClass: { type: String, default: void 0 },
      slideClass: { type: String, default: void 0 },
      slideBlankClass: { type: String, default: void 0 },
      slideActiveClass: { type: String, default: void 0 },
      slideDuplicateActiveClass: { type: String, default: void 0 },
      slideVisibleClass: { type: String, default: void 0 },
      slideDuplicateClass: { type: String, default: void 0 },
      slideNextClass: { type: String, default: void 0 },
      slideDuplicateNextClass: { type: String, default: void 0 },
      slidePrevClass: { type: String, default: void 0 },
      slideDuplicatePrevClass: { type: String, default: void 0 },
      wrapperClass: { type: String, default: void 0 },
      runCallbacksOnInit: { type: Boolean, default: void 0 },
      observer: { type: Boolean, default: void 0 },
      observeParents: { type: Boolean, default: void 0 },
      observeSlideChildren: { type: Boolean, default: void 0 },
      a11y: { type: [Boolean, Object], default: void 0 },
      autoplay: { type: [Boolean, Object], default: void 0 },
      controller: { type: Object, default: void 0 },
      coverflowEffect: { type: Object, default: void 0 },
      cubeEffect: { type: Object, default: void 0 },
      fadeEffect: { type: Object, default: void 0 },
      flipEffect: { type: Object, default: void 0 },
      creativeEffect: { type: Object, default: void 0 },
      cardsEffect: { type: Object, default: void 0 },
      hashNavigation: { type: [Boolean, Object], default: void 0 },
      history: { type: [Boolean, Object], default: void 0 },
      keyboard: { type: [Boolean, Object], default: void 0 },
      lazy: { type: [Boolean, Object], default: void 0 },
      mousewheel: { type: [Boolean, Object], default: void 0 },
      navigation: { type: [Boolean, Object], default: void 0 },
      pagination: { type: [Boolean, Object], default: void 0 },
      parallax: { type: [Boolean, Object], default: void 0 },
      scrollbar: { type: [Boolean, Object], default: void 0 },
      thumbs: { type: Object, default: void 0 },
      virtual: { type: [Boolean, Object], default: void 0 },
      zoom: { type: [Boolean, Object], default: void 0 },
      grid: { type: [Object], default: void 0 },
      freeMode: { type: [Boolean, Object], default: void 0 },
      enabled: { type: Boolean, default: void 0 }
    },
    emits: [
      "_beforeBreakpoint",
      "_containerClasses",
      "_slideClass",
      "_slideClasses",
      "_swiper",
      "_freeModeNoMomentumRelease",
      "activeIndexChange",
      "afterInit",
      "autoplay",
      "autoplayStart",
      "autoplayStop",
      "autoplayPause",
      "autoplayResume",
      "beforeDestroy",
      "beforeInit",
      "beforeLoopFix",
      "beforeResize",
      "beforeSlideChangeStart",
      "beforeTransitionStart",
      "breakpoint",
      "changeDirection",
      "click",
      "disable",
      "doubleTap",
      "doubleClick",
      "destroy",
      "enable",
      "fromEdge",
      "hashChange",
      "hashSet",
      "imagesReady",
      "init",
      "keyPress",
      "lazyImageLoad",
      "lazyImageReady",
      "lock",
      "loopFix",
      "momentumBounce",
      "navigationHide",
      "navigationShow",
      "navigationPrev",
      "navigationNext",
      "observerUpdate",
      "orientationchange",
      "paginationHide",
      "paginationRender",
      "paginationShow",
      "paginationUpdate",
      "progress",
      "reachBeginning",
      "reachEnd",
      "realIndexChange",
      "resize",
      "scroll",
      "scrollbarDragEnd",
      "scrollbarDragMove",
      "scrollbarDragStart",
      "setTransition",
      "setTranslate",
      "slideChange",
      "slideChangeTransitionEnd",
      "slideChangeTransitionStart",
      "slideNextTransitionEnd",
      "slideNextTransitionStart",
      "slidePrevTransitionEnd",
      "slidePrevTransitionStart",
      "slideResetTransitionStart",
      "slideResetTransitionEnd",
      "sliderMove",
      "sliderFirstMove",
      "slidesLengthChange",
      "slidesGridLengthChange",
      "snapGridLengthChange",
      "snapIndexChange",
      "swiper",
      "tap",
      "toEdge",
      "touchEnd",
      "touchMove",
      "touchMoveOpposite",
      "touchStart",
      "transitionEnd",
      "transitionStart",
      "unlock",
      "update",
      "virtualUpdate",
      "zoomChange"
    ],
    setup(t, e) {
      let { slots: i, emit: n } = e;
      const { tag: a, wrapperTag: s } = t,
        l = _("swiper"),
        o = _(null),
        r = _(!1),
        d = _(!1),
        u = _(null),
        f = _(null),
        p = _(null),
        m = { value: [] },
        g = { value: [] },
        v = _(null),
        c = _(null),
        h = _(null),
        w = _(null),
        { params: b, passedParams: y } = Ce(t, !1);
      se(i, m, g), (p.value = y), (g.value = m.value);
      const O = () => {
        se(i, m, g), (r.value = !0);
      };
      if (
        ((b.onAny = function (M) {
          for (
            var E = arguments.length, B = new Array(E > 1 ? E - 1 : 0), T = 1;
            T < E;
            T++
          )
            B[T - 1] = arguments[T];
          n(M, ...B);
        }),
        Object.assign(b.on, {
          _beforeBreakpoint: O,
          _containerClasses(M, E) {
            l.value = E;
          }
        }),
        (f.value = new W(b)),
        (f.value.loopCreate = () => {}),
        (f.value.loopDestroy = () => {}),
        b.loop && (f.value.loopedSlides = Fe(m.value, b)),
        f.value.virtual && f.value.params.virtual.enabled)
      ) {
        f.value.virtual.slides = m.value;
        const M = {
          cache: !1,
          slides: m.value,
          renderExternal: E => {
            o.value = E;
          },
          renderExternalUpdate: !1
        };
        G(f.value.params.virtual, M), G(f.value.originalParams.virtual, M);
      }
      Te(() => {
        !d.value && f.value && (f.value.emitSlidesClasses(), (d.value = !0));
        const { passedParams: M } = Ce(t, !1),
          E = ln(M, p.value, m.value, g.value, B => B.props && B.props.key);
        (p.value = M),
          (E.length || r.value) &&
            f.value &&
            !f.value.destroyed &&
            on({
              swiper: f.value,
              slides: m.value,
              passedParams: M,
              changedParams: E,
              nextEl: v.value,
              prevEl: c.value,
              scrollbarEl: w.value,
              paginationEl: h.value
            }),
          (r.value = !1);
      }),
        Ee("swiper", f),
        We(o, () => {
          qe(() => {
            un(f.value);
          });
        }),
        xe(() => {
          !u.value ||
            (an(
              {
                el: u.value,
                nextEl: v.value,
                prevEl: c.value,
                paginationEl: h.value,
                scrollbarEl: w.value,
                swiper: f.value
              },
              b
            ),
            n("swiper", f.value));
        }),
        Pe(() => {
          f.value && !f.value.destroyed && f.value.destroy(!0, !1);
        });
      function C(M) {
        return b.virtual
          ? dn(f, M, o.value)
          : !b.loop || (f.value && f.value.destroyed)
          ? (M.forEach(E => {
              E.props || (E.props = {}), (E.props.swiperRef = f);
            }),
            M)
          : rn(f, M, b);
      }
      return () => {
        const { slides: M, slots: E } = se(i, m, g);
        return A(a, { ref: u, class: Ne(l.value) }, [
          E["container-start"],
          A(s, { class: "swiper-wrapper" }, [
            E["wrapper-start"],
            C(M),
            E["wrapper-end"]
          ]),
          ke(t) && [
            A("div", { ref: c, class: "swiper-button-prev" }),
            A("div", { ref: v, class: "swiper-button-next" })
          ],
          De(t) && A("div", { ref: w, class: "swiper-scrollbar" }),
          Ae(t) && A("div", { ref: h, class: "swiper-pagination" }),
          E["container-end"]
        ]);
      };
    }
  },
  cn = {
    name: "SwiperSlide",
    props: {
      tag: { type: String, default: "div" },
      swiperRef: { type: Object, required: !1 },
      zoom: { type: Boolean, default: void 0 },
      virtualIndex: { type: [String, Number], default: void 0 }
    },
    setup(t, e) {
      let { slots: i } = e,
        n = !1;
      const { swiperRef: a } = t,
        s = _(null),
        l = _("swiper-slide");
      function o(d, u, f) {
        u === s.value && (l.value = f);
      }
      xe(() => {
        !a.value || (a.value.on("_slideClass", o), (n = !0));
      }),
        Xe(() => {
          n || !a || !a.value || (a.value.on("_slideClass", o), (n = !0));
        }),
        Te(() => {
          !s.value ||
            !a ||
            !a.value ||
            (a.value.destroyed &&
              l.value !== "swiper-slide" &&
              (l.value = "swiper-slide"));
        }),
        Pe(() => {
          !a || !a.value || a.value.off("_slideClass", o);
        });
      const r = Ye(() => ({
        isActive:
          l.value.indexOf("swiper-slide-active") >= 0 ||
          l.value.indexOf("swiper-slide-duplicate-active") >= 0,
        isVisible: l.value.indexOf("swiper-slide-visible") >= 0,
        isDuplicate: l.value.indexOf("swiper-slide-duplicate") >= 0,
        isPrev:
          l.value.indexOf("swiper-slide-prev") >= 0 ||
          l.value.indexOf("swiper-slide-duplicate-prev") >= 0,
        isNext:
          l.value.indexOf("swiper-slide-next") >= 0 ||
          l.value.indexOf("swiper-slide-duplicate-next") >= 0
      }));
      return (
        Ee("swiperSlide", r),
        () =>
          A(
            t.tag,
            {
              class: Ne(`${l.value}`),
              ref: s,
              "data-swiper-slide-index": t.virtualIndex
            },
            t.zoom
              ? A(
                  "div",
                  {
                    class: "swiper-zoom-container",
                    "data-swiper-zoom":
                      typeof t.zoom == "number" ? t.zoom : void 0
                  },
                  i.default && i.default(r.value)
                )
              : i.default && i.default(r.value)
          )
      );
    }
  },
  pn = { class: "font-medium" },
  hn = ae(" Swiper\u63D2\u4EF6\uFF08 "),
  gn = ae(" github\u5730\u5740 "),
  mn = ae(" \uFF09 "),
  vn = { class: "py-24px text-24px font-bold" },
  wn = {
    class:
      "flex justify-center items-center h-240px border-1px border-[#999] text-18px font-bold"
  },
  bn = Me({ name: "Swiper" }),
  Sn = Me({
    ...bn,
    setup(t) {
      W.use([sn, tn, nn]);
      const e = [
        { id: 0, label: "Default", options: {} },
        { id: 1, label: "Navigation", options: { navigation: !0 } },
        { id: 2, label: "Pagination", options: { pagination: !0 } },
        {
          id: 3,
          label: "Pagination dynamic",
          options: { pagination: { dynamicBullets: !0 } }
        },
        {
          id: 4,
          label: "Pagination progress",
          options: { navigation: !0, pagination: { type: "progressbar" } }
        },
        {
          id: 5,
          label: "Pagination fraction",
          options: { navigation: !0, pagination: { type: "fraction" } }
        },
        {
          id: 6,
          label: "Slides per view",
          options: {
            pagination: { clickable: !0 },
            slidesPerView: 3,
            spaceBetween: 30
          }
        },
        {
          id: 7,
          label: "Infinite loop",
          options: {
            autoplay: { delay: 2e3, disableOnInteraction: !1 },
            navigation: !0,
            pagination: { clickable: !0 },
            loop: !0
          }
        }
      ];
      return (i, n) => {
        const a = X("el-link"),
          s = X("el-col"),
          l = X("el-row"),
          o = X("el-card");
        return (
          Z(),
          Ue(o, null, {
            header: F(() => [
              J("div", pn, [
                hn,
                V(
                  a,
                  {
                    href: "https://github.com/nolimits4web/swiper",
                    target: "_blank",
                    style: { "font-size": "16px", margin: "0 5px 4px 0" }
                  },
                  { default: F(() => [gn]), _: 1 }
                ),
                mn
              ])
            ]),
            default: F(() => [
              V(
                l,
                { gutter: 10 },
                {
                  default: F(() => [
                    (Z(),
                    fe(
                      ge,
                      null,
                      ce(e, r =>
                        V(
                          s,
                          { key: r.id, span: 12 },
                          {
                            default: F(() => [
                              J("h3", vn, pe(r.label), 1),
                              V(
                                he(fn),
                                Ke(Ze(r.options)),
                                {
                                  default: F(() => [
                                    (Z(),
                                    fe(
                                      ge,
                                      null,
                                      ce(5, d =>
                                        V(
                                          he(cn),
                                          { key: d },
                                          {
                                            default: F(() => [
                                              J("div", wn, " Slide" + pe(d), 1)
                                            ]),
                                            _: 2
                                          },
                                          1024
                                        )
                                      ),
                                      64
                                    ))
                                  ]),
                                  _: 2
                                },
                                1040
                              )
                            ]),
                            _: 2
                          },
                          1024
                        )
                      ),
                      64
                    ))
                  ]),
                  _: 1
                }
              )
            ]),
            _: 1
          })
        );
      };
    }
  });
const Cn = Je(Sn, [["__scopeId", "data-v-cdb6da95"]]);
export { Cn as default };
