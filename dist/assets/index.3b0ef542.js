import {
  d as u,
  r as p,
  u as r,
  h as d,
  e as _,
  f as i,
  g as a,
  Z as l,
  b as n,
  k as c,
  S as f
} from "./index.69183727.js";
const V = { style: { "text-indent": "2em" } },
  h = u({ name: "Menu1-3" }),
  g = u({
    ...h,
    setup(k) {
      let e = p("");
      const { t } = r();
      return (x, s) => {
        const m = d("el-input");
        return (
          _(),
          i("div", null, [
            a("p", null, l(n(t)("menus.hsmenu1")), 1),
            a("p", V, l(n(t)("menus.hsmenu1-3")), 1),
            c(
              m,
              {
                modelValue: n(e),
                "onUpdate:modelValue":
                  s[0] || (s[0] = o => (f(e) ? (e.value = o) : (e = o)))
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
export { g as default };
