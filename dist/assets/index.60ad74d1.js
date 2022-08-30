import {
  d as le,
  r as w,
  av as q,
  A as a,
  b as e,
  aB as Te,
  aC as Ce,
  e as z,
  f as R,
  ar as M,
  ay as ie,
  aD as W,
  ax as ne,
  g as L,
  n as Me,
  a4 as ke,
  a0 as xe
} from "./index.69183727.js";
const Ee = () => {
    (window.cancelAnimationFrame = (() =>
      window.cancelAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      window.oCancelAnimationFrame ||
      window.msCancelAnimationFrame ||
      function (u) {
        return window.clearTimeout(u);
      })()),
      (window.requestAnimationFrame = (function () {
        return (
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function (u) {
            return window.setTimeout(u, 1e3 / 60);
          }
        );
      })());
  },
  Be = (u, m) => {
    if (u === m) return !0;
    if (u.length !== m.length) return !1;
    for (let s = 0; s < u.length; ++s) if (u[s] !== m[s]) return !1;
    return !0;
  };
function oe() {
  Array.isArray ||
    (Array.isArray = function (g) {
      return Object.prototype.toString.call(g) === "[object Array]";
    });
  let u,
    m,
    s,
    c,
    S,
    C,
    t = 1,
    i = arguments[0] || {},
    f = !1,
    b = arguments.length;
  if (
    (typeof i == "boolean" && ((f = i), (i = arguments[1] || {}), t++),
    typeof i != "object" && typeof i != "function" && (i = {}),
    t === b)
  )
    return i;
  for (; t < b; t++)
    if ((m = arguments[t]) != null)
      for (u in m)
        (s = i[u]),
          (c = m[u]),
          (S = Array.isArray(c)),
          f && c && (typeof c == "object" || S)
            ? (S
                ? ((S = !1), (C = s && Array.isArray(s) ? s : []))
                : (C = s && typeof s == "object" ? s : {}),
              (i[u] = oe(f, C, c)))
            : c !== void 0 && (i[u] = c);
  return i;
}
const De = Object.freeze(
    Object.defineProperty(
      { __proto__: null, animationFrame: Ee, arrayEqual: Be, copyObj: oe },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Oe = ["innerHTML"],
  $e = le({ name: "ReSeamlessScroll" }),
  He = le({
    ...$e,
    props: { data: { type: Array }, classOption: { type: Object } },
    emits: ["scrollEnd"],
    setup(u, { expose: m, emit: s }) {
      const c = u,
        { animationFrame: S, copyObj: C } = De;
      S();
      let t = w(0),
        i = w(0),
        f = w(0),
        b = w(0),
        g = w(0),
        A = w(0),
        k = w(0),
        x = w(""),
        y = null,
        Y = null,
        E = null,
        N = null,
        I = null,
        B = !1,
        D = "ease-in",
        { classOption: h } = c;
      h.key === void 0 && (h.key = 0);
      const U = q(`wrap${h.key}`, null),
        X = q(`slotList${h.key}`, null),
        V = q(`realBox${h.key}`, null);
      let G = a(() => e(t) < 0),
        J = a(() => Math.abs(e(t)) < e(A) - e(g)),
        ae = a(() => ({
          step: 1,
          limitMoveNum: 5,
          hoverStop: !0,
          direction: "top",
          openTouch: !0,
          singleHeight: 0,
          singleWidth: 0,
          waitTime: 1e3,
          switchOffset: 30,
          autoPlay: !0,
          navigation: !1,
          switchSingleStep: 134,
          switchDelay: 400,
          switchDisabledClass: "disabled",
          isSingleRemUnit: !1
        })),
        l = a(() => C({}, e(ae), h));
      const re = a(() => (e(G) ? "" : e(l).switchDisabledClass));
      let se = a(() => (e(J) ? "" : e(l).switchDisabledClass)),
        ue = a(() => ({
          position: "absolute",
          margin: `${e(b) / 2}px 0 0 -${e(l).switchOffset}px`,
          transform: "translate(-100%,-50%)"
        })),
        ce = a(() => ({
          position: "absolute",
          margin: `${e(b) / 2}px 0 0 ${e(g) + e(l).switchOffset}px`,
          transform: "translateY(-50%)"
        })),
        O = a(() => e(l).direction !== "bottom" && e(l).direction !== "top"),
        K = a(() =>
          e(O) ? { float: "left", overflow: "hidden" } : { overflow: "hidden" }
        ),
        fe = a(() => ({
          transform: `translate(${e(t)}px,${e(i)}px)`,
          transition: `all ${D} ${e(f)}ms`,
          overflow: "hidden"
        })),
        $ = a(() => e(l).navigation),
        H = a(() => (e($) ? !1 : e(l).autoPlay)),
        Q = a(() => c.data.length >= e(l).limitMoveNum),
        Z = a(() => e(l).hoverStop && e(H) && e(Q)),
        P = a(() => e(l).openTouch),
        ee = a(() =>
          e(l).isSingleRemUnit
            ? parseInt(
                window.getComputedStyle(document.documentElement, null).fontSize
              )
            : 1
        ),
        _ = a(() => e(l).singleWidth * e(ee)),
        j = a(() => e(l).singleHeight * e(ee)),
        p = a(() => {
          let n,
            o = e(l).step;
          if ((e(O) ? (n = e(_)) : (n = e(j)), n > 0 && n % o > 0))
            throw "\u5982\u679C\u8BBE\u7F6E\u4E86\u5355\u6B65\u6EDA\u52A8\uFF0Cstep\u9700\u662F\u5355\u6B65\u5927\u5C0F\u7684\u7EA6\u6570\uFF0C\u5426\u5219\u65E0\u6CD5\u4FDD\u8BC1\u5355\u6B65\u6EDA\u52A8\u7ED3\u675F\u7684\u4F4D\u7F6E\u662F\u5426\u51C6\u786E";
          return o;
        });
      function me() {
        (t.value = 0), (i.value = 0), F(), te();
      }
      function he() {
        if (!!e(G)) {
          if (Math.abs(e(t)) < e(l).switchSingleStep) {
            t.value = 0;
            return;
          }
          t.value += e(l).switchSingleStep;
        }
      }
      function de() {
        if (!!e(J)) {
          if (e(A) - e(g) + e(t) < e(l).switchSingleStep) {
            t.value = e(g) - e(A);
            return;
          }
          t.value -= e(l).switchSingleStep;
        }
      }
      function F() {
        cancelAnimationFrame(Y || "");
      }
      function pe(n) {
        if (!e(P)) return;
        let o;
        const r = n.targetTouches[0],
          { waitTime: d, singleHeight: T, singleWidth: Fe } = e(l);
        (E = { x: r.pageX, y: r.pageY }),
          (N = e(i)),
          (I = e(t)),
          !!T && !!Fe
            ? (o && clearTimeout(o),
              (o = setTimeout(() => {
                F();
              }, d + 20)))
            : F();
      }
      function ve(n) {
        if (!e(P) || n.targetTouches.length > 1 || (n.scale && n.scale !== 1))
          return;
        const o = n.targetTouches[0],
          { direction: r } = e(l);
        let d = { x: o.pageX - E.x, y: o.pageY - E.y };
        n.preventDefault();
        const T = Math.abs(d.x) < Math.abs(d.y) ? 1 : 0;
        (T === 1 && r === "bottom") || (T === 1 && r === "top")
          ? (i.value = N + d.y)
          : ((T === 0 && r === "left") || (T === 0 && r === "right")) &&
            (t.value = I + d.x);
      }
      function we() {
        if (!e(P)) return;
        let n;
        const o = e(l).direction;
        if (((f.value = 50), o === "top")) e(i) > 0 && (i.value = 0);
        else if (o === "bottom") {
          let r = (e(k) / 2) * -1;
          e(i) < r && (i.value = r);
        } else if (o === "left") e(t) > 0 && (t.value = 0);
        else if (o === "right") {
          let r = e(A) * -1;
          e(t) < r && (t.value = r);
        }
        n && clearTimeout(n),
          (n = setTimeout(() => {
            (f.value = 0), v();
          }, e(f)));
      }
      function ge() {
        e(Z) && be();
      }
      function ye() {
        e(Z) && Se();
      }
      function v() {
        B ||
          (Y = requestAnimationFrame(function () {
            const n = e(k) / 2,
              o = e(A) / 2;
            let { direction: r, waitTime: d } = e(l);
            r === "top"
              ? (Math.abs(e(i)) >= n && (s("scrollEnd"), (i.value = 0)),
                (i.value -= p.value))
              : r === "bottom"
              ? (e(i) >= 0 && (s("scrollEnd"), (i.value = n * -1)),
                (i.value += p.value))
              : r === "left"
              ? (Math.abs(e(t)) >= o && (s("scrollEnd"), (t.value = 0)),
                (t.value -= p.value))
              : r === "right" &&
                (e(t) >= 0 && (s("scrollEnd"), (t.value = o * -1)),
                (t.value += p.value)),
              y && clearTimeout(y),
              e(j)
                ? Math.abs(e(i)) % e(j) < e(p)
                  ? (y = setTimeout(() => {
                      v();
                    }, d))
                  : v()
                : e(_) && Math.abs(e(t)) % e(_) < e(p)
                ? (y = setTimeout(() => {
                    v();
                  }, d))
                : v();
          }));
      }
      function te() {
        Me(() => {
          const { switchDelay: n } = e(l);
          if (((x.value = ""), e(O))) {
            (b.value = e(U).offsetHeight), (g.value = e(U).offsetWidth);
            let o = e(X).offsetWidth;
            e(H) && (o = o * 2 + 1),
              (e(V).style.width = o + "px"),
              (A.value = o);
          }
          if (e(H)) (D = "ease-in"), (f.value = 0);
          else {
            (D = "linear"), (f.value = n);
            return;
          }
          e(Q)
            ? ((x.value = e(X).innerHTML),
              setTimeout(() => {
                var o;
                (k.value = (o = e(V)) == null ? void 0 : o.offsetHeight), v();
              }, 0))
            : (F(), (i.value = t.value = 0));
        });
      }
      function Se() {
        (B = !1), v();
      }
      function be() {
        (B = !0), y && clearTimeout(y), F();
      }
      function Ae(n) {
        e(l).direction === "left" ||
          e(l).direction === "right" ||
          ke(() => {
            n.deltaY > 0 ? (i.value -= p.value) : (i.value += p.value);
          }, 50)();
      }
      return (
        Te(() => {
          te();
        }),
        Ce(() => {
          F(), clearTimeout(y);
        }),
        m({ reset: me }),
        (n, o) => (
          z(),
          R(
            "div",
            { ref: "wrap" + e(h).key },
            [
              e($)
                ? (z(),
                  R(
                    "div",
                    { key: 0, style: M(e(ue)), class: ie(e(re)), onClick: he },
                    [W(n.$slots, "left-switch")],
                    6
                  ))
                : ne("", !0),
              e($)
                ? (z(),
                  R(
                    "div",
                    { key: 1, style: M(e(ce)), class: ie(e(se)), onClick: de },
                    [W(n.$slots, "right-switch")],
                    6
                  ))
                : ne("", !0),
              L(
                "div",
                {
                  ref: "realBox" + e(h).key,
                  style: M(e(fe)),
                  onMouseenter: ge,
                  onMouseleave: ye,
                  onTouchstartPassive: pe,
                  onTouchmovePassive: ve,
                  onTouchend: we,
                  onMousewheelPassive: Ae
                },
                [
                  L(
                    "div",
                    { ref: "slotList" + e(h).key, style: M(e(K)) },
                    [W(n.$slots, "default")],
                    4
                  ),
                  L("div", { innerHTML: e(x), style: M(e(K)) }, null, 12, Oe)
                ],
                36
              )
            ],
            512
          )
        )
      );
    }
  }),
  Pe = xe(He),
  je = Pe;
export { je as S };
