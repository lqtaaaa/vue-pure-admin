import {
  m as Un,
  p as ud,
  q as cd,
  s as ji,
  n as ft,
  k as m,
  d as de,
  t as lt,
  o as Ue,
  v as fn,
  x as jn,
  y as fe,
  z as Qe,
  A as E,
  B as Ze,
  T as ja,
  r as L,
  C as sd,
  D as Fi,
  E as Xe,
  F as rt,
  G as mr,
  H as Mt,
  w as gr,
  I as Fa,
  J as Di,
  K as kc,
  L as wt,
  l as qo,
  M as Da,
  N as Le,
  O as yr,
  P as fd,
  Q as dd,
  c as vd,
  R as Ka,
  S as pd,
  U as mt,
  b as Jn,
  V as Qt,
  W as La,
  X as hd
} from "./index.69183727.js";
var md = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 1024 1024", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
        }
      }
    ]
  },
  name: "loading",
  theme: "outlined"
};
const gd = md;
var Or = 2,
  Ki = 0.16,
  yd = 0.05,
  bd = 0.05,
  wd = 0.15,
  Pc = 5,
  Tc = 4,
  Cd = [
    { index: 7, opacity: 0.15 },
    { index: 6, opacity: 0.25 },
    { index: 5, opacity: 0.3 },
    { index: 5, opacity: 0.45 },
    { index: 5, opacity: 0.65 },
    { index: 5, opacity: 0.85 },
    { index: 4, opacity: 0.9 },
    { index: 3, opacity: 0.95 },
    { index: 2, opacity: 0.97 },
    { index: 1, opacity: 0.98 }
  ];
function Li(e) {
  var t = e.r,
    n = e.g,
    r = e.b,
    o = ud(t, n, r);
  return { h: o.h * 360, s: o.s, v: o.v };
}
function kr(e) {
  var t = e.r,
    n = e.g,
    r = e.b;
  return "#".concat(cd(t, n, r, !1));
}
function xd(e, t, n) {
  var r = n / 100,
    o = {
      r: (t.r - e.r) * r + e.r,
      g: (t.g - e.g) * r + e.g,
      b: (t.b - e.b) * r + e.b
    };
  return o;
}
function Ri(e, t, n) {
  var r;
  return (
    Math.round(e.h) >= 60 && Math.round(e.h) <= 240
      ? (r = n ? Math.round(e.h) - Or * t : Math.round(e.h) + Or * t)
      : (r = n ? Math.round(e.h) + Or * t : Math.round(e.h) - Or * t),
    r < 0 ? (r += 360) : r >= 360 && (r -= 360),
    r
  );
}
function Bi(e, t, n) {
  if (e.h === 0 && e.s === 0) return e.s;
  var r;
  return (
    n ? (r = e.s - Ki * t) : t === Tc ? (r = e.s + Ki) : (r = e.s + yd * t),
    r > 1 && (r = 1),
    n && t === Pc && r > 0.1 && (r = 0.1),
    r < 0.06 && (r = 0.06),
    Number(r.toFixed(2))
  );
}
function Hi(e, t, n) {
  var r;
  return (
    n ? (r = e.v + bd * t) : (r = e.v - wd * t),
    r > 1 && (r = 1),
    Number(r.toFixed(2))
  );
}
function Xo(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = [],
      r = Un(e),
      o = Pc;
    o > 0;
    o -= 1
  ) {
    var a = Li(r),
      i = kr(Un({ h: Ri(a, o, !0), s: Bi(a, o, !0), v: Hi(a, o, !0) }));
    n.push(i);
  }
  n.push(kr(r));
  for (var l = 1; l <= Tc; l += 1) {
    var c = Li(r),
      u = kr(Un({ h: Ri(c, l), s: Bi(c, l), v: Hi(c, l) }));
    n.push(u);
  }
  return t.theme === "dark"
    ? Cd.map(function (s) {
        var d = s.index,
          f = s.opacity,
          v = kr(xd(Un(t.backgroundColor || "#141414"), Un(n[d]), f * 100));
        return v;
      })
    : n;
}
var xo = {
    red: "#F5222D",
    volcano: "#FA541C",
    orange: "#FA8C16",
    gold: "#FAAD14",
    yellow: "#FADB14",
    lime: "#A0D911",
    green: "#52C41A",
    cyan: "#13C2C2",
    blue: "#1890FF",
    geekblue: "#2F54EB",
    purple: "#722ED1",
    magenta: "#EB2F96",
    grey: "#666666"
  },
  So = {},
  Oo = {};
Object.keys(xo).forEach(function (e) {
  (So[e] = Xo(xo[e])),
    (So[e].primary = So[e][5]),
    (Oo[e] = Xo(xo[e], { theme: "dark", backgroundColor: "#141414" })),
    (Oo[e].primary = Oo[e][5]);
});
var Vi = [],
  Yn = [],
  Sd =
    "insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).";
function Od() {
  var e = document.createElement("style");
  return e.setAttribute("type", "text/css"), e;
}
function kd(e, t) {
  if (((t = t || {}), e === void 0)) throw new Error(Sd);
  var n = t.prepend === !0 ? "prepend" : "append",
    r = t.container !== void 0 ? t.container : document.querySelector("head"),
    o = Vi.indexOf(r);
  o === -1 && ((o = Vi.push(r) - 1), (Yn[o] = {}));
  var a;
  return (
    Yn[o] !== void 0 && Yn[o][n] !== void 0
      ? (a = Yn[o][n])
      : ((a = Yn[o][n] = Od()),
        n === "prepend"
          ? r.insertBefore(a, r.childNodes[0])
          : r.appendChild(a)),
    e.charCodeAt(0) === 65279 && (e = e.substr(1, e.length)),
    a.styleSheet ? (a.styleSheet.cssText += e) : (a.textContent += e),
    a
  );
}
function $i(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        Pd(e, o, n[o]);
      });
  }
  return e;
}
function Pd(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
function zi(e) {
  return (
    typeof e == "object" &&
    typeof e.name == "string" &&
    typeof e.theme == "string" &&
    (typeof e.icon == "object" || typeof e.icon == "function")
  );
}
function Zo(e, t, n) {
  return n
    ? ji(
        e.tag,
        $i({ key: t }, n, e.attrs),
        (e.children || []).map(function (r, o) {
          return Zo(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
        })
      )
    : ji(
        e.tag,
        $i({ key: t }, e.attrs),
        (e.children || []).map(function (r, o) {
          return Zo(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
        })
      );
}
function Ec(e) {
  return Xo(e)[0];
}
function Ac(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
var Td = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,
  Wi = !1,
  Ed = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Td;
    ft(function () {
      Wi ||
        (typeof window < "u" &&
          window.document &&
          window.document.documentElement &&
          kd(t, { prepend: !0 }),
        (Wi = !0));
    });
  },
  Ad = ["icon", "primaryColor", "secondaryColor"];
function Nd(e, t) {
  if (e == null) return {};
  var n = Md(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      (r = a[o]),
        !(t.indexOf(r) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, r) || (n[r] = e[r]));
  }
  return n;
}
function Md(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    a;
  for (a = 0; a < r.length; a++)
    (o = r[a]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Rr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        Id(e, o, n[o]);
      });
  }
  return e;
}
function Id(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var nr = { primaryColor: "#333", secondaryColor: "#E6E6E6", calculated: !1 };
function _d(e) {
  var t = e.primaryColor,
    n = e.secondaryColor;
  (nr.primaryColor = t),
    (nr.secondaryColor = n || Ec(t)),
    (nr.calculated = !!n);
}
function jd() {
  return Rr({}, nr);
}
var Fn = function (t, n) {
  var r = Rr({}, t, n.attrs),
    o = r.icon,
    a = r.primaryColor,
    i = r.secondaryColor,
    l = Nd(r, Ad),
    c = nr;
  if (
    (a && (c = { primaryColor: a, secondaryColor: i || Ec(a) }),
    Ed(),
    zi(o),
    !zi(o))
  )
    return null;
  var u = o;
  return (
    u &&
      typeof u.icon == "function" &&
      (u = Rr({}, u, { icon: u.icon(c.primaryColor, c.secondaryColor) })),
    Zo(
      u.icon,
      "svg-".concat(u.name),
      Rr({}, l, {
        "data-icon": u.name,
        width: "1em",
        height: "1em",
        fill: "currentColor",
        "aria-hidden": "true"
      })
    )
  );
};
Fn.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
Fn.inheritAttrs = !1;
Fn.displayName = "IconBase";
Fn.getTwoToneColors = jd;
Fn.setTwoToneColors = _d;
const Ra = Fn;
function Fd(e, t) {
  return Rd(e) || Ld(e, t) || Kd(e, t) || Dd();
}
function Dd() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Kd(e, t) {
  if (!!e) {
    if (typeof e == "string") return Ui(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Ui(e, t);
  }
}
function Ui(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ld(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r = [],
      o = !0,
      a = !1,
      i,
      l;
    try {
      for (
        n = n.call(e);
        !(o = (i = n.next()).done) && (r.push(i.value), !(t && r.length === t));
        o = !0
      );
    } catch (c) {
      (a = !0), (l = c);
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (a) throw l;
      }
    }
    return r;
  }
}
function Rd(e) {
  if (Array.isArray(e)) return e;
}
function Nc(e) {
  var t = Ac(e),
    n = Fd(t, 2),
    r = n[0],
    o = n[1];
  return Ra.setTwoToneColors({ primaryColor: r, secondaryColor: o });
}
function Bd() {
  var e = Ra.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Hd = [
  "class",
  "icon",
  "spin",
  "rotate",
  "tabindex",
  "twoToneColor",
  "onClick"
];
function Vd(e, t) {
  return Ud(e) || Wd(e, t) || zd(e, t) || $d();
}
function $d() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zd(e, t) {
  if (!!e) {
    if (typeof e == "string") return Yi(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Yi(e, t);
  }
}
function Yi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Wd(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r = [],
      o = !0,
      a = !1,
      i,
      l;
    try {
      for (
        n = n.call(e);
        !(o = (i = n.next()).done) && (r.push(i.value), !(t && r.length === t));
        o = !0
      );
    } catch (c) {
      (a = !0), (l = c);
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (a) throw l;
      }
    }
    return r;
  }
}
function Ud(e) {
  if (Array.isArray(e)) return e;
}
function Gi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        Qo(e, o, n[o]);
      });
  }
  return e;
}
function Qo(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
function Yd(e, t) {
  if (e == null) return {};
  var n = Gd(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      (r = a[o]),
        !(t.indexOf(r) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, r) || (n[r] = e[r]));
  }
  return n;
}
function Gd(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    a;
  for (a = 0; a < r.length; a++)
    (o = r[a]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
Nc("#1890ff");
var Dn = function (t, n) {
  var r,
    o = Gi({}, t, n.attrs),
    a = o.class,
    i = o.icon,
    l = o.spin,
    c = o.rotate,
    u = o.tabindex,
    s = o.twoToneColor,
    d = o.onClick,
    f = Yd(o, Hd),
    v =
      ((r = { anticon: !0 }),
      Qo(r, "anticon-".concat(i.name), Boolean(i.name)),
      Qo(r, a, a),
      r),
    p = l === "" || !!l || i.name === "loading" ? "anticon-spin" : "",
    b = u;
  b === void 0 && d && ((b = -1), (f.tabindex = b));
  var w = c
      ? {
          msTransform: "rotate(".concat(c, "deg)"),
          transform: "rotate(".concat(c, "deg)")
        }
      : void 0,
    C = Ac(s),
    y = Vd(C, 2),
    x = y[0],
    h = y[1];
  return m(
    "span",
    Gi({ role: "img", "aria-label": i.name }, f, { onClick: d, class: v }),
    [
      m(
        Ra,
        { class: p, icon: i, primaryColor: x, secondaryColor: h, style: w },
        null
      )
    ]
  );
};
Dn.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: String
};
Dn.displayName = "AntdIcon";
Dn.inheritAttrs = !1;
Dn.getTwoToneColor = Bd;
Dn.setTwoToneColor = Nc;
const ot = Dn;
function qi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        qd(e, o, n[o]);
      });
  }
  return e;
}
function qd(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var Ba = function (t, n) {
  var r = qi({}, t, n.attrs);
  return m(ot, qi({}, r, { icon: gd }), null);
};
Ba.displayName = "LoadingOutlined";
Ba.inheritAttrs = !1;
const ro = Ba;
var Xd = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
        }
      }
    ]
  },
  name: "exclamation-circle",
  theme: "filled"
};
const Zd = Xd;
function Xi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        Qd(e, o, n[o]);
      });
  }
  return e;
}
function Qd(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var Ha = function (t, n) {
  var r = Xi({}, t, n.attrs);
  return m(ot, Xi({}, r, { icon: Zd }), null);
};
Ha.displayName = "ExclamationCircleFilled";
Ha.inheritAttrs = !1;
const Jd = Ha;
var ev = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"
        }
      }
    ]
  },
  name: "close-circle",
  theme: "filled"
};
const tv = ev;
function Zi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        nv(e, o, n[o]);
      });
  }
  return e;
}
function nv(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var Va = function (t, n) {
  var r = Zi({}, t, n.attrs);
  return m(ot, Zi({}, r, { icon: tv }), null);
};
Va.displayName = "CloseCircleFilled";
Va.inheritAttrs = !1;
const Mc = Va;
var rv = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
        }
      }
    ]
  },
  name: "check-circle",
  theme: "filled"
};
const ov = rv;
function Qi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        av(e, o, n[o]);
      });
  }
  return e;
}
function av(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var $a = function (t, n) {
  var r = Qi({}, t, n.attrs);
  return m(ot, Qi({}, r, { icon: ov }), null);
};
$a.displayName = "CheckCircleFilled";
$a.inheritAttrs = !1;
const iv = $a;
var lv = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
        }
      }
    ]
  },
  name: "info-circle",
  theme: "filled"
};
const uv = lv;
function Ji(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        cv(e, o, n[o]);
      });
  }
  return e;
}
function cv(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var za = function (t, n) {
  var r = Ji({}, t, n.attrs);
  return m(ot, Ji({}, r, { icon: uv }), null);
};
za.displayName = "InfoCircleFilled";
za.inheritAttrs = !1;
const sv = za;
var fv = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
        }
      },
      {
        tag: "path",
        attrs: {
          d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
        }
      }
    ]
  },
  name: "check-circle",
  theme: "outlined"
};
const dv = fv;
function el(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        vv(e, o, n[o]);
      });
  }
  return e;
}
function vv(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var Wa = function (t, n) {
  var r = el({}, t, n.attrs);
  return m(ot, el({}, r, { icon: dv }), null);
};
Wa.displayName = "CheckCircleOutlined";
Wa.inheritAttrs = !1;
const pv = Wa;
var hv = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
        }
      },
      {
        tag: "path",
        attrs: {
          d: "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"
        }
      }
    ]
  },
  name: "info-circle",
  theme: "outlined"
};
const mv = hv;
function tl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        gv(e, o, n[o]);
      });
  }
  return e;
}
function gv(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var Ua = function (t, n) {
  var r = tl({}, t, n.attrs);
  return m(ot, tl({}, r, { icon: mv }), null);
};
Ua.displayName = "InfoCircleOutlined";
Ua.inheritAttrs = !1;
const yv = Ua;
var bv = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"
        }
      },
      {
        tag: "path",
        attrs: {
          d: "M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
        }
      }
    ]
  },
  name: "close-circle",
  theme: "outlined"
};
const wv = bv;
function nl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        Cv(e, o, n[o]);
      });
  }
  return e;
}
function Cv(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var Ya = function (t, n) {
  var r = nl({}, t, n.attrs);
  return m(ot, nl({}, r, { icon: wv }), null);
};
Ya.displayName = "CloseCircleOutlined";
Ya.inheritAttrs = !1;
const xv = Ya;
var Sv = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
        }
      },
      {
        tag: "path",
        attrs: {
          d: "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"
        }
      }
    ]
  },
  name: "exclamation-circle",
  theme: "outlined"
};
const Ov = Sv;
function rl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        kv(e, o, n[o]);
      });
  }
  return e;
}
function kv(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var Ga = function (t, n) {
  var r = rl({}, t, n.attrs);
  return m(ot, rl({}, r, { icon: Ov }), null);
};
Ga.displayName = "ExclamationCircleOutlined";
Ga.inheritAttrs = !1;
const Pv = Ga;
var Tv = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
        }
      }
    ]
  },
  name: "close",
  theme: "outlined"
};
const Ev = Tv;
function ol(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        Av(e, o, n[o]);
      });
  }
  return e;
}
function Av(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var qa = function (t, n) {
  var r = ol({}, t, n.attrs);
  return m(ot, ol({}, r, { icon: Ev }), null);
};
qa.displayName = "CloseOutlined";
qa.inheritAttrs = !1;
const Xa = qa;
var Nv = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
        }
      }
    ]
  },
  name: "down",
  theme: "outlined"
};
const Mv = Nv;
function al(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        Iv(e, o, n[o]);
      });
  }
  return e;
}
function Iv(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var Za = function (t, n) {
  var r = al({}, t, n.attrs);
  return m(ot, al({}, r, { icon: Mv }), null);
};
Za.displayName = "DownOutlined";
Za.inheritAttrs = !1;
const _v = Za;
var jv = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
        }
      }
    ]
  },
  name: "check",
  theme: "outlined"
};
const Fv = jv;
function il(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        Dv(e, o, n[o]);
      });
  }
  return e;
}
function Dv(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var Qa = function (t, n) {
  var r = il({}, t, n.attrs);
  return m(ot, il({}, r, { icon: Fv }), null);
};
Qa.displayName = "CheckOutlined";
Qa.inheritAttrs = !1;
const Kv = Qa;
var Lv = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
        }
      }
    ]
  },
  name: "search",
  theme: "outlined"
};
const Rv = Lv;
function ll(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        Bv(e, o, n[o]);
      });
  }
  return e;
}
function Bv(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var Ja = function (t, n) {
  var r = ll({}, t, n.attrs);
  return m(ot, ll({}, r, { icon: Rv }), null);
};
Ja.displayName = "SearchOutlined";
Ja.inheritAttrs = !1;
const Hv = Ja;
var Vv = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"
        }
      }
    ]
  },
  name: "ellipsis",
  theme: "outlined"
};
const $v = Vv;
function ul(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        zv(e, o, n[o]);
      });
  }
  return e;
}
function zv(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var ei = function (t, n) {
  var r = ul({}, t, n.attrs);
  return m(ot, ul({}, r, { icon: $v }), null);
};
ei.displayName = "EllipsisOutlined";
ei.inheritAttrs = !1;
const Ic = ei;
var Wv = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 1024 1024", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
        }
      }
    ]
  },
  name: "caret-down",
  theme: "filled"
};
const Uv = Wv;
function cl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        Yv(e, o, n[o]);
      });
  }
  return e;
}
function Yv(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var ti = function (t, n) {
  var r = cl({}, t, n.attrs);
  return m(ot, cl({}, r, { icon: Uv }), null);
};
ti.displayName = "CaretDownFilled";
ti.inheritAttrs = !1;
const Gv = ti;
var qv = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z"
        }
      }
    ]
  },
  name: "file",
  theme: "outlined"
};
const Xv = qv;
function sl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        Zv(e, o, n[o]);
      });
  }
  return e;
}
function Zv(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var ni = function (t, n) {
  var r = sl({}, t, n.attrs);
  return m(ot, sl({}, r, { icon: Xv }), null);
};
ni.displayName = "FileOutlined";
ni.inheritAttrs = !1;
const Qv = ni;
var Jv = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"
        }
      },
      {
        tag: "path",
        attrs: {
          d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"
        }
      }
    ]
  },
  name: "minus-square",
  theme: "outlined"
};
const ep = Jv;
function fl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        tp(e, o, n[o]);
      });
  }
  return e;
}
function tp(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var ri = function (t, n) {
  var r = fl({}, t, n.attrs);
  return m(ot, fl({}, r, { icon: ep }), null);
};
ri.displayName = "MinusSquareOutlined";
ri.inheritAttrs = !1;
const np = ri;
var rp = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      { tag: "defs", attrs: {}, children: [{ tag: "style", attrs: {} }] },
      {
        tag: "path",
        attrs: {
          d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"
        }
      },
      {
        tag: "path",
        attrs: {
          d: "M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"
        }
      }
    ]
  },
  name: "plus",
  theme: "outlined"
};
const op = rp;
function dl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        ap(e, o, n[o]);
      });
  }
  return e;
}
function ap(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var oi = function (t, n) {
  var r = dl({}, t, n.attrs);
  return m(ot, dl({}, r, { icon: op }), null);
};
oi.displayName = "PlusOutlined";
oi.inheritAttrs = !1;
const ip = oi;
var lp = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"
        }
      },
      {
        tag: "path",
        attrs: {
          d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"
        }
      }
    ]
  },
  name: "plus-square",
  theme: "outlined"
};
const up = lp;
function vl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        cp(e, o, n[o]);
      });
  }
  return e;
}
function cp(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var ai = function (t, n) {
  var r = vl({}, t, n.attrs);
  return m(ot, vl({}, r, { icon: up }), null);
};
ai.displayName = "PlusSquareOutlined";
ai.inheritAttrs = !1;
const sp = ai;
var fp = Object.create,
  _c = Object.defineProperty,
  dp = Object.getOwnPropertyDescriptor,
  vp = Object.getOwnPropertyNames,
  pp = Object.getPrototypeOf,
  hp = Object.prototype.hasOwnProperty,
  gt = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  mp = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let o of vp(t))
        !hp.call(e, o) &&
          o !== n &&
          _c(e, o, {
            get: () => t[o],
            enumerable: !(r = dp(t, o)) || r.enumerable
          });
    return e;
  },
  jc = (e, t, n) => (
    (n = e != null ? fp(pp(e)) : {}),
    mp(
      t || !e || !e.__esModule
        ? _c(n, "default", { value: e, enumerable: !0 })
        : n,
      e
    )
  ),
  gp = gt((e, t) => {
    function n(r) {
      return (
        (t.exports = n =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (o) {
                return typeof o;
              }
            : function (o) {
                return o &&
                  typeof Symbol == "function" &&
                  o.constructor === Symbol &&
                  o !== Symbol.prototype
                  ? "symbol"
                  : typeof o;
              }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports),
        n(r)
      );
    }
    (t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  yp = gt((e, t) => {
    var n = gp().default;
    function r() {
      (t.exports = r =
        function () {
          return o;
        }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
      var o = {},
        a = Object.prototype,
        i = a.hasOwnProperty,
        l = typeof Symbol == "function" ? Symbol : {},
        c = l.iterator || "@@iterator",
        u = l.asyncIterator || "@@asyncIterator",
        s = l.toStringTag || "@@toStringTag";
      function d(T, O, I) {
        return (
          Object.defineProperty(T, O, {
            value: I,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }),
          T[O]
        );
      }
      try {
        d({}, "");
      } catch {
        d = function (T, O, I) {
          return (T[O] = I);
        };
      }
      function f(T, O, I, V) {
        var D = O && O.prototype instanceof b ? O : b,
          G = Object.create(D.prototype),
          oe = new q(V || []);
        return (
          (G._invoke = (function (ue, z, N) {
            var Y = "suspendedStart";
            return function (ne, le) {
              if (Y === "executing")
                throw new Error("Generator is already running");
              if (Y === "completed") {
                if (ne === "throw") throw le;
                return j();
              }
              for (N.method = ne, N.arg = le; ; ) {
                var Pe = N.delegate;
                if (Pe) {
                  var xe = A(Pe, N);
                  if (xe) {
                    if (xe === p) continue;
                    return xe;
                  }
                }
                if (N.method === "next") N.sent = N._sent = N.arg;
                else if (N.method === "throw") {
                  if (Y === "suspendedStart") throw ((Y = "completed"), N.arg);
                  N.dispatchException(N.arg);
                } else N.method === "return" && N.abrupt("return", N.arg);
                Y = "executing";
                var me = v(ue, z, N);
                if (me.type === "normal") {
                  if (
                    ((Y = N.done ? "completed" : "suspendedYield"),
                    me.arg === p)
                  )
                    continue;
                  return { value: me.arg, done: N.done };
                }
                me.type === "throw" &&
                  ((Y = "completed"), (N.method = "throw"), (N.arg = me.arg));
              }
            };
          })(T, I, oe)),
          G
        );
      }
      function v(T, O, I) {
        try {
          return { type: "normal", arg: T.call(O, I) };
        } catch (V) {
          return { type: "throw", arg: V };
        }
      }
      o.wrap = f;
      var p = {};
      function b() {}
      function w() {}
      function C() {}
      var y = {};
      d(y, c, function () {
        return this;
      });
      var x = Object.getPrototypeOf,
        h = x && x(x(B([])));
      h && h !== a && i.call(h, c) && (y = h);
      var g = (C.prototype = b.prototype = Object.create(y));
      function S(T) {
        ["next", "throw", "return"].forEach(function (O) {
          d(T, O, function (I) {
            return this._invoke(O, I);
          });
        });
      }
      function P(T, O) {
        function I(D, G, oe, ue) {
          var z = v(T[D], T, G);
          if (z.type !== "throw") {
            var N = z.arg,
              Y = N.value;
            return Y && n(Y) == "object" && i.call(Y, "__await")
              ? O.resolve(Y.__await).then(
                  function (ne) {
                    I("next", ne, oe, ue);
                  },
                  function (ne) {
                    I("throw", ne, oe, ue);
                  }
                )
              : O.resolve(Y).then(
                  function (ne) {
                    (N.value = ne), oe(N);
                  },
                  function (ne) {
                    return I("throw", ne, oe, ue);
                  }
                );
          }
          ue(z.arg);
        }
        var V;
        this._invoke = function (D, G) {
          function oe() {
            return new O(function (ue, z) {
              I(D, G, ue, z);
            });
          }
          return (V = V ? V.then(oe, oe) : oe());
        };
      }
      function A(T, O) {
        var I = T.iterator[O.method];
        if (I === void 0) {
          if (((O.delegate = null), O.method === "throw")) {
            if (
              T.iterator.return &&
              ((O.method = "return"),
              (O.arg = void 0),
              A(T, O),
              O.method === "throw")
            )
              return p;
            (O.method = "throw"),
              (O.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return p;
        }
        var V = v(I, T.iterator, O.arg);
        if (V.type === "throw")
          return (O.method = "throw"), (O.arg = V.arg), (O.delegate = null), p;
        var D = V.arg;
        return D
          ? D.done
            ? ((O[T.resultName] = D.value),
              (O.next = T.nextLoc),
              O.method !== "return" && ((O.method = "next"), (O.arg = void 0)),
              (O.delegate = null),
              p)
            : D
          : ((O.method = "throw"),
            (O.arg = new TypeError("iterator result is not an object")),
            (O.delegate = null),
            p);
      }
      function R(T) {
        var O = { tryLoc: T[0] };
        1 in T && (O.catchLoc = T[1]),
          2 in T && ((O.finallyLoc = T[2]), (O.afterLoc = T[3])),
          this.tryEntries.push(O);
      }
      function M(T) {
        var O = T.completion || {};
        (O.type = "normal"), delete O.arg, (T.completion = O);
      }
      function q(T) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          T.forEach(R, this),
          this.reset(!0);
      }
      function B(T) {
        if (T) {
          var O = T[c];
          if (O) return O.call(T);
          if (typeof T.next == "function") return T;
          if (!isNaN(T.length)) {
            var I = -1,
              V = function D() {
                for (; ++I < T.length; )
                  if (i.call(T, I)) return (D.value = T[I]), (D.done = !1), D;
                return (D.value = void 0), (D.done = !0), D;
              };
            return (V.next = V);
          }
        }
        return { next: j };
      }
      function j() {
        return { value: void 0, done: !0 };
      }
      return (
        (w.prototype = C),
        d(g, "constructor", C),
        d(C, "constructor", w),
        (w.displayName = d(C, s, "GeneratorFunction")),
        (o.isGeneratorFunction = function (T) {
          var O = typeof T == "function" && T.constructor;
          return (
            !!O &&
            (O === w || (O.displayName || O.name) === "GeneratorFunction")
          );
        }),
        (o.mark = function (T) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(T, C)
              : ((T.__proto__ = C), d(T, s, "GeneratorFunction")),
            (T.prototype = Object.create(g)),
            T
          );
        }),
        (o.awrap = function (T) {
          return { __await: T };
        }),
        S(P.prototype),
        d(P.prototype, u, function () {
          return this;
        }),
        (o.AsyncIterator = P),
        (o.async = function (T, O, I, V, D) {
          D === void 0 && (D = Promise);
          var G = new P(f(T, O, I, V), D);
          return o.isGeneratorFunction(O)
            ? G
            : G.next().then(function (oe) {
                return oe.done ? oe.value : G.next();
              });
        }),
        S(g),
        d(g, s, "Generator"),
        d(g, c, function () {
          return this;
        }),
        d(g, "toString", function () {
          return "[object Generator]";
        }),
        (o.keys = function (T) {
          var O = [];
          for (var I in T) O.push(I);
          return (
            O.reverse(),
            function V() {
              for (; O.length; ) {
                var D = O.pop();
                if (D in T) return (V.value = D), (V.done = !1), V;
              }
              return (V.done = !0), V;
            }
          );
        }),
        (o.values = B),
        (q.prototype = {
          constructor: q,
          reset: function (T) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(M),
              !T)
            )
              for (var O in this)
                O.charAt(0) === "t" &&
                  i.call(this, O) &&
                  !isNaN(+O.slice(1)) &&
                  (this[O] = void 0);
          },
          stop: function () {
            this.done = !0;
            var T = this.tryEntries[0].completion;
            if (T.type === "throw") throw T.arg;
            return this.rval;
          },
          dispatchException: function (T) {
            if (this.done) throw T;
            var O = this;
            function I(z, N) {
              return (
                (G.type = "throw"),
                (G.arg = T),
                (O.next = z),
                N && ((O.method = "next"), (O.arg = void 0)),
                !!N
              );
            }
            for (var V = this.tryEntries.length - 1; V >= 0; --V) {
              var D = this.tryEntries[V],
                G = D.completion;
              if (D.tryLoc === "root") return I("end");
              if (D.tryLoc <= this.prev) {
                var oe = i.call(D, "catchLoc"),
                  ue = i.call(D, "finallyLoc");
                if (oe && ue) {
                  if (this.prev < D.catchLoc) return I(D.catchLoc, !0);
                  if (this.prev < D.finallyLoc) return I(D.finallyLoc);
                } else if (oe) {
                  if (this.prev < D.catchLoc) return I(D.catchLoc, !0);
                } else {
                  if (!ue)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < D.finallyLoc) return I(D.finallyLoc);
                }
              }
            }
          },
          abrupt: function (T, O) {
            for (var I = this.tryEntries.length - 1; I >= 0; --I) {
              var V = this.tryEntries[I];
              if (
                V.tryLoc <= this.prev &&
                i.call(V, "finallyLoc") &&
                this.prev < V.finallyLoc
              ) {
                var D = V;
                break;
              }
            }
            D &&
              (T === "break" || T === "continue") &&
              D.tryLoc <= O &&
              O <= D.finallyLoc &&
              (D = null);
            var G = D ? D.completion : {};
            return (
              (G.type = T),
              (G.arg = O),
              D
                ? ((this.method = "next"), (this.next = D.finallyLoc), p)
                : this.complete(G)
            );
          },
          complete: function (T, O) {
            if (T.type === "throw") throw T.arg;
            return (
              T.type === "break" || T.type === "continue"
                ? (this.next = T.arg)
                : T.type === "return"
                ? ((this.rval = this.arg = T.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : T.type === "normal" && O && (this.next = O),
              p
            );
          },
          finish: function (T) {
            for (var O = this.tryEntries.length - 1; O >= 0; --O) {
              var I = this.tryEntries[O];
              if (I.finallyLoc === T)
                return this.complete(I.completion, I.afterLoc), M(I), p;
            }
          },
          catch: function (T) {
            for (var O = this.tryEntries.length - 1; O >= 0; --O) {
              var I = this.tryEntries[O];
              if (I.tryLoc === T) {
                var V = I.completion;
                if (V.type === "throw") {
                  var D = V.arg;
                  M(I);
                }
                return D;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (T, O, I) {
            return (
              (this.delegate = { iterator: B(T), resultName: O, nextLoc: I }),
              this.method === "next" && (this.arg = void 0),
              p
            );
          }
        }),
        o
      );
    }
    (t.exports = r),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  Fc = gt((e, t) => {
    var n = yp()();
    t.exports = n;
    try {
      regeneratorRuntime = n;
    } catch {
      typeof globalThis == "object"
        ? (globalThis.regeneratorRuntime = n)
        : Function("r", "regeneratorRuntime = r")(n);
    }
  }),
  Jt = gt((e, t) => {
    t.exports = {};
  }),
  bp = gt((e, t) => {
    t.exports = {};
  }),
  wp = gt((e, t) => {
    t.exports = {};
  }),
  Cp = gt((e, t) => {
    t.exports = {};
  }),
  Dc = gt(() => {
    Jt(), Cp();
  }),
  xp = gt(() => {
    Jt(), wp(), Dc();
  }),
  Sp = gt((e, t) => {
    t.exports = {};
  }),
  Op = gt((e, t) => {
    t.exports = {};
  }),
  kp = gt(() => {
    Jt(), Op();
  }),
  Pp = gt((e, t) => {
    t.exports = {};
  }),
  Tp = gt((e, t) => {
    t.exports = {};
  }),
  Ep = gt((e, t) => {
    t.exports = {};
  });
function U(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
function pl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function X(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? pl(Object(n), !0).forEach(function (r) {
          U(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : pl(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function k() {
  return (
    (k = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    k.apply(this, arguments)
  );
}
function We(e) {
  return (
    (We =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    We(e)
  );
}
var Ap = function (e) {
    return typeof e == "function";
  },
  Np = Array.isArray,
  Mp = function (e) {
    return typeof e == "string";
  },
  Ip = function (e) {
    return e !== null && We(e) === "object";
  },
  _p = /^on[^a-z]/,
  jp = function (e) {
    return _p.test(e);
  },
  Kc = function (e) {
    var t = Object.create(null);
    return function (n) {
      var r = t[n];
      return r || (t[n] = e(n));
    };
  },
  Fp = /-(\w)/g,
  ii = Kc(function (e) {
    return e.replace(Fp, function (t, n) {
      return n ? n.toUpperCase() : "";
    });
  }),
  Dp = /\B([A-Z])/g,
  Kp = Kc(function (e) {
    return e.replace(Dp, "-$1").toLowerCase();
  }),
  Lp = Object.prototype.hasOwnProperty,
  hl = function (e, t) {
    return Lp.call(e, t);
  };
function Rp(e, t, n, r) {
  var o = e[n];
  if (o != null) {
    var a = hl(o, "default");
    if (a && r === void 0) {
      var i = o.default;
      r = o.type !== Function && Ap(i) ? i() : i;
    }
    o.type === Boolean && (!hl(t, n) && !a ? (r = !1) : r === "" && (r = !0));
  }
  return r;
}
function Gn(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function er(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = arguments.length > 2 ? arguments[2] : void 0;
  return typeof e == "function" ? e(t) : e != null ? e : n;
}
function Lc() {
  for (var e = [], t = 0; t < arguments.length; t++) {
    var n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (n) {
      if (Mp(n)) e.push(n);
      else if (Np(n))
        for (var r = 0; r < n.length; r++) {
          var o = Lc(n[r]);
          o && e.push(o);
        }
      else if (Ip(n)) for (var a in n) n[a] && e.push(a);
    }
  }
  return e.join(" ");
}
var we = Lc,
  Rc = (function () {
    if (typeof Map < "u") return Map;
    function e(t, n) {
      var r = -1;
      return (
        t.some(function (o, a) {
          return o[0] === n ? ((r = a), !0) : !1;
        }),
        r
      );
    }
    return (function () {
      function t() {
        this.__entries__ = [];
      }
      return (
        Object.defineProperty(t.prototype, "size", {
          get: function () {
            return this.__entries__.length;
          },
          enumerable: !0,
          configurable: !0
        }),
        (t.prototype.get = function (n) {
          var r = e(this.__entries__, n),
            o = this.__entries__[r];
          return o && o[1];
        }),
        (t.prototype.set = function (n, r) {
          var o = e(this.__entries__, n);
          ~o ? (this.__entries__[o][1] = r) : this.__entries__.push([n, r]);
        }),
        (t.prototype.delete = function (n) {
          var r = this.__entries__,
            o = e(r, n);
          ~o && r.splice(o, 1);
        }),
        (t.prototype.has = function (n) {
          return !!~e(this.__entries__, n);
        }),
        (t.prototype.clear = function () {
          this.__entries__.splice(0);
        }),
        (t.prototype.forEach = function (n, r) {
          r === void 0 && (r = null);
          for (var o = 0, a = this.__entries__; o < a.length; o++) {
            var i = a[o];
            n.call(r, i[1], i[0]);
          }
        }),
        t
      );
    })();
  })(),
  Jo =
    typeof window < "u" &&
    typeof document < "u" &&
    window.document === document,
  Wr = (function () {
    return typeof global < "u" && global.Math === Math
      ? global
      : typeof self < "u" && self.Math === Math
      ? self
      : typeof window < "u" && window.Math === Math
      ? window
      : Function("return this")();
  })(),
  Bp = (function () {
    return typeof requestAnimationFrame == "function"
      ? requestAnimationFrame.bind(Wr)
      : function (e) {
          return setTimeout(function () {
            return e(Date.now());
          }, 1e3 / 60);
        };
  })(),
  Hp = 2;
function Vp(e, t) {
  var n = !1,
    r = !1,
    o = 0;
  function a() {
    n && ((n = !1), e()), r && l();
  }
  function i() {
    Bp(a);
  }
  function l() {
    var c = Date.now();
    if (n) {
      if (c - o < Hp) return;
      r = !0;
    } else (n = !0), (r = !1), setTimeout(i, t);
    o = c;
  }
  return l;
}
var $p = 20,
  zp = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
  Wp = typeof MutationObserver < "u",
  Up = (function () {
    function e() {
      (this.connected_ = !1),
        (this.mutationEventsAdded_ = !1),
        (this.mutationsObserver_ = null),
        (this.observers_ = []),
        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
        (this.refresh = Vp(this.refresh.bind(this), $p));
    }
    return (
      (e.prototype.addObserver = function (t) {
        ~this.observers_.indexOf(t) || this.observers_.push(t),
          this.connected_ || this.connect_();
      }),
      (e.prototype.removeObserver = function (t) {
        var n = this.observers_,
          r = n.indexOf(t);
        ~r && n.splice(r, 1),
          !n.length && this.connected_ && this.disconnect_();
      }),
      (e.prototype.refresh = function () {
        var t = this.updateObservers_();
        t && this.refresh();
      }),
      (e.prototype.updateObservers_ = function () {
        var t = this.observers_.filter(function (n) {
          return n.gatherActive(), n.hasActive();
        });
        return (
          t.forEach(function (n) {
            return n.broadcastActive();
          }),
          t.length > 0
        );
      }),
      (e.prototype.connect_ = function () {
        !Jo ||
          this.connected_ ||
          (document.addEventListener("transitionend", this.onTransitionEnd_),
          window.addEventListener("resize", this.refresh),
          Wp
            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
              this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
              }))
            : (document.addEventListener("DOMSubtreeModified", this.refresh),
              (this.mutationEventsAdded_ = !0)),
          (this.connected_ = !0));
      }),
      (e.prototype.disconnect_ = function () {
        !Jo ||
          !this.connected_ ||
          (document.removeEventListener("transitionend", this.onTransitionEnd_),
          window.removeEventListener("resize", this.refresh),
          this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
          this.mutationEventsAdded_ &&
            document.removeEventListener("DOMSubtreeModified", this.refresh),
          (this.mutationsObserver_ = null),
          (this.mutationEventsAdded_ = !1),
          (this.connected_ = !1));
      }),
      (e.prototype.onTransitionEnd_ = function (t) {
        var n = t.propertyName,
          r = n === void 0 ? "" : n,
          o = zp.some(function (a) {
            return !!~r.indexOf(a);
          });
        o && this.refresh();
      }),
      (e.getInstance = function () {
        return this.instance_ || (this.instance_ = new e()), this.instance_;
      }),
      (e.instance_ = null),
      e
    );
  })(),
  Bc = function (e, t) {
    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
      var o = r[n];
      Object.defineProperty(e, o, {
        value: t[o],
        enumerable: !1,
        writable: !1,
        configurable: !0
      });
    }
    return e;
  },
  An = function (e) {
    var t = e && e.ownerDocument && e.ownerDocument.defaultView;
    return t || Wr;
  },
  Hc = oo(0, 0, 0, 0);
function Ur(e) {
  return parseFloat(e) || 0;
}
function ml(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return t.reduce(function (r, o) {
    var a = e["border-" + o + "-width"];
    return r + Ur(a);
  }, 0);
}
function Yp(e) {
  for (
    var t = ["top", "right", "bottom", "left"], n = {}, r = 0, o = t;
    r < o.length;
    r++
  ) {
    var a = o[r],
      i = e["padding-" + a];
    n[a] = Ur(i);
  }
  return n;
}
function Gp(e) {
  var t = e.getBBox();
  return oo(0, 0, t.width, t.height);
}
function qp(e) {
  var t = e.clientWidth,
    n = e.clientHeight;
  if (!t && !n) return Hc;
  var r = An(e).getComputedStyle(e),
    o = Yp(r),
    a = o.left + o.right,
    i = o.top + o.bottom,
    l = Ur(r.width),
    c = Ur(r.height);
  if (
    (r.boxSizing === "border-box" &&
      (Math.round(l + a) !== t && (l -= ml(r, "left", "right") + a),
      Math.round(c + i) !== n && (c -= ml(r, "top", "bottom") + i)),
    !Zp(e))
  ) {
    var u = Math.round(l + a) - t,
      s = Math.round(c + i) - n;
    Math.abs(u) !== 1 && (l -= u), Math.abs(s) !== 1 && (c -= s);
  }
  return oo(o.left, o.top, l, c);
}
var Xp = (function () {
  return typeof SVGGraphicsElement < "u"
    ? function (e) {
        return e instanceof An(e).SVGGraphicsElement;
      }
    : function (e) {
        return e instanceof An(e).SVGElement && typeof e.getBBox == "function";
      };
})();
function Zp(e) {
  return e === An(e).document.documentElement;
}
function Qp(e) {
  return Jo ? (Xp(e) ? Gp(e) : qp(e)) : Hc;
}
function Jp(e) {
  var t = e.x,
    n = e.y,
    r = e.width,
    o = e.height,
    a = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object,
    i = Object.create(a.prototype);
  return (
    Bc(i, {
      x: t,
      y: n,
      width: r,
      height: o,
      top: n,
      right: t + r,
      bottom: o + n,
      left: t
    }),
    i
  );
}
function oo(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var eh = (function () {
    function e(t) {
      (this.broadcastWidth = 0),
        (this.broadcastHeight = 0),
        (this.contentRect_ = oo(0, 0, 0, 0)),
        (this.target = t);
    }
    return (
      (e.prototype.isActive = function () {
        var t = Qp(this.target);
        return (
          (this.contentRect_ = t),
          t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
        );
      }),
      (e.prototype.broadcastRect = function () {
        var t = this.contentRect_;
        return (
          (this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t
        );
      }),
      e
    );
  })(),
  th = (function () {
    function e(t, n) {
      var r = Jp(n);
      Bc(this, { target: t, contentRect: r });
    }
    return e;
  })(),
  nh = (function () {
    function e(t, n, r) {
      if (
        ((this.activeObservations_ = []),
        (this.observations_ = new Rc()),
        typeof t != "function")
      )
        throw new TypeError(
          "The callback provided as parameter 1 is not a function."
        );
      (this.callback_ = t), (this.controller_ = n), (this.callbackCtx_ = r);
    }
    return (
      (e.prototype.observe = function (t) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
          if (!(t instanceof An(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var n = this.observations_;
          n.has(t) ||
            (n.set(t, new eh(t)),
            this.controller_.addObserver(this),
            this.controller_.refresh());
        }
      }),
      (e.prototype.unobserve = function (t) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
          if (!(t instanceof An(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var n = this.observations_;
          !n.has(t) ||
            (n.delete(t), n.size || this.controller_.removeObserver(this));
        }
      }),
      (e.prototype.disconnect = function () {
        this.clearActive(),
          this.observations_.clear(),
          this.controller_.removeObserver(this);
      }),
      (e.prototype.gatherActive = function () {
        var t = this;
        this.clearActive(),
          this.observations_.forEach(function (n) {
            n.isActive() && t.activeObservations_.push(n);
          });
      }),
      (e.prototype.broadcastActive = function () {
        if (this.hasActive()) {
          var t = this.callbackCtx_,
            n = this.activeObservations_.map(function (r) {
              return new th(r.target, r.broadcastRect());
            });
          this.callback_.call(t, n, t), this.clearActive();
        }
      }),
      (e.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
      }),
      (e.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
      }),
      e
    );
  })(),
  Vc = typeof WeakMap < "u" ? new WeakMap() : new Rc(),
  $c = (function () {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = Up.getInstance(),
        r = new nh(t, n, this);
      Vc.set(this, r);
    }
    return e;
  })();
["observe", "unobserve", "disconnect"].forEach(function (e) {
  $c.prototype[e] = function () {
    var t;
    return (t = Vc.get(this))[e].apply(t, arguments);
  };
});
var rh = (function () {
    return typeof Wr.ResizeObserver < "u" ? Wr.ResizeObserver : $c;
  })(),
  zc = rh;
function Wc(e) {
  if (Array.isArray(e)) return e;
}
function oh(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r = [],
      o = !0,
      a = !1,
      i,
      l;
    try {
      for (
        n = n.call(e);
        !(o = (i = n.next()).done) && (r.push(i.value), !(t && r.length === t));
        o = !0
      );
    } catch (c) {
      (a = !0), (l = c);
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (a) throw l;
      }
    }
    return r;
  }
}
function ea(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function li(e, t) {
  if (e) {
    if (typeof e == "string") return ea(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ea(e, t);
  }
}
function Uc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Se(e, t) {
  return Wc(e) || oh(e, t) || li(e, t) || Uc();
}
function ah(e) {
  if (Array.isArray(e)) return ea(e);
}
function Yc(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function ih() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Re(e) {
  return ah(e) || Yc(e) || li(e) || ih();
}
var lh =
    typeof global == "object" && global && global.Object === Object && global,
  Gc = lh,
  uh = typeof self == "object" && self && self.Object === Object && self,
  ch = Gc || uh || Function("return this")(),
  $t = ch,
  sh = $t.Symbol,
  Rt = sh,
  qc = Object.prototype,
  fh = qc.hasOwnProperty,
  dh = qc.toString,
  qn = Rt ? Rt.toStringTag : void 0;
function vh(e) {
  var t = fh.call(e, qn),
    n = e[qn];
  try {
    e[qn] = void 0;
    var r = !0;
  } catch {}
  var o = dh.call(e);
  return r && (t ? (e[qn] = n) : delete e[qn]), o;
}
var ph = vh,
  hh = Object.prototype,
  mh = hh.toString;
function gh(e) {
  return mh.call(e);
}
var yh = gh,
  bh = "[object Null]",
  wh = "[object Undefined]",
  gl = Rt ? Rt.toStringTag : void 0;
function Ch(e) {
  return e == null
    ? e === void 0
      ? wh
      : bh
    : gl && gl in Object(e)
    ? ph(e)
    : yh(e);
}
var Kn = Ch;
function xh(e, t) {
  return function (n) {
    return e(t(n));
  };
}
var Sh = xh;
function Oh(e) {
  return e != null && typeof e == "object";
}
var Nn = Oh,
  kh = function (e) {
    return e != null && e !== "";
  },
  ta = kh,
  Ph = function (e, t) {
    var n = k({}, e);
    return (
      Object.keys(t).forEach(function (r) {
        var o = n[r];
        if (o)
          o.type || o.default
            ? (o.default = t[r])
            : o.def
            ? o.def(t[r])
            : (n[r] = { type: o, default: t[r] });
        else throw new Error("not have ".concat(r, " prop"));
      }),
      n
    );
  },
  en = Ph,
  Th = function (e) {
    for (
      var t = Object.keys(e), n = {}, r = {}, o = {}, a = 0, i = t.length;
      a < i;
      a++
    ) {
      var l = t[a];
      jp(l)
        ? ((n[l[2].toLowerCase() + l.slice(3)] = e[l]), (r[l] = e[l]))
        : (o[l] = e[l]);
    }
    return { onEvents: r, events: n, extraAttrs: o };
  },
  Eh = function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "",
      t = arguments.length > 1 ? arguments[1] : void 0,
      n = {},
      r = /;(?![^(]*\))/g,
      o = /:(.+)/;
    return We(e) === "object"
      ? e
      : (e.split(r).forEach(function (a) {
          if (a) {
            var i = a.split(o);
            if (i.length > 1) {
              var l = t ? ii(i[0].trim()) : i[0].trim();
              n[l] = i[1].trim();
            }
          }
        }),
        n);
  },
  Ah = function (e, t) {
    return e[t] !== void 0;
  },
  It = function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
      r = Array.isArray(t) ? t : [t],
      o = [];
    return (
      r.forEach(function (a) {
        Array.isArray(a)
          ? o.push.apply(o, Re(e(a, n)))
          : a && a.type === wt
          ? o.push.apply(o, Re(e(a.children, n)))
          : a && yr(a)
          ? n && !Xc(a)
            ? o.push(a)
            : n || o.push(a)
          : ta(a) && o.push(a);
      }),
      o
    );
  },
  Nh = function (e) {
    var t =
        arguments.length > 1 && arguments[1] !== void 0
          ? arguments[1]
          : "default",
      n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (yr(e))
      return e.type === wt
        ? t === "default"
          ? It(e.children)
          : []
        : e.children && e.children[t]
        ? It(e.children[t](n))
        : [];
    var r = e.$slots[t] && e.$slots[t](n);
    return It(r);
  },
  lr = function (e) {
    for (
      var t,
        n =
          ((t = e == null ? void 0 : e.vnode) === null || t === void 0
            ? void 0
            : t.el) ||
          (e && (e.$el || e));
      n && !n.tagName;

    )
      n = n.nextSibling;
    return n;
  },
  Mh = function (e) {
    var t = {};
    if (e.$ && e.$.vnode) {
      var n = e.$.vnode.props || {};
      Object.keys(e.$props).forEach(function (i) {
        var l = e.$props[i],
          c = Kp(i);
        (l !== void 0 || c in n) && (t[i] = l);
      });
    } else if (yr(e) && We(e.type) === "object") {
      var r = e.props || {},
        o = {};
      Object.keys(r).forEach(function (i) {
        o[ii(i)] = r[i];
      });
      var a = e.type.props || {};
      Object.keys(a).forEach(function (i) {
        var l = Rp(a, o, i, o[i]);
        (l !== void 0 || i in o) && (t[i] = l);
      });
    }
    return t;
  },
  Ih = function (e) {
    var t =
        arguments.length > 1 && arguments[1] !== void 0
          ? arguments[1]
          : "default",
      n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e,
      r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0,
      o = void 0;
    if (e.$) {
      var a = e[t];
      if (a !== void 0) return typeof a == "function" && r ? a(n) : a;
      (o = e.$slots[t]), (o = r && o ? o(n) : o);
    } else if (yr(e)) {
      var i = e.props && e.props[t];
      if (i !== void 0 && e.props !== null)
        return typeof i == "function" && r ? i(n) : i;
      e.type === wt
        ? (o = e.children)
        : e.children &&
          e.children[t] &&
          ((o = e.children[t]), (o = r && o ? o(n) : o));
    }
    return (
      Array.isArray(o) &&
        ((o = It(o)),
        (o = o.length === 1 ? o[0] : o),
        (o = o.length === 0 ? void 0 : o)),
      o
    );
  };
function yl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
    n = {};
  return (
    e.$ ? (n = k(k({}, n), e.$attrs)) : (n = k(k({}, n), e.props)),
    Th(n)[t ? "onEvents" : "events"]
  );
}
function _h(e, t) {
  var n = (yr(e) ? e.props : e.$attrs) || {},
    r = n.style || {};
  if (typeof r == "string") r = Eh(r, t);
  else if (t && r) {
    var o = {};
    return (
      Object.keys(r).forEach(function (a) {
        return (o[ii(a)] = r[a]);
      }),
      o
    );
  }
  return r;
}
function Xc(e) {
  return (
    e &&
    (e.type === fd ||
      (e.type === wt && e.children.length === 0) ||
      (e.type === dd && e.children.trim() === ""))
  );
}
function Ln() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = [];
  return (
    e.forEach(function (n) {
      Array.isArray(n)
        ? t.push.apply(t, Re(n))
        : n.type === wt
        ? t.push.apply(t, Re(n.children))
        : t.push(n);
    }),
    t.filter(function (n) {
      return !Xc(n);
    })
  );
}
function Rn(e) {
  return (
    Array.isArray(e) && e.length === 1 && (e = e[0]),
    e && e.__v_isVNode && We(e.type) !== "symbol"
  );
}
function Zt(e, t) {
  var n =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : "default",
    r,
    o;
  return (r = t[n]) !== null && r !== void 0
    ? r
    : (o = e[n]) === null || o === void 0
    ? void 0
    : o.call(e);
}
var Mn = de({
    name: "ResizeObserver",
    props: { disabled: Boolean, onResize: Function },
    emits: ["resize"],
    setup: function (e, t) {
      var n = t.slots,
        r = lt({ width: 0, height: 0, offsetHeight: 0, offsetWidth: 0 }),
        o = null,
        a = null,
        i = function () {
          a && (a.disconnect(), (a = null));
        },
        l = function (s) {
          var d = e.onResize,
            f = s[0].target,
            v = f.getBoundingClientRect(),
            p = v.width,
            b = v.height,
            w = f.offsetWidth,
            C = f.offsetHeight,
            y = Math.floor(p),
            x = Math.floor(b);
          if (
            r.width !== y ||
            r.height !== x ||
            r.offsetWidth !== w ||
            r.offsetHeight !== C
          ) {
            var h = { width: y, height: x, offsetWidth: w, offsetHeight: C };
            k(r, h),
              d &&
                Promise.resolve().then(function () {
                  d(k(k({}, h), { offsetWidth: w, offsetHeight: C }), f);
                });
          }
        },
        c = Qt(),
        u = function () {
          var s = e.disabled;
          if (s) {
            i();
            return;
          }
          var d = lr(c),
            f = d !== o;
          f && (i(), (o = d)), !a && d && ((a = new zc(l)), a.observe(d));
        };
      return (
        Ue(function () {
          u();
        }),
        fn(function () {
          u();
        }),
        jn(function () {
          i();
        }),
        fe(
          function () {
            return e.disabled;
          },
          function () {
            u();
          },
          { flush: "post" }
        ),
        function () {
          var s;
          return (s = n.default) === null || s === void 0
            ? void 0
            : s.call(n)[0];
        }
      );
    }
  }),
  Zc = function (e) {
    return setTimeout(e, 16);
  },
  Qc = function (e) {
    return clearTimeout(e);
  };
typeof window < "u" &&
  "requestAnimationFrame" in window &&
  ((Zc = function (e) {
    return window.requestAnimationFrame(e);
  }),
  (Qc = function (e) {
    return window.cancelAnimationFrame(e);
  }));
var bl = 0,
  ui = new Map();
function Jc(e) {
  ui.delete(e);
}
function Be(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  bl += 1;
  var n = bl;
  function r(o) {
    if (o === 0) Jc(n), e();
    else {
      var a = Zc(function () {
        r(o - 1);
      });
      ui.set(n, a);
    }
  }
  return r(t), n;
}
Be.cancel = function (e) {
  var t = ui.get(e);
  return Jc(t), Qc(t);
};
function wl(e) {
  var t,
    n = function (o) {
      return function () {
        (t = null), e.apply(void 0, Re(o));
      };
    },
    r = function () {
      if (t == null) {
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
          a[i] = arguments[i];
        t = Be(n(a));
      }
    };
  return (
    (r.cancel = function () {
      return Be.cancel(t);
    }),
    r
  );
}
var ao = function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return t;
  },
  br = function (e) {
    var t = e;
    return (
      (t.install = function (n) {
        n.component(t.displayName || t.name, e);
      }),
      e
    );
  },
  es = !1;
try {
  (ko = Object.defineProperty({}, "passive", {
    get: function () {
      es = !0;
    }
  })),
    window.addEventListener("testPassive", null, ko),
    window.removeEventListener("testPassive", null, ko);
} catch {}
var ko,
  vt = es;
function Yt(e, t, n, r) {
  if (e && e.addEventListener) {
    var o = r;
    o === void 0 &&
      vt &&
      (t === "touchstart" || t === "touchmove" || t === "wheel") &&
      (o = { passive: !1 }),
      e.addEventListener(t, n, o);
  }
  return {
    remove: function () {
      e && e.removeEventListener && e.removeEventListener(t, n);
    }
  };
}
function Pr(e) {
  return e !== window
    ? e.getBoundingClientRect()
    : { top: 0, bottom: window.innerHeight };
}
function Cl(e, t, n) {
  if (n !== void 0 && t.top > e.top - n) return "".concat(n + t.top, "px");
}
function xl(e, t, n) {
  if (n !== void 0 && t.bottom < e.bottom + n) {
    var r = window.innerHeight - t.bottom;
    return "".concat(n + r, "px");
  }
}
var ts = [
    "resize",
    "scroll",
    "touchstart",
    "touchmove",
    "touchend",
    "pageshow",
    "load"
  ],
  rr = [];
function Sl(e, t) {
  if (e) {
    var n = rr.find(function (r) {
      return r.target === e;
    });
    n
      ? n.affixList.push(t)
      : ((n = { target: e, affixList: [t], eventHandlers: {} }),
        rr.push(n),
        ts.forEach(function (r) {
          n.eventHandlers[r] = Yt(e, r, function () {
            n.affixList.forEach(
              function (o) {
                var a = o.exposed.lazyUpdatePosition;
                a();
              },
              (r === "touchstart" || r === "touchmove") && vt
                ? { passive: !0 }
                : !1
            );
          });
        }));
  }
}
function Ol(e) {
  var t = rr.find(function (n) {
    var r = n.affixList.some(function (o) {
      return o === e;
    });
    return (
      r &&
        (n.affixList = n.affixList.filter(function (o) {
          return o !== e;
        })),
      r
    );
  });
  t &&
    t.affixList.length === 0 &&
    ((rr = rr.filter(function (n) {
      return n !== t;
    })),
    ts.forEach(function (n) {
      var r = t.eventHandlers[n];
      r && r.remove && r.remove();
    }));
}
var jh = {
    items_per_page: "/ page",
    jump_to: "Go to",
    jump_to_confirm: "confirm",
    page: "",
    prev_page: "Previous Page",
    next_page: "Next Page",
    prev_5: "Previous 5 Pages",
    next_5: "Next 5 Pages",
    prev_3: "Previous 3 Pages",
    next_3: "Next 3 Pages"
  },
  Fh = {
    locale: "en_US",
    today: "Today",
    now: "Now",
    backToToday: "Back to today",
    ok: "Ok",
    clear: "Clear",
    month: "Month",
    year: "Year",
    timeSelect: "select time",
    dateSelect: "select date",
    weekSelect: "Choose a week",
    monthSelect: "Choose a month",
    yearSelect: "Choose a year",
    decadeSelect: "Choose a decade",
    yearFormat: "YYYY",
    dateFormat: "M/D/YYYY",
    dayFormat: "D",
    dateTimeFormat: "M/D/YYYY HH:mm:ss",
    monthBeforeYear: !0,
    previousMonth: "Previous month (PageUp)",
    nextMonth: "Next month (PageDown)",
    previousYear: "Last year (Control + left)",
    nextYear: "Next year (Control + right)",
    previousDecade: "Last decade",
    nextDecade: "Next decade",
    previousCentury: "Last century",
    nextCentury: "Next century"
  },
  Dh = Fh,
  Kh = {
    placeholder: "Select time",
    rangePlaceholder: ["Start time", "End time"]
  },
  ns = Kh,
  Lh = {
    lang: k(
      {
        placeholder: "Select date",
        yearPlaceholder: "Select year",
        quarterPlaceholder: "Select quarter",
        monthPlaceholder: "Select month",
        weekPlaceholder: "Select week",
        rangePlaceholder: ["Start date", "End date"],
        rangeYearPlaceholder: ["Start year", "End year"],
        rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
        rangeMonthPlaceholder: ["Start month", "End month"],
        rangeWeekPlaceholder: ["Start week", "End week"]
      },
      Dh
    ),
    timePickerLocale: k({}, ns)
  },
  rs = Lh,
  Rh = rs,
  St = "${label} is not a valid ${type}",
  Bh = {
    locale: "en",
    Pagination: jh,
    DatePicker: rs,
    TimePicker: ns,
    Calendar: Rh,
    global: { placeholder: "Please select" },
    Table: {
      filterTitle: "Filter menu",
      filterConfirm: "OK",
      filterReset: "Reset",
      filterEmptyText: "No filters",
      filterCheckall: "Select all items",
      filterSearchPlaceholder: "Search in filters",
      emptyText: "No data",
      selectAll: "Select current page",
      selectInvert: "Invert current page",
      selectNone: "Clear all data",
      selectionAll: "Select all data",
      sortTitle: "Sort",
      expand: "Expand row",
      collapse: "Collapse row",
      triggerDesc: "Click to sort descending",
      triggerAsc: "Click to sort ascending",
      cancelSort: "Click to cancel sorting"
    },
    Modal: { okText: "OK", cancelText: "Cancel", justOkText: "OK" },
    Popconfirm: { okText: "OK", cancelText: "Cancel" },
    Transfer: {
      titles: ["", ""],
      searchPlaceholder: "Search here",
      itemUnit: "item",
      itemsUnit: "items",
      remove: "Remove",
      selectCurrent: "Select current page",
      removeCurrent: "Remove current page",
      selectAll: "Select all data",
      removeAll: "Remove all data",
      selectInvert: "Invert current page"
    },
    Upload: {
      uploading: "Uploading...",
      removeFile: "Remove file",
      uploadError: "Upload error",
      previewFile: "Preview file",
      downloadFile: "Download file"
    },
    Empty: { description: "No Data" },
    Icon: { icon: "icon" },
    Text: { edit: "Edit", copy: "Copy", copied: "Copied", expand: "Expand" },
    PageHeader: { back: "Back" },
    Form: {
      optional: "(optional)",
      defaultValidateMessages: {
        default: "Field validation error for ${label}",
        required: "Please enter ${label}",
        enum: "${label} must be one of [${enum}]",
        whitespace: "${label} cannot be a blank character",
        date: {
          format: "${label} date format is invalid",
          parse: "${label} cannot be converted to a date",
          invalid: "${label} is an invalid date"
        },
        types: {
          string: St,
          method: St,
          array: St,
          object: St,
          number: St,
          date: St,
          boolean: St,
          integer: St,
          float: St,
          regexp: St,
          email: St,
          url: St,
          hex: St
        },
        string: {
          len: "${label} must be ${len} characters",
          min: "${label} must be at least ${min} characters",
          max: "${label} must be up to ${max} characters",
          range: "${label} must be between ${min}-${max} characters"
        },
        number: {
          len: "${label} must be equal to ${len}",
          min: "${label} must be minimum ${min}",
          max: "${label} must be maximum ${max}",
          range: "${label} must be between ${min}-${max}"
        },
        array: {
          len: "Must be ${len} ${label}",
          min: "At least ${min} ${label}",
          max: "At most ${max} ${label}",
          range: "The amount of ${label} must be between ${min}-${max}"
        },
        pattern: { mismatch: "${label} does not match the pattern ${pattern}" }
      }
    },
    Image: { preview: "Preview" }
  },
  os = Bh,
  kl = os,
  as = de({
    name: "LocaleReceiver",
    props: {
      componentName: String,
      defaultLocale: { type: [Object, Function] },
      children: { type: Function }
    },
    setup: function (e, t) {
      var n = t.slots,
        r = Qe("localeData", {}),
        o = E(function () {
          var i = e.componentName,
            l = i === void 0 ? "global" : i,
            c = e.defaultLocale,
            u = c || kl[l || "global"],
            s = r.antLocale,
            d = l && s ? s[l] : {};
          return k(k({}, typeof u == "function" ? u() : u), d || {});
        }),
        a = E(function () {
          var i = r.antLocale,
            l = i && i.locale;
          return i && i.exist && !l ? kl.locale : l;
        });
      return function () {
        var i = e.children || n.default,
          l = r.antLocale;
        return i == null ? void 0 : i(o.value, a.value, l);
      };
    }
  }),
  is = function () {
    var e = Ct("empty", {}),
      t = e.getPrefixCls,
      n = t("empty-img-default");
    return m(
      "svg",
      { class: n, width: "184", height: "152", viewBox: "0 0 184 152" },
      [
        m("g", { fill: "none", "fill-rule": "evenodd" }, [
          m("g", { transform: "translate(24 31.67)" }, [
            m(
              "ellipse",
              {
                class: "".concat(n, "-ellipse"),
                cx: "67.797",
                cy: "106.89",
                rx: "67.797",
                ry: "12.668"
              },
              null
            ),
            m(
              "path",
              {
                class: "".concat(n, "-path-1"),
                d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
              },
              null
            ),
            m(
              "path",
              {
                class: "".concat(n, "-path-2"),
                d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
                transform: "translate(13.56)"
              },
              null
            ),
            m(
              "path",
              {
                class: "".concat(n, "-path-3"),
                d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
              },
              null
            ),
            m(
              "path",
              {
                class: "".concat(n, "-path-4"),
                d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
              },
              null
            )
          ]),
          m(
            "path",
            {
              class: "".concat(n, "-path-5"),
              d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
            },
            null
          ),
          m(
            "g",
            {
              class: "".concat(n, "-g"),
              transform: "translate(149.65 15.383)"
            },
            [
              m(
                "ellipse",
                { cx: "20.654", cy: "3.167", rx: "2.849", ry: "2.815" },
                null
              ),
              m(
                "path",
                { d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" },
                null
              )
            ]
          )
        ])
      ]
    );
  };
is.PRESENTED_IMAGE_DEFAULT = !0;
var Hh = is,
  ls = function () {
    var e = Ct("empty", {}),
      t = e.getPrefixCls,
      n = t("empty-img-simple");
    return m(
      "svg",
      { class: n, width: "64", height: "41", viewBox: "0 0 64 41" },
      [
        m(
          "g",
          { transform: "translate(0 1)", fill: "none", "fill-rule": "evenodd" },
          [
            m(
              "ellipse",
              {
                class: "".concat(n, "-ellipse"),
                fill: "#F5F5F5",
                cx: "32",
                cy: "33",
                rx: "32",
                ry: "7"
              },
              null
            ),
            m(
              "g",
              {
                class: "".concat(n, "-g"),
                "fill-rule": "nonzero",
                stroke: "#D9D9D9"
              },
              [
                m(
                  "path",
                  {
                    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
                  },
                  null
                ),
                m(
                  "path",
                  {
                    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
                    fill: "#FAFAFA",
                    class: "".concat(n, "-path")
                  },
                  null
                )
              ]
            )
          ]
        )
      ]
    );
  };
ls.PRESENTED_IMAGE_SIMPLE = !0;
var Vh = ls;
function Pl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function us(e, t, n) {
  return t && Pl(e.prototype, t), n && Pl(e, n), e;
}
function Br() {
  return (Br =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }).apply(this, arguments);
}
function cs(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
function ss(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) t.indexOf((n = a[r])) >= 0 || (o[n] = e[n]);
  return o;
}
function Tl(e) {
  return (
    ((t = e) != null && typeof t == "object" && Array.isArray(t) === !1) == 1 &&
    Object.prototype.toString.call(e) === "[object Object]"
  );
  var t;
}
var fs = Object.prototype,
  ds = fs.toString,
  $h = fs.hasOwnProperty,
  vs = /^\s*function (\w+)/;
function El(e) {
  var t,
    n = (t = e == null ? void 0 : e.type) !== null && t !== void 0 ? t : e;
  if (n) {
    var r = n.toString().match(vs);
    return r ? r[1] : "";
  }
  return "";
}
var cn = function (e) {
    var t, n;
    return (
      Tl(e) !== !1 &&
      typeof (t = e.constructor) == "function" &&
      Tl((n = t.prototype)) !== !1 &&
      n.hasOwnProperty("isPrototypeOf") !== !1
    );
  },
  zh = function (e) {
    return e;
  },
  pt = zh,
  ur = function (e, t) {
    return $h.call(e, t);
  },
  Wh =
    Number.isInteger ||
    function (e) {
      return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
    },
  In =
    Array.isArray ||
    function (e) {
      return ds.call(e) === "[object Array]";
    },
  _n = function (e) {
    return ds.call(e) === "[object Function]";
  },
  Yr = function (e) {
    return cn(e) && ur(e, "_vueTypes_name");
  },
  ps = function (e) {
    return (
      cn(e) &&
      (ur(e, "type") ||
        ["_vueTypes_name", "validator", "default", "required"].some(function (
          t
        ) {
          return ur(e, t);
        }))
    );
  };
function ci(e, t) {
  return Object.defineProperty(e.bind(t), "__original", { value: e });
}
function dn(e, t, n) {
  var r;
  n === void 0 && (n = !1);
  var o = !0,
    a = "";
  r = cn(e) ? e : { type: e };
  var i = Yr(r) ? r._vueTypes_name + " - " : "";
  if (ps(r) && r.type !== null) {
    if (r.type === void 0 || r.type === !0 || (!r.required && t === void 0))
      return o;
    In(r.type)
      ? ((o = r.type.some(function (d) {
          return dn(d, t, !0) === !0;
        })),
        (a = r.type
          .map(function (d) {
            return El(d);
          })
          .join(" or ")))
      : (o =
          (a = El(r)) === "Array"
            ? In(t)
            : a === "Object"
            ? cn(t)
            : a === "String" ||
              a === "Number" ||
              a === "Boolean" ||
              a === "Function"
            ? (function (d) {
                if (d == null) return "";
                var f = d.constructor.toString().match(vs);
                return f ? f[1] : "";
              })(t) === a
            : t instanceof r.type);
  }
  if (!o) {
    var l = i + 'value "' + t + '" should be of type "' + a + '"';
    return n === !1 ? (pt(l), !1) : l;
  }
  if (ur(r, "validator") && _n(r.validator)) {
    var c = pt,
      u = [];
    if (
      ((pt = function (d) {
        u.push(d);
      }),
      (o = r.validator(t)),
      (pt = c),
      !o)
    ) {
      var s =
        (u.length > 1 ? "* " : "") +
        u.join(`
* `);
      return (u.length = 0), n === !1 ? (pt(s), o) : s;
    }
  }
  return o;
}
function kt(e, t) {
  var n = Object.defineProperties(t, {
      _vueTypes_name: { value: e, writable: !0 },
      isRequired: {
        get: function () {
          return (this.required = !0), this;
        }
      },
      def: {
        value: function (o) {
          return o !== void 0 || this.default
            ? _n(o) || dn(this, o, !0) === !0
              ? ((this.default = In(o)
                  ? function () {
                      return [].concat(o);
                    }
                  : cn(o)
                  ? function () {
                      return Object.assign({}, o);
                    }
                  : o),
                this)
              : (pt(
                  this._vueTypes_name + ' - invalid default value: "' + o + '"'
                ),
                this)
            : this;
        }
      }
    }),
    r = n.validator;
  return _n(r) && (n.validator = ci(r, n)), n;
}
function Bt(e, t) {
  var n = kt(e, t);
  return Object.defineProperty(n, "validate", {
    value: function (r) {
      return (
        _n(this.validator) &&
          pt(
            this._vueTypes_name +
              ` - calling .validate() will overwrite the current custom validator function. Validator info:
` +
              JSON.stringify(this)
          ),
        (this.validator = ci(r, this)),
        this
      );
    }
  });
}
function Al(e, t, n) {
  var r,
    o,
    a =
      ((r = t),
      (o = {}),
      Object.getOwnPropertyNames(r).forEach(function (d) {
        o[d] = Object.getOwnPropertyDescriptor(r, d);
      }),
      Object.defineProperties({}, o));
  if (((a._vueTypes_name = e), !cn(n))) return a;
  var i,
    l,
    c = n.validator,
    u = ss(n, ["validator"]);
  if (_n(c)) {
    var s = a.validator;
    s && (s = (l = (i = s).__original) !== null && l !== void 0 ? l : i),
      (a.validator = ci(
        s
          ? function (d) {
              return s.call(this, d) && c.call(this, d);
            }
          : c,
        a
      ));
  }
  return Object.assign(a, u);
}
function io(e) {
  return e.replace(/^(?!\s*$)/gm, "  ");
}
var Uh = function () {
    return Bt("any", {});
  },
  Yh = function () {
    return Bt("function", { type: Function });
  },
  Gh = function () {
    return Bt("boolean", { type: Boolean });
  },
  qh = function () {
    return Bt("string", { type: String });
  },
  Xh = function () {
    return Bt("number", { type: Number });
  },
  Zh = function () {
    return Bt("array", { type: Array });
  },
  Qh = function () {
    return Bt("object", { type: Object });
  },
  Jh = function () {
    return kt("integer", {
      type: Number,
      validator: function (e) {
        return Wh(e);
      }
    });
  },
  em = function () {
    return kt("symbol", {
      validator: function (e) {
        return typeof e == "symbol";
      }
    });
  };
function tm(e, t) {
  if (
    (t === void 0 && (t = "custom validation failed"), typeof e != "function")
  )
    throw new TypeError(
      "[VueTypes error]: You must provide a function as argument"
    );
  return kt(e.name || "<<anonymous function>>", {
    validator: function (n) {
      var r = e(n);
      return r || pt(this._vueTypes_name + " - " + t), r;
    }
  });
}
function nm(e) {
  if (!In(e))
    throw new TypeError(
      "[VueTypes error]: You must provide an array as argument."
    );
  var t = 'oneOf - value should be one of "' + e.join('", "') + '".',
    n = e.reduce(function (r, o) {
      if (o != null) {
        var a = o.constructor;
        r.indexOf(a) === -1 && r.push(a);
      }
      return r;
    }, []);
  return kt("oneOf", {
    type: n.length > 0 ? n : void 0,
    validator: function (r) {
      var o = e.indexOf(r) !== -1;
      return o || pt(t), o;
    }
  });
}
function rm(e) {
  if (!In(e))
    throw new TypeError(
      "[VueTypes error]: You must provide an array as argument"
    );
  for (var t = !1, n = [], r = 0; r < e.length; r += 1) {
    var o = e[r];
    if (ps(o)) {
      if (Yr(o) && o._vueTypes_name === "oneOf") {
        n = n.concat(o.type);
        continue;
      }
      if ((_n(o.validator) && (t = !0), o.type !== !0 && o.type)) {
        n = n.concat(o.type);
        continue;
      }
    }
    n.push(o);
  }
  return (
    (n = n.filter(function (a, i) {
      return n.indexOf(a) === i;
    })),
    kt(
      "oneOfType",
      t
        ? {
            type: n,
            validator: function (a) {
              var i = [],
                l = e.some(function (c) {
                  var u = dn(
                    Yr(c) && c._vueTypes_name === "oneOf" ? c.type || null : c,
                    a,
                    !0
                  );
                  return typeof u == "string" && i.push(u), u === !0;
                });
              return (
                l ||
                  pt(
                    "oneOfType - provided value does not match any of the " +
                      i.length +
                      ` passed-in validators:
` +
                      io(
                        i.join(`
`)
                      )
                  ),
                l
              );
            }
          }
        : { type: n }
    )
  );
}
function om(e) {
  return kt("arrayOf", {
    type: Array,
    validator: function (t) {
      var n,
        r = t.every(function (o) {
          return (n = dn(e, o, !0)) === !0;
        });
      return (
        r ||
          pt(
            `arrayOf - value validation error:
` + io(n)
          ),
        r
      );
    }
  });
}
function am(e) {
  return kt("instanceOf", { type: e });
}
function im(e) {
  return kt("objectOf", {
    type: Object,
    validator: function (t) {
      var n,
        r = Object.keys(t).every(function (o) {
          return (n = dn(e, t[o], !0)) === !0;
        });
      return (
        r ||
          pt(
            `objectOf - value validation error:
` + io(n)
          ),
        r
      );
    }
  });
}
function lm(e) {
  var t = Object.keys(e),
    n = t.filter(function (o) {
      var a;
      return !!(!((a = e[o]) === null || a === void 0) && a.required);
    }),
    r = kt("shape", {
      type: Object,
      validator: function (o) {
        var a = this;
        if (!cn(o)) return !1;
        var i = Object.keys(o);
        if (
          n.length > 0 &&
          n.some(function (c) {
            return i.indexOf(c) === -1;
          })
        ) {
          var l = n.filter(function (c) {
            return i.indexOf(c) === -1;
          });
          return (
            pt(
              l.length === 1
                ? 'shape - required property "' + l[0] + '" is not defined.'
                : 'shape - required properties "' +
                    l.join('", "') +
                    '" are not defined.'
            ),
            !1
          );
        }
        return i.every(function (c) {
          if (t.indexOf(c) === -1)
            return (
              a._vueTypes_isLoose === !0 ||
              (pt(
                'shape - shape definition does not include a "' +
                  c +
                  '" property. Allowed keys: "' +
                  t.join('", "') +
                  '".'
              ),
              !1)
            );
          var u = dn(e[c], o[c], !0);
          return (
            typeof u == "string" &&
              pt(
                'shape - "' +
                  c +
                  `" property validation error:
 ` +
                  io(u)
              ),
            u === !0
          );
        });
      }
    });
  return (
    Object.defineProperty(r, "_vueTypes_isLoose", { writable: !0, value: !1 }),
    Object.defineProperty(r, "loose", {
      get: function () {
        return (this._vueTypes_isLoose = !0), this;
      }
    }),
    r
  );
}
var Dt = (function () {
  function e() {}
  return (
    (e.extend = function (t) {
      var n = this;
      if (In(t))
        return (
          t.forEach(function (d) {
            return n.extend(d);
          }),
          this
        );
      var r = t.name,
        o = t.validate,
        a = o !== void 0 && o,
        i = t.getter,
        l = i !== void 0 && i,
        c = ss(t, ["name", "validate", "getter"]);
      if (ur(this, r))
        throw new TypeError(
          '[VueTypes error]: Type "' + r + '" already defined'
        );
      var u,
        s = c.type;
      return Yr(s)
        ? (delete c.type,
          Object.defineProperty(
            this,
            r,
            l
              ? {
                  get: function () {
                    return Al(r, s, c);
                  }
                }
              : {
                  value: function () {
                    var d,
                      f = Al(r, s, c);
                    return (
                      f.validator &&
                        (f.validator = (d = f.validator).bind.apply(
                          d,
                          [f].concat([].slice.call(arguments))
                        )),
                      f
                    );
                  }
                }
          ))
        : ((u = l
            ? {
                get: function () {
                  var d = Object.assign({}, c);
                  return a ? Bt(r, d) : kt(r, d);
                },
                enumerable: !0
              }
            : {
                value: function () {
                  var d,
                    f,
                    v = Object.assign({}, c);
                  return (
                    (d = a ? Bt(r, v) : kt(r, v)),
                    v.validator &&
                      (d.validator = (f = v.validator).bind.apply(
                        f,
                        [d].concat([].slice.call(arguments))
                      )),
                    d
                  );
                },
                enumerable: !0
              }),
          Object.defineProperty(this, r, u));
    }),
    us(e, null, [
      {
        key: "any",
        get: function () {
          return Uh();
        }
      },
      {
        key: "func",
        get: function () {
          return Yh().def(this.defaults.func);
        }
      },
      {
        key: "bool",
        get: function () {
          return Gh().def(this.defaults.bool);
        }
      },
      {
        key: "string",
        get: function () {
          return qh().def(this.defaults.string);
        }
      },
      {
        key: "number",
        get: function () {
          return Xh().def(this.defaults.number);
        }
      },
      {
        key: "array",
        get: function () {
          return Zh().def(this.defaults.array);
        }
      },
      {
        key: "object",
        get: function () {
          return Qh().def(this.defaults.object);
        }
      },
      {
        key: "integer",
        get: function () {
          return Jh().def(this.defaults.integer);
        }
      },
      {
        key: "symbol",
        get: function () {
          return em();
        }
      }
    ]),
    e
  );
})();
function hs(e) {
  var t;
  return (
    e === void 0 &&
      (e = {
        func: function () {},
        bool: !0,
        string: "",
        number: 0,
        array: function () {
          return [];
        },
        object: function () {
          return {};
        },
        integer: 0
      }),
    ((t = (function (n) {
      function r() {
        return n.apply(this, arguments) || this;
      }
      return (
        cs(r, n),
        us(r, null, [
          {
            key: "sensibleDefaults",
            get: function () {
              return Br({}, this.defaults);
            },
            set: function (o) {
              this.defaults = o !== !1 ? Br({}, o !== !0 ? o : e) : {};
            }
          }
        ]),
        r
      );
    })(Dt)).defaults = Br({}, e)),
    t
  );
}
(Dt.defaults = {}),
  (Dt.custom = tm),
  (Dt.oneOf = nm),
  (Dt.instanceOf = am),
  (Dt.oneOfType = rm),
  (Dt.arrayOf = om),
  (Dt.objectOf = im),
  (Dt.shape = lm),
  (Dt.utils = {
    validate: function (e, t) {
      return dn(t, e, !0) === !0;
    },
    toType: function (e, t, n) {
      return n === void 0 && (n = !1), n ? Bt(e, t) : kt(e, t);
    }
  });
(function (e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  return cs(t, e), t;
})(hs());
var ms = hs({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0
});
ms.extend([
  { name: "looseBool", getter: !0, type: Boolean, default: void 0 },
  { name: "style", getter: !0, type: [String, Object], default: void 0 },
  { name: "VueNode", getter: !0, type: null }
]);
var K = ms,
  um = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  },
  gs = m(Hh, null, null),
  ys = m(Vh, null, null),
  Bn = function (e, t) {
    var n = t.slots,
      r = n === void 0 ? {} : n,
      o = t.attrs,
      a,
      i = Ct("empty", e),
      l = i.direction,
      c = i.prefixCls,
      u = c.value,
      s = k(k({}, e), o),
      d = s.image,
      f = d === void 0 ? gs : d,
      v = s.description,
      p =
        v === void 0
          ? ((a = r.description) === null || a === void 0
              ? void 0
              : a.call(r)) || void 0
          : v,
      b = s.imageStyle,
      w = s.class,
      C = w === void 0 ? "" : w,
      y = um(s, ["image", "description", "imageStyle", "class"]);
    return m(
      as,
      {
        componentName: "Empty",
        children: function (x) {
          var h,
            g = typeof p < "u" ? p : x.description,
            S = typeof g == "string" ? g : "empty",
            P = null;
          return (
            typeof f == "string"
              ? (P = m("img", { alt: S, src: f }, null))
              : (P = f),
            m(
              "div",
              X(
                {
                  class: we(
                    u,
                    C,
                    ((h = {}),
                    U(h, "".concat(u, "-normal"), f === ys),
                    U(h, "".concat(u, "-rtl"), l.value === "rtl"),
                    h)
                  )
                },
                y
              ),
              [
                m("div", { class: "".concat(u, "-image"), style: b }, [P]),
                g && m("p", { class: "".concat(u, "-description") }, [g]),
                r.default &&
                  m("div", { class: "".concat(u, "-footer") }, [
                    Ln(r.default())
                  ])
              ]
            )
          );
        }
      },
      null
    );
  };
Bn.displayName = "AEmpty";
Bn.PRESENTED_IMAGE_DEFAULT = gs;
Bn.PRESENTED_IMAGE_SIMPLE = ys;
Bn.inheritAttrs = !1;
Bn.props = {
  prefixCls: String,
  image: K.any,
  description: K.any,
  imageStyle: { type: Object, default: void 0 }
};
var Xn = br(Bn),
  cm = function (e) {
    var t = Ct("empty", e),
      n = t.prefixCls,
      r = function (o) {
        switch (o) {
          case "Table":
          case "List":
            return m(Xn, { image: Xn.PRESENTED_IMAGE_SIMPLE }, null);
          case "Select":
          case "TreeSelect":
          case "Cascader":
          case "Transfer":
          case "Mentions":
            return m(
              Xn,
              {
                image: Xn.PRESENTED_IMAGE_SIMPLE,
                class: "".concat(n.value, "-small")
              },
              null
            );
          default:
            return m(Xn, null, null);
        }
      };
    return r(e.componentName);
  };
function sm(e) {
  return m(cm, { componentName: e }, null);
}
var bs = sm,
  Nl = {};
function fm(e, t) {}
function dm(e, t, n) {
  !t && !Nl[n] && (e(!1, n), (Nl[n] = !0));
}
function vm(e, t) {
  dm(fm, e, t);
}
var ws = vm,
  cr = function (e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
    ws(e, "[antdv: ".concat(t, "] ").concat(n));
  },
  na = "internalMark",
  Hr = de({
    name: "ALocaleProvider",
    props: { locale: { type: Object }, ANT_MARK__: String },
    setup: function (e, t) {
      var n = t.slots;
      cr(
        e.ANT_MARK__ === na,
        "LocaleProvider",
        "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead"
      );
      var r = lt({
        antLocale: k(k({}, e.locale), { exist: !0 }),
        ANT_MARK__: na
      });
      return (
        Ze("localeData", r),
        fe(
          function () {
            return e.locale;
          },
          function () {
            r.antLocale = k(k({}, e.locale), { exist: !0 });
          },
          { immediate: !0 }
        ),
        function () {
          var o;
          return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
        }
      );
    }
  });
Hr.install = function (e) {
  return e.component(Hr.name, Hr), e;
};
var pm = br(Hr);
ao("bottomLeft", "bottomRight", "topLeft", "topRight");
var Cs = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = k(
        e
          ? {
              name: e,
              appear: !0,
              enterFromClass: ""
                .concat(e, "-enter ")
                .concat(e, "-enter-prepare"),
              enterActiveClass: ""
                .concat(e, "-enter ")
                .concat(e, "-enter-prepare"),
              enterToClass: "".concat(e, "-enter ").concat(e, "-enter-active"),
              leaveFromClass: " ".concat(e, "-leave"),
              leaveActiveClass: "".concat(e, "-leave"),
              leaveToClass: "".concat(e, "-leave ").concat(e, "-leave-active")
            }
          : { css: !1 },
        t
      );
    return n;
  },
  hm = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = k(
        e
          ? {
              name: e,
              appear: !0,
              appearActiveClass: "".concat(e),
              appearToClass: ""
                .concat(e, "-appear ")
                .concat(e, "-appear-active"),
              enterFromClass: ""
                .concat(e, "-appear ")
                .concat(e, "-enter ")
                .concat(e, "-appear-prepare ")
                .concat(e, "-enter-prepare"),
              enterActiveClass: "".concat(e),
              enterToClass: ""
                .concat(e, "-enter ")
                .concat(e, "-appear ")
                .concat(e, "-appear-active ")
                .concat(e, "-enter-active"),
              leaveActiveClass: "".concat(e, " ").concat(e, "-leave"),
              leaveToClass: "".concat(e, "-leave-active")
            }
          : { css: !1 },
        t
      );
    return n;
  },
  mm = mr,
  gm = mm,
  ym = de({
    name: "Notice",
    inheritAttrs: !1,
    props: [
      "prefixCls",
      "duration",
      "updateMark",
      "noticeKey",
      "closeIcon",
      "closable",
      "props",
      "onClick",
      "onClose",
      "holder",
      "visible"
    ],
    setup: function (e, t) {
      var n = t.attrs,
        r = t.slots,
        o,
        a = E(function () {
          return e.duration === void 0 ? 1.5 : e.duration;
        }),
        i = function () {
          a.value &&
            (o = setTimeout(function () {
              c();
            }, a.value * 1e3));
        },
        l = function () {
          o && (clearTimeout(o), (o = null));
        },
        c = function (s) {
          s && s.stopPropagation(), l();
          var d = e.onClose,
            f = e.noticeKey;
          d && d(f);
        },
        u = function () {
          l(), i();
        };
      return (
        Ue(function () {
          i();
        }),
        jn(function () {
          l();
        }),
        fe(
          [
            a,
            function () {
              return e.updateMark;
            },
            function () {
              return e.visible;
            }
          ],
          function (s, d) {
            var f = Se(s, 3),
              v = f[0],
              p = f[1],
              b = f[2],
              w = Se(d, 3),
              C = w[0],
              y = w[1],
              x = w[2];
            (v !== C || p !== y || (b !== x && x)) && u();
          },
          { flush: "post" }
        ),
        function () {
          var s,
            d,
            f = e.prefixCls,
            v = e.closable,
            p = e.closeIcon,
            b =
              p === void 0
                ? (s = r.closeIcon) === null || s === void 0
                  ? void 0
                  : s.call(r)
                : p,
            w = e.onClick,
            C = e.holder,
            y = n.class,
            x = n.style,
            h = "".concat(f, "-notice"),
            g = Object.keys(n).reduce(function (P, A) {
              return (
                (A.substr(0, 5) === "data-" ||
                  A.substr(0, 5) === "aria-" ||
                  A === "role") &&
                  (P[A] = n[A]),
                P
              );
            }, {}),
            S = m(
              "div",
              X(
                {
                  class: we(h, y, U({}, "".concat(h, "-closable"), v)),
                  style: x,
                  onMouseenter: l,
                  onMouseleave: i,
                  onClick: w
                },
                g
              ),
              [
                m("div", { class: "".concat(h, "-content") }, [
                  (d = r.default) === null || d === void 0 ? void 0 : d.call(r)
                ]),
                v
                  ? m(
                      "a",
                      {
                        tabindex: 0,
                        onClick: c,
                        class: "".concat(h, "-close")
                      },
                      [
                        b ||
                          m("span", { class: "".concat(h, "-close-x") }, null)
                      ]
                    )
                  : null
              ]
            );
          return C
            ? m(
                ja,
                { to: C },
                {
                  default: function () {
                    return S;
                  }
                }
              )
            : S;
        }
      );
    }
  }),
  bm = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  },
  Ml = 0,
  wm = Date.now();
function Il() {
  var e = Ml;
  return (Ml += 1), "rcNotification_".concat(wm, "_").concat(e);
}
var ra = de({
  name: "Notification",
  inheritAttrs: !1,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon"],
  setup: function (e, t) {
    var n = t.attrs,
      r = t.expose,
      o = t.slots,
      a = new Map(),
      i = L([]),
      l = E(function () {
        var s = e.prefixCls,
          d = e.animation,
          f = d === void 0 ? "fade" : d,
          v = e.transitionName;
        return !v && f && (v = "".concat(s, "-").concat(f)), hm(v);
      }),
      c = function (s, d) {
        var f = s.key || Il(),
          v = k(k({}, s), { key: f }),
          p = e.maxCount,
          b = i.value
            .map(function (C) {
              return C.notice.key;
            })
            .indexOf(f),
          w = i.value.concat();
        b !== -1
          ? w.splice(b, 1, { notice: v, holderCallback: d })
          : (p &&
              i.value.length >= p &&
              ((v.key = w[0].notice.key),
              (v.updateMark = Il()),
              (v.userPassKey = f),
              w.shift()),
            w.push({ notice: v, holderCallback: d })),
          (i.value = w);
      },
      u = function (s) {
        i.value = i.value.filter(function (d) {
          var f = d.notice,
            v = f.key,
            p = f.userPassKey,
            b = p || v;
          return b !== s;
        });
      };
    return (
      r({ add: c, remove: u, notices: i }),
      function () {
        var s,
          d,
          f = e.prefixCls,
          v = e.closeIcon,
          p =
            v === void 0
              ? (d = o.closeIcon) === null || d === void 0
                ? void 0
                : d.call(o, { prefixCls: f })
              : v,
          b = i.value.map(function (C, y) {
            var x = C.notice,
              h = C.holderCallback,
              g = y === i.value.length - 1 ? x.updateMark : void 0,
              S = x.key,
              P = x.userPassKey,
              A = x.content,
              R = k(
                k(
                  k(
                    {
                      prefixCls: f,
                      closeIcon:
                        typeof p == "function" ? p({ prefixCls: f }) : p
                    },
                    x
                  ),
                  x.props
                ),
                {
                  key: S,
                  noticeKey: P || S,
                  updateMark: g,
                  onClose: function (M) {
                    var q;
                    u(M), (q = x.onClose) === null || q === void 0 || q.call(x);
                  },
                  onClick: x.onClick
                }
              );
            return h
              ? m(
                  "div",
                  {
                    key: S,
                    class: "".concat(f, "-hook-holder"),
                    ref: function (M) {
                      typeof S > "u" ||
                        (M ? (a.set(S, M), h(M, R)) : a.delete(S));
                    }
                  },
                  null
                )
              : m(ym, R, {
                  default: function () {
                    return [typeof A == "function" ? A({ prefixCls: f }) : A];
                  }
                });
          }),
          w = ((s = {}), U(s, f, 1), U(s, n.class, !!n.class), s);
        return m(
          "div",
          { class: w, style: n.style || { top: "65px", left: "50%" } },
          [
            m(sd, X({ tag: "div" }, l.value), {
              default: function () {
                return [b];
              }
            })
          ]
        );
      }
    );
  }
});
ra.newInstance = function (e, t) {
  var n = e || {},
    r = n.name,
    o = r === void 0 ? "notification" : r,
    a = n.getContainer,
    i = n.appContext,
    l = n.prefixCls,
    c = n.rootPrefixCls,
    u = n.transitionName,
    s = n.hasTransitionName,
    d = bm(n, [
      "name",
      "getContainer",
      "appContext",
      "prefixCls",
      "rootPrefixCls",
      "transitionName",
      "hasTransitionName"
    ]),
    f = document.createElement("div");
  if (a) {
    var v = a();
    v.appendChild(f);
  } else document.body.appendChild(f);
  var p = de({
      name: "NotificationWrapper",
      setup: function (w, C) {
        var y = C.attrs,
          x = L();
        return (
          Ue(function () {
            t({
              notice: function (h) {
                var g;
                (g = x.value) === null || g === void 0 || g.add(h);
              },
              removeNotice: function (h) {
                var g;
                (g = x.value) === null || g === void 0 || g.remove(h);
              },
              destroy: function () {
                Fi(null, f), f.parentNode && f.parentNode.removeChild(f);
              },
              component: x
            });
          }),
          function () {
            var h = Et,
              g = h.getPrefixCls(o, l),
              S = h.getRootPrefixCls(c, g),
              P = s ? u : "".concat(S, "-").concat(u);
            return m(
              vg,
              X(X({}, h), {}, { notUpdateGlobalConfig: !0, prefixCls: S }),
              {
                default: function () {
                  return [
                    m(
                      ra,
                      X(
                        X({ ref: x }, y),
                        {},
                        { prefixCls: g, transitionName: P }
                      ),
                      null
                    )
                  ];
                }
              }
            );
          }
        );
      }
    }),
    b = m(p, d);
  (b.appContext = i || b.appContext), Fi(b, f);
};
var Cm = ra,
  xs = Cm,
  Ss = 3,
  Os,
  ht,
  xm = 1,
  ks = "",
  Ps = "move-up",
  Ts = !1,
  Es = function () {
    return document.body;
  },
  As,
  Ns = !1;
function Sm() {
  return xm++;
}
function Om(e) {
  e.top !== void 0 && ((Os = e.top), (ht = null)),
    e.duration !== void 0 && (Ss = e.duration),
    e.prefixCls !== void 0 && (ks = e.prefixCls),
    e.getContainer !== void 0 && ((Es = e.getContainer), (ht = null)),
    e.transitionName !== void 0 &&
      ((Ps = e.transitionName), (ht = null), (Ts = !0)),
    e.maxCount !== void 0 && ((As = e.maxCount), (ht = null)),
    e.rtl !== void 0 && (Ns = e.rtl);
}
function km(e, t) {
  if (ht) {
    t(ht);
    return;
  }
  xs.newInstance(
    {
      appContext: e.appContext,
      prefixCls: e.prefixCls || ks,
      rootPrefixCls: e.rootPrefixCls,
      transitionName: Ps,
      hasTransitionName: Ts,
      style: { top: Os },
      getContainer: Es || e.getPopupContainer,
      maxCount: As,
      name: "message"
    },
    function (n) {
      if (ht) {
        t(ht);
        return;
      }
      (ht = n), t(n);
    }
  );
}
var Pm = { info: sv, success: iv, error: Mc, warning: Jd, loading: ro };
function Tm(e) {
  var t = e.duration !== void 0 ? e.duration : Ss,
    n = e.key || Sm(),
    r = new Promise(function (a) {
      var i = function () {
        return typeof e.onClose == "function" && e.onClose(), a(!0);
      };
      km(e, function (l) {
        l.notice({
          key: n,
          duration: t,
          style: e.style || {},
          class: e.class,
          content: function (c) {
            var u,
              s = c.prefixCls,
              d = Pm[e.type],
              f = d ? m(d, null, null) : "",
              v = we(
                "".concat(s, "-custom-content"),
                ((u = {}),
                U(u, "".concat(s, "-").concat(e.type), e.type),
                U(u, "".concat(s, "-rtl"), Ns === !0),
                u)
              );
            return m("div", { class: v }, [
              typeof e.icon == "function" ? e.icon() : e.icon || f,
              m("span", null, [
                typeof e.content == "function" ? e.content() : e.content
              ])
            ]);
          },
          onClose: i,
          onClick: e.onClick
        });
      });
    }),
    o = function () {
      ht && ht.removeNotice(n);
    };
  return (
    (o.then = function (a, i) {
      return r.then(a, i);
    }),
    (o.promise = r),
    o
  );
}
function Em(e) {
  return Object.prototype.toString.call(e) === "[object Object]" && !!e.content;
}
var Gr = {
  open: Tm,
  config: Om,
  destroy: function (e) {
    if (ht)
      if (e) {
        var t = ht,
          n = t.removeNotice;
        n(e);
      } else {
        var r = ht,
          o = r.destroy;
        o(), (ht = null);
      }
  }
};
function Am(e, t) {
  e[t] = function (n, r, o) {
    return Em(n)
      ? e.open(k(k({}, n), { type: t }))
      : (typeof r == "function" && ((o = r), (r = void 0)),
        e.open({ content: n, duration: r, type: t, onClose: o }));
  };
}
["success", "info", "warning", "error", "loading"].forEach(function (e) {
  return Am(Gr, e);
});
Gr.warn = Gr.warning;
var Nm = Gr;
jc(Fc());
var an = {},
  Ms = 4.5,
  Is = "24px",
  _s = "24px",
  oa = "",
  js = "topRight",
  Fs = function () {
    return document.body;
  },
  Ds = null,
  aa = !1,
  Ks;
function Mm(e) {
  var t = e.duration,
    n = e.placement,
    r = e.bottom,
    o = e.top,
    a = e.getContainer,
    i = e.closeIcon,
    l = e.prefixCls;
  l !== void 0 && (oa = l),
    t !== void 0 && (Ms = t),
    n !== void 0 && (js = n),
    r !== void 0 && (_s = typeof r == "number" ? "".concat(r, "px") : r),
    o !== void 0 && (Is = typeof o == "number" ? "".concat(o, "px") : o),
    a !== void 0 && (Fs = a),
    i !== void 0 && (Ds = i),
    e.rtl !== void 0 && (aa = e.rtl),
    e.maxCount !== void 0 && (Ks = e.maxCount);
}
function Im(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Is,
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _s,
    r;
  switch (e) {
    case "topLeft":
      r = { left: "0px", top: t, bottom: "auto" };
      break;
    case "topRight":
      r = { right: "0px", top: t, bottom: "auto" };
      break;
    case "bottomLeft":
      r = { left: "0px", top: "auto", bottom: n };
      break;
    default:
      r = { right: "0px", top: "auto", bottom: n };
      break;
  }
  return r;
}
function _m(e, t) {
  var n = e.prefixCls,
    r = e.placement,
    o = r === void 0 ? js : r,
    a = e.getContainer,
    i = a === void 0 ? Fs : a,
    l = e.top,
    c = e.bottom,
    u = e.closeIcon,
    s = u === void 0 ? Ds : u,
    d = e.appContext,
    f = fg(),
    v = f.getPrefixCls,
    p = v("notification", n || oa),
    b = "".concat(p, "-").concat(o, "-").concat(aa),
    w = an[b];
  if (w) {
    Promise.resolve(w).then(function (y) {
      t(y);
    });
    return;
  }
  var C = we(
    "".concat(p, "-").concat(o),
    U({}, "".concat(p, "-rtl"), aa === !0)
  );
  xs.newInstance(
    {
      name: "notification",
      prefixCls: n || oa,
      class: C,
      style: Im(o, l, c),
      appContext: d,
      getContainer: i,
      closeIcon: function (y) {
        var x = y.prefixCls,
          h = m("span", { class: "".concat(x, "-close-x") }, [
            er(s, {}, m(Xa, { class: "".concat(x, "-close-icon") }, null))
          ]);
        return h;
      },
      maxCount: Ks,
      hasTransitionName: !0
    },
    function (y) {
      (an[b] = y), t(y);
    }
  );
}
var jm = { success: pv, info: yv, error: xv, warning: Pv };
function Fm(e) {
  var t = e.icon,
    n = e.type,
    r = e.description,
    o = e.message,
    a = e.btn,
    i = e.duration === void 0 ? Ms : e.duration;
  _m(e, function (l) {
    l.notice({
      content: function (c) {
        var u = c.prefixCls,
          s = "".concat(u, "-notice"),
          d = null;
        if (t)
          d = function () {
            return m("span", { class: "".concat(s, "-icon") }, [er(t)]);
          };
        else if (n) {
          var f = jm[n];
          d = function () {
            return m(
              f,
              { class: "".concat(s, "-icon ").concat(s, "-icon-").concat(n) },
              null
            );
          };
        }
        return m("div", { class: d ? "".concat(s, "-with-icon") : "" }, [
          d && d(),
          m("div", { class: "".concat(s, "-message") }, [
            !r && d
              ? m(
                  "span",
                  { class: "".concat(s, "-message-single-line-auto-margin") },
                  null
                )
              : null,
            er(o)
          ]),
          m("div", { class: "".concat(s, "-description") }, [er(r)]),
          a ? m("span", { class: "".concat(s, "-btn") }, [er(a)]) : null
        ]);
      },
      duration: i,
      closable: !0,
      onClose: e.onClose,
      onClick: e.onClick,
      key: e.key,
      style: e.style || {},
      class: e.class
    });
  });
}
var sr = {
    open: Fm,
    close: function (e) {
      Object.keys(an).forEach(function (t) {
        return Promise.resolve(an[t]).then(function (n) {
          n.removeNotice(e);
        });
      });
    },
    config: Mm,
    destroy: function () {
      Object.keys(an).forEach(function (e) {
        Promise.resolve(an[e]).then(function (t) {
          t.destroy();
        }),
          delete an[e];
      });
    }
  },
  Dm = ["success", "info", "warning", "error"];
Dm.forEach(function (e) {
  sr[e] = function (t) {
    return sr.open(k(k({}, t), { type: e }));
  };
});
sr.warn = sr.warning;
var Km = sr;
function it(e, t) {
  Lm(e) && (e = "100%");
  var n = Rm(e);
  return (
    (e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
    n && (e = parseInt(String(e * t), 10) / 100),
    Math.abs(e - t) < 1e-6
      ? 1
      : (t === 360
          ? (e = (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)))
          : (e = (e % t) / parseFloat(String(t))),
        e)
  );
}
function Tr(e) {
  return Math.min(1, Math.max(0, e));
}
function Lm(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Rm(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Ls(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Er(e) {
  return e <= 1 ? Number(e) * 100 + "%" : e;
}
function un(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Bm(e, t, n) {
  return { r: it(e, 255) * 255, g: it(t, 255) * 255, b: it(n, 255) * 255 };
}
function _l(e, t, n) {
  (e = it(e, 255)), (t = it(t, 255)), (n = it(n, 255));
  var r = Math.max(e, t, n),
    o = Math.min(e, t, n),
    a = 0,
    i = 0,
    l = (r + o) / 2;
  if (r === o) (i = 0), (a = 0);
  else {
    var c = r - o;
    switch (((i = l > 0.5 ? c / (2 - r - o) : c / (r + o)), r)) {
      case e:
        a = (t - n) / c + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / c + 2;
        break;
      case n:
        a = (e - t) / c + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: i, l };
}
function Po(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * (6 * n)
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function Hm(e, t, n) {
  var r, o, a;
  if (((e = it(e, 360)), (t = it(t, 100)), (n = it(n, 100)), t === 0))
    (o = n), (a = n), (r = n);
  else {
    var i = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - i;
    (r = Po(l, i, e + 1 / 3)), (o = Po(l, i, e)), (a = Po(l, i, e - 1 / 3));
  }
  return { r: r * 255, g: o * 255, b: a * 255 };
}
function ia(e, t, n) {
  (e = it(e, 255)), (t = it(t, 255)), (n = it(n, 255));
  var r = Math.max(e, t, n),
    o = Math.min(e, t, n),
    a = 0,
    i = r,
    l = r - o,
    c = r === 0 ? 0 : l / r;
  if (r === o) a = 0;
  else {
    switch (r) {
      case e:
        a = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / l + 2;
        break;
      case n:
        a = (e - t) / l + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: c, v: i };
}
function Vm(e, t, n) {
  (e = it(e, 360) * 6), (t = it(t, 100)), (n = it(n, 100));
  var r = Math.floor(e),
    o = e - r,
    a = n * (1 - t),
    i = n * (1 - o * t),
    l = n * (1 - (1 - o) * t),
    c = r % 6,
    u = [n, i, a, a, l, n][c],
    s = [l, n, n, i, a, a][c],
    d = [a, a, l, n, n, i][c];
  return { r: u * 255, g: s * 255, b: d * 255 };
}
function la(e, t, n, r) {
  var o = [
    un(Math.round(e).toString(16)),
    un(Math.round(t).toString(16)),
    un(Math.round(n).toString(16))
  ];
  return r &&
    o[0].startsWith(o[0].charAt(1)) &&
    o[1].startsWith(o[1].charAt(1)) &&
    o[2].startsWith(o[2].charAt(1))
    ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
    : o.join("");
}
function $m(e, t, n, r, o) {
  var a = [
    un(Math.round(e).toString(16)),
    un(Math.round(t).toString(16)),
    un(Math.round(n).toString(16)),
    un(zm(r))
  ];
  return o &&
    a[0].startsWith(a[0].charAt(1)) &&
    a[1].startsWith(a[1].charAt(1)) &&
    a[2].startsWith(a[2].charAt(1)) &&
    a[3].startsWith(a[3].charAt(1))
    ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0)
    : a.join("");
}
function zm(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function jl(e) {
  return Ot(e) / 255;
}
function Ot(e) {
  return parseInt(e, 16);
}
function Wm(e) {
  return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 };
}
var ua = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function bn(e) {
  var t = { r: 0, g: 0, b: 0 },
    n = 1,
    r = null,
    o = null,
    a = null,
    i = !1,
    l = !1;
  return (
    typeof e == "string" && (e = Gm(e)),
    typeof e == "object" &&
      (Ht(e.r) && Ht(e.g) && Ht(e.b)
        ? ((t = Bm(e.r, e.g, e.b)),
          (i = !0),
          (l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb"))
        : Ht(e.h) && Ht(e.s) && Ht(e.v)
        ? ((r = Er(e.s)),
          (o = Er(e.v)),
          (t = Vm(e.h, r, o)),
          (i = !0),
          (l = "hsv"))
        : Ht(e.h) &&
          Ht(e.s) &&
          Ht(e.l) &&
          ((r = Er(e.s)),
          (a = Er(e.l)),
          (t = Hm(e.h, r, a)),
          (i = !0),
          (l = "hsl")),
      Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)),
    (n = Ls(n)),
    {
      ok: i,
      format: e.format || l,
      r: Math.min(255, Math.max(t.r, 0)),
      g: Math.min(255, Math.max(t.g, 0)),
      b: Math.min(255, Math.max(t.b, 0)),
      a: n
    }
  );
}
var Um = "[-\\+]?\\d+%?",
  Ym = "[-\\+]?\\d*\\.\\d+%?",
  Gt = "(?:" + Ym + ")|(?:" + Um + ")",
  To = "[\\s|\\(]+(" + Gt + ")[,|\\s]+(" + Gt + ")[,|\\s]+(" + Gt + ")\\s*\\)?",
  Eo =
    "[\\s|\\(]+(" +
    Gt +
    ")[,|\\s]+(" +
    Gt +
    ")[,|\\s]+(" +
    Gt +
    ")[,|\\s]+(" +
    Gt +
    ")\\s*\\)?",
  Nt = {
    CSS_UNIT: new RegExp(Gt),
    rgb: new RegExp("rgb" + To),
    rgba: new RegExp("rgba" + Eo),
    hsl: new RegExp("hsl" + To),
    hsla: new RegExp("hsla" + Eo),
    hsv: new RegExp("hsv" + To),
    hsva: new RegExp("hsva" + Eo),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
function Gm(e) {
  if (((e = e.trim().toLowerCase()), e.length === 0)) return !1;
  var t = !1;
  if (ua[e]) (e = ua[e]), (t = !0);
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = Nt.rgb.exec(e);
  return n
    ? { r: n[1], g: n[2], b: n[3] }
    : ((n = Nt.rgba.exec(e)),
      n
        ? { r: n[1], g: n[2], b: n[3], a: n[4] }
        : ((n = Nt.hsl.exec(e)),
          n
            ? { h: n[1], s: n[2], l: n[3] }
            : ((n = Nt.hsla.exec(e)),
              n
                ? { h: n[1], s: n[2], l: n[3], a: n[4] }
                : ((n = Nt.hsv.exec(e)),
                  n
                    ? { h: n[1], s: n[2], v: n[3] }
                    : ((n = Nt.hsva.exec(e)),
                      n
                        ? { h: n[1], s: n[2], v: n[3], a: n[4] }
                        : ((n = Nt.hex8.exec(e)),
                          n
                            ? {
                                r: Ot(n[1]),
                                g: Ot(n[2]),
                                b: Ot(n[3]),
                                a: jl(n[4]),
                                format: t ? "name" : "hex8"
                              }
                            : ((n = Nt.hex6.exec(e)),
                              n
                                ? {
                                    r: Ot(n[1]),
                                    g: Ot(n[2]),
                                    b: Ot(n[3]),
                                    format: t ? "name" : "hex"
                                  }
                                : ((n = Nt.hex4.exec(e)),
                                  n
                                    ? {
                                        r: Ot(n[1] + n[1]),
                                        g: Ot(n[2] + n[2]),
                                        b: Ot(n[3] + n[3]),
                                        a: jl(n[4] + n[4]),
                                        format: t ? "name" : "hex8"
                                      }
                                    : ((n = Nt.hex3.exec(e)),
                                      n
                                        ? {
                                            r: Ot(n[1] + n[1]),
                                            g: Ot(n[2] + n[2]),
                                            b: Ot(n[3] + n[3]),
                                            format: t ? "name" : "hex"
                                          }
                                        : !1)))))))));
}
function Ht(e) {
  return Boolean(Nt.CSS_UNIT.exec(String(e)));
}
var Ao = (function () {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e) return t;
      typeof t == "number" && (t = Wm(t)), (this.originalInput = t);
      var o = bn(t);
      (this.originalInput = t),
        (this.r = o.r),
        (this.g = o.g),
        (this.b = o.b),
        (this.a = o.a),
        (this.roundA = Math.round(100 * this.a) / 100),
        (this.format = (r = n.format) !== null && r !== void 0 ? r : o.format),
        (this.gradientType = n.gradientType),
        this.r < 1 && (this.r = Math.round(this.r)),
        this.g < 1 && (this.g = Math.round(this.g)),
        this.b < 1 && (this.b = Math.round(this.b)),
        (this.isValid = o.ok);
    }
    return (
      (e.prototype.isDark = function () {
        return this.getBrightness() < 128;
      }),
      (e.prototype.isLight = function () {
        return !this.isDark();
      }),
      (e.prototype.getBrightness = function () {
        var t = this.toRgb();
        return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
      }),
      (e.prototype.getLuminance = function () {
        var t = this.toRgb(),
          n,
          r,
          o,
          a = t.r / 255,
          i = t.g / 255,
          l = t.b / 255;
        return (
          a <= 0.03928
            ? (n = a / 12.92)
            : (n = Math.pow((a + 0.055) / 1.055, 2.4)),
          i <= 0.03928
            ? (r = i / 12.92)
            : (r = Math.pow((i + 0.055) / 1.055, 2.4)),
          l <= 0.03928
            ? (o = l / 12.92)
            : (o = Math.pow((l + 0.055) / 1.055, 2.4)),
          0.2126 * n + 0.7152 * r + 0.0722 * o
        );
      }),
      (e.prototype.getAlpha = function () {
        return this.a;
      }),
      (e.prototype.setAlpha = function (t) {
        return (
          (this.a = Ls(t)), (this.roundA = Math.round(100 * this.a) / 100), this
        );
      }),
      (e.prototype.toHsv = function () {
        var t = ia(this.r, this.g, this.b);
        return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
      }),
      (e.prototype.toHsvString = function () {
        var t = ia(this.r, this.g, this.b),
          n = Math.round(t.h * 360),
          r = Math.round(t.s * 100),
          o = Math.round(t.v * 100);
        return this.a === 1
          ? "hsv(" + n + ", " + r + "%, " + o + "%)"
          : "hsva(" + n + ", " + r + "%, " + o + "%, " + this.roundA + ")";
      }),
      (e.prototype.toHsl = function () {
        var t = _l(this.r, this.g, this.b);
        return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
      }),
      (e.prototype.toHslString = function () {
        var t = _l(this.r, this.g, this.b),
          n = Math.round(t.h * 360),
          r = Math.round(t.s * 100),
          o = Math.round(t.l * 100);
        return this.a === 1
          ? "hsl(" + n + ", " + r + "%, " + o + "%)"
          : "hsla(" + n + ", " + r + "%, " + o + "%, " + this.roundA + ")";
      }),
      (e.prototype.toHex = function (t) {
        return t === void 0 && (t = !1), la(this.r, this.g, this.b, t);
      }),
      (e.prototype.toHexString = function (t) {
        return t === void 0 && (t = !1), "#" + this.toHex(t);
      }),
      (e.prototype.toHex8 = function (t) {
        return t === void 0 && (t = !1), $m(this.r, this.g, this.b, this.a, t);
      }),
      (e.prototype.toHex8String = function (t) {
        return t === void 0 && (t = !1), "#" + this.toHex8(t);
      }),
      (e.prototype.toRgb = function () {
        return {
          r: Math.round(this.r),
          g: Math.round(this.g),
          b: Math.round(this.b),
          a: this.a
        };
      }),
      (e.prototype.toRgbString = function () {
        var t = Math.round(this.r),
          n = Math.round(this.g),
          r = Math.round(this.b);
        return this.a === 1
          ? "rgb(" + t + ", " + n + ", " + r + ")"
          : "rgba(" + t + ", " + n + ", " + r + ", " + this.roundA + ")";
      }),
      (e.prototype.toPercentageRgb = function () {
        var t = function (n) {
          return Math.round(it(n, 255) * 100) + "%";
        };
        return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a };
      }),
      (e.prototype.toPercentageRgbString = function () {
        var t = function (n) {
          return Math.round(it(n, 255) * 100);
        };
        return this.a === 1
          ? "rgb(" + t(this.r) + "%, " + t(this.g) + "%, " + t(this.b) + "%)"
          : "rgba(" +
              t(this.r) +
              "%, " +
              t(this.g) +
              "%, " +
              t(this.b) +
              "%, " +
              this.roundA +
              ")";
      }),
      (e.prototype.toName = function () {
        if (this.a === 0) return "transparent";
        if (this.a < 1) return !1;
        for (
          var t = "#" + la(this.r, this.g, this.b, !1),
            n = 0,
            r = Object.entries(ua);
          n < r.length;
          n++
        ) {
          var o = r[n],
            a = o[0],
            i = o[1];
          if (t === i) return a;
        }
        return !1;
      }),
      (e.prototype.toString = function (t) {
        var n = Boolean(t);
        t = t != null ? t : this.format;
        var r = !1,
          o = this.a < 1 && this.a >= 0,
          a = !n && o && (t.startsWith("hex") || t === "name");
        return a
          ? t === "name" && this.a === 0
            ? this.toName()
            : this.toRgbString()
          : (t === "rgb" && (r = this.toRgbString()),
            t === "prgb" && (r = this.toPercentageRgbString()),
            (t === "hex" || t === "hex6") && (r = this.toHexString()),
            t === "hex3" && (r = this.toHexString(!0)),
            t === "hex4" && (r = this.toHex8String(!0)),
            t === "hex8" && (r = this.toHex8String()),
            t === "name" && (r = this.toName()),
            t === "hsl" && (r = this.toHslString()),
            t === "hsv" && (r = this.toHsvString()),
            r || this.toHexString());
      }),
      (e.prototype.toNumber = function () {
        return (
          (Math.round(this.r) << 16) +
          (Math.round(this.g) << 8) +
          Math.round(this.b)
        );
      }),
      (e.prototype.clone = function () {
        return new e(this.toString());
      }),
      (e.prototype.lighten = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.l += t / 100), (n.l = Tr(n.l)), new e(n);
      }),
      (e.prototype.brighten = function (t) {
        t === void 0 && (t = 10);
        var n = this.toRgb();
        return (
          (n.r = Math.max(
            0,
            Math.min(255, n.r - Math.round(255 * -(t / 100)))
          )),
          (n.g = Math.max(
            0,
            Math.min(255, n.g - Math.round(255 * -(t / 100)))
          )),
          (n.b = Math.max(
            0,
            Math.min(255, n.b - Math.round(255 * -(t / 100)))
          )),
          new e(n)
        );
      }),
      (e.prototype.darken = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.l -= t / 100), (n.l = Tr(n.l)), new e(n);
      }),
      (e.prototype.tint = function (t) {
        return t === void 0 && (t = 10), this.mix("white", t);
      }),
      (e.prototype.shade = function (t) {
        return t === void 0 && (t = 10), this.mix("black", t);
      }),
      (e.prototype.desaturate = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.s -= t / 100), (n.s = Tr(n.s)), new e(n);
      }),
      (e.prototype.saturate = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.s += t / 100), (n.s = Tr(n.s)), new e(n);
      }),
      (e.prototype.greyscale = function () {
        return this.desaturate(100);
      }),
      (e.prototype.spin = function (t) {
        var n = this.toHsl(),
          r = (n.h + t) % 360;
        return (n.h = r < 0 ? 360 + r : r), new e(n);
      }),
      (e.prototype.mix = function (t, n) {
        n === void 0 && (n = 50);
        var r = this.toRgb(),
          o = new e(t).toRgb(),
          a = n / 100,
          i = {
            r: (o.r - r.r) * a + r.r,
            g: (o.g - r.g) * a + r.g,
            b: (o.b - r.b) * a + r.b,
            a: (o.a - r.a) * a + r.a
          };
        return new e(i);
      }),
      (e.prototype.analogous = function (t, n) {
        t === void 0 && (t = 6), n === void 0 && (n = 30);
        var r = this.toHsl(),
          o = 360 / n,
          a = [this];
        for (r.h = (r.h - ((o * t) >> 1) + 720) % 360; --t; )
          (r.h = (r.h + o) % 360), a.push(new e(r));
        return a;
      }),
      (e.prototype.complement = function () {
        var t = this.toHsl();
        return (t.h = (t.h + 180) % 360), new e(t);
      }),
      (e.prototype.monochromatic = function (t) {
        t === void 0 && (t = 6);
        for (
          var n = this.toHsv(), r = n.h, o = n.s, a = n.v, i = [], l = 1 / t;
          t--;

        )
          i.push(new e({ h: r, s: o, v: a })), (a = (a + l) % 1);
        return i;
      }),
      (e.prototype.splitcomplement = function () {
        var t = this.toHsl(),
          n = t.h;
        return [
          this,
          new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
          new e({ h: (n + 216) % 360, s: t.s, l: t.l })
        ];
      }),
      (e.prototype.onBackground = function (t) {
        var n = this.toRgb(),
          r = new e(t).toRgb();
        return new e({
          r: r.r + (n.r - r.r) * n.a,
          g: r.g + (n.g - r.g) * n.a,
          b: r.b + (n.b - r.b) * n.a
        });
      }),
      (e.prototype.triad = function () {
        return this.polyad(3);
      }),
      (e.prototype.tetrad = function () {
        return this.polyad(4);
      }),
      (e.prototype.polyad = function (t) {
        for (
          var n = this.toHsl(), r = n.h, o = [this], a = 360 / t, i = 1;
          i < t;
          i++
        )
          o.push(new e({ h: (r + i * a) % 360, s: n.s, l: n.l }));
        return o;
      }),
      (e.prototype.equals = function (t) {
        return this.toRgbString() === new e(t).toRgbString();
      }),
      e
    );
  })(),
  Ar = 2,
  Fl = 0.16,
  qm = 0.05,
  Xm = 0.05,
  Zm = 0.15,
  Rs = 5,
  Bs = 4,
  Qm = [
    { index: 7, opacity: 0.15 },
    { index: 6, opacity: 0.25 },
    { index: 5, opacity: 0.3 },
    { index: 5, opacity: 0.45 },
    { index: 5, opacity: 0.65 },
    { index: 5, opacity: 0.85 },
    { index: 4, opacity: 0.9 },
    { index: 3, opacity: 0.95 },
    { index: 2, opacity: 0.97 },
    { index: 1, opacity: 0.98 }
  ];
function Dl(e) {
  var t = e.r,
    n = e.g,
    r = e.b,
    o = ia(t, n, r);
  return { h: o.h * 360, s: o.s, v: o.v };
}
function Nr(e) {
  var t = e.r,
    n = e.g,
    r = e.b;
  return "#".concat(la(t, n, r, !1));
}
function Jm(e, t, n) {
  var r = n / 100,
    o = {
      r: (t.r - e.r) * r + e.r,
      g: (t.g - e.g) * r + e.g,
      b: (t.b - e.b) * r + e.b
    };
  return o;
}
function Kl(e, t, n) {
  var r;
  return (
    Math.round(e.h) >= 60 && Math.round(e.h) <= 240
      ? (r = n ? Math.round(e.h) - Ar * t : Math.round(e.h) + Ar * t)
      : (r = n ? Math.round(e.h) + Ar * t : Math.round(e.h) - Ar * t),
    r < 0 ? (r += 360) : r >= 360 && (r -= 360),
    r
  );
}
function Ll(e, t, n) {
  if (e.h === 0 && e.s === 0) return e.s;
  var r;
  return (
    n ? (r = e.s - Fl * t) : t === Bs ? (r = e.s + Fl) : (r = e.s + qm * t),
    r > 1 && (r = 1),
    n && t === Rs && r > 0.1 && (r = 0.1),
    r < 0.06 && (r = 0.06),
    Number(r.toFixed(2))
  );
}
function Rl(e, t, n) {
  var r;
  return (
    n ? (r = e.v + Xm * t) : (r = e.v - Zm * t),
    r > 1 && (r = 1),
    Number(r.toFixed(2))
  );
}
function qr(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = [],
      r = bn(e),
      o = Rs;
    o > 0;
    o -= 1
  ) {
    var a = Dl(r),
      i = Nr(bn({ h: Kl(a, o, !0), s: Ll(a, o, !0), v: Rl(a, o, !0) }));
    n.push(i);
  }
  n.push(Nr(r));
  for (var l = 1; l <= Bs; l += 1) {
    var c = Dl(r),
      u = Nr(bn({ h: Kl(c, l), s: Ll(c, l), v: Rl(c, l) }));
    n.push(u);
  }
  return t.theme === "dark"
    ? Qm.map(function (s) {
        var d = s.index,
          f = s.opacity,
          v = Nr(Jm(bn(t.backgroundColor || "#141414"), bn(n[d]), f * 100));
        return v;
      })
    : n;
}
var No = {
    red: "#F5222D",
    volcano: "#FA541C",
    orange: "#FA8C16",
    gold: "#FAAD14",
    yellow: "#FADB14",
    lime: "#A0D911",
    green: "#52C41A",
    cyan: "#13C2C2",
    blue: "#1890FF",
    geekblue: "#2F54EB",
    purple: "#722ED1",
    magenta: "#EB2F96",
    grey: "#666666"
  },
  Mo = {},
  Io = {};
Object.keys(No).forEach(function (e) {
  (Mo[e] = qr(No[e])),
    (Mo[e].primary = Mo[e][5]),
    (Io[e] = qr(No[e], { theme: "dark", backgroundColor: "#141414" })),
    (Io[e].primary = Io[e][5]);
});
function eg() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
var si = eg,
  tg = "vc-util-key";
function Hs() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = e.mark;
  return t ? (t.startsWith("data-") ? t : "data-".concat(t)) : tg;
}
function fi(e) {
  if (e.attachTo) return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Bl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n,
    r;
  if (!si()) return null;
  var o = document.createElement("style");
  !((n = t.csp) === null || n === void 0) &&
    n.nonce &&
    (o.nonce = (r = t.csp) === null || r === void 0 ? void 0 : r.nonce),
    (o.innerHTML = e);
  var a = fi(t),
    i = a.firstChild;
  return (
    t.prepend && a.prepend
      ? a.prepend(o)
      : t.prepend && i
      ? a.insertBefore(o, i)
      : a.appendChild(o),
    o
  );
}
var ca = new Map();
function ng(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = fi(t);
  return Array.from(ca.get(n).children).find(function (r) {
    return r.tagName === "STYLE" && r.getAttribute(Hs(t)) === e;
  });
}
function rg(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r,
    o,
    a,
    i = fi(n);
  if (!ca.has(i)) {
    var l = Bl("", n),
      c = l.parentNode;
    ca.set(i, c), c.removeChild(l);
  }
  var u = ng(t, n);
  if (u)
    return (
      ((r = n.csp) === null || r === void 0 ? void 0 : r.nonce) &&
        u.nonce !== ((o = n.csp) === null || o === void 0 ? void 0 : o.nonce) &&
        (u.nonce = (a = n.csp) === null || a === void 0 ? void 0 : a.nonce),
      u.innerHTML !== e && (u.innerHTML = e),
      u
    );
  var s = Bl(e, n);
  return s.setAttribute(Hs(n), t), s;
}
var Lt = function (e, t, n) {
    ws(e, "[ant-design-vue: ".concat(t, "] ").concat(n));
  },
  og = "-ant-".concat(Date.now(), "-").concat(Math.random());
function ag(e, t) {
  var n = {},
    r = function (u, s) {
      var d = u.clone();
      return (d = (s == null ? void 0 : s(d)) || d), d.toRgbString();
    },
    o = function (u, s) {
      var d = new Ao(u),
        f = qr(d.toRgbString());
      (n["".concat(s, "-color")] = r(d)),
        (n["".concat(s, "-color-disabled")] = f[1]),
        (n["".concat(s, "-color-hover")] = f[4]),
        (n["".concat(s, "-color-active")] = f[7]),
        (n["".concat(s, "-color-outline")] = d
          .clone()
          .setAlpha(0.2)
          .toRgbString()),
        (n["".concat(s, "-color-deprecated-bg")] = f[1]),
        (n["".concat(s, "-color-deprecated-border")] = f[3]);
    };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    var a = new Ao(t.primaryColor),
      i = qr(a.toRgbString());
    i.forEach(function (u, s) {
      n["primary-".concat(s + 1)] = u;
    }),
      (n["primary-color-deprecated-l-35"] = r(a, function (u) {
        return u.lighten(35);
      })),
      (n["primary-color-deprecated-l-20"] = r(a, function (u) {
        return u.lighten(20);
      })),
      (n["primary-color-deprecated-t-20"] = r(a, function (u) {
        return u.tint(20);
      })),
      (n["primary-color-deprecated-t-50"] = r(a, function (u) {
        return u.tint(50);
      })),
      (n["primary-color-deprecated-f-12"] = r(a, function (u) {
        return u.setAlpha(u.getAlpha() * 0.12);
      }));
    var l = new Ao(i[0]);
    (n["primary-color-active-deprecated-f-30"] = r(l, function (u) {
      return u.setAlpha(u.getAlpha() * 0.3);
    })),
      (n["primary-color-active-deprecated-d-02"] = r(l, function (u) {
        return u.darken(2);
      }));
  }
  t.successColor && o(t.successColor, "success"),
    t.warningColor && o(t.warningColor, "warning"),
    t.errorColor && o(t.errorColor, "error"),
    t.infoColor && o(t.infoColor, "info");
  var c = Object.keys(n).map(function (u) {
    return "--".concat(e, "-").concat(u, ": ").concat(n[u], ";");
  });
  si()
    ? rg(
        `
  :root {
    `.concat(
          c.join(`
`),
          `
  }
  `
        ),
        "".concat(og, "-dynamic-theme")
      )
    : Lt(
        !1,
        "ConfigProvider",
        "SSR do not support dynamic theme with css variables."
      );
}
var ig = Symbol("GlobalFormContextKey"),
  lg = function (e) {
    Ze(ig, e);
  },
  ug = function () {
    return {
      getTargetContainer: { type: Function },
      getPopupContainer: { type: Function },
      prefixCls: String,
      getPrefixCls: { type: Function },
      renderEmpty: { type: Function },
      transformCellText: { type: Function },
      csp: { type: Object, default: void 0 },
      input: { type: Object },
      autoInsertSpaceInButton: { type: Boolean, default: void 0 },
      locale: { type: Object, default: void 0 },
      pageHeader: { type: Object },
      componentSize: { type: String },
      direction: { type: String },
      space: { type: Object },
      virtual: { type: Boolean, default: void 0 },
      dropdownMatchSelectWidth: { type: [Number, Boolean], default: !0 },
      form: { type: Object, default: void 0 },
      notUpdateGlobalConfig: Boolean
    };
  },
  cg = "ant";
function On() {
  return Et.prefixCls || cg;
}
var sa = lt({}),
  Vs = lt({}),
  Et = lt({});
Xe(function () {
  k(Et, sa, Vs),
    (Et.prefixCls = On()),
    (Et.getPrefixCls = function (e, t) {
      return t || (e ? "".concat(Et.prefixCls, "-").concat(e) : Et.prefixCls);
    }),
    (Et.getRootPrefixCls = function (e, t) {
      return (
        e ||
        (Et.prefixCls
          ? Et.prefixCls
          : t && t.includes("-")
          ? t.replace(/^(.*)-[^-]*$/, "$1")
          : On())
      );
    });
});
var _o,
  sg = function (e) {
    _o && _o(),
      (_o = Xe(function () {
        k(Vs, lt(e));
      })),
      e.theme && ag(On(), e.theme);
  },
  fg = function () {
    return {
      getPrefixCls: function (e, t) {
        return t || (e ? "".concat(On(), "-").concat(e) : On());
      },
      getRootPrefixCls: function (e, t) {
        return (
          e ||
          (Et.prefixCls
            ? Et.prefixCls
            : t && t.includes("-")
            ? t.replace(/^(.*)-[^-]*$/, "$1")
            : On())
        );
      }
    };
  },
  or = de({
    name: "AConfigProvider",
    inheritAttrs: !1,
    props: ug(),
    setup: function (e, t) {
      var n = t.slots,
        r = function (u, s) {
          var d = e.prefixCls,
            f = d === void 0 ? "ant" : d;
          return s || (u ? "".concat(f, "-").concat(u) : f);
        },
        o = function (u) {
          var s = e.renderEmpty || n.renderEmpty || bs;
          return s(u);
        },
        a = function (u, s) {
          var d = e.prefixCls;
          if (s) return s;
          var f = d || r("");
          return u ? "".concat(f, "-").concat(u) : f;
        },
        i = lt(k(k({}, e), { getPrefixCls: a, renderEmpty: o }));
      Object.keys(e).forEach(function (u) {
        fe(
          function () {
            return e[u];
          },
          function () {
            i[u] = e[u];
          }
        );
      }),
        e.notUpdateGlobalConfig ||
          (k(sa, i),
          fe(i, function () {
            k(sa, i);
          }));
      var l = E(function () {
        var u,
          s,
          d = {};
        return (
          e.locale &&
            (d =
              ((u = e.locale.Form) === null || u === void 0
                ? void 0
                : u.defaultValidateMessages) ||
              ((s = os.Form) === null || s === void 0
                ? void 0
                : s.defaultValidateMessages) ||
              {}),
          e.form &&
            e.form.validateMessages &&
            (d = k(k({}, d), e.form.validateMessages)),
          d
        );
      });
      lg({ validateMessages: l }), Ze("configProvider", i);
      var c = function (u) {
        var s;
        return m(
          pm,
          { locale: e.locale || u, ANT_MARK__: na },
          {
            default: function () {
              return [
                (s = n.default) === null || s === void 0 ? void 0 : s.call(n)
              ];
            }
          }
        );
      };
      return (
        Xe(function () {
          e.direction &&
            (Nm.config({ rtl: e.direction === "rtl" }),
            Km.config({ rtl: e.direction === "rtl" }));
        }),
        function () {
          return m(
            as,
            {
              children: function (u, s, d) {
                return c(d);
              }
            },
            null
          );
        }
      );
    }
  }),
  dg = lt({
    getPrefixCls: function (e, t) {
      return t || (e ? "ant-".concat(e) : "ant");
    },
    renderEmpty: bs,
    direction: "ltr"
  });
or.config = sg;
or.install = function (e) {
  e.component(or.name, or);
};
var vg = or,
  Ct = function (e, t) {
    var n = Qe("configProvider", dg),
      r = E(function () {
        return n.getPrefixCls(e, t.prefixCls);
      }),
      o = E(function () {
        var y;
        return (y = t.direction) !== null && y !== void 0 ? y : n.direction;
      }),
      a = E(function () {
        return n.getPrefixCls();
      }),
      i = E(function () {
        return n.autoInsertSpaceInButton;
      }),
      l = E(function () {
        return n.renderEmpty;
      }),
      c = E(function () {
        return n.space;
      }),
      u = E(function () {
        return n.pageHeader;
      }),
      s = E(function () {
        return n.form;
      }),
      d = E(function () {
        return t.getTargetContainer || n.getTargetContainer;
      }),
      f = E(function () {
        return t.getPopupContainer || n.getPopupContainer;
      }),
      v = E(function () {
        var y;
        return (y = t.dropdownMatchSelectWidth) !== null && y !== void 0
          ? y
          : n.dropdownMatchSelectWidth;
      }),
      p = E(function () {
        return (
          (t.virtual === void 0 ? n.virtual !== !1 : t.virtual !== !1) &&
          v.value !== !1
        );
      }),
      b = E(function () {
        return t.size || n.componentSize;
      }),
      w = E(function () {
        var y;
        return (
          t.autocomplete ||
          ((y = n.input) === null || y === void 0 ? void 0 : y.autocomplete)
        );
      }),
      C = E(function () {
        return n.csp;
      });
    return {
      configProvider: n,
      prefixCls: r,
      direction: o,
      size: b,
      getTargetContainer: d,
      getPopupContainer: f,
      space: c,
      pageHeader: u,
      form: s,
      autoInsertSpaceInButton: i,
      renderEmpty: l,
      virtual: p,
      dropdownMatchSelectWidth: v,
      rootPrefixCls: a,
      getPrefixCls: n.getPrefixCls,
      autocomplete: w,
      csp: C
    };
  };
function pg(e, t) {
  for (var n = k({}, e), r = 0; r < t.length; r += 1) {
    var o = t[r];
    delete n[o];
  }
  return n;
}
var zt = pg;
function hg() {
  return typeof window < "u" ? window : null;
}
var Sn;
(function (e) {
  (e[(e.None = 0)] = "None"), (e[(e.Prepare = 1)] = "Prepare");
})(Sn || (Sn = {}));
var mg = function () {
    return {
      offsetTop: Number,
      offsetBottom: Number,
      target: { type: Function, default: hg },
      prefixCls: String,
      onChange: Function,
      onTestUpdatePosition: Function
    };
  },
  gg = de({
    name: "AAffix",
    props: mg(),
    setup: function (e, t) {
      var n = t.slots,
        r = t.emit,
        o = t.expose,
        a = L(),
        i = L(),
        l = lt({
          affixStyle: void 0,
          placeholderStyle: void 0,
          status: Sn.None,
          lastAffix: !1,
          prevTarget: null,
          timeout: null
        }),
        c = Qt(),
        u = E(function () {
          return e.offsetBottom === void 0 && e.offsetTop === void 0
            ? 0
            : e.offsetTop;
        }),
        s = E(function () {
          return e.offsetBottom;
        }),
        d = function () {
          var C = l.status,
            y = l.lastAffix,
            x = e.target;
          if (!(C !== Sn.Prepare || !i.value || !a.value || !x)) {
            var h = x();
            if (h) {
              var g = { status: Sn.None },
                S = Pr(h),
                P = Pr(a.value),
                A = Cl(P, S, u.value),
                R = xl(P, S, s.value);
              A !== void 0
                ? ((g.affixStyle = {
                    position: "fixed",
                    top: A,
                    width: P.width + "px",
                    height: P.height + "px"
                  }),
                  (g.placeholderStyle = {
                    width: P.width + "px",
                    height: P.height + "px"
                  }))
                : R !== void 0 &&
                  ((g.affixStyle = {
                    position: "fixed",
                    bottom: R,
                    width: P.width + "px",
                    height: P.height + "px"
                  }),
                  (g.placeholderStyle = {
                    width: P.width + "px",
                    height: P.height + "px"
                  })),
                (g.lastAffix = !!g.affixStyle),
                y !== g.lastAffix && r("change", g.lastAffix),
                k(l, g);
            }
          }
        },
        f = function () {
          k(l, {
            status: Sn.Prepare,
            affixStyle: void 0,
            placeholderStyle: void 0
          }),
            c.update();
        },
        v = wl(function () {
          f();
        }),
        p = wl(function () {
          var C = e.target,
            y = l.affixStyle;
          if (C && y) {
            var x = C();
            if (x && a.value) {
              var h = Pr(x),
                g = Pr(a.value),
                S = Cl(g, h, u.value),
                P = xl(g, h, s.value);
              if (
                (S !== void 0 && y.top === S) ||
                (P !== void 0 && y.bottom === P)
              )
                return;
            }
          }
          f();
        });
      o({ updatePosition: v, lazyUpdatePosition: p }),
        fe(
          function () {
            return e.target;
          },
          function (C) {
            var y = (C == null ? void 0 : C()) || null;
            l.prevTarget !== y &&
              (Ol(c), y && (Sl(y, c), v()), (l.prevTarget = y));
          }
        ),
        fe(function () {
          return [e.offsetTop, e.offsetBottom];
        }, v),
        Ue(function () {
          var C = e.target;
          C &&
            (l.timeout = setTimeout(function () {
              Sl(C(), c), v();
            }));
        }),
        fn(function () {
          d();
        }),
        jn(function () {
          clearTimeout(l.timeout), Ol(c), v.cancel(), p.cancel();
        });
      var b = Ct("affix", e),
        w = b.prefixCls;
      return function () {
        var C,
          y = l.affixStyle,
          x = l.placeholderStyle,
          h = we(U({}, w.value, y)),
          g = zt(e, [
            "prefixCls",
            "offsetTop",
            "offsetBottom",
            "target",
            "onChange",
            "onTestUpdatePosition"
          ]);
        return m(
          Mn,
          { onResize: v },
          {
            default: function () {
              return [
                m("div", X(X({}, g), {}, { style: x, ref: a }), [
                  m("div", { class: h, ref: i, style: y }, [
                    (C = n.default) === null || C === void 0
                      ? void 0
                      : C.call(n)
                  ])
                ])
              ];
            }
          }
        );
      };
    }
  }),
  yg = br(gg);
function fa(e) {
  return e != null && e === e.window;
}
function $s(e, t) {
  var n;
  if (typeof window > "u") return 0;
  var r = t ? "scrollTop" : "scrollLeft",
    o = 0;
  return (
    fa(e)
      ? (o = e[t ? "pageYOffset" : "pageXOffset"])
      : e instanceof Document
      ? (o = e.documentElement[r])
      : e && (o = e[r]),
    e &&
      !fa(e) &&
      typeof o != "number" &&
      (o =
        (n = (e.ownerDocument || e).documentElement) === null || n === void 0
          ? void 0
          : n[r]),
    o
  );
}
function bg(e, t, n, r) {
  var o = n - t;
  return (
    (e /= r / 2),
    e < 1 ? (o / 2) * e * e * e + t : (o / 2) * ((e -= 2) * e * e + 2) + t
  );
}
function wg(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.getContainer,
    r =
      n === void 0
        ? function () {
            return window;
          }
        : n,
    o = t.callback,
    a = t.duration,
    i = a === void 0 ? 450 : a,
    l = r(),
    c = $s(l, !0),
    u = Date.now(),
    s = function d() {
      var f = Date.now(),
        v = f - u,
        p = bg(v > i ? i : v, c, e, i);
      fa(l)
        ? l.scrollTo(window.pageXOffset, p)
        : l instanceof HTMLDocument || l.constructor.name === "HTMLDocument"
        ? (l.documentElement.scrollTop = p)
        : (l.scrollTop = p),
        v < i ? Be(d) : typeof o == "function" && o();
    };
  Be(s);
}
function Mr() {}
var zs = Symbol("anchorContextKey"),
  Cg = function (e) {
    Ze(zs, e);
  },
  xg = function () {
    return Qe(zs, {
      registerLink: Mr,
      unregisterLink: Mr,
      scrollTo: Mr,
      activeLink: E(function () {
        return "";
      }),
      handleClick: Mr
    });
  },
  Sg = Cg;
function Og() {
  return window;
}
function Hl(e, t) {
  if (!e.getClientRects().length) return 0;
  var n = e.getBoundingClientRect();
  return n.width || n.height
    ? t === window
      ? ((t = e.ownerDocument.documentElement), n.top - t.clientTop)
      : n.top - t.getBoundingClientRect().top
    : n.top;
}
var Vl = /#([\S ]+)$/,
  kg = function () {
    return {
      prefixCls: String,
      offsetTop: Number,
      bounds: Number,
      affix: { type: Boolean, default: !0 },
      showInkInFixed: { type: Boolean, default: !1 },
      getContainer: Function,
      wrapperClass: String,
      wrapperStyle: { type: Object, default: void 0 },
      getCurrentAnchor: Function,
      targetOffset: Number,
      onChange: Function,
      onClick: Function
    };
  },
  ln = de({
    name: "AAnchor",
    inheritAttrs: !1,
    props: kg(),
    setup: function (e, t) {
      var n = t.emit,
        r = t.attrs,
        o = t.slots,
        a = t.expose,
        i = Ct("anchor", e),
        l = i.prefixCls,
        c = i.getTargetContainer,
        u = i.direction,
        s = L(),
        d = L(),
        f = lt({
          links: [],
          scrollContainer: null,
          scrollEvent: null,
          animating: !1
        }),
        v = L(null),
        p = E(function () {
          var h = e.getContainer;
          return h || c.value || Og;
        }),
        b = function () {
          var h =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : 0,
            g =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : 5,
            S = [],
            P = p.value();
          if (
            (f.links.forEach(function (R) {
              var M = Vl.exec(R.toString());
              if (M) {
                var q = document.getElementById(M[1]);
                if (q) {
                  var B = Hl(q, P);
                  B < h + g && S.push({ link: R, top: B });
                }
              }
            }),
            S.length)
          ) {
            var A = S.reduce(function (R, M) {
              return M.top > R.top ? M : R;
            });
            return A.link;
          }
          return "";
        },
        w = function (h) {
          var g = e.getCurrentAnchor;
          v.value !== h &&
            ((v.value = typeof g == "function" ? g() : h), n("change", h));
        },
        C = function (h) {
          var g = e.offsetTop,
            S = e.targetOffset;
          w(h);
          var P = p.value(),
            A = $s(P, !0),
            R = Vl.exec(h);
          if (R) {
            var M = document.getElementById(R[1]);
            if (M) {
              var q = Hl(M, P),
                B = A + q;
              (B -= S !== void 0 ? S : g || 0),
                (f.animating = !0),
                wg(B, {
                  callback: function () {
                    f.animating = !1;
                  },
                  getContainer: p.value
                });
            }
          }
        };
      a({ scrollTo: C });
      var y = function () {
          if (!f.animating) {
            var h = e.offsetTop,
              g = e.bounds,
              S = e.targetOffset,
              P = b(S !== void 0 ? S : h || 0, g);
            w(P);
          }
        },
        x = function () {
          var h = d.value.getElementsByClassName(
            "".concat(l.value, "-link-title-active")
          )[0];
          h &&
            (s.value.style.top = "".concat(
              h.offsetTop + h.clientHeight / 2 - 4.5,
              "px"
            ));
        };
      return (
        Sg({
          registerLink: function (h) {
            f.links.includes(h) || f.links.push(h);
          },
          unregisterLink: function (h) {
            var g = f.links.indexOf(h);
            g !== -1 && f.links.splice(g, 1);
          },
          activeLink: v,
          scrollTo: C,
          handleClick: function (h, g) {
            n("click", h, g);
          }
        }),
        Ue(function () {
          ft(function () {
            var h = p.value();
            (f.scrollContainer = h),
              (f.scrollEvent = Yt(f.scrollContainer, "scroll", y)),
              y();
          });
        }),
        rt(function () {
          f.scrollEvent && f.scrollEvent.remove();
        }),
        fn(function () {
          if (f.scrollEvent) {
            var h = p.value();
            f.scrollContainer !== h &&
              ((f.scrollContainer = h),
              f.scrollEvent.remove(),
              (f.scrollEvent = Yt(f.scrollContainer, "scroll", y)),
              y());
          }
          x();
        }),
        function () {
          var h,
            g = e.offsetTop,
            S = e.affix,
            P = e.showInkInFixed,
            A = l.value,
            R = we("".concat(A, "-ink-ball"), { visible: v.value }),
            M = we(
              e.wrapperClass,
              "".concat(A, "-wrapper"),
              U({}, "".concat(A, "-rtl"), u.value === "rtl")
            ),
            q = we(A, U({}, "".concat(A, "-fixed"), !S && !P)),
            B = k(
              { maxHeight: g ? "calc(100vh - ".concat(g, "px)") : "100vh" },
              e.wrapperStyle
            ),
            j = m("div", { class: M, style: B, ref: d }, [
              m("div", { class: q }, [
                m("div", { class: "".concat(A, "-ink") }, [
                  m("span", { class: R, ref: s }, null)
                ]),
                (h = o.default) === null || h === void 0 ? void 0 : h.call(o)
              ])
            ]);
          return S
            ? m(yg, X(X({}, r), {}, { offsetTop: g, target: p.value }), {
                default: function () {
                  return [j];
                }
              })
            : j;
        }
      );
    }
  }),
  Pg = function () {
    return { prefixCls: String, href: String, title: K.any, target: String };
  },
  Tg = de({
    name: "AAnchorLink",
    props: en(Pg(), { href: "#" }),
    slots: ["title"],
    setup: function (e, t) {
      var n = t.slots,
        r = null,
        o = xg(),
        a = o.handleClick,
        i = o.scrollTo,
        l = o.unregisterLink,
        c = o.registerLink,
        u = o.activeLink,
        s = Ct("anchor", e),
        d = s.prefixCls,
        f = function (v) {
          var p = e.href;
          a(v, { title: r, href: p }), i(p);
        };
      return (
        fe(
          function () {
            return e.href;
          },
          function (v, p) {
            ft(function () {
              l(p), c(v);
            });
          }
        ),
        Ue(function () {
          c(e.href);
        }),
        rt(function () {
          l(e.href);
        }),
        function () {
          var v,
            p = e.href,
            b = e.target,
            w = d.value,
            C = Zt(n, e, "title");
          r = C;
          var y = u.value === p,
            x = we(
              "".concat(w, "-link"),
              U({}, "".concat(w, "-link-active"), y)
            ),
            h = we(
              "".concat(w, "-link-title"),
              U({}, "".concat(w, "-link-title-active"), y)
            );
          return m("div", { class: x }, [
            m(
              "a",
              {
                class: h,
                href: p,
                title: typeof C == "string" ? C : "",
                target: b,
                onClick: f
              },
              [C]
            ),
            (v = n.default) === null || v === void 0 ? void 0 : v.call(n)
          ]);
        }
      );
    }
  });
ln.Link = Tg;
ln.install = function (e) {
  return e.component(ln.name, ln), e.component(ln.Link.name, ln.Link), e;
};
var k2 = ln;
function Eg(e) {
  return Wc(e) || Yc(e) || li(e) || Uc();
}
function Ag(e, t) {
  if (!t || !t.length) return null;
  var n = !1;
  function r(a, i) {
    var l = Eg(i),
      c = l[0],
      u = l.slice(1);
    if (!c) return [a];
    var s = a.split(c);
    return (
      (n = n || s.length > 1),
      s
        .reduce(function (d, f) {
          return [].concat(Re(d), Re(r(f, u)));
        }, [])
        .filter(function (d) {
          return d;
        })
    );
  }
  var o = r(e, t);
  return n ? o : null;
}
function wn(e, t) {
  return e ? e.contains(t) : !1;
}
var Ws = ["moz", "ms", "webkit"];
function Ng() {
  var e = 0;
  return function (t) {
    var n = new Date().getTime(),
      r = Math.max(0, 16 - (n - e)),
      o = window.setTimeout(function () {
        t(n + r);
      }, r);
    return (e = n + r), o;
  };
}
function Mg() {
  if (typeof window > "u") return function () {};
  if (window.requestAnimationFrame)
    return window.requestAnimationFrame.bind(window);
  var e = Ws.filter(function (t) {
    return "".concat(t, "RequestAnimationFrame") in window;
  })[0];
  return e ? window["".concat(e, "RequestAnimationFrame")] : Ng();
}
function Ig(e) {
  if (typeof window > "u") return null;
  if (window.cancelAnimationFrame) return window.cancelAnimationFrame(e);
  var t = Ws.filter(function (n) {
    return (
      "".concat(n, "CancelAnimationFrame") in window ||
      "".concat(n, "CancelRequestAnimationFrame") in window
    );
  })[0];
  return t
    ? (
        window["".concat(t, "CancelAnimationFrame")] ||
        window["".concat(t, "CancelRequestAnimationFrame")]
      ).call(this, e)
    : clearTimeout(e);
}
var $l = Mg(),
  _g = function (e) {
    return Ig(e.id);
  },
  jg = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
      n = Date.now();
    function r() {
      Date.now() - n >= t ? e.call() : (o.id = $l(r));
    }
    var o = { id: $l(r) };
    return o;
  },
  di = {
    visible: Boolean,
    prefixCls: String,
    zIndex: Number,
    destroyPopupOnHide: Boolean,
    forceRender: Boolean,
    animation: [String, Object],
    transitionName: String,
    stretch: { type: String },
    align: { type: Object },
    point: { type: Object },
    getRootDomNode: { type: Function },
    getClassNameFromAlign: { type: Function },
    onMouseenter: { type: Function },
    onMouseleave: { type: Function },
    onMousedown: { type: Function },
    onTouchstart: { type: Function }
  },
  Fg = k(k({}, di), { mobile: { type: Object } }),
  Dg = k(k({}, di), {
    mask: Boolean,
    mobile: { type: Object },
    maskAnimation: String,
    maskTransitionName: String
  });
function Us(e) {
  var t = e.prefixCls,
    n = e.animation,
    r = e.transitionName;
  return n ? { name: "".concat(t, "-").concat(n) } : r ? { name: r } : {};
}
function Ys(e) {
  var t = e.prefixCls,
    n = e.visible,
    r = e.zIndex,
    o = e.mask,
    a = e.maskAnimation,
    i = e.maskTransitionName;
  if (!o) return null;
  var l = {};
  return (
    (i || a) && (l = Us({ prefixCls: t, transitionName: i, animation: a })),
    m(mr, X({ appear: !0 }, l), {
      default: function () {
        return [
          gr(
            m(
              "div",
              { style: { zIndex: r }, class: "".concat(t, "-mask") },
              null
            ),
            [[vd("if"), n]]
          )
        ];
      }
    })
  );
}
Ys.displayName = "Mask";
var Kg = de({
    name: "MobilePopupInner",
    inheritAttrs: !1,
    props: Fg,
    emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
    setup: function (e, t) {
      var n = t.expose,
        r = t.slots,
        o = L();
      return (
        n({
          forceAlign: function () {},
          getElement: function () {
            return o.value;
          }
        }),
        function () {
          var a,
            i = e.zIndex,
            l = e.visible,
            c = e.prefixCls,
            u = e.mobile;
          u = u === void 0 ? {} : u;
          var s = u.popupClassName,
            d = u.popupStyle,
            f = u.popupMotion,
            v = f === void 0 ? {} : f,
            p = u.popupRender,
            b = k({ zIndex: i }, d),
            w = It(
              (a = r.default) === null || a === void 0 ? void 0 : a.call(r)
            );
          w.length > 1 &&
            (w = m("div", { class: "".concat(c, "-content") }, [w])),
            p && (w = p(w));
          var C = we(c, s);
          return m(mr, X({ ref: o }, v), {
            default: function () {
              return [l ? m("div", { class: C, style: b }, [w]) : null];
            }
          });
        }
      );
    }
  }),
  zl = jc(Fc()),
  Lg = function (e, t, n, r) {
    function o(a) {
      return a instanceof n
        ? a
        : new n(function (i) {
            i(a);
          });
    }
    return new (n || (n = Promise))(function (a, i) {
      function l(s) {
        try {
          u(r.next(s));
        } catch (d) {
          i(d);
        }
      }
      function c(s) {
        try {
          u(r.throw(s));
        } catch (d) {
          i(d);
        }
      }
      function u(s) {
        s.done ? a(s.value) : o(s.value).then(l, c);
      }
      u((r = r.apply(e, t || [])).next());
    });
  },
  Wl = ["measure", "align", null, "motion"],
  Rg = function (e, t) {
    var n = L(null),
      r = L(),
      o = L(!1);
    function a(c) {
      o.value || (n.value = c);
    }
    function i() {
      Be.cancel(r.value);
    }
    function l(c) {
      i(),
        (r.value = Be(function () {
          var u = n.value;
          switch (n.value) {
            case "align":
              u = "motion";
              break;
            case "motion":
              u = "stable";
              break;
          }
          a(u), c == null || c();
        }));
    }
    return (
      fe(
        e,
        function () {
          a("measure");
        },
        { immediate: !0, flush: "post" }
      ),
      Ue(function () {
        fe(
          n,
          function () {
            switch (n.value) {
              case "measure":
                t();
                break;
            }
            n.value &&
              (r.value = Be(function () {
                return Lg(
                  void 0,
                  void 0,
                  void 0,
                  zl.default.mark(function c() {
                    var u, s;
                    return zl.default.wrap(function (d) {
                      for (;;)
                        switch ((d.prev = d.next)) {
                          case 0:
                            (u = Wl.indexOf(n.value)),
                              (s = Wl[u + 1]),
                              s && u !== -1 && a(s);
                          case 3:
                          case "end":
                            return d.stop();
                        }
                    }, c);
                  })
                );
              }));
          },
          { immediate: !0, flush: "post" }
        );
      }),
      rt(function () {
        (o.value = !0), i();
      }),
      [n, l]
    );
  },
  Bg = function (e) {
    var t = L({ width: 0, height: 0 });
    function n(o) {
      t.value = { width: o.offsetWidth, height: o.offsetHeight };
    }
    var r = E(function () {
      var o = {};
      if (e.value) {
        var a = t.value,
          i = a.width,
          l = a.height;
        e.value.indexOf("height") !== -1 && l
          ? (o.height = "".concat(l, "px"))
          : e.value.indexOf("minHeight") !== -1 &&
            l &&
            (o.minHeight = "".concat(l, "px")),
          e.value.indexOf("width") !== -1 && i
            ? (o.width = "".concat(i, "px"))
            : e.value.indexOf("minWidth") !== -1 &&
              i &&
              (o.minWidth = "".concat(i, "px"));
      }
      return o;
    });
    return [r, n];
  };
function Ul(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Yl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ul(Object(n), !0).forEach(function (r) {
          Hg(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Ul(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Vr(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Vr = function (t) {
          return typeof t;
        })
      : (Vr = function (t) {
          return t &&
            typeof Symbol == "function" &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        }),
    Vr(e)
  );
}
function Hg(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var Zn,
  Vg = { Webkit: "-webkit-", Moz: "-moz-", ms: "-ms-", O: "-o-" };
function Xr() {
  if (Zn !== void 0) return Zn;
  Zn = "";
  var e = document.createElement("p").style,
    t = "Transform";
  for (var n in Vg) n + t in e && (Zn = n);
  return Zn;
}
function Gs() {
  return Xr() ? "".concat(Xr(), "TransitionProperty") : "transitionProperty";
}
function lo() {
  return Xr() ? "".concat(Xr(), "Transform") : "transform";
}
function Gl(e, t) {
  var n = Gs();
  n &&
    ((e.style[n] = t),
    n !== "transitionProperty" && (e.style.transitionProperty = t));
}
function jo(e, t) {
  var n = lo();
  n && ((e.style[n] = t), n !== "transform" && (e.style.transform = t));
}
function $g(e) {
  return e.style.transitionProperty || e.style[Gs()];
}
function zg(e) {
  var t = window.getComputedStyle(e, null),
    n = t.getPropertyValue("transform") || t.getPropertyValue(lo());
  if (n && n !== "none") {
    var r = n.replace(/[^0-9\-.,]/g, "").split(",");
    return { x: parseFloat(r[12] || r[4], 0), y: parseFloat(r[13] || r[5], 0) };
  }
  return { x: 0, y: 0 };
}
var Wg = /matrix\((.*)\)/,
  Ug = /matrix3d\((.*)\)/;
function Yg(e, t) {
  var n = window.getComputedStyle(e, null),
    r = n.getPropertyValue("transform") || n.getPropertyValue(lo());
  if (r && r !== "none") {
    var o,
      a = r.match(Wg);
    if (a)
      (a = a[1]),
        (o = a.split(",").map(function (l) {
          return parseFloat(l, 10);
        })),
        (o[4] = t.x),
        (o[5] = t.y),
        jo(e, "matrix(".concat(o.join(","), ")"));
    else {
      var i = r.match(Ug)[1];
      (o = i.split(",").map(function (l) {
        return parseFloat(l, 10);
      })),
        (o[12] = t.x),
        (o[13] = t.y),
        jo(e, "matrix3d(".concat(o.join(","), ")"));
    }
  } else
    jo(
      e,
      "translateX("
        .concat(t.x, "px) translateY(")
        .concat(t.y, "px) translateZ(0)")
    );
}
var Gg = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
  wr;
function ql(e) {
  var t = e.style.display;
  (e.style.display = "none"), e.offsetHeight, (e.style.display = t);
}
function kn(e, t, n) {
  var r = n;
  if (Vr(t) === "object") {
    for (var o in t) t.hasOwnProperty(o) && kn(e, o, t[o]);
    return;
  }
  if (typeof r < "u") {
    typeof r == "number" && (r = "".concat(r, "px")), (e.style[t] = r);
    return;
  }
  return wr(e, t);
}
function qg(e) {
  var t,
    n,
    r,
    o = e.ownerDocument,
    a = o.body,
    i = o && o.documentElement;
  return (
    (t = e.getBoundingClientRect()),
    (n = Math.floor(t.left)),
    (r = Math.floor(t.top)),
    (n -= i.clientLeft || a.clientLeft || 0),
    (r -= i.clientTop || a.clientTop || 0),
    { left: n, top: r }
  );
}
function qs(e, t) {
  var n = e["page".concat(t ? "Y" : "X", "Offset")],
    r = "scroll".concat(t ? "Top" : "Left");
  if (typeof n != "number") {
    var o = e.document;
    (n = o.documentElement[r]), typeof n != "number" && (n = o.body[r]);
  }
  return n;
}
function Xs(e) {
  return qs(e);
}
function Zs(e) {
  return qs(e, !0);
}
function fr(e) {
  var t = qg(e),
    n = e.ownerDocument,
    r = n.defaultView || n.parentWindow;
  return (t.left += Xs(r)), (t.top += Zs(r)), t;
}
function vi(e) {
  return e != null && e == e.window;
}
function Qs(e) {
  return vi(e) ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
}
function Xg(e, t, n) {
  var r = n,
    o = "",
    a = Qs(e);
  return (
    (r = r || a.defaultView.getComputedStyle(e, null)),
    r && (o = r.getPropertyValue(t) || r[t]),
    o
  );
}
var Zg = new RegExp("^(".concat(Gg, ")(?!px)[a-z%]+$"), "i"),
  Qg = /^(top|right|bottom|left)$/,
  Fo = "currentStyle",
  Do = "runtimeStyle",
  nn = "left",
  Jg = "px";
function ey(e, t) {
  var n = e[Fo] && e[Fo][t];
  if (Zg.test(n) && !Qg.test(t)) {
    var r = e.style,
      o = r[nn],
      a = e[Do][nn];
    (e[Do][nn] = e[Fo][nn]),
      (r[nn] = t === "fontSize" ? "1em" : n || 0),
      (n = r.pixelLeft + Jg),
      (r[nn] = o),
      (e[Do][nn] = a);
  }
  return n === "" ? "auto" : n;
}
typeof window < "u" && (wr = window.getComputedStyle ? Xg : ey);
function Ir(e, t) {
  return e === "left"
    ? t.useCssRight
      ? "right"
      : e
    : t.useCssBottom
    ? "bottom"
    : e;
}
function Xl(e) {
  if (e === "left") return "right";
  if (e === "right") return "left";
  if (e === "top") return "bottom";
  if (e === "bottom") return "top";
}
function Zl(e, t, n) {
  kn(e, "position") === "static" && (e.style.position = "relative");
  var r = -999,
    o = -999,
    a = Ir("left", n),
    i = Ir("top", n),
    l = Xl(a),
    c = Xl(i);
  a !== "left" && (r = 999), i !== "top" && (o = 999);
  var u = "",
    s = fr(e);
  ("left" in t || "top" in t) && ((u = $g(e) || ""), Gl(e, "none")),
    "left" in t && ((e.style[l] = ""), (e.style[a] = "".concat(r, "px"))),
    "top" in t && ((e.style[c] = ""), (e.style[i] = "".concat(o, "px"))),
    ql(e);
  var d = fr(e),
    f = {};
  for (var v in t)
    if (t.hasOwnProperty(v)) {
      var p = Ir(v, n),
        b = v === "left" ? r : o,
        w = s[v] - d[v];
      p === v ? (f[p] = b + w) : (f[p] = b - w);
    }
  kn(e, f), ql(e), ("left" in t || "top" in t) && Gl(e, u);
  var C = {};
  for (var y in t)
    if (t.hasOwnProperty(y)) {
      var x = Ir(y, n),
        h = t[y] - s[y];
      y === x ? (C[x] = f[x] + h) : (C[x] = f[x] - h);
    }
  kn(e, C);
}
function ty(e, t) {
  var n = fr(e),
    r = zg(e),
    o = { x: r.x, y: r.y };
  "left" in t && (o.x = r.x + t.left - n.left),
    "top" in t && (o.y = r.y + t.top - n.top),
    Yg(e, o);
}
function ny(e, t, n) {
  if (n.ignoreShake) {
    var r = fr(e),
      o = r.left.toFixed(0),
      a = r.top.toFixed(0),
      i = t.left.toFixed(0),
      l = t.top.toFixed(0);
    if (o === i && a === l) return;
  }
  n.useCssRight || n.useCssBottom
    ? Zl(e, t, n)
    : n.useCssTransform && lo() in document.body.style
    ? ty(e, t)
    : Zl(e, t, n);
}
function pi(e, t) {
  for (var n = 0; n < e.length; n++) t(e[n]);
}
function Js(e) {
  return wr(e, "boxSizing") === "border-box";
}
var ry = ["margin", "border", "padding"],
  da = -1,
  oy = 2,
  va = 1,
  ay = 0;
function iy(e, t, n) {
  var r = {},
    o = e.style,
    a;
  for (a in t) t.hasOwnProperty(a) && ((r[a] = o[a]), (o[a] = t[a]));
  n.call(e);
  for (a in t) t.hasOwnProperty(a) && (o[a] = r[a]);
}
function tr(e, t, n) {
  var r = 0,
    o,
    a,
    i;
  for (a = 0; a < t.length; a++)
    if (((o = t[a]), o))
      for (i = 0; i < n.length; i++) {
        var l = void 0;
        o === "border"
          ? (l = "".concat(o).concat(n[i], "Width"))
          : (l = o + n[i]),
          (r += parseFloat(wr(e, l)) || 0);
      }
  return r;
}
var Kt = {
  getParent: function (e) {
    var t = e;
    do t.nodeType === 11 && t.host ? (t = t.host) : (t = t.parentNode);
    while (t && t.nodeType !== 1 && t.nodeType !== 9);
    return t;
  }
};
pi(["Width", "Height"], function (e) {
  (Kt["doc".concat(e)] = function (t) {
    var n = t.document;
    return Math.max(
      n.documentElement["scroll".concat(e)],
      n.body["scroll".concat(e)],
      Kt["viewport".concat(e)](n)
    );
  }),
    (Kt["viewport".concat(e)] = function (t) {
      var n = "client".concat(e),
        r = t.document,
        o = r.body,
        a = r.documentElement,
        i = a[n];
      return (r.compatMode === "CSS1Compat" && i) || (o && o[n]) || i;
    });
});
function Ql(e, t, n) {
  var r = n;
  if (vi(e)) return t === "width" ? Kt.viewportWidth(e) : Kt.viewportHeight(e);
  if (e.nodeType === 9) return t === "width" ? Kt.docWidth(e) : Kt.docHeight(e);
  var o = t === "width" ? ["Left", "Right"] : ["Top", "Bottom"],
    a = Math.floor(
      t === "width"
        ? e.getBoundingClientRect().width
        : e.getBoundingClientRect().height
    ),
    i = Js(e),
    l = 0;
  (a == null || a <= 0) &&
    ((a = void 0),
    (l = wr(e, t)),
    (l == null || Number(l) < 0) && (l = e.style[t] || 0),
    (l = parseFloat(l) || 0)),
    r === void 0 && (r = i ? va : da);
  var c = a !== void 0 || i,
    u = a || l;
  return r === da
    ? c
      ? u - tr(e, ["border", "padding"], o)
      : l
    : c
    ? r === va
      ? u
      : u + (r === oy ? -tr(e, ["border"], o) : tr(e, ["margin"], o))
    : l + tr(e, ry.slice(r), o);
}
var ly = { position: "absolute", visibility: "hidden", display: "block" };
function Jl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r,
    o = t[0];
  return (
    o.offsetWidth !== 0
      ? (r = Ql.apply(void 0, t))
      : iy(o, ly, function () {
          r = Ql.apply(void 0, t);
        }),
    r
  );
}
pi(["width", "height"], function (e) {
  var t = e.charAt(0).toUpperCase() + e.slice(1);
  Kt["outer".concat(t)] = function (r, o) {
    return r && Jl(r, e, o ? ay : va);
  };
  var n = e === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  Kt[e] = function (r, o) {
    var a = o;
    if (a !== void 0) {
      if (r) {
        var i = Js(r);
        return i && (a += tr(r, ["padding", "border"], n)), kn(r, e, a);
      }
      return;
    }
    return r && Jl(r, e, da);
  };
});
function ef(e, t) {
  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
var Oe = {
  getWindow: function (e) {
    if (e && e.document && e.setTimeout) return e;
    var t = e.ownerDocument || e;
    return t.defaultView || t.parentWindow;
  },
  getDocument: Qs,
  offset: function (e, t, n) {
    if (typeof t < "u") ny(e, t, n || {});
    else return fr(e);
  },
  isWindow: vi,
  each: pi,
  css: kn,
  clone: function (e) {
    var t,
      n = {};
    for (t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
    var r = e.overflow;
    if (r) for (t in e) e.hasOwnProperty(t) && (n.overflow[t] = e.overflow[t]);
    return n;
  },
  mix: ef,
  getWindowScrollLeft: function (e) {
    return Xs(e);
  },
  getWindowScrollTop: function (e) {
    return Zs(e);
  },
  merge: function () {
    for (var e = {}, t = 0; t < arguments.length; t++)
      Oe.mix(e, t < 0 || arguments.length <= t ? void 0 : arguments[t]);
    return e;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
ef(Oe, Kt);
var Ko = Oe.getParent;
function pa(e) {
  if (Oe.isWindow(e) || e.nodeType === 9) return null;
  var t = Oe.getDocument(e),
    n = t.body,
    r,
    o = Oe.css(e, "position"),
    a = o === "fixed" || o === "absolute";
  if (!a) return e.nodeName.toLowerCase() === "html" ? null : Ko(e);
  for (r = Ko(e); r && r !== n && r.nodeType !== 9; r = Ko(r))
    if (((o = Oe.css(r, "position")), o !== "static")) return r;
  return null;
}
var eu = Oe.getParent;
function uy(e) {
  if (Oe.isWindow(e) || e.nodeType === 9) return !1;
  var t = Oe.getDocument(e),
    n = t.body,
    r = null;
  for (r = eu(e); r && r !== n && r !== t; r = eu(r)) {
    var o = Oe.css(r, "position");
    if (o === "fixed") return !0;
  }
  return !1;
}
function hi(e, t) {
  for (
    var n = { left: 0, right: 1 / 0, top: 0, bottom: 1 / 0 },
      r = pa(e),
      o = Oe.getDocument(e),
      a = o.defaultView || o.parentWindow,
      i = o.body,
      l = o.documentElement;
    r;

  ) {
    if (
      (navigator.userAgent.indexOf("MSIE") === -1 || r.clientWidth !== 0) &&
      r !== i &&
      r !== l &&
      Oe.css(r, "overflow") !== "visible"
    ) {
      var c = Oe.offset(r);
      (c.left += r.clientLeft),
        (c.top += r.clientTop),
        (n.top = Math.max(n.top, c.top)),
        (n.right = Math.min(n.right, c.left + r.clientWidth)),
        (n.bottom = Math.min(n.bottom, c.top + r.clientHeight)),
        (n.left = Math.max(n.left, c.left));
    } else if (r === i || r === l) break;
    r = pa(r);
  }
  var u = null;
  if (!Oe.isWindow(e) && e.nodeType !== 9) {
    u = e.style.position;
    var s = Oe.css(e, "position");
    s === "absolute" && (e.style.position = "fixed");
  }
  var d = Oe.getWindowScrollLeft(a),
    f = Oe.getWindowScrollTop(a),
    v = Oe.viewportWidth(a),
    p = Oe.viewportHeight(a),
    b = l.scrollWidth,
    w = l.scrollHeight,
    C = window.getComputedStyle(i);
  if (
    (C.overflowX === "hidden" && (b = a.innerWidth),
    C.overflowY === "hidden" && (w = a.innerHeight),
    e.style && (e.style.position = u),
    t || uy(e))
  )
    (n.left = Math.max(n.left, d)),
      (n.top = Math.max(n.top, f)),
      (n.right = Math.min(n.right, d + v)),
      (n.bottom = Math.min(n.bottom, f + p));
  else {
    var y = Math.max(b, d + v);
    n.right = Math.min(n.right, y);
    var x = Math.max(w, f + p);
    n.bottom = Math.min(n.bottom, x);
  }
  return n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left
    ? n
    : null;
}
function cy(e, t, n, r) {
  var o = Oe.clone(e),
    a = { width: t.width, height: t.height };
  return (
    r.adjustX && o.left < n.left && (o.left = n.left),
    r.resizeWidth &&
      o.left >= n.left &&
      o.left + a.width > n.right &&
      (a.width -= o.left + a.width - n.right),
    r.adjustX &&
      o.left + a.width > n.right &&
      (o.left = Math.max(n.right - a.width, n.left)),
    r.adjustY && o.top < n.top && (o.top = n.top),
    r.resizeHeight &&
      o.top >= n.top &&
      o.top + a.height > n.bottom &&
      (a.height -= o.top + a.height - n.bottom),
    r.adjustY &&
      o.top + a.height > n.bottom &&
      (o.top = Math.max(n.bottom - a.height, n.top)),
    Oe.mix(o, a)
  );
}
function mi(e) {
  var t, n, r;
  if (!Oe.isWindow(e) && e.nodeType !== 9)
    (t = Oe.offset(e)), (n = Oe.outerWidth(e)), (r = Oe.outerHeight(e));
  else {
    var o = Oe.getWindow(e);
    (t = { left: Oe.getWindowScrollLeft(o), top: Oe.getWindowScrollTop(o) }),
      (n = Oe.viewportWidth(o)),
      (r = Oe.viewportHeight(o));
  }
  return (t.width = n), (t.height = r), t;
}
function tu(e, t) {
  var n = t.charAt(0),
    r = t.charAt(1),
    o = e.width,
    a = e.height,
    i = e.left,
    l = e.top;
  return (
    n === "c" ? (l += a / 2) : n === "b" && (l += a),
    r === "c" ? (i += o / 2) : r === "r" && (i += o),
    { left: i, top: l }
  );
}
function _r(e, t, n, r, o) {
  var a = tu(t, n[1]),
    i = tu(e, n[0]),
    l = [i.left - a.left, i.top - a.top];
  return {
    left: Math.round(e.left - l[0] + r[0] - o[0]),
    top: Math.round(e.top - l[1] + r[1] - o[1])
  };
}
function nu(e, t, n) {
  return e.left < n.left || e.left + t.width > n.right;
}
function ru(e, t, n) {
  return e.top < n.top || e.top + t.height > n.bottom;
}
function sy(e, t, n) {
  return e.left > n.right || e.left + t.width < n.left;
}
function fy(e, t, n) {
  return e.top > n.bottom || e.top + t.height < n.top;
}
function jr(e, t, n) {
  var r = [];
  return (
    Oe.each(e, function (o) {
      r.push(
        o.replace(t, function (a) {
          return n[a];
        })
      );
    }),
    r
  );
}
function Fr(e, t) {
  return (e[t] = -e[t]), e;
}
function ou(e, t) {
  var n;
  return (
    /%$/.test(e)
      ? (n = (parseInt(e.substring(0, e.length - 1), 10) / 100) * t)
      : (n = parseInt(e, 10)),
    n || 0
  );
}
function au(e, t) {
  (e[0] = ou(e[0], t.width)), (e[1] = ou(e[1], t.height));
}
function tf(e, t, n, r) {
  var o = n.points,
    a = n.offset || [0, 0],
    i = n.targetOffset || [0, 0],
    l = n.overflow,
    c = n.source || e;
  (a = [].concat(a)), (i = [].concat(i)), (l = l || {});
  var u = {},
    s = 0,
    d = !!(l && l.alwaysByViewport),
    f = hi(c, d),
    v = mi(c);
  au(a, v), au(i, t);
  var p = _r(v, t, o, a, i),
    b = Oe.merge(v, p);
  if (f && (l.adjustX || l.adjustY) && r) {
    if (l.adjustX && nu(p, v, f)) {
      var w = jr(o, /[lr]/gi, { l: "r", r: "l" }),
        C = Fr(a, 0),
        y = Fr(i, 0),
        x = _r(v, t, w, C, y);
      sy(x, v, f) || ((s = 1), (o = w), (a = C), (i = y));
    }
    if (l.adjustY && ru(p, v, f)) {
      var h = jr(o, /[tb]/gi, { t: "b", b: "t" }),
        g = Fr(a, 1),
        S = Fr(i, 1),
        P = _r(v, t, h, g, S);
      fy(P, v, f) || ((s = 1), (o = h), (a = g), (i = S));
    }
    s && ((p = _r(v, t, o, a, i)), Oe.mix(b, p));
    var A = nu(p, v, f),
      R = ru(p, v, f);
    if (A || R) {
      var M = o;
      A && (M = jr(o, /[lr]/gi, { l: "r", r: "l" })),
        R && (M = jr(o, /[tb]/gi, { t: "b", b: "t" })),
        (o = M),
        (a = n.offset || [0, 0]),
        (i = n.targetOffset || [0, 0]);
    }
    (u.adjustX = l.adjustX && A),
      (u.adjustY = l.adjustY && R),
      (u.adjustX || u.adjustY) && (b = cy(p, v, f, u));
  }
  return (
    b.width !== v.width && Oe.css(c, "width", Oe.width(c) + b.width - v.width),
    b.height !== v.height &&
      Oe.css(c, "height", Oe.height(c) + b.height - v.height),
    Oe.offset(
      c,
      { left: b.left, top: b.top },
      {
        useCssRight: n.useCssRight,
        useCssBottom: n.useCssBottom,
        useCssTransform: n.useCssTransform,
        ignoreShake: n.ignoreShake
      }
    ),
    { points: o, offset: a, targetOffset: i, overflow: u }
  );
}
function dy(e, t) {
  var n = hi(e, t),
    r = mi(e);
  return (
    !n ||
    r.left + r.width <= n.left ||
    r.top + r.height <= n.top ||
    r.left >= n.right ||
    r.top >= n.bottom
  );
}
function gi(e, t, n) {
  var r = n.target || t,
    o = mi(r),
    a = !dy(r, n.overflow && n.overflow.alwaysByViewport);
  return tf(e, o, n, a);
}
gi.__getOffsetParent = pa;
gi.__getVisibleRectForElement = hi;
function vy(e, t, n) {
  var r,
    o,
    a = Oe.getDocument(e),
    i = a.defaultView || a.parentWindow,
    l = Oe.getWindowScrollLeft(i),
    c = Oe.getWindowScrollTop(i),
    u = Oe.viewportWidth(i),
    s = Oe.viewportHeight(i);
  "pageX" in t ? (r = t.pageX) : (r = l + t.clientX),
    "pageY" in t ? (o = t.pageY) : (o = c + t.clientY);
  var d = { left: r, top: o, width: 0, height: 0 },
    f = r >= 0 && r <= l + u && o >= 0 && o <= c + s,
    v = [n.points[0], "cc"];
  return tf(e, d, Yl(Yl({}, n), {}, { points: v }), f);
}
function At(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
    o = e;
  if ((Array.isArray(e) && (o = Ln(e)[0]), !o)) return null;
  var a = Ka(o, t, r);
  return (
    (a.props = n ? k(k({}, a.props), t) : a.props),
    cr(We(a.props.class) !== "object", "class must be string"),
    a
  );
}
var py = function (e) {
  if (!e) return !1;
  if (e.offsetParent) return !0;
  if (e.getBBox) {
    var t = e.getBBox();
    if (t.width || t.height) return !0;
  }
  if (e.getBoundingClientRect) {
    var n = e.getBoundingClientRect();
    if (n.width || n.height) return !0;
  }
  return !1;
};
function hy(e, t) {
  return e === t
    ? !0
    : !e || !t
    ? !1
    : "pageX" in t && "pageY" in t
    ? e.pageX === t.pageX && e.pageY === t.pageY
    : "clientX" in t && "clientY" in t
    ? e.clientX === t.clientX && e.clientY === t.clientY
    : !1;
}
function my(e, t) {
  e !== document.activeElement &&
    wn(t, e) &&
    typeof e.focus == "function" &&
    e.focus();
}
function iu(e, t) {
  var n = null,
    r = null;
  function o(i) {
    var l = Se(i, 1),
      c = l[0].target;
    if (document.documentElement.contains(c)) {
      var u = c.getBoundingClientRect(),
        s = u.width,
        d = u.height,
        f = Math.floor(s),
        v = Math.floor(d);
      (n !== f || r !== v) &&
        Promise.resolve().then(function () {
          t({ width: f, height: v });
        }),
        (n = f),
        (r = v);
    }
  }
  var a = new zc(o);
  return (
    e && a.observe(e),
    function () {
      a.disconnect();
    }
  );
}
var gy = function (e, t) {
  var n = !1,
    r = null;
  function o() {
    clearTimeout(r);
  }
  function a(i) {
    if (!n || i === !0) {
      if (e() === !1) return;
      (n = !0),
        o(),
        (r = setTimeout(function () {
          n = !1;
        }, t.value));
    } else
      o(),
        (r = setTimeout(function () {
          (n = !1), a();
        }, t.value));
  }
  return [
    a,
    function () {
      (n = !1), o();
    }
  ];
};
function yy() {
  (this.__data__ = []), (this.size = 0);
}
var by = yy;
function wy(e, t) {
  return e === t || (e !== e && t !== t);
}
var yi = wy;
function Cy(e, t) {
  for (var n = e.length; n--; ) if (yi(e[n][0], t)) return n;
  return -1;
}
var uo = Cy,
  xy = Array.prototype,
  Sy = xy.splice;
function Oy(e) {
  var t = this.__data__,
    n = uo(t, e);
  if (n < 0) return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Sy.call(t, n, 1), --this.size, !0;
}
var ky = Oy;
function Py(e) {
  var t = this.__data__,
    n = uo(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var Ty = Py;
function Ey(e) {
  return uo(this.__data__, e) > -1;
}
var Ay = Ey;
function Ny(e, t) {
  var n = this.__data__,
    r = uo(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
}
var My = Ny;
function Hn(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Hn.prototype.clear = by;
Hn.prototype.delete = ky;
Hn.prototype.get = Ty;
Hn.prototype.has = Ay;
Hn.prototype.set = My;
var co = Hn;
function Iy() {
  (this.__data__ = new co()), (this.size = 0);
}
var _y = Iy;
function jy(e) {
  var t = this.__data__,
    n = t.delete(e);
  return (this.size = t.size), n;
}
var Fy = jy;
function Dy(e) {
  return this.__data__.get(e);
}
var Ky = Dy;
function Ly(e) {
  return this.__data__.has(e);
}
var Ry = Ly;
function By(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Zr = By,
  Hy = "[object AsyncFunction]",
  Vy = "[object Function]",
  $y = "[object GeneratorFunction]",
  zy = "[object Proxy]";
function Wy(e) {
  if (!Zr(e)) return !1;
  var t = Kn(e);
  return t == Vy || t == $y || t == Hy || t == zy;
}
var nf = Wy,
  Uy = $t["__core-js_shared__"],
  Lo = Uy,
  lu = (function () {
    var e = /[^.]+$/.exec((Lo && Lo.keys && Lo.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
function Yy(e) {
  return !!lu && lu in e;
}
var Gy = Yy,
  qy = Function.prototype,
  Xy = qy.toString;
function Zy(e) {
  if (e != null) {
    try {
      return Xy.call(e);
    } catch {}
    try {
      return e + "";
    } catch {}
  }
  return "";
}
var vn = Zy,
  Qy = /[\\^$.*+?()[\]{}|]/g,
  Jy = /^\[object .+?Constructor\]$/,
  e0 = Function.prototype,
  t0 = Object.prototype,
  n0 = e0.toString,
  r0 = t0.hasOwnProperty,
  o0 = RegExp(
    "^" +
      n0
        .call(r0)
        .replace(Qy, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  );
function a0(e) {
  if (!Zr(e) || Gy(e)) return !1;
  var t = nf(e) ? o0 : Jy;
  return t.test(vn(e));
}
var i0 = a0;
function l0(e, t) {
  return e == null ? void 0 : e[t];
}
var u0 = l0;
function c0(e, t) {
  var n = u0(e, t);
  return i0(n) ? n : void 0;
}
var pn = c0,
  s0 = pn($t, "Map"),
  dr = s0,
  f0 = pn(Object, "create"),
  vr = f0;
function d0() {
  (this.__data__ = vr ? vr(null) : {}), (this.size = 0);
}
var v0 = d0;
function p0(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var h0 = p0,
  m0 = "__lodash_hash_undefined__",
  g0 = Object.prototype,
  y0 = g0.hasOwnProperty;
function b0(e) {
  var t = this.__data__;
  if (vr) {
    var n = t[e];
    return n === m0 ? void 0 : n;
  }
  return y0.call(t, e) ? t[e] : void 0;
}
var w0 = b0,
  C0 = Object.prototype,
  x0 = C0.hasOwnProperty;
function S0(e) {
  var t = this.__data__;
  return vr ? t[e] !== void 0 : x0.call(t, e);
}
var O0 = S0,
  k0 = "__lodash_hash_undefined__";
function P0(e, t) {
  var n = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (n[e] = vr && t === void 0 ? k0 : t),
    this
  );
}
var T0 = P0;
function Vn(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Vn.prototype.clear = v0;
Vn.prototype.delete = h0;
Vn.prototype.get = w0;
Vn.prototype.has = O0;
Vn.prototype.set = T0;
var uu = Vn;
function E0() {
  (this.size = 0),
    (this.__data__ = {
      hash: new uu(),
      map: new (dr || co)(),
      string: new uu()
    });
}
var A0 = E0;
function N0(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean"
    ? e !== "__proto__"
    : e === null;
}
var M0 = N0;
function I0(e, t) {
  var n = e.__data__;
  return M0(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var so = I0;
function _0(e) {
  var t = so(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
var j0 = _0;
function F0(e) {
  return so(this, e).get(e);
}
var D0 = F0;
function K0(e) {
  return so(this, e).has(e);
}
var L0 = K0;
function R0(e, t) {
  var n = so(this, e),
    r = n.size;
  return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
}
var B0 = R0;
function $n(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
$n.prototype.clear = A0;
$n.prototype.delete = j0;
$n.prototype.get = D0;
$n.prototype.has = L0;
$n.prototype.set = B0;
var fo = $n,
  H0 = 200;
function V0(e, t) {
  var n = this.__data__;
  if (n instanceof co) {
    var r = n.__data__;
    if (!dr || r.length < H0 - 1)
      return r.push([e, t]), (this.size = ++n.size), this;
    n = this.__data__ = new fo(r);
  }
  return n.set(e, t), (this.size = n.size), this;
}
var $0 = V0;
function zn(e) {
  var t = (this.__data__ = new co(e));
  this.size = t.size;
}
zn.prototype.clear = _y;
zn.prototype.delete = Fy;
zn.prototype.get = Ky;
zn.prototype.has = Ry;
zn.prototype.set = $0;
var Ro = zn,
  z0 = "__lodash_hash_undefined__";
function W0(e) {
  return this.__data__.set(e, z0), this;
}
var U0 = W0;
function Y0(e) {
  return this.__data__.has(e);
}
var G0 = Y0;
function Qr(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.__data__ = new fo(); ++t < n; ) this.add(e[t]);
}
Qr.prototype.add = Qr.prototype.push = U0;
Qr.prototype.has = G0;
var rf = Qr;
function q0(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e)) return !0;
  return !1;
}
var X0 = q0;
function Z0(e, t) {
  return e.has(t);
}
var of = Z0,
  Q0 = 1,
  J0 = 2;
function eb(e, t, n, r, o, a) {
  var i = n & Q0,
    l = e.length,
    c = t.length;
  if (l != c && !(i && c > l)) return !1;
  var u = a.get(e),
    s = a.get(t);
  if (u && s) return u == t && s == e;
  var d = -1,
    f = !0,
    v = n & J0 ? new rf() : void 0;
  for (a.set(e, t), a.set(t, e); ++d < l; ) {
    var p = e[d],
      b = t[d];
    if (r) var w = i ? r(b, p, d, t, e, a) : r(p, b, d, e, t, a);
    if (w !== void 0) {
      if (w) continue;
      f = !1;
      break;
    }
    if (v) {
      if (
        !X0(t, function (C, y) {
          if (!of(v, y) && (p === C || o(p, C, n, r, a))) return v.push(y);
        })
      ) {
        f = !1;
        break;
      }
    } else if (!(p === b || o(p, b, n, r, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), f;
}
var af = eb,
  tb = $t.Uint8Array,
  cu = tb;
function nb(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (r, o) {
      n[++t] = [o, r];
    }),
    n
  );
}
var rb = nb;
function ob(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (r) {
      n[++t] = r;
    }),
    n
  );
}
var bi = ob,
  ab = 1,
  ib = 2,
  lb = "[object Boolean]",
  ub = "[object Date]",
  cb = "[object Error]",
  sb = "[object Map]",
  fb = "[object Number]",
  db = "[object RegExp]",
  vb = "[object Set]",
  pb = "[object String]",
  hb = "[object Symbol]",
  mb = "[object ArrayBuffer]",
  gb = "[object DataView]",
  su = Rt ? Rt.prototype : void 0,
  Bo = su ? su.valueOf : void 0;
function yb(e, t, n, r, o, a, i) {
  switch (n) {
    case gb:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      (e = e.buffer), (t = t.buffer);
    case mb:
      return !(e.byteLength != t.byteLength || !a(new cu(e), new cu(t)));
    case lb:
    case ub:
    case fb:
      return yi(+e, +t);
    case cb:
      return e.name == t.name && e.message == t.message;
    case db:
    case pb:
      return e == t + "";
    case sb:
      var l = rb;
    case vb:
      var c = r & ab;
      if ((l || (l = bi), e.size != t.size && !c)) return !1;
      var u = i.get(e);
      if (u) return u == t;
      (r |= ib), i.set(e, t);
      var s = af(l(e), l(t), r, o, a, i);
      return i.delete(e), s;
    case hb:
      if (Bo) return Bo.call(e) == Bo.call(t);
  }
  return !1;
}
var bb = yb;
function wb(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; ) e[o + n] = t[n];
  return e;
}
var lf = wb,
  Cb = Array.isArray,
  Vt = Cb;
function xb(e, t, n) {
  var r = t(e);
  return Vt(e) ? r : lf(r, n(e));
}
var Sb = xb;
function Ob(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var i = e[n];
    t(i, n, e) && (a[o++] = i);
  }
  return a;
}
var kb = Ob;
function Pb() {
  return [];
}
var Tb = Pb,
  Eb = Object.prototype,
  Ab = Eb.propertyIsEnumerable,
  fu = Object.getOwnPropertySymbols,
  Nb = fu
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            kb(fu(e), function (t) {
              return Ab.call(e, t);
            }));
      }
    : Tb,
  Mb = Nb;
function Ib(e, t) {
  for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
  return r;
}
var _b = Ib,
  jb = "[object Arguments]";
function Fb(e) {
  return Nn(e) && Kn(e) == jb;
}
var du = Fb,
  uf = Object.prototype,
  Db = uf.hasOwnProperty,
  Kb = uf.propertyIsEnumerable,
  Lb = du(
    (function () {
      return arguments;
    })()
  )
    ? du
    : function (e) {
        return Nn(e) && Db.call(e, "callee") && !Kb.call(e, "callee");
      },
  wi = Lb;
function Rb() {
  return !1;
}
var Bb = Rb,
  cf = typeof exports == "object" && exports && !exports.nodeType && exports,
  vu = cf && typeof module == "object" && module && !module.nodeType && module,
  Hb = vu && vu.exports === cf,
  pu = Hb ? $t.Buffer : void 0,
  Vb = pu ? pu.isBuffer : void 0,
  $b = Vb || Bb,
  ha = $b,
  zb = 9007199254740991,
  Wb = /^(?:0|[1-9]\d*)$/;
function Ub(e, t) {
  var n = typeof e;
  return (
    (t = t != null ? t : zb),
    !!t &&
      (n == "number" || (n != "symbol" && Wb.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
  );
}
var Ci = Ub,
  Yb = 9007199254740991;
function Gb(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Yb;
}
var xi = Gb,
  qb = "[object Arguments]",
  Xb = "[object Array]",
  Zb = "[object Boolean]",
  Qb = "[object Date]",
  Jb = "[object Error]",
  e1 = "[object Function]",
  t1 = "[object Map]",
  n1 = "[object Number]",
  r1 = "[object Object]",
  o1 = "[object RegExp]",
  a1 = "[object Set]",
  i1 = "[object String]",
  l1 = "[object WeakMap]",
  u1 = "[object ArrayBuffer]",
  c1 = "[object DataView]",
  s1 = "[object Float32Array]",
  f1 = "[object Float64Array]",
  d1 = "[object Int8Array]",
  v1 = "[object Int16Array]",
  p1 = "[object Int32Array]",
  h1 = "[object Uint8Array]",
  m1 = "[object Uint8ClampedArray]",
  g1 = "[object Uint16Array]",
  y1 = "[object Uint32Array]",
  qe = {};
qe[s1] =
  qe[f1] =
  qe[d1] =
  qe[v1] =
  qe[p1] =
  qe[h1] =
  qe[m1] =
  qe[g1] =
  qe[y1] =
    !0;
qe[qb] =
  qe[Xb] =
  qe[u1] =
  qe[Zb] =
  qe[c1] =
  qe[Qb] =
  qe[Jb] =
  qe[e1] =
  qe[t1] =
  qe[n1] =
  qe[r1] =
  qe[o1] =
  qe[a1] =
  qe[i1] =
  qe[l1] =
    !1;
function b1(e) {
  return Nn(e) && xi(e.length) && !!qe[Kn(e)];
}
var w1 = b1;
function C1(e) {
  return function (t) {
    return e(t);
  };
}
var x1 = C1,
  sf = typeof exports == "object" && exports && !exports.nodeType && exports,
  ar = sf && typeof module == "object" && module && !module.nodeType && module,
  S1 = ar && ar.exports === sf,
  Ho = S1 && Gc.process,
  O1 = (function () {
    try {
      var e = ar && ar.require && ar.require("util").types;
      return e || (Ho && Ho.binding && Ho.binding("util"));
    } catch {}
  })(),
  hu = O1,
  mu = hu && hu.isTypedArray,
  k1 = mu ? x1(mu) : w1,
  ff = k1,
  P1 = Object.prototype,
  T1 = P1.hasOwnProperty;
function E1(e, t) {
  var n = Vt(e),
    r = !n && wi(e),
    o = !n && !r && ha(e),
    a = !n && !r && !o && ff(e),
    i = n || r || o || a,
    l = i ? _b(e.length, String) : [],
    c = l.length;
  for (var u in e)
    (t || T1.call(e, u)) &&
      !(
        i &&
        (u == "length" ||
          (o && (u == "offset" || u == "parent")) ||
          (a && (u == "buffer" || u == "byteLength" || u == "byteOffset")) ||
          Ci(u, c))
      ) &&
      l.push(u);
  return l;
}
var A1 = E1,
  N1 = Object.prototype;
function M1(e) {
  var t = e && e.constructor,
    n = (typeof t == "function" && t.prototype) || N1;
  return e === n;
}
var I1 = M1,
  _1 = Sh(Object.keys, Object),
  j1 = _1,
  F1 = Object.prototype,
  D1 = F1.hasOwnProperty;
function K1(e) {
  if (!I1(e)) return j1(e);
  var t = [];
  for (var n in Object(e)) D1.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var L1 = K1;
function R1(e) {
  return e != null && xi(e.length) && !nf(e);
}
var B1 = R1;
function H1(e) {
  return B1(e) ? A1(e) : L1(e);
}
var V1 = H1;
function $1(e) {
  return Sb(e, V1, Mb);
}
var gu = $1,
  z1 = 1,
  W1 = Object.prototype,
  U1 = W1.hasOwnProperty;
function Y1(e, t, n, r, o, a) {
  var i = n & z1,
    l = gu(e),
    c = l.length,
    u = gu(t),
    s = u.length;
  if (c != s && !i) return !1;
  for (var d = c; d--; ) {
    var f = l[d];
    if (!(i ? f in t : U1.call(t, f))) return !1;
  }
  var v = a.get(e),
    p = a.get(t);
  if (v && p) return v == t && p == e;
  var b = !0;
  a.set(e, t), a.set(t, e);
  for (var w = i; ++d < c; ) {
    f = l[d];
    var C = e[f],
      y = t[f];
    if (r) var x = i ? r(y, C, f, t, e, a) : r(C, y, f, e, t, a);
    if (!(x === void 0 ? C === y || o(C, y, n, r, a) : x)) {
      b = !1;
      break;
    }
    w || (w = f == "constructor");
  }
  if (b && !w) {
    var h = e.constructor,
      g = t.constructor;
    h != g &&
      "constructor" in e &&
      "constructor" in t &&
      !(
        typeof h == "function" &&
        h instanceof h &&
        typeof g == "function" &&
        g instanceof g
      ) &&
      (b = !1);
  }
  return a.delete(e), a.delete(t), b;
}
var G1 = Y1,
  q1 = pn($t, "DataView"),
  ma = q1,
  X1 = pn($t, "Promise"),
  ga = X1,
  Z1 = pn($t, "Set"),
  Pn = Z1,
  Q1 = pn($t, "WeakMap"),
  ya = Q1,
  yu = "[object Map]",
  J1 = "[object Object]",
  bu = "[object Promise]",
  wu = "[object Set]",
  Cu = "[object WeakMap]",
  xu = "[object DataView]",
  ew = vn(ma),
  tw = vn(dr),
  nw = vn(ga),
  rw = vn(Pn),
  ow = vn(ya),
  on = Kn;
((ma && on(new ma(new ArrayBuffer(1))) != xu) ||
  (dr && on(new dr()) != yu) ||
  (ga && on(ga.resolve()) != bu) ||
  (Pn && on(new Pn()) != wu) ||
  (ya && on(new ya()) != Cu)) &&
  (on = function (e) {
    var t = Kn(e),
      n = t == J1 ? e.constructor : void 0,
      r = n ? vn(n) : "";
    if (r)
      switch (r) {
        case ew:
          return xu;
        case tw:
          return yu;
        case nw:
          return bu;
        case rw:
          return wu;
        case ow:
          return Cu;
      }
    return t;
  });
var Su = on,
  aw = 1,
  Ou = "[object Arguments]",
  ku = "[object Array]",
  Dr = "[object Object]",
  iw = Object.prototype,
  Pu = iw.hasOwnProperty;
function lw(e, t, n, r, o, a) {
  var i = Vt(e),
    l = Vt(t),
    c = i ? ku : Su(e),
    u = l ? ku : Su(t);
  (c = c == Ou ? Dr : c), (u = u == Ou ? Dr : u);
  var s = c == Dr,
    d = u == Dr,
    f = c == u;
  if (f && ha(e)) {
    if (!ha(t)) return !1;
    (i = !0), (s = !1);
  }
  if (f && !s)
    return (
      a || (a = new Ro()),
      i || ff(e) ? af(e, t, n, r, o, a) : bb(e, t, c, n, r, o, a)
    );
  if (!(n & aw)) {
    var v = s && Pu.call(e, "__wrapped__"),
      p = d && Pu.call(t, "__wrapped__");
    if (v || p) {
      var b = v ? e.value() : e,
        w = p ? t.value() : t;
      return a || (a = new Ro()), o(b, w, n, r, a);
    }
  }
  return f ? (a || (a = new Ro()), G1(e, t, n, r, o, a)) : !1;
}
var uw = lw;
function df(e, t, n, r, o) {
  return e === t
    ? !0
    : e == null || t == null || (!Nn(e) && !Nn(t))
    ? e !== e && t !== t
    : uw(e, t, n, r, df, o);
}
var cw = df;
function sw(e, t) {
  return cw(e, t);
}
var fw = sw,
  dw = {
    align: Object,
    target: [Object, Function],
    onAlign: Function,
    monitorBufferTime: Number,
    monitorWindowResize: Boolean,
    disabled: Boolean
  };
function Tu(e) {
  return typeof e != "function" ? null : e();
}
function Eu(e) {
  return We(e) !== "object" || !e ? null : e;
}
var vw = de({
    name: "Align",
    props: dw,
    emits: ["align"],
    setup: function (e, t) {
      var n = t.expose,
        r = t.slots,
        o = L({}),
        a = L(),
        i = gy(
          function () {
            var p = e.disabled,
              b = e.target,
              w = e.align,
              C = e.onAlign;
            if (!p && b && a.value) {
              var y = a.value,
                x,
                h = Tu(b),
                g = Eu(b);
              (o.value.element = h), (o.value.point = g), (o.value.align = w);
              var S = document,
                P = S.activeElement;
              return (
                h && py(h) ? (x = gi(y, h, w)) : g && (x = vy(y, g, w)),
                my(P, y),
                C && x && C(y, x),
                !0
              );
            }
            return !1;
          },
          E(function () {
            return e.monitorBufferTime;
          })
        ),
        l = Se(i, 2),
        c = l[0],
        u = l[1],
        s = L({ cancel: function () {} }),
        d = L({ cancel: function () {} }),
        f = function () {
          var p = e.target,
            b = Tu(p),
            w = Eu(p);
          a.value !== d.value.element &&
            (d.value.cancel(),
            (d.value.element = a.value),
            (d.value.cancel = iu(a.value, c))),
            (o.value.element !== b ||
              !hy(o.value.point, w) ||
              !fw(o.value.align, e.align)) &&
              (c(),
              s.value.element !== b &&
                (s.value.cancel(),
                (s.value.element = b),
                (s.value.cancel = iu(b, c))));
        };
      Ue(function () {
        ft(function () {
          f();
        });
      }),
        fn(function () {
          ft(function () {
            f();
          });
        }),
        fe(
          function () {
            return e.disabled;
          },
          function (p) {
            p ? u() : c();
          },
          { immediate: !0, flush: "post" }
        );
      var v = L(null);
      return (
        fe(
          function () {
            return e.monitorWindowResize;
          },
          function (p) {
            p
              ? v.value || (v.value = Yt(window, "resize", c))
              : v.value && (v.value.remove(), (v.value = null));
          },
          { flush: "post" }
        ),
        jn(function () {
          s.value.cancel(), d.value.cancel(), v.value && v.value.remove(), u();
        }),
        n({
          forceAlign: function () {
            return c(!0);
          }
        }),
        function () {
          var p = r == null ? void 0 : r.default();
          return p ? At(p[0], { ref: a }, !0, !0) : null;
        }
      );
    }
  }),
  pw = de({
    name: "PopupInner",
    inheritAttrs: !1,
    props: di,
    emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
    setup: function (e, t) {
      var n = t.expose,
        r = t.attrs,
        o = t.slots,
        a = L(),
        i = L(),
        l = L(),
        c = Bg(Mt(e, "stretch")),
        u = Se(c, 2),
        s = u[0],
        d = u[1],
        f = function () {
          e.stretch && d(e.getRootDomNode());
        },
        v = L(!1),
        p;
      fe(
        function () {
          return e.visible;
        },
        function (M) {
          clearTimeout(p),
            M
              ? (p = setTimeout(function () {
                  v.value = e.visible;
                }))
              : (v.value = !1);
        },
        { immediate: !0 }
      );
      var b = Rg(v, f),
        w = Se(b, 2),
        C = w[0],
        y = w[1],
        x = L(),
        h = function () {
          return e.point ? e.point : e.getRootDomNode;
        },
        g = function () {
          var M;
          (M = a.value) === null || M === void 0 || M.forceAlign();
        },
        S = function (M, q) {
          var B,
            j = e.getClassNameFromAlign(q),
            T = l.value;
          l.value !== j && (l.value = j),
            C.value === "align" &&
              (T !== j
                ? Promise.resolve().then(function () {
                    g();
                  })
                : y(function () {
                    var O;
                    (O = x.value) === null || O === void 0 || O.call(x);
                  }),
              (B = e.onAlign) === null || B === void 0 || B.call(e, M, q));
        },
        P = E(function () {
          var M = We(e.animation) === "object" ? e.animation : Us(e);
          return (
            ["onAfterEnter", "onAfterLeave"].forEach(function (q) {
              var B = M[q];
              M[q] = function (j) {
                y(), (C.value = "stable"), B == null || B(j);
              };
            }),
            M
          );
        }),
        A = function () {
          return new Promise(function (M) {
            x.value = M;
          });
        };
      fe(
        [P, C],
        function () {
          !P.value && C.value === "motion" && y();
        },
        { immediate: !0 }
      ),
        n({
          forceAlign: g,
          getElement: function () {
            return i.value.$el || i.value;
          }
        });
      var R = E(function () {
        var M;
        return !(
          ((M = e.align) === null || M === void 0 ? void 0 : M.points) &&
          (C.value === "align" || C.value === "stable")
        );
      });
      return function () {
        var M,
          q = e.zIndex,
          B = e.align,
          j = e.prefixCls,
          T = e.destroyPopupOnHide,
          O = e.onMouseenter,
          I = e.onMouseleave,
          V = e.onTouchstart,
          D = V === void 0 ? function () {} : V,
          G = e.onMousedown,
          oe = C.value,
          ue = [
            k(k({}, s.value), {
              zIndex: q,
              opacity:
                oe === "motion" || oe === "stable" || !v.value ? null : 0,
              pointerEvents: oe === "stable" ? null : "none"
            }),
            r.style
          ],
          z = It(
            (M = o.default) === null || M === void 0
              ? void 0
              : M.call(o, { visible: e.visible })
          );
        z.length > 1 &&
          (z = m("div", { class: "".concat(j, "-content") }, [z]));
        var N = we(j, r.class, l.value),
          Y = v.value || !e.visible,
          ne = Y ? Cs(P.value.name, P.value) : {};
        return m(mr, X(X({ ref: i }, ne), {}, { onBeforeEnter: A }), {
          default: function () {
            return !T || e.visible
              ? gr(
                  m(
                    vw,
                    {
                      target: h(),
                      key: "popup",
                      ref: a,
                      monitorWindowResize: !0,
                      disabled: R.value,
                      align: B,
                      onAlign: S
                    },
                    {
                      default: function () {
                        return m(
                          "div",
                          X(
                            X(
                              {
                                class: N,
                                onMouseenter: O,
                                onMouseleave: I,
                                onMousedown: Di(G, ["capture"])
                              },
                              U(
                                {},
                                vt ? "onTouchstartPassive" : "onTouchstart",
                                Di(D, ["capture"])
                              )
                            ),
                            {},
                            { style: ue }
                          ),
                          [z]
                        );
                      }
                    }
                  ),
                  [[Fa, v.value]]
                )
              : null;
          }
        });
      };
    }
  }),
  hw = de({
    name: "Popup",
    inheritAttrs: !1,
    props: Dg,
    setup: function (e, t) {
      var n = t.attrs,
        r = t.slots,
        o = t.expose,
        a = L(!1),
        i = L(!1),
        l = L();
      return (
        fe(
          [
            function () {
              return e.visible;
            },
            function () {
              return e.mobile;
            }
          ],
          function () {
            (a.value = e.visible), e.visible && e.mobile && (i.value = !0);
          },
          { immediate: !0, flush: "post" }
        ),
        o({
          forceAlign: function () {
            var c;
            (c = l.value) === null || c === void 0 || c.forceAlign();
          },
          getElement: function () {
            var c;
            return (c = l.value) === null || c === void 0
              ? void 0
              : c.getElement();
          }
        }),
        function () {
          var c = k(k(k({}, e), n), { visible: a.value }),
            u = i.value
              ? m(Kg, X(X({}, c), {}, { mobile: e.mobile, ref: l }), {
                  default: r.default
                })
              : m(pw, X(X({}, c), {}, { ref: l }), { default: r.default });
          return m("div", null, [m(Ys, c, null), u]);
        }
      );
    }
  });
function mw(e, t, n) {
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function Au(e, t, n) {
  var r = e[t] || {};
  return k(k({}, r), n);
}
function gw(e, t, n, r) {
  for (var o = n.points, a = Object.keys(e), i = 0; i < a.length; i += 1) {
    var l = a[i];
    if (mw(e[l].points, o, r)) return "".concat(t, "-placement-").concat(l);
  }
  return "";
}
var yw = {
    methods: {
      setState: function () {
        var e =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = typeof e == "function" ? e(this.$data, this.$props) : e;
        if (this.getDerivedStateFromProps) {
          var r = this.getDerivedStateFromProps(
            Mh(this),
            k(k({}, this.$data), n)
          );
          if (r === null) return;
          n = k(k({}, n), r || {});
        }
        k(this.$data, n),
          this._.isMounted && this.$forceUpdate(),
          ft(function () {
            t && t();
          });
      },
      __emit: function () {
        var e = [].slice.call(arguments, 0),
          t = e[0];
        t = "on".concat(t[0].toUpperCase()).concat(t.substring(1));
        var n = this.$props[t] || this.$attrs[t];
        if (e.length && n)
          if (Array.isArray(n))
            for (var r = 0, o = n.length; r < o; r++)
              n[r].apply(n, Re(e.slice(1)));
          else n.apply(void 0, Re(e.slice(1)));
      }
    }
  },
  bw = Symbol("TriggerContextKey"),
  ww = function () {
    return Qe(bw, { setPortal: function () {}, popPortal: !1 });
  },
  vf = Symbol("PortalContextKey"),
  pf = function (e) {
    var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { inTriggerContext: !0 };
    Ze(vf, {
      inTriggerContext: t.inTriggerContext,
      shouldRender: E(function () {
        var n = e || {},
          r = n.sPopupVisible,
          o = n.popupRef,
          a = n.forceRender,
          i = n.autoDestroy,
          l = !1;
        return (r || o || a) && (l = !0), !r && i && (l = !1), l;
      })
    });
  },
  Cw = function () {
    pf({}, { inTriggerContext: !1 });
    var e = Qe(vf, {
      shouldRender: E(function () {
        return !1;
      }),
      inTriggerContext: !1
    });
    return {
      shouldRender: E(function () {
        return e.shouldRender.value || e.inTriggerContext === !1;
      })
    };
  },
  Nu = de({
    name: "Portal",
    inheritAttrs: !1,
    props: { getContainer: K.func.isRequired, didUpdate: Function },
    setup: function (e, t) {
      var n = t.slots,
        r = !0,
        o,
        a = Cw(),
        i = a.shouldRender;
      kc(function () {
        (r = !1), i.value && (o = e.getContainer());
      });
      var l = fe(i, function () {
        i.value && !o && (o = e.getContainer()), o && l();
      });
      return (
        fn(function () {
          ft(function () {
            var c;
            i.value &&
              ((c = e.didUpdate) === null || c === void 0 || c.call(e, e));
          });
        }),
        rt(function () {
          o && o.parentNode && o.parentNode.removeChild(o);
        }),
        function () {
          var c;
          return i.value
            ? r
              ? (c = n.default) === null || c === void 0
                ? void 0
                : c.call(n)
              : o
              ? m(ja, { to: o }, n)
              : null
            : null;
        }
      );
    }
  });
function Mu() {}
function xw() {
  return "";
}
function Sw(e) {
  return e ? e.ownerDocument : window.document;
}
var Ow = [
    "onClick",
    "onMousedown",
    "onTouchstart",
    "onMouseenter",
    "onMouseleave",
    "onFocus",
    "onBlur",
    "onContextmenu"
  ],
  kw = de({
    name: "Trigger",
    mixins: [yw],
    inheritAttrs: !1,
    props: {
      action: K.oneOfType([K.string, K.arrayOf(K.string)]).def([]),
      showAction: K.any.def([]),
      hideAction: K.any.def([]),
      getPopupClassNameFromAlign: K.any.def(xw),
      onPopupVisibleChange: Function,
      afterPopupVisibleChange: K.func.def(Mu),
      popup: K.any,
      popupStyle: { type: Object, default: void 0 },
      prefixCls: K.string.def("rc-trigger-popup"),
      popupClassName: K.string.def(""),
      popupPlacement: String,
      builtinPlacements: K.object,
      popupTransitionName: String,
      popupAnimation: K.any,
      mouseEnterDelay: K.number.def(0),
      mouseLeaveDelay: K.number.def(0.1),
      zIndex: Number,
      focusDelay: K.number.def(0),
      blurDelay: K.number.def(0.15),
      getPopupContainer: Function,
      getDocument: K.func.def(Sw),
      forceRender: { type: Boolean, default: void 0 },
      destroyPopupOnHide: { type: Boolean, default: !1 },
      mask: { type: Boolean, default: !1 },
      maskClosable: { type: Boolean, default: !0 },
      popupAlign: K.object.def(function () {
        return {};
      }),
      popupVisible: { type: Boolean, default: void 0 },
      defaultPopupVisible: { type: Boolean, default: !1 },
      maskTransitionName: String,
      maskAnimation: String,
      stretch: String,
      alignPoint: { type: Boolean, default: void 0 },
      autoDestroy: { type: Boolean, default: !1 },
      mobile: Object,
      getTriggerDOMNode: Function
    },
    setup: function (e) {
      var t = E(function () {
          var l = e.popupPlacement,
            c = e.popupAlign,
            u = e.builtinPlacements;
          return l && u ? Au(u, l, c) : c;
        }),
        n = ww(),
        r = n.setPortal,
        o = n.popPortal,
        a = L(null),
        i = function (l) {
          a.value = l;
        };
      return {
        popPortal: o,
        setPortal: r,
        vcTriggerContext: Qe("vcTriggerContext", {}),
        popupRef: a,
        setPopupRef: i,
        triggerRef: L(null),
        align: t,
        focusTime: null,
        clickOutsideHandler: null,
        contextmenuOutsideHandler1: null,
        contextmenuOutsideHandler2: null,
        touchOutsideHandler: null,
        attachId: null,
        delayTimer: null,
        hasPopupMouseDown: !1,
        preClickTime: null,
        preTouchTime: null,
        mouseDownTimeout: null,
        childOriginEvents: {}
      };
    },
    data: function () {
      var e = this,
        t,
        n,
        r = this.$props,
        o;
      return (
        this.popupVisible !== void 0
          ? (o = !!r.popupVisible)
          : (o = !!r.defaultPopupVisible),
        Ow.forEach(function (a) {
          e["fire".concat(a)] = function (i) {
            e.fireEvents(a, i);
          };
        }),
        (n = (t = this).setPortal) === null ||
          n === void 0 ||
          n.call(
            t,
            m(
              Nu,
              {
                key: "portal",
                getContainer: this.getContainer,
                didUpdate: this.handlePortalUpdate
              },
              { default: this.getComponent }
            )
          ),
        { prevPopupVisible: o, sPopupVisible: o, point: null }
      );
    },
    watch: {
      popupVisible: function (e) {
        e !== void 0 &&
          ((this.prevPopupVisible = this.sPopupVisible),
          (this.sPopupVisible = e));
      }
    },
    created: function () {
      Ze("vcTriggerContext", { onPopupMouseDown: this.onPopupMouseDown }),
        pf(this);
    },
    deactivated: function () {
      this.setPopupVisible(!1);
    },
    mounted: function () {
      var e = this;
      this.$nextTick(function () {
        e.updatedCal();
      });
    },
    updated: function () {
      var e = this;
      this.$nextTick(function () {
        e.updatedCal();
      });
    },
    beforeUnmount: function () {
      this.clearDelayTimer(),
        this.clearOutsideHandler(),
        clearTimeout(this.mouseDownTimeout),
        Be.cancel(this.attachId);
    },
    methods: {
      updatedCal: function () {
        var e = this.$props,
          t = this.$data;
        if (t.sPopupVisible) {
          var n;
          !this.clickOutsideHandler &&
            (this.isClickToHide() || this.isContextmenuToShow()) &&
            ((n = e.getDocument(this.getRootDomNode())),
            (this.clickOutsideHandler = Yt(
              n,
              "mousedown",
              this.onDocumentClick
            ))),
            this.touchOutsideHandler ||
              ((n = n || e.getDocument(this.getRootDomNode())),
              (this.touchOutsideHandler = Yt(
                n,
                "touchstart",
                this.onDocumentClick,
                vt ? { passive: !1 } : !1
              ))),
            !this.contextmenuOutsideHandler1 &&
              this.isContextmenuToShow() &&
              ((n = n || e.getDocument(this.getRootDomNode())),
              (this.contextmenuOutsideHandler1 = Yt(
                n,
                "scroll",
                this.onContextmenuClose
              ))),
            !this.contextmenuOutsideHandler2 &&
              this.isContextmenuToShow() &&
              (this.contextmenuOutsideHandler2 = Yt(
                window,
                "blur",
                this.onContextmenuClose
              ));
        } else this.clearOutsideHandler();
      },
      onMouseenter: function (e) {
        var t = this.$props.mouseEnterDelay;
        this.fireEvents("onMouseenter", e),
          this.delaySetPopupVisible(!0, t, t ? null : e);
      },
      onMouseMove: function (e) {
        this.fireEvents("onMousemove", e), this.setPoint(e);
      },
      onMouseleave: function (e) {
        this.fireEvents("onMouseleave", e),
          this.delaySetPopupVisible(!1, this.$props.mouseLeaveDelay);
      },
      onPopupMouseenter: function () {
        this.clearDelayTimer();
      },
      onPopupMouseleave: function (e) {
        var t;
        (e &&
          e.relatedTarget &&
          !e.relatedTarget.setTimeout &&
          wn(
            (t = this.popupRef) === null || t === void 0
              ? void 0
              : t.getElement(),
            e.relatedTarget
          )) ||
          this.delaySetPopupVisible(!1, this.$props.mouseLeaveDelay);
      },
      onFocus: function (e) {
        this.fireEvents("onFocus", e),
          this.clearDelayTimer(),
          this.isFocusToShow() &&
            ((this.focusTime = Date.now()),
            this.delaySetPopupVisible(!0, this.$props.focusDelay));
      },
      onMousedown: function (e) {
        this.fireEvents("onMousedown", e), (this.preClickTime = Date.now());
      },
      onTouchstart: function (e) {
        this.fireEvents("onTouchstart", e), (this.preTouchTime = Date.now());
      },
      onBlur: function (e) {
        wn(e.target, e.relatedTarget || document.activeElement) ||
          (this.fireEvents("onBlur", e),
          this.clearDelayTimer(),
          this.isBlurToHide() &&
            this.delaySetPopupVisible(!1, this.$props.blurDelay));
      },
      onContextmenu: function (e) {
        e.preventDefault(),
          this.fireEvents("onContextmenu", e),
          this.setPopupVisible(!0, e);
      },
      onContextmenuClose: function () {
        this.isContextmenuToShow() && this.close();
      },
      onClick: function (e) {
        if ((this.fireEvents("onClick", e), this.focusTime)) {
          var t;
          if (
            (this.preClickTime && this.preTouchTime
              ? (t = Math.min(this.preClickTime, this.preTouchTime))
              : this.preClickTime
              ? (t = this.preClickTime)
              : this.preTouchTime && (t = this.preTouchTime),
            Math.abs(t - this.focusTime) < 20)
          )
            return;
          this.focusTime = 0;
        }
        (this.preClickTime = 0),
          (this.preTouchTime = 0),
          this.isClickToShow() &&
            (this.isClickToHide() || this.isBlurToHide()) &&
            e &&
            e.preventDefault &&
            e.preventDefault(),
          e && e.domEvent && e.domEvent.preventDefault();
        var n = !this.$data.sPopupVisible;
        ((this.isClickToHide() && !n) || (n && this.isClickToShow())) &&
          this.setPopupVisible(!this.$data.sPopupVisible, e);
      },
      onPopupMouseDown: function () {
        var e = this,
          t = this.vcTriggerContext,
          n = t === void 0 ? {} : t;
        (this.hasPopupMouseDown = !0),
          clearTimeout(this.mouseDownTimeout),
          (this.mouseDownTimeout = setTimeout(function () {
            e.hasPopupMouseDown = !1;
          }, 0)),
          n.onPopupMouseDown && n.onPopupMouseDown.apply(n, arguments);
      },
      onDocumentClick: function (e) {
        if (!(this.$props.mask && !this.$props.maskClosable)) {
          var t = e.target,
            n = this.getRootDomNode(),
            r = this.getPopupDomNode();
          (!wn(n, t) || this.isContextMenuOnly()) &&
            !wn(r, t) &&
            !this.hasPopupMouseDown &&
            this.delaySetPopupVisible(!1, 0.1);
        }
      },
      getPopupDomNode: function () {
        var e;
        return (
          ((e = this.popupRef) === null || e === void 0
            ? void 0
            : e.getElement()) || null
        );
      },
      getRootDomNode: function () {
        var e = this.$props.getTriggerDOMNode;
        if (e) return e(this.triggerRef);
        try {
          var t = lr(this.triggerRef);
          if (t) return t;
        } catch {}
        return lr(this);
      },
      handleGetPopupClassFromAlign: function (e) {
        var t = [],
          n = this.$props,
          r = n.popupPlacement,
          o = n.builtinPlacements,
          a = n.prefixCls,
          i = n.alignPoint,
          l = n.getPopupClassNameFromAlign;
        return r && o && t.push(gw(o, a, e, i)), l && t.push(l(e)), t.join(" ");
      },
      getPopupAlign: function () {
        var e = this.$props,
          t = e.popupPlacement,
          n = e.popupAlign,
          r = e.builtinPlacements;
        return t && r ? Au(r, t, n) : n;
      },
      getComponent: function () {
        var e = this,
          t = {};
        this.isMouseEnterToShow() && (t.onMouseenter = this.onPopupMouseenter),
          this.isMouseLeaveToHide() &&
            (t.onMouseleave = this.onPopupMouseleave),
          (t.onMousedown = this.onPopupMouseDown),
          (t[vt ? "onTouchstartPassive" : "onTouchstart"] =
            this.onPopupMouseDown);
        var n = this.handleGetPopupClassFromAlign,
          r = this.getRootDomNode,
          o = this.getContainer,
          a = this.$attrs,
          i = this.$props,
          l = i.prefixCls,
          c = i.destroyPopupOnHide,
          u = i.popupClassName,
          s = i.popupAnimation,
          d = i.popupTransitionName,
          f = i.popupStyle,
          v = i.mask,
          p = i.maskAnimation,
          b = i.maskTransitionName,
          w = i.zIndex,
          C = i.stretch,
          y = i.alignPoint,
          x = i.mobile,
          h = i.forceRender,
          g = this.$data,
          S = g.sPopupVisible,
          P = g.point,
          A = k(
            k(
              {
                prefixCls: l,
                destroyPopupOnHide: c,
                visible: S,
                point: y ? P : null,
                align: this.align,
                animation: s,
                getClassNameFromAlign: n,
                stretch: C,
                getRootDomNode: r,
                mask: v,
                zIndex: w,
                transitionName: d,
                maskAnimation: p,
                maskTransitionName: b,
                getContainer: o,
                class: u,
                style: f,
                onAlign: a.onPopupAlign || Mu
              },
              t
            ),
            { ref: this.setPopupRef, mobile: x, forceRender: h }
          );
        return m(hw, A, {
          default:
            this.$slots.popup ||
            function () {
              return Ih(e, "popup");
            }
        });
      },
      attachParent: function (e) {
        var t = this;
        Be.cancel(this.attachId);
        var n = this.$props,
          r = n.getPopupContainer,
          o = n.getDocument,
          a = this.getRootDomNode(),
          i;
        r
          ? (a || r.length === 0) && (i = r(a))
          : (i = o(this.getRootDomNode()).body),
          i
            ? i.appendChild(e)
            : (this.attachId = Be(function () {
                t.attachParent(e);
              }));
      },
      getContainer: function () {
        var e = this.$props,
          t = e.getDocument,
          n = t(this.getRootDomNode()).createElement("div");
        return (
          (n.style.position = "absolute"),
          (n.style.top = "0"),
          (n.style.left = "0"),
          (n.style.width = "100%"),
          this.attachParent(n),
          n
        );
      },
      setPopupVisible: function (e, t) {
        var n = this.alignPoint,
          r = this.sPopupVisible,
          o = this.onPopupVisibleChange;
        this.clearDelayTimer(),
          r !== e &&
            (Ah(this, "popupVisible") ||
              this.setState({ sPopupVisible: e, prevPopupVisible: r }),
            o && o(e)),
          n && t && e && this.setPoint(t);
      },
      setPoint: function (e) {
        var t = this.$props.alignPoint;
        !t ||
          !e ||
          this.setState({ point: { pageX: e.pageX, pageY: e.pageY } });
      },
      handlePortalUpdate: function () {
        this.prevPopupVisible !== this.sPopupVisible &&
          this.afterPopupVisibleChange(this.sPopupVisible);
      },
      delaySetPopupVisible: function (e, t, n) {
        var r = this,
          o = t * 1e3;
        if ((this.clearDelayTimer(), o)) {
          var a = n ? { pageX: n.pageX, pageY: n.pageY } : null;
          this.delayTimer = jg(function () {
            r.setPopupVisible(e, a), r.clearDelayTimer();
          }, o);
        } else this.setPopupVisible(e, n);
      },
      clearDelayTimer: function () {
        this.delayTimer && (_g(this.delayTimer), (this.delayTimer = null));
      },
      clearOutsideHandler: function () {
        this.clickOutsideHandler &&
          (this.clickOutsideHandler.remove(),
          (this.clickOutsideHandler = null)),
          this.contextmenuOutsideHandler1 &&
            (this.contextmenuOutsideHandler1.remove(),
            (this.contextmenuOutsideHandler1 = null)),
          this.contextmenuOutsideHandler2 &&
            (this.contextmenuOutsideHandler2.remove(),
            (this.contextmenuOutsideHandler2 = null)),
          this.touchOutsideHandler &&
            (this.touchOutsideHandler.remove(),
            (this.touchOutsideHandler = null));
      },
      createTwoChains: function (e) {
        var t = function () {},
          n = yl(this);
        return this.childOriginEvents[e] && n[e]
          ? this["fire".concat(e)]
          : ((t = this.childOriginEvents[e] || n[e] || t), t);
      },
      isClickToShow: function () {
        var e = this.$props,
          t = e.action,
          n = e.showAction;
        return t.indexOf("click") !== -1 || n.indexOf("click") !== -1;
      },
      isContextMenuOnly: function () {
        var e = this.$props.action;
        return (
          e === "contextmenu" || (e.length === 1 && e[0] === "contextmenu")
        );
      },
      isContextmenuToShow: function () {
        var e = this.$props,
          t = e.action,
          n = e.showAction;
        return (
          t.indexOf("contextmenu") !== -1 || n.indexOf("contextmenu") !== -1
        );
      },
      isClickToHide: function () {
        var e = this.$props,
          t = e.action,
          n = e.hideAction;
        return t.indexOf("click") !== -1 || n.indexOf("click") !== -1;
      },
      isMouseEnterToShow: function () {
        var e = this.$props,
          t = e.action,
          n = e.showAction;
        return t.indexOf("hover") !== -1 || n.indexOf("mouseenter") !== -1;
      },
      isMouseLeaveToHide: function () {
        var e = this.$props,
          t = e.action,
          n = e.hideAction;
        return t.indexOf("hover") !== -1 || n.indexOf("mouseleave") !== -1;
      },
      isFocusToShow: function () {
        var e = this.$props,
          t = e.action,
          n = e.showAction;
        return t.indexOf("focus") !== -1 || n.indexOf("focus") !== -1;
      },
      isBlurToHide: function () {
        var e = this.$props,
          t = e.action,
          n = e.hideAction;
        return t.indexOf("focus") !== -1 || n.indexOf("blur") !== -1;
      },
      forcePopupAlign: function () {
        var e;
        this.$data.sPopupVisible &&
          ((e = this.popupRef) === null || e === void 0 || e.forceAlign());
      },
      fireEvents: function (e, t) {
        this.childOriginEvents[e] && this.childOriginEvents[e](t);
        var n = this.$props[e] || this.$attrs[e];
        n && n(t);
      },
      close: function () {
        this.setPopupVisible(!1);
      }
    },
    render: function () {
      var e = this,
        t = this.$attrs,
        n = Ln(Nh(this)),
        r = this.$props.alignPoint,
        o = n[0];
      this.childOriginEvents = yl(o);
      var a = { key: "trigger" };
      this.isContextmenuToShow()
        ? (a.onContextmenu = this.onContextmenu)
        : (a.onContextmenu = this.createTwoChains("onContextmenu")),
        this.isClickToHide() || this.isClickToShow()
          ? ((a.onClick = this.onClick),
            (a.onMousedown = this.onMousedown),
            (a[vt ? "onTouchstartPassive" : "onTouchstart"] =
              this.onTouchstart))
          : ((a.onClick = this.createTwoChains("onClick")),
            (a.onMousedown = this.createTwoChains("onMousedown")),
            (a[vt ? "onTouchstartPassive" : "onTouchstart"] =
              this.createTwoChains("onTouchstart"))),
        this.isMouseEnterToShow()
          ? ((a.onMouseenter = this.onMouseenter),
            r && (a.onMousemove = this.onMouseMove))
          : (a.onMouseenter = this.createTwoChains("onMouseenter")),
        this.isMouseLeaveToHide()
          ? (a.onMouseleave = this.onMouseleave)
          : (a.onMouseleave = this.createTwoChains("onMouseleave")),
        this.isFocusToShow() || this.isBlurToHide()
          ? ((a.onFocus = this.onFocus), (a.onBlur = this.onBlur))
          : ((a.onFocus = this.createTwoChains("onFocus")),
            (a.onBlur = function (u) {
              u &&
                (!u.relatedTarget || !wn(u.target, u.relatedTarget)) &&
                e.createTwoChains("onBlur")(u);
            }));
      var i = we(o && o.props && o.props.class, t.class);
      i && (a.class = i);
      var l = At(o, k(k({}, a), { ref: "triggerRef" }), !0, !0);
      if (this.popPortal) return l;
      var c = m(
        Nu,
        {
          key: "portal",
          getContainer: this.getContainer,
          didUpdate: this.handlePortalUpdate
        },
        { default: this.getComponent }
      );
      return m(wt, null, [c, l]);
    }
  }),
  vo = kw,
  Pw = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  },
  Tw = function (e) {
    var t = e === !0 ? 0 : 1;
    return {
      bottomLeft: {
        points: ["tl", "bl"],
        offset: [0, 4],
        overflow: { adjustX: t, adjustY: 1 }
      },
      bottomRight: {
        points: ["tr", "br"],
        offset: [0, 4],
        overflow: { adjustX: t, adjustY: 1 }
      },
      topLeft: {
        points: ["bl", "tl"],
        offset: [0, -4],
        overflow: { adjustX: t, adjustY: 1 }
      },
      topRight: {
        points: ["br", "tr"],
        offset: [0, -4],
        overflow: { adjustX: t, adjustY: 1 }
      }
    };
  },
  Ew = de({
    name: "SelectTrigger",
    inheritAttrs: !1,
    props: {
      dropdownAlign: Object,
      visible: { type: Boolean, default: void 0 },
      disabled: { type: Boolean, default: void 0 },
      dropdownClassName: String,
      dropdownStyle: K.object,
      placement: String,
      empty: { type: Boolean, default: void 0 },
      prefixCls: String,
      popupClassName: String,
      animation: String,
      transitionName: String,
      getPopupContainer: Function,
      dropdownRender: Function,
      containerWidth: Number,
      dropdownMatchSelectWidth: K.oneOfType([Number, Boolean]).def(!0),
      popupElement: K.any,
      direction: String,
      getTriggerDOMNode: Function,
      onPopupVisibleChange: Function,
      onPopupMouseEnter: Function
    },
    setup: function (e, t) {
      var n = t.slots,
        r = t.attrs,
        o = t.expose,
        a = E(function () {
          var l = e.dropdownMatchSelectWidth;
          return Tw(l);
        }),
        i = L();
      return (
        o({
          getPopupElement: function () {
            return i.value;
          }
        }),
        function () {
          var l = k(k({}, e), r),
            c = l.empty,
            u = c === void 0 ? !1 : c,
            s = Pw(l, ["empty"]),
            d = s.visible,
            f = s.dropdownAlign,
            v = s.prefixCls,
            p = s.popupElement,
            b = s.dropdownClassName,
            w = s.dropdownStyle,
            C = s.direction,
            y = C === void 0 ? "ltr" : C,
            x = s.placement,
            h = s.dropdownMatchSelectWidth,
            g = s.containerWidth,
            S = s.dropdownRender,
            P = s.animation,
            A = s.transitionName,
            R = s.getPopupContainer,
            M = s.getTriggerDOMNode,
            q = s.onPopupVisibleChange,
            B = s.onPopupMouseEnter,
            j = "".concat(v, "-dropdown"),
            T = p;
          S && (T = S({ menuNode: p, props: e }));
          var O = P ? "".concat(j, "-").concat(P) : A,
            I = k({ minWidth: "".concat(g, "px") }, w);
          return (
            typeof h == "number"
              ? (I.width = "".concat(h, "px"))
              : h && (I.width = "".concat(g, "px")),
            m(
              vo,
              X(
                X({}, e),
                {},
                {
                  showAction: q ? ["click"] : [],
                  hideAction: q ? ["click"] : [],
                  popupPlacement:
                    x || (y === "rtl" ? "bottomRight" : "bottomLeft"),
                  builtinPlacements: a.value,
                  prefixCls: j,
                  popupTransitionName: O,
                  popupAlign: f,
                  popupVisible: d,
                  getPopupContainer: R,
                  popupClassName: we(b, U({}, "".concat(j, "-empty"), u)),
                  popupStyle: I,
                  getTriggerDOMNode: M,
                  onPopupVisibleChange: q
                }
              ),
              {
                default: n.default,
                popup: function () {
                  return m("div", { ref: i, onMouseenter: B }, [T]);
                }
              }
            )
          );
        }
      );
    }
  }),
  Aw = Ew,
  be = {
    MAC_ENTER: 3,
    BACKSPACE: 8,
    TAB: 9,
    NUM_CENTER: 12,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    PAUSE: 19,
    CAPS_LOCK: 20,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    PRINT_SCREEN: 44,
    INSERT: 45,
    DELETE: 46,
    ZERO: 48,
    ONE: 49,
    TWO: 50,
    THREE: 51,
    FOUR: 52,
    FIVE: 53,
    SIX: 54,
    SEVEN: 55,
    EIGHT: 56,
    NINE: 57,
    QUESTION_MARK: 63,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    META: 91,
    WIN_KEY_RIGHT: 92,
    CONTEXT_MENU: 93,
    NUM_ZERO: 96,
    NUM_ONE: 97,
    NUM_TWO: 98,
    NUM_THREE: 99,
    NUM_FOUR: 100,
    NUM_FIVE: 101,
    NUM_SIX: 102,
    NUM_SEVEN: 103,
    NUM_EIGHT: 104,
    NUM_NINE: 105,
    NUM_MULTIPLY: 106,
    NUM_PLUS: 107,
    NUM_MINUS: 109,
    NUM_PERIOD: 110,
    NUM_DIVISION: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    NUMLOCK: 144,
    SEMICOLON: 186,
    DASH: 189,
    EQUALS: 187,
    COMMA: 188,
    PERIOD: 190,
    SLASH: 191,
    APOSTROPHE: 192,
    SINGLE_QUOTE: 222,
    OPEN_SQUARE_BRACKET: 219,
    BACKSLASH: 220,
    CLOSE_SQUARE_BRACKET: 221,
    WIN_KEY: 224,
    MAC_FF_META: 224,
    WIN_IME: 229,
    isTextModifyingKeyEvent: function (e) {
      var t = e.keyCode;
      if ((e.altKey && !e.ctrlKey) || e.metaKey || (t >= be.F1 && t <= be.F12))
        return !1;
      switch (t) {
        case be.ALT:
        case be.CAPS_LOCK:
        case be.CONTEXT_MENU:
        case be.CTRL:
        case be.DOWN:
        case be.END:
        case be.ESC:
        case be.HOME:
        case be.INSERT:
        case be.LEFT:
        case be.MAC_FF_META:
        case be.META:
        case be.NUMLOCK:
        case be.NUM_CENTER:
        case be.PAGE_DOWN:
        case be.PAGE_UP:
        case be.PAUSE:
        case be.PRINT_SCREEN:
        case be.RIGHT:
        case be.SHIFT:
        case be.UP:
        case be.WIN_KEY:
        case be.WIN_KEY_RIGHT:
          return !1;
        default:
          return !0;
      }
    },
    isCharacterKey: function (e) {
      if (
        (e >= be.ZERO && e <= be.NINE) ||
        (e >= be.NUM_ZERO && e <= be.NUM_MULTIPLY) ||
        (e >= be.A && e <= be.Z) ||
        (window.navigator.userAgent.indexOf("WebKit") !== -1 && e === 0)
      )
        return !0;
      switch (e) {
        case be.SPACE:
        case be.QUESTION_MARK:
        case be.NUM_PLUS:
        case be.NUM_MINUS:
        case be.NUM_PERIOD:
        case be.NUM_DIVISION:
        case be.SEMICOLON:
        case be.DASH:
        case be.EQUALS:
        case be.COMMA:
        case be.PERIOD:
        case be.SLASH:
        case be.APOSTROPHE:
        case be.SINGLE_QUOTE:
        case be.OPEN_SQUARE_BRACKET:
        case be.BACKSLASH:
        case be.CLOSE_SQUARE_BRACKET:
          return !0;
        default:
          return !1;
      }
    }
  },
  he = be,
  po = function (e, t) {
    var n = t.slots,
      r,
      o = e.class,
      a = e.customizeIcon,
      i = e.customizeIconProps,
      l = e.onMousedown,
      c = e.onClick,
      u;
    return (
      typeof a == "function" ? (u = a(i)) : (u = a),
      m(
        "span",
        {
          class: o,
          onMousedown: function (s) {
            s.preventDefault(), l && l(s);
          },
          style: { userSelect: "none", WebkitUserSelect: "none" },
          unselectable: "on",
          onClick: c,
          "aria-hidden": !0
        },
        [
          u !== void 0
            ? u
            : m(
                "span",
                {
                  class: o.split(/\s+/).map(function (s) {
                    return "".concat(s, "-icon");
                  })
                },
                [(r = n.default) === null || r === void 0 ? void 0 : r.call(n)]
              )
        ]
      )
    );
  };
po.inheritAttrs = !1;
po.displayName = "TransBtn";
po.props = {
  class: String,
  customizeIcon: K.any,
  customizeIconProps: K.any,
  onMousedown: Function,
  onClick: Function
};
var ba = po;
function Nw(e) {
  e.target.composing = !0;
}
function Iu(e) {
  !e.target.composing || ((e.target.composing = !1), Mw(e.target, "input"));
}
function Mw(e, t) {
  var n = document.createEvent("HTMLEvents");
  n.initEvent(t, !0, !0), e.dispatchEvent(n);
}
function Vo(e, t, n, r) {
  e.addEventListener(t, n, r);
}
var Iw = {
    created: function (e, t) {
      (!t.modifiers || !t.modifiers.lazy) &&
        (Vo(e, "compositionstart", Nw),
        Vo(e, "compositionend", Iu),
        Vo(e, "change", Iu));
    }
  },
  _w = Iw,
  jw = {
    inputRef: K.any,
    prefixCls: String,
    id: String,
    inputElement: K.VueNode,
    disabled: { type: Boolean, default: void 0 },
    autofocus: { type: Boolean, default: void 0 },
    autocomplete: String,
    editable: { type: Boolean, default: void 0 },
    activeDescendantId: String,
    value: String,
    open: { type: Boolean, default: void 0 },
    tabindex: K.oneOfType([K.number, K.string]),
    attrs: K.object,
    onKeydown: { type: Function },
    onMousedown: { type: Function },
    onChange: { type: Function },
    onPaste: { type: Function },
    onCompositionstart: { type: Function },
    onCompositionend: { type: Function },
    onFocus: { type: Function },
    onBlur: { type: Function }
  },
  Fw = de({
    name: "Input",
    inheritAttrs: !1,
    props: jw,
    setup: function (e) {
      var t = null,
        n = Qe("VCSelectContainerEvent");
      return function () {
        var r,
          o = e.prefixCls,
          a = e.id,
          i = e.inputElement,
          l = e.disabled,
          c = e.tabindex,
          u = e.autofocus,
          s = e.autocomplete,
          d = e.editable,
          f = e.activeDescendantId,
          v = e.value,
          p = e.onKeydown,
          b = e.onMousedown,
          w = e.onChange,
          C = e.onPaste,
          y = e.onCompositionstart,
          x = e.onCompositionend,
          h = e.onFocus,
          g = e.onBlur,
          S = e.open,
          P = e.inputRef,
          A = e.attrs,
          R = i || gr(m("input", null, null), [[_w]]),
          M = R.props || {},
          q = M.onKeydown,
          B = M.onInput,
          j = M.onFocus,
          T = M.onBlur,
          O = M.onMousedown,
          I = M.onCompositionstart,
          V = M.onCompositionend,
          D = M.style;
        return (
          (R = At(
            R,
            k(
              k(
                k(
                  k(k({ type: "search" }, M), {
                    id: a,
                    ref: P,
                    disabled: l,
                    tabindex: c,
                    autocomplete: s || "off",
                    autofocus: u,
                    class: we(
                      "".concat(o, "-selection-search-input"),
                      (r = R == null ? void 0 : R.props) === null ||
                        r === void 0
                        ? void 0
                        : r.class
                    ),
                    role: "combobox",
                    "aria-expanded": S,
                    "aria-haspopup": "listbox",
                    "aria-owns": "".concat(a, "_list"),
                    "aria-autocomplete": "list",
                    "aria-controls": "".concat(a, "_list"),
                    "aria-activedescendant": f
                  }),
                  A
                ),
                {
                  value: d ? v : "",
                  readonly: !d,
                  unselectable: d ? null : "on",
                  style: k(k({}, D), { opacity: d ? null : 0 }),
                  onKeydown: function (G) {
                    p(G), q && q(G);
                  },
                  onMousedown: function (G) {
                    b(G), O && O(G);
                  },
                  onInput: function (G) {
                    w(G), B && B(G);
                  },
                  onCompositionstart: function (G) {
                    y(G), I && I(G);
                  },
                  onCompositionend: function (G) {
                    x(G), V && V(G);
                  },
                  onPaste: C,
                  onFocus: function () {
                    clearTimeout(t),
                      j && j(arguments.length <= 0 ? void 0 : arguments[0]),
                      h && h(arguments.length <= 0 ? void 0 : arguments[0]),
                      n == null ||
                        n.focus(arguments.length <= 0 ? void 0 : arguments[0]);
                  },
                  onBlur: function () {
                    for (
                      var G = arguments.length, oe = new Array(G), ue = 0;
                      ue < G;
                      ue++
                    )
                      oe[ue] = arguments[ue];
                    t = setTimeout(function () {
                      T && T(oe[0]), g && g(oe[0]), n == null || n.blur(oe[0]);
                    }, 100);
                  }
                }
              ),
              R.type === "textarea" ? {} : { type: "search" }
            ),
            !0,
            !0
          )),
          R
        );
      };
    }
  }),
  hf = Fw,
  Dw = `accept acceptcharset accesskey action allowfullscreen allowtransparency
alt async autocomplete autofocus autoplay capture cellpadding cellspacing challenge
charset checked classid classname colspan cols content contenteditable contextmenu
controls coords crossorigin data datetime default defer dir disabled download draggable
enctype form formaction formenctype formmethod formnovalidate formtarget frameborder
headers height hidden high href hreflang htmlfor for httpequiv icon id inputmode integrity
is keyparams keytype kind label lang list loop low manifest marginheight marginwidth max maxlength media
mediagroup method min minlength multiple muted name novalidate nonce open
optimum pattern placeholder poster preload radiogroup readonly rel required
reversed role rowspan rows sandbox scope scoped scrolling seamless selected
shape size sizes span spellcheck src srcdoc srclang srcset start step style
summary tabindex target title type usemap value width wmode wrap`,
  Kw = `onCopy onCut onPaste onCompositionend onCompositionstart onCompositionupdate onKeydown
    onKeypress onKeyup onFocus onBlur onChange onInput onSubmit onClick onContextmenu onDoubleclick onDblclick
    onDrag onDragend onDragenter onDragexit onDragleave onDragover onDragstart onDrop onMousedown
    onMouseenter onMouseleave onMousemove onMouseout onMouseover onMouseup onSelect onTouchcancel
    onTouchend onTouchmove onTouchstart onTouchstartPassive onTouchmovePassive onScroll onWheel onAbort onCanplay onCanplaythrough
    onDurationchange onEmptied onEncrypted onEnded onError onLoadeddata onLoadedmetadata
    onLoadstart onPause onPlay onPlaying onProgress onRatechange onSeeked onSeeking onStalled onSuspend onTimeupdate onVolumechange onWaiting onLoad onError`,
  _u = ""
    .concat(Dw, " ")
    .concat(Kw)
    .split(/[\s\n]+/),
  Lw = "aria-",
  Rw = "data-";
function ju(e, t) {
  return e.indexOf(t) === 0;
}
function ho(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    n;
  t === !1
    ? (n = { aria: !0, data: !0, attr: !0 })
    : t === !0
    ? (n = { aria: !0 })
    : (n = k({}, t));
  var r = {};
  return (
    Object.keys(e).forEach(function (o) {
      ((n.aria && (o === "role" || ju(o, Lw))) ||
        (n.data && ju(o, Rw)) ||
        (n.attr && (_u.includes(o) || _u.includes(o.toLowerCase())))) &&
        (r[o] = e[o]);
    }),
    r
  );
}
var mf = Symbol("OverflowContextProviderKey"),
  wa = de({
    name: "OverflowContextProvider",
    inheritAttrs: !1,
    props: { value: { type: Object } },
    setup: function (e, t) {
      var n = t.slots;
      return (
        Ze(
          mf,
          E(function () {
            return e.value;
          })
        ),
        function () {
          var r;
          return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
        }
      );
    }
  }),
  Bw = function () {
    return Qe(
      mf,
      E(function () {
        return null;
      })
    );
  },
  Hw = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  },
  mn = void 0,
  $r = de({
    name: "Item",
    props: {
      prefixCls: String,
      item: K.any,
      renderItem: Function,
      responsive: Boolean,
      itemKey: { type: [String, Number] },
      registerSize: Function,
      display: Boolean,
      order: Number,
      component: K.any,
      invalidate: Boolean
    },
    setup: function (e, t) {
      var n = t.slots,
        r = t.expose,
        o = E(function () {
          return e.responsive && !e.display;
        }),
        a = L();
      r({ itemNodeRef: a });
      function i(l) {
        e.registerSize(e.itemKey, l);
      }
      return (
        jn(function () {
          i(null);
        }),
        function () {
          var l,
            c = e.prefixCls,
            u = e.invalidate,
            s = e.item,
            d = e.renderItem,
            f = e.responsive;
          e.registerSize, e.itemKey, e.display;
          var v = e.order,
            p = e.component,
            b = p === void 0 ? "div" : p,
            w = Hw(e, [
              "prefixCls",
              "invalidate",
              "item",
              "renderItem",
              "responsive",
              "registerSize",
              "itemKey",
              "display",
              "order",
              "component"
            ]),
            C = (l = n.default) === null || l === void 0 ? void 0 : l.call(n),
            y = d && s !== mn ? d(s) : C,
            x;
          u ||
            (x = {
              opacity: o.value ? 0 : 1,
              height: o.value ? 0 : mn,
              overflowY: o.value ? "hidden" : mn,
              order: f ? v : mn,
              pointerEvents: o.value ? "none" : mn,
              position: o.value ? "absolute" : mn
            });
          var h = {};
          return (
            o.value && (h["aria-hidden"] = !0),
            m(
              Mn,
              {
                disabled: !f,
                onResize: function (g) {
                  var S = g.offsetWidth;
                  i(S);
                }
              },
              {
                default: function () {
                  return m(
                    b,
                    X(
                      X(X({ class: we(!u && c), style: x }, h), w),
                      {},
                      { ref: a }
                    ),
                    {
                      default: function () {
                        return [y];
                      }
                    }
                  );
                }
              }
            )
          );
        }
      );
    }
  }),
  $o = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  },
  Vw = de({
    name: "RawItem",
    inheritAttrs: !1,
    props: {
      component: K.any,
      title: K.any,
      id: String,
      onMouseenter: { type: Function },
      onMouseleave: { type: Function },
      onClick: { type: Function },
      onKeydown: { type: Function },
      onFocus: { type: Function }
    },
    setup: function (e, t) {
      var n = t.slots,
        r = t.attrs,
        o = Bw();
      return function () {
        var a;
        if (!o.value) {
          var i = e.component,
            l = i === void 0 ? "div" : i,
            c = $o(e, ["component"]);
          return m(l, X(X({}, c), r), {
            default: function () {
              return [
                (a = n.default) === null || a === void 0 ? void 0 : a.call(n)
              ];
            }
          });
        }
        var u = o.value,
          s = u.className,
          d = $o(u, ["className"]),
          f = r.class,
          v = $o(r, ["class"]);
        return m(
          wa,
          { value: null },
          {
            default: function () {
              return [m($r, X(X(X({ class: we(s, f) }, d), v), e), n)];
            }
          }
        );
      };
    }
  }),
  $w = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  },
  gf = "responsive",
  yf = "invalidate";
function zw(e) {
  return "+ ".concat(e.length, " ...");
}
var Ww = function () {
    return {
      id: String,
      prefixCls: String,
      data: Array,
      itemKey: [String, Number, Function],
      itemWidth: { type: Number, default: 10 },
      renderItem: Function,
      renderRawItem: Function,
      maxCount: [Number, String],
      renderRest: Function,
      renderRawRest: Function,
      suffix: K.any,
      component: String,
      itemComponent: K.any,
      onVisibleChange: Function,
      ssr: String,
      onMousedown: Function
    };
  },
  mo = de({
    name: "Overflow",
    inheritAttrs: !1,
    props: Ww(),
    emits: ["visibleChange"],
    setup: function (e, t) {
      var n = t.attrs,
        r = t.emit,
        o = t.slots,
        a = E(function () {
          return e.ssr === "full";
        }),
        i = L(null),
        l = E(function () {
          return i.value || 0;
        }),
        c = L(new Map()),
        u = L(0),
        s = L(0),
        d = L(0),
        f = L(null),
        v = L(null),
        p = E(function () {
          return v.value === null && a.value
            ? Number.MAX_SAFE_INTEGER
            : v.value || 0;
        }),
        b = L(!1),
        w = E(function () {
          return "".concat(e.prefixCls, "-item");
        }),
        C = E(function () {
          return Math.max(u.value, s.value);
        }),
        y = E(function () {
          return !!(e.data.length && e.maxCount === gf);
        }),
        x = E(function () {
          return e.maxCount === yf;
        }),
        h = E(function () {
          return (
            y.value ||
            (typeof e.maxCount == "number" && e.data.length > e.maxCount)
          );
        }),
        g = E(function () {
          var O = e.data;
          return (
            y.value
              ? i.value === null && a.value
                ? (O = e.data)
                : (O = e.data.slice(
                    0,
                    Math.min(e.data.length, l.value / e.itemWidth)
                  ))
              : typeof e.maxCount == "number" &&
                (O = e.data.slice(0, e.maxCount)),
            O
          );
        }),
        S = E(function () {
          return y.value
            ? e.data.slice(p.value + 1)
            : e.data.slice(g.value.length);
        }),
        P = function (O, I) {
          var V, D;
          return typeof e.itemKey == "function"
            ? e.itemKey(O)
            : (D =
                e.itemKey &&
                ((V = O) === null || V === void 0 ? void 0 : V[e.itemKey])) !==
                null && D !== void 0
            ? D
            : I;
        },
        A = E(function () {
          return (
            e.renderItem ||
            function (O) {
              return O;
            }
          );
        }),
        R = function (O, I) {
          (v.value = O),
            I || ((b.value = O < e.data.length - 1), r("visibleChange", O));
        },
        M = function (O, I) {
          i.value = I.clientWidth;
        },
        q = function (O, I) {
          var V = new Map(c.value);
          I === null ? V.delete(O) : V.set(O, I), (c.value = V);
        },
        B = function (O, I) {
          (u.value = s.value), (s.value = I);
        },
        j = function (O, I) {
          d.value = I;
        },
        T = function (O) {
          return c.value.get(P(g.value[O], O));
        };
      return (
        fe(
          [
            l,
            c,
            s,
            d,
            function () {
              return e.itemKey;
            },
            g
          ],
          function () {
            if (l.value && C.value && g.value) {
              var O = d.value,
                I = g.value.length,
                V = I - 1;
              if (!I) {
                R(0), (f.value = null);
                return;
              }
              for (var D = 0; D < I; D += 1) {
                var G = T(D);
                if (G === void 0) {
                  R(D - 1, !0);
                  break;
                }
                if (
                  ((O += G),
                  (V === 0 && O <= l.value) ||
                    (D === V - 1 && O + T(V) <= l.value))
                ) {
                  R(V), (f.value = null);
                  break;
                } else if (O + C.value > l.value) {
                  R(D - 1), (f.value = O - G - d.value + s.value);
                  break;
                }
              }
              e.suffix && T(0) + d.value > l.value && (f.value = null);
            }
          }
        ),
        function () {
          var O = b.value && !!S.value.length,
            I = e.itemComponent,
            V = e.renderRawItem,
            D = e.renderRawRest,
            G = e.renderRest,
            oe = e.prefixCls,
            ue = oe === void 0 ? "rc-overflow" : oe,
            z = e.suffix,
            N = e.component,
            Y = N === void 0 ? "div" : N,
            ne = e.id,
            le = e.onMousedown,
            Pe = n.class,
            xe = n.style,
            me = $w(n, ["class", "style"]),
            je = {};
          f.value !== null &&
            y.value &&
            (je = {
              position: "absolute",
              left: "".concat(f.value, "px"),
              top: 0
            });
          var Z = {
              prefixCls: w.value,
              responsive: y.value,
              component: I,
              invalidate: x.value
            },
            $ = V
              ? function (Ee, Ae) {
                  var ze = P(Ee, Ae);
                  return m(
                    wa,
                    {
                      key: ze,
                      value: k(k({}, Z), {
                        order: Ae,
                        item: Ee,
                        itemKey: ze,
                        registerSize: q,
                        display: Ae <= p.value
                      })
                    },
                    {
                      default: function () {
                        return [V(Ee, Ae)];
                      }
                    }
                  );
                }
              : function (Ee, Ae) {
                  var ze = P(Ee, Ae);
                  return m(
                    $r,
                    X(
                      X({}, Z),
                      {},
                      {
                        order: Ae,
                        key: ze,
                        item: Ee,
                        renderItem: A.value,
                        itemKey: ze,
                        registerSize: q,
                        display: Ae <= p.value
                      }
                    ),
                    null
                  );
                },
            ve = function () {
              return null;
            },
            Te = {
              order: O ? p.value : Number.MAX_SAFE_INTEGER,
              className: "".concat(w.value, " ").concat(w.value, "-rest"),
              registerSize: B,
              display: O
            };
          if (D)
            D &&
              (ve = function () {
                return m(
                  wa,
                  { value: k(k({}, Z), Te) },
                  {
                    default: function () {
                      return [D(S.value)];
                    }
                  }
                );
              });
          else {
            var Fe = G || zw;
            ve = function () {
              return m($r, X(X({}, Z), Te), {
                default: function () {
                  return typeof Fe == "function" ? Fe(S.value) : Fe;
                }
              });
            };
          }
          var De = function () {
            var Ee;
            return m(
              Y,
              X(
                {
                  id: ne,
                  class: we(!x.value && ue, Pe),
                  style: xe,
                  onMousedown: le
                },
                me
              ),
              {
                default: function () {
                  return [
                    g.value.map($),
                    h.value ? ve() : null,
                    z &&
                      m(
                        $r,
                        X(
                          X({}, Z),
                          {},
                          {
                            order: p.value,
                            class: "".concat(w.value, "-suffix"),
                            registerSize: j,
                            display: !0,
                            style: je
                          }
                        ),
                        {
                          default: function () {
                            return z;
                          }
                        }
                      ),
                    (Ee = o.default) === null || Ee === void 0
                      ? void 0
                      : Ee.call(o)
                  ];
                }
              }
            );
          };
          return m(Mn, { disabled: !y.value, onResize: M }, { default: De });
        }
      );
    }
  });
mo.Item = Vw;
mo.RESPONSIVE = gf;
mo.INVALIDATE = yf;
var Uw = mo,
  Tn = Uw,
  bf = Symbol("TreeSelectLegacyContextPropsKey");
function Yw(e) {
  return Ze(bf, e);
}
function go() {
  return Qe(bf, {});
}
var Gw = {
    id: String,
    prefixCls: String,
    values: K.array,
    open: { type: Boolean, default: void 0 },
    searchValue: String,
    inputRef: K.any,
    placeholder: K.any,
    disabled: { type: Boolean, default: void 0 },
    mode: String,
    showSearch: { type: Boolean, default: void 0 },
    autofocus: { type: Boolean, default: void 0 },
    autocomplete: String,
    activeDescendantId: String,
    tabindex: K.oneOfType([K.number, K.string]),
    removeIcon: K.any,
    choiceTransitionName: String,
    maxTagCount: K.oneOfType([K.number, K.string]),
    maxTagTextLength: Number,
    maxTagPlaceholder: K.any.def(function () {
      return function (e) {
        return "+ ".concat(e.length, " ...");
      };
    }),
    tagRender: Function,
    onToggleOpen: { type: Function },
    onRemove: Function,
    onInputChange: Function,
    onInputPaste: Function,
    onInputKeyDown: Function,
    onInputMouseDown: Function,
    onInputCompositionStart: Function,
    onInputCompositionEnd: Function
  },
  Fu = function (e) {
    e.preventDefault(), e.stopPropagation();
  },
  qw = de({
    name: "MultipleSelectSelector",
    inheritAttrs: !1,
    props: Gw,
    setup: function (e) {
      var t = L(),
        n = L(0),
        r = L(!1),
        o = go(),
        a = E(function () {
          return "".concat(e.prefixCls, "-selection");
        }),
        i = E(function () {
          return e.open || e.mode === "tags" ? e.searchValue : "";
        }),
        l = E(function () {
          return e.mode === "tags" || (e.showSearch && (e.open || r.value));
        });
      Ue(function () {
        fe(
          i,
          function () {
            n.value = t.value.scrollWidth;
          },
          { flush: "post", immediate: !0 }
        );
      });
      function c(f, v, p, b, w) {
        return m(
          "span",
          {
            class: we(
              "".concat(a.value, "-item"),
              U({}, "".concat(a.value, "-item-disabled"), p)
            ),
            title:
              typeof f == "string" || typeof f == "number"
                ? f.toString()
                : void 0
          },
          [
            m("span", { class: "".concat(a.value, "-item-content") }, [v]),
            b &&
              m(
                ba,
                {
                  class: "".concat(a.value, "-item-remove"),
                  onMousedown: Fu,
                  onClick: w,
                  customizeIcon: e.removeIcon
                },
                {
                  default: function () {
                    return [qo("\xD7")];
                  }
                }
              )
          ]
        );
      }
      function u(f, v, p, b, w, C) {
        var y,
          x = function (g) {
            Fu(g), e.onToggleOpen(!open);
          },
          h = C;
        return (
          o.keyEntities &&
            (h =
              ((y = o.keyEntities[f]) === null || y === void 0
                ? void 0
                : y.node) || {}),
          m("span", { key: f, onMousedown: x }, [
            e.tagRender({
              label: v,
              value: f,
              disabled: p,
              closable: b,
              onClose: w,
              option: h
            })
          ])
        );
      }
      function s(f) {
        var v = f.disabled,
          p = f.label,
          b = f.value,
          w = f.option,
          C = !e.disabled && !v,
          y = p;
        if (
          typeof e.maxTagTextLength == "number" &&
          (typeof p == "string" || typeof p == "number")
        ) {
          var x = String(y);
          x.length > e.maxTagTextLength &&
            (y = "".concat(x.slice(0, e.maxTagTextLength), "..."));
        }
        var h = function (g) {
          var S;
          g && g.stopPropagation(),
            (S = e.onRemove) === null || S === void 0 || S.call(e, f);
        };
        return typeof e.tagRender == "function"
          ? u(b, y, v, C, h, w)
          : c(p, y, v, C, h);
      }
      function d(f) {
        var v = e.maxTagPlaceholder,
          p =
            v === void 0
              ? function (w) {
                  return "+ ".concat(w.length, " ...");
                }
              : v,
          b = typeof p == "function" ? p(f) : p;
        return c(b, b, !1);
      }
      return function () {
        var f = e.id,
          v = e.prefixCls,
          p = e.values,
          b = e.open,
          w = e.inputRef,
          C = e.placeholder,
          y = e.disabled,
          x = e.autofocus,
          h = e.autocomplete,
          g = e.activeDescendantId,
          S = e.tabindex,
          P = e.onInputChange,
          A = e.onInputPaste,
          R = e.onInputKeyDown,
          M = e.onInputMouseDown,
          q = e.onInputCompositionStart,
          B = e.onInputCompositionEnd,
          j = m(
            "div",
            {
              class: "".concat(a.value, "-search"),
              style: { width: n.value + "px" },
              key: "input"
            },
            [
              m(
                hf,
                {
                  inputRef: w,
                  open: b,
                  prefixCls: v,
                  id: f,
                  inputElement: null,
                  disabled: y,
                  autofocus: x,
                  autocomplete: h,
                  editable: l.value,
                  activeDescendantId: g,
                  value: i.value,
                  onKeydown: R,
                  onMousedown: M,
                  onChange: P,
                  onPaste: A,
                  onCompositionstart: q,
                  onCompositionend: B,
                  tabindex: S,
                  attrs: ho(e, !0),
                  onFocus: function () {
                    return (r.value = !0);
                  },
                  onBlur: function () {
                    return (r.value = !1);
                  }
                },
                null
              ),
              m(
                "span",
                {
                  ref: t,
                  class: "".concat(a.value, "-search-mirror"),
                  "aria-hidden": !0
                },
                [i.value, qo("\xA0")]
              )
            ]
          ),
          T = m(
            Tn,
            {
              prefixCls: "".concat(a.value, "-overflow"),
              data: p,
              renderItem: s,
              renderRest: d,
              suffix: j,
              itemKey: "key",
              maxCount: e.maxTagCount,
              key: "overflow"
            },
            null
          );
        return m(wt, null, [
          T,
          !p.length &&
            !i.value &&
            m("span", { class: "".concat(a.value, "-placeholder") }, [C])
        ]);
      };
    }
  }),
  Xw = qw,
  Zw = {
    inputElement: K.any,
    id: String,
    prefixCls: String,
    values: K.array,
    open: { type: Boolean, default: void 0 },
    searchValue: String,
    inputRef: K.any,
    placeholder: K.any,
    disabled: { type: Boolean, default: void 0 },
    mode: String,
    showSearch: { type: Boolean, default: void 0 },
    autofocus: { type: Boolean, default: void 0 },
    autocomplete: String,
    activeDescendantId: String,
    tabindex: K.oneOfType([K.number, K.string]),
    activeValue: String,
    backfill: { type: Boolean, default: void 0 },
    optionLabelRender: Function,
    onInputChange: Function,
    onInputPaste: Function,
    onInputKeyDown: Function,
    onInputMouseDown: Function,
    onInputCompositionStart: Function,
    onInputCompositionEnd: Function
  },
  Si = de({
    name: "SingleSelector",
    setup: function (e) {
      var t = L(!1),
        n = E(function () {
          return e.mode === "combobox";
        }),
        r = E(function () {
          return n.value || e.showSearch;
        }),
        o = E(function () {
          var u = e.searchValue || "";
          return n.value && e.activeValue && !t.value && (u = e.activeValue), u;
        }),
        a = go();
      fe(
        [
          n,
          function () {
            return e.activeValue;
          }
        ],
        function () {
          n.value && (t.value = !1);
        },
        { immediate: !0 }
      );
      var i = E(function () {
          return e.mode !== "combobox" && !e.open && !e.showSearch
            ? !1
            : !!o.value;
        }),
        l = E(function () {
          var u = e.values[0];
          return u && (typeof u.label == "string" || typeof u.label == "number")
            ? u.label.toString()
            : void 0;
        }),
        c = function () {
          if (e.values[0]) return null;
          var u = i.value ? { visibility: "hidden" } : void 0;
          return m(
            "span",
            {
              class: "".concat(e.prefixCls, "-selection-placeholder"),
              style: u
            },
            [e.placeholder]
          );
        };
      return function () {
        var u,
          s,
          d,
          f,
          v = e.inputElement,
          p = e.prefixCls,
          b = e.id,
          w = e.values,
          C = e.inputRef,
          y = e.disabled,
          x = e.autofocus,
          h = e.autocomplete,
          g = e.activeDescendantId,
          S = e.open,
          P = e.tabindex,
          A = e.optionLabelRender,
          R = e.onInputKeyDown,
          M = e.onInputMouseDown,
          q = e.onInputChange,
          B = e.onInputPaste,
          j = e.onInputCompositionStart,
          T = e.onInputCompositionEnd,
          O = w[0],
          I = null;
        if (O && a.customSlots) {
          var V = (u = O.key) !== null && u !== void 0 ? u : O.value,
            D =
              ((s = a.keyEntities[V]) === null || s === void 0
                ? void 0
                : s.node) || {};
          (I =
            a.customSlots[
              (d = D.slots) === null || d === void 0 ? void 0 : d.title
            ] ||
            a.customSlots.title ||
            O.label),
            typeof I == "function" && (I = I(D));
        } else I = A && O ? A(O.option) : O == null ? void 0 : O.label;
        return m(wt, null, [
          m("span", { class: "".concat(p, "-selection-search") }, [
            m(
              hf,
              {
                inputRef: C,
                prefixCls: p,
                id: b,
                open: S,
                inputElement: v,
                disabled: y,
                autofocus: x,
                autocomplete: h,
                editable: r.value,
                activeDescendantId: g,
                value: o.value,
                onKeydown: R,
                onMousedown: M,
                onChange: function (G) {
                  (t.value = !0), q(G);
                },
                onPaste: B,
                onCompositionstart: j,
                onCompositionend: T,
                tabindex: P,
                attrs: ho(e, !0)
              },
              null
            )
          ]),
          !n.value &&
            O &&
            !i.value &&
            m(
              "span",
              { class: "".concat(p, "-selection-item"), title: l.value },
              [
                m(
                  wt,
                  { key: (f = O.key) !== null && f !== void 0 ? f : O.value },
                  [I]
                )
              ]
            ),
          c()
        ]);
      };
    }
  });
Si.props = Zw;
Si.inheritAttrs = !1;
var Qw = Si;
function Jw(e) {
  return ![
    he.ESC,
    he.SHIFT,
    he.BACKSPACE,
    he.TAB,
    he.WIN_KEY,
    he.ALT,
    he.META,
    he.WIN_KEY_RIGHT,
    he.CTRL,
    he.SEMICOLON,
    he.EQUALS,
    he.CAPS_LOCK,
    he.CONTEXT_MENU,
    he.F1,
    he.F2,
    he.F3,
    he.F4,
    he.F5,
    he.F6,
    he.F7,
    he.F8,
    he.F9,
    he.F10,
    he.F11,
    he.F12
  ].includes(e);
}
function wf() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250,
    t = null,
    n;
  rt(function () {
    clearTimeout(n);
  });
  function r(o) {
    (o || t === null) && (t = o),
      clearTimeout(n),
      (n = setTimeout(function () {
        t = null;
      }, e));
  }
  return [
    function () {
      return t;
    },
    r
  ];
}
function eC() {
  var e = function t(n) {
    t.current = n;
  };
  return e;
}
var Jr = eC,
  tC = de({
    name: "Selector",
    inheritAttrs: !1,
    props: {
      id: String,
      prefixCls: String,
      showSearch: { type: Boolean, default: void 0 },
      open: { type: Boolean, default: void 0 },
      values: K.array,
      multiple: { type: Boolean, default: void 0 },
      mode: String,
      searchValue: String,
      activeValue: String,
      inputElement: K.any,
      autofocus: { type: Boolean, default: void 0 },
      activeDescendantId: String,
      tabindex: K.oneOfType([K.number, K.string]),
      disabled: { type: Boolean, default: void 0 },
      placeholder: K.any,
      removeIcon: K.any,
      maxTagCount: K.oneOfType([K.number, K.string]),
      maxTagTextLength: Number,
      maxTagPlaceholder: K.any,
      tagRender: Function,
      optionLabelRender: Function,
      tokenWithEnter: { type: Boolean, default: void 0 },
      choiceTransitionName: String,
      onToggleOpen: { type: Function },
      onSearch: Function,
      onSearchSubmit: Function,
      onRemove: Function,
      onInputKeyDown: { type: Function },
      domRef: Function
    },
    setup: function (e, t) {
      var n = t.expose,
        r = Jr(),
        o = !1,
        a = wf(0),
        i = Se(a, 2),
        l = i[0],
        c = i[1],
        u = function (x) {
          var h = x.which;
          (h === he.UP || h === he.DOWN) && x.preventDefault(),
            e.onInputKeyDown && e.onInputKeyDown(x),
            h === he.ENTER &&
              e.mode === "tags" &&
              !o &&
              !e.open &&
              e.onSearchSubmit(x.target.value),
            Jw(h) && e.onToggleOpen(!0);
        },
        s = function () {
          c(!0);
        },
        d = null,
        f = function (x) {
          e.onSearch(x, !0, o) !== !1 && e.onToggleOpen(!0);
        },
        v = function () {
          o = !0;
        },
        p = function (x) {
          (o = !1), e.mode !== "combobox" && f(x.target.value);
        },
        b = function (x) {
          var h = x.target.value;
          if (e.tokenWithEnter && d && /[\r\n]/.test(d)) {
            var g = d
              .replace(/[\r\n]+$/, "")
              .replace(/\r\n/g, " ")
              .replace(/[\r\n]/g, " ");
            h = h.replace(g, d);
          }
          (d = null), f(h);
        },
        w = function (x) {
          var h = x.clipboardData,
            g = h.getData("text");
          d = g;
        },
        C = function (x) {
          var h = x.target;
          if (h !== r.current) {
            var g = document.body.style.msTouchAction !== void 0;
            g
              ? setTimeout(function () {
                  r.current.focus();
                })
              : r.current.focus();
          }
        },
        y = function (x) {
          var h = l();
          x.target !== r.current && !h && x.preventDefault(),
            ((e.mode !== "combobox" && (!e.showSearch || !h)) || !e.open) &&
              (e.open && e.onSearch("", !0, !1), e.onToggleOpen());
        };
      return (
        n({
          focus: function () {
            r.current.focus();
          },
          blur: function () {
            r.current.blur();
          }
        }),
        function () {
          var x = e.prefixCls,
            h = e.domRef,
            g = e.mode,
            S = {
              inputRef: r,
              onInputKeyDown: u,
              onInputMouseDown: s,
              onInputChange: b,
              onInputPaste: w,
              onInputCompositionStart: v,
              onInputCompositionEnd: p
            },
            P =
              g === "multiple" || g === "tags"
                ? m(Xw, X(X({}, e), S), null)
                : m(Qw, X(X({}, e), S), null);
          return m(
            "div",
            {
              ref: h,
              class: "".concat(x, "-selector"),
              onClick: C,
              onMousedown: y
            },
            [P]
          );
        }
      );
    }
  }),
  nC = tC;
function rC(e, t, n) {
  function r(o) {
    var a,
      i,
      l,
      c = o.target;
    c.shadowRoot && o.composed && (c = o.composedPath()[0] || c);
    var u = [
      (a = e[0]) === null || a === void 0 ? void 0 : a.value,
      (l = (i = e[1]) === null || i === void 0 ? void 0 : i.value) === null ||
      l === void 0
        ? void 0
        : l.getPopupElement()
    ];
    t.value &&
      u.every(function (s) {
        return s && !s.contains(c) && s !== c;
      }) &&
      n(!1);
  }
  Ue(function () {
    window.addEventListener("mousedown", r);
  }),
    rt(function () {
      window.removeEventListener("mousedown", r);
    });
}
function oC() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10,
    t = L(!1),
    n,
    r = function () {
      clearTimeout(n);
    };
  Ue(function () {
    r();
  });
  var o = function (a, i) {
    r(),
      (n = setTimeout(function () {
        (t.value = a), i && i();
      }, e));
  };
  return [t, o, r];
}
var Cf = Symbol("BaseSelectContextKey");
function aC(e) {
  return Ze(Cf, e);
}
function iC() {
  return Qe(Cf, {});
}
var xf = function () {
  if (typeof navigator > "u" || typeof window > "u") return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return !!(
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
      e
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
      e == null ? void 0 : e.substr(0, 4)
    )
  );
};
function Ca(e) {
  if (!pd(e)) return lt(e);
  var t = new Proxy(
    {},
    {
      get: function (n, r, o) {
        return Reflect.get(e.value, r, o);
      },
      set: function (n, r, o) {
        return (e.value[r] = o), !0;
      },
      deleteProperty: function (n, r) {
        return Reflect.deleteProperty(e.value, r);
      },
      has: function (n, r) {
        return Reflect.has(e.value, r);
      },
      ownKeys: function () {
        return Object.keys(e.value);
      },
      getOwnPropertyDescriptor: function () {
        return { enumerable: !0, configurable: !0 };
      }
    }
  );
  return lt(t);
}
var lC = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  },
  uC = [
    "value",
    "onChange",
    "removeIcon",
    "placeholder",
    "autofocus",
    "maxTagCount",
    "maxTagTextLength",
    "maxTagPlaceholder",
    "choiceTransitionName",
    "onInputKeyDown",
    "onPopupScroll",
    "tabindex",
    "OptionList",
    "notFoundContent"
  ],
  cC = function () {
    return {
      prefixCls: String,
      id: String,
      omitDomProps: Array,
      displayValues: Array,
      onDisplayValuesChange: Function,
      activeValue: String,
      activeDescendantId: String,
      onActiveValueChange: Function,
      searchValue: String,
      onSearch: Function,
      onSearchSplit: Function,
      maxLength: Number,
      OptionList: K.any,
      emptyOptions: Boolean
    };
  },
  Sf = function () {
    return {
      showSearch: { type: Boolean, default: void 0 },
      tagRender: { type: Function },
      optionLabelRender: { type: Function },
      direction: { type: String },
      tabindex: Number,
      autofocus: Boolean,
      notFoundContent: K.any,
      placeholder: K.any,
      onClear: Function,
      choiceTransitionName: String,
      mode: String,
      disabled: { type: Boolean, default: void 0 },
      loading: { type: Boolean, default: void 0 },
      open: { type: Boolean, default: void 0 },
      defaultOpen: { type: Boolean, default: void 0 },
      onDropdownVisibleChange: { type: Function },
      getInputElement: { type: Function },
      getRawInputElement: { type: Function },
      maxTagTextLength: Number,
      maxTagCount: { type: [String, Number] },
      maxTagPlaceholder: K.any,
      tokenSeparators: { type: Array },
      allowClear: { type: Boolean, default: void 0 },
      showArrow: { type: Boolean, default: void 0 },
      inputIcon: K.any,
      clearIcon: K.any,
      removeIcon: K.any,
      animation: String,
      transitionName: String,
      dropdownStyle: { type: Object },
      dropdownClassName: String,
      dropdownMatchSelectWidth: { type: [Boolean, Number], default: void 0 },
      dropdownRender: { type: Function },
      dropdownAlign: Object,
      placement: { type: String },
      getPopupContainer: { type: Function },
      showAction: { type: Array },
      onBlur: { type: Function },
      onFocus: { type: Function },
      onKeyup: Function,
      onKeydown: Function,
      onMousedown: Function,
      onPopupScroll: Function,
      onInputKeyDown: Function,
      onMouseenter: Function,
      onMouseleave: Function,
      onClick: Function
    };
  },
  sC = function () {
    return k(k({}, cC()), Sf());
  };
function fC(e) {
  return e === "tags" || e === "multiple";
}
var dC = de({
    name: "BaseSelect",
    inheritAttrs: !1,
    props: en(sC(), { showAction: [], notFoundContent: "Not Found" }),
    setup: function (e, t) {
      var n = t.attrs,
        r = t.expose,
        o = t.slots,
        a = E(function () {
          return fC(e.mode);
        }),
        i = E(function () {
          return e.showSearch !== void 0
            ? e.showSearch
            : a.value || e.mode === "combobox";
        }),
        l = L(!1);
      Ue(function () {
        l.value = xf();
      });
      var c = go(),
        u = L(null),
        s = Jr(),
        d = L(null),
        f = L(null),
        v = L(null),
        p = oC(),
        b = Se(p, 3),
        w = b[0],
        C = b[1],
        y = b[2],
        x = function () {
          var Z;
          (Z = f.value) === null || Z === void 0 || Z.focus();
        },
        h = function () {
          var Z;
          (Z = f.value) === null || Z === void 0 || Z.blur();
        };
      r({
        focus: x,
        blur: h,
        scrollTo: function (Z) {
          var $;
          return ($ = v.value) === null || $ === void 0
            ? void 0
            : $.scrollTo(Z);
        }
      });
      var g = E(function () {
          var Z;
          if (e.mode !== "combobox") return e.searchValue;
          var $ =
            (Z = e.displayValues[0]) === null || Z === void 0
              ? void 0
              : Z.value;
          return typeof $ == "string" || typeof $ == "number" ? String($) : "";
        }),
        S = e.open !== void 0 ? e.open : e.defaultOpen,
        P = L(S),
        A = L(S),
        R = function (Z) {
          (P.value = e.open !== void 0 ? e.open : Z), (A.value = P.value);
        };
      fe(
        function () {
          return e.open;
        },
        function () {
          R(e.open);
        }
      );
      var M = E(function () {
        return !e.notFoundContent && e.emptyOptions;
      });
      Xe(function () {
        (A.value = P.value),
          (e.disabled || (M.value && A.value && e.mode === "combobox")) &&
            (A.value = !1);
      });
      var q = E(function () {
          return M.value ? !1 : A.value;
        }),
        B = function (Z) {
          var $ = Z !== void 0 ? Z : !A.value;
          P.value !== $ &&
            !e.disabled &&
            (R($), e.onDropdownVisibleChange && e.onDropdownVisibleChange($));
        },
        j = E(function () {
          return (e.tokenSeparators || []).some(function (Z) {
            return [
              `
`,
              `\r
`
            ].includes(Z);
          });
        }),
        T = function (Z, $, ve) {
          var Te,
            Fe,
            De = !0,
            Ee = Z;
          (Te = e.onActiveValueChange) === null ||
            Te === void 0 ||
            Te.call(e, null);
          var Ae = ve ? null : Ag(Z, e.tokenSeparators);
          return (
            e.mode !== "combobox" &&
              Ae &&
              ((Ee = ""),
              (Fe = e.onSearchSplit) === null ||
                Fe === void 0 ||
                Fe.call(e, Ae),
              B(!1),
              (De = !1)),
            e.onSearch &&
              g.value !== Ee &&
              e.onSearch(Ee, { source: $ ? "typing" : "effect" }),
            De
          );
        },
        O = function (Z) {
          var $;
          !Z ||
            !Z.trim() ||
            ($ = e.onSearch) === null ||
            $ === void 0 ||
            $.call(e, Z, { source: "submit" });
        };
      fe(
        A,
        function () {
          !A.value && !a.value && e.mode !== "combobox" && T("", !1, !1);
        },
        { immediate: !0, flush: "post" }
      ),
        fe(
          function () {
            return e.disabled;
          },
          function () {
            P.value && !!e.disabled && R(!1);
          },
          { immediate: !0 }
        );
      var I = wf(),
        V = Se(I, 2),
        D = V[0],
        G = V[1],
        oe = function (Z) {
          var $,
            ve,
            Te = D(),
            Fe = Z.which;
          if (
            (Fe === he.ENTER &&
              (e.mode !== "combobox" && Z.preventDefault(), A.value || B(!0)),
            G(!!g.value),
            Fe === he.BACKSPACE &&
              !Te &&
              a.value &&
              !g.value &&
              e.displayValues.length)
          ) {
            for (
              var De = Re(e.displayValues), Ee = null, Ae = De.length - 1;
              Ae >= 0;
              Ae -= 1
            ) {
              var ze = De[Ae];
              if (!ze.disabled) {
                De.splice(Ae, 1), (Ee = ze);
                break;
              }
            }
            Ee && e.onDisplayValuesChange(De, { type: "remove", values: [Ee] });
          }
          for (
            var Ye = arguments.length,
              pe = new Array(Ye > 1 ? Ye - 1 : 0),
              He = 1;
            He < Ye;
            He++
          )
            pe[He - 1] = arguments[He];
          if (A.value && v.value) {
            var Ve;
            (Ve = v.value).onKeydown.apply(Ve, [Z].concat(pe));
          }
          (ve = e.onKeydown) === null ||
            ve === void 0 ||
            ($ = ve).call.apply($, [e, Z].concat(pe));
        },
        ue = function (Z) {
          for (
            var $ = arguments.length, ve = new Array($ > 1 ? $ - 1 : 0), Te = 1;
            Te < $;
            Te++
          )
            ve[Te - 1] = arguments[Te];
          if (A.value && v.value) {
            var Fe;
            (Fe = v.value).onKeyup.apply(Fe, [Z].concat(ve));
          }
          e.onKeyup && e.onKeyup.apply(e, [Z].concat(ve));
        },
        z = function (Z) {
          var $ = e.displayValues.filter(function (ve) {
            return ve !== Z;
          });
          e.onDisplayValuesChange($, { type: "remove", values: [Z] });
        },
        N = L(!1),
        Y = function () {
          C(!0),
            e.disabled ||
              (e.onFocus && !N.value && e.onFocus.apply(e, arguments),
              e.showAction && e.showAction.includes("focus") && B(!0)),
            (N.value = !0);
        },
        ne = function () {
          if (
            (C(!1, function () {
              (N.value = !1), B(!1);
            }),
            !e.disabled)
          ) {
            var Z = g.value;
            Z &&
              (e.mode === "tags"
                ? e.onSearch(Z, { source: "submit" })
                : e.mode === "multiple" && e.onSearch("", { source: "blur" })),
              e.onBlur && e.onBlur.apply(e, arguments);
          }
        };
      Ze("VCSelectContainerEvent", { focus: Y, blur: ne });
      var le = [];
      Ue(function () {
        le.forEach(function (Z) {
          return clearTimeout(Z);
        }),
          le.splice(0, le.length);
      }),
        rt(function () {
          le.forEach(function (Z) {
            return clearTimeout(Z);
          }),
            le.splice(0, le.length);
        });
      var Pe = function (Z) {
          var $,
            ve,
            Te,
            Fe = Z.target,
            De =
              (ve = d.value) === null || ve === void 0
                ? void 0
                : ve.getPopupElement();
          if (De && De.contains(Fe)) {
            var Ee = setTimeout(function () {
              var pe,
                He = le.indexOf(Ee);
              He !== -1 && le.splice(He, 1),
                y(),
                !l.value &&
                  !De.contains(document.activeElement) &&
                  ((pe = f.value) === null || pe === void 0 || pe.focus());
            });
            le.push(Ee);
          }
          for (
            var Ae = arguments.length,
              ze = new Array(Ae > 1 ? Ae - 1 : 0),
              Ye = 1;
            Ye < Ae;
            Ye++
          )
            ze[Ye - 1] = arguments[Ye];
          (Te = e.onMousedown) === null ||
            Te === void 0 ||
            ($ = Te).call.apply($, [e, Z].concat(ze));
        },
        xe = L(null),
        me = Qt(),
        je = function () {
          me.update();
        };
      return (
        Ue(function () {
          fe(
            q,
            function () {
              var Z;
              if (q.value) {
                var $ = Math.ceil(
                  (Z = u.value) === null || Z === void 0
                    ? void 0
                    : Z.offsetWidth
                );
                xe.value !== $ && !Number.isNaN($) && (xe.value = $);
              }
            },
            { immediate: !0, flush: "post" }
          );
        }),
        rC([u, d], q, B),
        aC(
          Ca(
            k(k({}, Da(e)), {
              open: A,
              triggerOpen: q,
              showSearch: i,
              multiple: a,
              toggleOpen: B
            })
          )
        ),
        function () {
          var Z,
            $ = k(k({}, e), n),
            ve = $.prefixCls,
            Te = $.id;
          $.open, $.defaultOpen;
          var Fe = $.mode;
          $.showSearch, $.searchValue, $.onSearch;
          var De = $.allowClear,
            Ee = $.clearIcon,
            Ae = $.showArrow,
            ze = $.inputIcon,
            Ye = $.disabled,
            pe = $.loading,
            He = $.getInputElement,
            Ve = $.getPopupContainer,
            nt = $.placement,
            _t = $.animation,
            ut = $.transitionName,
            H = $.dropdownStyle,
            Q = $.dropdownClassName,
            ye = $.dropdownMatchSelectWidth,
            _e = $.dropdownRender,
            _ = $.dropdownAlign;
          $.showAction;
          var F = $.direction;
          $.tokenSeparators;
          var W = $.tagRender,
            ie = $.optionLabelRender;
          $.onPopupScroll,
            $.onDropdownVisibleChange,
            $.onFocus,
            $.onBlur,
            $.onKeyup,
            $.onKeydown,
            $.onMousedown;
          var ce = $.onClear,
            re = $.omitDomProps,
            ee = $.getRawInputElement,
            J = $.displayValues,
            se = $.onDisplayValuesChange,
            Me = $.emptyOptions,
            Ie = $.activeDescendantId,
            te = $.activeValue,
            ae = $.OptionList,
            ke = lC($, [
              "prefixCls",
              "id",
              "open",
              "defaultOpen",
              "mode",
              "showSearch",
              "searchValue",
              "onSearch",
              "allowClear",
              "clearIcon",
              "showArrow",
              "inputIcon",
              "disabled",
              "loading",
              "getInputElement",
              "getPopupContainer",
              "placement",
              "animation",
              "transitionName",
              "dropdownStyle",
              "dropdownClassName",
              "dropdownMatchSelectWidth",
              "dropdownRender",
              "dropdownAlign",
              "showAction",
              "direction",
              "tokenSeparators",
              "tagRender",
              "optionLabelRender",
              "onPopupScroll",
              "onDropdownVisibleChange",
              "onFocus",
              "onBlur",
              "onKeyup",
              "onKeydown",
              "onMousedown",
              "onClear",
              "omitDomProps",
              "getRawInputElement",
              "displayValues",
              "onDisplayValuesChange",
              "emptyOptions",
              "activeDescendantId",
              "activeValue",
              "OptionList"
            ]),
            Ce = (Fe === "combobox" && He && He()) || null,
            ge = typeof ee == "function" && ee(),
            Ne = k({}, ke),
            Ke;
          ge &&
            (Ke = function (tt) {
              B(tt);
            }),
            uC.forEach(function (tt) {
              delete Ne[tt];
            }),
            re == null ||
              re.forEach(function (tt) {
                delete Ne[tt];
              });
          var Je = Ae !== void 0 ? Ae : pe || (!a.value && Fe !== "combobox"),
            $e;
          Je &&
            ($e = m(
              ba,
              {
                class: we(
                  "".concat(ve, "-arrow"),
                  U({}, "".concat(ve, "-arrow-loading"), pe)
                ),
                customizeIcon: ze,
                customizeIconProps: {
                  loading: pe,
                  searchValue: g.value,
                  open: A.value,
                  focused: w.value,
                  showSearch: i.value
                }
              },
              null
            ));
          var Ge,
            dt = function () {
              ce == null || ce(),
                se([], { type: "clear", values: J }),
                T("", !1, !1);
            };
          !Ye &&
            De &&
            (J.length || g.value) &&
            (Ge = m(
              ba,
              {
                class: "".concat(ve, "-clear"),
                onMousedown: dt,
                customizeIcon: Ee
              },
              {
                default: function () {
                  return [qo("\xD7")];
                }
              }
            ));
          var xt = m(
              ae,
              { ref: v },
              k(k({}, c.customSlots), { option: o.option })
            ),
            et = we(
              ve,
              n.class,
              ((Z = {}),
              U(Z, "".concat(ve, "-focused"), w.value),
              U(Z, "".concat(ve, "-multiple"), a.value),
              U(Z, "".concat(ve, "-single"), !a.value),
              U(Z, "".concat(ve, "-allow-clear"), De),
              U(Z, "".concat(ve, "-show-arrow"), Je),
              U(Z, "".concat(ve, "-disabled"), Ye),
              U(Z, "".concat(ve, "-loading"), pe),
              U(Z, "".concat(ve, "-open"), A.value),
              U(Z, "".concat(ve, "-customize-input"), Ce),
              U(Z, "".concat(ve, "-show-search"), i.value),
              Z)
            ),
            yt = m(
              Aw,
              {
                ref: d,
                disabled: Ye,
                prefixCls: ve,
                visible: q.value,
                popupElement: xt,
                containerWidth: xe.value,
                animation: _t,
                transitionName: ut,
                dropdownStyle: H,
                dropdownClassName: Q,
                direction: F,
                dropdownMatchSelectWidth: ye,
                dropdownRender: _e,
                dropdownAlign: _,
                placement: nt,
                getPopupContainer: Ve,
                empty: Me,
                getTriggerDOMNode: function () {
                  return s.current;
                },
                onPopupVisibleChange: Ke,
                onPopupMouseEnter: je
              },
              {
                default: function () {
                  return ge
                    ? Rn(ge) && At(ge, { ref: s }, !1, !0)
                    : m(
                        nC,
                        X(
                          X({}, e),
                          {},
                          {
                            domRef: s,
                            prefixCls: ve,
                            inputElement: Ce,
                            ref: f,
                            id: Te,
                            showSearch: i.value,
                            mode: Fe,
                            activeDescendantId: Ie,
                            tagRender: W,
                            optionLabelRender: ie,
                            values: J,
                            open: A.value,
                            onToggleOpen: B,
                            activeValue: te,
                            searchValue: g.value,
                            onSearch: T,
                            onSearchSubmit: O,
                            onRemove: z,
                            tokenWithEnter: j.value
                          }
                        ),
                        null
                      );
                }
              }
            ),
            at;
          return (
            ge
              ? (at = yt)
              : (at = m(
                  "div",
                  X(
                    X({}, Ne),
                    {},
                    {
                      class: et,
                      ref: u,
                      onMousedown: Pe,
                      onKeydown: oe,
                      onKeyup: ue
                    }
                  ),
                  [
                    w.value &&
                      !A.value &&
                      m(
                        "span",
                        {
                          style: {
                            width: 0,
                            height: 0,
                            display: "flex",
                            overflow: "hidden",
                            opacity: 0
                          },
                          "aria-live": "polite"
                        },
                        [
                          "".concat(
                            J.map(function (tt) {
                              var ct = tt.label,
                                bt = tt.value;
                              return ["number", "string"].includes(We(ct))
                                ? ct
                                : bt;
                            }).join(", ")
                          )
                        ]
                      ),
                    yt,
                    $e,
                    Ge
                  ]
                )),
            at
          );
        }
      );
    }
  }),
  yo = function (e, t) {
    var n = e.height,
      r = e.offset,
      o = e.prefixCls,
      a = e.onInnerResize,
      i = t.slots,
      l,
      c = {},
      u = { display: "flex", flexDirection: "column" };
    return (
      r !== void 0 &&
        ((c = {
          height: "".concat(n, "px"),
          position: "relative",
          overflow: "hidden"
        }),
        (u = k(k({}, u), {
          transform: "translateY(".concat(r, "px)"),
          position: "absolute",
          left: 0,
          right: 0,
          top: 0
        }))),
      m("div", { style: c }, [
        m(
          Mn,
          {
            onResize: function (s) {
              var d = s.offsetHeight;
              d && a && a();
            }
          },
          {
            default: function () {
              return [
                m(
                  "div",
                  {
                    style: u,
                    class: we(U({}, "".concat(o, "-holder-inner"), o))
                  },
                  [
                    (l = i.default) === null || l === void 0
                      ? void 0
                      : l.call(i)
                  ]
                )
              ];
            }
          }
        )
      ])
    );
  };
yo.displayName = "Filter";
yo.inheritAttrs = !1;
yo.props = {
  prefixCls: String,
  height: Number,
  offset: Number,
  onInnerResize: Function
};
var vC = yo,
  Of = function (e, t) {
    var n = e.setRef,
      r = t.slots,
      o,
      a = It((o = r.default) === null || o === void 0 ? void 0 : o.call(r));
    return a && a.length ? Ka(a[0], { ref: n }) : a;
  };
Of.props = { setRef: { type: Function, default: function () {} } };
var pC = Of,
  hC = 20;
function Du(e) {
  return "touches" in e ? e.touches[0].pageY : e.pageY;
}
var mC = de({
  name: "ScrollBar",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    scrollTop: Number,
    scrollHeight: Number,
    height: Number,
    count: Number,
    onScroll: { type: Function },
    onStartMove: { type: Function },
    onStopMove: { type: Function }
  },
  setup: function () {
    return {
      moveRaf: null,
      scrollbarRef: Jr(),
      thumbRef: Jr(),
      visibleTimeout: null,
      state: lt({ dragging: !1, pageY: null, startTop: null, visible: !1 })
    };
  },
  watch: {
    scrollTop: {
      handler: function () {
        this.delayHidden();
      },
      flush: "post"
    }
  },
  mounted: function () {
    var e, t;
    (e = this.scrollbarRef.current) === null ||
      e === void 0 ||
      e.addEventListener(
        "touchstart",
        this.onScrollbarTouchStart,
        vt ? { passive: !1 } : !1
      ),
      (t = this.thumbRef.current) === null ||
        t === void 0 ||
        t.addEventListener(
          "touchstart",
          this.onMouseDown,
          vt ? { passive: !1 } : !1
        );
  },
  beforeUnmount: function () {
    this.removeEvents(), clearTimeout(this.visibleTimeout);
  },
  methods: {
    delayHidden: function () {
      var e = this;
      clearTimeout(this.visibleTimeout),
        (this.state.visible = !0),
        (this.visibleTimeout = setTimeout(function () {
          e.state.visible = !1;
        }, 2e3));
    },
    onScrollbarTouchStart: function (e) {
      e.preventDefault();
    },
    onContainerMouseDown: function (e) {
      e.stopPropagation(), e.preventDefault();
    },
    patchEvents: function () {
      window.addEventListener("mousemove", this.onMouseMove),
        window.addEventListener("mouseup", this.onMouseUp),
        this.thumbRef.current.addEventListener(
          "touchmove",
          this.onMouseMove,
          vt ? { passive: !1 } : !1
        ),
        this.thumbRef.current.addEventListener("touchend", this.onMouseUp);
    },
    removeEvents: function () {
      window.removeEventListener("mousemove", this.onMouseMove),
        window.removeEventListener("mouseup", this.onMouseUp),
        this.scrollbarRef.current.removeEventListener(
          "touchstart",
          this.onScrollbarTouchStart,
          vt ? { passive: !1 } : !1
        ),
        this.thumbRef.current.removeEventListener(
          "touchstart",
          this.onMouseDown,
          vt ? { passive: !1 } : !1
        ),
        this.thumbRef.current.removeEventListener(
          "touchmove",
          this.onMouseMove,
          vt ? { passive: !1 } : !1
        ),
        this.thumbRef.current.removeEventListener("touchend", this.onMouseUp),
        Be.cancel(this.moveRaf);
    },
    onMouseDown: function (e) {
      var t = this.$props.onStartMove;
      k(this.state, { dragging: !0, pageY: Du(e), startTop: this.getTop() }),
        t(),
        this.patchEvents(),
        e.stopPropagation(),
        e.preventDefault();
    },
    onMouseMove: function (e) {
      var t = this.state,
        n = t.dragging,
        r = t.pageY,
        o = t.startTop,
        a = this.$props.onScroll;
      if ((Be.cancel(this.moveRaf), n)) {
        var i = Du(e) - r,
          l = o + i,
          c = this.getEnableScrollRange(),
          u = this.getEnableHeightRange(),
          s = u ? l / u : 0,
          d = Math.ceil(s * c);
        this.moveRaf = Be(function () {
          a(d);
        });
      }
    },
    onMouseUp: function () {
      var e = this.$props.onStopMove;
      (this.state.dragging = !1), e(), this.removeEvents();
    },
    getSpinHeight: function () {
      var e = this.$props,
        t = e.height,
        n = e.count,
        r = (t / n) * 10;
      return (r = Math.max(r, hC)), (r = Math.min(r, t / 2)), Math.floor(r);
    },
    getEnableScrollRange: function () {
      var e = this.$props,
        t = e.scrollHeight,
        n = e.height;
      return t - n || 0;
    },
    getEnableHeightRange: function () {
      var e = this.$props.height,
        t = this.getSpinHeight();
      return e - t || 0;
    },
    getTop: function () {
      var e = this.$props.scrollTop,
        t = this.getEnableScrollRange(),
        n = this.getEnableHeightRange();
      if (e === 0 || t === 0) return 0;
      var r = e / t;
      return r * n;
    },
    showScroll: function () {
      var e = this.$props,
        t = e.height,
        n = e.scrollHeight;
      return n > t;
    }
  },
  render: function () {
    var e = this.state,
      t = e.dragging,
      n = e.visible,
      r = this.$props.prefixCls,
      o = this.getSpinHeight() + "px",
      a = this.getTop() + "px",
      i = this.showScroll(),
      l = i && n;
    return m(
      "div",
      {
        ref: this.scrollbarRef,
        class: we(
          "".concat(r, "-scrollbar"),
          U({}, "".concat(r, "-scrollbar-show"), i)
        ),
        style: {
          width: "8px",
          top: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: l ? void 0 : "none"
        },
        onMousedown: this.onContainerMouseDown,
        onMousemove: this.delayHidden
      },
      [
        m(
          "div",
          {
            ref: this.thumbRef,
            class: we(
              "".concat(r, "-scrollbar-thumb"),
              U({}, "".concat(r, "-scrollbar-thumb-moving"), t)
            ),
            style: {
              width: "100%",
              height: o,
              top: a,
              left: 0,
              position: "absolute",
              background: "rgba(0, 0, 0, 0.5)",
              borderRadius: "99px",
              cursor: "pointer",
              userSelect: "none"
            },
            onMousedown: this.onMouseDown
          },
          null
        )
      ]
    );
  }
});
function gC(e, t, n, r) {
  var o = new Map(),
    a = new Map(),
    i = L(Symbol("update"));
  fe(e, function () {
    i.value = Symbol("update");
  });
  var l = 0;
  function c() {
    l += 1;
    var s = l;
    Promise.resolve().then(function () {
      s === l &&
        o.forEach(function (d, f) {
          if (d && d.offsetParent) {
            var v = d.offsetHeight;
            a.get(f) !== v &&
              ((i.value = Symbol("update")), a.set(f, d.offsetHeight));
          }
        });
    });
  }
  function u(s, d) {
    var f = t(s),
      v = o.get(f);
    d ? (o.set(f, d.$el || d), c()) : o.delete(f),
      !v != !d && (d ? n == null || n(s) : r == null || r(s));
  }
  return [u, c, a, i];
}
function yC(e, t, n, r, o, a, i, l) {
  var c;
  return function (u) {
    if (u == null) {
      l();
      return;
    }
    Be.cancel(c);
    var s = t.value,
      d = r.itemHeight;
    if (typeof u == "number") i(u);
    else if (u && We(u) === "object") {
      var f,
        v = u.align;
      "index" in u
        ? (f = u.index)
        : (f = s.findIndex(function (C) {
            return o(C) === u.key;
          }));
      var p = u.offset,
        b = p === void 0 ? 0 : p,
        w = function C(y, x) {
          if (!(y < 0 || !e.value)) {
            var h = e.value.clientHeight,
              g = !1,
              S = x;
            if (h) {
              for (
                var P = x || v,
                  A = 0,
                  R = 0,
                  M = 0,
                  q = Math.min(s.length, f),
                  B = 0;
                B <= q;
                B += 1
              ) {
                var j = o(s[B]);
                R = A;
                var T = n.get(j);
                (M = R + (T === void 0 ? d : T)),
                  (A = M),
                  B === f && T === void 0 && (g = !0);
              }
              var O = e.value.scrollTop,
                I = null;
              switch (P) {
                case "top":
                  I = R - b;
                  break;
                case "bottom":
                  I = M - h + b;
                  break;
                default: {
                  var V = O + h;
                  R < O ? (S = "top") : M > V && (S = "bottom");
                }
              }
              I !== null && I !== O && i(I);
            }
            c = Be(function () {
              g && a(), C(y - 1, S);
            });
          }
        };
      w(3);
    }
  };
}
var bC =
    (typeof navigator > "u" ? "undefined" : We(navigator)) === "object" &&
    /Firefox/i.test(navigator.userAgent),
  wC = bC,
  kf = function (e, t) {
    var n = !1,
      r = null;
    function o() {
      clearTimeout(r),
        (n = !0),
        (r = setTimeout(function () {
          n = !1;
        }, 50));
    }
    return function (a) {
      var i =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        l = (a < 0 && e.value) || (a > 0 && t.value);
      return i && l ? (clearTimeout(r), (n = !1)) : (!l || n) && o(), !n && l;
    };
  };
function CC(e, t, n, r) {
  var o = 0,
    a = null,
    i = null,
    l = !1,
    c = kf(t, n);
  function u(d) {
    if (e.value) {
      Be.cancel(a);
      var f = d.deltaY;
      (o += f),
        (i = f),
        !c(f) &&
          (wC || d.preventDefault(),
          (a = Be(function () {
            var v = l ? 10 : 1;
            r(o * v), (o = 0);
          })));
    }
  }
  function s(d) {
    !e.value || (l = d.detail === i);
  }
  return [u, s];
}
var xC = 14 / 15;
function SC(e, t, n) {
  var r = !1,
    o = 0,
    a = null,
    i = null,
    l = function () {
      a &&
        (a.removeEventListener("touchmove", c),
        a.removeEventListener("touchend", u));
    },
    c = function (f) {
      if (r) {
        var v = Math.ceil(f.touches[0].pageY),
          p = o - v;
        (o = v),
          n(p) && f.preventDefault(),
          clearInterval(i),
          (i = setInterval(function () {
            (p *= xC), (!n(p, !0) || Math.abs(p) <= 0.1) && clearInterval(i);
          }, 16));
      }
    },
    u = function () {
      (r = !1), l();
    },
    s = function (f) {
      l(),
        f.touches.length === 1 &&
          !r &&
          ((r = !0),
          (o = Math.ceil(f.touches[0].pageY)),
          (a = f.target),
          a.addEventListener("touchmove", c, { passive: !1 }),
          a.addEventListener("touchend", u));
    },
    d = function () {};
  Ue(function () {
    document.addEventListener("touchmove", d, { passive: !1 }),
      fe(
        e,
        function (f) {
          t.value.removeEventListener("touchstart", s),
            l(),
            clearInterval(i),
            f && t.value.addEventListener("touchstart", s, { passive: !1 });
        },
        { immediate: !0 }
      );
  }),
    rt(function () {
      document.removeEventListener("touchmove", d);
    });
}
var OC = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  },
  kC = [],
  PC = { overflowY: "auto", overflowAnchor: "none" };
function TC(e, t, n, r, o, a) {
  var i = a.getKey;
  return e.slice(t, n + 1).map(function (l, c) {
    var u = t + c,
      s = o(l, u, {}),
      d = i(l);
    return m(
      pC,
      {
        key: d,
        setRef: function (f) {
          return r(l, f);
        }
      },
      {
        default: function () {
          return [s];
        }
      }
    );
  });
}
var EC = de({
    name: "List",
    inheritAttrs: !1,
    props: {
      prefixCls: String,
      data: K.array,
      height: Number,
      itemHeight: Number,
      fullHeight: { type: Boolean, default: void 0 },
      itemKey: { type: [String, Number, Function], required: !0 },
      component: { type: [String, Object] },
      virtual: { type: Boolean, default: void 0 },
      children: Function,
      onScroll: Function,
      onMousedown: Function,
      onMouseenter: Function,
      onVisibleChange: Function
    },
    setup: function (e, t) {
      var n = t.expose,
        r = E(function () {
          var z = e.height,
            N = e.itemHeight,
            Y = e.virtual;
          return !!(Y !== !1 && z && N);
        }),
        o = E(function () {
          var z = e.height,
            N = e.itemHeight,
            Y = e.data;
          return r.value && Y && N * Y.length > z;
        }),
        a = lt({ scrollTop: 0, scrollMoving: !1 }),
        i = E(function () {
          return e.data || kC;
        }),
        l = Le([]);
      fe(
        i,
        function () {
          l.value = mt(i.value).slice();
        },
        { immediate: !0 }
      );
      var c = Le(function (z) {});
      fe(
        function () {
          return e.itemKey;
        },
        function (z) {
          typeof z == "function"
            ? (c.value = z)
            : (c.value = function (N) {
                return N == null ? void 0 : N[z];
              });
        },
        { immediate: !0 }
      );
      var u = L(),
        s = L(),
        d = L(),
        f = function (z) {
          return c.value(z);
        },
        v = { getKey: f };
      function p(z) {
        var N;
        typeof z == "function" ? (N = z(a.scrollTop)) : (N = z);
        var Y = A(N);
        u.value && (u.value.scrollTop = Y), (a.scrollTop = Y);
      }
      var b = gC(l, f, null, null),
        w = Se(b, 4),
        C = w[0],
        y = w[1],
        x = w[2],
        h = w[3],
        g = lt({ scrollHeight: void 0, start: 0, end: 0, offset: void 0 }),
        S = L(0);
      Ue(function () {
        ft(function () {
          var z;
          S.value =
            ((z = s.value) === null || z === void 0
              ? void 0
              : z.offsetHeight) || 0;
        });
      }),
        fn(function () {
          ft(function () {
            var z;
            S.value =
              ((z = s.value) === null || z === void 0
                ? void 0
                : z.offsetHeight) || 0;
          });
        }),
        fe(
          [r, l],
          function () {
            r.value ||
              k(g, {
                scrollHeight: void 0,
                start: 0,
                end: l.value.length - 1,
                offset: void 0
              });
          },
          { immediate: !0 }
        ),
        fe(
          [r, l, S, o],
          function () {
            r.value &&
              !o.value &&
              k(g, {
                scrollHeight: S.value,
                start: 0,
                end: l.value.length - 1,
                offset: void 0
              });
          },
          { immediate: !0 }
        ),
        fe(
          [
            o,
            r,
            function () {
              return a.scrollTop;
            },
            l,
            h,
            function () {
              return e.height;
            },
            S
          ],
          function () {
            if (!(!r.value || !o.value)) {
              for (
                var z = 0,
                  N,
                  Y,
                  ne,
                  le = l.value.length,
                  Pe = l.value,
                  xe = a.scrollTop,
                  me = e.itemHeight,
                  je = e.height,
                  Z = xe + je,
                  $ = 0;
                $ < le;
                $ += 1
              ) {
                var ve = Pe[$],
                  Te = f(ve),
                  Fe = x.get(Te);
                Fe === void 0 && (Fe = me);
                var De = z + Fe;
                N === void 0 && De >= xe && ((N = $), (Y = z)),
                  ne === void 0 && De > Z && (ne = $),
                  (z = De);
              }
              N === void 0 && ((N = 0), (Y = 0)),
                ne === void 0 && (ne = le - 1),
                (ne = Math.min(ne + 1, le)),
                k(g, { scrollHeight: z, start: N, end: ne, offset: Y });
            }
          },
          { immediate: !0 }
        );
      var P = E(function () {
        return g.scrollHeight - e.height;
      });
      function A(z) {
        var N = z;
        return (
          Number.isNaN(P.value) || (N = Math.min(N, P.value)),
          (N = Math.max(N, 0)),
          N
        );
      }
      var R = E(function () {
          return a.scrollTop <= 0;
        }),
        M = E(function () {
          return a.scrollTop >= P.value;
        }),
        q = kf(R, M);
      function B(z) {
        var N = z;
        p(N);
      }
      function j(z) {
        var N,
          Y = z.currentTarget.scrollTop;
        Math.abs(Y - a.scrollTop) >= 1 && p(Y),
          (N = e.onScroll) === null || N === void 0 || N.call(e, z);
      }
      var T = CC(r, R, M, function (z) {
          p(function (N) {
            var Y = N + z;
            return Y;
          });
        }),
        O = Se(T, 2),
        I = O[0],
        V = O[1];
      SC(r, u, function (z, N) {
        return q(z, N)
          ? !1
          : (I({ preventDefault: function () {}, deltaY: z }), !0);
      });
      function D(z) {
        r.value && z.preventDefault();
      }
      var G = function () {
        u.value &&
          (u.value.removeEventListener("wheel", I, vt ? { passive: !1 } : !1),
          u.value.removeEventListener("DOMMouseScroll", V),
          u.value.removeEventListener("MozMousePixelScroll", D));
      };
      Xe(function () {
        ft(function () {
          u.value &&
            (G(),
            u.value.addEventListener("wheel", I, vt ? { passive: !1 } : !1),
            u.value.addEventListener("DOMMouseScroll", V),
            u.value.addEventListener("MozMousePixelScroll", D));
        });
      }),
        rt(function () {
          G();
        });
      var oe = yC(u, l, x, e, f, y, p, function () {
        var z;
        (z = d.value) === null || z === void 0 || z.delayHidden();
      });
      n({ scrollTo: oe });
      var ue = E(function () {
        var z = null;
        return (
          e.height &&
            ((z = k(
              U({}, e.fullHeight ? "height" : "maxHeight", e.height + "px"),
              PC
            )),
            r.value &&
              ((z.overflowY = "hidden"),
              a.scrollMoving && (z.pointerEvents = "none"))),
          z
        );
      });
      return (
        fe(
          [
            function () {
              return g.start;
            },
            function () {
              return g.end;
            },
            l
          ],
          function () {
            if (e.onVisibleChange) {
              var z = l.value.slice(g.start, g.end + 1);
              e.onVisibleChange(z, l.value);
            }
          },
          { flush: "post" }
        ),
        {
          state: a,
          mergedData: l,
          componentStyle: ue,
          onFallbackScroll: j,
          onScrollBar: B,
          componentRef: u,
          useVirtual: r,
          calRes: g,
          collectHeight: y,
          setInstance: C,
          sharedConfig: v,
          scrollBarRef: d,
          fillerInnerRef: s
        }
      );
    },
    render: function () {
      var e = this,
        t = k(k({}, this.$props), this.$attrs),
        n = t.prefixCls,
        r = n === void 0 ? "rc-virtual-list" : n,
        o = t.height;
      t.itemHeight, t.fullHeight, t.data, t.itemKey, t.virtual;
      var a = t.component,
        i = a === void 0 ? "div" : a;
      t.onScroll;
      var l = t.children,
        c = l === void 0 ? this.$slots.default : l,
        u = t.style,
        s = t.class,
        d = OC(t, [
          "prefixCls",
          "height",
          "itemHeight",
          "fullHeight",
          "data",
          "itemKey",
          "virtual",
          "component",
          "onScroll",
          "children",
          "style",
          "class"
        ]),
        f = we(r, s),
        v = this.state.scrollTop,
        p = this.calRes,
        b = p.scrollHeight,
        w = p.offset,
        C = p.start,
        y = p.end,
        x = this.componentStyle,
        h = this.onFallbackScroll,
        g = this.onScrollBar,
        S = this.useVirtual,
        P = this.collectHeight,
        A = this.sharedConfig,
        R = this.setInstance,
        M = this.mergedData;
      return m(
        "div",
        X({ style: k(k({}, u), { position: "relative" }), class: f }, d),
        [
          m(
            i,
            {
              class: "".concat(r, "-holder"),
              style: x,
              ref: "componentRef",
              onScroll: h
            },
            {
              default: function () {
                return [
                  m(
                    vC,
                    {
                      prefixCls: r,
                      height: b,
                      offset: w,
                      onInnerResize: P,
                      ref: "fillerInnerRef"
                    },
                    {
                      default: function () {
                        return TC(M, C, y, R, c, A);
                      }
                    }
                  )
                ];
              }
            }
          ),
          S &&
            m(
              mC,
              {
                ref: "scrollBarRef",
                prefixCls: r,
                scrollTop: v,
                height: o,
                scrollHeight: b,
                count: M.length,
                onScroll: g,
                onStartMove: function () {
                  e.state.scrollMoving = !0;
                },
                onStopMove: function () {
                  e.state.scrollMoving = !1;
                }
              },
              null
            )
        ]
      );
    }
  }),
  AC = EC,
  NC = AC;
function MC(e, t, n) {
  var r = L(e());
  return (
    fe(t, function (o, a) {
      n ? n(o, a) && (r.value = e()) : (r.value = e());
    }),
    r
  );
}
var Ku = 0,
  IC = si();
function _C() {
  var e;
  return IC ? ((e = Ku), (Ku += 1)) : (e = "TEST_OR_SSR"), e;
}
function jC() {
  var e =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : L(""),
    t = "rc_select_".concat(_C());
  return e.value || t;
}
function eo(e, t) {
  var n = t || {},
    r = n.defaultValue,
    o = n.value,
    a = o === void 0 ? L() : o,
    i = typeof e == "function" ? e() : e;
  a.value !== void 0 && (i = Jn(a)),
    r !== void 0 && (i = typeof r == "function" ? r() : r);
  var l = L(i),
    c = L(i);
  Xe(function () {
    var s = a.value !== void 0 ? a.value : l.value;
    t.postState && (s = t.postState(s)), (c.value = s);
  });
  function u(s) {
    var d = c.value;
    (l.value = s), mt(c.value) !== s && t.onChange && t.onChange(s, d);
  }
  return (
    fe(a, function () {
      l.value = a.value;
    }),
    [c, u]
  );
}
function st(e) {
  var t = typeof e == "function" ? e() : e,
    n = L(t);
  function r(o) {
    n.value = o;
  }
  return [n, r];
}
function FC(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = e.loading,
    r = e.multiple,
    o = e.prefixCls,
    a = e.suffixIcon || (t.suffixIcon && t.suffixIcon()),
    i = e.clearIcon || (t.clearIcon && t.clearIcon()),
    l =
      e.menuItemSelectedIcon ||
      (t.menuItemSelectedIcon && t.menuItemSelectedIcon()),
    c = e.removeIcon || (t.removeIcon && t.removeIcon()),
    u = i;
  i || (u = m(Mc, null, null));
  var s = null;
  if (a !== void 0) s = a;
  else if (n) s = m(ro, { spin: !0 }, null);
  else {
    var d = "".concat(o, "-suffix");
    s = function (p) {
      var b = p.open,
        w = p.showSearch;
      return b && w ? m(Hv, { class: d }, null) : m(_v, { class: d }, null);
    };
  }
  var f = null;
  l !== void 0 ? (f = l) : r ? (f = m(Kv, null, null)) : (f = null);
  var v = null;
  return (
    c !== void 0 ? (v = c) : (v = m(Xa, null, null)),
    { clearIcon: u, suffixIcon: s, itemIcon: f, removeIcon: v }
  );
}
var xa = Symbol("ContextProps"),
  Sa = Symbol("InternalContextProps"),
  Oa = {
    id: E(function () {}),
    onFieldBlur: function () {},
    onFieldChange: function () {},
    clearValidate: function () {}
  },
  ka = {
    addFormItemField: function () {},
    removeFormItemField: function () {}
  },
  Pf = function () {
    var e = Qe(Sa, ka),
      t = Symbol("FormItemFieldKey"),
      n = Qt();
    return (
      e.addFormItemField(t, n.type),
      rt(function () {
        e.removeFormItemField(t);
      }),
      Ze(Sa, ka),
      Ze(xa, Oa),
      Qe(xa, Oa)
    );
  };
de({
  name: "AFormItemRest",
  setup: function (e, t) {
    var n = t.slots;
    return (
      Ze(Sa, ka),
      Ze(xa, Oa),
      function () {
        var r;
        return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
      }
    );
  }
});
function Ft(e) {
  var t = Le();
  return (
    Xe(
      function () {
        t.value = e();
      },
      { flush: "sync" }
    ),
    t
  );
}
var Pt = { adjustX: 1, adjustY: 1 },
  Tt = [0, 0],
  Tf = {
    left: {
      points: ["cr", "cl"],
      overflow: Pt,
      offset: [-4, 0],
      targetOffset: Tt
    },
    right: {
      points: ["cl", "cr"],
      overflow: Pt,
      offset: [4, 0],
      targetOffset: Tt
    },
    top: {
      points: ["bc", "tc"],
      overflow: Pt,
      offset: [0, -4],
      targetOffset: Tt
    },
    bottom: {
      points: ["tc", "bc"],
      overflow: Pt,
      offset: [0, 4],
      targetOffset: Tt
    },
    topLeft: {
      points: ["bl", "tl"],
      overflow: Pt,
      offset: [0, -4],
      targetOffset: Tt
    },
    leftTop: {
      points: ["tr", "tl"],
      overflow: Pt,
      offset: [-4, 0],
      targetOffset: Tt
    },
    topRight: {
      points: ["br", "tr"],
      overflow: Pt,
      offset: [0, -4],
      targetOffset: Tt
    },
    rightTop: {
      points: ["tl", "tr"],
      overflow: Pt,
      offset: [4, 0],
      targetOffset: Tt
    },
    bottomRight: {
      points: ["tr", "br"],
      overflow: Pt,
      offset: [0, 4],
      targetOffset: Tt
    },
    rightBottom: {
      points: ["bl", "br"],
      overflow: Pt,
      offset: [4, 0],
      targetOffset: Tt
    },
    bottomLeft: {
      points: ["tl", "bl"],
      overflow: Pt,
      offset: [0, 4],
      targetOffset: Tt
    },
    leftBottom: {
      points: ["br", "bl"],
      overflow: Pt,
      offset: [-4, 0],
      targetOffset: Tt
    }
  },
  DC = { prefixCls: String, id: String, overlayInnerStyle: K.any },
  KC = de({
    name: "Content",
    props: DC,
    slots: ["overlay"],
    setup: function (e, t) {
      var n = t.slots;
      return function () {
        var r;
        return m(
          "div",
          {
            class: "".concat(e.prefixCls, "-inner"),
            id: e.id,
            role: "tooltip",
            style: e.overlayInnerStyle
          },
          [(r = n.overlay) === null || r === void 0 ? void 0 : r.call(n)]
        );
      };
    }
  }),
  LC = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  };
function Lu() {}
var RC = de({
    name: "Tooltip",
    inheritAttrs: !1,
    props: {
      trigger: K.any.def(["hover"]),
      defaultVisible: { type: Boolean, default: void 0 },
      visible: { type: Boolean, default: void 0 },
      placement: K.string.def("right"),
      transitionName: String,
      animation: K.any,
      afterVisibleChange: K.func.def(function () {}),
      overlayStyle: { type: Object, default: void 0 },
      overlayClassName: String,
      prefixCls: K.string.def("rc-tooltip"),
      mouseEnterDelay: K.number.def(0.1),
      mouseLeaveDelay: K.number.def(0.1),
      getPopupContainer: Function,
      destroyTooltipOnHide: { type: Boolean, default: !1 },
      align: K.object.def(function () {
        return {};
      }),
      arrowContent: K.any.def(null),
      tipId: String,
      builtinPlacements: K.object,
      overlayInnerStyle: { type: Object, default: void 0 },
      popupVisible: { type: Boolean, default: void 0 },
      onVisibleChange: Function,
      onPopupAlign: Function
    },
    slots: ["arrowContent", "overlay"],
    setup: function (e, t) {
      var n = t.slots,
        r = t.attrs,
        o = t.expose,
        a = L(),
        i = function () {
          var s = e.prefixCls,
            d = e.tipId,
            f = e.overlayInnerStyle;
          return [
            m("div", { class: "".concat(s, "-arrow"), key: "arrow" }, [
              Zt(n, e, "arrowContent")
            ]),
            m(
              KC,
              { key: "content", prefixCls: s, id: d, overlayInnerStyle: f },
              { overlay: n.overlay }
            )
          ];
        },
        l = function () {
          return a.value.getPopupDomNode();
        };
      o({
        getPopupDomNode: l,
        triggerDOM: a,
        forcePopupAlign: function () {
          var s;
          return (s = a.value) === null || s === void 0
            ? void 0
            : s.forcePopupAlign();
        }
      });
      var c = L(!1),
        u = L(!1);
      return (
        Xe(function () {
          var s = e.destroyTooltipOnHide;
          if (typeof s == "boolean") c.value = s;
          else if (s && We(s) === "object") {
            var d = s.keepParent;
            (c.value = d === !0), (u.value = d === !1);
          }
        }),
        function () {
          var s = e.overlayClassName,
            d = e.trigger,
            f = e.mouseEnterDelay,
            v = e.mouseLeaveDelay,
            p = e.overlayStyle,
            b = e.prefixCls,
            w = e.afterVisibleChange,
            C = e.transitionName,
            y = e.animation,
            x = e.placement,
            h = e.align;
          e.destroyTooltipOnHide;
          var g = e.defaultVisible,
            S = LC(e, [
              "overlayClassName",
              "trigger",
              "mouseEnterDelay",
              "mouseLeaveDelay",
              "overlayStyle",
              "prefixCls",
              "afterVisibleChange",
              "transitionName",
              "animation",
              "placement",
              "align",
              "destroyTooltipOnHide",
              "defaultVisible"
            ]),
            P = k({}, S);
          e.visible !== void 0 && (P.popupVisible = e.visible);
          var A = k(
            k(
              k(
                {
                  popupClassName: s,
                  prefixCls: b,
                  action: d,
                  builtinPlacements: Tf,
                  popupPlacement: x,
                  popupAlign: h,
                  afterPopupVisibleChange: w,
                  popupTransitionName: C,
                  popupAnimation: y,
                  defaultPopupVisible: g,
                  destroyPopupOnHide: c.value,
                  autoDestroy: u.value,
                  mouseLeaveDelay: v,
                  popupStyle: p,
                  mouseEnterDelay: f
                },
                P
              ),
              r
            ),
            {
              onPopupVisibleChange: e.onVisibleChange || Lu,
              onPopupAlign: e.onPopupAlign || Lu,
              ref: a,
              popup: i()
            }
          );
          return m(vo, A, { default: n.default });
        }
      );
    }
  }),
  BC = RC;
ao("success", "processing", "error", "default", "warning");
var HC = ao(
    "pink",
    "red",
    "yellow",
    "orange",
    "cyan",
    "green",
    "blue",
    "purple",
    "geekblue",
    "magenta",
    "volcano",
    "gold",
    "lime"
  ),
  VC = function () {
    return {
      trigger: [String, Array],
      visible: { type: Boolean, default: void 0 },
      defaultVisible: { type: Boolean, default: void 0 },
      placement: String,
      color: String,
      transitionName: String,
      overlayStyle: { type: Object, default: void 0 },
      overlayClassName: String,
      openClassName: String,
      prefixCls: String,
      mouseEnterDelay: Number,
      mouseLeaveDelay: Number,
      getPopupContainer: Function,
      arrowPointAtCenter: { type: Boolean, default: void 0 },
      autoAdjustOverflow: { type: [Boolean, Object], default: void 0 },
      destroyTooltipOnHide: { type: Boolean, default: void 0 },
      align: { type: Object, default: void 0 },
      builtinPlacements: { type: Object, default: void 0 },
      children: Array,
      onVisibleChange: Function,
      "onUpdate:visible": Function
    };
  },
  $C = { adjustX: 1, adjustY: 1 },
  Ru = { adjustX: 0, adjustY: 0 },
  zC = [0, 0];
function Bu(e) {
  return typeof e == "boolean" ? (e ? $C : Ru) : k(k({}, Ru), e);
}
function WC(e) {
  var t = e.arrowWidth,
    n = t === void 0 ? 4 : t,
    r = e.horizontalArrowShift,
    o = r === void 0 ? 16 : r,
    a = e.verticalArrowShift,
    i = a === void 0 ? 8 : a,
    l = e.autoAdjustOverflow,
    c = e.arrowPointAtCenter,
    u = {
      left: { points: ["cr", "cl"], offset: [-4, 0] },
      right: { points: ["cl", "cr"], offset: [4, 0] },
      top: { points: ["bc", "tc"], offset: [0, -4] },
      bottom: { points: ["tc", "bc"], offset: [0, 4] },
      topLeft: { points: ["bl", "tc"], offset: [-(o + n), -4] },
      leftTop: { points: ["tr", "cl"], offset: [-4, -(i + n)] },
      topRight: { points: ["br", "tc"], offset: [o + n, -4] },
      rightTop: { points: ["tl", "cr"], offset: [4, -(i + n)] },
      bottomRight: { points: ["tr", "bc"], offset: [o + n, 4] },
      rightBottom: { points: ["bl", "cr"], offset: [4, i + n] },
      bottomLeft: { points: ["tl", "bc"], offset: [-(o + n), 4] },
      leftBottom: { points: ["br", "cl"], offset: [-4, i + n] }
    };
  return (
    Object.keys(u).forEach(function (s) {
      (u[s] = c
        ? k(k({}, u[s]), { overflow: Bu(l), targetOffset: zC })
        : k(k({}, Tf[s]), { overflow: Bu(l) })),
        (u[s].ignoreShake = !0);
    }),
    u
  );
}
function UC() {
  for (
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
      t = 0,
      n = e.length;
    t < n;
    t++
  )
    if (e[t] !== void 0) return e[t];
}
var YC = UC,
  GC = function (e, t) {
    var n = {},
      r = k({}, e);
    return (
      t.forEach(function (o) {
        e && o in e && ((n[o] = e[o]), delete r[o]);
      }),
      { picked: n, omitted: r }
    );
  },
  Hu = new RegExp("^(".concat(HC.join("|"), ")(-inverse)?$")),
  qC = function () {
    return k(k({}, VC()), { title: K.any });
  },
  XC = de({
    name: "ATooltip",
    inheritAttrs: !1,
    props: en(qC(), {
      trigger: "hover",
      transitionName: "zoom-big-fast",
      align: {},
      placement: "top",
      mouseEnterDelay: 0.1,
      mouseLeaveDelay: 0.1,
      arrowPointAtCenter: !1,
      autoAdjustOverflow: !0
    }),
    slots: ["title"],
    setup: function (e, t) {
      var n = t.slots,
        r = t.emit,
        o = t.attrs,
        a = t.expose,
        i = Ct("tooltip", e),
        l = i.prefixCls,
        c = i.getPopupContainer,
        u = L(YC([e.visible, e.defaultVisible])),
        s = L();
      Ue(function () {
        cr(
          e.defaultVisible === void 0,
          "Tooltip",
          "'defaultVisible' is deprecated, please use 'v-model:visible'"
        );
      });
      var d;
      fe(
        function () {
          return e.visible;
        },
        function (h) {
          Be.cancel(d),
            (d = Be(function () {
              u.value = !!h;
            }));
        }
      );
      var f = function () {
          var h,
            g = (h = e.title) !== null && h !== void 0 ? h : n.title;
          return !g && g !== 0;
        },
        v = function (h) {
          var g = f();
          e.visible === void 0 && (u.value = g ? !1 : h),
            g || (r("update:visible", h), r("visibleChange", h));
        },
        p = function () {
          return s.value.getPopupDomNode();
        };
      a({
        getPopupDomNode: p,
        visible: u,
        forcePopupAlign: function () {
          var h;
          return (h = s.value) === null || h === void 0
            ? void 0
            : h.forcePopupAlign();
        }
      });
      var b = E(function () {
          var h = e.builtinPlacements,
            g = e.arrowPointAtCenter,
            S = e.autoAdjustOverflow;
          return h || WC({ arrowPointAtCenter: g, autoAdjustOverflow: S });
        }),
        w = function (h) {
          return h || h === "";
        },
        C = function (h) {
          var g = h.type;
          if (
            We(g) === "object" &&
            h.props &&
            (((g.__ANT_BUTTON === !0 || g === "button") &&
              w(h.props.disabled)) ||
              (g.__ANT_SWITCH === !0 &&
                (w(h.props.disabled) || w(h.props.loading))))
          ) {
            var S = GC(_h(h), [
                "position",
                "left",
                "right",
                "top",
                "bottom",
                "float",
                "display",
                "zIndex"
              ]),
              P = S.picked,
              A = S.omitted,
              R = k(k({ display: "inline-block" }, P), {
                cursor: "not-allowed",
                lineHeight: 1,
                width: h.props && h.props.block ? "100%" : null
              }),
              M = k(k({}, A), { pointerEvents: "none" }),
              q = At(h, { style: M }, !0);
            return m(
              "span",
              {
                style: R,
                class: "".concat(l.value, "-disabled-compatible-wrapper")
              },
              [q]
            );
          }
          return h;
        },
        y = function () {
          var h, g;
          return (h = e.title) !== null && h !== void 0
            ? h
            : (g = n.title) === null || g === void 0
            ? void 0
            : g.call(n);
        },
        x = function (h, g) {
          var S = b.value,
            P = Object.keys(S).filter(function (M) {
              return (
                S[M].points[0] === g.points[0] && S[M].points[1] === g.points[1]
              );
            })[0];
          if (P) {
            var A = h.getBoundingClientRect(),
              R = { top: "50%", left: "50%" };
            P.indexOf("top") >= 0 || P.indexOf("Bottom") >= 0
              ? (R.top = "".concat(A.height - g.offset[1], "px"))
              : (P.indexOf("Top") >= 0 || P.indexOf("bottom") >= 0) &&
                (R.top = "".concat(-g.offset[1], "px")),
              P.indexOf("left") >= 0 || P.indexOf("Right") >= 0
                ? (R.left = "".concat(A.width - g.offset[0], "px"))
                : (P.indexOf("right") >= 0 || P.indexOf("Left") >= 0) &&
                  (R.left = "".concat(-g.offset[0], "px")),
              (h.style.transformOrigin = "".concat(R.left, " ").concat(R.top));
          }
        };
      return function () {
        var h,
          g,
          S,
          P = e.openClassName,
          A = e.color,
          R = e.overlayClassName,
          M =
            (S = Ln(
              (g = n.default) === null || g === void 0 ? void 0 : g.call(n)
            )) !== null && S !== void 0
              ? S
              : null;
        M = M.length === 1 ? M[0] : M;
        var q = u.value;
        if ((e.visible === void 0 && f() && (q = !1), !M)) return null;
        var B = C(Rn(M) ? M : m("span", null, [M])),
          j = we(
            ((h = {}),
            U(h, P || "".concat(l.value, "-open"), !0),
            U(h, B.props && B.props.class, B.props && B.props.class),
            h)
          ),
          T = we(R, U({}, "".concat(l.value, "-").concat(A), A && Hu.test(A))),
          O,
          I;
        A &&
          !Hu.test(A) &&
          ((O = { backgroundColor: A }), (I = { backgroundColor: A }));
        var V = k(k(k({}, o), e), {
          prefixCls: l.value,
          getPopupContainer: c.value,
          builtinPlacements: b.value,
          visible: q,
          ref: s,
          overlayClassName: T,
          overlayInnerStyle: O,
          onVisibleChange: v,
          onPopupAlign: x
        });
        return m(BC, V, {
          default: function () {
            return [u.value ? At(B, { class: j }) : B];
          },
          arrowContent: function () {
            return m(
              "span",
              { class: "".concat(l.value, "-arrow-content"), style: I },
              null
            );
          },
          overlay: y
        });
      };
    }
  }),
  ZC = br(XC),
  gn = { adjustX: 1, adjustY: 1 },
  yn = [0, 0],
  QC = {
    topLeft: {
      points: ["bl", "tl"],
      overflow: gn,
      offset: [0, -4],
      targetOffset: yn
    },
    topCenter: {
      points: ["bc", "tc"],
      overflow: gn,
      offset: [0, -4],
      targetOffset: yn
    },
    topRight: {
      points: ["br", "tr"],
      overflow: gn,
      offset: [0, -4],
      targetOffset: yn
    },
    bottomLeft: {
      points: ["tl", "bl"],
      overflow: gn,
      offset: [0, 4],
      targetOffset: yn
    },
    bottomCenter: {
      points: ["tc", "bc"],
      overflow: gn,
      offset: [0, 4],
      targetOffset: yn
    },
    bottomRight: {
      points: ["tr", "br"],
      overflow: gn,
      offset: [0, 4],
      targetOffset: yn
    }
  },
  JC = QC,
  ex = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  },
  tx = de({
    props: {
      minOverlayWidthMatchTrigger: { type: Boolean, default: void 0 },
      arrow: { type: Boolean, default: !1 },
      prefixCls: K.string.def("rc-dropdown"),
      transitionName: String,
      overlayClassName: K.string.def(""),
      openClassName: String,
      animation: K.any,
      align: K.object,
      overlayStyle: { type: Object, default: void 0 },
      placement: K.string.def("bottomLeft"),
      overlay: K.any,
      trigger: K.oneOfType([K.string, K.arrayOf(K.string)]).def("hover"),
      alignPoint: { type: Boolean, default: void 0 },
      showAction: K.array,
      hideAction: K.array,
      getPopupContainer: Function,
      visible: { type: Boolean, default: void 0 },
      defaultVisible: { type: Boolean, default: !1 },
      mouseEnterDelay: K.number.def(0.15),
      mouseLeaveDelay: K.number.def(0.1)
    },
    emits: ["visibleChange", "overlayClick"],
    slots: ["overlay"],
    setup: function (e, t) {
      var n = t.slots,
        r = t.emit,
        o = t.expose,
        a = L(!!e.visible);
      fe(
        function () {
          return e.visible;
        },
        function (v) {
          v !== void 0 && (a.value = v);
        }
      );
      var i = L();
      o({ triggerRef: i });
      var l = function (v) {
          e.visible === void 0 && (a.value = !1), r("overlayClick", v);
        },
        c = function (v) {
          e.visible === void 0 && (a.value = v), r("visibleChange", v);
        },
        u = function () {
          var v,
            p = (v = n.overlay) === null || v === void 0 ? void 0 : v.call(n),
            b = {
              prefixCls: "".concat(e.prefixCls, "-menu"),
              onClick: l,
              getPopupContainer: function () {
                return i.value.getPopupDomNode();
              }
            };
          return m(wt, null, [
            e.arrow &&
              m("div", { class: "".concat(e.prefixCls, "-arrow") }, null),
            At(p, b, !1)
          ]);
        },
        s = E(function () {
          var v = e.minOverlayWidthMatchTrigger,
            p = v === void 0 ? !e.alignPoint : v;
          return p;
        }),
        d = function () {
          var v,
            p = (v = n.default) === null || v === void 0 ? void 0 : v.call(n);
          return a.value && p
            ? At(
                p[0],
                { class: e.openClassName || "".concat(e.prefixCls, "-open") },
                !1
              )
            : p;
        },
        f = E(function () {
          return !e.hideAction && e.trigger.indexOf("contextmenu") !== -1
            ? ["click"]
            : e.hideAction;
        });
      return function () {
        var v = e.prefixCls,
          p = e.arrow,
          b = e.showAction,
          w = e.overlayStyle,
          C = e.trigger,
          y = e.placement,
          x = e.align,
          h = e.getPopupContainer,
          g = e.transitionName,
          S = e.animation,
          P = e.overlayClassName,
          A = ex(e, [
            "prefixCls",
            "arrow",
            "showAction",
            "overlayStyle",
            "trigger",
            "placement",
            "align",
            "getPopupContainer",
            "transitionName",
            "animation",
            "overlayClassName"
          ]);
        return m(
          vo,
          X(
            X({}, A),
            {},
            {
              prefixCls: v,
              ref: i,
              popupClassName: we(P, U({}, "".concat(v, "-show-arrow"), p)),
              popupStyle: w,
              builtinPlacements: JC,
              action: C,
              showAction: b,
              hideAction: f.value || [],
              popupPlacement: y,
              popupAlign: x,
              popupTransitionName: g,
              popupAnimation: S,
              popupVisible: a.value,
              stretch: s.value ? "minWidth" : "",
              onPopupVisibleChange: c,
              getPopupContainer: h
            }
          ),
          { popup: u, default: d }
        );
      };
    }
  }),
  nx = tx,
  zo = {
    transitionstart: {
      transition: "transitionstart",
      WebkitTransition: "webkitTransitionStart",
      MozTransition: "mozTransitionStart",
      OTransition: "oTransitionStart",
      msTransition: "MSTransitionStart"
    },
    animationstart: {
      animation: "animationstart",
      WebkitAnimation: "webkitAnimationStart",
      MozAnimation: "mozAnimationStart",
      OAnimation: "oAnimationStart",
      msAnimation: "MSAnimationStart"
    }
  },
  Wo = {
    transitionend: {
      transition: "transitionend",
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "mozTransitionEnd",
      OTransition: "oTransitionEnd",
      msTransition: "MSTransitionEnd"
    },
    animationend: {
      animation: "animationend",
      WebkitAnimation: "webkitAnimationEnd",
      MozAnimation: "mozAnimationEnd",
      OAnimation: "oAnimationEnd",
      msAnimation: "MSAnimationEnd"
    }
  },
  Cn = [],
  xn = [];
function rx() {
  var e = document.createElement("div"),
    t = e.style;
  "AnimationEvent" in window ||
    (delete zo.animationstart.animation, delete Wo.animationend.animation),
    "TransitionEvent" in window ||
      (delete zo.transitionstart.transition,
      delete Wo.transitionend.transition);
  function n(r, o) {
    for (var a in r)
      if (r.hasOwnProperty(a)) {
        var i = r[a];
        for (var l in i)
          if (l in t) {
            o.push(i[l]);
            break;
          }
      }
  }
  n(zo, Cn), n(Wo, xn);
}
typeof window < "u" && typeof document < "u" && rx();
function Vu(e, t, n) {
  e.addEventListener(t, n, !1);
}
function $u(e, t, n) {
  e.removeEventListener(t, n, !1);
}
var ox = {
    startEvents: Cn,
    addStartEventListener: function (e, t) {
      if (Cn.length === 0) {
        setTimeout(t, 0);
        return;
      }
      Cn.forEach(function (n) {
        Vu(e, n, t);
      });
    },
    removeStartEventListener: function (e, t) {
      Cn.length !== 0 &&
        Cn.forEach(function (n) {
          $u(e, n, t);
        });
    },
    endEvents: xn,
    addEndEventListener: function (e, t) {
      if (xn.length === 0) {
        setTimeout(t, 0);
        return;
      }
      xn.forEach(function (n) {
        Vu(e, n, t);
      });
    },
    removeEndEventListener: function (e, t) {
      xn.length !== 0 &&
        xn.forEach(function (n) {
          $u(e, n, t);
        });
    }
  },
  Kr = ox,
  Wt;
function zu(e) {
  return !e || e.offsetParent === null;
}
function ax(e) {
  var t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
var ix = de({
  name: "Wave",
  props: { insertExtraNode: Boolean, disabled: Boolean },
  setup: function (e, t) {
    var n = t.slots,
      r = t.expose,
      o = Qt(),
      a = Ct("", e),
      i = a.csp,
      l = a.prefixCls;
    r({ csp: i });
    var c = null,
      u = null,
      s = null,
      d = !1,
      f = null,
      v = !1,
      p = function (h) {
        if (!v) {
          var g = lr(o);
          !h || h.target !== g || d || y(g);
        }
      },
      b = function (h) {
        !h || h.animationName !== "fadeEffect" || y(h.target);
      },
      w = function () {
        var h = e.insertExtraNode;
        return h
          ? "".concat(l.value, "-click-animating")
          : "".concat(l.value, "-click-animating-without-extra-node");
      },
      C = function (h, g) {
        var S,
          P = e.insertExtraNode,
          A = e.disabled;
        if (!(A || !h || zu(h) || h.className.indexOf("-leave") >= 0)) {
          (f = document.createElement("div")),
            (f.className = "".concat(l.value, "-click-animating-node"));
          var R = w();
          h.removeAttribute(R),
            h.setAttribute(R, "true"),
            (Wt = Wt || document.createElement("style")),
            g &&
              g !== "#ffffff" &&
              g !== "rgb(255, 255, 255)" &&
              ax(g) &&
              !/rgba\(\d*, \d*, \d*, 0\)/.test(g) &&
              g !== "transparent" &&
              (!((S = i.value) === null || S === void 0) &&
                S.nonce &&
                (Wt.nonce = i.value.nonce),
              (f.style.borderColor = g),
              (Wt.innerHTML = `
        [`
                .concat(
                  l.value,
                  "-click-animating-without-extra-node='true']::after, ."
                )
                .concat(
                  l.value,
                  `-click-animating-node {
          --antd-wave-shadow-color: `
                )
                .concat(
                  g,
                  `;
        }`
                )),
              document.body.contains(Wt) || document.body.appendChild(Wt)),
            P && h.appendChild(f),
            Kr.addStartEventListener(h, p),
            Kr.addEndEventListener(h, b);
        }
      },
      y = function (h) {
        if (!(!h || h === f || !(h instanceof Element))) {
          var g = e.insertExtraNode,
            S = w();
          h.setAttribute(S, "false"),
            Wt && (Wt.innerHTML = ""),
            g && f && h.contains(f) && h.removeChild(f),
            Kr.removeStartEventListener(h, p),
            Kr.removeEndEventListener(h, b);
        }
      },
      x = function (h) {
        if (
          !(
            !h ||
            !h.getAttribute ||
            h.getAttribute("disabled") ||
            h.className.indexOf("disabled") >= 0
          )
        ) {
          var g = function (S) {
            if (!(S.target.tagName === "INPUT" || zu(S.target))) {
              y(h);
              var P =
                getComputedStyle(h).getPropertyValue("border-top-color") ||
                getComputedStyle(h).getPropertyValue("border-color") ||
                getComputedStyle(h).getPropertyValue("background-color");
              (u = setTimeout(function () {
                return C(h, P);
              }, 0)),
                Be.cancel(s),
                (d = !0),
                (s = Be(function () {
                  d = !1;
                }, 10));
            }
          };
          return (
            h.addEventListener("click", g, !0),
            {
              cancel: function () {
                h.removeEventListener("click", g, !0);
              }
            }
          );
        }
      };
    return (
      Ue(function () {
        ft(function () {
          var h = lr(o);
          h.nodeType === 1 && (c = x(h));
        });
      }),
      rt(function () {
        c && c.cancel(), clearTimeout(u), (v = !0);
      }),
      function () {
        var h;
        return (h = n.default) === null || h === void 0 ? void 0 : h.call(n)[0];
      }
    );
  }
});
function lx(e, t, n, r) {
  var o = n ? n.call(r, e, t) : void 0;
  if (o !== void 0) return !!o;
  if (e === t) return !0;
  if (We(e) !== "object" || !e || We(t) !== "object" || !t) return !1;
  var a = Object.keys(e),
    i = Object.keys(t);
  if (a.length !== i.length) return !1;
  for (
    var l = Object.prototype.hasOwnProperty.bind(t), c = 0;
    c < a.length;
    c++
  ) {
    var u = a[c];
    if (!l(u)) return !1;
    var s = e[u],
      d = t[u];
    if (
      ((o = n ? n.call(r, s, d, u) : void 0),
      o === !1 || (o === void 0 && s !== d))
    )
      return !1;
  }
  return !0;
}
function Qn(e, t, n, r) {
  return lx(mt(e), mt(t), n, r);
}
var Ef = Symbol("menuContextKey"),
  Af = function (e) {
    Ze(Ef, e);
  },
  tn = function () {
    return Qe(Ef);
  },
  Nf = Symbol("ForceRenderKey"),
  ux = function (e) {
    Ze(Nf, e);
  },
  Mf = function () {
    return Qe(Nf, !1);
  },
  If = Symbol("menuFirstLevelContextKey"),
  _f = function (e) {
    Ze(If, e);
  },
  cx = function () {
    return Qe(If, !0);
  },
  to = de({
    name: "MenuContextProvider",
    inheritAttrs: !1,
    props: {
      mode: { type: String, default: void 0 },
      overflowDisabled: { type: Boolean, default: void 0 },
      isRootMenu: { type: Boolean, default: void 0 }
    },
    setup: function (e, t) {
      var n = t.slots,
        r = tn(),
        o = k({}, r);
      return (
        e.mode !== void 0 && (o.mode = Mt(e, "mode")),
        e.isRootMenu !== void 0 && (o.isRootMenu = Mt(e, "isRootMenu")),
        e.overflowDisabled !== void 0 &&
          (o.overflowDisabled = Mt(e, "overflowDisabled")),
        Af(o),
        function () {
          var a;
          return (a = n.default) === null || a === void 0 ? void 0 : a.call(n);
        }
      );
    }
  }),
  sx = Af;
function fx(e, t, n, r) {
  for (var o = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < o; )
    if (t(e[a], a, e)) return a;
  return -1;
}
var dx = fx;
function vx(e) {
  return e !== e;
}
var px = vx;
function hx(e, t, n) {
  for (var r = n - 1, o = e.length; ++r < o; ) if (e[r] === t) return r;
  return -1;
}
var mx = hx;
function gx(e, t, n) {
  return t === t ? mx(e, t, n) : dx(e, px, n);
}
var yx = gx;
function bx(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && yx(e, t, 0) > -1;
}
var wx = bx;
function Cx(e, t, n) {
  for (var r = -1, o = e == null ? 0 : e.length; ++r < o; )
    if (n(t, e[r])) return !0;
  return !1;
}
var xx = Cx;
function Sx() {}
var Ox = Sx,
  kx = 1 / 0,
  Px =
    Pn && 1 / bi(new Pn([, -0]))[1] == kx
      ? function (e) {
          return new Pn(e);
        }
      : Ox,
  Tx = Px,
  Ex = 200;
function Ax(e, t, n) {
  var r = -1,
    o = wx,
    a = e.length,
    i = !0,
    l = [],
    c = l;
  if (n) (i = !1), (o = xx);
  else if (a >= Ex) {
    var u = t ? null : Tx(e);
    if (u) return bi(u);
    (i = !1), (o = of), (c = new rf());
  } else c = t ? [] : l;
  e: for (; ++r < a; ) {
    var s = e[r],
      d = t ? t(s) : s;
    if (((s = n || s !== 0 ? s : 0), i && d === d)) {
      for (var f = c.length; f--; ) if (c[f] === d) continue e;
      t && c.push(d), l.push(s);
    } else o(c, d, n) || (c !== l && c.push(d), l.push(s));
  }
  return l;
}
var Nx = Ax;
function Mx(e) {
  return e && e.length ? Nx(e) : [];
}
var Uo = Mx,
  Ix = Symbol("siderCollapsed"),
  Lr = "$$__vc-menu-more__key",
  jf = Symbol("KeyPathContext"),
  Oi = function () {
    return Qe(jf, {
      parentEventKeys: E(function () {
        return [];
      }),
      parentKeys: E(function () {
        return [];
      }),
      parentInfo: {}
    });
  },
  _x = function (e, t, n) {
    var r = Oi(),
      o = r.parentEventKeys,
      a = r.parentKeys,
      i = E(function () {
        return [].concat(Re(o.value), [e]);
      }),
      l = E(function () {
        return [].concat(Re(a.value), [t]);
      });
    return Ze(jf, { parentEventKeys: i, parentKeys: l, parentInfo: n }), l;
  },
  Ff = Symbol("measure"),
  Wu = de({
    setup: function (e, t) {
      var n = t.slots;
      return (
        Ze(Ff, !0),
        function () {
          var r;
          return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
        }
      );
    }
  }),
  ki = function () {
    return Qe(Ff, !1);
  },
  jx = _x;
function Df(e) {
  var t = tn(),
    n = t.mode,
    r = t.rtl,
    o = t.inlineIndent;
  return E(function () {
    return n.value !== "inline"
      ? null
      : r.value
      ? { paddingRight: "".concat(e.value * o.value, "px") }
      : { paddingLeft: "".concat(e.value * o.value, "px") };
  });
}
var Fx = 0,
  Dx = function () {
    return {
      id: String,
      role: String,
      disabled: Boolean,
      danger: Boolean,
      title: { type: [String, Boolean], default: void 0 },
      icon: K.any,
      onMouseenter: Function,
      onMouseleave: Function,
      onClick: Function,
      onKeydown: Function,
      onFocus: Function
    };
  },
  pr = de({
    name: "AMenuItem",
    inheritAttrs: !1,
    props: Dx(),
    slots: ["icon", "title"],
    setup: function (e, t) {
      var n = t.slots,
        r = t.emit,
        o = t.attrs,
        a = Qt(),
        i = ki(),
        l = We(a.vnode.key) === "symbol" ? String(a.vnode.key) : a.vnode.key;
      Lt(
        We(a.vnode.key) !== "symbol",
        "MenuItem",
        'MenuItem `:key="'.concat(String(l), '"` not support Symbol type')
      );
      var c = "menu_item_".concat(++Fx, "_$$_").concat(l),
        u = Oi(),
        s = u.parentEventKeys,
        d = u.parentKeys,
        f = tn(),
        v = f.prefixCls,
        p = f.activeKeys,
        b = f.disabled,
        w = f.changeActiveKeys,
        C = f.rtl,
        y = f.inlineCollapsed,
        x = f.siderCollapsed,
        h = f.onItemClick,
        g = f.selectedKeys,
        S = f.registerMenuInfo,
        P = f.unRegisterMenuInfo,
        A = cx(),
        R = L(!1),
        M = E(function () {
          return [].concat(Re(d.value), [l]);
        }),
        q = {
          eventKey: c,
          key: l,
          parentEventKeys: s,
          parentKeys: d,
          isLeaf: !0
        };
      S(c, q),
        rt(function () {
          P(c);
        }),
        fe(
          p,
          function () {
            R.value = !!p.value.find(function (N) {
              return N === l;
            });
          },
          { immediate: !0 }
        );
      var B = E(function () {
          return b.value || e.disabled;
        }),
        j = E(function () {
          return g.value.includes(l);
        }),
        T = E(function () {
          var N,
            Y = "".concat(v.value, "-item");
          return (
            (N = {}),
            U(N, "".concat(Y), !0),
            U(N, "".concat(Y, "-danger"), e.danger),
            U(N, "".concat(Y, "-active"), R.value),
            U(N, "".concat(Y, "-selected"), j.value),
            U(N, "".concat(Y, "-disabled"), B.value),
            N
          );
        }),
        O = function (N) {
          return {
            key: l,
            eventKey: c,
            keyPath: M.value,
            eventKeyPath: [].concat(Re(s.value), [c]),
            domEvent: N,
            item: k(k({}, e), o)
          };
        },
        I = function (N) {
          if (!B.value) {
            var Y = O(N);
            r("click", N), h(Y);
          }
        },
        V = function (N) {
          B.value || (w(M.value), r("mouseenter", N));
        },
        D = function (N) {
          B.value || (w([]), r("mouseleave", N));
        },
        G = function (N) {
          if ((r("keydown", N), N.which === he.ENTER)) {
            var Y = O(N);
            r("click", N), h(Y);
          }
        },
        oe = function (N) {
          w(M.value), r("focus", N);
        },
        ue = function (N, Y) {
          var ne = m("span", { class: "".concat(v.value, "-title-content") }, [
            Y
          ]);
          return (!N || (Rn(Y) && Y.type === "span")) &&
            Y &&
            y.value &&
            A &&
            typeof Y == "string"
            ? m(
                "div",
                { class: "".concat(v.value, "-inline-collapsed-noicon") },
                [Y.charAt(0)]
              )
            : ne;
        },
        z = Df(
          E(function () {
            return M.value.length;
          })
        );
      return function () {
        var N, Y, ne, le;
        if (i) return null;
        var Pe =
            (Y = e.title) !== null && Y !== void 0
              ? Y
              : (ne = n.title) === null || ne === void 0
              ? void 0
              : ne.call(n),
          xe = It(
            (le = n.default) === null || le === void 0 ? void 0 : le.call(n)
          ),
          me = xe.length,
          je = Pe;
        typeof Pe > "u" ? (je = A && me ? xe : "") : Pe === !1 && (je = "");
        var Z = { title: je };
        !x.value && !y.value && ((Z.title = null), (Z.visible = !1));
        var $ = {};
        e.role === "option" && ($["aria-selected"] = j.value);
        var ve = Zt(n, e, "icon");
        return m(
          ZC,
          X(
            X({}, Z),
            {},
            {
              placement: C.value ? "left" : "right",
              overlayClassName: "".concat(v.value, "-inline-collapsed-tooltip")
            }
          ),
          {
            default: function () {
              return [
                m(
                  Tn.Item,
                  X(
                    X(
                      X({ component: "li" }, o),
                      {},
                      {
                        id: e.id,
                        style: k(k({}, o.style || {}), z.value),
                        class: [
                          T.value,
                          ((N = {}),
                          U(N, "".concat(o.class), !!o.class),
                          U(
                            N,
                            "".concat(v.value, "-item-only-child"),
                            (ve ? me + 1 : me) === 1
                          ),
                          N)
                        ],
                        role: e.role || "menuitem",
                        tabindex: e.disabled ? null : -1,
                        "data-menu-id": l,
                        "aria-disabled": e.disabled
                      },
                      $
                    ),
                    {},
                    {
                      onMouseenter: V,
                      onMouseleave: D,
                      onClick: I,
                      onKeydown: G,
                      onFocus: oe,
                      title: typeof Pe == "string" ? Pe : void 0
                    }
                  ),
                  {
                    default: function () {
                      return [
                        At(ve, { class: "".concat(v.value, "-item-icon") }, !1),
                        ue(ve, xe)
                      ];
                    }
                  }
                )
              ];
            }
          }
        );
      };
    }
  }),
  qt = { adjustX: 1, adjustY: 1 },
  Kx = {
    topLeft: { points: ["bl", "tl"], overflow: qt, offset: [0, -7] },
    bottomLeft: { points: ["tl", "bl"], overflow: qt, offset: [0, 7] },
    leftTop: { points: ["tr", "tl"], overflow: qt, offset: [-4, 0] },
    rightTop: { points: ["tl", "tr"], overflow: qt, offset: [4, 0] }
  },
  Lx = {
    topLeft: { points: ["bl", "tl"], overflow: qt, offset: [0, -7] },
    bottomLeft: { points: ["tl", "bl"], overflow: qt, offset: [0, 7] },
    rightTop: { points: ["tr", "tl"], overflow: qt, offset: [-4, 0] },
    leftTop: { points: ["tl", "tr"], overflow: qt, offset: [4, 0] }
  },
  Rx = {
    horizontal: "bottomLeft",
    vertical: "rightTop",
    "vertical-left": "rightTop",
    "vertical-right": "leftTop"
  },
  Uu = de({
    name: "PopupTrigger",
    inheritAttrs: !1,
    props: {
      prefixCls: String,
      mode: String,
      visible: Boolean,
      popupClassName: String,
      popupOffset: Array,
      disabled: Boolean,
      onVisibleChange: Function
    },
    slots: ["popup"],
    emits: ["visibleChange"],
    setup: function (e, t) {
      var n = t.slots,
        r = t.emit,
        o = L(!1),
        a = tn(),
        i = a.getPopupContainer,
        l = a.rtl,
        c = a.subMenuOpenDelay,
        u = a.subMenuCloseDelay,
        s = a.builtinPlacements,
        d = a.triggerSubMenuAction,
        f = a.isRootMenu,
        v = a.forceSubMenuRender,
        p = a.motion,
        b = a.defaultMotions,
        w = Mf(),
        C = E(function () {
          return l.value ? k(k({}, Lx), s.value) : k(k({}, Kx), s.value);
        }),
        y = E(function () {
          return Rx[e.mode];
        }),
        x = L();
      fe(
        function () {
          return e.visible;
        },
        function (S) {
          Be.cancel(x.value),
            (x.value = Be(function () {
              o.value = S;
            }));
        },
        { immediate: !0 }
      ),
        rt(function () {
          Be.cancel(x.value);
        });
      var h = function (S) {
          r("visibleChange", S);
        },
        g = E(function () {
          var S,
            P,
            A =
              p.value ||
              ((S = b.value) === null || S === void 0 ? void 0 : S[e.mode]) ||
              ((P = b.value) === null || P === void 0 ? void 0 : P.other),
            R = typeof A == "function" ? A() : A;
          return R ? Cs(R.name, { css: !0 }) : void 0;
        });
      return function () {
        var S = e.prefixCls,
          P = e.popupClassName,
          A = e.mode,
          R = e.popupOffset,
          M = e.disabled;
        return m(
          vo,
          {
            prefixCls: S,
            popupClassName: we(
              "".concat(S, "-popup"),
              U({}, "".concat(S, "-rtl"), l.value),
              P
            ),
            stretch: A === "horizontal" ? "minWidth" : null,
            getPopupContainer: f.value
              ? i.value
              : function (q) {
                  return q.parentNode;
                },
            builtinPlacements: C.value,
            popupPlacement: y.value,
            popupVisible: o.value,
            popupAlign: R && { offset: R },
            action: M ? [] : [d.value],
            mouseEnterDelay: c.value,
            mouseLeaveDelay: u.value,
            onPopupVisibleChange: h,
            forceRender: w || v.value,
            popupAnimation: g.value
          },
          { popup: n.popup, default: n.default }
        );
      };
    }
  }),
  Kf = function (e, t) {
    var n = t.slots,
      r = t.attrs,
      o,
      a = tn(),
      i = a.prefixCls,
      l = a.mode;
    return m(
      "ul",
      X(
        X({}, r),
        {},
        {
          class: we(
            i.value,
            "".concat(i.value, "-sub"),
            ""
              .concat(i.value, "-")
              .concat(l.value === "inline" ? "inline" : "vertical")
          ),
          "data-menu-list": !0
        }
      ),
      [(o = n.default) === null || o === void 0 ? void 0 : o.call(n)]
    );
  };
Kf.displayName = "SubMenuList";
var Lf = Kf,
  Bx = de({
    name: "InlineSubMenuList",
    inheritAttrs: !1,
    props: { id: String, open: Boolean, keyPath: Array },
    setup: function (e, t) {
      var n = t.slots,
        r = E(function () {
          return "inline";
        }),
        o = tn(),
        a = o.motion,
        i = o.mode,
        l = o.defaultMotions,
        c = E(function () {
          return i.value === r.value;
        }),
        u = L(!c.value),
        s = E(function () {
          return c.value ? e.open : !1;
        });
      fe(
        i,
        function () {
          c.value && (u.value = !1);
        },
        { flush: "post" }
      );
      var d = E(function () {
        var f,
          v,
          p =
            a.value ||
            ((f = l.value) === null || f === void 0 ? void 0 : f[r.value]) ||
            ((v = l.value) === null || v === void 0 ? void 0 : v.other),
          b = typeof p == "function" ? p() : p;
        return k(k({}, b), { appear: e.keyPath.length <= 1 });
      });
      return function () {
        var f;
        return u.value
          ? null
          : m(
              to,
              { mode: r.value },
              {
                default: function () {
                  return [
                    m(gm, d.value, {
                      default: function () {
                        return [
                          gr(
                            m(
                              Lf,
                              { id: e.id },
                              {
                                default: function () {
                                  return [
                                    (f = n.default) === null || f === void 0
                                      ? void 0
                                      : f.call(n)
                                  ];
                                }
                              }
                            ),
                            [[Fa, s.value]]
                          )
                        ];
                      }
                    })
                  ];
                }
              }
            );
      };
    }
  }),
  Yu = 0,
  Hx = function () {
    return {
      icon: K.any,
      title: K.any,
      disabled: Boolean,
      level: Number,
      popupClassName: String,
      popupOffset: Array,
      internalPopupClose: Boolean,
      eventKey: String,
      expandIcon: Function,
      onMouseenter: Function,
      onMouseleave: Function,
      onTitleClick: Function
    };
  },
  hr = de({
    name: "ASubMenu",
    inheritAttrs: !1,
    props: Hx(),
    slots: ["icon", "title", "expandIcon"],
    setup: function (e, t) {
      var n = t.slots,
        r = t.attrs,
        o = t.emit,
        a,
        i;
      _f(!1);
      var l = ki(),
        c = Qt(),
        u = We(c.vnode.key) === "symbol" ? String(c.vnode.key) : c.vnode.key;
      Lt(
        We(c.vnode.key) !== "symbol",
        "SubMenu",
        'SubMenu `:key="'.concat(String(u), '"` not support Symbol type')
      );
      var s = ta(u) ? u : "sub_menu_".concat(++Yu, "_$$_not_set_key"),
        d =
          (a = e.eventKey) !== null && a !== void 0
            ? a
            : ta(u)
            ? "sub_menu_".concat(++Yu, "_$$_").concat(u)
            : s,
        f = Oi(),
        v = f.parentEventKeys,
        p = f.parentInfo,
        b = f.parentKeys,
        w = E(function () {
          return [].concat(Re(b.value), [s]);
        }),
        C = L([]),
        y = {
          eventKey: d,
          key: s,
          parentEventKeys: v,
          childrenEventKeys: C,
          parentKeys: b
        };
      (i = p.childrenEventKeys) === null || i === void 0 || i.value.push(d),
        rt(function () {
          var pe;
          p.childrenEventKeys &&
            (p.childrenEventKeys.value =
              (pe = p.childrenEventKeys) === null || pe === void 0
                ? void 0
                : pe.value.filter(function (He) {
                    return He != d;
                  }));
        }),
        jx(d, s, y);
      var x = tn(),
        h = x.prefixCls,
        g = x.activeKeys,
        S = x.disabled,
        P = x.changeActiveKeys,
        A = x.mode,
        R = x.inlineCollapsed,
        M = x.antdMenuTheme,
        q = x.openKeys,
        B = x.overflowDisabled,
        j = x.onOpenChange,
        T = x.registerMenuInfo,
        O = x.unRegisterMenuInfo,
        I = x.selectedSubMenuKeys,
        V = x.expandIcon,
        D = u != null,
        G = !l && (Mf() || !D);
      ux(G),
        ((l && D) || (!l && !D) || G) &&
          (T(d, y),
          rt(function () {
            O(d);
          }));
      var oe = E(function () {
          return "".concat(h.value, "-submenu");
        }),
        ue = E(function () {
          return S.value || e.disabled;
        }),
        z = L(),
        N = L(),
        Y = E(function () {
          return q.value.includes(s);
        }),
        ne = E(function () {
          return !B.value && Y.value;
        }),
        le = E(function () {
          return I.value.includes(s);
        }),
        Pe = L(!1);
      fe(
        g,
        function () {
          Pe.value = !!g.value.find(function (pe) {
            return pe === s;
          });
        },
        { immediate: !0 }
      );
      var xe = function (pe) {
          ue.value ||
            (o("titleClick", pe, s), A.value === "inline" && j(s, !Y.value));
        },
        me = function (pe) {
          ue.value || (P(w.value), o("mouseenter", pe));
        },
        je = function (pe) {
          ue.value || (P([]), o("mouseleave", pe));
        },
        Z = Df(
          E(function () {
            return w.value.length;
          })
        ),
        $ = function (pe) {
          A.value !== "inline" && j(s, pe);
        },
        ve = function () {
          P(w.value);
        },
        Te = d && "".concat(d, "-popup"),
        Fe = E(function () {
          return we(
            h.value,
            "".concat(h.value, "-").concat(M.value),
            e.popupClassName
          );
        }),
        De = function (pe, He) {
          if (!He)
            return R.value && !b.value.length && pe && typeof pe == "string"
              ? m(
                  "div",
                  { class: "".concat(h.value, "-inline-collapsed-noicon") },
                  [pe.charAt(0)]
                )
              : m("span", { class: "".concat(h.value, "-title-content") }, [
                  pe
                ]);
          var Ve = Rn(pe) && pe.type === "span";
          return m(wt, null, [
            At(He, { class: "".concat(h.value, "-item-icon") }, !1),
            Ve
              ? pe
              : m("span", { class: "".concat(h.value, "-title-content") }, [pe])
          ]);
        },
        Ee = E(function () {
          return A.value !== "inline" && w.value.length > 1
            ? "vertical"
            : A.value;
        }),
        Ae = E(function () {
          return A.value === "horizontal" ? "vertical" : A.value;
        }),
        ze = E(function () {
          return Ee.value === "horizontal" ? "vertical" : Ee.value;
        }),
        Ye = function () {
          var pe = oe.value,
            He = Zt(n, e, "icon"),
            Ve = e.expandIcon || n.expandIcon || V.value,
            nt = De(Zt(n, e, "title"), He);
          return m(
            "div",
            {
              style: Z.value,
              class: "".concat(pe, "-title"),
              tabindex: ue.value ? null : -1,
              ref: z,
              title: typeof nt == "string" ? nt : null,
              "data-menu-id": s,
              "aria-expanded": ne.value,
              "aria-haspopup": !0,
              "aria-controls": Te,
              "aria-disabled": ue.value,
              onClick: xe,
              onFocus: ve
            },
            [
              nt,
              A.value !== "horizontal" && Ve
                ? Ve(k(k({}, e), { isOpen: ne.value }))
                : m("i", { class: "".concat(pe, "-arrow") }, null)
            ]
          );
        };
      return function () {
        var pe, He;
        if (l)
          return D
            ? (He = n.default) === null || He === void 0
              ? void 0
              : He.call(n)
            : null;
        var Ve = oe.value,
          nt = function () {
            return null;
          };
        return (
          !B.value && A.value !== "inline"
            ? (nt = function () {
                return m(
                  Uu,
                  {
                    mode: Ee.value,
                    prefixCls: Ve,
                    visible: !e.internalPopupClose && ne.value,
                    popupClassName: Fe.value,
                    popupOffset: e.popupOffset,
                    disabled: ue.value,
                    onVisibleChange: $
                  },
                  {
                    default: function () {
                      return [Ye()];
                    },
                    popup: function () {
                      return m(
                        to,
                        { mode: ze.value, isRootMenu: !1 },
                        {
                          default: function () {
                            return [
                              m(Lf, { id: Te, ref: N }, { default: n.default })
                            ];
                          }
                        }
                      );
                    }
                  }
                );
              })
            : (nt = function () {
                return m(Uu, null, { default: Ye });
              }),
          m(
            to,
            { mode: Ae.value },
            {
              default: function () {
                return [
                  m(
                    Tn.Item,
                    X(
                      X({ component: "li" }, r),
                      {},
                      {
                        role: "none",
                        class: we(
                          Ve,
                          "".concat(Ve, "-").concat(A.value),
                          r.class,
                          ((pe = {}),
                          U(pe, "".concat(Ve, "-open"), ne.value),
                          U(pe, "".concat(Ve, "-active"), Pe.value),
                          U(pe, "".concat(Ve, "-selected"), le.value),
                          U(pe, "".concat(Ve, "-disabled"), ue.value),
                          pe)
                        ),
                        onMouseenter: me,
                        onMouseleave: je,
                        "data-submenu-id": s
                      }
                    ),
                    {
                      default: function () {
                        return m(wt, null, [
                          nt(),
                          !B.value &&
                            m(
                              Bx,
                              { id: Te, open: ne.value, keyPath: w.value },
                              { default: n.default }
                            )
                        ]);
                      }
                    }
                  )
                ];
              }
            }
          )
        );
      };
    }
  });
function Rf(e, t) {
  if (e.classList) return e.classList.contains(t);
  var n = e.className;
  return " ".concat(n, " ").indexOf(" ".concat(t, " ")) > -1;
}
function Gu(e, t) {
  e.classList
    ? e.classList.add(t)
    : Rf(e, t) || (e.className = "".concat(e.className, " ").concat(t));
}
function qu(e, t) {
  if (e.classList) e.classList.remove(t);
  else if (Rf(e, t)) {
    var n = e.className;
    e.className = " ".concat(n, " ").replace(" ".concat(t, " "), " ");
  }
}
var Vx = function () {
    var e =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : "ant-motion-collapse",
      t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return {
      name: e,
      appear: t,
      css: !0,
      onBeforeEnter: function (n) {
        (n.style.height = "0px"), (n.style.opacity = "0"), Gu(n, e);
      },
      onEnter: function (n) {
        ft(function () {
          (n.style.height = "".concat(n.scrollHeight, "px")),
            (n.style.opacity = "1");
        });
      },
      onAfterEnter: function (n) {
        n && (qu(n, e), (n.style.height = null), (n.style.opacity = null));
      },
      onBeforeLeave: function (n) {
        Gu(n, e),
          (n.style.height = "".concat(n.offsetHeight, "px")),
          (n.style.opacity = null);
      },
      onLeave: function (n) {
        setTimeout(function () {
          (n.style.height = "0px"), (n.style.opacity = "0");
        });
      },
      onAfterLeave: function (n) {
        n &&
          (qu(n, e),
          n.style && ((n.style.height = null), (n.style.opacity = null)));
      }
    };
  },
  Bf = Vx,
  $x = function () {
    return {
      id: String,
      prefixCls: String,
      disabled: Boolean,
      inlineCollapsed: Boolean,
      disabledOverflow: Boolean,
      forceSubMenuRender: Boolean,
      openKeys: Array,
      selectedKeys: Array,
      activeKey: String,
      selectable: { type: Boolean, default: !0 },
      multiple: { type: Boolean, default: !1 },
      motion: Object,
      theme: { type: String, default: "light" },
      mode: { type: String, default: "vertical" },
      inlineIndent: { type: Number, default: 24 },
      subMenuOpenDelay: { type: Number, default: 0.1 },
      subMenuCloseDelay: { type: Number, default: 0.1 },
      builtinPlacements: { type: Object },
      triggerSubMenuAction: { type: String, default: "hover" },
      getPopupContainer: Function,
      expandIcon: Function,
      onOpenChange: Function,
      onSelect: Function,
      onDeselect: Function,
      onClick: [Function, Array],
      onFocus: Function,
      onBlur: Function,
      onMousedown: Function,
      "onUpdate:openKeys": Function,
      "onUpdate:selectedKeys": Function,
      "onUpdate:activeKey": Function
    };
  },
  Xu = [],
  Xt = de({
    name: "AMenu",
    inheritAttrs: !1,
    props: $x(),
    slots: ["expandIcon", "overflowedIndicator"],
    setup: function (e, t) {
      var n = t.slots,
        r = t.emit,
        o = t.attrs,
        a = Ct("menu", e),
        i = a.prefixCls,
        l = a.direction,
        c = a.getPrefixCls,
        u = L({}),
        s = Qe(Ix, L(void 0)),
        d = E(function () {
          return s.value !== void 0 ? s.value : e.inlineCollapsed;
        }),
        f = L(!1);
      Ue(function () {
        f.value = !0;
      }),
        Xe(function () {
          Lt(
            !(e.inlineCollapsed === !0 && e.mode !== "inline"),
            "Menu",
            "`inlineCollapsed` should only be used when `mode` is inline."
          ),
            Lt(
              !(s.value !== void 0 && e.inlineCollapsed === !0),
              "Menu",
              "`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead."
            );
        });
      var v = L([]),
        p = L([]),
        b = L({});
      fe(
        u,
        function () {
          for (
            var N = {}, Y = 0, ne = Object.values(u.value);
            Y < ne.length;
            Y++
          ) {
            var le = ne[Y];
            N[le.key] = le;
          }
          b.value = N;
        },
        { flush: "post" }
      ),
        Xe(function () {
          if (e.activeKey !== void 0) {
            var N = [],
              Y = e.activeKey ? b.value[e.activeKey] : void 0;
            Y && e.activeKey !== void 0
              ? (N = Uo([].concat(Jn(Y.parentKeys), e.activeKey)))
              : (N = []),
              Qn(v.value, N) || (v.value = N);
          }
        }),
        fe(
          function () {
            return e.selectedKeys;
          },
          function (N) {
            N && (p.value = N.slice());
          },
          { immediate: !0, deep: !0 }
        );
      var w = L([]);
      fe(
        [b, p],
        function () {
          var N = [];
          p.value.forEach(function (Y) {
            var ne = b.value[Y];
            ne && (N = N.concat(Jn(ne.parentKeys)));
          }),
            (N = Uo(N)),
            Qn(w.value, N) || (w.value = N);
        },
        { immediate: !0 }
      );
      var C = function (N) {
          if (e.selectable) {
            var Y = N.key,
              ne = p.value.includes(Y),
              le;
            e.multiple
              ? ne
                ? (le = p.value.filter(function (xe) {
                    return xe !== Y;
                  }))
                : (le = [].concat(Re(p.value), [Y]))
              : (le = [Y]);
            var Pe = k(k({}, N), { selectedKeys: le });
            Qn(le, p.value) ||
              (e.selectedKeys === void 0 && (p.value = le),
              r("update:selectedKeys", le),
              ne && e.multiple ? r("deselect", Pe) : r("select", Pe)),
              P.value !== "inline" && !e.multiple && y.value.length && M(Xu);
          }
        },
        y = L([]);
      fe(
        function () {
          return e.openKeys;
        },
        function () {
          var N =
            arguments.length > 0 && arguments[0] !== void 0
              ? arguments[0]
              : y.value;
          Qn(y.value, N) || (y.value = N.slice());
        },
        { immediate: !0, deep: !0 }
      );
      var x,
        h = function (N) {
          clearTimeout(x),
            (x = setTimeout(function () {
              e.activeKey === void 0 && (v.value = N),
                r("update:activeKey", N[N.length - 1]);
            }));
        },
        g = E(function () {
          return !!e.disabled;
        }),
        S = E(function () {
          return l.value === "rtl";
        }),
        P = L("vertical"),
        A = L(!1);
      Xe(function () {
        (e.mode === "inline" || e.mode === "vertical") && d.value
          ? ((P.value = "vertical"), (A.value = d.value))
          : ((P.value = e.mode), (A.value = !1));
      });
      var R = E(function () {
          return P.value === "inline";
        }),
        M = function (N) {
          (y.value = N), r("update:openKeys", N), r("openChange", N);
        },
        q = L(y.value),
        B = L(!1);
      fe(
        y,
        function () {
          R.value && (q.value = y.value);
        },
        { immediate: !0 }
      ),
        fe(
          R,
          function () {
            if (!B.value) {
              B.value = !0;
              return;
            }
            R.value ? (y.value = q.value) : M(Xu);
          },
          { immediate: !0 }
        );
      var j = E(function () {
          var N;
          return (
            (N = {}),
            U(N, "".concat(i.value), !0),
            U(N, "".concat(i.value, "-root"), !0),
            U(N, "".concat(i.value, "-").concat(P.value), !0),
            U(N, "".concat(i.value, "-inline-collapsed"), A.value),
            U(N, "".concat(i.value, "-rtl"), S.value),
            U(N, "".concat(i.value, "-").concat(e.theme), !0),
            N
          );
        }),
        T = E(function () {
          return c();
        }),
        O = E(function () {
          return {
            horizontal: { name: "".concat(T.value, "-slide-up") },
            inline: Bf,
            other: { name: "".concat(T.value, "-zoom-big") }
          };
        });
      _f(!0);
      var I = function N() {
          var Y =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : [],
            ne = [],
            le = u.value;
          return (
            Y.forEach(function (Pe) {
              var xe = le[Pe],
                me = xe.key,
                je = xe.childrenEventKeys;
              ne.push.apply(ne, [me].concat(Re(N(Jn(je)))));
            }),
            ne
          );
        },
        V = function (N) {
          r("click", N), C(N);
        },
        D = function (N, Y) {
          var ne = b.value[N].childrenEventKeys,
            le = y.value.filter(function (xe) {
              return xe !== N;
            });
          if (Y) le.push(N);
          else if (P.value !== "inline") {
            var Pe = I(Jn(ne));
            le = Uo(
              le.filter(function (xe) {
                return !Pe.includes(xe);
              })
            );
          }
          Qn(y, le) || M(le);
        },
        G = function (N, Y) {
          u.value = k(k({}, u.value), U({}, N, Y));
        },
        oe = function (N) {
          delete u.value[N], (u.value = k({}, u.value));
        },
        ue = L(0),
        z = E(function () {
          return e.expandIcon || n.expandIcon
            ? function (N) {
                var Y = e.expandIcon || n.expandIcon;
                return (
                  (Y = typeof Y == "function" ? Y(N) : Y),
                  At(
                    Y,
                    { class: "".concat(i.value, "-submenu-expand-icon") },
                    !1
                  )
                );
              }
            : null;
        });
      return (
        sx({
          store: u,
          prefixCls: i,
          activeKeys: v,
          openKeys: y,
          selectedKeys: p,
          changeActiveKeys: h,
          disabled: g,
          rtl: S,
          mode: P,
          inlineIndent: E(function () {
            return e.inlineIndent;
          }),
          subMenuCloseDelay: E(function () {
            return e.subMenuCloseDelay;
          }),
          subMenuOpenDelay: E(function () {
            return e.subMenuOpenDelay;
          }),
          builtinPlacements: E(function () {
            return e.builtinPlacements;
          }),
          triggerSubMenuAction: E(function () {
            return e.triggerSubMenuAction;
          }),
          getPopupContainer: E(function () {
            return e.getPopupContainer;
          }),
          inlineCollapsed: A,
          antdMenuTheme: E(function () {
            return e.theme;
          }),
          siderCollapsed: s,
          defaultMotions: E(function () {
            return f.value ? O.value : null;
          }),
          motion: E(function () {
            return f.value ? e.motion : null;
          }),
          overflowDisabled: L(void 0),
          onOpenChange: D,
          onItemClick: V,
          registerMenuInfo: G,
          unRegisterMenuInfo: oe,
          selectedSubMenuKeys: w,
          isRootMenu: L(!0),
          expandIcon: z,
          forceSubMenuRender: E(function () {
            return e.forceSubMenuRender;
          })
        }),
        function () {
          var N,
            Y,
            ne = It(
              (N = n.default) === null || N === void 0 ? void 0 : N.call(n)
            ),
            le =
              ue.value >= ne.length - 1 ||
              P.value !== "horizontal" ||
              e.disabledOverflow,
            Pe =
              P.value !== "horizontal" || e.disabledOverflow
                ? ne
                : ne.map(function (me, je) {
                    return m(
                      to,
                      { key: me.key, overflowDisabled: je > ue.value },
                      {
                        default: function () {
                          return me;
                        }
                      }
                    );
                  }),
            xe =
              ((Y = n.overflowedIndicator) === null || Y === void 0
                ? void 0
                : Y.call(n)) || m(Ic, null, null);
          return m(
            Tn,
            X(
              X({}, o),
              {},
              {
                onMousedown: e.onMousedown,
                prefixCls: "".concat(i.value, "-overflow"),
                component: "ul",
                itemComponent: pr,
                class: [j.value, o.class],
                role: "menu",
                id: e.id,
                data: Pe,
                renderRawItem: function (me) {
                  return me;
                },
                renderRawRest: function (me) {
                  var je = me.length,
                    Z = je ? ne.slice(-je) : null;
                  return m(wt, null, [
                    m(
                      hr,
                      {
                        eventKey: Lr,
                        key: Lr,
                        title: xe,
                        disabled: le,
                        internalPopupClose: je === 0
                      },
                      {
                        default: function () {
                          return Z;
                        }
                      }
                    ),
                    m(Wu, null, {
                      default: function () {
                        return [
                          m(
                            hr,
                            {
                              eventKey: Lr,
                              key: Lr,
                              title: xe,
                              disabled: le,
                              internalPopupClose: je === 0
                            },
                            {
                              default: function () {
                                return Z;
                              }
                            }
                          )
                        ];
                      }
                    })
                  ]);
                },
                maxCount:
                  P.value !== "horizontal" || e.disabledOverflow
                    ? Tn.INVALIDATE
                    : Tn.RESPONSIVE,
                ssr: "full",
                "data-menu-list": !0,
                onVisibleChange: function (me) {
                  ue.value = me;
                }
              }
            ),
            {
              default: function () {
                return [
                  m(
                    ja,
                    { to: "body" },
                    {
                      default: function () {
                        return [
                          m(
                            "div",
                            { style: { display: "none" }, "aria-hidden": !0 },
                            [
                              m(Wu, null, {
                                default: function () {
                                  return [Pe];
                                }
                              })
                            ]
                          )
                        ];
                      }
                    }
                  )
                ];
              }
            }
          );
        }
      );
    }
  }),
  zx = function () {
    return { title: K.any };
  },
  Pa = de({
    name: "AMenuItemGroup",
    inheritAttrs: !1,
    props: zx(),
    slots: ["title"],
    setup: function (e, t) {
      var n = t.slots,
        r = t.attrs,
        o = tn(),
        a = o.prefixCls,
        i = E(function () {
          return "".concat(a.value, "-item-group");
        }),
        l = ki();
      return function () {
        var c, u;
        return l
          ? (c = n.default) === null || c === void 0
            ? void 0
            : c.call(n)
          : m(
              "li",
              X(
                X({}, r),
                {},
                {
                  onClick: function (s) {
                    return s.stopPropagation();
                  },
                  class: i.value
                }
              ),
              [
                m(
                  "div",
                  {
                    title: typeof e.title == "string" ? e.title : void 0,
                    class: "".concat(i.value, "-title")
                  },
                  [Zt(n, e, "title")]
                ),
                m("ul", { class: "".concat(i.value, "-list") }, [
                  (u = n.default) === null || u === void 0 ? void 0 : u.call(n)
                ])
              ]
            );
      };
    }
  }),
  Wx = function () {
    return { prefixCls: String, dashed: Boolean };
  },
  Ta = de({
    name: "AMenuDivider",
    props: Wx(),
    setup: function (e) {
      var t = Ct("menu", e),
        n = t.prefixCls,
        r = E(function () {
          var o;
          return (
            (o = {}),
            U(o, "".concat(n.value, "-item-divider"), !0),
            U(o, "".concat(n.value, "-item-divider-dashed"), !!e.dashed),
            o
          );
        });
      return function () {
        return m("li", { class: r.value }, null);
      };
    }
  });
Xt.install = function (e) {
  return (
    e.component(Xt.name, Xt),
    e.component(pr.name, pr),
    e.component(hr.name, hr),
    e.component(Ta.name, Ta),
    e.component(Pa.name, Pa),
    e
  );
};
Xt.Item = pr;
Xt.Divider = Ta;
Xt.SubMenu = hr;
Xt.ItemGroup = Pa;
var Ux = Xt;
function Yx(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Gx = Yx,
  qx = "[object Symbol]";
function Xx(e) {
  return typeof e == "symbol" || (Nn(e) && Kn(e) == qx);
}
var Pi = Xx,
  Zx = 1 / 0,
  Zu = Rt ? Rt.prototype : void 0,
  Qu = Zu ? Zu.toString : void 0;
function Hf(e) {
  if (typeof e == "string") return e;
  if (Vt(e)) return Gx(e, Hf) + "";
  if (Pi(e)) return Qu ? Qu.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Zx ? "-0" : t;
}
var Qx = Hf;
function Jx(e) {
  return e == null ? "" : Qx(e);
}
var eS = Jx;
function tS(e) {
  var t = L(),
    n = L(!1);
  function r() {
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    n.value ||
      (Be.cancel(t.value),
      (t.value = Be(function () {
        e.apply(void 0, a);
      })));
  }
  return (
    rt(function () {
      (n.value = !0), Be.cancel(t.value);
    }),
    r
  );
}
function nS(e) {
  var t = L([]),
    n = L(typeof e == "function" ? e() : e),
    r = tS(function () {
      var a = n.value;
      t.value.forEach(function (i) {
        a = i(a);
      }),
        (t.value = []),
        (n.value = a);
    });
  function o(a) {
    t.value.push(a), r();
  }
  return [n, o];
}
var rS = de({
    name: "TabNode",
    props: {
      id: { type: String },
      prefixCls: { type: String },
      tab: { type: Object },
      active: { type: Boolean },
      closable: { type: Boolean },
      editable: { type: Object },
      onClick: { type: Function },
      onResize: { type: Function },
      renderWrapper: { type: Function },
      removeAriaLabel: { type: String },
      onFocus: { type: Function }
    },
    emits: ["click", "resize", "remove", "focus"],
    setup: function (e, t) {
      var n = t.expose,
        r = t.attrs,
        o = L();
      function a(c) {
        var u;
        (!((u = e.tab) === null || u === void 0) && u.disabled) || e.onClick(c);
      }
      n({ domRef: o });
      function i(c) {
        var u;
        c.preventDefault(),
          c.stopPropagation(),
          e.editable.onEdit("remove", {
            key: (u = e.tab) === null || u === void 0 ? void 0 : u.key,
            event: c
          });
      }
      var l = E(function () {
        var c;
        return (
          e.editable &&
          e.closable !== !1 &&
          !(!((c = e.tab) === null || c === void 0) && c.disabled)
        );
      });
      return function () {
        var c,
          u,
          s = e.prefixCls,
          d = e.id,
          f = e.active,
          v = e.tab,
          p = v.key,
          b = v.tab,
          w = v.disabled,
          C = v.closeIcon,
          y = e.renderWrapper,
          x = e.removeAriaLabel,
          h = e.editable,
          g = e.onFocus,
          S = "".concat(s, "-tab"),
          P = m(
            "div",
            {
              key: p,
              ref: o,
              class: we(
                S,
                ((c = {}),
                U(c, "".concat(S, "-with-remove"), l.value),
                U(c, "".concat(S, "-active"), f),
                U(c, "".concat(S, "-disabled"), w),
                c)
              ),
              style: r.style,
              onClick: a
            },
            [
              m(
                "div",
                {
                  role: "tab",
                  "aria-selected": f,
                  id: d && "".concat(d, "-tab-").concat(p),
                  class: "".concat(S, "-btn"),
                  "aria-controls": d && "".concat(d, "-panel-").concat(p),
                  "aria-disabled": w,
                  tabindex: w ? null : 0,
                  onClick: function (A) {
                    A.stopPropagation(), a(A);
                  },
                  onKeydown: function (A) {
                    [he.SPACE, he.ENTER].includes(A.which) &&
                      (A.preventDefault(), a(A));
                  },
                  onFocus: g
                },
                [typeof b == "function" ? b() : b]
              ),
              l.value &&
                m(
                  "button",
                  {
                    type: "button",
                    "aria-label": x || "remove",
                    tabindex: 0,
                    class: "".concat(S, "-remove"),
                    onClick: function (A) {
                      A.stopPropagation(), i(A);
                    }
                  },
                  [
                    (C == null ? void 0 : C()) ||
                      ((u = h.removeIcon) === null || u === void 0
                        ? void 0
                        : u.call(h)) ||
                      "\xD7"
                  ]
                )
            ]
          );
        return y ? y(P) : P;
      };
    }
  }),
  Ju = { width: 0, height: 0, left: 0, top: 0 };
function oS(e, t) {
  var n = L(new Map());
  return (
    Xe(function () {
      for (
        var r,
          o,
          a = new Map(),
          i = e.value,
          l =
            t.value.get((r = i[0]) === null || r === void 0 ? void 0 : r.key) ||
            Ju,
          c = l.left + l.width,
          u = 0;
        u < i.length;
        u += 1
      ) {
        var s = i[u].key,
          d = t.value.get(s);
        d ||
          (d =
            t.value.get(
              (o = i[u - 1]) === null || o === void 0 ? void 0 : o.key
            ) || Ju);
        var f = a.get(s) || k({}, d);
        (f.right = c - f.left - f.width), a.set(s, f);
      }
      n.value = new Map(a);
    }),
    n
  );
}
var Vf = de({
    name: "AddButton",
    inheritAttrs: !1,
    props: {
      prefixCls: String,
      editable: { type: Object },
      locale: { type: Object, default: void 0 }
    },
    setup: function (e, t) {
      var n = t.expose,
        r = t.attrs,
        o = L();
      return (
        n({ domRef: o }),
        function () {
          var a = e.prefixCls,
            i = e.editable,
            l = e.locale;
          return !i || i.showAdd === !1
            ? null
            : m(
                "button",
                {
                  ref: o,
                  type: "button",
                  class: "".concat(a, "-nav-add"),
                  style: r.style,
                  "aria-label":
                    (l == null ? void 0 : l.addAriaLabel) || "Add tab",
                  onClick: function (c) {
                    i.onEdit("add", { event: c });
                  }
                },
                [i.addIcon ? i.addIcon() : "+"]
              );
        }
      );
    }
  }),
  aS = {
    prefixCls: { type: String },
    id: { type: String },
    tabs: { type: Object },
    rtl: { type: Boolean },
    tabBarGutter: { type: Number },
    activeKey: { type: [String, Number] },
    mobile: { type: Boolean },
    moreIcon: K.any,
    moreTransitionName: { type: String },
    editable: { type: Object },
    locale: { type: Object, default: void 0 },
    removeAriaLabel: String,
    onTabClick: { type: Function }
  },
  iS = de({
    name: "OperationNode",
    inheritAttrs: !1,
    props: aS,
    emits: ["tabClick"],
    slots: ["moreIcon"],
    setup: function (e, t) {
      var n = t.attrs,
        r = t.slots,
        o = st(!1),
        a = Se(o, 2),
        i = a[0],
        l = a[1],
        c = st(null),
        u = Se(c, 2),
        s = u[0],
        d = u[1],
        f = function (C) {
          for (
            var y = e.tabs.filter(function (P) {
                return !P.disabled;
              }),
              x =
                y.findIndex(function (P) {
                  return P.key === s.value;
                }) || 0,
              h = y.length,
              g = 0;
            g < h;
            g += 1
          ) {
            x = (x + C + h) % h;
            var S = y[x];
            if (!S.disabled) {
              d(S.key);
              return;
            }
          }
        },
        v = function (C) {
          var y = C.which;
          if (!i.value) {
            [he.DOWN, he.SPACE, he.ENTER].includes(y) &&
              (l(!0), C.preventDefault());
            return;
          }
          switch (y) {
            case he.UP:
              f(-1), C.preventDefault();
              break;
            case he.DOWN:
              f(1), C.preventDefault();
              break;
            case he.ESC:
              l(!1);
              break;
            case he.SPACE:
            case he.ENTER:
              s.value !== null && e.onTabClick(s.value, C);
              break;
          }
        },
        p = E(function () {
          return "".concat(e.id, "-more-popup");
        }),
        b = E(function () {
          return s.value !== null
            ? "".concat(p.value, "-").concat(s.value)
            : null;
        }),
        w = function (C, y) {
          C.preventDefault(),
            C.stopPropagation(),
            e.editable.onEdit("remove", { key: y, event: C });
        };
      return (
        Ue(function () {
          fe(
            s,
            function () {
              var C = document.getElementById(b.value);
              C && C.scrollIntoView && C.scrollIntoView(!1);
            },
            { flush: "post", immediate: !0 }
          );
        }),
        fe(i, function () {
          i.value || d(null);
        }),
        function () {
          var C,
            y = e.prefixCls,
            x = e.id,
            h = e.tabs,
            g = e.locale,
            S = e.mobile,
            P = e.moreIcon,
            A =
              P === void 0
                ? ((C = r.moreIcon) === null || C === void 0
                    ? void 0
                    : C.call(r)) || m(Ic, null, null)
                : P,
            R = e.moreTransitionName,
            M = e.editable,
            q = e.tabBarGutter,
            B = e.rtl,
            j = e.onTabClick,
            T = "".concat(y, "-dropdown"),
            O = g == null ? void 0 : g.dropdownAriaLabel,
            I = U({}, B ? "marginRight" : "marginLeft", q);
          h.length || ((I.visibility = "hidden"), (I.order = 1));
          var V = we(U({}, "".concat(T, "-rtl"), B)),
            D = S
              ? null
              : m(
                  nx,
                  {
                    prefixCls: T,
                    trigger: ["hover"],
                    visible: i.value,
                    transitionName: R,
                    onVisibleChange: l,
                    overlayClassName: V,
                    mouseEnterDelay: 0.1,
                    mouseLeaveDelay: 0.1
                  },
                  {
                    overlay: function () {
                      return m(
                        Ux,
                        {
                          onClick: function (G) {
                            var oe = G.key,
                              ue = G.domEvent;
                            j(oe, ue), l(!1);
                          },
                          id: p.value,
                          tabindex: -1,
                          role: "listbox",
                          "aria-activedescendant": b.value,
                          selectedKeys: [s.value],
                          "aria-label": O !== void 0 ? O : "expanded dropdown"
                        },
                        {
                          default: function () {
                            return [
                              h.map(function (G) {
                                var oe,
                                  ue,
                                  z = M && G.closable !== !1 && !G.disabled;
                                return m(
                                  pr,
                                  {
                                    key: G.key,
                                    id: "".concat(p.value, "-").concat(G.key),
                                    role: "option",
                                    "aria-controls":
                                      x &&
                                      "".concat(x, "-panel-").concat(G.key),
                                    disabled: G.disabled
                                  },
                                  {
                                    default: function () {
                                      return [
                                        m("span", null, [
                                          typeof G.tab == "function"
                                            ? G.tab()
                                            : G.tab
                                        ]),
                                        z &&
                                          m(
                                            "button",
                                            {
                                              type: "button",
                                              "aria-label":
                                                e.removeAriaLabel || "remove",
                                              tabindex: 0,
                                              class: "".concat(
                                                T,
                                                "-menu-item-remove"
                                              ),
                                              onClick: function (N) {
                                                N.stopPropagation(),
                                                  w(N, G.key);
                                              }
                                            },
                                            [
                                              ((oe = G.closeIcon) === null ||
                                              oe === void 0
                                                ? void 0
                                                : oe.call(G)) ||
                                                ((ue = M.removeIcon) === null ||
                                                ue === void 0
                                                  ? void 0
                                                  : ue.call(M)) ||
                                                "\xD7"
                                            ]
                                          )
                                      ];
                                    }
                                  }
                                );
                              })
                            ];
                          }
                        }
                      );
                    },
                    default: function () {
                      return m(
                        "button",
                        {
                          type: "button",
                          class: "".concat(y, "-nav-more"),
                          style: I,
                          tabindex: -1,
                          "aria-hidden": "true",
                          "aria-haspopup": "listbox",
                          "aria-controls": p.value,
                          id: "".concat(x, "-more"),
                          "aria-expanded": i.value,
                          onKeydown: v
                        },
                        [A]
                      );
                    }
                  }
                );
          return m(
            "div",
            {
              class: we("".concat(y, "-nav-operations"), n.class),
              style: n.style
            },
            [D, m(Vf, { prefixCls: y, locale: g, editable: M }, null)]
          );
        }
      );
    }
  }),
  $f = Symbol("tabsContextKey"),
  zf = function (e) {
    Ze($f, e);
  },
  Wf = function () {
    return Qe($f, { tabs: L([]), prefixCls: L() });
  };
de({
  name: "TabsContextProvider",
  inheritAttrs: !1,
  props: {
    tabs: { type: Object, default: void 0 },
    prefixCls: { type: String, default: void 0 }
  },
  setup: function (e, t) {
    var n = t.slots;
    return (
      zf(Da(e)),
      function () {
        var r;
        return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
      }
    );
  }
});
var lS = 0.1,
  ec = 0.01,
  zr = 20,
  tc = Math.pow(0.995, zr);
function uS(e, t) {
  var n = st(),
    r = Se(n, 2),
    o = r[0],
    a = r[1],
    i = st(0),
    l = Se(i, 2),
    c = l[0],
    u = l[1],
    s = st(0),
    d = Se(s, 2),
    f = d[0],
    v = d[1],
    p = st(),
    b = Se(p, 2),
    w = b[0],
    C = b[1],
    y = L();
  function x(j) {
    var T = j.touches[0],
      O = T.screenX,
      I = T.screenY;
    a({ x: O, y: I }), clearInterval(y.value);
  }
  function h(j) {
    if (o.value) {
      j.preventDefault();
      var T = j.touches[0],
        O = T.screenX,
        I = T.screenY,
        V = O - o.value.x,
        D = I - o.value.y;
      t(V, D), a({ x: O, y: I });
      var G = Date.now();
      v(G - c.value), u(G), C({ x: V, y: D });
    }
  }
  function g() {
    if (o.value) {
      var j = w.value;
      if ((a(null), C(null), j)) {
        var T = j.x / f.value,
          O = j.y / f.value,
          I = Math.abs(T),
          V = Math.abs(O);
        if (Math.max(I, V) < lS) return;
        var D = T,
          G = O;
        y.value = setInterval(function () {
          if (Math.abs(D) < ec && Math.abs(G) < ec) {
            clearInterval(y.value);
            return;
          }
          (D *= tc), (G *= tc), t(D * zr, G * zr);
        }, zr);
      }
    }
  }
  var S = L();
  function P(j) {
    var T = j.deltaX,
      O = j.deltaY,
      I = 0,
      V = Math.abs(T),
      D = Math.abs(O);
    V === D
      ? (I = S.value === "x" ? T : O)
      : V > D
      ? ((I = T), (S.value = "x"))
      : ((I = O), (S.value = "y")),
      t(-I, -I) && j.preventDefault();
  }
  var A = L({ onTouchStart: x, onTouchMove: h, onTouchEnd: g, onWheel: P });
  function R(j) {
    A.value.onTouchStart(j);
  }
  function M(j) {
    A.value.onTouchMove(j);
  }
  function q(j) {
    A.value.onTouchEnd(j);
  }
  function B(j) {
    A.value.onWheel(j);
  }
  Ue(function () {
    var j, T;
    document.addEventListener("touchmove", M, { passive: !1 }),
      document.addEventListener("touchend", q, { passive: !1 }),
      (j = e.value) === null ||
        j === void 0 ||
        j.addEventListener("touchstart", R, { passive: !1 }),
      (T = e.value) === null ||
        T === void 0 ||
        T.addEventListener("wheel", B, { passive: !1 });
  }),
    rt(function () {
      document.removeEventListener("touchmove", M),
        document.removeEventListener("touchend", q);
    });
}
function nc(e, t) {
  var n = L(e);
  function r(o) {
    var a = typeof o == "function" ? o(n.value) : o;
    a !== n.value && t(a, n.value), (n.value = a);
  }
  return [n, r];
}
var cS = function () {
    var e = L(new Map()),
      t = function (n) {
        return function (r) {
          e.value.set(n, r);
        };
      };
    return (
      hd(function () {
        e.value = new Map();
      }),
      [t, e]
    );
  },
  sS = cS,
  fS = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  dS = /^\w*$/;
function vS(e, t) {
  if (Vt(e)) return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Pi(e)
    ? !0
    : dS.test(e) || !fS.test(e) || (t != null && e in Object(t));
}
var pS = vS,
  hS = "Expected a function";
function Ti(e, t) {
  if (typeof e != "function" || (t != null && typeof t != "function"))
    throw new TypeError(hS);
  var n = function () {
    var r = arguments,
      o = t ? t.apply(this, r) : r[0],
      a = n.cache;
    if (a.has(o)) return a.get(o);
    var i = e.apply(this, r);
    return (n.cache = a.set(o, i) || a), i;
  };
  return (n.cache = new (Ti.Cache || fo)()), n;
}
Ti.Cache = fo;
var mS = Ti,
  gS = 500;
function yS(e) {
  var t = mS(e, function (r) {
      return n.size === gS && n.clear(), r;
    }),
    n = t.cache;
  return t;
}
var bS = yS,
  wS =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  CS = /\\(\\)?/g,
  xS = bS(function (e) {
    var t = [];
    return (
      e.charCodeAt(0) === 46 && t.push(""),
      e.replace(wS, function (n, r, o, a) {
        t.push(o ? a.replace(CS, "$1") : r || n);
      }),
      t
    );
  }),
  SS = xS;
function OS(e, t) {
  return Vt(e) ? e : pS(e, t) ? [e] : SS(eS(e));
}
var bo = OS,
  kS = 1 / 0;
function PS(e) {
  if (typeof e == "string" || Pi(e)) return e;
  var t = e + "";
  return t == "0" && 1 / e == -kS ? "-0" : t;
}
var Ei = PS;
function TS(e, t) {
  t = bo(t, e);
  for (var n = 0, r = t.length; e != null && n < r; ) e = e[Ei(t[n++])];
  return n && n == r ? e : void 0;
}
var ES = TS,
  AS = (function () {
    try {
      var e = pn(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {}
  })(),
  no = AS;
function NS(e, t, n) {
  t == "__proto__" && no
    ? no(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
    : (e[t] = n);
}
var MS = NS,
  IS = Object.prototype,
  _S = IS.hasOwnProperty;
function jS(e, t, n) {
  var r = e[t];
  (!(_S.call(e, t) && yi(r, n)) || (n === void 0 && !(t in e))) && MS(e, t, n);
}
var FS = jS;
function DS(e, t, n, r) {
  if (!Zr(e)) return e;
  t = bo(t, e);
  for (var o = -1, a = t.length, i = a - 1, l = e; l != null && ++o < a; ) {
    var c = Ei(t[o]),
      u = n;
    if (c === "__proto__" || c === "constructor" || c === "prototype") return e;
    if (o != i) {
      var s = l[c];
      (u = r ? r(s, c, l) : void 0),
        u === void 0 && (u = Zr(s) ? s : Ci(t[o + 1]) ? [] : {});
    }
    FS(l, c, u), (l = l[c]);
  }
  return e;
}
var KS = DS;
function LS(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var i = t[r],
      l = ES(e, i);
    n(l, i) && KS(a, bo(i, e), l);
  }
  return a;
}
var RS = LS;
function BS(e, t) {
  return e != null && t in Object(e);
}
var HS = BS;
function VS(e, t, n) {
  t = bo(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var i = Ei(t[r]);
    if (!(a = e != null && n(e, i))) break;
    e = e[i];
  }
  return a || ++r != o
    ? a
    : ((o = e == null ? 0 : e.length),
      !!o && xi(o) && Ci(i, o) && (Vt(e) || wi(e)));
}
var $S = VS;
function zS(e, t) {
  return e != null && $S(e, t, HS);
}
var WS = zS;
function US(e, t) {
  return RS(e, t, function (n, r) {
    return WS(e, r);
  });
}
var YS = US,
  rc = Rt ? Rt.isConcatSpreadable : void 0;
function GS(e) {
  return Vt(e) || wi(e) || !!(rc && e && e[rc]);
}
var qS = GS;
function Uf(e, t, n, r, o) {
  var a = -1,
    i = e.length;
  for (n || (n = qS), o || (o = []); ++a < i; ) {
    var l = e[a];
    t > 0 && n(l)
      ? t > 1
        ? Uf(l, t - 1, n, r, o)
        : lf(o, l)
      : r || (o[o.length] = l);
  }
  return o;
}
var XS = Uf;
function ZS(e) {
  var t = e == null ? 0 : e.length;
  return t ? XS(e, 1) : [];
}
var QS = ZS;
function JS(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var eO = JS,
  oc = Math.max;
function tO(e, t, n) {
  return (
    (t = oc(t === void 0 ? e.length - 1 : t, 0)),
    function () {
      for (
        var r = arguments, o = -1, a = oc(r.length - t, 0), i = Array(a);
        ++o < a;

      )
        i[o] = r[t + o];
      o = -1;
      for (var l = Array(t + 1); ++o < t; ) l[o] = r[o];
      return (l[t] = n(i)), eO(e, this, l);
    }
  );
}
var nO = tO;
function rO(e) {
  return function () {
    return e;
  };
}
var oO = rO;
function aO(e) {
  return e;
}
var iO = aO,
  lO = no
    ? function (e, t) {
        return no(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: oO(t),
          writable: !0
        });
      }
    : iO,
  uO = lO,
  cO = 800,
  sO = 16,
  fO = Date.now;
function dO(e) {
  var t = 0,
    n = 0;
  return function () {
    var r = fO(),
      o = sO - (r - n);
    if (((n = r), o > 0)) {
      if (++t >= cO) return arguments[0];
    } else t = 0;
    return e.apply(void 0, arguments);
  };
}
var vO = dO,
  pO = vO(uO),
  hO = pO;
function mO(e) {
  return hO(nO(e, void 0, QS), e + "");
}
var gO = mO,
  yO = gO(function (e, t) {
    return e == null ? {} : YS(e, t);
  }),
  Yf = yO,
  ac = { width: 0, height: 0, left: 0, top: 0, right: 0 },
  bO = function () {
    return {
      id: { type: String },
      tabPosition: { type: String },
      activeKey: { type: [String, Number] },
      rtl: { type: Boolean },
      animated: { type: Object, default: void 0 },
      editable: { type: Object },
      moreIcon: K.any,
      moreTransitionName: { type: String },
      mobile: { type: Boolean },
      tabBarGutter: { type: Number },
      renderTabBar: { type: Function },
      locale: { type: Object, default: void 0 },
      onTabClick: { type: Function },
      onTabScroll: { type: Function }
    };
  },
  ic = de({
    name: "TabNavList",
    inheritAttrs: !1,
    props: bO(),
    slots: ["moreIcon", "leftExtra", "rightExtra", "tabBarExtraContent"],
    emits: ["tabClick", "tabScroll"],
    setup: function (e, t) {
      var n = t.attrs,
        r = t.slots,
        o = Wf(),
        a = o.tabs,
        i = o.prefixCls,
        l = L(),
        c = L(),
        u = L(),
        s = L(),
        d = sS(),
        f = Se(d, 2),
        v = f[0],
        p = f[1],
        b = E(function () {
          return e.tabPosition === "top" || e.tabPosition === "bottom";
        }),
        w = nc(0, function (te, ae) {
          b.value &&
            e.onTabScroll &&
            e.onTabScroll({ direction: te > ae ? "left" : "right" });
        }),
        C = Se(w, 2),
        y = C[0],
        x = C[1],
        h = nc(0, function (te, ae) {
          !b.value &&
            e.onTabScroll &&
            e.onTabScroll({ direction: te > ae ? "top" : "bottom" });
        }),
        g = Se(h, 2),
        S = g[0],
        P = g[1],
        A = st(0),
        R = Se(A, 2),
        M = R[0],
        q = R[1],
        B = st(0),
        j = Se(B, 2),
        T = j[0],
        O = j[1],
        I = st(null),
        V = Se(I, 2),
        D = V[0],
        G = V[1],
        oe = st(null),
        ue = Se(oe, 2),
        z = ue[0],
        N = ue[1],
        Y = st(0),
        ne = Se(Y, 2),
        le = ne[0],
        Pe = ne[1],
        xe = st(0),
        me = Se(xe, 2),
        je = me[0],
        Z = me[1],
        $ = nS(new Map()),
        ve = Se($, 2),
        Te = ve[0],
        Fe = ve[1],
        De = oS(a, Te),
        Ee = E(function () {
          return "".concat(i.value, "-nav-operations-hidden");
        }),
        Ae = L(0),
        ze = L(0);
      Xe(function () {
        b.value
          ? e.rtl
            ? ((Ae.value = 0), (ze.value = Math.max(0, M.value - D.value)))
            : ((Ae.value = Math.min(0, D.value - M.value)), (ze.value = 0))
          : ((Ae.value = Math.min(0, z.value - T.value)), (ze.value = 0));
      });
      var Ye = function (te) {
          return te < Ae.value ? Ae.value : te > ze.value ? ze.value : te;
        },
        pe = L(),
        He = st(),
        Ve = Se(He, 2),
        nt = Ve[0],
        _t = Ve[1],
        ut = function () {
          _t(Date.now());
        },
        H = function () {
          clearTimeout(pe.value);
        },
        Q = function (te, ae) {
          te(function (ke) {
            var Ce = Ye(ke + ae);
            return Ce;
          });
        };
      uS(l, function (te, ae) {
        if (b.value) {
          if (D.value >= M.value) return !1;
          Q(x, te);
        } else {
          if (z.value >= T.value) return !1;
          Q(P, ae);
        }
        return H(), ut(), !0;
      }),
        fe(nt, function () {
          H(),
            nt.value &&
              (pe.value = setTimeout(function () {
                _t(0);
              }, 100));
        });
      var ye = function () {
          var te =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : e.activeKey,
            ae = De.value.get(te) || {
              width: 0,
              height: 0,
              left: 0,
              right: 0,
              top: 0
            };
          if (b.value) {
            var ke = y.value;
            e.rtl
              ? ae.right < y.value
                ? (ke = ae.right)
                : ae.right + ae.width > y.value + D.value &&
                  (ke = ae.right + ae.width - D.value)
              : ae.left < -y.value
              ? (ke = -ae.left)
              : ae.left + ae.width > -y.value + D.value &&
                (ke = -(ae.left + ae.width - D.value)),
              P(0),
              x(Ye(ke));
          } else {
            var Ce = S.value;
            ae.top < -S.value
              ? (Ce = -ae.top)
              : ae.top + ae.height > -S.value + z.value &&
                (Ce = -(ae.top + ae.height - z.value)),
              x(0),
              P(Ye(Ce));
          }
        },
        _e = L(0),
        _ = L(0);
      Xe(function () {
        var te,
          ae,
          ke,
          Ce,
          ge,
          Ne,
          Ke,
          Je = De.value;
        ["top", "bottom"].includes(e.tabPosition)
          ? ((ae = "width"),
            (ge = D.value),
            (Ne = M.value),
            (Ke = le.value),
            (ke = e.rtl ? "right" : "left"),
            (Ce = Math.abs(y.value)))
          : ((ae = "height"),
            (ge = z.value),
            (Ne = M.value),
            (Ke = je.value),
            (ke = "top"),
            (Ce = -S.value));
        var $e = ge;
        Ne + Ke > ge && Ne < ge && ($e = ge - Ke);
        var Ge = a.value;
        if (!Ge.length) {
          var dt;
          return (dt = [0, 0]), (_e.value = dt[0]), (_.value = dt[1]), dt;
        }
        for (var xt = Ge.length, et = xt, yt = 0; yt < xt; yt += 1) {
          var at = Je.get(Ge[yt].key) || ac;
          if (at[ke] + at[ae] > Ce + $e) {
            et = yt - 1;
            break;
          }
        }
        for (var tt = 0, ct = xt - 1; ct >= 0; ct -= 1) {
          var bt = Je.get(Ge[ct].key) || ac;
          if (bt[ke] < Ce) {
            tt = ct + 1;
            break;
          }
        }
        return (te = [tt, et]), (_e.value = te[0]), (_.value = te[1]), te;
      });
      var F = function () {
          var te,
            ae,
            ke,
            Ce,
            ge,
            Ne =
              ((te = l.value) === null || te === void 0
                ? void 0
                : te.offsetWidth) || 0,
            Ke =
              ((ae = l.value) === null || ae === void 0
                ? void 0
                : ae.offsetHeight) || 0,
            Je =
              ((ke = s.value) === null || ke === void 0 ? void 0 : ke.$el) ||
              {},
            $e = Je.offsetWidth || 0,
            Ge = Je.offsetHeight || 0;
          G(Ne), N(Ke), Pe($e), Z(Ge);
          var dt =
              (((Ce = c.value) === null || Ce === void 0
                ? void 0
                : Ce.offsetWidth) || 0) - $e,
            xt =
              (((ge = c.value) === null || ge === void 0
                ? void 0
                : ge.offsetHeight) || 0) - Ge;
          q(dt),
            O(xt),
            Fe(function () {
              var et = new Map();
              return (
                a.value.forEach(function (yt) {
                  var at = yt.key,
                    tt,
                    ct = p.value.get(at),
                    bt =
                      ((tt = ct) === null || tt === void 0 ? void 0 : tt.$el) ||
                      ct;
                  bt &&
                    et.set(at, {
                      width: bt.offsetWidth,
                      height: bt.offsetHeight,
                      left: bt.offsetLeft,
                      top: bt.offsetTop
                    });
                }),
                et
              );
            });
        },
        W = E(function () {
          return [].concat(
            Re(a.value.slice(0, _e.value)),
            Re(a.value.slice(_.value + 1))
          );
        }),
        ie = st(),
        ce = Se(ie, 2),
        re = ce[0],
        ee = ce[1],
        J = E(function () {
          return De.value.get(e.activeKey);
        }),
        se = L(),
        Me = function () {
          Be.cancel(se.value);
        };
      fe(
        [
          J,
          b,
          function () {
            return e.rtl;
          }
        ],
        function () {
          var te = {};
          J.value &&
            (b.value
              ? (e.rtl
                  ? (te.right = Gn(J.value.right))
                  : (te.left = Gn(J.value.left)),
                (te.width = Gn(J.value.width)))
              : ((te.top = Gn(J.value.top)), (te.height = Gn(J.value.height)))),
            Me(),
            (se.value = Be(function () {
              ee(te);
            }));
        }
      ),
        fe(
          [
            function () {
              return e.activeKey;
            },
            J,
            De,
            b
          ],
          function () {
            ye();
          },
          { flush: "post" }
        ),
        fe(
          [
            function () {
              return e.rtl;
            },
            function () {
              return e.tabBarGutter;
            },
            function () {
              return e.activeKey;
            },
            function () {
              return a.value;
            }
          ],
          function () {
            F();
          },
          { flush: "post" }
        );
      var Ie = function (te) {
        var ae = te.position,
          ke = te.prefixCls,
          Ce = te.extra;
        if (!Ce) return null;
        var ge = Ce == null ? void 0 : Ce({ position: ae });
        return ge
          ? m("div", { class: "".concat(ke, "-extra-content") }, [ge])
          : null;
      };
      return (
        rt(function () {
          H(), Me();
        }),
        function () {
          var te,
            ae = e.id,
            ke = e.animated,
            Ce = e.activeKey,
            ge = e.rtl,
            Ne = e.editable,
            Ke = e.locale,
            Je = e.tabPosition,
            $e = e.tabBarGutter,
            Ge = e.onTabClick,
            dt = n.class,
            xt = n.style,
            et = i.value,
            yt = !!W.value.length,
            at = "".concat(et, "-nav-wrap"),
            tt,
            ct,
            bt,
            xr;
          b.value
            ? ge
              ? ((ct = y.value > 0), (tt = y.value + D.value < M.value))
              : ((tt = y.value < 0), (ct = -y.value + D.value < M.value))
            : ((bt = S.value < 0), (xr = -S.value + z.value < T.value));
          var hn = {};
          Je === "top" || Je === "bottom"
            ? (hn[ge ? "marginRight" : "marginLeft"] =
                typeof $e == "number" ? "".concat($e, "px") : $e)
            : (hn.marginTop = typeof $e == "number" ? "".concat($e, "px") : $e);
          var Sr = a.value.map(function (Wn, Co) {
            var jt = Wn.key;
            return m(
              rS,
              {
                id: ae,
                prefixCls: et,
                key: jt,
                tab: Wn,
                style: Co === 0 ? void 0 : hn,
                closable: Wn.closable,
                editable: Ne,
                active: jt === Ce,
                removeAriaLabel: Ke == null ? void 0 : Ke.removeAriaLabel,
                ref: v(jt),
                onClick: function (ld) {
                  Ge(jt, ld);
                },
                onFocus: function () {
                  ye(jt),
                    ut(),
                    l.value &&
                      (ge || (l.value.scrollLeft = 0), (l.value.scrollTop = 0));
                }
              },
              r
            );
          });
          return m(
            "div",
            {
              role: "tablist",
              class: we("".concat(et, "-nav"), dt),
              style: xt,
              onKeydown: function () {
                ut();
              }
            },
            [
              m(
                Ie,
                { position: "left", prefixCls: et, extra: r.leftExtra },
                null
              ),
              m(
                Mn,
                { onResize: F },
                {
                  default: function () {
                    return [
                      m(
                        "div",
                        {
                          class: we(
                            at,
                            ((te = {}),
                            U(te, "".concat(at, "-ping-left"), tt),
                            U(te, "".concat(at, "-ping-right"), ct),
                            U(te, "".concat(at, "-ping-top"), bt),
                            U(te, "".concat(at, "-ping-bottom"), xr),
                            te)
                          ),
                          ref: l
                        },
                        [
                          m(
                            Mn,
                            { onResize: F },
                            {
                              default: function () {
                                return [
                                  m(
                                    "div",
                                    {
                                      ref: c,
                                      class: "".concat(et, "-nav-list"),
                                      style: {
                                        transform: "translate("
                                          .concat(y.value, "px, ")
                                          .concat(S.value, "px)"),
                                        transition: nt.value ? "none" : void 0
                                      }
                                    },
                                    [
                                      Sr,
                                      m(
                                        Vf,
                                        {
                                          ref: s,
                                          prefixCls: et,
                                          locale: Ke,
                                          editable: Ne,
                                          style: k(
                                            k(
                                              {},
                                              Sr.length === 0 ? void 0 : hn
                                            ),
                                            { visibility: yt ? "hidden" : null }
                                          )
                                        },
                                        null
                                      ),
                                      m(
                                        "div",
                                        {
                                          class: we(
                                            "".concat(et, "-ink-bar"),
                                            U(
                                              {},
                                              "".concat(
                                                et,
                                                "-ink-bar-animated"
                                              ),
                                              ke.inkBar
                                            )
                                          ),
                                          style: re.value
                                        },
                                        null
                                      )
                                    ]
                                  )
                                ];
                              }
                            }
                          )
                        ]
                      )
                    ];
                  }
                }
              ),
              m(
                iS,
                X(
                  X({}, e),
                  {},
                  {
                    removeAriaLabel: Ke == null ? void 0 : Ke.removeAriaLabel,
                    ref: u,
                    prefixCls: et,
                    tabs: W.value,
                    class: !yt && Ee.value
                  }
                ),
                Yf(r, ["moreIcon"])
              ),
              m(
                Ie,
                { position: "right", prefixCls: et, extra: r.rightExtra },
                null
              ),
              m(
                Ie,
                {
                  position: "right",
                  prefixCls: et,
                  extra: r.tabBarExtraContent
                },
                null
              )
            ]
          );
        }
      );
    }
  }),
  wO = de({
    name: "TabPanelList",
    inheritAttrs: !1,
    props: {
      activeKey: { type: [String, Number] },
      id: { type: String },
      rtl: { type: Boolean },
      animated: { type: Object, default: void 0 },
      tabPosition: { type: String },
      destroyInactiveTabPane: { type: Boolean }
    },
    setup: function (e) {
      var t = Wf(),
        n = t.tabs,
        r = t.prefixCls;
      return function () {
        var o = e.id,
          a = e.activeKey,
          i = e.animated,
          l = e.tabPosition,
          c = e.rtl,
          u = e.destroyInactiveTabPane,
          s = i.tabPane,
          d = r.value,
          f = n.value.findIndex(function (v) {
            return v.key === a;
          });
        return m("div", { class: "".concat(d, "-content-holder") }, [
          m(
            "div",
            {
              class: [
                "".concat(d, "-content"),
                "".concat(d, "-content-").concat(l),
                U({}, "".concat(d, "-content-animated"), s)
              ],
              style:
                f && s
                  ? U(
                      {},
                      c ? "marginRight" : "marginLeft",
                      "-".concat(f, "00%")
                    )
                  : null
            },
            [
              n.value.map(function (v) {
                return At(v.node, {
                  key: v.key,
                  prefixCls: d,
                  tabKey: v.key,
                  id: o,
                  animated: s,
                  active: v.key === a,
                  destroyInactiveTabPane: u
                });
              })
            ]
          )
        ]);
      };
    }
  }),
  lc = 0,
  Gf = function () {
    return {
      prefixCls: { type: String },
      id: { type: String },
      activeKey: { type: [String, Number] },
      defaultActiveKey: { type: [String, Number] },
      direction: { type: String },
      animated: { type: [Boolean, Object] },
      renderTabBar: { type: Function },
      tabBarGutter: { type: Number },
      tabBarStyle: { type: Object },
      tabPosition: { type: String },
      destroyInactiveTabPane: { type: Boolean },
      hideAdd: Boolean,
      type: { type: String },
      size: { type: String },
      centered: Boolean,
      onEdit: { type: Function },
      onChange: { type: Function },
      onTabClick: { type: Function },
      onTabScroll: { type: Function },
      "onUpdate:activeKey": { type: Function },
      locale: { type: Object, default: void 0 },
      onPrevClick: Function,
      onNextClick: Function,
      tabBarExtraContent: K.any
    };
  };
function CO(e) {
  return e
    .map(function (t) {
      if (Rn(t)) {
        for (
          var n = k({}, t.props || {}), r = 0, o = Object.entries(n);
          r < o.length;
          r++
        ) {
          var a = Se(o[r], 2),
            i = a[0],
            l = a[1];
          delete n[i], (n[La(i)] = l);
        }
        var c = t.children || {},
          u = t.key !== void 0 ? t.key : void 0,
          s = n.tab,
          d = s === void 0 ? c.tab : s,
          f = n.disabled,
          v = n.forceRender,
          p = n.closable,
          b = n.animated,
          w = n.active,
          C = n.destroyInactiveTabPane;
        return k(k({ key: u }, n), {
          node: t,
          closeIcon: c.closeIcon,
          tab: d,
          disabled: f === "" || f,
          forceRender: v === "" || v,
          closable: p === "" || p,
          animated: b === "" || b,
          active: w === "" || w,
          destroyInactiveTabPane: C === "" || C
        });
      }
      return null;
    })
    .filter(function (t) {
      return t;
    });
}
var xO = de({
    name: "InternalTabs",
    inheritAttrs: !1,
    props: k(
      k(
        {},
        en(Gf(), { tabPosition: "top", animated: { inkBar: !0, tabPane: !1 } })
      ),
      { tabs: { type: Array } }
    ),
    slots: [
      "tabBarExtraContent",
      "leftExtra",
      "rightExtra",
      "moreIcon",
      "addIcon",
      "removeIcon",
      "renderTabBar"
    ],
    setup: function (e, t) {
      var n = t.attrs,
        r = t.slots;
      Lt(
        e.onPrevClick === void 0 && e.onNextClick === void 0,
        "Tabs",
        "`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead."
      ),
        Lt(
          e.tabBarExtraContent === void 0,
          "Tabs",
          "`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead."
        ),
        Lt(
          r.tabBarExtraContent === void 0,
          "Tabs",
          "`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead."
        );
      var o = Ct("tabs", e),
        a = o.prefixCls,
        i = o.direction,
        l = o.size,
        c = o.rootPrefixCls,
        u = E(function () {
          return i.value === "rtl";
        }),
        s = E(function () {
          var j = e.animated,
            T = e.tabPosition;
          return j === !1 || ["left", "right"].includes(T)
            ? { inkBar: !1, tabPane: !1 }
            : j === !0
            ? { inkBar: !0, tabPane: !0 }
            : k({ inkBar: !0, tabPane: !1 }, We(j) === "object" ? j : {});
        }),
        d = st(!1),
        f = Se(d, 2),
        v = f[0],
        p = f[1];
      Ue(function () {
        p(xf());
      });
      var b = eo(
          function () {
            var j;
            return (j = e.tabs[0]) === null || j === void 0 ? void 0 : j.key;
          },
          {
            value: E(function () {
              return e.activeKey;
            }),
            defaultValue: e.defaultActiveKey
          }
        ),
        w = Se(b, 2),
        C = w[0],
        y = w[1],
        x = st(function () {
          return e.tabs.findIndex(function (j) {
            return j.key === C.value;
          });
        }),
        h = Se(x, 2),
        g = h[0],
        S = h[1];
      Xe(function () {
        var j,
          T = e.tabs.findIndex(function (O) {
            return O.key === C.value;
          });
        T === -1 &&
          ((T = Math.max(0, Math.min(g.value, e.tabs.length - 1))),
          y((j = e.tabs[T]) === null || j === void 0 ? void 0 : j.key)),
          S(T);
      });
      var P = eo(null, {
          value: E(function () {
            return e.id;
          })
        }),
        A = Se(P, 2),
        R = A[0],
        M = A[1],
        q = E(function () {
          return v.value && !["left", "right"].includes(e.tabPosition)
            ? "top"
            : e.tabPosition;
        });
      Ue(function () {
        e.id || (M("rc-tabs-".concat(lc)), (lc += 1));
      });
      var B = function (j, T) {
        var O, I;
        (O = e.onTabClick) === null || O === void 0 || O.call(e, j, T);
        var V = j !== C.value;
        y(j), V && ((I = e.onChange) === null || I === void 0 || I.call(e, j));
      };
      return (
        zf({
          tabs: E(function () {
            return e.tabs;
          }),
          prefixCls: a
        }),
        function () {
          var j,
            T = e.id,
            O = e.type,
            I = e.tabBarGutter,
            V = e.tabBarStyle,
            D = e.locale,
            G = e.destroyInactiveTabPane,
            oe = e.renderTabBar,
            ue = oe === void 0 ? r.renderTabBar : oe,
            z = e.onTabScroll,
            N = e.hideAdd,
            Y = e.centered,
            ne = {
              id: R.value,
              activeKey: C.value,
              animated: s.value,
              tabPosition: q.value,
              rtl: u.value,
              mobile: v.value
            },
            le;
          O === "editable-card" &&
            (le = {
              onEdit: function (je, Z) {
                var $ = Z.key,
                  ve = Z.event,
                  Te;
                (Te = e.onEdit) === null ||
                  Te === void 0 ||
                  Te.call(e, je === "add" ? ve : $, je);
              },
              removeIcon: function () {
                return m(Xa, null, null);
              },
              addIcon: r.addIcon
                ? r.addIcon
                : function () {
                    return m(ip, null, null);
                  },
              showAdd: N !== !0
            });
          var Pe,
            xe = k(k({}, ne), {
              moreTransitionName: "".concat(c.value, "-slide-up"),
              editable: le,
              locale: D,
              tabBarGutter: I,
              onTabClick: B,
              onTabScroll: z,
              style: V
            });
          ue
            ? (Pe = ue(k(k({}, xe), { DefaultTabBar: ic })))
            : (Pe = m(
                ic,
                xe,
                Yf(r, [
                  "moreIcon",
                  "leftExtra",
                  "rightExtra",
                  "tabBarExtraContent"
                ])
              ));
          var me = a.value;
          return m(
            "div",
            X(
              X({}, n),
              {},
              {
                id: T,
                class: we(
                  me,
                  "".concat(me, "-").concat(q.value),
                  ((j = {}),
                  U(j, "".concat(me, "-").concat(l.value), l.value),
                  U(
                    j,
                    "".concat(me, "-card"),
                    ["card", "editable-card"].includes(O)
                  ),
                  U(j, "".concat(me, "-editable-card"), O === "editable-card"),
                  U(j, "".concat(me, "-centered"), Y),
                  U(j, "".concat(me, "-mobile"), v.value),
                  U(j, "".concat(me, "-editable"), O === "editable-card"),
                  U(j, "".concat(me, "-rtl"), u.value),
                  j),
                  n.class
                )
              }
            ),
            [
              Pe,
              m(
                wO,
                X(
                  X({ destroyInactiveTabPane: G }, ne),
                  {},
                  { animated: s.value }
                ),
                null
              )
            ]
          );
        }
      );
    }
  }),
  SO = de({
    name: "ATabs",
    inheritAttrs: !1,
    props: en(Gf(), {
      tabPosition: "top",
      animated: { inkBar: !0, tabPane: !1 }
    }),
    slots: [
      "tabBarExtraContent",
      "leftExtra",
      "rightExtra",
      "moreIcon",
      "addIcon",
      "removeIcon",
      "renderTabBar"
    ],
    setup: function (e, t) {
      var n = t.attrs,
        r = t.slots,
        o = t.emit,
        a = function (i) {
          o("update:activeKey", i), o("change", i);
        };
      return function () {
        var i,
          l = CO(
            It((i = r.default) === null || i === void 0 ? void 0 : i.call(r))
          );
        return m(
          xO,
          X(
            X(X({}, zt(e, ["onUpdate:activeKey"])), n),
            {},
            { onChange: a, tabs: l }
          ),
          r
        );
      };
    }
  }),
  OO = function () {
    return {
      tab: K.any,
      disabled: { type: Boolean },
      forceRender: { type: Boolean },
      closable: { type: Boolean },
      animated: { type: Boolean },
      active: { type: Boolean },
      destroyInactiveTabPane: { type: Boolean },
      prefixCls: { type: String },
      tabKey: { type: [String, Number] },
      id: { type: String }
    };
  },
  Ea = de({
    name: "ATabPane",
    inheritAttrs: !1,
    __ANT_TAB_PANE: !0,
    props: OO(),
    slots: ["closeIcon", "tab"],
    setup: function (e, t) {
      var n = t.attrs,
        r = t.slots,
        o = L(e.forceRender);
      fe(
        [
          function () {
            return e.active;
          },
          function () {
            return e.destroyInactiveTabPane;
          }
        ],
        function () {
          e.active
            ? (o.value = !0)
            : e.destroyInactiveTabPane && (o.value = !1);
        },
        { immediate: !0 }
      );
      var a = E(function () {
        return e.active
          ? {}
          : e.animated
          ? { visibility: "hidden", height: 0, overflowY: "hidden" }
          : { display: "none" };
      });
      return function () {
        var i,
          l = e.prefixCls,
          c = e.forceRender,
          u = e.id,
          s = e.active,
          d = e.tabKey;
        return m(
          "div",
          {
            id: u && "".concat(u, "-panel-").concat(d),
            role: "tabpanel",
            tabindex: s ? 0 : -1,
            "aria-labelledby": u && "".concat(u, "-tab-").concat(d),
            "aria-hidden": !s,
            style: [a.value, n.style],
            class: [
              "".concat(l, "-tabpane"),
              s && "".concat(l, "-tabpane-active"),
              n.class
            ]
          },
          [
            (s || o.value || c) &&
              ((i = r.default) === null || i === void 0 ? void 0 : i.call(r))
          ]
        );
      };
    }
  }),
  ir = SO;
ir.TabPane = Ea;
ir.install = function (e) {
  return e.component(ir.name, ir), e.component(Ea.name, Ea), e;
};
var P2 = ir,
  qf = Symbol("TreeContextKey"),
  kO = de({
    name: "TreeContext",
    props: { value: { type: Object } },
    setup: function (e, t) {
      var n = t.slots;
      return (
        Ze(
          qf,
          E(function () {
            return e.value;
          })
        ),
        function () {
          var r;
          return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
        }
      );
    }
  }),
  Ai = function () {
    return Qe(
      qf,
      E(function () {
        return {};
      })
    );
  },
  Xf = Symbol("KeysStateKey"),
  PO = function (e) {
    Ze(Xf, e);
  },
  Zf = function () {
    return Qe(Xf, {
      expandedKeys: Le([]),
      selectedKeys: Le([]),
      loadedKeys: Le([]),
      loadingKeys: Le([]),
      checkedKeys: Le([]),
      halfCheckedKeys: Le([]),
      expandedKeysSet: E(function () {
        return new Set();
      }),
      selectedKeysSet: E(function () {
        return new Set();
      }),
      loadedKeysSet: E(function () {
        return new Set();
      }),
      loadingKeysSet: E(function () {
        return new Set();
      }),
      checkedKeysSet: E(function () {
        return new Set();
      }),
      halfCheckedKeysSet: E(function () {
        return new Set();
      }),
      flattenNodes: Le([])
    });
  },
  TO = function (e) {
    for (
      var t = e.prefixCls,
        n = e.level,
        r = e.isStart,
        o = e.isEnd,
        a = "".concat(t, "-indent-unit"),
        i = [],
        l = 0;
      l < n;
      l += 1
    ) {
      var c;
      i.push(
        m(
          "span",
          {
            key: l,
            class:
              ((c = {}),
              U(c, a, !0),
              U(c, "".concat(a, "-start"), r[l]),
              U(c, "".concat(a, "-end"), o[l]),
              c)
          },
          null
        )
      );
    }
    return m(
      "span",
      { "aria-hidden": "true", class: "".concat(t, "-indent") },
      [i]
    );
  },
  EO = TO,
  Qf = {
    eventKey: [String, Number],
    prefixCls: String,
    title: K.any,
    data: { type: Object, default: void 0 },
    parent: { type: Object, default: void 0 },
    isStart: { type: Array },
    isEnd: { type: Array },
    active: { type: Boolean, default: void 0 },
    onMousemove: { type: Function },
    isLeaf: { type: Boolean, default: void 0 },
    checkable: { type: Boolean, default: void 0 },
    selectable: { type: Boolean, default: void 0 },
    disabled: { type: Boolean, default: void 0 },
    disableCheckbox: { type: Boolean, default: void 0 },
    icon: K.any,
    switcherIcon: K.any,
    domRef: { type: Function }
  },
  AO = {
    prefixCls: { type: String },
    motion: { type: Object },
    focusable: { type: Boolean },
    activeItem: { type: Object },
    focused: { type: Boolean },
    tabindex: { type: Number },
    checkable: { type: Boolean },
    selectable: { type: Boolean },
    disabled: { type: Boolean },
    height: { type: Number },
    itemHeight: { type: Number },
    virtual: { type: Boolean },
    onScroll: { type: Function },
    onKeydown: { type: Function },
    onFocus: { type: Function },
    onBlur: { type: Function },
    onActiveChange: { type: Function },
    onContextmenu: { type: Function },
    onListChangeStart: { type: Function },
    onListChangeEnd: { type: Function }
  },
  NO = function () {
    return {
      prefixCls: String,
      focusable: { type: Boolean, default: void 0 },
      activeKey: [Number, String],
      tabindex: Number,
      children: K.any,
      treeData: { type: Array },
      fieldNames: { type: Object },
      showLine: { type: [Boolean, Object], default: void 0 },
      showIcon: { type: Boolean, default: void 0 },
      icon: K.any,
      selectable: { type: Boolean, default: void 0 },
      disabled: { type: Boolean, default: void 0 },
      multiple: { type: Boolean, default: void 0 },
      checkable: { type: Boolean, default: void 0 },
      checkStrictly: { type: Boolean, default: void 0 },
      draggable: { type: [Function, Boolean] },
      defaultExpandParent: { type: Boolean, default: void 0 },
      autoExpandParent: { type: Boolean, default: void 0 },
      defaultExpandAll: { type: Boolean, default: void 0 },
      defaultExpandedKeys: { type: Array },
      expandedKeys: { type: Array },
      defaultCheckedKeys: { type: Array },
      checkedKeys: { type: [Object, Array] },
      defaultSelectedKeys: { type: Array },
      selectedKeys: { type: Array },
      allowDrop: { type: Function },
      dropIndicatorRender: { type: Function },
      onFocus: { type: Function },
      onBlur: { type: Function },
      onKeydown: { type: Function },
      onContextmenu: { type: Function },
      onClick: { type: Function },
      onDblclick: { type: Function },
      onScroll: { type: Function },
      onExpand: { type: Function },
      onCheck: { type: Function },
      onSelect: { type: Function },
      onLoad: { type: Function },
      loadData: { type: Function },
      loadedKeys: { type: Array },
      onMouseenter: { type: Function },
      onMouseleave: { type: Function },
      onRightClick: { type: Function },
      onDragstart: { type: Function },
      onDragenter: { type: Function },
      onDragover: { type: Function },
      onDragleave: { type: Function },
      onDragend: { type: Function },
      onDrop: { type: Function },
      onActiveChange: { type: Function },
      filterTreeNode: { type: Function },
      motion: K.any,
      switcherIcon: K.any,
      height: Number,
      itemHeight: Number,
      virtual: { type: Boolean, default: void 0 },
      direction: { type: String }
    };
  },
  MO = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  },
  uc = "open",
  cc = "close",
  IO = "---",
  sc = de({
    name: "TreeNode",
    inheritAttrs: !1,
    props: Qf,
    isTreeNode: 1,
    slots: ["title", "icon", "switcherIcon"],
    setup: function (e, t) {
      var n = t.attrs,
        r = t.slots,
        o = t.expose;
      "slots" in e.data,
        "treeData slots is deprecated, please use ".concat(
          Object.keys(e.data.slots || {}).map(function (H) {
            return "`v-slot:" + H + "` ";
          }),
          "instead"
        );
      var a = L(!1),
        i = Ai(),
        l = Zf(),
        c = l.expandedKeysSet,
        u = l.selectedKeysSet,
        s = l.loadedKeysSet,
        d = l.loadingKeysSet,
        f = l.checkedKeysSet,
        v = l.halfCheckedKeysSet,
        p = i.value,
        b = p.dragOverNodeKey,
        w = p.dropPosition,
        C = p.keyEntities,
        y = E(function () {
          return Aa(e.eventKey, {
            expandedKeysSet: c.value,
            selectedKeysSet: u.value,
            loadedKeysSet: s.value,
            loadingKeysSet: d.value,
            checkedKeysSet: f.value,
            halfCheckedKeysSet: v.value,
            dragOverNodeKey: b,
            dropPosition: w,
            keyEntities: C
          });
        }),
        x = Ft(function () {
          return y.value.expanded;
        }),
        h = Ft(function () {
          return y.value.selected;
        }),
        g = Ft(function () {
          return y.value.checked;
        }),
        S = Ft(function () {
          return y.value.loaded;
        }),
        P = Ft(function () {
          return y.value.loading;
        }),
        A = Ft(function () {
          return y.value.halfChecked;
        }),
        R = Ft(function () {
          return y.value.dragOver;
        }),
        M = Ft(function () {
          return y.value.dragOverGapTop;
        }),
        q = Ft(function () {
          return y.value.dragOverGapBottom;
        }),
        B = Ft(function () {
          return y.value.pos;
        }),
        j = L(),
        T = E(function () {
          var H = e.eventKey,
            Q = i.value.keyEntities,
            ye = Q[H] || {},
            _e = ye.children;
          return !!(_e || []).length;
        }),
        O = E(function () {
          var H = e.isLeaf,
            Q = i.value.loadData,
            ye = T.value;
          return H === !1 ? !1 : H || (!Q && !ye) || (Q && S.value && !ye);
        }),
        I = E(function () {
          return O.value ? null : x.value ? uc : cc;
        }),
        V = E(function () {
          var H = e.disabled,
            Q = i.value.disabled;
          return !!(Q || H);
        }),
        D = E(function () {
          var H = e.checkable,
            Q = i.value.checkable;
          return !Q || H === !1 ? !1 : Q;
        }),
        G = E(function () {
          var H = e.selectable,
            Q = i.value.selectable;
          return typeof H == "boolean" ? H : Q;
        }),
        oe = E(function () {
          var H = e.data,
            Q = e.active,
            ye = e.checkable,
            _e = e.disableCheckbox,
            _ = e.disabled,
            F = e.selectable;
          return k(
            k(
              {
                active: Q,
                checkable: ye,
                disableCheckbox: _e,
                disabled: _,
                selectable: F
              },
              H
            ),
            {
              dataRef: H,
              data: H,
              isLeaf: O.value,
              checked: g.value,
              expanded: x.value,
              loading: P.value,
              selected: h.value,
              halfChecked: A.value
            }
          );
        }),
        ue = Qt(),
        z = E(function () {
          var H = e.eventKey,
            Q = i.value.keyEntities,
            ye = Q[H] || {},
            _e = ye.parent;
          return k(k({}, Na(k({}, e, y.value))), { parent: _e });
        }),
        N = lt({
          eventData: z,
          eventKey: E(function () {
            return e.eventKey;
          }),
          selectHandle: j,
          pos: B,
          key: ue.vnode.key
        });
      o(N);
      var Y = function (H) {
          var Q = i.value.onNodeDoubleClick;
          Q(H, z.value);
        },
        ne = function (H) {
          if (!V.value) {
            var Q = i.value.onNodeSelect;
            H.preventDefault(), Q(H, z.value);
          }
        },
        le = function (H) {
          if (!V.value) {
            var Q = e.disableCheckbox,
              ye = i.value.onNodeCheck;
            if (!(!D.value || Q)) {
              H.preventDefault();
              var _e = !g.value;
              ye(H, z.value, _e);
            }
          }
        },
        Pe = function (H) {
          var Q = i.value.onNodeClick;
          Q(H, z.value), G.value ? ne(H) : le(H);
        },
        xe = function (H) {
          var Q = i.value.onNodeMouseEnter;
          Q(H, z.value);
        },
        me = function (H) {
          var Q = i.value.onNodeMouseLeave;
          Q(H, z.value);
        },
        je = function (H) {
          var Q = i.value.onNodeContextMenu;
          Q(H, z.value);
        },
        Z = function (H) {
          var Q = i.value.onNodeDragStart;
          H.stopPropagation(), (a.value = !0), Q(H, N);
          try {
            H.dataTransfer.setData("text/plain", "");
          } catch {}
        },
        $ = function (H) {
          var Q = i.value.onNodeDragEnter;
          H.preventDefault(), H.stopPropagation(), Q(H, N);
        },
        ve = function (H) {
          var Q = i.value.onNodeDragOver;
          H.preventDefault(), H.stopPropagation(), Q(H, N);
        },
        Te = function (H) {
          var Q = i.value.onNodeDragLeave;
          H.stopPropagation(), Q(H, N);
        },
        Fe = function (H) {
          var Q = i.value.onNodeDragEnd;
          H.stopPropagation(), (a.value = !1), Q(H, N);
        },
        De = function (H) {
          var Q = i.value.onNodeDrop;
          H.preventDefault(), H.stopPropagation(), (a.value = !1), Q(H, N);
        },
        Ee = function (H) {
          var Q = i.value.onNodeExpand;
          P.value || Q(H, z.value);
        },
        Ae = function () {
          var H = e.data,
            Q = i.value.draggable;
          return !!(Q && (!Q.nodeDraggable || Q.nodeDraggable(H)));
        },
        ze = function () {
          var H = i.value,
            Q = H.draggable,
            ye = H.prefixCls;
          return Q != null && Q.icon
            ? m("span", { class: "".concat(ye, "-draggable-icon") }, [Q.icon])
            : null;
        },
        Ye = function () {
          var H,
            Q,
            ye,
            _e = e.switcherIcon,
            _ =
              _e === void 0
                ? r.switcherIcon ||
                  ((H = i.value.slots) === null || H === void 0
                    ? void 0
                    : H[
                        (ye =
                          (Q = e.data) === null || Q === void 0
                            ? void 0
                            : Q.slots) === null || ye === void 0
                          ? void 0
                          : ye.switcherIcon
                      ])
                : _e,
            F = i.value.switcherIcon,
            W = _ || F;
          return typeof W == "function" ? W(oe.value) : W;
        },
        pe = function () {
          var H = i.value,
            Q = H.loadData,
            ye = H.onNodeLoad;
          P.value ||
            (Q && x.value && !O.value && !T.value && !S.value && ye(z.value));
        };
      Ue(function () {
        pe();
      }),
        fn(function () {
          pe();
        });
      var He = function () {
          var H = i.value.prefixCls,
            Q = Ye();
          if (O.value)
            return Q !== !1
              ? m(
                  "span",
                  {
                    class: we(
                      "".concat(H, "-switcher"),
                      "".concat(H, "-switcher-noop")
                    )
                  },
                  [Q]
                )
              : null;
          var ye = we(
            "".concat(H, "-switcher"),
            "".concat(H, "-switcher_").concat(x.value ? uc : cc)
          );
          return Q !== !1 ? m("span", { onClick: Ee, class: ye }, [Q]) : null;
        },
        Ve = function () {
          var H,
            Q,
            ye = e.disableCheckbox,
            _e = i.value.prefixCls,
            _ = V.value,
            F = D.value;
          return F
            ? m(
                "span",
                {
                  class: we(
                    "".concat(_e, "-checkbox"),
                    g.value && "".concat(_e, "-checkbox-checked"),
                    !g.value &&
                      A.value &&
                      "".concat(_e, "-checkbox-indeterminate"),
                    (_ || ye) && "".concat(_e, "-checkbox-disabled")
                  ),
                  onClick: le
                },
                [
                  (Q = (H = i.value).customCheckable) === null || Q === void 0
                    ? void 0
                    : Q.call(H)
                ]
              )
            : null;
        },
        nt = function () {
          var H = i.value.prefixCls;
          return m(
            "span",
            {
              class: we(
                "".concat(H, "-iconEle"),
                "".concat(H, "-icon__").concat(I.value || "docu"),
                P.value && "".concat(H, "-icon_loading")
              )
            },
            null
          );
        },
        _t = function () {
          var H = e.disabled,
            Q = e.eventKey,
            ye = i.value,
            _e = ye.draggable,
            _ = ye.dropLevelOffset,
            F = ye.dropPosition,
            W = ye.prefixCls,
            ie = ye.indent,
            ce = ye.dropIndicatorRender,
            re = ye.dragOverNodeKey,
            ee = ye.direction,
            J = _e !== !1,
            se = !H && J && re === Q;
          return se
            ? ce({
                dropPosition: F,
                dropLevelOffset: _,
                indent: ie,
                prefixCls: W,
                direction: ee
              })
            : null;
        },
        ut = function () {
          var H,
            Q,
            ye,
            _e,
            _,
            F,
            W = e.icon,
            ie = W === void 0 ? r.icon : W,
            ce = e.data,
            re =
              r.title ||
              ((H = i.value.slots) === null || H === void 0
                ? void 0
                : H[
                    (ye =
                      (Q = e.data) === null || Q === void 0
                        ? void 0
                        : Q.slots) === null || ye === void 0
                      ? void 0
                      : ye.title
                  ]) ||
              ((_e = i.value.slots) === null || _e === void 0
                ? void 0
                : _e.title) ||
              e.title,
            ee = i.value,
            J = ee.prefixCls,
            se = ee.showIcon,
            Me = ee.icon,
            Ie = ee.loadData,
            te = V.value,
            ae = "".concat(J, "-node-content-wrapper"),
            ke;
          if (se) {
            var Ce =
              ie ||
              ((_ = i.value.slots) === null || _ === void 0
                ? void 0
                : _[
                    (F = ce == null ? void 0 : ce.slots) === null ||
                    F === void 0
                      ? void 0
                      : F.icon
                  ]) ||
              Me;
            ke = Ce
              ? m(
                  "span",
                  {
                    class: we(
                      "".concat(J, "-iconEle"),
                      "".concat(J, "-icon__customize")
                    )
                  },
                  [typeof Ce == "function" ? Ce(oe.value) : Ce]
                )
              : nt();
          } else Ie && P.value && (ke = nt());
          var ge;
          typeof re == "function" ? (ge = re(oe.value)) : (ge = re),
            (ge = ge === void 0 ? IO : ge);
          var Ne = m("span", { class: "".concat(J, "-title") }, [ge]);
          return m(
            "span",
            {
              ref: j,
              title: typeof re == "string" ? re : "",
              class: we(
                "".concat(ae),
                "".concat(ae, "-").concat(I.value || "normal"),
                !te && (h.value || a.value) && "".concat(J, "-node-selected")
              ),
              onMouseenter: xe,
              onMouseleave: me,
              onContextmenu: je,
              onClick: Pe,
              onDblclick: Y
            },
            [ke, Ne, _t()]
          );
        };
      return function () {
        var H,
          Q = k(k({}, e), n),
          ye = Q.eventKey,
          _e = Q.isLeaf,
          _ = Q.isStart,
          F = Q.isEnd,
          W = Q.domRef,
          ie = Q.active;
        Q.data;
        var ce = Q.onMousemove,
          re = Q.selectable,
          ee = MO(Q, [
            "eventKey",
            "isLeaf",
            "isStart",
            "isEnd",
            "domRef",
            "active",
            "data",
            "onMousemove",
            "selectable"
          ]),
          J = i.value,
          se = J.prefixCls,
          Me = J.filterTreeNode,
          Ie = J.keyEntities,
          te = J.dropContainerKey,
          ae = J.dropTargetKey,
          ke = J.draggingNodeKey,
          Ce = V.value,
          ge = ho(ee, { aria: !0, data: !0 }),
          Ne = Ie[ye] || {},
          Ke = Ne.level,
          Je = F[F.length - 1],
          $e = Ae(),
          Ge = !Ce && $e,
          dt = ke === ye,
          xt = re !== void 0 ? { "aria-selected": !!re } : void 0;
        return m(
          "div",
          X(
            X(
              {
                ref: W,
                class: we(
                  n.class,
                  "".concat(se, "-treenode"),
                  ((H = {}),
                  U(H, "".concat(se, "-treenode-disabled"), Ce),
                  U(
                    H,
                    ""
                      .concat(se, "-treenode-switcher-")
                      .concat(x.value ? "open" : "close"),
                    !_e
                  ),
                  U(H, "".concat(se, "-treenode-checkbox-checked"), g.value),
                  U(
                    H,
                    "".concat(se, "-treenode-checkbox-indeterminate"),
                    A.value
                  ),
                  U(H, "".concat(se, "-treenode-selected"), h.value),
                  U(H, "".concat(se, "-treenode-loading"), P.value),
                  U(H, "".concat(se, "-treenode-active"), ie),
                  U(H, "".concat(se, "-treenode-leaf-last"), Je),
                  U(H, "".concat(se, "-treenode-draggable"), Ge),
                  U(H, "dragging", dt),
                  U(H, "drop-target", ae === ye),
                  U(H, "drop-container", te === ye),
                  U(H, "drag-over", !Ce && R.value),
                  U(H, "drag-over-gap-top", !Ce && M.value),
                  U(H, "drag-over-gap-bottom", !Ce && q.value),
                  U(H, "filter-node", Me && Me(z.value)),
                  H)
                ),
                style: n.style,
                draggable: Ge,
                "aria-grabbed": dt,
                onDragstart: Ge ? Z : void 0,
                onDragenter: $e ? $ : void 0,
                onDragover: $e ? ve : void 0,
                onDragleave: $e ? Te : void 0,
                onDrop: $e ? De : void 0,
                onDragend: $e ? Fe : void 0,
                onMousemove: ce
              },
              xt
            ),
            ge
          ),
          [
            m(EO, { prefixCls: se, level: Ke, isStart: _, isEnd: F }, null),
            ze(),
            He(),
            Ve(),
            ut()
          ]
        );
      };
    }
  });
function Ut(e, t) {
  if (!e) return [];
  var n = e.slice(),
    r = n.indexOf(t);
  return r >= 0 && n.splice(r, 1), n;
}
function rn(e, t) {
  var n = (e || []).slice();
  return n.indexOf(t) === -1 && n.push(t), n;
}
function Ni(e) {
  return e.split("-");
}
function Jf(e, t) {
  return "".concat(e, "-").concat(t);
}
function _O(e) {
  return e && e.type && e.type.isTreeNode;
}
function jO(e, t) {
  var n = [],
    r = t[e];
  function o() {
    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    a.forEach(function (i) {
      var l = i.key,
        c = i.children;
      n.push(l), o(c);
    });
  }
  return o(r.children), n;
}
function FO(e) {
  if (e.parent) {
    var t = Ni(e.pos);
    return Number(t[t.length - 1]) === e.parent.children.length - 1;
  }
  return !1;
}
function DO(e) {
  var t = Ni(e.pos);
  return Number(t[t.length - 1]) === 0;
}
function fc(e, t, n, r, o, a, i, l, c, u) {
  var s,
    d = e.clientX,
    f = e.clientY,
    v = e.target.getBoundingClientRect(),
    p = v.top,
    b = v.height,
    w = (u === "rtl" ? -1 : 1) * (((o == null ? void 0 : o.x) || 0) - d),
    C = (w - 12) / r,
    y = l[n.eventKey];
  if (f < p + b / 2) {
    var x = i.findIndex(function (O) {
        return O.key === y.key;
      }),
      h = x <= 0 ? 0 : x - 1,
      g = i[h].key;
    y = l[g];
  }
  var S = y.key,
    P = y,
    A = y.key,
    R = 0,
    M = 0;
  if (!c.has(S))
    for (var q = 0; q < C && FO(y); q += 1) (y = y.parent), (M += 1);
  var B = t.eventData,
    j = y.node,
    T = !0;
  return (
    DO(y) &&
    y.level === 0 &&
    f < p + b / 2 &&
    a({ dragNode: B, dropNode: j, dropPosition: -1 }) &&
    y.key === n.eventKey
      ? (R = -1)
      : (P.children || []).length && c.has(A)
      ? a({ dragNode: B, dropNode: j, dropPosition: 0 })
        ? (R = 0)
        : (T = !1)
      : M === 0
      ? C > -1.5
        ? a({ dragNode: B, dropNode: j, dropPosition: 1 })
          ? (R = 1)
          : (T = !1)
        : a({ dragNode: B, dropNode: j, dropPosition: 0 })
        ? (R = 0)
        : a({ dragNode: B, dropNode: j, dropPosition: 1 })
        ? (R = 1)
        : (T = !1)
      : a({ dragNode: B, dropNode: j, dropPosition: 1 })
      ? (R = 1)
      : (T = !1),
    {
      dropPosition: R,
      dropLevelOffset: M,
      dropTargetKey: y.key,
      dropTargetPos: y.pos,
      dragOverNodeKey: A,
      dropContainerKey:
        R === 0
          ? null
          : ((s = y.parent) === null || s === void 0 ? void 0 : s.key) || null,
      dropAllowed: T
    }
  );
}
function dc(e, t) {
  if (e) {
    var n = t.multiple;
    return n ? e.slice() : e.length ? [e[0]] : e;
  }
}
function Yo(e) {
  if (!e) return null;
  var t;
  if (Array.isArray(e)) t = { checkedKeys: e, halfCheckedKeys: void 0 };
  else if (We(e) === "object")
    t = {
      checkedKeys: e.checked || void 0,
      halfCheckedKeys: e.halfChecked || void 0
    };
  else return null;
  return t;
}
function vc(e, t) {
  var n = new Set();
  function r(o) {
    if (!n.has(o)) {
      var a = t[o];
      if (a) {
        n.add(o);
        var i = a.parent,
          l = a.node;
        l.disabled || (i && r(i.key));
      }
    }
  }
  return (
    (e || []).forEach(function (o) {
      r(o);
    }),
    Re(n)
  );
}
var KO = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
function Cr(e, t) {
  return e != null ? e : t;
}
function Mi(e) {
  var t = e || {},
    n = t.title,
    r = t._title,
    o = t.key,
    a = t.children,
    i = n || "title";
  return {
    title: i,
    _title: r || [i],
    key: o || "key",
    children: a || "children"
  };
}
function LO(e) {
  function t() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
      r = Ln(n);
    return r.map(function (o) {
      var a, i, l, c;
      if (!_O(o)) return null;
      for (
        var u = o.children || {},
          s = o.key,
          d = {},
          f = 0,
          v = Object.entries(o.props);
        f < v.length;
        f++
      ) {
        var p = Se(v[f], 2),
          b = p[0],
          w = p[1];
        d[La(b)] = w;
      }
      var C = d.isLeaf,
        y = d.checkable,
        x = d.selectable,
        h = d.disabled,
        g = d.disableCheckbox,
        S = {
          isLeaf: C || C === "" || void 0,
          checkable: y || y === "" || void 0,
          selectable: x || x === "" || void 0,
          disabled: h || h === "" || void 0,
          disableCheckbox: g || g === "" || void 0
        },
        P = k(k({}, d), S),
        A = d.title,
        R =
          A === void 0
            ? (a = u.title) === null || a === void 0
              ? void 0
              : a.call(u, P)
            : A,
        M = d.icon,
        q =
          M === void 0
            ? (i = u.icon) === null || i === void 0
              ? void 0
              : i.call(u, P)
            : M,
        B = d.switcherIcon,
        j =
          B === void 0
            ? (l = u.switcherIcon) === null || l === void 0
              ? void 0
              : l.call(u, P)
            : B,
        T = KO(d, ["title", "icon", "switcherIcon"]),
        O = (c = u.default) === null || c === void 0 ? void 0 : c.call(u),
        I = k(
          k(k({}, T), {
            title: R,
            icon: q,
            switcherIcon: j,
            key: s,
            isLeaf: C
          }),
          S
        ),
        V = t(O);
      return V.length && (I.children = V), I;
    });
  }
  return t(e);
}
function RO(e, t, n) {
  var r = Mi(n),
    o = r._title,
    a = r.key,
    i = r.children,
    l = new Set(t === !0 ? [] : t),
    c = [];
  function u(s) {
    var d =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    return s.map(function (f, v) {
      for (
        var p = Jf(d ? d.pos : "0", v), b = Cr(f[a], p), w, C = 0;
        C < o.length;
        C += 1
      ) {
        var y = o[C];
        if (f[y] !== void 0) {
          w = f[y];
          break;
        }
      }
      var x = k(k({}, zt(f, [].concat(Re(o), [a, i]))), {
        title: w,
        key: b,
        parent: d,
        pos: p,
        children: null,
        data: f,
        isStart: [].concat(Re(d ? d.isStart : []), [v === 0]),
        isEnd: [].concat(Re(d ? d.isEnd : []), [v === s.length - 1])
      });
      return (
        c.push(x),
        t === !0 || l.has(b)
          ? (x.children = u(f[i] || [], x))
          : (x.children = []),
        x
      );
    });
  }
  return u(e), c;
}
function BO(e, t, n) {
  var r = {};
  We(n) === "object" ? (r = n) : (r = { externalGetKey: n }), (r = r || {});
  var o = r,
    a = o.childrenPropName,
    i = o.externalGetKey,
    l = o.fieldNames,
    c = Mi(l),
    u = c.key,
    s = c.children,
    d = a || s,
    f;
  i
    ? typeof i == "string"
      ? (f = function (p) {
          return p[i];
        })
      : typeof i == "function" &&
        (f = function (p) {
          return i(p);
        })
    : (f = function (p, b) {
        return Cr(p[u], b);
      });
  function v(p, b, w, C) {
    var y = p ? p[d] : e,
      x = p ? Jf(w.pos, b) : "0",
      h = p ? [].concat(Re(C), [p]) : [];
    if (p) {
      var g = f(p, x),
        S = {
          node: p,
          index: b,
          pos: x,
          key: g,
          parentPos: w.node ? w.pos : null,
          level: w.level + 1,
          nodes: h
        };
      t(S);
    }
    y &&
      y.forEach(function (P, A) {
        v(P, A, { node: p, pos: x, level: w ? w.level + 1 : -1 }, h);
      });
  }
  v(null);
}
function ed(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.initWrapper,
    r = t.processEntity,
    o = t.onProcessFinished,
    a = t.externalGetKey,
    i = t.childrenPropName,
    l = t.fieldNames,
    c = arguments.length > 2 ? arguments[2] : void 0,
    u = a || c,
    s = {},
    d = {},
    f = { posEntities: s, keyEntities: d };
  return (
    n && (f = n(f) || f),
    BO(
      e,
      function (v) {
        var p = v.node,
          b = v.index,
          w = v.pos,
          C = v.key,
          y = v.parentPos,
          x = v.level,
          h = v.nodes,
          g = { node: p, nodes: h, index: b, key: C, pos: w, level: x },
          S = Cr(C, w);
        (s[w] = g),
          (d[S] = g),
          (g.parent = s[y]),
          g.parent &&
            ((g.parent.children = g.parent.children || []),
            g.parent.children.push(g)),
          r && r(g, f);
      },
      { externalGetKey: u, childrenPropName: i, fieldNames: l }
    ),
    o && o(f),
    f
  );
}
function Aa(e, t) {
  var n = t.expandedKeysSet,
    r = t.selectedKeysSet,
    o = t.loadedKeysSet,
    a = t.loadingKeysSet,
    i = t.checkedKeysSet,
    l = t.halfCheckedKeysSet,
    c = t.dragOverNodeKey,
    u = t.dropPosition,
    s = t.keyEntities,
    d = s[e],
    f = {
      eventKey: e,
      expanded: n.has(e),
      selected: r.has(e),
      loaded: o.has(e),
      loading: a.has(e),
      checked: i.has(e),
      halfChecked: l.has(e),
      pos: String(d ? d.pos : ""),
      parent: d.parent,
      dragOver: c === e && u === 0,
      dragOverGapTop: c === e && u === -1,
      dragOverGapBottom: c === e && u === 1
    };
  return f;
}
function Na(e) {
  var t = e.data,
    n = e.expanded,
    r = e.selected,
    o = e.checked,
    a = e.loaded,
    i = e.loading,
    l = e.halfChecked,
    c = e.dragOver,
    u = e.dragOverGapTop,
    s = e.dragOverGapBottom,
    d = e.pos,
    f = e.active,
    v = e.eventKey,
    p = k(k({ dataRef: t }, t), {
      expanded: n,
      selected: r,
      checked: o,
      loaded: a,
      loading: i,
      halfChecked: l,
      dragOver: c,
      dragOverGapTop: u,
      dragOverGapBottom: s,
      pos: d,
      active: f,
      eventKey: v,
      key: v
    });
  return (
    "props" in p ||
      Object.defineProperty(p, "props", {
        get: function () {
          return e;
        }
      }),
    p
  );
}
function td(e, t) {
  var n = new Set();
  return (
    e.forEach(function (r) {
      t.has(r) || n.add(r);
    }),
    n
  );
}
function HO(e) {
  var t = e || {},
    n = t.disabled,
    r = t.disableCheckbox,
    o = t.checkable;
  return !!(n || r) || o === !1;
}
function VO(e, t, n, r) {
  for (var o = new Set(e), a = new Set(), i = 0; i <= n; i += 1) {
    var l = t.get(i) || new Set();
    l.forEach(function (d) {
      var f = d.key,
        v = d.node,
        p = d.children,
        b = p === void 0 ? [] : p;
      o.has(f) &&
        !r(v) &&
        b
          .filter(function (w) {
            return !r(w.node);
          })
          .forEach(function (w) {
            o.add(w.key);
          });
    });
  }
  for (var c = new Set(), u = n; u >= 0; u -= 1) {
    var s = t.get(u) || new Set();
    s.forEach(function (d) {
      var f = d.parent,
        v = d.node;
      if (!(r(v) || !d.parent || c.has(d.parent.key))) {
        if (r(d.parent.node)) {
          c.add(f.key);
          return;
        }
        var p = !0,
          b = !1;
        (f.children || [])
          .filter(function (w) {
            return !r(w.node);
          })
          .forEach(function (w) {
            var C = w.key,
              y = o.has(C);
            p && !y && (p = !1), !b && (y || a.has(C)) && (b = !0);
          }),
          p && o.add(f.key),
          b && a.add(f.key),
          c.add(f.key);
      }
    });
  }
  return { checkedKeys: Array.from(o), halfCheckedKeys: Array.from(td(a, o)) };
}
function $O(e, t, n, r, o) {
  for (var a = new Set(e), i = new Set(t), l = 0; l <= r; l += 1) {
    var c = n.get(l) || new Set();
    c.forEach(function (f) {
      var v = f.key,
        p = f.node,
        b = f.children,
        w = b === void 0 ? [] : b;
      !a.has(v) &&
        !i.has(v) &&
        !o(p) &&
        w
          .filter(function (C) {
            return !o(C.node);
          })
          .forEach(function (C) {
            a.delete(C.key);
          });
    });
  }
  i = new Set();
  for (var u = new Set(), s = r; s >= 0; s -= 1) {
    var d = n.get(s) || new Set();
    d.forEach(function (f) {
      var v = f.parent,
        p = f.node;
      if (!(o(p) || !f.parent || u.has(f.parent.key))) {
        if (o(f.parent.node)) {
          u.add(v.key);
          return;
        }
        var b = !0,
          w = !1;
        (v.children || [])
          .filter(function (C) {
            return !o(C.node);
          })
          .forEach(function (C) {
            var y = C.key,
              x = a.has(y);
            b && !x && (b = !1), !w && (x || i.has(y)) && (w = !0);
          }),
          b || a.delete(v.key),
          w && i.add(v.key),
          u.add(v.key);
      }
    });
  }
  return { checkedKeys: Array.from(a), halfCheckedKeys: Array.from(td(i, a)) };
}
function En(e, t, n, r, o, a) {
  var i;
  a ? (i = a) : (i = HO);
  var l = new Set(
      e.filter(function (u) {
        var s = !!n[u];
        return s;
      })
    ),
    c;
  return (
    t === !0 ? (c = VO(l, o, r, i)) : (c = $O(l, t.halfCheckedKeys, o, r, i)), c
  );
}
function nd(e) {
  var t = L(0),
    n = Le();
  return (
    Xe(function () {
      var r = new Map(),
        o = 0,
        a = e.value || {};
      for (var i in a)
        if (Object.prototype.hasOwnProperty.call(a, i)) {
          var l = a[i],
            c = l.level,
            u = r.get(c);
          u || ((u = new Set()), r.set(c, u)), u.add(l), (o = Math.max(o, c));
        }
      (t.value = o), (n.value = r);
    }),
    { maxLevel: t, levelEntities: n }
  );
}
var zO = ao("small", "default"),
  WO = function () {
    return {
      id: String,
      prefixCls: String,
      size: K.oneOf(zO),
      disabled: { type: Boolean, default: void 0 },
      checkedChildren: K.any,
      unCheckedChildren: K.any,
      tabindex: K.oneOfType([K.string, K.number]),
      autofocus: { type: Boolean, default: void 0 },
      loading: { type: Boolean, default: void 0 },
      checked: K.oneOfType([K.string, K.number, K.looseBool]),
      checkedValue: K.oneOfType([K.string, K.number, K.looseBool]).def(!0),
      unCheckedValue: K.oneOfType([K.string, K.number, K.looseBool]).def(!1),
      onChange: { type: Function },
      onClick: { type: Function },
      onKeydown: { type: Function },
      onMouseup: { type: Function },
      "onUpdate:checked": { type: Function },
      onBlur: Function,
      onFocus: Function
    };
  },
  UO = de({
    name: "ASwitch",
    __ANT_SWITCH: !0,
    inheritAttrs: !1,
    props: WO(),
    slots: ["checkedChildren", "unCheckedChildren"],
    setup: function (e, t) {
      var n = t.attrs,
        r = t.slots,
        o = t.expose,
        a = t.emit,
        i = Pf();
      kc(function () {
        cr(
          !("defaultChecked" in n),
          "Switch",
          "'defaultChecked' is deprecated, please use 'v-model:checked'"
        ),
          cr(
            !("value" in n),
            "Switch",
            "`value` is not validate prop, do you mean `checked`?"
          );
      });
      var l = L(e.checked !== void 0 ? e.checked : n.defaultChecked),
        c = E(function () {
          return l.value === e.checkedValue;
        });
      fe(
        function () {
          return e.checked;
        },
        function () {
          l.value = e.checked;
        }
      );
      var u = Ct("switch", e),
        s = u.prefixCls,
        d = u.direction,
        f = u.size,
        v = L(),
        p = function () {
          var S;
          (S = v.value) === null || S === void 0 || S.focus();
        },
        b = function () {
          var S;
          (S = v.value) === null || S === void 0 || S.blur();
        };
      o({ focus: p, blur: b }),
        Ue(function () {
          ft(function () {
            e.autofocus && !e.disabled && v.value.focus();
          });
        });
      var w = function (S, P) {
          e.disabled ||
            (a("update:checked", S), a("change", S, P), i.onFieldChange());
        },
        C = function (S) {
          a("blur", S);
        },
        y = function (S) {
          p();
          var P = c.value ? e.unCheckedValue : e.checkedValue;
          w(P, S), a("click", P, S);
        },
        x = function (S) {
          S.keyCode === he.LEFT
            ? w(e.unCheckedValue, S)
            : S.keyCode === he.RIGHT && w(e.checkedValue, S),
            a("keydown", S);
        },
        h = function (S) {
          var P;
          (P = v.value) === null || P === void 0 || P.blur(), a("mouseup", S);
        },
        g = E(function () {
          var S;
          return (
            (S = {}),
            U(S, "".concat(s.value, "-small"), f.value === "small"),
            U(S, "".concat(s.value, "-loading"), e.loading),
            U(S, "".concat(s.value, "-checked"), c.value),
            U(S, "".concat(s.value, "-disabled"), e.disabled),
            U(S, s.value, !0),
            U(S, "".concat(s.value, "-rtl"), d.value === "rtl"),
            S
          );
        });
      return function () {
        var S;
        return m(
          ix,
          { insertExtraNode: !0 },
          {
            default: function () {
              return [
                m(
                  "button",
                  X(
                    X(
                      X(
                        {},
                        zt(e, [
                          "prefixCls",
                          "checkedChildren",
                          "unCheckedChildren",
                          "checked",
                          "autofocus",
                          "checkedValue",
                          "unCheckedValue",
                          "id",
                          "onChange",
                          "onUpdate:checked"
                        ])
                      ),
                      n
                    ),
                    {},
                    {
                      id: (S = e.id) !== null && S !== void 0 ? S : i.id.value,
                      onKeydown: x,
                      onClick: y,
                      onBlur: C,
                      onMouseup: h,
                      type: "button",
                      role: "switch",
                      "aria-checked": l.value,
                      disabled: e.disabled || e.loading,
                      class: [n.class, g.value],
                      ref: v
                    }
                  ),
                  [
                    m("div", { class: "".concat(s.value, "-handle") }, [
                      e.loading
                        ? m(
                            ro,
                            { class: "".concat(s.value, "-loading-icon") },
                            null
                          )
                        : null
                    ]),
                    m("span", { class: "".concat(s.value, "-inner") }, [
                      c.value
                        ? Zt(r, e, "checkedChildren")
                        : Zt(r, e, "unCheckedChildren")
                    ])
                  ]
                )
              ];
            }
          }
        );
      };
    }
  }),
  T2 = br(UO),
  pc = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  },
  YO = de({
    name: "MotionTreeNode",
    inheritAttrs: !1,
    props: k(k({}, Qf), {
      active: Boolean,
      motion: Object,
      motionNodes: { type: Array },
      onMotionStart: Function,
      onMotionEnd: Function,
      motionType: String
    }),
    slots: ["title", "icon", "switcherIcon", "checkable"],
    setup: function (e, t) {
      var n = t.attrs,
        r = t.slots,
        o = L(!0),
        a = Ai(),
        i = L(!1),
        l = E(function () {
          return e.motion ? e.motion : Bf();
        }),
        c = function (u, s) {
          var d, f, v, p;
          s === "appear"
            ? (f =
                (d = l.value) === null || d === void 0
                  ? void 0
                  : d.onAfterEnter) === null ||
              f === void 0 ||
              f.call(d, u)
            : s === "leave" &&
              ((p =
                (v = l.value) === null || v === void 0
                  ? void 0
                  : v.onAfterLeave) === null ||
                p === void 0 ||
                p.call(v, u)),
            i.value || e.onMotionEnd(),
            (i.value = !0);
        };
      return (
        fe(
          function () {
            return e.motionNodes;
          },
          function () {
            e.motionNodes &&
              e.motionType === "hide" &&
              o.value &&
              ft(function () {
                o.value = !1;
              });
          },
          { immediate: !0, flush: "post" }
        ),
        Ue(function () {
          e.motionNodes && e.onMotionStart();
        }),
        rt(function () {
          e.motionNodes && c();
        }),
        function () {
          e.motion;
          var u = e.motionNodes,
            s = e.motionType,
            d = e.active,
            f = e.eventKey,
            v = pc(e, [
              "motion",
              "motionNodes",
              "motionType",
              "active",
              "eventKey"
            ]);
          return u
            ? m(
                mr,
                X(
                  X({}, l.value),
                  {},
                  {
                    appear: s === "show",
                    onAfterAppear: function (p) {
                      return c(p, "appear");
                    },
                    onAfterLeave: function (p) {
                      return c(p, "leave");
                    }
                  }
                ),
                {
                  default: function () {
                    return [
                      gr(
                        m(
                          "div",
                          {
                            class: "".concat(
                              a.value.prefixCls,
                              "-treenode-motion"
                            )
                          },
                          [
                            u.map(function (p) {
                              var b = pc(p.data, []),
                                w = p.title,
                                C = p.key,
                                y = p.isStart,
                                x = p.isEnd;
                              return (
                                delete b.children,
                                m(
                                  sc,
                                  X(
                                    X({}, b),
                                    {},
                                    {
                                      title: w,
                                      active: d,
                                      data: p.data,
                                      key: C,
                                      eventKey: C,
                                      isStart: y,
                                      isEnd: x
                                    }
                                  ),
                                  r
                                )
                              );
                            })
                          ]
                        ),
                        [[Fa, o.value]]
                      )
                    ];
                  }
                }
              )
            : m(
                sc,
                X(
                  X({ domRef: L, class: n.class, style: n.style }, v),
                  {},
                  { active: d, eventKey: f }
                ),
                r
              );
        }
      );
    }
  });
function GO() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    n = e.length,
    r = t.length;
  if (Math.abs(n - r) !== 1) return { add: !1, key: null };
  function o(a, i) {
    var l = new Map();
    a.forEach(function (u) {
      l.set(u, !0);
    });
    var c = i.filter(function (u) {
      return !l.has(u);
    });
    return c.length === 1 ? c[0] : null;
  }
  return n < r ? { add: !0, key: o(e, t) } : { add: !1, key: o(t, e) };
}
function hc(e, t, n) {
  var r = e.findIndex(function (l) {
      return l.key === n;
    }),
    o = e[r + 1],
    a = t.findIndex(function (l) {
      return l.key === n;
    });
  if (o) {
    var i = t.findIndex(function (l) {
      return l.key === o.key;
    });
    return t.slice(a + 1, i);
  }
  return t.slice(a + 1);
}
var mc = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  },
  gc = {
    width: 0,
    height: 0,
    display: "flex",
    overflow: "hidden",
    opacity: 0,
    border: 0,
    padding: 0,
    margin: 0
  },
  qO = function () {},
  sn = "RC_TREE_MOTION_".concat(Math.random()),
  Ma = { key: sn },
  rd = { key: sn, level: 0, index: 0, pos: "0", node: Ma, nodes: [Ma] },
  yc = {
    parent: null,
    children: [],
    pos: rd.pos,
    data: Ma,
    title: null,
    key: sn,
    isStart: [],
    isEnd: []
  };
function bc(e, t, n, r) {
  return t === !1 || !n ? e : e.slice(0, Math.ceil(n / r) + 1);
}
function wc(e) {
  var t = e.key,
    n = e.pos;
  return Cr(t, n);
}
function XO(e) {
  for (var t = String(e.key), n = e; n.parent; )
    (n = n.parent), (t = "".concat(n.key, " > ").concat(t));
  return t;
}
var ZO = de({
  name: "NodeList",
  inheritAttrs: !1,
  props: AO,
  setup: function (e, t) {
    var n = t.expose,
      r = t.attrs,
      o = L(),
      a = L(),
      i = Zf(),
      l = i.expandedKeys,
      c = i.flattenNodes;
    n({
      scrollTo: function (w) {
        o.value.scrollTo(w);
      },
      getIndentWidth: function () {
        return a.value.offsetWidth;
      }
    });
    var u = Le(c.value),
      s = Le([]),
      d = L(null);
    function f() {
      (u.value = c.value),
        (s.value = []),
        (d.value = null),
        e.onListChangeEnd();
    }
    var v = Ai();
    fe(
      [
        function () {
          return l.value.slice();
        },
        c
      ],
      function (w, C) {
        var y = Se(w, 2),
          x = y[0],
          h = y[1],
          g = Se(C, 2),
          S = g[0],
          P = g[1],
          A = GO(S, x);
        if (A.key !== null) {
          var R = e.virtual,
            M = e.height,
            q = e.itemHeight;
          if (A.add) {
            var B = P.findIndex(function (D) {
                var G = D.key;
                return G === A.key;
              }),
              j = bc(hc(P, h, A.key), R, M, q),
              T = P.slice();
            T.splice(B + 1, 0, yc),
              (u.value = T),
              (s.value = j),
              (d.value = "show");
          } else {
            var O = h.findIndex(function (D) {
                var G = D.key;
                return G === A.key;
              }),
              I = bc(hc(h, P, A.key), R, M, q),
              V = h.slice();
            V.splice(O + 1, 0, yc),
              (u.value = V),
              (s.value = I),
              (d.value = "hide");
          }
        } else P !== h && (u.value = h);
      }
    ),
      fe(
        function () {
          return v.value.dragging;
        },
        function (w) {
          w || f();
        }
      );
    var p = E(function () {
        return e.motion === void 0 ? u.value : c.value;
      }),
      b = function () {
        e.onActiveChange(null);
      };
    return function () {
      var w = k(k({}, e), r),
        C = w.prefixCls;
      w.selectable, w.checkable;
      var y = w.disabled,
        x = w.motion,
        h = w.height,
        g = w.itemHeight,
        S = w.virtual,
        P = w.focusable,
        A = w.activeItem,
        R = w.focused,
        M = w.tabindex,
        q = w.onKeydown,
        B = w.onFocus,
        j = w.onBlur,
        T = w.onListChangeStart;
      w.onListChangeEnd;
      var O = mc(w, [
        "prefixCls",
        "selectable",
        "checkable",
        "disabled",
        "motion",
        "height",
        "itemHeight",
        "virtual",
        "focusable",
        "activeItem",
        "focused",
        "tabindex",
        "onKeydown",
        "onFocus",
        "onBlur",
        "onListChangeStart",
        "onListChangeEnd"
      ]);
      return m(wt, null, [
        R && A && m("span", { style: gc, "aria-live": "assertive" }, [XO(A)]),
        m("div", null, [
          m(
            "input",
            {
              style: gc,
              disabled: P === !1 || y,
              tabindex: P !== !1 ? M : null,
              onKeydown: q,
              onFocus: B,
              onBlur: j,
              value: "",
              onChange: qO,
              "aria-label": "for screen reader"
            },
            null
          )
        ]),
        m(
          "div",
          {
            class: "".concat(C, "-treenode"),
            "aria-hidden": !0,
            style: {
              position: "absolute",
              pointerEvents: "none",
              visibility: "hidden",
              height: 0,
              overflow: "hidden"
            }
          },
          [
            m("div", { class: "".concat(C, "-indent") }, [
              m("div", { ref: a, class: "".concat(C, "-indent-unit") }, null)
            ])
          ]
        ),
        m(
          NC,
          X(
            X({}, zt(O, ["onActiveChange"])),
            {},
            {
              data: p.value,
              itemKey: wc,
              height: h,
              fullHeight: !1,
              virtual: S,
              itemHeight: g,
              prefixCls: "".concat(C, "-list"),
              ref: o,
              onVisibleChange: function (I, V) {
                var D = new Set(I),
                  G = V.filter(function (oe) {
                    return !D.has(oe);
                  });
                G.some(function (oe) {
                  return wc(oe) === sn;
                }) && f();
              }
            }
          ),
          {
            default: function (I) {
              var V = I.pos,
                D = mc(I.data, []),
                G = I.title,
                oe = I.key,
                ue = I.isStart,
                z = I.isEnd,
                N = Cr(oe, V);
              return (
                delete D.key,
                delete D.children,
                m(
                  YO,
                  X(
                    X({}, D),
                    {},
                    {
                      eventKey: N,
                      title: G,
                      active: !!A && oe === A.key,
                      data: I.data,
                      isStart: ue,
                      isEnd: z,
                      motion: x,
                      motionNodes: oe === sn ? s.value : null,
                      motionType: d.value,
                      onMotionStart: T,
                      onMotionEnd: f,
                      onMousemove: b
                    }
                  ),
                  null
                )
              );
            }
          }
        )
      ]);
    };
  }
});
function QO(e) {
  var t = e.dropPosition,
    n = e.dropLevelOffset,
    r = e.indent,
    o = {
      pointerEvents: "none",
      position: "absolute",
      right: 0,
      backgroundColor: "red",
      height: "".concat(2, "px")
    };
  switch (t) {
    case -1:
      (o.top = 0), (o.left = "".concat(-n * r, "px"));
      break;
    case 1:
      (o.bottom = 0), (o.left = "".concat(-n * r, "px"));
      break;
    case 0:
      (o.bottom = 0), (o.left = "".concat(r));
      break;
  }
  return m("div", { style: o }, null);
}
var JO = 10,
  e2 = de({
    name: "Tree",
    inheritAttrs: !1,
    slots: ["checkable", "title", "icon", "titleRender"],
    props: en(NO(), {
      prefixCls: "vc-tree",
      showLine: !1,
      showIcon: !0,
      selectable: !0,
      multiple: !1,
      checkable: !1,
      disabled: !1,
      checkStrictly: !1,
      draggable: !1,
      defaultExpandParent: !0,
      autoExpandParent: !1,
      defaultExpandAll: !1,
      defaultExpandedKeys: [],
      defaultCheckedKeys: [],
      defaultSelectedKeys: [],
      dropIndicatorRender: QO,
      allowDrop: function () {
        return !0;
      }
    }),
    setup: function (e, t) {
      var n = t.attrs,
        r = t.slots,
        o = t.expose,
        a = L(!1),
        i = {},
        l = L(),
        c = Le([]),
        u = Le([]),
        s = Le([]),
        d = Le([]),
        f = Le([]),
        v = Le([]),
        p = {},
        b = lt({
          draggingNodeKey: null,
          dragChildrenKeys: [],
          dropTargetKey: null,
          dropPosition: null,
          dropContainerKey: null,
          dropLevelOffset: null,
          dropTargetPos: null,
          dropAllowed: !0,
          dragOverNodeKey: null
        }),
        w = Le([]);
      fe(
        [
          function () {
            return e.treeData;
          },
          function () {
            return e.children;
          }
        ],
        function () {
          w.value =
            e.treeData !== void 0 ? mt(e.treeData).slice() : LO(mt(e.children));
        },
        { immediate: !0, deep: !0 }
      );
      var C = Le({}),
        y = L(!1),
        x = L(null),
        h = L(!1),
        g = E(function () {
          return Mi(e.fieldNames);
        }),
        S = L(),
        P = null,
        A = null,
        R = null,
        M = E(function () {
          return {
            expandedKeysSet: q.value,
            selectedKeysSet: B.value,
            loadedKeysSet: j.value,
            loadingKeysSet: T.value,
            checkedKeysSet: O.value,
            halfCheckedKeysSet: I.value,
            dragOverNodeKey: b.dragOverNodeKey,
            dropPosition: b.dropPosition,
            keyEntities: C.value
          };
        }),
        q = E(function () {
          return new Set(v.value);
        }),
        B = E(function () {
          return new Set(c.value);
        }),
        j = E(function () {
          return new Set(d.value);
        }),
        T = E(function () {
          return new Set(f.value);
        }),
        O = E(function () {
          return new Set(u.value);
        }),
        I = E(function () {
          return new Set(s.value);
        });
      Xe(function () {
        if (w.value) {
          var _ = ed(w.value, { fieldNames: g.value });
          C.value = k(U({}, sn, rd), _.keyEntities);
        }
      });
      var V = !1;
      fe(
        [
          function () {
            return e.expandedKeys;
          },
          function () {
            return e.autoExpandParent;
          },
          C
        ],
        function (_, F) {
          var W = Se(_, 2);
          W[0];
          var ie = W[1],
            ce = Se(F, 2);
          ce[0];
          var re = ce[1],
            ee = v.value;
          if (e.expandedKeys !== void 0 || (V && ie !== re))
            ee =
              e.autoExpandParent || (!V && e.defaultExpandParent)
                ? vc(e.expandedKeys, C.value)
                : e.expandedKeys;
          else if (!V && e.defaultExpandAll) {
            var J = k({}, C.value);
            delete J[sn],
              (ee = Object.keys(J).map(function (se) {
                return J[se].key;
              }));
          } else
            !V &&
              e.defaultExpandedKeys &&
              (ee =
                e.autoExpandParent || e.defaultExpandParent
                  ? vc(e.defaultExpandedKeys, C.value)
                  : e.defaultExpandedKeys);
          ee && (v.value = ee), (V = !0);
        },
        { immediate: !0 }
      );
      var D = Le([]);
      Xe(function () {
        D.value = RO(w.value, v.value, g.value);
      }),
        Xe(function () {
          e.selectable &&
            (e.selectedKeys !== void 0
              ? (c.value = dc(e.selectedKeys, e))
              : !V &&
                e.defaultSelectedKeys &&
                (c.value = dc(e.defaultSelectedKeys, e)));
        });
      var G = nd(C),
        oe = G.maxLevel,
        ue = G.levelEntities;
      Xe(function () {
        if (e.checkable) {
          var _;
          if (
            (e.checkedKeys !== void 0
              ? (_ = Yo(e.checkedKeys) || {})
              : !V && e.defaultCheckedKeys
              ? (_ = Yo(e.defaultCheckedKeys) || {})
              : w.value &&
                (_ = Yo(e.checkedKeys) || {
                  checkedKeys: u.value,
                  halfCheckedKeys: s.value
                }),
            _)
          ) {
            var F = _,
              W = F.checkedKeys,
              ie = W === void 0 ? [] : W,
              ce = F.halfCheckedKeys,
              re = ce === void 0 ? [] : ce;
            if (!e.checkStrictly) {
              var ee = En(ie, !0, C.value, oe.value, ue.value);
              (ie = ee.checkedKeys), (re = ee.halfCheckedKeys);
            }
            (u.value = ie), (s.value = re);
          }
        }
      }),
        Xe(function () {
          e.loadedKeys && (d.value = e.loadedKeys);
        });
      var z = function () {
          k(b, {
            dragOverNodeKey: null,
            dropPosition: null,
            dropLevelOffset: null,
            dropTargetKey: null,
            dropContainerKey: null,
            dropTargetPos: null,
            dropAllowed: !1
          });
        },
        N = function (_) {
          S.value.scrollTo(_);
        };
      fe(
        function () {
          return e.activeKey;
        },
        function () {
          e.activeKey !== void 0 && (x.value = e.activeKey);
        },
        { immediate: !0 }
      ),
        fe(
          x,
          function (_) {
            ft(function () {
              _ !== null && N({ key: _ });
            });
          },
          { immediate: !0, flush: "post" }
        );
      var Y = function (_) {
          e.expandedKeys === void 0 && (v.value = _);
        },
        ne = function () {
          b.draggingNodeKey !== null &&
            k(b, {
              draggingNodeKey: null,
              dropPosition: null,
              dropContainerKey: null,
              dropTargetKey: null,
              dropLevelOffset: null,
              dropAllowed: !0,
              dragOverNodeKey: null
            }),
            (P = null),
            (R = null);
        },
        le = function (_, F) {
          var W = e.onDragend;
          (b.dragOverNodeKey = null),
            ne(),
            W == null || W({ event: _, node: F.eventData }),
            (A = null);
        },
        Pe = function _(F) {
          le(F, null), window.removeEventListener("dragend", _);
        },
        xe = function (_, F) {
          var W = e.onDragstart,
            ie = F.eventKey,
            ce = F.eventData;
          (A = F), (P = { x: _.clientX, y: _.clientY });
          var re = Ut(v.value, ie);
          (b.draggingNodeKey = ie),
            (b.dragChildrenKeys = jO(ie, C.value)),
            (l.value = S.value.getIndentWidth()),
            Y(re),
            window.addEventListener("dragend", Pe),
            W && W({ event: _, node: ce });
        },
        me = function (_, F) {
          var W = e.onDragenter,
            ie = e.onExpand,
            ce = e.allowDrop,
            re = e.direction,
            ee = F.pos,
            J = F.eventKey;
          if ((R !== J && (R = J), !A)) {
            z();
            return;
          }
          var se = fc(_, A, F, l.value, P, ce, D.value, C.value, q.value, re),
            Me = se.dropPosition,
            Ie = se.dropLevelOffset,
            te = se.dropTargetKey,
            ae = se.dropContainerKey,
            ke = se.dropTargetPos,
            Ce = se.dropAllowed,
            ge = se.dragOverNodeKey;
          if (b.dragChildrenKeys.indexOf(te) !== -1 || !Ce) {
            z();
            return;
          }
          if (
            (i || (i = {}),
            Object.keys(i).forEach(function (Ne) {
              clearTimeout(i[Ne]);
            }),
            A.eventKey !== F.eventKey &&
              (i[ee] = window.setTimeout(function () {
                if (b.draggingNodeKey !== null) {
                  var Ne = v.value.slice(),
                    Ke = C.value[F.eventKey];
                  Ke &&
                    (Ke.children || []).length &&
                    (Ne = rn(v.value, F.eventKey)),
                    Y(Ne),
                    ie &&
                      ie(Ne, {
                        node: F.eventData,
                        expanded: !0,
                        nativeEvent: _
                      });
                }
              }, 800)),
            A.eventKey === te && Ie === 0)
          ) {
            z();
            return;
          }
          k(b, {
            dragOverNodeKey: ge,
            dropPosition: Me,
            dropLevelOffset: Ie,
            dropTargetKey: te,
            dropContainerKey: ae,
            dropTargetPos: ke,
            dropAllowed: Ce
          }),
            W && W({ event: _, node: F.eventData, expandedKeys: v.value });
        },
        je = function (_, F) {
          var W = e.onDragover,
            ie = e.allowDrop,
            ce = e.direction;
          if (A) {
            var re = fc(_, A, F, l.value, P, ie, D.value, C.value, q.value, ce),
              ee = re.dropPosition,
              J = re.dropLevelOffset,
              se = re.dropTargetKey,
              Me = re.dropContainerKey,
              Ie = re.dropAllowed,
              te = re.dropTargetPos,
              ae = re.dragOverNodeKey;
            b.dragChildrenKeys.indexOf(se) !== -1 ||
              !Ie ||
              (A.eventKey === se && J === 0
                ? (b.dropPosition === null &&
                    b.dropLevelOffset === null &&
                    b.dropTargetKey === null &&
                    b.dropContainerKey === null &&
                    b.dropTargetPos === null &&
                    b.dropAllowed === !1 &&
                    b.dragOverNodeKey === null) ||
                  z()
                : (ee === b.dropPosition &&
                    J === b.dropLevelOffset &&
                    se === b.dropTargetKey &&
                    Me === b.dropContainerKey &&
                    te === b.dropTargetPos &&
                    Ie === b.dropAllowed &&
                    ae === b.dragOverNodeKey) ||
                  k(b, {
                    dropPosition: ee,
                    dropLevelOffset: J,
                    dropTargetKey: se,
                    dropContainerKey: Me,
                    dropTargetPos: te,
                    dropAllowed: Ie,
                    dragOverNodeKey: ae
                  }),
              W && W({ event: _, node: F.eventData }));
          }
        },
        Z = function (_, F) {
          R === F.eventKey &&
            !_.currentTarget.contains(_.relatedTarget) &&
            (z(), (R = null));
          var W = e.onDragleave;
          W && W({ event: _, node: F.eventData });
        },
        $ = function (_, F) {
          var W =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : !1,
            ie,
            ce = b.dragChildrenKeys,
            re = b.dropPosition,
            ee = b.dropTargetKey,
            J = b.dropTargetPos,
            se = b.dropAllowed;
          if (se) {
            var Me = e.onDrop;
            if (((b.dragOverNodeKey = null), ne(), ee !== null)) {
              var Ie = k(k({}, Aa(ee, mt(M.value))), {
                active:
                  ((ie = H.value) === null || ie === void 0
                    ? void 0
                    : ie.key) === ee,
                data: C.value[ee].node
              });
              ce.indexOf(ee);
              var te = Ni(J),
                ae = {
                  event: _,
                  node: Na(Ie),
                  dragNode: A ? A.eventData : null,
                  dragNodesKeys: [A.eventKey].concat(ce),
                  dropToGap: re !== 0,
                  dropPosition: re + Number(te[te.length - 1])
                };
              W || Me == null || Me(ae), (A = null);
            }
          }
        },
        ve = function (_, F) {
          var W = e.onClick;
          W && W(_, F);
        },
        Te = function (_, F) {
          var W = e.onDblclick;
          W && W(_, F);
        },
        Fe = function (_, F) {
          var W = c.value,
            ie = e.onSelect,
            ce = e.multiple,
            re = F.selected,
            ee = F[g.value.key],
            J = !re;
          J ? (ce ? (W = rn(W, ee)) : (W = [ee])) : (W = Ut(W, ee));
          var se = C.value,
            Me = W.map(function (Ie) {
              var te = se[Ie];
              return te ? te.node : null;
            }).filter(function (Ie) {
              return Ie;
            });
          e.selectedKeys === void 0 && (c.value = W),
            ie &&
              ie(W, {
                event: "select",
                selected: J,
                node: F,
                selectedNodes: Me,
                nativeEvent: _
              });
        },
        De = function (_, F, W) {
          var ie = e.checkStrictly,
            ce = e.onCheck,
            re = F[g.value.key],
            ee,
            J = { event: "check", node: F, checked: W, nativeEvent: _ },
            se = C.value;
          if (ie) {
            var Me = W ? rn(u.value, re) : Ut(u.value, re),
              Ie = Ut(s.value, re);
            (ee = { checked: Me, halfChecked: Ie }),
              (J.checkedNodes = Me.map(function (Ne) {
                return se[Ne];
              })
                .filter(function (Ne) {
                  return Ne;
                })
                .map(function (Ne) {
                  return Ne.node;
                })),
              e.checkedKeys === void 0 && (u.value = Me);
          } else {
            var te = En(
                [].concat(Re(u.value), [re]),
                !0,
                se,
                oe.value,
                ue.value
              ),
              ae = te.checkedKeys,
              ke = te.halfCheckedKeys;
            if (!W) {
              var Ce = new Set(ae);
              Ce.delete(re);
              var ge = En(
                Array.from(Ce),
                { checked: !1, halfCheckedKeys: ke },
                se,
                oe.value,
                ue.value
              );
              (ae = ge.checkedKeys), (ke = ge.halfCheckedKeys);
            }
            (ee = ae),
              (J.checkedNodes = []),
              (J.checkedNodesPositions = []),
              (J.halfCheckedKeys = ke),
              ae.forEach(function (Ne) {
                var Ke = se[Ne];
                if (Ke) {
                  var Je = Ke.node,
                    $e = Ke.pos;
                  J.checkedNodes.push(Je),
                    J.checkedNodesPositions.push({ node: Je, pos: $e });
                }
              }),
              e.checkedKeys === void 0 && ((u.value = ae), (s.value = ke));
          }
          ce && ce(ee, J);
        },
        Ee = function (_) {
          var F = _[g.value.key],
            W = new Promise(function (ie, ce) {
              var re = e.loadData,
                ee = e.onLoad;
              if (!re || j.value.has(F) || T.value.has(F)) return null;
              var J = re(_);
              J.then(function () {
                var se = rn(d.value, F),
                  Me = Ut(f.value, F);
                ee && ee(se, { event: "load", node: _ }),
                  e.loadedKeys === void 0 && (d.value = se),
                  (f.value = Me),
                  ie();
              }).catch(function (se) {
                var Me = Ut(f.value, F);
                if (((f.value = Me), (p[F] = (p[F] || 0) + 1), p[F] >= JO)) {
                  var Ie = rn(d.value, F);
                  e.loadedKeys === void 0 && (d.value = Ie), ie();
                }
                ce(se);
              }),
                (f.value = rn(f.value, F));
            });
          return W.catch(function () {}), W;
        },
        Ae = function (_, F) {
          var W = e.onMouseenter;
          W && W({ event: _, node: F });
        },
        ze = function (_, F) {
          var W = e.onMouseleave;
          W && W({ event: _, node: F });
        },
        Ye = function (_, F) {
          var W = e.onRightClick;
          W && (_.preventDefault(), W({ event: _, node: F }));
        },
        pe = function (_) {
          var F = e.onFocus;
          (y.value = !0), F && F(_);
        },
        He = function (_) {
          var F = e.onBlur;
          (y.value = !1), ut(null), F && F(_);
        },
        Ve = function (_, F) {
          var W = v.value,
            ie = e.onExpand,
            ce = e.loadData,
            re = F.expanded,
            ee = F[g.value.key];
          if (!h.value) {
            W.indexOf(ee);
            var J = !re;
            if (
              (J ? (W = rn(W, ee)) : (W = Ut(W, ee)),
              Y(W),
              ie && ie(W, { node: F, expanded: J, nativeEvent: _ }),
              J && ce)
            ) {
              var se = Ee(F);
              se &&
                se
                  .then(function () {})
                  .catch(function (Me) {
                    var Ie = Ut(v.value, ee);
                    Y(Ie), Promise.reject(Me);
                  });
            }
          }
        },
        nt = function () {
          h.value = !0;
        },
        _t = function () {
          setTimeout(function () {
            h.value = !1;
          });
        },
        ut = function (_) {
          var F = e.onActiveChange;
          x.value !== _ &&
            (e.activeKey !== void 0 && (x.value = _),
            _ !== null && N({ key: _ }),
            F && F(_));
        },
        H = E(function () {
          return x.value === null
            ? null
            : D.value.find(function (_) {
                var F = _.key;
                return F === x.value;
              }) || null;
        }),
        Q = function (_) {
          var F = D.value.findIndex(function (ce) {
            var re = ce.key;
            return re === x.value;
          });
          F === -1 && _ < 0 && (F = D.value.length),
            (F = (F + _ + D.value.length) % D.value.length);
          var W = D.value[F];
          if (W) {
            var ie = W.key;
            ut(ie);
          } else ut(null);
        },
        ye = E(function () {
          return Na(
            k(k({}, Aa(x.value, M.value)), { data: H.value.data, active: !0 })
          );
        }),
        _e = function (_) {
          var F = e.onKeydown,
            W = e.checkable,
            ie = e.selectable;
          switch (_.which) {
            case he.UP: {
              Q(-1), _.preventDefault();
              break;
            }
            case he.DOWN: {
              Q(1), _.preventDefault();
              break;
            }
          }
          var ce = H.value;
          if (ce && ce.data) {
            var re = ce.data.isLeaf === !1 || !!(ce.data.children || []).length,
              ee = ye.value;
            switch (_.which) {
              case he.LEFT: {
                re && q.value.has(x.value)
                  ? Ve({}, ee)
                  : ce.parent && ut(ce.parent.key),
                  _.preventDefault();
                break;
              }
              case he.RIGHT: {
                re && !q.value.has(x.value)
                  ? Ve({}, ee)
                  : ce.children && ce.children.length && ut(ce.children[0].key),
                  _.preventDefault();
                break;
              }
              case he.ENTER:
              case he.SPACE: {
                W && !ee.disabled && ee.checkable !== !1 && !ee.disableCheckbox
                  ? De({}, ee, !O.value.has(x.value))
                  : !W &&
                    ie &&
                    !ee.disabled &&
                    ee.selectable !== !1 &&
                    Fe({}, ee);
                break;
              }
            }
          }
          F && F(_);
        };
      return (
        o({
          onNodeExpand: Ve,
          scrollTo: N,
          onKeydown: _e,
          selectedKeys: E(function () {
            return c.value;
          }),
          checkedKeys: E(function () {
            return u.value;
          }),
          halfCheckedKeys: E(function () {
            return s.value;
          }),
          loadedKeys: E(function () {
            return d.value;
          }),
          loadingKeys: E(function () {
            return f.value;
          }),
          expandedKeys: E(function () {
            return v.value;
          })
        }),
        jn(function () {
          window.removeEventListener("dragend", Pe), (a.value = !0);
        }),
        PO({
          expandedKeys: v,
          selectedKeys: c,
          loadedKeys: d,
          loadingKeys: f,
          checkedKeys: u,
          halfCheckedKeys: s,
          expandedKeysSet: q,
          selectedKeysSet: B,
          loadedKeysSet: j,
          loadingKeysSet: T,
          checkedKeysSet: O,
          halfCheckedKeysSet: I,
          flattenNodes: D
        }),
        function () {
          var _,
            F = b.draggingNodeKey,
            W = b.dropLevelOffset,
            ie = b.dropContainerKey,
            ce = b.dropTargetKey,
            re = b.dropPosition,
            ee = b.dragOverNodeKey,
            J = e.prefixCls,
            se = e.showLine,
            Me = e.focusable,
            Ie = e.tabindex,
            te = Ie === void 0 ? 0 : Ie,
            ae = e.selectable,
            ke = e.showIcon,
            Ce = e.icon,
            ge = Ce === void 0 ? r.icon : Ce,
            Ne = e.switcherIcon,
            Ke = e.draggable,
            Je = e.checkable,
            $e = e.checkStrictly,
            Ge = e.disabled,
            dt = e.motion,
            xt = e.loadData,
            et = e.filterTreeNode,
            yt = e.height,
            at = e.itemHeight,
            tt = e.virtual,
            ct = e.dropIndicatorRender,
            bt = e.onContextmenu,
            xr = e.onScroll,
            hn = e.direction,
            Sr = n.class,
            Wn = n.style,
            Co = ho(k(k({}, e), n), { aria: !0, data: !0 }),
            jt;
          return (
            Ke &&
              (We(Ke) === "object"
                ? (jt = Ke)
                : typeof Ke == "function"
                ? (jt = { nodeDraggable: Ke })
                : (jt = {})),
            m(
              kO,
              {
                value: {
                  prefixCls: J,
                  selectable: ae,
                  showIcon: ke,
                  icon: ge,
                  switcherIcon: Ne,
                  draggable: jt,
                  draggingNodeKey: F,
                  checkable: Je,
                  customCheckable: r.checkable,
                  checkStrictly: $e,
                  disabled: Ge,
                  keyEntities: C.value,
                  dropLevelOffset: W,
                  dropContainerKey: ie,
                  dropTargetKey: ce,
                  dropPosition: re,
                  dragOverNodeKey: ee,
                  dragging: F !== null,
                  indent: l.value,
                  direction: hn,
                  dropIndicatorRender: ct,
                  loadData: xt,
                  filterTreeNode: et,
                  onNodeClick: ve,
                  onNodeDoubleClick: Te,
                  onNodeExpand: Ve,
                  onNodeSelect: Fe,
                  onNodeCheck: De,
                  onNodeLoad: Ee,
                  onNodeMouseEnter: Ae,
                  onNodeMouseLeave: ze,
                  onNodeContextMenu: Ye,
                  onNodeDragStart: xe,
                  onNodeDragEnter: me,
                  onNodeDragOver: je,
                  onNodeDragLeave: Z,
                  onNodeDragEnd: le,
                  onNodeDrop: $,
                  slots: r
                }
              },
              {
                default: function () {
                  return [
                    m(
                      "div",
                      {
                        role: "tree",
                        class: we(
                          J,
                          Sr,
                          ((_ = {}),
                          U(_, "".concat(J, "-show-line"), se),
                          U(_, "".concat(J, "-focused"), y.value),
                          U(
                            _,
                            "".concat(J, "-active-focused"),
                            x.value !== null
                          ),
                          _)
                        )
                      },
                      [
                        m(
                          ZO,
                          X(
                            {
                              ref: S,
                              prefixCls: J,
                              style: Wn,
                              disabled: Ge,
                              selectable: ae,
                              checkable: !!Je,
                              motion: dt,
                              height: yt,
                              itemHeight: at,
                              virtual: tt,
                              focusable: Me,
                              focused: y.value,
                              tabindex: te,
                              activeItem: H.value,
                              onFocus: pe,
                              onBlur: He,
                              onKeydown: _e,
                              onActiveChange: ut,
                              onListChangeStart: nt,
                              onListChangeEnd: _t,
                              onContextmenu: bt,
                              onScroll: xr
                            },
                            Co
                          ),
                          null
                        )
                      ]
                    )
                  ];
                }
              }
            )
          );
        }
      );
    }
  });
function t2(e, t, n, r) {
  var o = r.isLeaf,
    a = r.expanded,
    i = r.loading,
    l = t;
  if (i) return m(ro, { class: "".concat(e, "-switcher-loading-icon") }, null);
  var c;
  n && We(n) === "object" && (c = n.showLeafIcon);
  var u = null,
    s = "".concat(e, "-switcher-icon");
  return o
    ? (n &&
        (We(n) === "object" && !c
          ? (u = m(
              "span",
              { class: "".concat(e, "-switcher-leaf-line") },
              null
            ))
          : (u = m(Qv, { class: "".concat(e, "-switcher-line-icon") }, null))),
      u)
    : ((u = m(Gv, { class: s }, null)),
      n &&
        (u = a
          ? m(np, { class: "".concat(e, "-switcher-line-icon") }, null)
          : m(sp, { class: "".concat(e, "-switcher-line-icon") }, null)),
      typeof t == "function"
        ? (l = t(k(k({}, r), { defaultIcon: u, switcherCls: s })))
        : Rn(l) && (l = Ka(l, { class: s })),
      l || u);
}
function n2(e) {
  return Array.isArray(e) ? e : e !== void 0 ? [e] : [];
}
function r2(e) {
  var t = e || {},
    n = t.label,
    r = t.value,
    o = t.children,
    a = r || "value";
  return {
    _title: n ? [n] : ["title", "label"],
    value: a,
    key: a,
    children: o || "children"
  };
}
function Ia(e) {
  return e.disabled || e.disableCheckbox || e.checkable === !1;
}
function o2(e, t) {
  var n = [];
  function r(o) {
    o.forEach(function (a) {
      n.push(a[t.value]);
      var i = a[t.children];
      i && r(i);
    });
  }
  return r(e), n;
}
function Cc(e) {
  return e == null;
}
var od = Symbol("TreeSelectContextPropsKey");
function a2(e) {
  return Ze(od, e);
}
function i2() {
  return Qe(od, {});
}
var l2 = {
    width: 0,
    height: 0,
    display: "flex",
    overflow: "hidden",
    opacity: 0,
    border: 0,
    padding: 0,
    margin: 0
  },
  u2 = de({
    name: "OptionList",
    inheritAttrs: !1,
    slots: ["notFoundContent", "menuItemSelectedIcon"],
    setup: function (e, t) {
      var n = t.slots,
        r = t.expose,
        o = iC(),
        a = go(),
        i = i2(),
        l = L(),
        c = MC(
          function () {
            return i.treeData;
          },
          [
            function () {
              return o.open;
            },
            function () {
              return i.treeData;
            }
          ],
          function (g) {
            return g[0];
          }
        ),
        u = E(function () {
          var g = a.checkable,
            S = a.halfCheckedKeys,
            P = a.checkedKeys;
          return g ? { checked: P, halfChecked: S } : null;
        });
      fe(
        function () {
          return o.open;
        },
        function () {
          ft(function () {
            var g;
            o.open &&
              !o.multiple &&
              a.checkedKeys.length &&
              ((g = l.value) === null ||
                g === void 0 ||
                g.scrollTo({ key: a.checkedKeys[0] }));
          });
        },
        { immediate: !0, flush: "post" }
      );
      var s = E(function () {
          return String(o.searchValue).toLowerCase();
        }),
        d = function (g) {
          return s.value
            ? String(g[a.treeNodeFilterProp]).toLowerCase().includes(s.value)
            : !1;
        },
        f = Le(a.treeDefaultExpandedKeys),
        v = Le(null);
      fe(
        function () {
          return o.searchValue;
        },
        function () {
          o.searchValue && (v.value = o2(mt(i.treeData), mt(i.fieldNames)));
        },
        { immediate: !0 }
      );
      var p = E(function () {
          return a.treeExpandedKeys
            ? a.treeExpandedKeys.slice()
            : o.searchValue
            ? v.value
            : f.value;
        }),
        b = function (g) {
          var S;
          (f.value = g),
            (v.value = g),
            (S = a.onTreeExpand) === null || S === void 0 || S.call(a, g);
        },
        w = function (g) {
          g.preventDefault();
        },
        C = function (g, S) {
          var P = S.node,
            A,
            R,
            M = a.checkable,
            q = a.checkedKeys;
          (M && Ia(P)) ||
            ((A = i.onSelect) === null ||
              A === void 0 ||
              A.call(i, P.key, { selected: !q.includes(P.key) }),
            o.multiple ||
              (R = o.toggleOpen) === null ||
              R === void 0 ||
              R.call(o, !1));
        },
        y = L(null),
        x = E(function () {
          return a.keyEntities[y.value];
        }),
        h = function (g) {
          y.value = g;
        };
      return (
        r({
          scrollTo: function () {
            for (
              var g, S, P, A = arguments.length, R = new Array(A), M = 0;
              M < A;
              M++
            )
              R[M] = arguments[M];
            return (P =
              (S = l.value) === null || S === void 0 ? void 0 : S.scrollTo) ===
              null || P === void 0
              ? void 0
              : (g = P).call.apply(g, [S].concat(R));
          },
          onKeydown: function (g) {
            var S,
              P = g.which;
            switch (P) {
              case he.UP:
              case he.DOWN:
              case he.LEFT:
              case he.RIGHT:
                (S = l.value) === null || S === void 0 || S.onKeydown(g);
                break;
              case he.ENTER: {
                if (x.value) {
                  var A = x.value.node || {},
                    R = A.selectable,
                    M = A.value;
                  R !== !1 &&
                    C(null, {
                      node: { key: y.value },
                      selected: !a.checkedKeys.includes(M)
                    });
                }
                break;
              }
              case he.ESC:
                o.toggleOpen(!1);
            }
          },
          onKeyup: function () {}
        }),
        function () {
          var g,
            S = o.prefixCls,
            P = o.multiple,
            A = o.searchValue,
            R = o.open,
            M = o.notFoundContent,
            q =
              M === void 0
                ? (g = n.notFoundContent) === null || g === void 0
                  ? void 0
                  : g.call(n)
                : M,
            B = i.listHeight,
            j = i.listItemHeight,
            T = i.virtual,
            O = a.checkable,
            I = a.treeDefaultExpandAll,
            V = a.treeIcon,
            D = a.showTreeIcon,
            G = a.switcherIcon,
            oe = a.treeLine,
            ue = a.loadData,
            z = a.treeLoadedKeys,
            N = a.treeMotion,
            Y = a.onTreeLoad,
            ne = a.checkedKeys;
          if (c.value.length === 0)
            return m(
              "div",
              {
                role: "listbox",
                class: "".concat(S, "-empty"),
                onMousedown: w
              },
              [q]
            );
          var le = { fieldNames: i.fieldNames };
          return (
            z && (le.loadedKeys = z),
            p.value && (le.expandedKeys = p.value),
            m("div", { onMousedown: w }, [
              x.value &&
                R &&
                m("span", { style: l2, "aria-live": "assertive" }, [
                  x.value.node.value
                ]),
              m(
                e2,
                X(
                  X(
                    {
                      ref: l,
                      focusable: !1,
                      prefixCls: "".concat(S, "-tree"),
                      treeData: c.value,
                      height: B,
                      itemHeight: j,
                      virtual: T,
                      multiple: P,
                      icon: V,
                      showIcon: D,
                      switcherIcon: G,
                      showLine: oe,
                      loadData: A ? null : ue,
                      motion: N,
                      activeKey: y.value,
                      checkable: O,
                      checkStrictly: !0,
                      checkedKeys: u.value,
                      selectedKeys: O ? [] : ne,
                      defaultExpandAll: I
                    },
                    le
                  ),
                  {},
                  {
                    onActiveChange: h,
                    onSelect: C,
                    onCheck: C,
                    onExpand: b,
                    onLoad: Y,
                    filterTreeNode: d
                  }
                ),
                k(k({}, n), { checkable: a.customSlots.treeCheckable })
              )
            ])
          );
        }
      );
    }
  }),
  c2 = "SHOW_ALL",
  ad = "SHOW_PARENT",
  Ii = "SHOW_CHILD";
function xc(e, t, n, r) {
  var o = new Set(e);
  return t === Ii
    ? e.filter(function (a) {
        var i = n[a];
        return !(
          i &&
          i.children &&
          i.children.some(function (l) {
            var c = l.node;
            return o.has(c[r.value]);
          }) &&
          i.children.every(function (l) {
            var c = l.node;
            return Ia(c) || o.has(c[r.value]);
          })
        );
      })
    : t === ad
    ? e.filter(function (a) {
        var i = n[a],
          l = i ? i.parent : null;
        return !(l && !Ia(l.node) && o.has(l.key));
      })
    : e;
}
var wo = function () {
  return null;
};
wo.inheritAttrs = !1;
wo.displayName = "ATreeSelectNode";
wo.isTreeSelectNode = !0;
var _i = wo,
  s2 = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  };
function f2(e) {
  return e && e.type && e.type.isTreeSelectNode;
}
function d2(e) {
  function t() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return Ln(n).map(function (r) {
      var o, a, i;
      if (!f2(r)) return null;
      for (
        var l = r.children || {},
          c = r.key,
          u = {},
          s = 0,
          d = Object.entries(r.props);
        s < d.length;
        s++
      ) {
        var f = Se(d[s], 2),
          v = f[0],
          p = f[1];
        u[La(v)] = p;
      }
      var b = u.isLeaf,
        w = u.checkable,
        C = u.selectable,
        y = u.disabled,
        x = u.disableCheckbox,
        h = {
          isLeaf: b || b === "" || void 0,
          checkable: w || w === "" || void 0,
          selectable: C || C === "" || void 0,
          disabled: y || y === "" || void 0,
          disableCheckbox: x || x === "" || void 0
        },
        g = k(k({}, u), h),
        S = u.title,
        P =
          S === void 0
            ? (o = l.title) === null || o === void 0
              ? void 0
              : o.call(l, g)
            : S,
        A = u.switcherIcon,
        R =
          A === void 0
            ? (a = l.switcherIcon) === null || a === void 0
              ? void 0
              : a.call(l, g)
            : A,
        M = s2(u, ["title", "switcherIcon"]),
        q = (i = l.default) === null || i === void 0 ? void 0 : i.call(l),
        B = k(k(k({}, M), { title: P, switcherIcon: R, key: c, isLeaf: b }), h),
        j = t(q);
      return j.length && (B.children = j), B;
    });
  }
  return t(e);
}
function _a(e) {
  if (!e) return e;
  var t = k({}, e);
  return (
    "props" in t ||
      Object.defineProperty(t, "props", {
        get: function () {
          return t;
        }
      }),
    t
  );
}
function v2(e, t, n, r, o, a) {
  var i = null,
    l = null;
  function c() {
    function u(s) {
      var d =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "0",
        f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      return s
        .map(function (v, p) {
          var b = "".concat(d, "-").concat(p),
            w = v[a.value],
            C = n.includes(w),
            y = u(v[a.children] || [], b, C),
            x = m(_i, v, {
              default: function () {
                return [
                  y.map(function (g) {
                    return g.node;
                  })
                ];
              }
            });
          if ((t === w && (i = x), C)) {
            var h = { pos: b, node: x, children: y };
            return f || l.push(h), h;
          }
          return null;
        })
        .filter(function (v) {
          return v;
        });
    }
    l ||
      ((l = []),
      u(r),
      l.sort(function (s, d) {
        var f = s.node.props.value,
          v = d.node.props.value,
          p = n.indexOf(f),
          b = n.indexOf(v);
        return p - b;
      }));
  }
  Object.defineProperty(e, "triggerNode", {
    get: function () {
      return c(), i;
    }
  }),
    Object.defineProperty(e, "allCheckedNodes", {
      get: function () {
        return (
          c(),
          o
            ? l
            : l.map(function (u) {
                var s = u.node;
                return s;
              })
        );
      }
    });
}
function p2(e, t) {
  var n = t.id,
    r = t.pId,
    o = t.rootPId,
    a = {},
    i = [],
    l = e.map(function (c) {
      var u = k({}, c),
        s = u[n];
      return (a[s] = u), (u.key = u.key || s), u;
    });
  return (
    l.forEach(function (c) {
      var u = c[r],
        s = a[u];
      s && ((s.children = s.children || []), s.children.push(c)),
        (u === o || (!s && o === null)) && i.push(c);
    }),
    i
  );
}
function h2(e, t, n) {
  var r = Le();
  return (
    fe(
      [n, e, t],
      function () {
        var o = n.value;
        e.value
          ? (r.value = n.value
              ? p2(
                  mt(e.value),
                  k({ id: "id", pId: "pId", rootPId: null }, o !== !0 ? o : {})
                )
              : mt(e.value).slice())
          : (r.value = d2(mt(t.value)));
      },
      { immediate: !0, deep: !0 }
    ),
    r
  );
}
var m2 = function (e) {
    var t = Le({ valueLabels: new Map() }),
      n = Le();
    fe(
      e,
      function () {
        n.value = mt(e.value);
      },
      { immediate: !0 }
    );
    var r = E(function () {
      var o = t.value.valueLabels,
        a = new Map(),
        i = n.value.map(function (l) {
          var c,
            u = l.value,
            s = (c = l.label) !== null && c !== void 0 ? c : o.get(u);
          return a.set(u, s), k(k({}, l), { label: s });
        });
      return (t.value.valueLabels = a), i;
    });
    return [r];
  },
  g2 = function (e, t) {
    var n = Le(new Map()),
      r = Le({});
    return (
      Xe(function () {
        var o = t.value,
          a = ed(e.value, {
            fieldNames: o,
            initWrapper: function (i) {
              return k(k({}, i), { valueEntities: new Map() });
            },
            processEntity: function (i, l) {
              var c = i.node[o.value];
              l.valueEntities.set(c, i);
            }
          });
        (n.value = a.valueEntities), (r.value = a.keyEntities);
      }),
      { valueEntities: n, keyEntities: r }
    );
  },
  y2 = function (e, t, n, r, o, a) {
    var i = Le([]),
      l = Le([]);
    return (
      Xe(function () {
        var c = e.value.map(function (f) {
            var v = f.value;
            return v;
          }),
          u = t.value.map(function (f) {
            var v = f.value;
            return v;
          }),
          s = c.filter(function (f) {
            return !r.value[f];
          });
        if (n.value) {
          var d = En(c, !0, r.value, o.value, a.value);
          (c = d.checkedKeys), (u = d.halfCheckedKeys);
        }
        (i.value = Array.from(new Set([].concat(Re(s), Re(c))))), (l.value = u);
      }),
      [i, l]
    );
  },
  b2 = function (e, t, n) {
    var r = n.treeNodeFilterProp,
      o = n.filterTreeNode,
      a = n.fieldNames;
    return E(function () {
      var i = a.value.children,
        l = t.value,
        c = r == null ? void 0 : r.value;
      if (!l || o.value === !1) return e.value;
      var u;
      if (typeof o.value == "function") u = o.value;
      else {
        var s = l.toUpperCase();
        u = function (f, v) {
          var p = v[c];
          return String(p).toUpperCase().includes(s);
        };
      }
      function d(f) {
        for (
          var v =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1,
            p = [],
            b = 0,
            w = f.length;
          b < w;
          b++
        ) {
          var C = f[b],
            y = C[i],
            x = v || u(l, _a(C)),
            h = d(y || [], x);
          (x || h.length) && p.push(k(k({}, C), U({}, i, h)));
        }
        return p;
      }
      return d(e.value);
    });
  };
function id() {
  return k(k({}, zt(Sf(), ["mode"])), {
    prefixCls: String,
    id: String,
    value: { type: [String, Number, Object, Array] },
    defaultValue: { type: [String, Number, Object, Array] },
    onChange: { type: Function },
    searchValue: String,
    inputValue: String,
    onSearch: { type: Function },
    autoClearSearchValue: { type: Boolean, default: void 0 },
    filterTreeNode: { type: [Boolean, Function], default: void 0 },
    treeNodeFilterProp: String,
    onSelect: Function,
    onDeselect: Function,
    showCheckedStrategy: { type: String },
    treeNodeLabelProp: String,
    fieldNames: { type: Object },
    multiple: { type: Boolean, default: void 0 },
    treeCheckable: { type: Boolean, default: void 0 },
    treeCheckStrictly: { type: Boolean, default: void 0 },
    labelInValue: { type: Boolean, default: void 0 },
    treeData: { type: Array },
    treeDataSimpleMode: { type: [Boolean, Object], default: void 0 },
    loadData: { type: Function },
    treeLoadedKeys: { type: Array },
    onTreeLoad: { type: Function },
    treeDefaultExpandAll: { type: Boolean, default: void 0 },
    treeExpandedKeys: { type: Array },
    treeDefaultExpandedKeys: { type: Array },
    onTreeExpand: { type: Function },
    virtual: { type: Boolean, default: void 0 },
    listHeight: Number,
    listItemHeight: Number,
    onDropdownVisibleChange: { type: Function },
    treeLine: { type: [Boolean, Object], default: void 0 },
    treeIcon: K.any,
    showTreeIcon: { type: Boolean, default: void 0 },
    switcherIcon: K.any,
    treeMotion: K.any,
    children: Array,
    showArrow: { type: Boolean, default: void 0 },
    showSearch: { type: Boolean, default: void 0 },
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: void 0 },
    disabled: { type: Boolean, default: void 0 },
    placeholder: K.any,
    maxTagPlaceholder: { type: Function },
    dropdownPopupAlign: K.any,
    customSlots: Object
  });
}
function w2(e) {
  return !e || We(e) !== "object";
}
var C2 = de({
    name: "TreeSelect",
    inheritAttrs: !1,
    props: en(id(), {
      treeNodeFilterProp: "value",
      autoClearSearchValue: !0,
      showCheckedStrategy: Ii,
      listHeight: 200,
      listItemHeight: 20,
      prefixCls: "vc-tree-select"
    }),
    setup: function (e, t) {
      var n = t.attrs,
        r = t.expose,
        o = t.slots,
        a = jC(Mt(e, "id")),
        i = E(function () {
          return e.treeCheckable && !e.treeCheckStrictly;
        }),
        l = E(function () {
          return e.treeCheckable || e.treeCheckStrictly;
        }),
        c = E(function () {
          return e.treeCheckStrictly || e.labelInValue;
        }),
        u = E(function () {
          return l.value || e.multiple;
        }),
        s = E(function () {
          return r2(e.fieldNames);
        }),
        d = eo("", {
          value: E(function () {
            return e.searchValue !== void 0 ? e.searchValue : e.inputValue;
          }),
          postState: function (_) {
            return _ || "";
          }
        }),
        f = Se(d, 2),
        v = f[0],
        p = f[1],
        b = function (_) {
          var F;
          p(_), (F = e.onSearch) === null || F === void 0 || F.call(e, _);
        },
        w = h2(
          Mt(e, "treeData"),
          Mt(e, "children"),
          Mt(e, "treeDataSimpleMode")
        ),
        C = g2(w, s),
        y = C.keyEntities,
        x = C.valueEntities,
        h = function (_) {
          var F = [],
            W = [];
          return (
            _.forEach(function (ie) {
              x.value.has(ie) ? W.push(ie) : F.push(ie);
            }),
            { missingRawValues: F, existRawValues: W }
          );
        },
        g = b2(w, v, {
          fieldNames: s,
          treeNodeFilterProp: Mt(e, "treeNodeFilterProp"),
          filterTreeNode: Mt(e, "filterTreeNode")
        }),
        S = function (_) {
          if (_) {
            if (e.treeNodeLabelProp) return _[e.treeNodeLabelProp];
            for (var F = s.value._title, W = 0; W < F.length; W += 1) {
              var ie = _[F[W]];
              if (ie !== void 0) return ie;
            }
          }
        },
        P = function (_) {
          var F = n2(_);
          return F.map(function (W) {
            return w2(W) ? { value: W } : W;
          });
        },
        A = function (_) {
          var F = P(_);
          return F.map(function (W) {
            var ie = W.label,
              ce = W.value,
              re = W.halfChecked,
              ee,
              J = x.value.get(ce);
            return (
              J && ((ie = ie != null ? ie : S(J.node)), (ee = J.node.disabled)),
              { label: ie, value: ce, halfChecked: re, disabled: ee }
            );
          });
        },
        R = eo(e.defaultValue, { value: Mt(e, "value") }),
        M = Se(R, 2),
        q = M[0],
        B = M[1],
        j = E(function () {
          return P(q.value);
        }),
        T = Le([]),
        O = Le([]);
      Xe(function () {
        var _ = [],
          F = [];
        j.value.forEach(function (W) {
          W.halfChecked ? F.push(W) : _.push(W);
        }),
          (T.value = _),
          (O.value = F);
      });
      var I = E(function () {
          return T.value.map(function (_) {
            return _.value;
          });
        }),
        V = nd(y),
        D = V.maxLevel,
        G = V.levelEntities,
        oe = y2(T, O, i, y, D, G),
        ue = Se(oe, 2),
        z = ue[0],
        N = ue[1],
        Y = E(function () {
          var _ = xc(z.value, e.showCheckedStrategy, y.value, s.value),
            F = _.map(function (re) {
              var ee, J, se;
              return (se =
                (J =
                  (ee = y.value[re]) === null || ee === void 0
                    ? void 0
                    : ee.node) === null || J === void 0
                  ? void 0
                  : J[s.value.value]) !== null && se !== void 0
                ? se
                : re;
            }),
            W = F.map(function (re) {
              var ee = T.value.find(function (J) {
                return J.value === re;
              });
              return { value: re, label: ee == null ? void 0 : ee.label };
            }),
            ie = A(W),
            ce = ie[0];
          return !u.value && ce && Cc(ce.value) && Cc(ce.label)
            ? []
            : ie.map(function (re) {
                var ee;
                return k(k({}, re), {
                  label:
                    (ee = re.label) !== null && ee !== void 0 ? ee : re.value
                });
              });
        }),
        ne = m2(Y),
        le = Se(ne, 1),
        Pe = le[0],
        xe = function (_, F, W) {
          var ie = A(_);
          if ((B(ie), e.autoClearSearchValue && p(""), e.onChange)) {
            var ce = _;
            if (i.value) {
              var re = xc(_, e.showCheckedStrategy, y.value, s.value);
              ce = re.map(function (ge) {
                var Ne = x.value.get(ge);
                return Ne ? Ne.node[s.value.value] : ge;
              });
            }
            var ee = F || { triggerValue: void 0, selected: void 0 },
              J = ee.triggerValue,
              se = ee.selected,
              Me = ce;
            if (e.treeCheckStrictly) {
              var Ie = O.value.filter(function (ge) {
                return !ce.includes(ge.value);
              });
              Me = [].concat(Re(Me), Re(Ie));
            }
            var te = A(Me),
              ae = { preValue: T.value, triggerValue: J },
              ke = !0;
            (e.treeCheckStrictly || (W === "selection" && !se)) && (ke = !1),
              v2(ae, J, _, w.value, ke, s.value),
              l.value ? (ae.checked = se) : (ae.selected = se);
            var Ce = c.value
              ? te
              : te.map(function (ge) {
                  return ge.value;
                });
            e.onChange(
              u.value ? Ce : Ce[0],
              c.value
                ? null
                : te.map(function (ge) {
                    return ge.label;
                  }),
              ae
            );
          }
        },
        me = function (_, F) {
          var W = F.selected,
            ie = F.source,
            ce,
            re,
            ee,
            J = mt(y.value),
            se = mt(x.value),
            Me = J[_],
            Ie = Me == null ? void 0 : Me.node,
            te =
              (ce = Ie == null ? void 0 : Ie[s.value.value]) !== null &&
              ce !== void 0
                ? ce
                : _;
          if (!u.value) xe([te], { selected: !0, triggerValue: te }, "option");
          else {
            var ae = W
              ? [].concat(Re(I.value), [te])
              : z.value.filter(function (Ge) {
                  return Ge !== te;
                });
            if (i.value) {
              var ke = h(ae),
                Ce = ke.missingRawValues,
                ge = ke.existRawValues,
                Ne = ge.map(function (Ge) {
                  return se.get(Ge).key;
                }),
                Ke;
              if (W) {
                var Je = En(Ne, !0, J, D.value, G.value);
                Ke = Je.checkedKeys;
              } else {
                var $e = En(
                  Ne,
                  { checked: !1, halfCheckedKeys: N.value },
                  J,
                  D.value,
                  G.value
                );
                Ke = $e.checkedKeys;
              }
              ae = [].concat(
                Re(Ce),
                Re(
                  Ke.map(function (Ge) {
                    return J[Ge].node[s.value.value];
                  })
                )
              );
            }
            xe(ae, { selected: W, triggerValue: te }, ie || "option");
          }
          W || !u.value
            ? (re = e.onSelect) === null ||
              re === void 0 ||
              re.call(e, te, _a(Ie))
            : (ee = e.onDeselect) === null ||
              ee === void 0 ||
              ee.call(e, te, _a(Ie));
        },
        je = function (_) {
          if (e.onDropdownVisibleChange) {
            var F = {};
            Object.defineProperty(F, "documentClickClose", {
              get: function () {
                return !1;
              }
            }),
              e.onDropdownVisibleChange(_, F);
          }
        },
        Z = function (_, F) {
          var W = _.map(function (ie) {
            return ie.value;
          });
          if (F.type === "clear") {
            xe(W, {}, "selection");
            return;
          }
          F.values.length &&
            me(F.values[0].value, { selected: !1, source: "selection" });
        },
        $ = Da(e),
        ve = $.treeNodeFilterProp,
        Te = $.loadData,
        Fe = $.treeLoadedKeys,
        De = $.onTreeLoad,
        Ee = $.treeDefaultExpandAll,
        Ae = $.treeExpandedKeys,
        ze = $.treeDefaultExpandedKeys,
        Ye = $.onTreeExpand,
        pe = $.virtual,
        He = $.listHeight,
        Ve = $.listItemHeight,
        nt = $.treeLine,
        _t = $.treeIcon,
        ut = $.showTreeIcon,
        H = $.switcherIcon,
        Q = $.treeMotion,
        ye = $.customSlots;
      Yw(
        Ca({
          checkable: l,
          loadData: Te,
          treeLoadedKeys: Fe,
          onTreeLoad: De,
          checkedKeys: z,
          halfCheckedKeys: N,
          treeDefaultExpandAll: Ee,
          treeExpandedKeys: Ae,
          treeDefaultExpandedKeys: ze,
          onTreeExpand: Ye,
          treeIcon: _t,
          treeMotion: Q,
          showTreeIcon: ut,
          switcherIcon: H,
          treeLine: nt,
          treeNodeFilterProp: ve,
          keyEntities: y,
          customSlots: ye
        })
      ),
        a2(
          Ca({
            virtual: pe,
            listHeight: He,
            listItemHeight: Ve,
            treeData: g,
            fieldNames: s,
            onSelect: me
          })
        );
      var _e = L();
      return (
        r({
          focus: function () {
            var _;
            (_ = _e.value) === null || _ === void 0 || _.focus();
          },
          blur: function () {
            var _;
            (_ = _e.value) === null || _ === void 0 || _.blur();
          },
          scrollTo: function (_) {
            var F;
            (F = _e.value) === null || F === void 0 || F.scrollTo(_);
          }
        }),
        function () {
          var _,
            F = zt(e, [
              "id",
              "prefixCls",
              "value",
              "defaultValue",
              "onChange",
              "onSelect",
              "onDeselect",
              "searchValue",
              "inputValue",
              "onSearch",
              "autoClearSearchValue",
              "filterTreeNode",
              "treeNodeFilterProp",
              "showCheckedStrategy",
              "treeNodeLabelProp",
              "multiple",
              "treeCheckable",
              "treeCheckStrictly",
              "labelInValue",
              "fieldNames",
              "treeDataSimpleMode",
              "treeData",
              "children",
              "loadData",
              "treeLoadedKeys",
              "onTreeLoad",
              "treeDefaultExpandAll",
              "treeExpandedKeys",
              "treeDefaultExpandedKeys",
              "onTreeExpand",
              "virtual",
              "listHeight",
              "listItemHeight",
              "onDropdownVisibleChange",
              "treeLine",
              "treeIcon",
              "showTreeIcon",
              "switcherIcon",
              "treeMotion"
            ]);
          return m(
            dC,
            X(
              X(X({ ref: _e }, n), F),
              {},
              {
                id: a,
                prefixCls: e.prefixCls,
                mode: u.value ? "multiple" : void 0,
                displayValues: Pe.value,
                onDisplayValuesChange: Z,
                searchValue: v.value,
                onSearch: b,
                OptionList: u2,
                emptyOptions: !w.value.length,
                onDropdownVisibleChange: je,
                tagRender: e.tagRender || o.tagRender,
                dropdownMatchSelectWidth:
                  (_ = e.dropdownMatchSelectWidth) !== null && _ !== void 0
                    ? _
                    : !0
              }
            ),
            o
          );
        }
      );
    }
  }),
  x2 = C2,
  Sc = function (e, t, n) {
    return n !== void 0 ? n : "".concat(e, "-").concat(t);
  };
function S2() {
  return k(
    k(
      {},
      zt(id(), [
        "showTreeIcon",
        "treeMotion",
        "inputIcon",
        "getInputElement",
        "treeLine",
        "customSlots"
      ])
    ),
    {
      suffixIcon: K.any,
      size: { type: String },
      bordered: { type: Boolean, default: void 0 },
      treeLine: { type: [Boolean, Object], default: void 0 },
      replaceFields: { type: Object },
      "onUpdate:value": { type: Function },
      "onUpdate:treeExpandedKeys": { type: Function },
      "onUpdate:searchValue": { type: Function }
    }
  );
}
var Go = de({
    name: "ATreeSelect",
    inheritAttrs: !1,
    props: en(S2(), {
      choiceTransitionName: "",
      listHeight: 256,
      treeIcon: !1,
      listItemHeight: 26,
      bordered: !0
    }),
    slots: [
      "title",
      "titleRender",
      "placeholder",
      "maxTagPlaceholder",
      "treeIcon",
      "switcherIcon",
      "notFoundContent"
    ],
    setup: function (e, t) {
      var n = t.attrs,
        r = t.slots,
        o = t.expose,
        a = t.emit;
      e.treeData === void 0 && r.default,
        Xe(function () {
          Lt(
            e.multiple !== !1 || !e.treeCheckable,
            "TreeSelect",
            "`multiple` will always be `true` when `treeCheckable` is true"
          ),
            Lt(
              e.replaceFields === void 0,
              "TreeSelect",
              "`replaceFields` is deprecated, please use fieldNames instead"
            );
        });
      var i = Pf(),
        l = Ct("select", e),
        c = l.prefixCls,
        u = l.renderEmpty,
        s = l.direction,
        d = l.virtual,
        f = l.dropdownMatchSelectWidth,
        v = l.size,
        p = l.getPopupContainer,
        b = l.getPrefixCls,
        w = E(function () {
          return b();
        }),
        C = E(function () {
          return Sc(w.value, "slide-up", e.transitionName);
        }),
        y = E(function () {
          return Sc(w.value, "", e.choiceTransitionName);
        }),
        x = E(function () {
          return b("select-tree", e.prefixCls);
        }),
        h = E(function () {
          return b("tree-select", e.prefixCls);
        }),
        g = E(function () {
          return we(
            e.dropdownClassName,
            "".concat(h.value, "-dropdown"),
            U({}, "".concat(h.value, "-dropdown-rtl"), s.value === "rtl")
          );
        }),
        S = E(function () {
          return !!(e.treeCheckable || e.multiple);
        }),
        P = L();
      o({
        focus: function () {
          var B, j;
          (j = (B = P.value).focus) === null || j === void 0 || j.call(B);
        },
        blur: function () {
          var B, j;
          (j = (B = P.value).blur) === null || j === void 0 || j.call(B);
        }
      });
      var A = function () {
          for (var B = arguments.length, j = new Array(B), T = 0; T < B; T++)
            j[T] = arguments[T];
          a("update:value", j[0]),
            a.apply(void 0, ["change"].concat(j)),
            i.onFieldChange();
        },
        R = function (B) {
          a("update:treeExpandedKeys", B), a("treeExpand", B);
        },
        M = function (B) {
          a("update:searchValue", B), a("search", B);
        },
        q = function (B) {
          a("blur", B), i.onFieldBlur();
        };
      return function () {
        var B,
          j,
          T,
          O = e.notFoundContent,
          I =
            O === void 0
              ? (j = r.notFoundContent) === null || j === void 0
                ? void 0
                : j.call(r)
              : O,
          V = e.prefixCls,
          D = e.bordered,
          G = e.listHeight,
          oe = e.listItemHeight,
          ue = e.multiple,
          z = e.treeIcon,
          N = e.treeLine,
          Y = e.switcherIcon,
          ne =
            Y === void 0
              ? (T = r.switcherIcon) === null || T === void 0
                ? void 0
                : T.call(r)
              : Y,
          le = e.fieldNames,
          Pe = le === void 0 ? e.replaceFields : le,
          xe = e.id,
          me = xe === void 0 ? i.id.value : xe,
          je = FC(k(k({}, e), { multiple: S.value, prefixCls: c.value }), r),
          Z = je.suffixIcon,
          $ = je.removeIcon,
          ve = je.clearIcon,
          Te;
        I !== void 0 ? (Te = I) : (Te = u.value("Select"));
        var Fe = zt(e, [
            "suffixIcon",
            "itemIcon",
            "removeIcon",
            "clearIcon",
            "switcherIcon",
            "bordered",
            "onUpdate:value",
            "onUpdate:treeExpandedKeys",
            "onUpdate:searchValue"
          ]),
          De = we(
            !V && h.value,
            ((B = {}),
            U(B, "".concat(c.value, "-lg"), v.value === "large"),
            U(B, "".concat(c.value, "-sm"), v.value === "small"),
            U(B, "".concat(c.value, "-rtl"), s.value === "rtl"),
            U(B, "".concat(c.value, "-borderless"), !D),
            B),
            n.class
          ),
          Ee = {};
        return (
          e.treeData === void 0 && r.default && (Ee.children = It(r.default())),
          m(
            x2,
            X(
              X(
                X(X({}, n), Fe),
                {},
                {
                  virtual: d.value,
                  dropdownMatchSelectWidth: f.value,
                  id: me,
                  fieldNames: Pe,
                  ref: P,
                  prefixCls: c.value,
                  class: De,
                  listHeight: G,
                  listItemHeight: oe,
                  treeLine: !!N,
                  inputIcon: Z,
                  multiple: ue,
                  removeIcon: $,
                  clearIcon: ve,
                  switcherIcon: function (Ae) {
                    return t2(x.value, ne, N, Ae);
                  },
                  showTreeIcon: z,
                  notFoundContent: Te,
                  getPopupContainer: p.value,
                  treeMotion: null,
                  dropdownClassName: g.value,
                  choiceTransitionName: y.value,
                  onChange: A,
                  onBlur: q,
                  onSearch: M,
                  onTreeExpand: R
                },
                Ee
              ),
              {},
              {
                transitionName: C.value,
                customSlots: k(k({}, r), {
                  treeCheckable: function () {
                    return m(
                      "span",
                      { class: "".concat(c.value, "-tree-checkbox-inner") },
                      null
                    );
                  }
                }),
                maxTagPlaceholder: e.maxTagPlaceholder || r.maxTagPlaceholder
              }
            ),
            k(k({}, r), {
              treeCheckable: function () {
                return m(
                  "span",
                  { class: "".concat(c.value, "-tree-checkbox-inner") },
                  null
                );
              }
            })
          )
        );
      };
    }
  }),
  Oc = _i,
  E2 = k(Go, {
    TreeNode: _i,
    SHOW_ALL: c2,
    SHOW_PARENT: ad,
    SHOW_CHILD: Ii,
    install: function (e) {
      return e.component(Go.name, Go), e.component(Oc.displayName, Oc), e;
    }
  });
Jt();
bp();
xp();
Dc();
Jt();
Sp();
kp();
Jt();
Pp();
Jt();
Tp();
Jt();
Ep();
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ export {
  T2 as A,
  Nm as E,
  Tg as K,
  k2 as a,
  Ea as c,
  P2 as d,
  E2 as h
};
