import c from "./vertical.6db1c644.js";
import i from "./horizontal.51bd664d.js";
import {
  d as r,
  h as s,
  e as u,
  i as _,
  j as e,
  g as a,
  k as t,
  l as o
} from "./index.69183727.js";
import "./data.4f303ad5.js";
const p = { class: "font-medium" },
  d = o(" \u865A\u62DF\u5217\u8868\u7EC4\u4EF6\uFF08 "),
  m = o(" github\u5730\u5740 "),
  f = o(" \uFF09 "),
  h = { class: "w-full flex justify-around flex-wrap" },
  x = r({ name: "VirtualList" }),
  b = r({
    ...x,
    setup(k) {
      return (v, g) => {
        const l = s("el-link"),
          n = s("el-card");
        return (
          u(),
          _(n, null, {
            header: e(() => [
              a("div", p, [
                d,
                t(
                  l,
                  {
                    href: "https://github.com/Akryum/vue-virtual-scroller/tree/next/packages/vue-virtual-scroller",
                    target: "_blank",
                    style: { "font-size": "16px", margin: "0 5px 4px 0" }
                  },
                  { default: e(() => [m]), _: 1 }
                ),
                f
              ])
            ]),
            default: e(() => [
              a("div", h, [
                t(c, { class: "h-500px w-500px" }),
                t(i, { class: "h-500px w-500px" })
              ])
            ]),
            _: 1
          })
        );
      };
    }
  });
export { b as default };
