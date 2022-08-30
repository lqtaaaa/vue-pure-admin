import { g as m } from "./data.4f303ad5.js";
import {
  d as I,
  r as u,
  A as k,
  h as a,
  e as w,
  f as S,
  g as t,
  k as n,
  j as r,
  Z as d,
  b as V,
  l as b,
  _ as D
} from "./index.69183727.js";
const j = { class: "dynamic-scroller-demo" },
  z = { class: "flex justify-around mb-4" },
  F = b("\u5782\u76F4\u6A21\u5F0Fvertical"),
  B = { class: "avatar" },
  L = { class: "text" },
  N = { class: "index" },
  O = I({
    __name: "vertical",
    setup(A) {
      const l = u([]),
        o = u("");
      for (let e = 0; e < 1e4; e++) l.value.push({ id: e, ...m() });
      const p = k(() => {
        if (!o.value) return l.value;
        const e = o.value.toLowerCase();
        return l.value.filter(c => c.message.toLowerCase().includes(e));
      });
      function f(e) {
        Object.assign(e, m());
      }
      function v() {}
      return (e, c) => {
        const g = a("el-input"),
          h = a("el-tag"),
          y = a("IconifyIconOnline"),
          x = a("DynamicScrollerItem"),
          C = a("DynamicScroller");
        return (
          w(),
          S("div", j, [
            t("div", z, [
              n(
                g,
                {
                  class: "mr-2 !w-1/1.5",
                  clearable: "",
                  modelValue: o.value,
                  "onUpdate:modelValue": c[0] || (c[0] = s => (o.value = s)),
                  placeholder: "Filter..."
                },
                null,
                8,
                ["modelValue"]
              ),
              n(h, { effect: "dark" }, { default: r(() => [F]), _: 1 })
            ]),
            n(
              C,
              {
                items: V(p),
                "min-item-size": 54,
                class: "scroller",
                onResize: v
              },
              {
                default: r(({ item: s, index: i, active: _ }) => [
                  n(
                    x,
                    {
                      item: s,
                      active: _,
                      "size-dependencies": [s.message],
                      "data-index": i,
                      "data-active": _,
                      title: `Click to change message ${i}`,
                      class: "message",
                      onClick: M => f(s)
                    },
                    {
                      default: r(() => [
                        t("div", B, [
                          n(y, {
                            icon: "openmoji:beaming-face-with-smiling-eyes",
                            width: "40"
                          })
                        ]),
                        t("div", L, d(s.message), 1),
                        t("div", N, [
                          t("span", null, d(s.id) + " (id)", 1),
                          t("span", null, d(i) + " (index)", 1)
                        ])
                      ]),
                      _: 2
                    },
                    1032,
                    [
                      "item",
                      "active",
                      "size-dependencies",
                      "data-index",
                      "data-active",
                      "title",
                      "onClick"
                    ]
                  )
                ]),
                _: 1
              },
              8,
              ["items"]
            )
          ])
        );
      };
    }
  });
const R = D(O, [["__scopeId", "data-v-1c74cce3"]]);
export { R as default };
