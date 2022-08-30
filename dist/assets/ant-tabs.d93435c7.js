import { c as g, d as x } from "./index.f879185a.js";
import {
  d as m,
  r as _,
  h as s,
  e as u,
  i as k,
  j as e,
  g as i,
  k as o,
  f as C,
  Y as y,
  b as p,
  l as t,
  Z as B,
  L as F
} from "./index.69183727.js";
const V = { class: "card-header" },
  T = { class: "font-medium" },
  w = t(" \u4EFFantdv\u6807\u7B7E\u9875\uFF0C\u91C7\u7528 "),
  z = t(" @pureadmin/components "),
  K = t(" \uFF0C\u5B8C\u5168\u517C\u5BB9antdv\u7684 "),
  E = t(" Tabs "),
  N = t(" \u5199\u6CD5 "),
  j = t("Horizontal"),
  D = t("Vertical"),
  L = m({ name: "AntTabs" }),
  H = m({
    ...L,
    setup(S) {
      const l = _("top"),
        r = _(1),
        f = b => {};
      return (b, n) => {
        const d = s("el-link"),
          c = s("el-radio"),
          h = s("el-radio-group"),
          v = s("el-card");
        return (
          u(),
          k(v, null, {
            header: e(() => [
              i("div", V, [
                i("span", T, [
                  w,
                  o(
                    d,
                    {
                      href: "https://www.npmjs.com/package/@pureadmin/components",
                      target: "_blank",
                      style: { "font-size": "16px", margin: "0 4px 5px" }
                    },
                    { default: e(() => [z]), _: 1 }
                  ),
                  K,
                  o(
                    d,
                    {
                      href: "https://next.antdv.com/components/tabs-cn",
                      target: "_blank",
                      style: { "font-size": "16px", margin: "0 4px 5px" }
                    },
                    { default: e(() => [E]), _: 1 }
                  ),
                  N
                ])
              ])
            ]),
            default: e(() => [
              o(
                h,
                {
                  modelValue: l.value,
                  "onUpdate:modelValue": n[0] || (n[0] = a => (l.value = a)),
                  size: "small",
                  class: "mb-2"
                },
                {
                  default: e(() => [
                    o(
                      c,
                      { label: "top", border: "" },
                      { default: e(() => [j]), _: 1 }
                    ),
                    o(
                      c,
                      { label: "left", border: "" },
                      { default: e(() => [D]), _: 1 }
                    )
                  ]),
                  _: 1
                },
                8,
                ["modelValue"]
              ),
              o(
                p(x),
                {
                  activeKey: r.value,
                  "onUpdate:activeKey": n[1] || (n[1] = a => (r.value = a)),
                  "tab-position": l.value,
                  style: { height: "200px" },
                  onTabScroll: f
                },
                {
                  default: e(() => [
                    (u(),
                    C(
                      F,
                      null,
                      y(30, a =>
                        o(
                          p(g),
                          { key: a, tab: `Tab-${a}` },
                          {
                            default: e(() => [t(" Content of tab " + B(a), 1)]),
                            _: 2
                          },
                          1032,
                          ["tab"]
                        )
                      ),
                      64
                    ))
                  ]),
                  _: 1
                },
                8,
                ["activeKey", "tab-position"]
              )
            ]),
            _: 1
          })
        );
      };
    }
  });
export { H as default };
