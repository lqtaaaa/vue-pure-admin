import {
  d as a,
  r as u,
  u as r,
  h as p,
  e as m,
  f as d,
  g as _,
  Z as c,
  b as t,
  k as i,
  S as f
} from "./index.69183727.js";
const V = a({ name: "Menu2" }),
  v = a({
    ...V,
    setup(k) {
      let e = u("");
      const { t: o } = r();
      return (B, n) => {
        const l = p("el-input");
        return (
          m(),
          d("div", null, [
            _("p", null, c(t(o)("menus.hsmenu2")), 1),
            i(
              l,
              {
                modelValue: t(e),
                "onUpdate:modelValue":
                  n[0] || (n[0] = s => (f(e) ? (e.value = s) : (e = s)))
              },
              null,
              8,
              ["modelValue"]
            )
          ])
        );
      };
    }
  });
export { v as default };
