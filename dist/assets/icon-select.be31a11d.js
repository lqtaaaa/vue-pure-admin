import {
  d as n,
  r as d,
  h as r,
  e as u,
  i as _,
  j as s,
  k as m,
  b as t,
  S as p,
  a7 as i,
  g as l
} from "./index.69183727.js";
const f = l(
    "div",
    { class: "card-header" },
    [l("span", { class: "font-medium" }, "\u56FE\u6807\u9009\u62E9\u5668")],
    -1
  ),
  V = n({ name: "IconSelect" }),
  B = n({
    ...V,
    setup(h) {
      let e = d("ep:add-location");
      return (k, a) => {
        const c = r("el-card");
        return (
          u(),
          _(c, null, {
            header: s(() => [f]),
            default: s(() => [
              m(
                t(i),
                {
                  modelValue: t(e),
                  "onUpdate:modelValue":
                    a[0] || (a[0] = o => (p(e) ? (e.value = o) : (e = o)))
                },
                null,
                8,
                ["modelValue"]
              )
            ]),
            _: 1
          })
        );
      };
    }
  });
export { B as default };
