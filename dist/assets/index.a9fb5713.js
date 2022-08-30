import {
  d as v,
  A as R,
  k as l,
  b as s,
  r as p,
  w as E,
  I as O,
  L as V,
  t as k,
  h as H,
  e as U,
  i as W,
  j as o,
  g as r,
  ak as X,
  al as Y,
  _ as G
} from "./index.69183727.js";
const L = v({
  name: "Resizer",
  props: {
    split: { type: String, required: !0 },
    className: { type: String, default: "" }
  },
  setup(e) {
    const a = R(() =>
      ["splitter-pane-resizer", e.split, e.className].join(" ")
    );
    return () => l("div", { class: s(a) }, null);
  }
});
const x = v({
    name: "SplitPane",
    components: { resizer: L },
    props: { splitSet: { type: Object, require: !0 } },
    emits: ["resize"],
    setup(e, a) {
      var m, S, g, w, P;
      const i = p(!1),
        u = p(!1),
        n = p((m = e.splitSet) == null ? void 0 : m.defaultPercent),
        d =
          ((S = e.splitSet) == null ? void 0 : S.split) === "vertical"
            ? "width"
            : "height",
        T =
          ((g = e.splitSet) == null ? void 0 : g.split) === "vertical"
            ? "left"
            : "top",
        B = p([
          "splitter-pane splitter-paneL",
          (w = e.splitSet) == null ? void 0 : w.split
        ]),
        I = p([
          "splitter-pane splitter-paneR",
          (P = e.splitSet) == null ? void 0 : P.split
        ]),
        N = R(() => {
          var t;
          return i.value
            ? ((t = e.splitSet) == null ? void 0 : t.split) === "vertical"
              ? { cursor: "col-resize" }
              : { cursor: "row-resize" }
            : { cursor: "default" };
        }),
        $ = () => {
          u.value || ((n.value = 50), a.emit("resize", n.value));
        },
        j = () => {
          (i.value = !0), (u.value = !1);
        },
        F = () => {
          i.value = !1;
        },
        q = t => {
          var y, z, C, M, b;
          if (((t.buttons === 0 || t.which === 0) && (i.value = !1), i.value)) {
            let _ = 0,
              c = t.currentTarget;
            if (((y = e.splitSet) == null ? void 0 : y.split) === "vertical")
              for (; c; ) (_ += c.offsetLeft), (c = c.offsetParent);
            else for (; c; ) (_ += c.offsetTop), (c = c.offsetParent);
            const A =
                ((z = e.splitSet) == null ? void 0 : z.split) === "vertical"
                  ? t.pageX
                  : t.pageY,
              D =
                ((C = e.splitSet) == null ? void 0 : C.split) === "vertical"
                  ? t.currentTarget.offsetWidth
                  : t.currentTarget.offsetHeight,
              h = Math.floor(((A - _) / D) * 1e4) / 100;
            h > ((M = e.splitSet) == null ? void 0 : M.minPercent) &&
              h < 100 - ((b = e.splitSet) == null ? void 0 : b.minPercent) &&
              (n.value = h),
              a.emit("resize", n.value),
              (u.value = !0);
          }
        };
      return () => {
        var t;
        return l(V, null, [
          l(
            "div",
            {
              class: "vue-splitter-container clearfix",
              style: s(N),
              onMouseup: () => F(),
              onMousemove: () => q(event)
            },
            [
              l("div", { class: s(B), style: { [s(d)]: s(n) + "%" } }, [
                a.slots.paneL()
              ]),
              l(
                L,
                {
                  style: `${s([T])}:${s(n)}%`,
                  split: (t = e.splitSet) == null ? void 0 : t.split,
                  onMousedown: () => j(),
                  onClick: () => $()
                },
                null
              ),
              l("div", { class: s(I), style: { [s(d)]: 100 - s(n) + "%" } }, [
                a.slots.paneR()
              ]),
              E(l("div", { class: "vue-splitter-container-mask" }, null), [
                [O, s(i)]
              ])
            ]
          )
        ]);
      };
    }
  }),
  f = e => (X("data-v-120be469"), (e = e()), Y(), e),
  J = f(() =>
    r(
      "div",
      { class: "card-header" },
      [
        r(
          "span",
          { class: "font-medium" },
          "\u5207\u5272\u9762\u677F\u7EC4\u4EF6"
        )
      ],
      -1
    )
  ),
  K = { class: "split-pane" },
  Q = f(() => r("div", { class: "dv-a" }, "A", -1)),
  Z = f(() => r("div", { class: "dv-b" }, "B", -1)),
  ee = f(() => r("div", { class: "dv-c" }, "C", -1)),
  te = v({ name: "SplitPane" }),
  se = v({
    ...te,
    setup(e) {
      const a = k({ minPercent: 20, defaultPercent: 40, split: "vertical" }),
        i = k({ minPercent: 20, defaultPercent: 40, split: "horizontal" });
      return (u, n) => {
        const d = H("el-card");
        return (
          U(),
          W(d, null, {
            header: o(() => [J]),
            default: o(() => [
              r("div", K, [
                l(
                  s(x),
                  { splitSet: a },
                  {
                    paneL: o(() => [Q]),
                    paneR: o(() => [
                      l(
                        s(x),
                        { splitSet: i },
                        { paneL: o(() => [Z]), paneR: o(() => [ee]), _: 1 },
                        8,
                        ["splitSet"]
                      )
                    ]),
                    _: 1
                  },
                  8,
                  ["splitSet"]
                )
              ])
            ]),
            _: 1
          })
        );
      };
    }
  });
const ae = G(se, [["__scopeId", "data-v-120be469"]]);
export { ae as default };
