import {
  d as m,
  r as u,
  A as g,
  ab as E,
  ac as V,
  ad as b,
  h as a,
  e as B,
  i as D,
  j as o,
  g as l,
  k as r,
  b as e,
  Z as I,
  ae as _,
  l as d
} from "./index.69183727.js";
import { u as N } from "./hooks.5d98ec2d.js";
const R = { class: "card-header" },
  T = { class: "font-medium" },
  q = d(" \u83DC\u5355\u6811\u7ED3\u6784\uFF08\u91C7\u7528element-plus\u7684 "),
  w = d(" Tree V2 "),
  z = d(" \u7EC4\u4EF6\u5E76\u652F\u6301\u56FD\u9645\u5316\uFF09 "),
  M = m({ name: "MenuTree" }),
  A = m({
    ...M,
    setup(P) {
      const c = u("");
      let f = u({ value: "uniqueId", children: "children" });
      const i = u();
      let p = g(() => E(V().menusTree)),
        h = b(p.value);
      const x = t => {
          i.value.filter(t);
        },
        k = (t, n) => _(n.meta.title).indexOf(t) !== -1;
      return (t, n) => {
        const v = a("el-link"),
          F = a("el-input"),
          y = a("el-tree-v2"),
          C = a("el-card");
        return (
          B(),
          D(C, null, {
            header: o(() => [
              l("div", R, [
                l("span", T, [
                  q,
                  r(
                    v,
                    {
                      href: "https://element-plus.gitee.io/zh-CN/component/tree-v2.html",
                      target: "_blank",
                      icon: e(N)("node-tree"),
                      style: { "font-size": "16px", margin: "0 5px 4px 0" }
                    },
                    { default: o(() => [w]), _: 1 },
                    8,
                    ["icon"]
                  ),
                  z
                ])
              ])
            ]),
            default: o(() => [
              r(
                F,
                {
                  class: "mb-4",
                  modelValue: c.value,
                  "onUpdate:modelValue": n[0] || (n[0] = s => (c.value = s)),
                  placeholder:
                    "\u8BF7\u8F93\u5165\u5173\u952E\u5B57\u67E5\u627E",
                  clearable: "",
                  onInput: x
                },
                null,
                8,
                ["modelValue"]
              ),
              r(
                y,
                {
                  ref_key: "treeRef",
                  ref: i,
                  data: e(p),
                  props: e(f),
                  "show-checkbox": "",
                  height: 500,
                  "filter-method": k,
                  "default-expanded-keys": e(h)
                },
                {
                  default: o(({ data: s }) => [
                    l("span", null, I(e(_)(s.meta.title)), 1)
                  ]),
                  _: 1
                },
                8,
                ["data", "props", "default-expanded-keys"]
              )
            ]),
            _: 1
          })
        );
      };
    }
  });
export { A as default };
