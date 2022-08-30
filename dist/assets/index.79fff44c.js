import {
  d as It,
  r as ot,
  av as Oe,
  A as Ut,
  o as Ne,
  n as ce,
  k as st,
  aw as Ae,
  L as Se,
  b as q,
  a0 as _e,
  h as jt,
  e as bt,
  i as Re,
  j as yt,
  g as Et,
  f as Vt,
  ax as $t,
  Z as Ie,
  l as ke,
  ak as Be,
  al as Le,
  _ as ze
} from "./index.69183727.js";
/*!
 * Cropper.js v1.5.12
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-06-12T08:00:17.411Z
 */ function Gt(a, t) {
  var i = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var e = Object.getOwnPropertySymbols(a);
    t &&
      (e = e.filter(function (o) {
        return Object.getOwnPropertyDescriptor(a, o).enumerable;
      })),
      i.push.apply(i, e);
  }
  return i;
}
function le(a) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Gt(Object(i), !0).forEach(function (e) {
          Xe(a, e, i[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i))
      : Gt(Object(i)).forEach(function (e) {
          Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(i, e));
        });
  }
  return a;
}
function dt(a) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (dt = function (t) {
          return typeof t;
        })
      : (dt = function (t) {
          return t &&
            typeof Symbol == "function" &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        }),
    dt(a)
  );
}
function Ye(a, t) {
  if (!(a instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ft(a, t) {
  for (var i = 0; i < t.length; i++) {
    var e = t[i];
    (e.enumerable = e.enumerable || !1),
      (e.configurable = !0),
      "value" in e && (e.writable = !0),
      Object.defineProperty(a, e.key, e);
  }
}
function Pe(a, t, i) {
  return t && Ft(a.prototype, t), i && Ft(a, i), a;
}
function Xe(a, t, i) {
  return (
    t in a
      ? Object.defineProperty(a, t, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (a[t] = i),
    a
  );
}
function fe(a) {
  return He(a) || We(a) || Ue(a) || je();
}
function He(a) {
  if (Array.isArray(a)) return Mt(a);
}
function We(a) {
  if (
    (typeof Symbol < "u" && a[Symbol.iterator] != null) ||
    a["@@iterator"] != null
  )
    return Array.from(a);
}
function Ue(a, t) {
  if (!!a) {
    if (typeof a == "string") return Mt(a, t);
    var i = Object.prototype.toString.call(a).slice(8, -1);
    if (
      (i === "Object" && a.constructor && (i = a.constructor.name),
      i === "Map" || i === "Set")
    )
      return Array.from(a);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
      return Mt(a, t);
  }
}
function Mt(a, t) {
  (t == null || t > a.length) && (t = a.length);
  for (var i = 0, e = new Array(t); i < t; i++) e[i] = a[i];
  return e;
}
function je() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var mt = typeof window < "u" && typeof window.document < "u",
  z = mt ? window : {},
  kt =
    mt && z.document.documentElement
      ? "ontouchstart" in z.document.documentElement
      : !1,
  Bt = mt ? "PointerEvent" in z : !1,
  y = "cropper",
  Lt = "all",
  ue = "crop",
  pe = "move",
  de = "zoom",
  G = "e",
  F = "w",
  K = "s",
  H = "n",
  it = "ne",
  at = "nw",
  rt = "se",
  nt = "sw",
  Ct = "".concat(y, "-crop"),
  qt = "".concat(y, "-disabled"),
  S = "".concat(y, "-hidden"),
  Zt = "".concat(y, "-hide"),
  Ve = "".concat(y, "-invisible"),
  gt = "".concat(y, "-modal"),
  Tt = "".concat(y, "-move"),
  ct = "".concat(y, "Action"),
  ut = "".concat(y, "Preview"),
  zt = "crop",
  ge = "move",
  me = "none",
  Ot = "crop",
  Nt = "cropend",
  At = "cropmove",
  St = "cropstart",
  Kt = "dblclick",
  $e = kt ? "touchstart" : "mousedown",
  Ge = kt ? "touchmove" : "mousemove",
  Fe = kt ? "touchend touchcancel" : "mouseup",
  Qt = Bt ? "pointerdown" : $e,
  Jt = Bt ? "pointermove" : Ge,
  te = Bt ? "pointerup pointercancel" : Fe,
  ee = "ready",
  ie = "resize",
  ae = "wheel",
  _t = "zoom",
  re = "image/jpeg",
  qe = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,
  Ze = /^data:/,
  Ke = /^data:image\/jpeg;base64,/,
  Qe = /^img|canvas$/i,
  ve = 200,
  we = 100,
  ne = {
    viewMode: 0,
    dragMode: zt,
    initialAspectRatio: NaN,
    aspectRatio: NaN,
    data: null,
    preview: "",
    responsive: !0,
    restore: !0,
    checkCrossOrigin: !0,
    checkOrientation: !0,
    modal: !0,
    guides: !0,
    center: !0,
    highlight: !0,
    background: !0,
    autoCrop: !0,
    autoCropArea: 0.8,
    movable: !0,
    rotatable: !0,
    scalable: !0,
    zoomable: !0,
    zoomOnTouch: !0,
    zoomOnWheel: !0,
    wheelZoomRatio: 0.1,
    cropBoxMovable: !0,
    cropBoxResizable: !0,
    toggleDragModeOnDblclick: !0,
    minCanvasWidth: 0,
    minCanvasHeight: 0,
    minCropBoxWidth: 0,
    minCropBoxHeight: 0,
    minContainerWidth: ve,
    minContainerHeight: we,
    ready: null,
    cropstart: null,
    cropmove: null,
    cropend: null,
    crop: null,
    zoom: null
  },
  Je =
    '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',
  ti = Number.isNaN || z.isNaN;
function d(a) {
  return typeof a == "number" && !ti(a);
}
var oe = function (t) {
  return t > 0 && t < 1 / 0;
};
function xt(a) {
  return typeof a > "u";
}
function Z(a) {
  return dt(a) === "object" && a !== null;
}
var ei = Object.prototype.hasOwnProperty;
function Q(a) {
  if (!Z(a)) return !1;
  try {
    var t = a.constructor,
      i = t.prototype;
    return t && i && ei.call(i, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function A(a) {
  return typeof a == "function";
}
var ii = Array.prototype.slice;
function be(a) {
  return Array.from ? Array.from(a) : ii.call(a);
}
function E(a, t) {
  return (
    a &&
      A(t) &&
      (Array.isArray(a) || d(a.length)
        ? be(a).forEach(function (i, e) {
            t.call(a, i, e, a);
          })
        : Z(a) &&
          Object.keys(a).forEach(function (i) {
            t.call(a, a[i], i, a);
          })),
    a
  );
}
var x =
    Object.assign ||
    function (t) {
      for (
        var i = arguments.length, e = new Array(i > 1 ? i - 1 : 0), o = 1;
        o < i;
        o++
      )
        e[o - 1] = arguments[o];
      return (
        Z(t) &&
          e.length > 0 &&
          e.forEach(function (r) {
            Z(r) &&
              Object.keys(r).forEach(function (n) {
                t[n] = r[n];
              });
          }),
        t
      );
    },
  ai = /\.\d*(?:0|9){12}\d*$/;
function tt(a) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return ai.test(a) ? Math.round(a * t) / t : a;
}
var ri = /^width|height|left|top|marginLeft|marginTop$/;
function W(a, t) {
  var i = a.style;
  E(t, function (e, o) {
    ri.test(o) && d(e) && (e = "".concat(e, "px")), (i[o] = e);
  });
}
function ni(a, t) {
  return a.classList ? a.classList.contains(t) : a.className.indexOf(t) > -1;
}
function O(a, t) {
  if (!!t) {
    if (d(a.length)) {
      E(a, function (e) {
        O(e, t);
      });
      return;
    }
    if (a.classList) {
      a.classList.add(t);
      return;
    }
    var i = a.className.trim();
    i
      ? i.indexOf(t) < 0 && (a.className = "".concat(i, " ").concat(t))
      : (a.className = t);
  }
}
function L(a, t) {
  if (!!t) {
    if (d(a.length)) {
      E(a, function (i) {
        L(i, t);
      });
      return;
    }
    if (a.classList) {
      a.classList.remove(t);
      return;
    }
    a.className.indexOf(t) >= 0 && (a.className = a.className.replace(t, ""));
  }
}
function J(a, t, i) {
  if (!!t) {
    if (d(a.length)) {
      E(a, function (e) {
        J(e, t, i);
      });
      return;
    }
    i ? O(a, t) : L(a, t);
  }
}
var oi = /([a-z\d])([A-Z])/g;
function Yt(a) {
  return a.replace(oi, "$1-$2").toLowerCase();
}
function Rt(a, t) {
  return Z(a[t])
    ? a[t]
    : a.dataset
    ? a.dataset[t]
    : a.getAttribute("data-".concat(Yt(t)));
}
function lt(a, t, i) {
  Z(i)
    ? (a[t] = i)
    : a.dataset
    ? (a.dataset[t] = i)
    : a.setAttribute("data-".concat(Yt(t)), i);
}
function si(a, t) {
  if (Z(a[t]))
    try {
      delete a[t];
    } catch {
      a[t] = void 0;
    }
  else if (a.dataset)
    try {
      delete a.dataset[t];
    } catch {
      a.dataset[t] = void 0;
    }
  else a.removeAttribute("data-".concat(Yt(t)));
}
var ye = /\s\s*/,
  xe = (function () {
    var a = !1;
    if (mt) {
      var t = !1,
        i = function () {},
        e = Object.defineProperty({}, "once", {
          get: function () {
            return (a = !0), t;
          },
          set: function (r) {
            t = r;
          }
        });
      z.addEventListener("test", i, e), z.removeEventListener("test", i, e);
    }
    return a;
  })();
function k(a, t, i) {
  var e = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
    o = i;
  t.trim()
    .split(ye)
    .forEach(function (r) {
      if (!xe) {
        var n = a.listeners;
        n &&
          n[r] &&
          n[r][i] &&
          ((o = n[r][i]),
          delete n[r][i],
          Object.keys(n[r]).length === 0 && delete n[r],
          Object.keys(n).length === 0 && delete a.listeners);
      }
      a.removeEventListener(r, o, e);
    });
}
function I(a, t, i) {
  var e = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
    o = i;
  t.trim()
    .split(ye)
    .forEach(function (r) {
      if (e.once && !xe) {
        var n = a.listeners,
          s = n === void 0 ? {} : n;
        (o = function () {
          delete s[r][i], a.removeEventListener(r, o, e);
          for (var l = arguments.length, h = new Array(l), c = 0; c < l; c++)
            h[c] = arguments[c];
          i.apply(a, h);
        }),
          s[r] || (s[r] = {}),
          s[r][i] && a.removeEventListener(r, s[r][i], e),
          (s[r][i] = o),
          (a.listeners = s);
      }
      a.addEventListener(r, o, e);
    });
}
function et(a, t, i) {
  var e;
  return (
    A(Event) && A(CustomEvent)
      ? (e = new CustomEvent(t, { detail: i, bubbles: !0, cancelable: !0 }))
      : ((e = document.createEvent("CustomEvent")),
        e.initCustomEvent(t, !0, !0, i)),
    a.dispatchEvent(e)
  );
}
function De(a) {
  var t = a.getBoundingClientRect();
  return {
    left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: t.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var Dt = z.location,
  hi = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function se(a) {
  var t = a.match(hi);
  return (
    t !== null &&
    (t[1] !== Dt.protocol || t[2] !== Dt.hostname || t[3] !== Dt.port)
  );
}
function he(a) {
  var t = "timestamp=".concat(new Date().getTime());
  return a + (a.indexOf("?") === -1 ? "?" : "&") + t;
}
function ht(a) {
  var t = a.rotate,
    i = a.scaleX,
    e = a.scaleY,
    o = a.translateX,
    r = a.translateY,
    n = [];
  d(o) && o !== 0 && n.push("translateX(".concat(o, "px)")),
    d(r) && r !== 0 && n.push("translateY(".concat(r, "px)")),
    d(t) && t !== 0 && n.push("rotate(".concat(t, "deg)")),
    d(i) && i !== 1 && n.push("scaleX(".concat(i, ")")),
    d(e) && e !== 1 && n.push("scaleY(".concat(e, ")"));
  var s = n.length ? n.join(" ") : "none";
  return { WebkitTransform: s, msTransform: s, transform: s };
}
function ci(a) {
  var t = le({}, a),
    i = 0;
  return (
    E(a, function (e, o) {
      delete t[o],
        E(t, function (r) {
          var n = Math.abs(e.startX - r.startX),
            s = Math.abs(e.startY - r.startY),
            f = Math.abs(e.endX - r.endX),
            l = Math.abs(e.endY - r.endY),
            h = Math.sqrt(n * n + s * s),
            c = Math.sqrt(f * f + l * l),
            u = (c - h) / h;
          Math.abs(u) > Math.abs(i) && (i = u);
        });
    }),
    i
  );
}
function pt(a, t) {
  var i = a.pageX,
    e = a.pageY,
    o = { endX: i, endY: e };
  return t ? o : le({ startX: i, startY: e }, o);
}
function li(a) {
  var t = 0,
    i = 0,
    e = 0;
  return (
    E(a, function (o) {
      var r = o.startX,
        n = o.startY;
      (t += r), (i += n), (e += 1);
    }),
    (t /= e),
    (i /= e),
    { pageX: t, pageY: i }
  );
}
function U(a) {
  var t = a.aspectRatio,
    i = a.height,
    e = a.width,
    o =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : "contain",
    r = oe(e),
    n = oe(i);
  if (r && n) {
    var s = i * t;
    (o === "contain" && s > e) || (o === "cover" && s < e)
      ? (i = e / t)
      : (e = i * t);
  } else r ? (i = e / t) : n && (e = i * t);
  return { width: e, height: i };
}
function fi(a) {
  var t = a.width,
    i = a.height,
    e = a.degree;
  if (((e = Math.abs(e) % 180), e === 90)) return { width: i, height: t };
  var o = ((e % 90) * Math.PI) / 180,
    r = Math.sin(o),
    n = Math.cos(o),
    s = t * n + i * r,
    f = t * r + i * n;
  return e > 90 ? { width: f, height: s } : { width: s, height: f };
}
function ui(a, t, i, e) {
  var o = t.aspectRatio,
    r = t.naturalWidth,
    n = t.naturalHeight,
    s = t.rotate,
    f = s === void 0 ? 0 : s,
    l = t.scaleX,
    h = l === void 0 ? 1 : l,
    c = t.scaleY,
    u = c === void 0 ? 1 : c,
    m = i.aspectRatio,
    g = i.naturalWidth,
    b = i.naturalHeight,
    v = e.fillColor,
    M = v === void 0 ? "transparent" : v,
    T = e.imageSmoothingEnabled,
    D = T === void 0 ? !0 : T,
    Y = e.imageSmoothingQuality,
    _ = Y === void 0 ? "low" : Y,
    p = e.maxWidth,
    w = p === void 0 ? 1 / 0 : p,
    C = e.maxHeight,
    R = C === void 0 ? 1 / 0 : C,
    P = e.minWidth,
    j = P === void 0 ? 0 : P,
    V = e.minHeight,
    X = V === void 0 ? 0 : V,
    B = document.createElement("canvas"),
    N = B.getContext("2d"),
    $ = U({ aspectRatio: m, width: w, height: R }),
    ft = U({ aspectRatio: m, width: j, height: X }, "cover"),
    vt = Math.min($.width, Math.max(ft.width, g)),
    wt = Math.min($.height, Math.max(ft.height, b)),
    Pt = U({ aspectRatio: o, width: w, height: R }),
    Xt = U({ aspectRatio: o, width: j, height: X }, "cover"),
    Ht = Math.min(Pt.width, Math.max(Xt.width, r)),
    Wt = Math.min(Pt.height, Math.max(Xt.height, n)),
    Ce = [-Ht / 2, -Wt / 2, Ht, Wt];
  return (
    (B.width = tt(vt)),
    (B.height = tt(wt)),
    (N.fillStyle = M),
    N.fillRect(0, 0, vt, wt),
    N.save(),
    N.translate(vt / 2, wt / 2),
    N.rotate((f * Math.PI) / 180),
    N.scale(h, u),
    (N.imageSmoothingEnabled = D),
    (N.imageSmoothingQuality = _),
    N.drawImage.apply(
      N,
      [a].concat(
        fe(
          Ce.map(function (Te) {
            return Math.floor(tt(Te));
          })
        )
      )
    ),
    N.restore(),
    B
  );
}
var Ee = String.fromCharCode;
function pi(a, t, i) {
  var e = "";
  i += t;
  for (var o = t; o < i; o += 1) e += Ee(a.getUint8(o));
  return e;
}
var di = /^data:.*,/;
function gi(a) {
  var t = a.replace(di, ""),
    i = atob(t),
    e = new ArrayBuffer(i.length),
    o = new Uint8Array(e);
  return (
    E(o, function (r, n) {
      o[n] = i.charCodeAt(n);
    }),
    e
  );
}
function mi(a, t) {
  for (var i = [], e = 8192, o = new Uint8Array(a); o.length > 0; )
    i.push(Ee.apply(null, be(o.subarray(0, e)))), (o = o.subarray(e));
  return "data:".concat(t, ";base64,").concat(btoa(i.join("")));
}
function vi(a) {
  var t = new DataView(a),
    i;
  try {
    var e, o, r;
    if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
      for (var n = t.byteLength, s = 2; s + 1 < n; ) {
        if (t.getUint8(s) === 255 && t.getUint8(s + 1) === 225) {
          o = s;
          break;
        }
        s += 1;
      }
    if (o) {
      var f = o + 4,
        l = o + 10;
      if (pi(t, f, 4) === "Exif") {
        var h = t.getUint16(l);
        if (
          ((e = h === 18761),
          (e || h === 19789) && t.getUint16(l + 2, e) === 42)
        ) {
          var c = t.getUint32(l + 4, e);
          c >= 8 && (r = l + c);
        }
      }
    }
    if (r) {
      var u = t.getUint16(r, e),
        m,
        g;
      for (g = 0; g < u; g += 1)
        if (((m = r + g * 12 + 2), t.getUint16(m, e) === 274)) {
          (m += 8), (i = t.getUint16(m, e)), t.setUint16(m, 1, e);
          break;
        }
    }
  } catch {
    i = 1;
  }
  return i;
}
function wi(a) {
  var t = 0,
    i = 1,
    e = 1;
  switch (a) {
    case 2:
      i = -1;
      break;
    case 3:
      t = -180;
      break;
    case 4:
      e = -1;
      break;
    case 5:
      (t = 90), (e = -1);
      break;
    case 6:
      t = 90;
      break;
    case 7:
      (t = 90), (i = -1);
      break;
    case 8:
      t = -90;
      break;
  }
  return { rotate: t, scaleX: i, scaleY: e };
}
var bi = {
    render: function () {
      this.initContainer(),
        this.initCanvas(),
        this.initCropBox(),
        this.renderCanvas(),
        this.cropped && this.renderCropBox();
    },
    initContainer: function () {
      var t = this.element,
        i = this.options,
        e = this.container,
        o = this.cropper,
        r = Number(i.minContainerWidth),
        n = Number(i.minContainerHeight);
      O(o, S), L(t, S);
      var s = {
        width: Math.max(e.offsetWidth, r >= 0 ? r : ve),
        height: Math.max(e.offsetHeight, n >= 0 ? n : we)
      };
      (this.containerData = s),
        W(o, { width: s.width, height: s.height }),
        O(t, S),
        L(o, S);
    },
    initCanvas: function () {
      var t = this.containerData,
        i = this.imageData,
        e = this.options.viewMode,
        o = Math.abs(i.rotate) % 180 === 90,
        r = o ? i.naturalHeight : i.naturalWidth,
        n = o ? i.naturalWidth : i.naturalHeight,
        s = r / n,
        f = t.width,
        l = t.height;
      t.height * s > t.width
        ? e === 3
          ? (f = t.height * s)
          : (l = t.width / s)
        : e === 3
        ? (l = t.width / s)
        : (f = t.height * s);
      var h = {
        aspectRatio: s,
        naturalWidth: r,
        naturalHeight: n,
        width: f,
        height: l
      };
      (this.canvasData = h),
        (this.limited = e === 1 || e === 2),
        this.limitCanvas(!0, !0),
        (h.width = Math.min(Math.max(h.width, h.minWidth), h.maxWidth)),
        (h.height = Math.min(Math.max(h.height, h.minHeight), h.maxHeight)),
        (h.left = (t.width - h.width) / 2),
        (h.top = (t.height - h.height) / 2),
        (h.oldLeft = h.left),
        (h.oldTop = h.top),
        (this.initialCanvasData = x({}, h));
    },
    limitCanvas: function (t, i) {
      var e = this.options,
        o = this.containerData,
        r = this.canvasData,
        n = this.cropBoxData,
        s = e.viewMode,
        f = r.aspectRatio,
        l = this.cropped && n;
      if (t) {
        var h = Number(e.minCanvasWidth) || 0,
          c = Number(e.minCanvasHeight) || 0;
        s > 1
          ? ((h = Math.max(h, o.width)),
            (c = Math.max(c, o.height)),
            s === 3 && (c * f > h ? (h = c * f) : (c = h / f)))
          : s > 0 &&
            (h
              ? (h = Math.max(h, l ? n.width : 0))
              : c
              ? (c = Math.max(c, l ? n.height : 0))
              : l &&
                ((h = n.width),
                (c = n.height),
                c * f > h ? (h = c * f) : (c = h / f)));
        var u = U({ aspectRatio: f, width: h, height: c });
        (h = u.width),
          (c = u.height),
          (r.minWidth = h),
          (r.minHeight = c),
          (r.maxWidth = 1 / 0),
          (r.maxHeight = 1 / 0);
      }
      if (i)
        if (s > (l ? 0 : 1)) {
          var m = o.width - r.width,
            g = o.height - r.height;
          (r.minLeft = Math.min(0, m)),
            (r.minTop = Math.min(0, g)),
            (r.maxLeft = Math.max(0, m)),
            (r.maxTop = Math.max(0, g)),
            l &&
              this.limited &&
              ((r.minLeft = Math.min(n.left, n.left + (n.width - r.width))),
              (r.minTop = Math.min(n.top, n.top + (n.height - r.height))),
              (r.maxLeft = n.left),
              (r.maxTop = n.top),
              s === 2 &&
                (r.width >= o.width &&
                  ((r.minLeft = Math.min(0, m)), (r.maxLeft = Math.max(0, m))),
                r.height >= o.height &&
                  ((r.minTop = Math.min(0, g)), (r.maxTop = Math.max(0, g)))));
        } else
          (r.minLeft = -r.width),
            (r.minTop = -r.height),
            (r.maxLeft = o.width),
            (r.maxTop = o.height);
    },
    renderCanvas: function (t, i) {
      var e = this.canvasData,
        o = this.imageData;
      if (i) {
        var r = fi({
            width: o.naturalWidth * Math.abs(o.scaleX || 1),
            height: o.naturalHeight * Math.abs(o.scaleY || 1),
            degree: o.rotate || 0
          }),
          n = r.width,
          s = r.height,
          f = e.width * (n / e.naturalWidth),
          l = e.height * (s / e.naturalHeight);
        (e.left -= (f - e.width) / 2),
          (e.top -= (l - e.height) / 2),
          (e.width = f),
          (e.height = l),
          (e.aspectRatio = n / s),
          (e.naturalWidth = n),
          (e.naturalHeight = s),
          this.limitCanvas(!0, !1);
      }
      (e.width > e.maxWidth || e.width < e.minWidth) && (e.left = e.oldLeft),
        (e.height > e.maxHeight || e.height < e.minHeight) &&
          (e.top = e.oldTop),
        (e.width = Math.min(Math.max(e.width, e.minWidth), e.maxWidth)),
        (e.height = Math.min(Math.max(e.height, e.minHeight), e.maxHeight)),
        this.limitCanvas(!1, !0),
        (e.left = Math.min(Math.max(e.left, e.minLeft), e.maxLeft)),
        (e.top = Math.min(Math.max(e.top, e.minTop), e.maxTop)),
        (e.oldLeft = e.left),
        (e.oldTop = e.top),
        W(
          this.canvas,
          x(
            { width: e.width, height: e.height },
            ht({ translateX: e.left, translateY: e.top })
          )
        ),
        this.renderImage(t),
        this.cropped && this.limited && this.limitCropBox(!0, !0);
    },
    renderImage: function (t) {
      var i = this.canvasData,
        e = this.imageData,
        o = e.naturalWidth * (i.width / i.naturalWidth),
        r = e.naturalHeight * (i.height / i.naturalHeight);
      x(e, {
        width: o,
        height: r,
        left: (i.width - o) / 2,
        top: (i.height - r) / 2
      }),
        W(
          this.image,
          x(
            { width: e.width, height: e.height },
            ht(x({ translateX: e.left, translateY: e.top }, e))
          )
        ),
        t && this.output();
    },
    initCropBox: function () {
      var t = this.options,
        i = this.canvasData,
        e = t.aspectRatio || t.initialAspectRatio,
        o = Number(t.autoCropArea) || 0.8,
        r = { width: i.width, height: i.height };
      e &&
        (i.height * e > i.width
          ? (r.height = r.width / e)
          : (r.width = r.height * e)),
        (this.cropBoxData = r),
        this.limitCropBox(!0, !0),
        (r.width = Math.min(Math.max(r.width, r.minWidth), r.maxWidth)),
        (r.height = Math.min(Math.max(r.height, r.minHeight), r.maxHeight)),
        (r.width = Math.max(r.minWidth, r.width * o)),
        (r.height = Math.max(r.minHeight, r.height * o)),
        (r.left = i.left + (i.width - r.width) / 2),
        (r.top = i.top + (i.height - r.height) / 2),
        (r.oldLeft = r.left),
        (r.oldTop = r.top),
        (this.initialCropBoxData = x({}, r));
    },
    limitCropBox: function (t, i) {
      var e = this.options,
        o = this.containerData,
        r = this.canvasData,
        n = this.cropBoxData,
        s = this.limited,
        f = e.aspectRatio;
      if (t) {
        var l = Number(e.minCropBoxWidth) || 0,
          h = Number(e.minCropBoxHeight) || 0,
          c = s
            ? Math.min(o.width, r.width, r.width + r.left, o.width - r.left)
            : o.width,
          u = s
            ? Math.min(o.height, r.height, r.height + r.top, o.height - r.top)
            : o.height;
        (l = Math.min(l, o.width)),
          (h = Math.min(h, o.height)),
          f &&
            (l && h
              ? h * f > l
                ? (h = l / f)
                : (l = h * f)
              : l
              ? (h = l / f)
              : h && (l = h * f),
            u * f > c ? (u = c / f) : (c = u * f)),
          (n.minWidth = Math.min(l, c)),
          (n.minHeight = Math.min(h, u)),
          (n.maxWidth = c),
          (n.maxHeight = u);
      }
      i &&
        (s
          ? ((n.minLeft = Math.max(0, r.left)),
            (n.minTop = Math.max(0, r.top)),
            (n.maxLeft = Math.min(o.width, r.left + r.width) - n.width),
            (n.maxTop = Math.min(o.height, r.top + r.height) - n.height))
          : ((n.minLeft = 0),
            (n.minTop = 0),
            (n.maxLeft = o.width - n.width),
            (n.maxTop = o.height - n.height)));
    },
    renderCropBox: function () {
      var t = this.options,
        i = this.containerData,
        e = this.cropBoxData;
      (e.width > e.maxWidth || e.width < e.minWidth) && (e.left = e.oldLeft),
        (e.height > e.maxHeight || e.height < e.minHeight) &&
          (e.top = e.oldTop),
        (e.width = Math.min(Math.max(e.width, e.minWidth), e.maxWidth)),
        (e.height = Math.min(Math.max(e.height, e.minHeight), e.maxHeight)),
        this.limitCropBox(!1, !0),
        (e.left = Math.min(Math.max(e.left, e.minLeft), e.maxLeft)),
        (e.top = Math.min(Math.max(e.top, e.minTop), e.maxTop)),
        (e.oldLeft = e.left),
        (e.oldTop = e.top),
        t.movable &&
          t.cropBoxMovable &&
          lt(
            this.face,
            ct,
            e.width >= i.width && e.height >= i.height ? pe : Lt
          ),
        W(
          this.cropBox,
          x(
            { width: e.width, height: e.height },
            ht({ translateX: e.left, translateY: e.top })
          )
        ),
        this.cropped && this.limited && this.limitCanvas(!0, !0),
        this.disabled || this.output();
    },
    output: function () {
      this.preview(), et(this.element, Ot, this.getData());
    }
  },
  yi = {
    initPreview: function () {
      var t = this.element,
        i = this.crossOrigin,
        e = this.options.preview,
        o = i ? this.crossOriginUrl : this.url,
        r = t.alt || "The image to preview",
        n = document.createElement("img");
      if (
        (i && (n.crossOrigin = i),
        (n.src = o),
        (n.alt = r),
        this.viewBox.appendChild(n),
        (this.viewBoxImage = n),
        !!e)
      ) {
        var s = e;
        typeof e == "string"
          ? (s = t.ownerDocument.querySelectorAll(e))
          : e.querySelector && (s = [e]),
          (this.previews = s),
          E(s, function (f) {
            var l = document.createElement("img");
            lt(f, ut, {
              width: f.offsetWidth,
              height: f.offsetHeight,
              html: f.innerHTML
            }),
              i && (l.crossOrigin = i),
              (l.src = o),
              (l.alt = r),
              (l.style.cssText =
                'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"'),
              (f.innerHTML = ""),
              f.appendChild(l);
          });
      }
    },
    resetPreview: function () {
      E(this.previews, function (t) {
        var i = Rt(t, ut);
        W(t, { width: i.width, height: i.height }),
          (t.innerHTML = i.html),
          si(t, ut);
      });
    },
    preview: function () {
      var t = this.imageData,
        i = this.canvasData,
        e = this.cropBoxData,
        o = e.width,
        r = e.height,
        n = t.width,
        s = t.height,
        f = e.left - i.left - t.left,
        l = e.top - i.top - t.top;
      !this.cropped ||
        this.disabled ||
        (W(
          this.viewBoxImage,
          x(
            { width: n, height: s },
            ht(x({ translateX: -f, translateY: -l }, t))
          )
        ),
        E(this.previews, function (h) {
          var c = Rt(h, ut),
            u = c.width,
            m = c.height,
            g = u,
            b = m,
            v = 1;
          o && ((v = u / o), (b = r * v)),
            r && b > m && ((v = m / r), (g = o * v), (b = m)),
            W(h, { width: g, height: b }),
            W(
              h.getElementsByTagName("img")[0],
              x(
                { width: n * v, height: s * v },
                ht(x({ translateX: -f * v, translateY: -l * v }, t))
              )
            );
        }));
    }
  },
  xi = {
    bind: function () {
      var t = this.element,
        i = this.options,
        e = this.cropper;
      A(i.cropstart) && I(t, St, i.cropstart),
        A(i.cropmove) && I(t, At, i.cropmove),
        A(i.cropend) && I(t, Nt, i.cropend),
        A(i.crop) && I(t, Ot, i.crop),
        A(i.zoom) && I(t, _t, i.zoom),
        I(e, Qt, (this.onCropStart = this.cropStart.bind(this))),
        i.zoomable &&
          i.zoomOnWheel &&
          I(e, ae, (this.onWheel = this.wheel.bind(this)), {
            passive: !1,
            capture: !0
          }),
        i.toggleDragModeOnDblclick &&
          I(e, Kt, (this.onDblclick = this.dblclick.bind(this))),
        I(t.ownerDocument, Jt, (this.onCropMove = this.cropMove.bind(this))),
        I(t.ownerDocument, te, (this.onCropEnd = this.cropEnd.bind(this))),
        i.responsive && I(window, ie, (this.onResize = this.resize.bind(this)));
    },
    unbind: function () {
      var t = this.element,
        i = this.options,
        e = this.cropper;
      A(i.cropstart) && k(t, St, i.cropstart),
        A(i.cropmove) && k(t, At, i.cropmove),
        A(i.cropend) && k(t, Nt, i.cropend),
        A(i.crop) && k(t, Ot, i.crop),
        A(i.zoom) && k(t, _t, i.zoom),
        k(e, Qt, this.onCropStart),
        i.zoomable &&
          i.zoomOnWheel &&
          k(e, ae, this.onWheel, { passive: !1, capture: !0 }),
        i.toggleDragModeOnDblclick && k(e, Kt, this.onDblclick),
        k(t.ownerDocument, Jt, this.onCropMove),
        k(t.ownerDocument, te, this.onCropEnd),
        i.responsive && k(window, ie, this.onResize);
    }
  },
  Di = {
    resize: function () {
      if (!this.disabled) {
        var t = this.options,
          i = this.container,
          e = this.containerData,
          o = i.offsetWidth / e.width,
          r = i.offsetHeight / e.height,
          n = Math.abs(o - 1) > Math.abs(r - 1) ? o : r;
        if (n !== 1) {
          var s, f;
          t.restore &&
            ((s = this.getCanvasData()), (f = this.getCropBoxData())),
            this.render(),
            t.restore &&
              (this.setCanvasData(
                E(s, function (l, h) {
                  s[h] = l * n;
                })
              ),
              this.setCropBoxData(
                E(f, function (l, h) {
                  f[h] = l * n;
                })
              ));
        }
      }
    },
    dblclick: function () {
      this.disabled ||
        this.options.dragMode === me ||
        this.setDragMode(ni(this.dragBox, Ct) ? ge : zt);
    },
    wheel: function (t) {
      var i = this,
        e = Number(this.options.wheelZoomRatio) || 0.1,
        o = 1;
      this.disabled ||
        (t.preventDefault(),
        !this.wheeling &&
          ((this.wheeling = !0),
          setTimeout(function () {
            i.wheeling = !1;
          }, 50),
          t.deltaY
            ? (o = t.deltaY > 0 ? 1 : -1)
            : t.wheelDelta
            ? (o = -t.wheelDelta / 120)
            : t.detail && (o = t.detail > 0 ? 1 : -1),
          this.zoom(-o * e, t)));
    },
    cropStart: function (t) {
      var i = t.buttons,
        e = t.button;
      if (
        !(
          this.disabled ||
          ((t.type === "mousedown" ||
            (t.type === "pointerdown" && t.pointerType === "mouse")) &&
            ((d(i) && i !== 1) || (d(e) && e !== 0) || t.ctrlKey))
        )
      ) {
        var o = this.options,
          r = this.pointers,
          n;
        t.changedTouches
          ? E(t.changedTouches, function (s) {
              r[s.identifier] = pt(s);
            })
          : (r[t.pointerId || 0] = pt(t)),
          Object.keys(r).length > 1 && o.zoomable && o.zoomOnTouch
            ? (n = de)
            : (n = Rt(t.target, ct)),
          !!qe.test(n) &&
            et(this.element, St, { originalEvent: t, action: n }) !== !1 &&
            (t.preventDefault(),
            (this.action = n),
            (this.cropping = !1),
            n === ue && ((this.cropping = !0), O(this.dragBox, gt)));
      }
    },
    cropMove: function (t) {
      var i = this.action;
      if (!(this.disabled || !i)) {
        var e = this.pointers;
        t.preventDefault(),
          et(this.element, At, { originalEvent: t, action: i }) !== !1 &&
            (t.changedTouches
              ? E(t.changedTouches, function (o) {
                  x(e[o.identifier] || {}, pt(o, !0));
                })
              : x(e[t.pointerId || 0] || {}, pt(t, !0)),
            this.change(t));
      }
    },
    cropEnd: function (t) {
      if (!this.disabled) {
        var i = this.action,
          e = this.pointers;
        t.changedTouches
          ? E(t.changedTouches, function (o) {
              delete e[o.identifier];
            })
          : delete e[t.pointerId || 0],
          i &&
            (t.preventDefault(),
            Object.keys(e).length || (this.action = ""),
            this.cropping &&
              ((this.cropping = !1),
              J(this.dragBox, gt, this.cropped && this.options.modal)),
            et(this.element, Nt, { originalEvent: t, action: i }));
      }
    }
  },
  Ei = {
    change: function (t) {
      var i = this.options,
        e = this.canvasData,
        o = this.containerData,
        r = this.cropBoxData,
        n = this.pointers,
        s = this.action,
        f = i.aspectRatio,
        l = r.left,
        h = r.top,
        c = r.width,
        u = r.height,
        m = l + c,
        g = h + u,
        b = 0,
        v = 0,
        M = o.width,
        T = o.height,
        D = !0,
        Y;
      !f && t.shiftKey && (f = c && u ? c / u : 1),
        this.limited &&
          ((b = r.minLeft),
          (v = r.minTop),
          (M = b + Math.min(o.width, e.width, e.left + e.width)),
          (T = v + Math.min(o.height, e.height, e.top + e.height)));
      var _ = n[Object.keys(n)[0]],
        p = { x: _.endX - _.startX, y: _.endY - _.startY },
        w = function (R) {
          switch (R) {
            case G:
              m + p.x > M && (p.x = M - m);
              break;
            case F:
              l + p.x < b && (p.x = b - l);
              break;
            case H:
              h + p.y < v && (p.y = v - h);
              break;
            case K:
              g + p.y > T && (p.y = T - g);
              break;
          }
        };
      switch (s) {
        case Lt:
          (l += p.x), (h += p.y);
          break;
        case G:
          if (p.x >= 0 && (m >= M || (f && (h <= v || g >= T)))) {
            D = !1;
            break;
          }
          w(G),
            (c += p.x),
            c < 0 && ((s = F), (c = -c), (l -= c)),
            f && ((u = c / f), (h += (r.height - u) / 2));
          break;
        case H:
          if (p.y <= 0 && (h <= v || (f && (l <= b || m >= M)))) {
            D = !1;
            break;
          }
          w(H),
            (u -= p.y),
            (h += p.y),
            u < 0 && ((s = K), (u = -u), (h -= u)),
            f && ((c = u * f), (l += (r.width - c) / 2));
          break;
        case F:
          if (p.x <= 0 && (l <= b || (f && (h <= v || g >= T)))) {
            D = !1;
            break;
          }
          w(F),
            (c -= p.x),
            (l += p.x),
            c < 0 && ((s = G), (c = -c), (l -= c)),
            f && ((u = c / f), (h += (r.height - u) / 2));
          break;
        case K:
          if (p.y >= 0 && (g >= T || (f && (l <= b || m >= M)))) {
            D = !1;
            break;
          }
          w(K),
            (u += p.y),
            u < 0 && ((s = H), (u = -u), (h -= u)),
            f && ((c = u * f), (l += (r.width - c) / 2));
          break;
        case it:
          if (f) {
            if (p.y <= 0 && (h <= v || m >= M)) {
              D = !1;
              break;
            }
            w(H), (u -= p.y), (h += p.y), (c = u * f);
          } else
            w(H),
              w(G),
              p.x >= 0
                ? m < M
                  ? (c += p.x)
                  : p.y <= 0 && h <= v && (D = !1)
                : (c += p.x),
              p.y <= 0
                ? h > v && ((u -= p.y), (h += p.y))
                : ((u -= p.y), (h += p.y));
          c < 0 && u < 0
            ? ((s = nt), (u = -u), (c = -c), (h -= u), (l -= c))
            : c < 0
            ? ((s = at), (c = -c), (l -= c))
            : u < 0 && ((s = rt), (u = -u), (h -= u));
          break;
        case at:
          if (f) {
            if (p.y <= 0 && (h <= v || l <= b)) {
              D = !1;
              break;
            }
            w(H), (u -= p.y), (h += p.y), (c = u * f), (l += r.width - c);
          } else
            w(H),
              w(F),
              p.x <= 0
                ? l > b
                  ? ((c -= p.x), (l += p.x))
                  : p.y <= 0 && h <= v && (D = !1)
                : ((c -= p.x), (l += p.x)),
              p.y <= 0
                ? h > v && ((u -= p.y), (h += p.y))
                : ((u -= p.y), (h += p.y));
          c < 0 && u < 0
            ? ((s = rt), (u = -u), (c = -c), (h -= u), (l -= c))
            : c < 0
            ? ((s = it), (c = -c), (l -= c))
            : u < 0 && ((s = nt), (u = -u), (h -= u));
          break;
        case nt:
          if (f) {
            if (p.x <= 0 && (l <= b || g >= T)) {
              D = !1;
              break;
            }
            w(F), (c -= p.x), (l += p.x), (u = c / f);
          } else
            w(K),
              w(F),
              p.x <= 0
                ? l > b
                  ? ((c -= p.x), (l += p.x))
                  : p.y >= 0 && g >= T && (D = !1)
                : ((c -= p.x), (l += p.x)),
              p.y >= 0 ? g < T && (u += p.y) : (u += p.y);
          c < 0 && u < 0
            ? ((s = it), (u = -u), (c = -c), (h -= u), (l -= c))
            : c < 0
            ? ((s = rt), (c = -c), (l -= c))
            : u < 0 && ((s = at), (u = -u), (h -= u));
          break;
        case rt:
          if (f) {
            if (p.x >= 0 && (m >= M || g >= T)) {
              D = !1;
              break;
            }
            w(G), (c += p.x), (u = c / f);
          } else
            w(K),
              w(G),
              p.x >= 0
                ? m < M
                  ? (c += p.x)
                  : p.y >= 0 && g >= T && (D = !1)
                : (c += p.x),
              p.y >= 0 ? g < T && (u += p.y) : (u += p.y);
          c < 0 && u < 0
            ? ((s = at), (u = -u), (c = -c), (h -= u), (l -= c))
            : c < 0
            ? ((s = nt), (c = -c), (l -= c))
            : u < 0 && ((s = it), (u = -u), (h -= u));
          break;
        case pe:
          this.move(p.x, p.y), (D = !1);
          break;
        case de:
          this.zoom(ci(n), t), (D = !1);
          break;
        case ue:
          if (!p.x || !p.y) {
            D = !1;
            break;
          }
          (Y = De(this.cropper)),
            (l = _.startX - Y.left),
            (h = _.startY - Y.top),
            (c = r.minWidth),
            (u = r.minHeight),
            p.x > 0
              ? (s = p.y > 0 ? rt : it)
              : p.x < 0 && ((l -= c), (s = p.y > 0 ? nt : at)),
            p.y < 0 && (h -= u),
            this.cropped ||
              (L(this.cropBox, S),
              (this.cropped = !0),
              this.limited && this.limitCropBox(!0, !0));
          break;
      }
      D &&
        ((r.width = c),
        (r.height = u),
        (r.left = l),
        (r.top = h),
        (this.action = s),
        this.renderCropBox()),
        E(n, function (C) {
          (C.startX = C.endX), (C.startY = C.endY);
        });
    }
  },
  Mi = {
    crop: function () {
      return (
        this.ready &&
          !this.cropped &&
          !this.disabled &&
          ((this.cropped = !0),
          this.limitCropBox(!0, !0),
          this.options.modal && O(this.dragBox, gt),
          L(this.cropBox, S),
          this.setCropBoxData(this.initialCropBoxData)),
        this
      );
    },
    reset: function () {
      return (
        this.ready &&
          !this.disabled &&
          ((this.imageData = x({}, this.initialImageData)),
          (this.canvasData = x({}, this.initialCanvasData)),
          (this.cropBoxData = x({}, this.initialCropBoxData)),
          this.renderCanvas(),
          this.cropped && this.renderCropBox()),
        this
      );
    },
    clear: function () {
      return (
        this.cropped &&
          !this.disabled &&
          (x(this.cropBoxData, { left: 0, top: 0, width: 0, height: 0 }),
          (this.cropped = !1),
          this.renderCropBox(),
          this.limitCanvas(!0, !0),
          this.renderCanvas(),
          L(this.dragBox, gt),
          O(this.cropBox, S)),
        this
      );
    },
    replace: function (t) {
      var i =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return (
        !this.disabled &&
          t &&
          (this.isImg && (this.element.src = t),
          i
            ? ((this.url = t),
              (this.image.src = t),
              this.ready &&
                ((this.viewBoxImage.src = t),
                E(this.previews, function (e) {
                  e.getElementsByTagName("img")[0].src = t;
                })))
            : (this.isImg && (this.replaced = !0),
              (this.options.data = null),
              this.uncreate(),
              this.load(t))),
        this
      );
    },
    enable: function () {
      return (
        this.ready &&
          this.disabled &&
          ((this.disabled = !1), L(this.cropper, qt)),
        this
      );
    },
    disable: function () {
      return (
        this.ready &&
          !this.disabled &&
          ((this.disabled = !0), O(this.cropper, qt)),
        this
      );
    },
    destroy: function () {
      var t = this.element;
      return t[y]
        ? ((t[y] = void 0),
          this.isImg && this.replaced && (t.src = this.originalUrl),
          this.uncreate(),
          this)
        : this;
    },
    move: function (t) {
      var i =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t,
        e = this.canvasData,
        o = e.left,
        r = e.top;
      return this.moveTo(xt(t) ? t : o + Number(t), xt(i) ? i : r + Number(i));
    },
    moveTo: function (t) {
      var i =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t,
        e = this.canvasData,
        o = !1;
      return (
        (t = Number(t)),
        (i = Number(i)),
        this.ready &&
          !this.disabled &&
          this.options.movable &&
          (d(t) && ((e.left = t), (o = !0)),
          d(i) && ((e.top = i), (o = !0)),
          o && this.renderCanvas(!0)),
        this
      );
    },
    zoom: function (t, i) {
      var e = this.canvasData;
      return (
        (t = Number(t)),
        t < 0 ? (t = 1 / (1 - t)) : (t = 1 + t),
        this.zoomTo((e.width * t) / e.naturalWidth, null, i)
      );
    },
    zoomTo: function (t, i, e) {
      var o = this.options,
        r = this.canvasData,
        n = r.width,
        s = r.height,
        f = r.naturalWidth,
        l = r.naturalHeight;
      if (
        ((t = Number(t)), t >= 0 && this.ready && !this.disabled && o.zoomable)
      ) {
        var h = f * t,
          c = l * t;
        if (
          et(this.element, _t, {
            ratio: t,
            oldRatio: n / f,
            originalEvent: e
          }) === !1
        )
          return this;
        if (e) {
          var u = this.pointers,
            m = De(this.cropper),
            g =
              u && Object.keys(u).length
                ? li(u)
                : { pageX: e.pageX, pageY: e.pageY };
          (r.left -= (h - n) * ((g.pageX - m.left - r.left) / n)),
            (r.top -= (c - s) * ((g.pageY - m.top - r.top) / s));
        } else
          Q(i) && d(i.x) && d(i.y)
            ? ((r.left -= (h - n) * ((i.x - r.left) / n)),
              (r.top -= (c - s) * ((i.y - r.top) / s)))
            : ((r.left -= (h - n) / 2), (r.top -= (c - s) / 2));
        (r.width = h), (r.height = c), this.renderCanvas(!0);
      }
      return this;
    },
    rotate: function (t) {
      return this.rotateTo((this.imageData.rotate || 0) + Number(t));
    },
    rotateTo: function (t) {
      return (
        (t = Number(t)),
        d(t) &&
          this.ready &&
          !this.disabled &&
          this.options.rotatable &&
          ((this.imageData.rotate = t % 360), this.renderCanvas(!0, !0)),
        this
      );
    },
    scaleX: function (t) {
      var i = this.imageData.scaleY;
      return this.scale(t, d(i) ? i : 1);
    },
    scaleY: function (t) {
      var i = this.imageData.scaleX;
      return this.scale(d(i) ? i : 1, t);
    },
    scale: function (t) {
      var i =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t,
        e = this.imageData,
        o = !1;
      return (
        (t = Number(t)),
        (i = Number(i)),
        this.ready &&
          !this.disabled &&
          this.options.scalable &&
          (d(t) && ((e.scaleX = t), (o = !0)),
          d(i) && ((e.scaleY = i), (o = !0)),
          o && this.renderCanvas(!0, !0)),
        this
      );
    },
    getData: function () {
      var t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
        i = this.options,
        e = this.imageData,
        o = this.canvasData,
        r = this.cropBoxData,
        n;
      if (this.ready && this.cropped) {
        n = {
          x: r.left - o.left,
          y: r.top - o.top,
          width: r.width,
          height: r.height
        };
        var s = e.width / e.naturalWidth;
        if (
          (E(n, function (h, c) {
            n[c] = h / s;
          }),
          t)
        ) {
          var f = Math.round(n.y + n.height),
            l = Math.round(n.x + n.width);
          (n.x = Math.round(n.x)),
            (n.y = Math.round(n.y)),
            (n.width = l - n.x),
            (n.height = f - n.y);
        }
      } else n = { x: 0, y: 0, width: 0, height: 0 };
      return (
        i.rotatable && (n.rotate = e.rotate || 0),
        i.scalable && ((n.scaleX = e.scaleX || 1), (n.scaleY = e.scaleY || 1)),
        n
      );
    },
    setData: function (t) {
      var i = this.options,
        e = this.imageData,
        o = this.canvasData,
        r = {};
      if (this.ready && !this.disabled && Q(t)) {
        var n = !1;
        i.rotatable &&
          d(t.rotate) &&
          t.rotate !== e.rotate &&
          ((e.rotate = t.rotate), (n = !0)),
          i.scalable &&
            (d(t.scaleX) &&
              t.scaleX !== e.scaleX &&
              ((e.scaleX = t.scaleX), (n = !0)),
            d(t.scaleY) &&
              t.scaleY !== e.scaleY &&
              ((e.scaleY = t.scaleY), (n = !0))),
          n && this.renderCanvas(!0, !0);
        var s = e.width / e.naturalWidth;
        d(t.x) && (r.left = t.x * s + o.left),
          d(t.y) && (r.top = t.y * s + o.top),
          d(t.width) && (r.width = t.width * s),
          d(t.height) && (r.height = t.height * s),
          this.setCropBoxData(r);
      }
      return this;
    },
    getContainerData: function () {
      return this.ready ? x({}, this.containerData) : {};
    },
    getImageData: function () {
      return this.sized ? x({}, this.imageData) : {};
    },
    getCanvasData: function () {
      var t = this.canvasData,
        i = {};
      return (
        this.ready &&
          E(
            ["left", "top", "width", "height", "naturalWidth", "naturalHeight"],
            function (e) {
              i[e] = t[e];
            }
          ),
        i
      );
    },
    setCanvasData: function (t) {
      var i = this.canvasData,
        e = i.aspectRatio;
      return (
        this.ready &&
          !this.disabled &&
          Q(t) &&
          (d(t.left) && (i.left = t.left),
          d(t.top) && (i.top = t.top),
          d(t.width)
            ? ((i.width = t.width), (i.height = t.width / e))
            : d(t.height) && ((i.height = t.height), (i.width = t.height * e)),
          this.renderCanvas(!0)),
        this
      );
    },
    getCropBoxData: function () {
      var t = this.cropBoxData,
        i;
      return (
        this.ready &&
          this.cropped &&
          (i = { left: t.left, top: t.top, width: t.width, height: t.height }),
        i || {}
      );
    },
    setCropBoxData: function (t) {
      var i = this.cropBoxData,
        e = this.options.aspectRatio,
        o,
        r;
      return (
        this.ready &&
          this.cropped &&
          !this.disabled &&
          Q(t) &&
          (d(t.left) && (i.left = t.left),
          d(t.top) && (i.top = t.top),
          d(t.width) && t.width !== i.width && ((o = !0), (i.width = t.width)),
          d(t.height) &&
            t.height !== i.height &&
            ((r = !0), (i.height = t.height)),
          e && (o ? (i.height = i.width / e) : r && (i.width = i.height * e)),
          this.renderCropBox()),
        this
      );
    },
    getCroppedCanvas: function () {
      var t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!this.ready || !window.HTMLCanvasElement) return null;
      var i = this.canvasData,
        e = ui(this.image, this.imageData, i, t);
      if (!this.cropped) return e;
      var o = this.getData(),
        r = o.x,
        n = o.y,
        s = o.width,
        f = o.height,
        l = e.width / Math.floor(i.naturalWidth);
      l !== 1 && ((r *= l), (n *= l), (s *= l), (f *= l));
      var h = s / f,
        c = U({
          aspectRatio: h,
          width: t.maxWidth || 1 / 0,
          height: t.maxHeight || 1 / 0
        }),
        u = U(
          { aspectRatio: h, width: t.minWidth || 0, height: t.minHeight || 0 },
          "cover"
        ),
        m = U({
          aspectRatio: h,
          width: t.width || (l !== 1 ? e.width : s),
          height: t.height || (l !== 1 ? e.height : f)
        }),
        g = m.width,
        b = m.height;
      (g = Math.min(c.width, Math.max(u.width, g))),
        (b = Math.min(c.height, Math.max(u.height, b)));
      var v = document.createElement("canvas"),
        M = v.getContext("2d");
      (v.width = tt(g)),
        (v.height = tt(b)),
        (M.fillStyle = t.fillColor || "transparent"),
        M.fillRect(0, 0, g, b);
      var T = t.imageSmoothingEnabled,
        D = T === void 0 ? !0 : T,
        Y = t.imageSmoothingQuality;
      (M.imageSmoothingEnabled = D), Y && (M.imageSmoothingQuality = Y);
      var _ = e.width,
        p = e.height,
        w = r,
        C = n,
        R,
        P,
        j,
        V,
        X,
        B;
      w <= -s || w > _
        ? ((w = 0), (R = 0), (j = 0), (X = 0))
        : w <= 0
        ? ((j = -w), (w = 0), (R = Math.min(_, s + w)), (X = R))
        : w <= _ && ((j = 0), (R = Math.min(s, _ - w)), (X = R)),
        R <= 0 || C <= -f || C > p
          ? ((C = 0), (P = 0), (V = 0), (B = 0))
          : C <= 0
          ? ((V = -C), (C = 0), (P = Math.min(p, f + C)), (B = P))
          : C <= p && ((V = 0), (P = Math.min(f, p - C)), (B = P));
      var N = [w, C, R, P];
      if (X > 0 && B > 0) {
        var $ = g / s;
        N.push(j * $, V * $, X * $, B * $);
      }
      return (
        M.drawImage.apply(
          M,
          [e].concat(
            fe(
              N.map(function (ft) {
                return Math.floor(tt(ft));
              })
            )
          )
        ),
        v
      );
    },
    setAspectRatio: function (t) {
      var i = this.options;
      return (
        !this.disabled &&
          !xt(t) &&
          ((i.aspectRatio = Math.max(0, t) || NaN),
          this.ready &&
            (this.initCropBox(), this.cropped && this.renderCropBox())),
        this
      );
    },
    setDragMode: function (t) {
      var i = this.options,
        e = this.dragBox,
        o = this.face;
      if (this.ready && !this.disabled) {
        var r = t === zt,
          n = i.movable && t === ge;
        (t = r || n ? t : me),
          (i.dragMode = t),
          lt(e, ct, t),
          J(e, Ct, r),
          J(e, Tt, n),
          i.cropBoxMovable || (lt(o, ct, t), J(o, Ct, r), J(o, Tt, n));
      }
      return this;
    }
  },
  Ci = z.Cropper,
  Me = (function () {
    function a(t) {
      var i =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if ((Ye(this, a), !t || !Qe.test(t.tagName)))
        throw new Error(
          "The first argument is required and must be an <img> or <canvas> element."
        );
      (this.element = t),
        (this.options = x({}, ne, Q(i) && i)),
        (this.cropped = !1),
        (this.disabled = !1),
        (this.pointers = {}),
        (this.ready = !1),
        (this.reloading = !1),
        (this.replaced = !1),
        (this.sized = !1),
        (this.sizing = !1),
        this.init();
    }
    return (
      Pe(
        a,
        [
          {
            key: "init",
            value: function () {
              var i = this.element,
                e = i.tagName.toLowerCase(),
                o;
              if (!i[y]) {
                if (((i[y] = this), e === "img")) {
                  if (
                    ((this.isImg = !0),
                    (o = i.getAttribute("src") || ""),
                    (this.originalUrl = o),
                    !o)
                  )
                    return;
                  o = i.src;
                } else
                  e === "canvas" &&
                    window.HTMLCanvasElement &&
                    (o = i.toDataURL());
                this.load(o);
              }
            }
          },
          {
            key: "load",
            value: function (i) {
              var e = this;
              if (!!i) {
                (this.url = i), (this.imageData = {});
                var o = this.element,
                  r = this.options;
                if (
                  (!r.rotatable && !r.scalable && (r.checkOrientation = !1),
                  !r.checkOrientation || !window.ArrayBuffer)
                ) {
                  this.clone();
                  return;
                }
                if (Ze.test(i)) {
                  Ke.test(i) ? this.read(gi(i)) : this.clone();
                  return;
                }
                var n = new XMLHttpRequest(),
                  s = this.clone.bind(this);
                (this.reloading = !0),
                  (this.xhr = n),
                  (n.onabort = s),
                  (n.onerror = s),
                  (n.ontimeout = s),
                  (n.onprogress = function () {
                    n.getResponseHeader("content-type") !== re && n.abort();
                  }),
                  (n.onload = function () {
                    e.read(n.response);
                  }),
                  (n.onloadend = function () {
                    (e.reloading = !1), (e.xhr = null);
                  }),
                  r.checkCrossOrigin && se(i) && o.crossOrigin && (i = he(i)),
                  n.open("GET", i, !0),
                  (n.responseType = "arraybuffer"),
                  (n.withCredentials = o.crossOrigin === "use-credentials"),
                  n.send();
              }
            }
          },
          {
            key: "read",
            value: function (i) {
              var e = this.options,
                o = this.imageData,
                r = vi(i),
                n = 0,
                s = 1,
                f = 1;
              if (r > 1) {
                this.url = mi(i, re);
                var l = wi(r);
                (n = l.rotate), (s = l.scaleX), (f = l.scaleY);
              }
              e.rotatable && (o.rotate = n),
                e.scalable && ((o.scaleX = s), (o.scaleY = f)),
                this.clone();
            }
          },
          {
            key: "clone",
            value: function () {
              var i = this.element,
                e = this.url,
                o = i.crossOrigin,
                r = e;
              this.options.checkCrossOrigin &&
                se(e) &&
                (o || (o = "anonymous"), (r = he(e))),
                (this.crossOrigin = o),
                (this.crossOriginUrl = r);
              var n = document.createElement("img");
              o && (n.crossOrigin = o),
                (n.src = r || e),
                (n.alt = i.alt || "The image to crop"),
                (this.image = n),
                (n.onload = this.start.bind(this)),
                (n.onerror = this.stop.bind(this)),
                O(n, Zt),
                i.parentNode.insertBefore(n, i.nextSibling);
            }
          },
          {
            key: "start",
            value: function () {
              var i = this,
                e = this.image;
              (e.onload = null), (e.onerror = null), (this.sizing = !0);
              var o =
                  z.navigator &&
                  /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(
                    z.navigator.userAgent
                  ),
                r = function (l, h) {
                  x(i.imageData, {
                    naturalWidth: l,
                    naturalHeight: h,
                    aspectRatio: l / h
                  }),
                    (i.initialImageData = x({}, i.imageData)),
                    (i.sizing = !1),
                    (i.sized = !0),
                    i.build();
                };
              if (e.naturalWidth && !o) {
                r(e.naturalWidth, e.naturalHeight);
                return;
              }
              var n = document.createElement("img"),
                s = document.body || document.documentElement;
              (this.sizingImage = n),
                (n.onload = function () {
                  r(n.width, n.height), o || s.removeChild(n);
                }),
                (n.src = e.src),
                o ||
                  ((n.style.cssText =
                    "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;"),
                  s.appendChild(n));
            }
          },
          {
            key: "stop",
            value: function () {
              var i = this.image;
              (i.onload = null),
                (i.onerror = null),
                i.parentNode.removeChild(i),
                (this.image = null);
            }
          },
          {
            key: "build",
            value: function () {
              if (!(!this.sized || this.ready)) {
                var i = this.element,
                  e = this.options,
                  o = this.image,
                  r = i.parentNode,
                  n = document.createElement("div");
                n.innerHTML = Je;
                var s = n.querySelector(".".concat(y, "-container")),
                  f = s.querySelector(".".concat(y, "-canvas")),
                  l = s.querySelector(".".concat(y, "-drag-box")),
                  h = s.querySelector(".".concat(y, "-crop-box")),
                  c = h.querySelector(".".concat(y, "-face"));
                (this.container = r),
                  (this.cropper = s),
                  (this.canvas = f),
                  (this.dragBox = l),
                  (this.cropBox = h),
                  (this.viewBox = s.querySelector(".".concat(y, "-view-box"))),
                  (this.face = c),
                  f.appendChild(o),
                  O(i, S),
                  r.insertBefore(s, i.nextSibling),
                  this.isImg || L(o, Zt),
                  this.initPreview(),
                  this.bind(),
                  (e.initialAspectRatio =
                    Math.max(0, e.initialAspectRatio) || NaN),
                  (e.aspectRatio = Math.max(0, e.aspectRatio) || NaN),
                  (e.viewMode =
                    Math.max(0, Math.min(3, Math.round(e.viewMode))) || 0),
                  O(h, S),
                  e.guides ||
                    O(h.getElementsByClassName("".concat(y, "-dashed")), S),
                  e.center ||
                    O(h.getElementsByClassName("".concat(y, "-center")), S),
                  e.background && O(s, "".concat(y, "-bg")),
                  e.highlight || O(c, Ve),
                  e.cropBoxMovable && (O(c, Tt), lt(c, ct, Lt)),
                  e.cropBoxResizable ||
                    (O(h.getElementsByClassName("".concat(y, "-line")), S),
                    O(h.getElementsByClassName("".concat(y, "-point")), S)),
                  this.render(),
                  (this.ready = !0),
                  this.setDragMode(e.dragMode),
                  e.autoCrop && this.crop(),
                  this.setData(e.data),
                  A(e.ready) && I(i, ee, e.ready, { once: !0 }),
                  et(i, ee);
              }
            }
          },
          {
            key: "unbuild",
            value: function () {
              !this.ready ||
                ((this.ready = !1),
                this.unbind(),
                this.resetPreview(),
                this.cropper.parentNode.removeChild(this.cropper),
                L(this.element, S));
            }
          },
          {
            key: "uncreate",
            value: function () {
              this.ready
                ? (this.unbuild(), (this.ready = !1), (this.cropped = !1))
                : this.sizing
                ? ((this.sizingImage.onload = null),
                  (this.sizing = !1),
                  (this.sized = !1))
                : this.reloading
                ? ((this.xhr.onabort = null), this.xhr.abort())
                : this.image && this.stop();
            }
          }
        ],
        [
          {
            key: "noConflict",
            value: function () {
              return (window.Cropper = Ci), a;
            }
          },
          {
            key: "setDefaults",
            value: function (i) {
              x(ne, Q(i) && i);
            }
          }
        ]
      ),
      a
    );
  })();
x(Me.prototype, bi, yi, xi, Di, Ei, Mi);
const Ti = {
    aspectRatio: 16 / 9,
    zoomable: !0,
    zoomOnTouch: !0,
    zoomOnWheel: !0,
    cropBoxMovable: !0,
    cropBoxResizable: !0,
    toggleDragModeOnDblclick: !0,
    autoCrop: !0,
    background: !0,
    highlight: !0,
    center: !0,
    responsive: !0,
    restore: !0,
    checkCrossOrigin: !0,
    checkOrientation: !0,
    scalable: !0,
    modal: !0,
    guides: !0,
    movable: !0,
    rotatable: !0
  },
  Oi = {
    src: { type: String, required: !0 },
    alt: { type: String },
    width: { type: [String, Number], default: "" },
    height: { type: [String, Number], default: "360px" },
    crossorigin: { type: String || Object, default: void 0 },
    imageStyle: {
      type: Object,
      default() {
        return {};
      }
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  Ni = It({
    name: "ReCropper",
    props: Oi,
    setup(a) {
      const t = ot(null),
        i = Oe("imgElRef", null),
        e = ot(!1),
        o = Ut(() => ({
          height: a.height,
          width: a.width,
          maxWidth: "100%",
          ...a.imageStyle
        })),
        r = Ut(() => {
          const { height: s, width: f } = a;
          return {
            width: `${f}`.replace(/px/, "") + "px",
            height: `${s}`.replace(/px/, "") + "px"
          };
        });
      function n() {
        const s = q(i);
        !s ||
          (t.value = new Me(s, {
            ...Ti,
            ready: () => {
              e.value = !0;
            },
            ...a.options
          }));
      }
      return (
        Ne(() => {
          ce(() => {
            n();
          });
        }),
        {
          props: a,
          imgElRef: i,
          cropper: t,
          getWrapperStyle: r,
          getImageStyle: o
        }
      );
    },
    render() {
      return st(Se, null, [
        st(
          "div",
          {
            class: Ae({ excludeListeners: !0, excludeKeys: ["class"] }),
            style: this.getWrapperStyle
          },
          [
            st(
              "img",
              {
                ref: "imgElRef",
                src: this.props.src,
                alt: this.props.alt,
                crossorigin: this.props.crossorigin,
                style: this.getImageStyle
              },
              null
            )
          ]
        )
      ]);
    }
  }),
  Ai = _e(Ni),
  Si = Ai,
  _i = "/vue-pure-admin/assets/avatars.596f7aa0.jpg",
  Ri = a => (Be("data-v-feaf333a"), (a = a()), Le(), a),
  Ii = Ri(() =>
    Et(
      "div",
      { class: "card-header" },
      [
        Et(
          "span",
          { class: "font-medium" },
          "\u56FE\u7247\u88C1\u526A\u7EC4\u4EF6"
        )
      ],
      -1
    )
  ),
  ki = { class: "cropper-container" },
  Bi = ["src"],
  Li = ke("\u88C1\u526A"),
  zi = { key: 0 },
  Yi = It({ name: "Cropping" }),
  Pi = It({
    ...Yi,
    setup(a) {
      let t = ot(),
        i = ot(null),
        e = ot("");
      const o = () => {
        ce(() => {
          t.value.cropper.getCroppedCanvas().toBlob(r => {
            let n = new FileReader();
            (n.onloadend = s => {
              (e.value = s.target.result),
                (i.value = t.value.cropper.getData());
            }),
              n.readAsDataURL(r);
          }, "image/jpeg");
        });
      };
      return (r, n) => {
        const s = jt("el-button"),
          f = jt("el-card");
        return (
          bt(),
          Re(f, null, {
            header: yt(() => [Ii]),
            default: yt(() => [
              Et("div", ki, [
                st(
                  q(Si),
                  { ref_key: "refCropper", ref: t, width: "40vw", src: q(_i) },
                  null,
                  8,
                  ["src"]
                ),
                q(e)
                  ? (bt(),
                    Vt(
                      "img",
                      { key: 0, src: q(e), class: "croppered" },
                      null,
                      8,
                      Bi
                    ))
                  : $t("", !0)
              ]),
              st(
                s,
                { type: "primary", onClick: o },
                { default: yt(() => [Li]), _: 1 }
              ),
              q(e)
                ? (bt(),
                  Vt(
                    "p",
                    zi,
                    "\u88C1\u526A\u540E\u56FE\u7247\u4FE1\u606F\uFF1A" +
                      Ie(q(i)),
                    1
                  ))
                : $t("", !0)
            ]),
            _: 1
          })
        );
      };
    }
  });
const Hi = ze(Pi, [["__scopeId", "data-v-feaf333a"]]);
export { Hi as default };
