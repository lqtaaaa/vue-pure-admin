import {
  d as J,
  r as Dt,
  o as Bt,
  e as de,
  i as jt,
  $ as Lt,
  a0 as Nt,
  h as H,
  f as qe,
  k as x,
  j as S,
  g as Ct,
  L as Gt,
  Y as Ft,
  b as zt,
  l as se
} from "./index.69183727.js";
var ye = {},
  Y = {},
  l = {};
Object.defineProperty(l, "__esModule", { value: !0 });
function Ht(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
var Xt = function t(e, r) {
  Ht(this, t), (this.data = e), (this.text = r.text || e), (this.options = r);
};
l.default = Xt;
Object.defineProperty(Y, "__esModule", { value: !0 });
Y.CODE39 = void 0;
var Ut = (function () {
    function t(e, r) {
      for (var n = 0; n < r.length; n++) {
        var a = r[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    return function (e, r, n) {
      return r && t(e.prototype, r), n && t(e, n), e;
    };
  })(),
  Vt = l,
  qt = Jt(Vt);
function Jt(t) {
  return t && t.__esModule ? t : { default: t };
}
function Yt(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Qt(t, e) {
  if (!t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Wt(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
}
var Zt = (function (t) {
    Wt(e, t);
    function e(r, n) {
      return (
        Yt(this, e),
        (r = r.toUpperCase()),
        n.mod43 && (r += tn(nn(r))),
        Qt(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n))
      );
    }
    return (
      Ut(e, [
        {
          key: "encode",
          value: function () {
            for (var n = ie("*"), a = 0; a < this.data.length; a++)
              n += ie(this.data[a]) + "0";
            return (n += ie("*")), { data: n, text: this.text };
          }
        },
        {
          key: "valid",
          value: function () {
            return this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/) !== -1;
          }
        }
      ]),
      e
    );
  })(qt.default),
  ft = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "-",
    ".",
    " ",
    "$",
    "/",
    "+",
    "%",
    "*"
  ],
  Kt = [
    20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645, 29975,
    23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301, 30023, 23879,
    30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385, 29015, 18263, 29141,
    17879, 29045, 18293, 17783, 29021, 18269, 17477, 17489, 17681, 20753, 35770
  ];
function ie(t) {
  return en(ct(t));
}
function en(t) {
  return Kt[t].toString(2);
}
function tn(t) {
  return ft[t];
}
function ct(t) {
  return ft.indexOf(t);
}
function nn(t) {
  for (var e = 0, r = 0; r < t.length; r++) e += ct(t[r]);
  return (e = e % 43), e;
}
Y.CODE39 = Zt;
var y = {},
  pe = {},
  M = {},
  f = {};
Object.defineProperty(f, "__esModule", { value: !0 });
var B;
function oe(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (t[e] = r),
    t
  );
}
var lt = (f.SET_A = 0),
  dt = (f.SET_B = 1),
  ht = (f.SET_C = 2);
f.SHIFT = 98;
var rn = (f.START_A = 103),
  an = (f.START_B = 104),
  on = (f.START_C = 105);
f.MODULO = 103;
f.STOP = 106;
f.FNC1 = 207;
f.SET_BY_CODE = ((B = {}), oe(B, rn, lt), oe(B, an, dt), oe(B, on, ht), B);
f.SWAP = { 101: lt, 100: dt, 99: ht };
f.A_START_CHAR = String.fromCharCode(208);
f.B_START_CHAR = String.fromCharCode(209);
f.C_START_CHAR = String.fromCharCode(210);
f.A_CHARS = "[\0-_\xC8-\xCF]";
f.B_CHARS = "[ -\x7F\xC8-\xCF]";
f.C_CHARS = "(\xCF*[0-9]{2}\xCF*)";
f.BARS = [
  11011001100, 11001101100, 11001100110, 10010011e3, 10010001100, 10001001100,
  10011001e3, 10011000100, 10001100100, 11001001e3, 11001000100, 11000100100,
  10110011100, 10011011100, 10011001110, 10111001100, 10011101100, 10011100110,
  11001110010, 11001011100, 11001001110, 11011100100, 11001110100, 11101101110,
  11101001100, 11100101100, 11100100110, 11101100100, 11100110100, 11100110010,
  11011011e3, 11011000110, 11000110110, 10100011e3, 10001011e3, 10001000110,
  10110001e3, 10001101e3, 10001100010, 11010001e3, 11000101e3, 11000100010,
  10110111e3, 10110001110, 10001101110, 10111011e3, 10111000110, 10001110110,
  11101110110, 11010001110, 11000101110, 11011101e3, 11011100010, 11011101110,
  11101011e3, 11101000110, 11100010110, 11101101e3, 11101100010, 11100011010,
  11101111010, 11001000010, 11110001010, 1010011e4, 10100001100, 1001011e4,
  10010000110, 10000101100, 10000100110, 1011001e4, 10110000100, 1001101e4,
  10011000010, 10000110100, 10000110010, 11000010010, 1100101e4, 11110111010,
  11000010100, 10001111010, 10100111100, 10010111100, 10010011110, 10111100100,
  10011110100, 10011110010, 11110100100, 11110010100, 11110010010, 11011011110,
  11011110110, 11110110110, 10101111e3, 10100011110, 10001011110, 10111101e3,
  10111100010, 11110101e3, 11110100010, 10111011110, 10111101110, 11101011110,
  11110101110, 11010000100, 1101001e4, 11010011100, 1100011101011
];
Object.defineProperty(M, "__esModule", { value: !0 });
var un = (function () {
    function t(e, r) {
      for (var n = 0; n < r.length; n++) {
        var a = r[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    return function (e, r, n) {
      return r && t(e.prototype, r), n && t(e, n), e;
    };
  })(),
  fn = l,
  cn = ln(fn),
  h = f;
function ln(t) {
  return t && t.__esModule ? t : { default: t };
}
function dn(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function hn(t, e) {
  if (!t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function _n(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
}
var vn = (function (t) {
  _n(e, t);
  function e(r, n) {
    dn(this, e);
    var a = hn(
      this,
      (e.__proto__ || Object.getPrototypeOf(e)).call(this, r.substring(1), n)
    );
    return (
      (a.bytes = r.split("").map(function (i) {
        return i.charCodeAt(0);
      })),
      a
    );
  }
  return (
    un(
      e,
      [
        {
          key: "valid",
          value: function () {
            return /^[\x00-\x7F\xC8-\xD3]+$/.test(this.data);
          }
        },
        {
          key: "encode",
          value: function () {
            var n = this.bytes,
              a = n.shift() - 105,
              i = h.SET_BY_CODE[a];
            if (i === void 0)
              throw new RangeError(
                "The encoding does not start with a start character."
              );
            this.shouldEncodeAsEan128() === !0 && n.unshift(h.FNC1);
            var o = e.next(n, 1, i);
            return {
              text:
                this.text === this.data
                  ? this.text.replace(/[^\x20-\x7E]/g, "")
                  : this.text,
              data:
                e.getBar(a) +
                o.result +
                e.getBar((o.checksum + a) % h.MODULO) +
                e.getBar(h.STOP)
            };
          }
        },
        {
          key: "shouldEncodeAsEan128",
          value: function () {
            var n = this.options.ean128 || !1;
            return typeof n == "string" && (n = n.toLowerCase() === "true"), n;
          }
        }
      ],
      [
        {
          key: "getBar",
          value: function (n) {
            return h.BARS[n] ? h.BARS[n].toString() : "";
          }
        },
        {
          key: "correctIndex",
          value: function (n, a) {
            if (a === h.SET_A) {
              var i = n.shift();
              return i < 32 ? i + 64 : i - 32;
            } else
              return a === h.SET_B
                ? n.shift() - 32
                : (n.shift() - 48) * 10 + n.shift() - 48;
          }
        },
        {
          key: "next",
          value: function (n, a, i) {
            if (!n.length) return { result: "", checksum: 0 };
            var o = void 0,
              u = void 0;
            if (n[0] >= 200) {
              u = n.shift() - 105;
              var d = h.SWAP[u];
              d !== void 0
                ? (o = e.next(n, a + 1, d))
                : ((i === h.SET_A || i === h.SET_B) &&
                    u === h.SHIFT &&
                    (n[0] =
                      i === h.SET_A
                        ? n[0] > 95
                          ? n[0] - 96
                          : n[0]
                        : n[0] < 32
                        ? n[0] + 96
                        : n[0]),
                  (o = e.next(n, a + 1, i)));
            } else (u = e.correctIndex(n, i)), (o = e.next(n, a + 1, i));
            var g = e.getBar(u),
              It = u * a;
            return { result: g + o.result, checksum: It + o.checksum };
          }
        }
      ]
    ),
    e
  );
})(cn.default);
M.default = vn;
var ge = {};
Object.defineProperty(ge, "__esModule", { value: !0 });
var O = f,
  _t = function (e) {
    return e.match(new RegExp("^" + O.A_CHARS + "*"))[0].length;
  },
  vt = function (e) {
    return e.match(new RegExp("^" + O.B_CHARS + "*"))[0].length;
  },
  st = function (e) {
    return e.match(new RegExp("^" + O.C_CHARS + "*"))[0];
  };
function Oe(t, e) {
  var r = e ? O.A_CHARS : O.B_CHARS,
    n = t.match(new RegExp("^(" + r + "+?)(([0-9]{2}){2,})([^0-9]|$)"));
  if (n) return n[1] + String.fromCharCode(204) + yt(t.substring(n[1].length));
  var a = t.match(new RegExp("^" + r + "+"))[0];
  return a.length === t.length
    ? t
    : a + String.fromCharCode(e ? 205 : 206) + Oe(t.substring(a.length), !e);
}
function yt(t) {
  var e = st(t),
    r = e.length;
  if (r === t.length) return t;
  t = t.substring(r);
  var n = _t(t) >= vt(t);
  return e + String.fromCharCode(n ? 206 : 205) + Oe(t, n);
}
ge.default = function (t) {
  var e = void 0,
    r = st(t).length;
  if (r >= 2) e = O.C_START_CHAR + yt(t);
  else {
    var n = _t(t) > vt(t);
    e = (n ? O.A_START_CHAR : O.B_START_CHAR) + Oe(t, n);
  }
  return e.replace(/[\xCD\xCE]([^])[\xCD\xCE]/, function (a, i) {
    return String.fromCharCode(203) + i;
  });
};
Object.defineProperty(pe, "__esModule", { value: !0 });
var sn = M,
  yn = pt(sn),
  pn = ge,
  gn = pt(pn);
function pt(t) {
  return t && t.__esModule ? t : { default: t };
}
function On(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ue(t, e) {
  if (!t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function En(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
}
var bn = (function (t) {
  En(e, t);
  function e(r, n) {
    if ((On(this, e), /^[\x00-\x7F\xC8-\xD3]+$/.test(r)))
      var a = ue(
        this,
        (e.__proto__ || Object.getPrototypeOf(e)).call(
          this,
          (0, gn.default)(r),
          n
        )
      );
    else
      var a = ue(
        this,
        (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n)
      );
    return ue(a);
  }
  return e;
})(yn.default);
pe.default = bn;
var Ee = {};
Object.defineProperty(Ee, "__esModule", { value: !0 });
var mn = (function () {
    function t(e, r) {
      for (var n = 0; n < r.length; n++) {
        var a = r[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    return function (e, r, n) {
      return r && t(e.prototype, r), n && t(e, n), e;
    };
  })(),
  wn = M,
  $n = xn(wn),
  Je = f;
function xn(t) {
  return t && t.__esModule ? t : { default: t };
}
function Sn(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Rn(t, e) {
  if (!t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function An(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
}
var Pn = (function (t) {
  An(e, t);
  function e(r, n) {
    return (
      Sn(this, e),
      Rn(
        this,
        (e.__proto__ || Object.getPrototypeOf(e)).call(
          this,
          Je.A_START_CHAR + r,
          n
        )
      )
    );
  }
  return (
    mn(e, [
      {
        key: "valid",
        value: function () {
          return new RegExp("^" + Je.A_CHARS + "+$").test(this.data);
        }
      }
    ]),
    e
  );
})($n.default);
Ee.default = Pn;
var be = {};
Object.defineProperty(be, "__esModule", { value: !0 });
var Tn = (function () {
    function t(e, r) {
      for (var n = 0; n < r.length; n++) {
        var a = r[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    return function (e, r, n) {
      return r && t(e.prototype, r), n && t(e, n), e;
    };
  })(),
  Mn = M,
  kn = In(Mn),
  Ye = f;
function In(t) {
  return t && t.__esModule ? t : { default: t };
}
function Dn(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Bn(t, e) {
  if (!t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function jn(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
}
var Ln = (function (t) {
  jn(e, t);
  function e(r, n) {
    return (
      Dn(this, e),
      Bn(
        this,
        (e.__proto__ || Object.getPrototypeOf(e)).call(
          this,
          Ye.B_START_CHAR + r,
          n
        )
      )
    );
  }
  return (
    Tn(e, [
      {
        key: "valid",
        value: function () {
          return new RegExp("^" + Ye.B_CHARS + "+$").test(this.data);
        }
      }
    ]),
    e
  );
})(kn.default);
be.default = Ln;
var me = {};
Object.defineProperty(me, "__esModule", { value: !0 });
var Nn = (function () {
    function t(e, r) {
      for (var n = 0; n < r.length; n++) {
        var a = r[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    return function (e, r, n) {
      return r && t(e.prototype, r), n && t(e, n), e;
    };
  })(),
  Cn = M,
  Gn = Fn(Cn),
  Qe = f;
function Fn(t) {
  return t && t.__esModule ? t : { default: t };
}
function zn(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Hn(t, e) {
  if (!t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Xn(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
}
var Un = (function (t) {
  Xn(e, t);
  function e(r, n) {
    return (
      zn(this, e),
      Hn(
        this,
        (e.__proto__ || Object.getPrototypeOf(e)).call(
          this,
          Qe.C_START_CHAR + r,
          n
        )
      )
    );
  }
  return (
    Nn(e, [
      {
        key: "valid",
        value: function () {
          return new RegExp("^" + Qe.C_CHARS + "+$").test(this.data);
        }
      }
    ]),
    e
  );
})(Gn.default);
me.default = Un;
Object.defineProperty(y, "__esModule", { value: !0 });
y.CODE128C = y.CODE128B = y.CODE128A = y.CODE128 = void 0;
var Vn = pe,
  qn = Q(Vn),
  Jn = Ee,
  Yn = Q(Jn),
  Qn = be,
  Wn = Q(Qn),
  Zn = me,
  Kn = Q(Zn);
function Q(t) {
  return t && t.__esModule ? t : { default: t };
}
y.CODE128 = qn.default;
y.CODE128A = Yn.default;
y.CODE128B = Wn.default;
y.CODE128C = Kn.default;
var c = {},
  we = {},
  s = {};
Object.defineProperty(s, "__esModule", { value: !0 });
s.SIDE_BIN = "101";
s.MIDDLE_BIN = "01010";
s.BINARIES = {
  L: [
    "0001101",
    "0011001",
    "0010011",
    "0111101",
    "0100011",
    "0110001",
    "0101111",
    "0111011",
    "0110111",
    "0001011"
  ],
  G: [
    "0100111",
    "0110011",
    "0011011",
    "0100001",
    "0011101",
    "0111001",
    "0000101",
    "0010001",
    "0001001",
    "0010111"
  ],
  R: [
    "1110010",
    "1100110",
    "1101100",
    "1000010",
    "1011100",
    "1001110",
    "1010000",
    "1000100",
    "1001000",
    "1110100"
  ],
  O: [
    "0001101",
    "0011001",
    "0010011",
    "0111101",
    "0100011",
    "0110001",
    "0101111",
    "0111011",
    "0110111",
    "0001011"
  ],
  E: [
    "0100111",
    "0110011",
    "0011011",
    "0100001",
    "0011101",
    "0111001",
    "0000101",
    "0010001",
    "0001001",
    "0010111"
  ]
};
s.EAN2_STRUCTURE = ["LL", "LG", "GL", "GG"];
s.EAN5_STRUCTURE = [
  "GGLLL",
  "GLGLL",
  "GLLGL",
  "GLLLG",
  "LGGLL",
  "LLGGL",
  "LLLGG",
  "LGLGL",
  "LGLLG",
  "LLGLG"
];
s.EAN13_STRUCTURE = [
  "LLLLLL",
  "LLGLGG",
  "LLGGLG",
  "LLGGGL",
  "LGLLGG",
  "LGGLLG",
  "LGGGLL",
  "LGLGLG",
  "LGLGGL",
  "LGGLGL"
];
var W = {},
  m = {};
Object.defineProperty(m, "__esModule", { value: !0 });
var er = s,
  tr = function (e, r, n) {
    var a = e
      .split("")
      .map(function (o, u) {
        return er.BINARIES[r[u]];
      })
      .map(function (o, u) {
        return o ? o[e[u]] : "";
      });
    if (n) {
      var i = e.length - 1;
      a = a.map(function (o, u) {
        return u < i ? o + n : o;
      });
    }
    return a.join("");
  };
m.default = tr;
Object.defineProperty(W, "__esModule", { value: !0 });
var nr = (function () {
    function t(e, r) {
      for (var n = 0; n < r.length; n++) {
        var a = r[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    return function (e, r, n) {
      return r && t(e.prototype, r), n && t(e, n), e;
    };
  })(),
  R = s,
  rr = m,
  We = gt(rr),
  ar = l,
  ir = gt(ar);
function gt(t) {
  return t && t.__esModule ? t : { default: t };
}
function or(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ur(t, e) {
  if (!t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function fr(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
}
var cr = (function (t) {
  fr(e, t);
  function e(r, n) {
    or(this, e);
    var a = ur(
      this,
      (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n)
    );
    return (
      (a.fontSize =
        !n.flat && n.fontSize > n.width * 10 ? n.width * 10 : n.fontSize),
      (a.guardHeight = n.height + a.fontSize / 2 + n.textMargin),
      a
    );
  }
  return (
    nr(e, [
      {
        key: "encode",
        value: function () {
          return this.options.flat ? this.encodeFlat() : this.encodeGuarded();
        }
      },
      {
        key: "leftText",
        value: function (n, a) {
          return this.text.substr(n, a);
        }
      },
      {
        key: "leftEncode",
        value: function (n, a) {
          return (0, We.default)(n, a);
        }
      },
      {
        key: "rightText",
        value: function (n, a) {
          return this.text.substr(n, a);
        }
      },
      {
        key: "rightEncode",
        value: function (n, a) {
          return (0, We.default)(n, a);
        }
      },
      {
        key: "encodeGuarded",
        value: function () {
          var n = { fontSize: this.fontSize },
            a = { height: this.guardHeight };
          return [
            { data: R.SIDE_BIN, options: a },
            { data: this.leftEncode(), text: this.leftText(), options: n },
            { data: R.MIDDLE_BIN, options: a },
            { data: this.rightEncode(), text: this.rightText(), options: n },
            { data: R.SIDE_BIN, options: a }
          ];
        }
      },
      {
        key: "encodeFlat",
        value: function () {
          var n = [
            R.SIDE_BIN,
            this.leftEncode(),
            R.MIDDLE_BIN,
            this.rightEncode(),
            R.SIDE_BIN
          ];
          return { data: n.join(""), text: this.text };
        }
      }
    ]),
    e
  );
})(ir.default);
W.default = cr;
Object.defineProperty(we, "__esModule", { value: !0 });
var lr = (function () {
    function t(e, r) {
      for (var n = 0; n < r.length; n++) {
        var a = r[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    return function (e, r, n) {
      return r && t(e.prototype, r), n && t(e, n), e;
    };
  })(),
  j = function t(e, r, n) {
    e === null && (e = Function.prototype);
    var a = Object.getOwnPropertyDescriptor(e, r);
    if (a === void 0) {
      var i = Object.getPrototypeOf(e);
      return i === null ? void 0 : t(i, r, n);
    } else {
      if ("value" in a) return a.value;
      var o = a.get;
      return o === void 0 ? void 0 : o.call(n);
    }
  },
  dr = s,
  hr = W,
  _r = vr(hr);
function vr(t) {
  return t && t.__esModule ? t : { default: t };
}
function sr(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function yr(t, e) {
  if (!t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function pr(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
}
var Ze = function (e) {
    var r = e
      .substr(0, 12)
      .split("")
      .map(function (n) {
        return +n;
      })
      .reduce(function (n, a, i) {
        return i % 2 ? n + a * 3 : n + a;
      }, 0);
    return (10 - (r % 10)) % 10;
  },
  gr = (function (t) {
    pr(e, t);
    function e(r, n) {
      sr(this, e), r.search(/^[0-9]{12}$/) !== -1 && (r += Ze(r));
      var a = yr(
        this,
        (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n)
      );
      return (a.lastChar = n.lastChar), a;
    }
    return (
      lr(e, [
        {
          key: "valid",
          value: function () {
            return (
              this.data.search(/^[0-9]{13}$/) !== -1 &&
              +this.data[12] === Ze(this.data)
            );
          }
        },
        {
          key: "leftText",
          value: function () {
            return j(
              e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
              "leftText",
              this
            ).call(this, 1, 6);
          }
        },
        {
          key: "leftEncode",
          value: function () {
            var n = this.data.substr(1, 6),
              a = dr.EAN13_STRUCTURE[this.data[0]];
            return j(
              e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
              "leftEncode",
              this
            ).call(this, n, a);
          }
        },
        {
          key: "rightText",
          value: function () {
            return j(
              e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
              "rightText",
              this
            ).call(this, 7, 6);
          }
        },
        {
          key: "rightEncode",
          value: function () {
            var n = this.data.substr(7, 6);
            return j(
              e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
              "rightEncode",
              this
            ).call(this, n, "RRRRRR");
          }
        },
        {
          key: "encodeGuarded",
          value: function () {
            var n = j(
              e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
              "encodeGuarded",
              this
            ).call(this);
            return (
              this.options.displayValue &&
                (n.unshift({
                  data: "000000000000",
                  text: this.text.substr(0, 1),
                  options: { textAlign: "left", fontSize: this.fontSize }
                }),
                this.options.lastChar &&
                  (n.push({ data: "00" }),
                  n.push({
                    data: "00000",
                    text: this.options.lastChar,
                    options: { fontSize: this.fontSize }
                  }))),
              n
            );
          }
        }
      ]),
      e
    );
  })(_r.default);
we.default = gr;
var $e = {};
Object.defineProperty($e, "__esModule", { value: !0 });
var Or = (function () {
    function t(e, r) {
      for (var n = 0; n < r.length; n++) {
        var a = r[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    return function (e, r, n) {
      return r && t(e.prototype, r), n && t(e, n), e;
    };
  })(),
  X = function t(e, r, n) {
    e === null && (e = Function.prototype);
    var a = Object.getOwnPropertyDescriptor(e, r);
    if (a === void 0) {
      var i = Object.getPrototypeOf(e);
      return i === null ? void 0 : t(i, r, n);
    } else {
      if ("value" in a) return a.value;
      var o = a.get;
      return o === void 0 ? void 0 : o.call(n);
    }
  },
  Er = W,
  br = mr(Er);
function mr(t) {
  return t && t.__esModule ? t : { default: t };
}
function wr(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function $r(t, e) {
  if (!t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function xr(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
}
var Ke = function (e) {
    var r = e
      .substr(0, 7)
      .split("")
      .map(function (n) {
        return +n;
      })
      .reduce(function (n, a, i) {
        return i % 2 ? n + a : n + a * 3;
      }, 0);
    return (10 - (r % 10)) % 10;
  },
  Sr = (function (t) {
    xr(e, t);
    function e(r, n) {
      return (
        wr(this, e),
        r.search(/^[0-9]{7}$/) !== -1 && (r += Ke(r)),
        $r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n))
      );
    }
    return (
      Or(e, [
        {
          key: "valid",
          value: function () {
            return (
              this.data.search(/^[0-9]{8}$/) !== -1 &&
              +this.data[7] === Ke(this.data)
            );
          }
        },
        {
          key: "leftText",
          value: function () {
            return X(
              e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
              "leftText",
              this
            ).call(this, 0, 4);
          }
        },
        {
          key: "leftEncode",
          value: function () {
            var n = this.data.substr(0, 4);
            return X(
              e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
              "leftEncode",
              this
            ).call(this, n, "LLLL");
          }
        },
        {
          key: "rightText",
          value: function () {
            return X(
              e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
              "rightText",
              this
            ).call(this, 4, 4);
          }
        },
        {
          key: "rightEncode",
          value: function () {
            var n = this.data.substr(4, 4);
            return X(
              e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
              "rightEncode",
              this
            ).call(this, n, "RRRR");
          }
        }
      ]),
      e
    );
  })(br.default);
$e.default = Sr;
var xe = {};
Object.defineProperty(xe, "__esModule", { value: !0 });
var Rr = (function () {
    function t(e, r) {
      for (var n = 0; n < r.length; n++) {
        var a = r[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    return function (e, r, n) {
      return r && t(e.prototype, r), n && t(e, n), e;
    };
  })(),
  Ar = s,
  Pr = m,
  Tr = Ot(Pr),
  Mr = l,
  kr = Ot(Mr);
function Ot(t) {
  return t && t.__esModule ? t : { default: t };
}
function Ir(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Dr(t, e) {
  if (!t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Br(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
}
var jr = function (e) {
    var r = e
      .split("")
      .map(function (n) {
        return +n;
      })
      .reduce(function (n, a, i) {
        return i % 2 ? n + a * 9 : n + a * 3;
      }, 0);
    return r % 10;
  },
  Lr = (function (t) {
    Br(e, t);
    function e(r, n) {
      return (
        Ir(this, e),
        Dr(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n))
      );
    }
    return (
      Rr(e, [
        {
          key: "valid",
          value: function () {
            return this.data.search(/^[0-9]{5}$/) !== -1;
          }
        },
        {
          key: "encode",
          value: function () {
            var n = Ar.EAN5_STRUCTURE[jr(this.data)];
            return {
              data: "1011" + (0, Tr.default)(this.data, n, "01"),
              text: this.text
            };
          }
        }
      ]),
      e
    );
  })(kr.default);
xe.default = Lr;
var Se = {};
Object.defineProperty(Se, "__esModule", { value: !0 });
var Nr = (function () {
    function t(e, r) {
      for (var n = 0; n < r.length; n++) {
        var a = r[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    return function (e, r, n) {
      return r && t(e.prototype, r), n && t(e, n), e;
    };
  })(),
  Cr = s,
  Gr = m,
  Fr = Et(Gr),
  zr = l,
  Hr = Et(zr);
function Et(t) {
  return t && t.__esModule ? t : { default: t };
}
function Xr(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ur(t, e) {
  if (!t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Vr(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
}
var qr = (function (t) {
  Vr(e, t);
  function e(r, n) {
    return (
      Xr(this, e),
      Ur(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n))
    );
  }
  return (
    Nr(e, [
      {
        key: "valid",
        value: function () {
          return this.data.search(/^[0-9]{2}$/) !== -1;
        }
      },
      {
        key: "encode",
        value: function () {
          var n = Cr.EAN2_STRUCTURE[parseInt(this.data) % 4];
          return {
            data: "1011" + (0, Fr.default)(this.data, n, "01"),
            text: this.text
          };
        }
      }
    ]),
    e
  );
})(Hr.default);
Se.default = qr;
var C = {};
Object.defineProperty(C, "__esModule", { value: !0 });
var Jr = (function () {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      (a.enumerable = a.enumerable || !1),
        (a.configurable = !0),
        "value" in a && (a.writable = !0),
        Object.defineProperty(e, a.key, a);
    }
  }
  return function (e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
})();
C.checksum = he;
var Yr = m,
  A = bt(Yr),
  Qr = l,
  Wr = bt(Qr);
function bt(t) {
  return t && t.__esModule ? t : { default: t };
}
function Zr(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Kr(t, e) {
  if (!t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function ea(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
}
var ta = (function (t) {
  ea(e, t);
  function e(r, n) {
    Zr(this, e), r.search(/^[0-9]{11}$/) !== -1 && (r += he(r));
    var a = Kr(
      this,
      (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n)
    );
    return (
      (a.displayValue = n.displayValue),
      n.fontSize > n.width * 10
        ? (a.fontSize = n.width * 10)
        : (a.fontSize = n.fontSize),
      (a.guardHeight = n.height + a.fontSize / 2 + n.textMargin),
      a
    );
  }
  return (
    Jr(e, [
      {
        key: "valid",
        value: function () {
          return (
            this.data.search(/^[0-9]{12}$/) !== -1 &&
            this.data[11] == he(this.data)
          );
        }
      },
      {
        key: "encode",
        value: function () {
          return this.options.flat
            ? this.flatEncoding()
            : this.guardedEncoding();
        }
      },
      {
        key: "flatEncoding",
        value: function () {
          var n = "";
          return (
            (n += "101"),
            (n += (0, A.default)(this.data.substr(0, 6), "LLLLLL")),
            (n += "01010"),
            (n += (0, A.default)(this.data.substr(6, 6), "RRRRRR")),
            (n += "101"),
            { data: n, text: this.text }
          );
        }
      },
      {
        key: "guardedEncoding",
        value: function () {
          var n = [];
          return (
            this.displayValue &&
              n.push({
                data: "00000000",
                text: this.text.substr(0, 1),
                options: { textAlign: "left", fontSize: this.fontSize }
              }),
            n.push({
              data: "101" + (0, A.default)(this.data[0], "L"),
              options: { height: this.guardHeight }
            }),
            n.push({
              data: (0, A.default)(this.data.substr(1, 5), "LLLLL"),
              text: this.text.substr(1, 5),
              options: { fontSize: this.fontSize }
            }),
            n.push({ data: "01010", options: { height: this.guardHeight } }),
            n.push({
              data: (0, A.default)(this.data.substr(6, 5), "RRRRR"),
              text: this.text.substr(6, 5),
              options: { fontSize: this.fontSize }
            }),
            n.push({
              data: (0, A.default)(this.data[11], "R") + "101",
              options: { height: this.guardHeight }
            }),
            this.displayValue &&
              n.push({
                data: "00000000",
                text: this.text.substr(11, 1),
                options: { textAlign: "right", fontSize: this.fontSize }
              }),
            n
          );
        }
      }
    ]),
    e
  );
})(Wr.default);
function he(t) {
  var e = 0,
    r;
  for (r = 1; r < 11; r += 2) e += parseInt(t[r]);
  for (r = 0; r < 11; r += 2) e += parseInt(t[r]) * 3;
  return (10 - (e % 10)) % 10;
}
C.default = ta;
var Re = {};
Object.defineProperty(Re, "__esModule", { value: !0 });
var na = (function () {
    function t(e, r) {
      for (var n = 0; n < r.length; n++) {
        var a = r[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    return function (e, r, n) {
      return r && t(e.prototype, r), n && t(e, n), e;
    };
  })(),
  ra = m,
  aa = mt(ra),
  ia = l,
  oa = mt(ia),
  ua = C;
function mt(t) {
  return t && t.__esModule ? t : { default: t };
}
function fa(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function fe(t, e) {
  if (!t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function ca(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
}
var la = [
    "XX00000XXX",
    "XX10000XXX",
    "XX20000XXX",
    "XXX00000XX",
    "XXXX00000X",
    "XXXXX00005",
    "XXXXX00006",
    "XXXXX00007",
    "XXXXX00008",
    "XXXXX00009"
  ],
  da = [
    ["EEEOOO", "OOOEEE"],
    ["EEOEOO", "OOEOEE"],
    ["EEOOEO", "OOEEOE"],
    ["EEOOOE", "OOEEEO"],
    ["EOEEOO", "OEOOEE"],
    ["EOOEEO", "OEEOOE"],
    ["EOOOEE", "OEEEOO"],
    ["EOEOEO", "OEOEOE"],
    ["EOEOOE", "OEOEEO"],
    ["EOOEOE", "OEEOEO"]
  ],
  ha = (function (t) {
    ca(e, t);
    function e(r, n) {
      fa(this, e);
      var a = fe(
        this,
        (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n)
      );
      if (((a.isValid = !1), r.search(/^[0-9]{6}$/) !== -1))
        (a.middleDigits = r),
          (a.upcA = et(r, "0")),
          (a.text = n.text || "" + a.upcA[0] + r + a.upcA[a.upcA.length - 1]),
          (a.isValid = !0);
      else if (r.search(/^[01][0-9]{7}$/) !== -1)
        if (
          ((a.middleDigits = r.substring(1, r.length - 1)),
          (a.upcA = et(a.middleDigits, r[0])),
          a.upcA[a.upcA.length - 1] === r[r.length - 1])
        )
          a.isValid = !0;
        else return fe(a);
      else return fe(a);
      return (
        (a.displayValue = n.displayValue),
        n.fontSize > n.width * 10
          ? (a.fontSize = n.width * 10)
          : (a.fontSize = n.fontSize),
        (a.guardHeight = n.height + a.fontSize / 2 + n.textMargin),
        a
      );
    }
    return (
      na(e, [
        {
          key: "valid",
          value: function () {
            return this.isValid;
          }
        },
        {
          key: "encode",
          value: function () {
            return this.options.flat
              ? this.flatEncoding()
              : this.guardedEncoding();
          }
        },
        {
          key: "flatEncoding",
          value: function () {
            var n = "";
            return (
              (n += "101"),
              (n += this.encodeMiddleDigits()),
              (n += "010101"),
              { data: n, text: this.text }
            );
          }
        },
        {
          key: "guardedEncoding",
          value: function () {
            var n = [];
            return (
              this.displayValue &&
                n.push({
                  data: "00000000",
                  text: this.text[0],
                  options: { textAlign: "left", fontSize: this.fontSize }
                }),
              n.push({ data: "101", options: { height: this.guardHeight } }),
              n.push({
                data: this.encodeMiddleDigits(),
                text: this.text.substring(1, 7),
                options: { fontSize: this.fontSize }
              }),
              n.push({ data: "010101", options: { height: this.guardHeight } }),
              this.displayValue &&
                n.push({
                  data: "00000000",
                  text: this.text[7],
                  options: { textAlign: "right", fontSize: this.fontSize }
                }),
              n
            );
          }
        },
        {
          key: "encodeMiddleDigits",
          value: function () {
            var n = this.upcA[0],
              a = this.upcA[this.upcA.length - 1],
              i = da[parseInt(a)][parseInt(n)];
            return (0, aa.default)(this.middleDigits, i);
          }
        }
      ]),
      e
    );
  })(oa.default);
function et(t, e) {
  for (
    var r = parseInt(t[t.length - 1]), n = la[r], a = "", i = 0, o = 0;
    o < n.length;
    o++
  ) {
    var u = n[o];
    u === "X" ? (a += t[i++]) : (a += u);
  }
  return (a = "" + e + a), "" + a + (0, ua.checksum)(a);
}
Re.default = ha;
Object.defineProperty(c, "__esModule", { value: !0 });
c.UPCE = c.UPC = c.EAN2 = c.EAN5 = c.EAN8 = c.EAN13 = void 0;
var _a = we,
  va = k(_a),
  sa = $e,
  ya = k(sa),
  pa = xe,
  ga = k(pa),
  Oa = Se,
  Ea = k(Oa),
  ba = C,
  ma = k(ba),
  wa = Re,
  $a = k(wa);
function k(t) {
  return t && t.__esModule ? t : { default: t };
}
c.EAN13 = va.default;
c.EAN8 = ya.default;
c.EAN5 = ga.default;
c.EAN2 = Ea.default;
c.UPC = ma.default;
c.UPCE = $a.default;
var T = {},
  Z = {},
  G = {};
Object.defineProperty(G, "__esModule", { value: !0 });
G.START_BIN = "1010";
G.END_BIN = "11101";
G.BINARIES = [
  "00110",
  "10001",
  "01001",
  "11000",
  "00101",
  "10100",
  "01100",
  "00011",
  "10010",
  "01010"
];
Object.defineProperty(Z, "__esModule", { value: !0 });
var xa = (function () {
    function t(e, r) {
      for (var n = 0; n < r.length; n++) {
        var a = r[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    return function (e, r, n) {
      return r && t(e.prototype, r), n && t(e, n), e;
    };
  })(),
  U = G,
  Sa = l,
  Ra = Aa(Sa);
function Aa(t) {
  return t && t.__esModule ? t : { default: t };
}
function Pa(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ta(t, e) {
  if (!t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Ma(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
}
var ka = (function (t) {
  Ma(e, t);
  function e() {
    return (
      Pa(this, e),
      Ta(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
    );
  }
  return (
    xa(e, [
      {
        key: "valid",
        value: function () {
          return this.data.search(/^([0-9]{2})+$/) !== -1;
        }
      },
      {
        key: "encode",
        value: function () {
          var n = this,
            a = this.data
              .match(/.{2}/g)
              .map(function (i) {
                return n.encodePair(i);
              })
              .join("");
          return { data: U.START_BIN + a + U.END_BIN, text: this.text };
        }
      },
      {
        key: "encodePair",
        value: function (n) {
          var a = U.BINARIES[n[1]];
          return U.BINARIES[n[0]]
            .split("")
            .map(function (i, o) {
              return (i === "1" ? "111" : "1") + (a[o] === "1" ? "000" : "0");
            })
            .join("");
        }
      }
    ]),
    e
  );
})(Ra.default);
Z.default = ka;
var Ae = {};
Object.defineProperty(Ae, "__esModule", { value: !0 });
var Ia = (function () {
    function t(e, r) {
      for (var n = 0; n < r.length; n++) {
        var a = r[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    return function (e, r, n) {
      return r && t(e.prototype, r), n && t(e, n), e;
    };
  })(),
  Da = Z,
  Ba = ja(Da);
function ja(t) {
  return t && t.__esModule ? t : { default: t };
}
function La(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Na(t, e) {
  if (!t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Ca(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
}
var tt = function (e) {
    var r = e
      .substr(0, 13)
      .split("")
      .map(function (n) {
        return parseInt(n, 10);
      })
      .reduce(function (n, a, i) {
        return n + a * (3 - (i % 2) * 2);
      }, 0);
    return Math.ceil(r / 10) * 10 - r;
  },
  Ga = (function (t) {
    Ca(e, t);
    function e(r, n) {
      return (
        La(this, e),
        r.search(/^[0-9]{13}$/) !== -1 && (r += tt(r)),
        Na(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n))
      );
    }
    return (
      Ia(e, [
        {
          key: "valid",
          value: function () {
            return (
              this.data.search(/^[0-9]{14}$/) !== -1 &&
              +this.data[13] === tt(this.data)
            );
          }
        }
      ]),
      e
    );
  })(Ba.default);
Ae.default = Ga;
Object.defineProperty(T, "__esModule", { value: !0 });
T.ITF14 = T.ITF = void 0;
var Fa = Z,
  za = wt(Fa),
  Ha = Ae,
  Xa = wt(Ha);
function wt(t) {
  return t && t.__esModule ? t : { default: t };
}
T.ITF = za.default;
T.ITF14 = Xa.default;
var v = {},
  w = {};
Object.defineProperty(w, "__esModule", { value: !0 });
var Ua = (function () {
    function t(e, r) {
      for (var n = 0; n < r.length; n++) {
        var a = r[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    return function (e, r, n) {
      return r && t(e.prototype, r), n && t(e, n), e;
    };
  })(),
  Va = l,
  qa = Ja(Va);
function Ja(t) {
  return t && t.__esModule ? t : { default: t };
}
function Ya(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Qa(t, e) {
  if (!t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Wa(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
}
var Za = (function (t) {
  Wa(e, t);
  function e(r, n) {
    return (
      Ya(this, e),
      Qa(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n))
    );
  }
  return (
    Ua(e, [
      {
        key: "encode",
        value: function () {
          for (var n = "110", a = 0; a < this.data.length; a++) {
            var i = parseInt(this.data[a]),
              o = i.toString(2);
            o = Ka(o, 4 - o.length);
            for (var u = 0; u < o.length; u++) n += o[u] == "0" ? "100" : "110";
          }
          return (n += "1001"), { data: n, text: this.text };
        }
      },
      {
        key: "valid",
        value: function () {
          return this.data.search(/^[0-9]+$/) !== -1;
        }
      }
    ]),
    e
  );
})(qa.default);
function Ka(t, e) {
  for (var r = 0; r < e; r++) t = "0" + t;
  return t;
}
w.default = Za;
var Pe = {},
  $ = {};
Object.defineProperty($, "__esModule", { value: !0 });
$.mod10 = ei;
$.mod11 = ti;
function ei(t) {
  for (var e = 0, r = 0; r < t.length; r++) {
    var n = parseInt(t[r]);
    (r + t.length) % 2 === 0
      ? (e += n)
      : (e += ((n * 2) % 10) + Math.floor((n * 2) / 10));
  }
  return (10 - (e % 10)) % 10;
}
function ti(t) {
  for (var e = 0, r = [2, 3, 4, 5, 6, 7], n = 0; n < t.length; n++) {
    var a = parseInt(t[t.length - 1 - n]);
    e += r[n % r.length] * a;
  }
  return (11 - (e % 11)) % 11;
}
Object.defineProperty(Pe, "__esModule", { value: !0 });
var ni = w,
  ri = ii(ni),
  ai = $;
function ii(t) {
  return t && t.__esModule ? t : { default: t };
}
function oi(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ui(t, e) {
  if (!t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function fi(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
}
var ci = (function (t) {
  fi(e, t);
  function e(r, n) {
    return (
      oi(this, e),
      ui(
        this,
        (e.__proto__ || Object.getPrototypeOf(e)).call(
          this,
          r + (0, ai.mod10)(r),
          n
        )
      )
    );
  }
  return e;
})(ri.default);
Pe.default = ci;
var Te = {};
Object.defineProperty(Te, "__esModule", { value: !0 });
var li = w,
  di = _i(li),
  hi = $;
function _i(t) {
  return t && t.__esModule ? t : { default: t };
}
function vi(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function si(t, e) {
  if (!t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function yi(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
}
var pi = (function (t) {
  yi(e, t);
  function e(r, n) {
    return (
      vi(this, e),
      si(
        this,
        (e.__proto__ || Object.getPrototypeOf(e)).call(
          this,
          r + (0, hi.mod11)(r),
          n
        )
      )
    );
  }
  return e;
})(di.default);
Te.default = pi;
var Me = {};
Object.defineProperty(Me, "__esModule", { value: !0 });
var gi = w,
  Oi = Ei(gi),
  nt = $;
function Ei(t) {
  return t && t.__esModule ? t : { default: t };
}
function bi(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function mi(t, e) {
  if (!t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function wi(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
}
var $i = (function (t) {
  wi(e, t);
  function e(r, n) {
    return (
      bi(this, e),
      (r += (0, nt.mod10)(r)),
      (r += (0, nt.mod10)(r)),
      mi(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n))
    );
  }
  return e;
})(Oi.default);
Me.default = $i;
var ke = {};
Object.defineProperty(ke, "__esModule", { value: !0 });
var xi = w,
  Si = Ri(xi),
  rt = $;
function Ri(t) {
  return t && t.__esModule ? t : { default: t };
}
function Ai(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Pi(t, e) {
  if (!t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Ti(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
}
var Mi = (function (t) {
  Ti(e, t);
  function e(r, n) {
    return (
      Ai(this, e),
      (r += (0, rt.mod11)(r)),
      (r += (0, rt.mod10)(r)),
      Pi(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n))
    );
  }
  return e;
})(Si.default);
ke.default = Mi;
Object.defineProperty(v, "__esModule", { value: !0 });
v.MSI1110 = v.MSI1010 = v.MSI11 = v.MSI10 = v.MSI = void 0;
var ki = w,
  Ii = F(ki),
  Di = Pe,
  Bi = F(Di),
  ji = Te,
  Li = F(ji),
  Ni = Me,
  Ci = F(Ni),
  Gi = ke,
  Fi = F(Gi);
function F(t) {
  return t && t.__esModule ? t : { default: t };
}
v.MSI = Ii.default;
v.MSI10 = Bi.default;
v.MSI11 = Li.default;
v.MSI1010 = Ci.default;
v.MSI1110 = Fi.default;
var K = {};
Object.defineProperty(K, "__esModule", { value: !0 });
K.pharmacode = void 0;
var zi = (function () {
    function t(e, r) {
      for (var n = 0; n < r.length; n++) {
        var a = r[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    return function (e, r, n) {
      return r && t(e.prototype, r), n && t(e, n), e;
    };
  })(),
  Hi = l,
  Xi = Ui(Hi);
function Ui(t) {
  return t && t.__esModule ? t : { default: t };
}
function Vi(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function qi(t, e) {
  if (!t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Ji(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
}
var Yi = (function (t) {
  Ji(e, t);
  function e(r, n) {
    Vi(this, e);
    var a = qi(
      this,
      (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n)
    );
    return (a.number = parseInt(r, 10)), a;
  }
  return (
    zi(e, [
      {
        key: "encode",
        value: function () {
          for (var n = this.number, a = ""; !isNaN(n) && n != 0; )
            n % 2 === 0
              ? ((a = "11100" + a), (n = (n - 2) / 2))
              : ((a = "100" + a), (n = (n - 1) / 2));
          return (a = a.slice(0, -2)), { data: a, text: this.text };
        }
      },
      {
        key: "valid",
        value: function () {
          return this.number >= 3 && this.number <= 131070;
        }
      }
    ]),
    e
  );
})(Xi.default);
K.pharmacode = Yi;
var ee = {};
Object.defineProperty(ee, "__esModule", { value: !0 });
ee.codabar = void 0;
var Qi = (function () {
    function t(e, r) {
      for (var n = 0; n < r.length; n++) {
        var a = r[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    return function (e, r, n) {
      return r && t(e.prototype, r), n && t(e, n), e;
    };
  })(),
  Wi = l,
  Zi = Ki(Wi);
function Ki(t) {
  return t && t.__esModule ? t : { default: t };
}
function eo(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function to(t, e) {
  if (!t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function no(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
}
var ro = (function (t) {
  no(e, t);
  function e(r, n) {
    eo(this, e), r.search(/^[0-9\-\$\:\.\+\/]+$/) === 0 && (r = "A" + r + "A");
    var a = to(
      this,
      (e.__proto__ || Object.getPrototypeOf(e)).call(this, r.toUpperCase(), n)
    );
    return (a.text = a.options.text || a.text.replace(/[A-D]/g, "")), a;
  }
  return (
    Qi(e, [
      {
        key: "valid",
        value: function () {
          return this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/) !== -1;
        }
      },
      {
        key: "encode",
        value: function () {
          for (
            var n = [], a = this.getEncodings(), i = 0;
            i < this.data.length;
            i++
          )
            n.push(a[this.data.charAt(i)]),
              i !== this.data.length - 1 && n.push("0");
          return { text: this.text, data: n.join("") };
        }
      },
      {
        key: "getEncodings",
        value: function () {
          return {
            0: "101010011",
            1: "101011001",
            2: "101001011",
            3: "110010101",
            4: "101101001",
            5: "110101001",
            6: "100101011",
            7: "100101101",
            8: "100110101",
            9: "110100101",
            "-": "101001101",
            $: "101100101",
            ":": "1101011011",
            "/": "1101101011",
            ".": "1101101101",
            "+": "1011011011",
            A: "1011001001",
            B: "1001001011",
            C: "1010010011",
            D: "1010011001"
          };
        }
      }
    ]),
    e
  );
})(Zi.default);
ee.codabar = ro;
var te = {};
Object.defineProperty(te, "__esModule", { value: !0 });
te.GenericBarcode = void 0;
var ao = (function () {
    function t(e, r) {
      for (var n = 0; n < r.length; n++) {
        var a = r[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    return function (e, r, n) {
      return r && t(e.prototype, r), n && t(e, n), e;
    };
  })(),
  io = l,
  oo = uo(io);
function uo(t) {
  return t && t.__esModule ? t : { default: t };
}
function fo(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function co(t, e) {
  if (!t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function lo(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
}
var ho = (function (t) {
  lo(e, t);
  function e(r, n) {
    return (
      fo(this, e),
      co(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n))
    );
  }
  return (
    ao(e, [
      {
        key: "encode",
        value: function () {
          return {
            data: "10101010101010101010101010101010101010101",
            text: this.text
          };
        }
      },
      {
        key: "valid",
        value: function () {
          return !0;
        }
      }
    ]),
    e
  );
})(oo.default);
te.GenericBarcode = ho;
Object.defineProperty(ye, "__esModule", { value: !0 });
var _o = Y,
  V = y,
  P = c,
  at = T,
  L = v,
  vo = K,
  so = ee,
  yo = te;
ye.default = {
  CODE39: _o.CODE39,
  CODE128: V.CODE128,
  CODE128A: V.CODE128A,
  CODE128B: V.CODE128B,
  CODE128C: V.CODE128C,
  EAN13: P.EAN13,
  EAN8: P.EAN8,
  EAN5: P.EAN5,
  EAN2: P.EAN2,
  UPC: P.UPC,
  UPCE: P.UPCE,
  ITF14: at.ITF14,
  ITF: at.ITF,
  MSI: L.MSI,
  MSI10: L.MSI10,
  MSI11: L.MSI11,
  MSI1010: L.MSI1010,
  MSI1110: L.MSI1110,
  pharmacode: vo.pharmacode,
  codabar: so.codabar,
  GenericBarcode: yo.GenericBarcode
};
var I = {};
Object.defineProperty(I, "__esModule", { value: !0 });
var po =
  Object.assign ||
  function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  };
I.default = function (t, e) {
  return po({}, t, e);
};
var Ie = {};
Object.defineProperty(Ie, "__esModule", { value: !0 });
Ie.default = go;
function go(t) {
  var e = [];
  function r(n) {
    if (Array.isArray(n)) for (var a = 0; a < n.length; a++) r(n[a]);
    else (n.text = n.text || ""), (n.data = n.data || ""), e.push(n);
  }
  return r(t), e;
}
var De = {};
Object.defineProperty(De, "__esModule", { value: !0 });
De.default = Oo;
function Oo(t) {
  return (
    (t.marginTop = t.marginTop || t.margin),
    (t.marginBottom = t.marginBottom || t.margin),
    (t.marginRight = t.marginRight || t.margin),
    (t.marginLeft = t.marginLeft || t.margin),
    t
  );
}
var Be = {},
  je = {},
  ne = {};
Object.defineProperty(ne, "__esModule", { value: !0 });
ne.default = Eo;
function Eo(t) {
  var e = [
    "width",
    "height",
    "textMargin",
    "fontSize",
    "margin",
    "marginTop",
    "marginBottom",
    "marginLeft",
    "marginRight"
  ];
  for (var r in e)
    e.hasOwnProperty(r) &&
      ((r = e[r]), typeof t[r] == "string" && (t[r] = parseInt(t[r], 10)));
  return (
    typeof t.displayValue == "string" &&
      (t.displayValue = t.displayValue != "false"),
    t
  );
}
var re = {};
Object.defineProperty(re, "__esModule", { value: !0 });
var bo = {
  width: 2,
  height: 100,
  format: "auto",
  displayValue: !0,
  fontOptions: "",
  font: "monospace",
  text: void 0,
  textAlign: "center",
  textPosition: "bottom",
  textMargin: 2,
  fontSize: 20,
  background: "#ffffff",
  lineColor: "#000000",
  margin: 10,
  marginTop: void 0,
  marginBottom: void 0,
  marginLeft: void 0,
  marginRight: void 0,
  valid: function () {}
};
re.default = bo;
Object.defineProperty(je, "__esModule", { value: !0 });
var mo = ne,
  wo = $t(mo),
  $o = re,
  it = $t($o);
function $t(t) {
  return t && t.__esModule ? t : { default: t };
}
function xo(t) {
  var e = {};
  for (var r in it.default)
    it.default.hasOwnProperty(r) &&
      (t.hasAttribute("jsbarcode-" + r.toLowerCase()) &&
        (e[r] = t.getAttribute("jsbarcode-" + r.toLowerCase())),
      t.hasAttribute("data-" + r.toLowerCase()) &&
        (e[r] = t.getAttribute("data-" + r.toLowerCase())));
  return (
    (e.value =
      t.getAttribute("jsbarcode-value") || t.getAttribute("data-value")),
    (e = (0, wo.default)(e)),
    e
  );
}
je.default = xo;
var Le = {},
  Ne = {},
  _ = {};
Object.defineProperty(_, "__esModule", { value: !0 });
_.getTotalWidthOfEncodings =
  _.calculateEncodingAttributes =
  _.getBarcodePadding =
  _.getEncodingHeight =
  _.getMaximumHeightOfEncodings =
    void 0;
var So = I,
  Ro = Ao(So);
function Ao(t) {
  return t && t.__esModule ? t : { default: t };
}
function xt(t, e) {
  return (
    e.height +
    (e.displayValue && t.text.length > 0 ? e.fontSize + e.textMargin : 0) +
    e.marginTop +
    e.marginBottom
  );
}
function St(t, e, r) {
  if (r.displayValue && e < t) {
    if (r.textAlign == "center") return Math.floor((t - e) / 2);
    if (r.textAlign == "left") return 0;
    if (r.textAlign == "right") return Math.floor(t - e);
  }
  return 0;
}
function Po(t, e, r) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n],
      i = (0, Ro.default)(e, a.options),
      o;
    i.displayValue ? (o = ko(a.text, i, r)) : (o = 0);
    var u = a.data.length * i.width;
    (a.width = Math.ceil(Math.max(o, u))),
      (a.height = xt(a, i)),
      (a.barcodePadding = St(o, u, i));
  }
}
function To(t) {
  for (var e = 0, r = 0; r < t.length; r++) e += t[r].width;
  return e;
}
function Mo(t) {
  for (var e = 0, r = 0; r < t.length; r++)
    t[r].height > e && (e = t[r].height);
  return e;
}
function ko(t, e, r) {
  var n;
  if (r) n = r;
  else if (typeof document < "u")
    n = document.createElement("canvas").getContext("2d");
  else return 0;
  n.font = e.fontOptions + " " + e.fontSize + "px " + e.font;
  var a = n.measureText(t);
  if (!a) return 0;
  var i = a.width;
  return i;
}
_.getMaximumHeightOfEncodings = Mo;
_.getEncodingHeight = xt;
_.getBarcodePadding = St;
_.calculateEncodingAttributes = Po;
_.getTotalWidthOfEncodings = To;
Object.defineProperty(Ne, "__esModule", { value: !0 });
var Io = (function () {
    function t(e, r) {
      for (var n = 0; n < r.length; n++) {
        var a = r[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    return function (e, r, n) {
      return r && t(e.prototype, r), n && t(e, n), e;
    };
  })(),
  Do = I,
  Bo = jo(Do),
  ce = _;
function jo(t) {
  return t && t.__esModule ? t : { default: t };
}
function Lo(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
var No = (function () {
  function t(e, r, n) {
    Lo(this, t), (this.canvas = e), (this.encodings = r), (this.options = n);
  }
  return (
    Io(t, [
      {
        key: "render",
        value: function () {
          if (!this.canvas.getContext)
            throw new Error("The browser does not support canvas.");
          this.prepareCanvas();
          for (var r = 0; r < this.encodings.length; r++) {
            var n = (0, Bo.default)(this.options, this.encodings[r].options);
            this.drawCanvasBarcode(n, this.encodings[r]),
              this.drawCanvasText(n, this.encodings[r]),
              this.moveCanvasDrawing(this.encodings[r]);
          }
          this.restoreCanvas();
        }
      },
      {
        key: "prepareCanvas",
        value: function () {
          var r = this.canvas.getContext("2d");
          r.save(),
            (0, ce.calculateEncodingAttributes)(
              this.encodings,
              this.options,
              r
            );
          var n = (0, ce.getTotalWidthOfEncodings)(this.encodings),
            a = (0, ce.getMaximumHeightOfEncodings)(this.encodings);
          (this.canvas.width =
            n + this.options.marginLeft + this.options.marginRight),
            (this.canvas.height = a),
            r.clearRect(0, 0, this.canvas.width, this.canvas.height),
            this.options.background &&
              ((r.fillStyle = this.options.background),
              r.fillRect(0, 0, this.canvas.width, this.canvas.height)),
            r.translate(this.options.marginLeft, 0);
        }
      },
      {
        key: "drawCanvasBarcode",
        value: function (r, n) {
          var a = this.canvas.getContext("2d"),
            i = n.data,
            o;
          r.textPosition == "top"
            ? (o = r.marginTop + r.fontSize + r.textMargin)
            : (o = r.marginTop),
            (a.fillStyle = r.lineColor);
          for (var u = 0; u < i.length; u++) {
            var d = u * r.width + n.barcodePadding;
            i[u] === "1"
              ? a.fillRect(d, o, r.width, r.height)
              : i[u] && a.fillRect(d, o, r.width, r.height * i[u]);
          }
        }
      },
      {
        key: "drawCanvasText",
        value: function (r, n) {
          var a = this.canvas.getContext("2d"),
            i = r.fontOptions + " " + r.fontSize + "px " + r.font;
          if (r.displayValue) {
            var o, u;
            r.textPosition == "top"
              ? (u = r.marginTop + r.fontSize - r.textMargin)
              : (u = r.height + r.textMargin + r.marginTop + r.fontSize),
              (a.font = i),
              r.textAlign == "left" || n.barcodePadding > 0
                ? ((o = 0), (a.textAlign = "left"))
                : r.textAlign == "right"
                ? ((o = n.width - 1), (a.textAlign = "right"))
                : ((o = n.width / 2), (a.textAlign = "center")),
              a.fillText(n.text, o, u);
          }
        }
      },
      {
        key: "moveCanvasDrawing",
        value: function (r) {
          var n = this.canvas.getContext("2d");
          n.translate(r.width, 0);
        }
      },
      {
        key: "restoreCanvas",
        value: function () {
          var r = this.canvas.getContext("2d");
          r.restore();
        }
      }
    ]),
    t
  );
})();
Ne.default = No;
var Ce = {};
Object.defineProperty(Ce, "__esModule", { value: !0 });
var Co = (function () {
    function t(e, r) {
      for (var n = 0; n < r.length; n++) {
        var a = r[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    return function (e, r, n) {
      return r && t(e.prototype, r), n && t(e, n), e;
    };
  })(),
  Go = I,
  Fo = zo(Go),
  le = _;
function zo(t) {
  return t && t.__esModule ? t : { default: t };
}
function Ho(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
var q = "http://www.w3.org/2000/svg",
  Xo = (function () {
    function t(e, r, n) {
      Ho(this, t),
        (this.svg = e),
        (this.encodings = r),
        (this.options = n),
        (this.document = n.xmlDocument || document);
    }
    return (
      Co(t, [
        {
          key: "render",
          value: function () {
            var r = this.options.marginLeft;
            this.prepareSVG();
            for (var n = 0; n < this.encodings.length; n++) {
              var a = this.encodings[n],
                i = (0, Fo.default)(this.options, a.options),
                o = this.createGroup(r, i.marginTop, this.svg);
              this.setGroupOptions(o, i),
                this.drawSvgBarcode(o, i, a),
                this.drawSVGText(o, i, a),
                (r += a.width);
            }
          }
        },
        {
          key: "prepareSVG",
          value: function () {
            for (; this.svg.firstChild; )
              this.svg.removeChild(this.svg.firstChild);
            (0, le.calculateEncodingAttributes)(this.encodings, this.options);
            var r = (0, le.getTotalWidthOfEncodings)(this.encodings),
              n = (0, le.getMaximumHeightOfEncodings)(this.encodings),
              a = r + this.options.marginLeft + this.options.marginRight;
            this.setSvgAttributes(a, n),
              this.options.background &&
                this.drawRect(0, 0, a, n, this.svg).setAttribute(
                  "style",
                  "fill:" + this.options.background + ";"
                );
          }
        },
        {
          key: "drawSvgBarcode",
          value: function (r, n, a) {
            var i = a.data,
              o;
            n.textPosition == "top" ? (o = n.fontSize + n.textMargin) : (o = 0);
            for (var u = 0, d = 0, g = 0; g < i.length; g++)
              (d = g * n.width + a.barcodePadding),
                i[g] === "1"
                  ? u++
                  : u > 0 &&
                    (this.drawRect(
                      d - n.width * u,
                      o,
                      n.width * u,
                      n.height,
                      r
                    ),
                    (u = 0));
            u > 0 &&
              this.drawRect(d - n.width * (u - 1), o, n.width * u, n.height, r);
          }
        },
        {
          key: "drawSVGText",
          value: function (r, n, a) {
            var i = this.document.createElementNS(q, "text");
            if (n.displayValue) {
              var o, u;
              i.setAttribute(
                "style",
                "font:" + n.fontOptions + " " + n.fontSize + "px " + n.font
              ),
                n.textPosition == "top"
                  ? (u = n.fontSize - n.textMargin)
                  : (u = n.height + n.textMargin + n.fontSize),
                n.textAlign == "left" || a.barcodePadding > 0
                  ? ((o = 0), i.setAttribute("text-anchor", "start"))
                  : n.textAlign == "right"
                  ? ((o = a.width - 1), i.setAttribute("text-anchor", "end"))
                  : ((o = a.width / 2),
                    i.setAttribute("text-anchor", "middle")),
                i.setAttribute("x", o),
                i.setAttribute("y", u),
                i.appendChild(this.document.createTextNode(a.text)),
                r.appendChild(i);
            }
          }
        },
        {
          key: "setSvgAttributes",
          value: function (r, n) {
            var a = this.svg;
            a.setAttribute("width", r + "px"),
              a.setAttribute("height", n + "px"),
              a.setAttribute("x", "0px"),
              a.setAttribute("y", "0px"),
              a.setAttribute("viewBox", "0 0 " + r + " " + n),
              a.setAttribute("xmlns", q),
              a.setAttribute("version", "1.1"),
              a.setAttribute("style", "transform: translate(0,0)");
          }
        },
        {
          key: "createGroup",
          value: function (r, n, a) {
            var i = this.document.createElementNS(q, "g");
            return (
              i.setAttribute("transform", "translate(" + r + ", " + n + ")"),
              a.appendChild(i),
              i
            );
          }
        },
        {
          key: "setGroupOptions",
          value: function (r, n) {
            r.setAttribute("style", "fill:" + n.lineColor + ";");
          }
        },
        {
          key: "drawRect",
          value: function (r, n, a, i, o) {
            var u = this.document.createElementNS(q, "rect");
            return (
              u.setAttribute("x", r),
              u.setAttribute("y", n),
              u.setAttribute("width", a),
              u.setAttribute("height", i),
              o.appendChild(u),
              u
            );
          }
        }
      ]),
      t
    );
  })();
Ce.default = Xo;
var Ge = {};
Object.defineProperty(Ge, "__esModule", { value: !0 });
var Uo = (function () {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      (a.enumerable = a.enumerable || !1),
        (a.configurable = !0),
        "value" in a && (a.writable = !0),
        Object.defineProperty(e, a.key, a);
    }
  }
  return function (e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
})();
function Vo(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
var qo = (function () {
  function t(e, r, n) {
    Vo(this, t), (this.object = e), (this.encodings = r), (this.options = n);
  }
  return (
    Uo(t, [
      {
        key: "render",
        value: function () {
          this.object.encodings = this.encodings;
        }
      }
    ]),
    t
  );
})();
Ge.default = qo;
Object.defineProperty(Le, "__esModule", { value: !0 });
var Jo = Ne,
  Yo = Fe(Jo),
  Qo = Ce,
  Wo = Fe(Qo),
  Zo = Ge,
  Ko = Fe(Zo);
function Fe(t) {
  return t && t.__esModule ? t : { default: t };
}
Le.default = {
  CanvasRenderer: Yo.default,
  SVGRenderer: Wo.default,
  ObjectRenderer: Ko.default
};
var D = {};
Object.defineProperty(D, "__esModule", { value: !0 });
function ze(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function He(t, e) {
  if (!t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Xe(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
}
var eu = (function (t) {
    Xe(e, t);
    function e(r, n) {
      ze(this, e);
      var a = He(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
      return (
        (a.name = "InvalidInputException"),
        (a.symbology = r),
        (a.input = n),
        (a.message =
          '"' + a.input + '" is not a valid input for ' + a.symbology),
        a
      );
    }
    return e;
  })(Error),
  tu = (function (t) {
    Xe(e, t);
    function e() {
      ze(this, e);
      var r = He(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
      return (
        (r.name = "InvalidElementException"),
        (r.message = "Not supported type to render on"),
        r
      );
    }
    return e;
  })(Error),
  nu = (function (t) {
    Xe(e, t);
    function e() {
      ze(this, e);
      var r = He(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
      return (
        (r.name = "NoElementException"),
        (r.message = "No element to render on."),
        r
      );
    }
    return e;
  })(Error);
D.InvalidInputException = eu;
D.InvalidElementException = tu;
D.NoElementException = nu;
Object.defineProperty(Be, "__esModule", { value: !0 });
var ru =
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
        },
  au = je,
  _e = Rt(au),
  iu = Le,
  N = Rt(iu),
  ou = D;
function Rt(t) {
  return t && t.__esModule ? t : { default: t };
}
function Ue(t) {
  if (typeof t == "string") return uu(t);
  if (Array.isArray(t)) {
    for (var e = [], r = 0; r < t.length; r++) e.push(Ue(t[r]));
    return e;
  } else {
    if (typeof HTMLCanvasElement < "u" && t instanceof HTMLImageElement)
      return fu(t);
    if (
      (t && t.nodeName && t.nodeName.toLowerCase() === "svg") ||
      (typeof SVGElement < "u" && t instanceof SVGElement)
    )
      return {
        element: t,
        options: (0, _e.default)(t),
        renderer: N.default.SVGRenderer
      };
    if (typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement)
      return {
        element: t,
        options: (0, _e.default)(t),
        renderer: N.default.CanvasRenderer
      };
    if (t && t.getContext)
      return { element: t, renderer: N.default.CanvasRenderer };
    if (t && (typeof t > "u" ? "undefined" : ru(t)) === "object" && !t.nodeName)
      return { element: t, renderer: N.default.ObjectRenderer };
    throw new ou.InvalidElementException();
  }
}
function uu(t) {
  var e = document.querySelectorAll(t);
  if (e.length !== 0) {
    for (var r = [], n = 0; n < e.length; n++) r.push(Ue(e[n]));
    return r;
  }
}
function fu(t) {
  var e = document.createElement("canvas");
  return {
    element: e,
    options: (0, _e.default)(t),
    renderer: N.default.CanvasRenderer,
    afterRender: function () {
      t.setAttribute("src", e.toDataURL());
    }
  };
}
Be.default = Ue;
var Ve = {};
Object.defineProperty(Ve, "__esModule", { value: !0 });
var cu = (function () {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      (a.enumerable = a.enumerable || !1),
        (a.configurable = !0),
        "value" in a && (a.writable = !0),
        Object.defineProperty(e, a.key, a);
    }
  }
  return function (e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
})();
function lu(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
var du = (function () {
  function t(e) {
    lu(this, t), (this.api = e);
  }
  return (
    cu(t, [
      {
        key: "handleCatch",
        value: function (r) {
          if (r.name === "InvalidInputException")
            if (this.api._options.valid !== this.api._defaults.valid)
              this.api._options.valid(!1);
            else throw r.message;
          else throw r;
          this.api.render = function () {};
        }
      },
      {
        key: "wrapBarcodeCall",
        value: function (r) {
          try {
            var n = r.apply(void 0, arguments);
            return this.api._options.valid(!0), n;
          } catch (a) {
            return this.handleCatch(a), this.api;
          }
        }
      }
    ]),
    t
  );
})();
Ve.default = du;
var hu = ye,
  b = E(hu),
  _u = I,
  z = E(_u),
  vu = Ie,
  At = E(vu),
  su = De,
  ot = E(su),
  yu = Be,
  pu = E(yu),
  gu = ne,
  Ou = E(gu),
  Eu = Ve,
  bu = E(Eu),
  Pt = D,
  mu = re,
  Tt = E(mu);
function E(t) {
  return t && t.__esModule ? t : { default: t };
}
var p = function () {},
  ae = function (e, r, n) {
    var a = new p();
    if (typeof e > "u") throw Error("No element to render on was provided.");
    return (
      (a._renderProperties = (0, pu.default)(e)),
      (a._encodings = []),
      (a._options = Tt.default),
      (a._errorHandler = new bu.default(a)),
      typeof r < "u" &&
        ((n = n || {}),
        n.format || (n.format = kt()),
        a.options(n)[n.format](r, n).render()),
      a
    );
  };
ae.getModule = function (t) {
  return b.default[t];
};
for (var ut in b.default) b.default.hasOwnProperty(ut) && wu(b.default, ut);
function wu(t, e) {
  p.prototype[e] =
    p.prototype[e.toUpperCase()] =
    p.prototype[e.toLowerCase()] =
      function (r, n) {
        var a = this;
        return a._errorHandler.wrapBarcodeCall(function () {
          n.text = typeof n.text > "u" ? void 0 : "" + n.text;
          var i = (0, z.default)(a._options, n);
          i = (0, Ou.default)(i);
          var o = t[e],
            u = Mt(r, o, i);
          return a._encodings.push(u), a;
        });
      };
}
function Mt(t, e, r) {
  t = "" + t;
  var n = new e(t, r);
  if (!n.valid()) throw new Pt.InvalidInputException(n.constructor.name, t);
  var a = n.encode();
  a = (0, At.default)(a);
  for (var i = 0; i < a.length; i++)
    a[i].options = (0, z.default)(r, a[i].options);
  return a;
}
function kt() {
  return b.default.CODE128 ? "CODE128" : Object.keys(b.default)[0];
}
p.prototype.options = function (t) {
  return (this._options = (0, z.default)(this._options, t)), this;
};
p.prototype.blank = function (t) {
  var e = new Array(t + 1).join("0");
  return this._encodings.push({ data: e }), this;
};
p.prototype.init = function () {
  if (!!this._renderProperties) {
    Array.isArray(this._renderProperties) ||
      (this._renderProperties = [this._renderProperties]);
    var t;
    for (var e in this._renderProperties) {
      t = this._renderProperties[e];
      var r = (0, z.default)(this._options, t.options);
      r.format == "auto" && (r.format = kt()),
        this._errorHandler.wrapBarcodeCall(function () {
          var n = r.value,
            a = b.default[r.format.toUpperCase()],
            i = Mt(n, a, r);
          ve(t, i, r);
        });
    }
  }
};
p.prototype.render = function () {
  if (!this._renderProperties) throw new Pt.NoElementException();
  if (Array.isArray(this._renderProperties))
    for (var t = 0; t < this._renderProperties.length; t++)
      ve(this._renderProperties[t], this._encodings, this._options);
  else ve(this._renderProperties, this._encodings, this._options);
  return this;
};
p.prototype._defaults = Tt.default;
function ve(t, e, r) {
  e = (0, At.default)(e);
  for (var n = 0; n < e.length; n++)
    (e[n].options = (0, z.default)(r, e[n].options)),
      (0, ot.default)(e[n].options);
  (0, ot.default)(r);
  var a = t.renderer,
    i = new a(t.element, e, r);
  i.render(), t.afterRender && t.afterRender();
}
typeof window < "u" && (window.JsBarcode = ae);
typeof jQuery < "u" &&
  (jQuery.fn.JsBarcode = function (t, e) {
    var r = [];
    return (
      jQuery(this).each(function () {
        r.push(this);
      }),
      ae(r, t, e)
    );
  });
var $u = ae;
const xu = J({ name: "ReBarcode" }),
  Su = J({
    ...xu,
    props: {
      tag: { type: String, default: "canvas" },
      text: { type: String, default: null },
      options: {
        type: Object,
        default() {
          return {};
        }
      },
      type: { type: String, default: "CODE128" }
    },
    setup(t) {
      const e = t,
        r = Dt(null);
      return (
        Bt(() => {
          const n = { ...e.options, format: e.type };
          $u(r.value, e.text, n);
        }),
        (n, a) => (
          de(), jt(Lt(t.tag), { ref_key: "wrapEl", ref: r }, null, 512)
        )
      );
    }
  }),
  Ru = Nt(Su),
  Au = Ru,
  Pu = { class: "font-medium" },
  Tu = se(" \u6761\u5F62\u7801\uFF08\u57FA\u4E8E "),
  Mu = se(" JsBarcode "),
  ku = se(" \u751F\u6210\uFF09 "),
  Iu = J({ name: "BarCode" }),
  Bu = J({
    ...Iu,
    setup(t) {
      const e = [
        { text: "CODE128", type: "CODE128", options: {} },
        { text: "CODE39", type: "CODE39", options: { lineColor: "#990000" } },
        {
          text: "123456",
          type: "pharmacode",
          options: { background: "#eee", width: 5 }
        }
      ];
      return (r, n) => {
        const a = H("el-link"),
          i = H("el-card"),
          o = H("el-col"),
          u = H("el-row");
        return (
          de(),
          qe("div", null, [
            x(i, null, {
              header: S(() => [
                Ct("div", Pu, [
                  Tu,
                  x(
                    a,
                    {
                      href: "https://lindell.me/JsBarcode/",
                      target: "_blank",
                      style: { "font-size": "16px", margin: "0 5px 4px 0" }
                    },
                    { default: S(() => [Mu]), _: 1 }
                  ),
                  ku
                ])
              ]),
              default: S(() => [
                x(
                  u,
                  { gutter: 12 },
                  {
                    default: S(() => [
                      (de(),
                      qe(
                        Gt,
                        null,
                        Ft(e, (d, g) =>
                          x(
                            o,
                            { key: g, xs: 24, sm: 24, md: 12, lg: 8, xl: 8 },
                            {
                              default: S(() => [
                                x(
                                  i,
                                  {
                                    shadow: "hover",
                                    class: "flex justify-center"
                                  },
                                  {
                                    default: S(() => [
                                      x(
                                        zt(Au),
                                        {
                                          text: d.text,
                                          type: d.type,
                                          options: d.options
                                        },
                                        null,
                                        8,
                                        ["text", "type", "options"]
                                      )
                                    ]),
                                    _: 2
                                  },
                                  1024
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
          ])
        );
      };
    }
  });
export { Bu as default };
