import c from "./basic.2a513a41.js";
import m from "./menuGroup.cf598854.js";
import _ from "./menuDynamic.1986113b.js";
import {
  d as n,
  h as a,
  e as u,
  i as d,
  j as o,
  k as e,
  g as s
} from "./index.69183727.js";
import "./index.esm.c79b8927.js";
const p = s(
    "div",
    { class: "card-header" },
    [
      s(
        "span",
        { class: "font-medium" },
        "\u53F3\u952E\u83DC\u5355\u7EC4\u4EF6"
      )
    ],
    -1
  ),
  f = n({ name: "ContextMenu" }),
  E = n({
    ...f,
    setup(i) {
      return (x, h) => {
        const t = a("el-col"),
          l = a("el-row"),
          r = a("el-card");
        return (
          u(),
          d(r, null, {
            header: o(() => [p]),
            default: o(() => [
              e(
                l,
                { gutter: 24 },
                {
                  default: o(() => [
                    e(
                      t,
                      { xs: 24, sm: 10, md: 10, lg: 8, xl: 10 },
                      { default: o(() => [e(c)]), _: 1 }
                    ),
                    e(
                      t,
                      { xs: 24, sm: 10, md: 10, lg: 8, xl: 10 },
                      { default: o(() => [e(m)]), _: 1 }
                    ),
                    e(
                      t,
                      { xs: 24, sm: 10, md: 10, lg: 8, xl: 10 },
                      { default: o(() => [e(_)]), _: 1 }
                    )
                  ]),
                  _: 1
                }
              )
            ]),
            _: 1
          })
        );
      };
    }
  });
export { E as default };
