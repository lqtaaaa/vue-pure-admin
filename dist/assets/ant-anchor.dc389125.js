import { K as c, a as p } from "./index.f879185a.js";
import {
  d,
  h as l,
  e as f,
  i as x,
  j as t,
  g as o,
  k as e,
  b as n,
  l as s
} from "./index.69183727.js";
const m = { class: "card-header" },
  B = { class: "font-medium" },
  k = s(" \u4EFFantdv\u951A\u70B9\uFF0C\u91C7\u7528 "),
  w = s(" @pureadmin/components "),
  D = s(" \uFF0C\u5B8C\u5168\u517C\u5BB9antdv\u7684 "),
  g = s(" Anchor "),
  y = s(" \u5199\u6CD5 "),
  C = { class: "w-400px" },
  b = o(
    "header",
    {
      id: "one",
      class:
        "w-200px h-600px text-cyan-50 flex justify-center items-center text-4xl",
      style: { background: "#409eff" }
    },
    " \u6D4B\u8BD5one ",
    -1
  ),
  v = o(
    "header",
    {
      id: "two",
      class:
        "w-200px h-600px text-cyan-50 flex justify-center items-center text-4xl",
      style: { background: "#67c23a" }
    },
    " \u6D4B\u8BD5two ",
    -1
  ),
  F = o(
    "header",
    {
      id: "three",
      class:
        "w-200px h-600px text-cyan-50 flex justify-center items-center text-4xl",
      style: { background: "#f56c6c" }
    },
    " \u6D4B\u8BD5three ",
    -1
  ),
  j = d({ name: "AntAnchor" }),
  z = d({
    ...j,
    setup(A) {
      function _(r, u) {
        r.preventDefault(),
          document
            .getElementById(u.href)
            .scrollIntoView({ block: "start", behavior: "smooth" });
      }
      return (r, u) => {
        const a = l("el-link"),
          i = l("el-scrollbar"),
          h = l("el-card");
        return (
          f(),
          x(h, null, {
            header: t(() => [
              o("div", m, [
                o("span", B, [
                  k,
                  e(
                    a,
                    {
                      href: "https://www.npmjs.com/package/@pureadmin/components",
                      target: "_blank",
                      style: { "font-size": "16px", margin: "0 4px 5px" }
                    },
                    { default: t(() => [w]), _: 1 }
                  ),
                  D,
                  e(
                    a,
                    {
                      href: "https://next.antdv.com/components/anchor-cn",
                      target: "_blank",
                      style: { "font-size": "16px", margin: "0 4px 5px" }
                    },
                    { default: t(() => [g]), _: 1 }
                  ),
                  y
                ])
              ])
            ]),
            default: t(() => [
              o("div", C, [
                e(
                  n(p),
                  { class: "float-left mt-200px", onClick: _ },
                  {
                    default: t(() => [
                      e(n(c), { href: "one", title: "\u6D4B\u8BD5one" }),
                      e(n(c), { href: "two", title: "\u6D4B\u8BD5two" }),
                      e(n(c), { href: "three", title: "\u6D4B\u8BD5three" })
                    ]),
                    _: 1
                  }
                ),
                e(
                  i,
                  { class: "float-right overflow-auto", height: "600px" },
                  { default: t(() => [b, v, F]), _: 1 }
                )
              ])
            ]),
            _: 1
          })
        );
      };
    }
  });
export { z as default };
