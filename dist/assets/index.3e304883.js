import {
  d as w,
  A,
  K as p,
  n as D,
  k as o,
  b as q,
  L as I,
  aE as B,
  aF as c,
  aG as d,
  V as j,
  a0 as z,
  r as E,
  h as G,
  e as C,
  f as F,
  Y as T,
  i as Y,
  j as L,
  g as N,
  Z as R,
  ax as Z,
  _ as J
} from "./index.69183727.js";
const i = "stay",
  h = "hs-on",
  f = "hs-off",
  _ = "hs-range",
  g = "both-left-sides",
  S = "both-right-sides";
let H = "right",
  b = [],
  s = [];
const O = {
    HsKey: { type: Number || String, default: 0 },
    disabled: { type: Boolean, default: !1 },
    value: { type: Number, default: 0 },
    max: {
      type: Array,
      default() {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      }
    },
    echo: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  P = w({
    name: "ReSelector",
    props: O,
    emits: ["selectedVal"],
    setup(l, { emit: m }) {
      const a = j(),
        y = l.value,
        v = A(() => l.disabled),
        x = A(() => {
          const e = [];
          let t = 0,
            n = y;
          for (y !== Math.floor(y) && n--; t < n; t++) e.push(h);
          for (; t < l.max.length; t++) e.push(f);
          return e;
        }),
        K = e => {
          if (!l.disabled) {
            if (s.length === 1) {
              b.length < 1 && b.push({ index: e });
              let t = b[0].index;
              if (e > t)
                for (
                  H = "right",
                    B(
                      !1,
                      S,
                      document.querySelector(".hs-select__item" + s[0].index)
                    );
                  e >= t;

                )
                  c(document.querySelector(".hs-select__item" + t), _), t++;
              else
                for (
                  H = "left",
                    B(
                      !0,
                      S,
                      document.querySelector(".hs-select__item" + s[0].index)
                    );
                  e <= t;

                )
                  c(document.querySelector(".hs-select__item" + t), _), t--;
            }
            c(document.querySelector("." + f + e), h);
          }
        },
        u = e => {
          if (l.disabled) return;
          const t = document.querySelector("." + f + e);
          if (t.className.includes(i)) return !1;
          if ((d(t, h), s.length === 1)) {
            const n = b[0].index;
            if (e >= n)
              for (let r = 0; r <= e; r++)
                d(document.querySelector(".hs-select__item" + r), _);
            else
              for (; e <= n; )
                d(document.querySelector(".hs-select__item" + e), _), e++;
          }
        },
        V = (e, t) => {
          if (l.disabled) return;
          const n = s.length;
          n < 2
            ? (s.push({ item: t, index: e }),
              c(document.querySelector("." + f + e), i),
              c(document.querySelector(".hs-select__item" + s[0].index), g),
              s[1] &&
                (H === "right"
                  ? c(
                      document.querySelector(".hs-select__item" + s[1].index),
                      S
                    )
                  : c(
                      document.querySelector(".hs-select__item" + s[1].index),
                      g
                    )),
              n === 1 &&
                (H === "right"
                  ? m("selectedVal", {
                      left: s[0].item,
                      right: s[1].item,
                      whole: s
                    })
                  : m("selectedVal", {
                      left: s[1].item,
                      right: s[0].item,
                      whole: s
                    })))
            : D(() => {
                s.forEach(r => {
                  d(document.querySelector("." + f + r.index), h, i),
                    d(
                      document.querySelector(".hs-select__item" + r.index),
                      g,
                      S
                    );
                }),
                  (s = []),
                  (b = []);
                for (let r = 0; r <= l.max.length; r++) {
                  const $ = document.querySelector(".hs-select__item" + r);
                  $ && d($, _);
                }
                s.push({ item: t, index: e }),
                  c(document.querySelector("." + f + e), i),
                  c(document.querySelector(".hs-select__item" + s[0].index), g);
              });
        },
        M = e => {
          if (e.length !== 0) {
            if (e.length > 2 || e.length === 1)
              throw "\u4F20\u5165\u7684\u6570\u7EC4\u957F\u5EA6\u5FC5\u987B\u662F2";
            for (
              e.sort((t, n) => t - n),
                c(a.refs["hsdiv" + l.HsKey + e[0]], h, i),
                c(a.refs["hstd" + l.HsKey + e[0]], g),
                c(a.refs["hsdiv" + l.HsKey + e[1]], h, i),
                c(a.refs["hstd" + l.HsKey + e[1]], S);
              e[1] >= e[0];

            )
              c(a.refs["hstd" + l.HsKey + e[0]], _), e[0]++;
          }
        };
      return (
        p(() => {
          D(() => {
            M(l.echo);
          });
        }),
        () =>
          o(I, null, [
            o("table", { cellspacing: "0", cellpadding: "0" }, [
              o("tbody", null, [
                o("tr", null, [
                  l.max.map((e, t) =>
                    o(
                      "td",
                      {
                        "data-index": l.HsKey,
                        ref: `hstd${l.HsKey}${t}`,
                        class: `hs-select__item${t}`,
                        onMousemove: () => K(t),
                        onMouseleave: () => u(t),
                        onClick: () => V(t, e),
                        style: {
                          cursor: q(v) ? "auto" : "pointer",
                          textAlign: "center"
                        },
                        key: t
                      },
                      [
                        o(
                          "div",
                          {
                            ref: `hsdiv${l.HsKey}${t}`,
                            class: `hs-item ${[q(x)[t] + t]}`
                          },
                          [o("span", null, [e])]
                        )
                      ]
                    )
                  )
                ])
              ])
            ])
          ])
      );
    }
  }),
  Q = z(P),
  U = Q,
  W = { class: "card-header" },
  X = { key: 0 },
  k = w({ name: "Selector" }),
  ee = w({
    ...k,
    setup(l) {
      let m = E(""),
        a = E([
          { title: "\u57FA\u672C\u4F7F\u7528", echo: [], disabled: !1 },
          { title: "\u56DE\u663E\u6A21\u5F0F", echo: [2, 7], disabled: !0 }
        ]);
      const y = ({ left: v, right: x }) => {
        m.value = `${v}-${x}`;
      };
      return (v, x) => {
        const K = G("el-card");
        return (
          C(),
          F("div", null, [
            (C(!0),
            F(
              I,
              null,
              T(
                q(a),
                (u, V) => (
                  C(),
                  Y(
                    K,
                    { class: "box-card", key: V },
                    {
                      header: L(() => [
                        N("div", W, [N("span", null, R(u.title), 1)])
                      ]),
                      default: L(() => [
                        o(
                          q(U),
                          {
                            HsKey: V,
                            echo: u.echo,
                            onSelectedVal: y,
                            disabled: u.disabled
                          },
                          null,
                          8,
                          ["HsKey", "echo", "disabled"]
                        ),
                        u.disabled
                          ? Z("", !0)
                          : (C(),
                            F(
                              "h4",
                              X,
                              "\u9009\u4E2D\u8303\u56F4\uFF1A" + R(q(m)),
                              1
                            ))
                      ]),
                      _: 2
                    },
                    1024
                  )
                )
              ),
              128
            ))
          ])
        );
      };
    }
  });
const se = J(ee, [["__scopeId", "data-v-7050eddb"]]);
export { se as default };
