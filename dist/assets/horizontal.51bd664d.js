import { g as m } from "./data.4f303ad5.js";
import {
  d as C,
  r as u,
  A as w,
  h as a,
  e as z,
  f as I,
  g as s,
  k as o,
  j as r,
  ar as b,
  Z as d,
  b as k,
  l as S,
  _ as V
} from "./index.69183727.js";
const D = { class: "dynamic-scroller-demo" },
  j = { class: "flex justify-around mb-4" },
  M = S("\u6C34\u5E73\u6A21\u5F0Fhorizontal"),
  B = { class: "avatar" },
  F = { class: "text" },
  L = { class: "index" },
  N = C({
    __name: "horizontal",
    setup(O) {
      const c = u([]),
        n = u("");
      for (let e = 0; e < 1e4; e++) c.value.push({ id: e, ...m() });
      const p = w(() => {
        if (!n.value) return c.value;
        const e = n.value.toLowerCase();
        return c.value.filter(l => l.message.toLowerCase().includes(e));
      });
      function h(e) {
        Object.assign(e, m());
      }
      return (e, l) => {
        const f = a("el-input"),
          g = a("el-tag"),
          v = a("IconifyIconOnline"),
          y = a("DynamicScrollerItem"),
          x = a("DynamicScroller");
        return (
          z(),
          I("div", D, [
            s("div", j, [
              o(
                f,
                {
                  class: "mr-2 !w-1/1.5",
                  clearable: "",
                  modelValue: n.value,
                  "onUpdate:modelValue": l[0] || (l[0] = t => (n.value = t)),
                  placeholder: "Filter...",
                  style: { width: "300px" }
                },
                null,
                8,
                ["modelValue"]
              ),
              o(g, { effect: "dark" }, { default: r(() => [M]), _: 1 })
            ]),
            o(
              x,
              {
                items: k(p),
                "min-item-size": 54,
                direction: "horizontal",
                class: "scroller"
              },
              {
                default: r(({ item: t, index: i, active: _ }) => [
                  o(
                    y,
                    {
                      item: t,
                      active: _,
                      "size-dependencies": [t.message],
                      "data-index": i,
                      "data-active": _,
                      title: `Click to change message ${i}`,
                      style: b({
                        width: `${Math.max(
                          130,
                          Math.round((t.message.length / 20) * 20)
                        )}px`
                      }),
                      class: "message",
                      onClick: $ => h(t)
                    },
                    {
                      default: r(() => [
                        s("div", B, [
                          o(v, {
                            icon: "openmoji:beaming-face-with-smiling-eyes",
                            width: "40"
                          })
                        ]),
                        s("div", F, d(t.message), 1),
                        s("div", L, [
                          s("span", null, d(t.id) + " (id)", 1),
                          s("span", null, d(i) + " (index)", 1)
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
                      "style",
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
const T = V(N, [["__scopeId", "data-v-8a1b0821"]]);
export { T as default };
