import {
  d as u,
  r as p,
  u as r,
  h as d,
  e as _,
  f as i,
  g as s,
  Z as o,
  b as n,
  k as c,
  S as f
} from "./index.69183727.js";
const h = { style: { "text-indent": "2em" } },
  V = { style: { "text-indent": "4em" } },
  x = u({ name: "Menu1-2-1" }),
  g = u({
    ...x,
    setup(k) {
      let e = p("");
      const { t } = r();
      return (y, a) => {
        const m = d("el-input");
        return (
          _(),
          i("div", null, [
            s("p", null, o(n(t)("menus.hsmenu1")), 1),
            s("p", h, o(n(t)("menus.hsmenu1-2")), 1),
            s("p", V, o(n(t)("menus.hsmenu1-2-1")), 1),
            c(
              m,
              {
                modelValue: n(e),
                "onUpdate:modelValue":
                  a[0] || (a[0] = l => (f(e) ? (e.value = l) : (e = l)))
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
