import { a as r } from "./avatars.000f50cc.js";
import { R as u } from "./index.fe4f3afb.js";
import {
  d as x,
  r as b,
  b as o,
  h as c,
  e as g,
  f as v,
  k as e,
  j as t,
  g as l,
  l as n,
  a6 as i
} from "./index.69183727.js";
import "./propTypes.1759d5a4.js";
const F = { class: "font-medium" },
  w = n(" \u4E8C\u7EF4\u7801\uFF08\u57FA\u4E8E "),
  E = n(" qrcode "),
  B = n(" \u751F\u6210\uFF09 "),
  C = l("div", { class: "font-bold" }, "\u57FA\u7840\u7528\u6CD5", -1),
  k = l("div", { class: "font-bold" }, "img\u6807\u7B7E", -1),
  D = l("div", { class: "font-bold" }, "\u6837\u5F0F\u914D\u7F6E", -1),
  T = l("div", { class: "font-bold" }, "\u70B9\u51FB\u4E8B\u4EF6", -1),
  q = l("div", { class: "font-bold" }, "\u5F02\u6B65\u5185\u5BB9", -1),
  y = l("div", { class: "font-bold" }, "\u5931\u6548", -1),
  z = l("div", { class: "font-bold" }, "logo\u914D\u7F6E", -1),
  N = l("div", { class: "font-bold" }, "logo\u6837\u5F0F", -1),
  R = l("div", { class: "font-bold" }, "\u5927\u5C0F\u914D\u7F6E", -1),
  V = x({ name: "QrCode" }),
  I = x({
    ...V,
    setup(j) {
      const d = "vue-pure-admin",
        _ = b("");
      setTimeout(() => {
        _.value = o(d);
      }, 3e3);
      const m = () => {
          i.info("\u70B9\u51FB\u4E8B\u4EF6");
        },
        f = () => {
          i.info("\u5931\u6548");
        };
      return (A, Q) => {
        const h = c("el-link"),
          s = c("el-card"),
          a = c("el-col"),
          p = c("el-row");
        return (
          g(),
          v("div", null, [
            e(s, null, {
              header: t(() => [
                l("div", F, [
                  w,
                  e(
                    h,
                    {
                      href: "https://github.com/soldair/node-qrcode",
                      target: "_blank",
                      style: { "font-size": "16px", margin: "0 5px 4px 0" }
                    },
                    { default: t(() => [E]), _: 1 }
                  ),
                  B
                ])
              ]),
              default: t(() => [
                e(
                  p,
                  { gutter: 20, justify: "space-between" },
                  {
                    default: t(() => [
                      e(
                        a,
                        { xl: 6, lg: 6, md: 12, sm: 24, xs: 24 },
                        {
                          default: t(() => [
                            e(
                              s,
                              { shadow: "hover", class: "mb-10px text-center" },
                              {
                                default: t(() => [C, e(o(u), { text: d })]),
                                _: 1
                              }
                            )
                          ]),
                          _: 1
                        }
                      ),
                      e(
                        a,
                        { xl: 6, lg: 6, md: 12, sm: 24, xs: 24 },
                        {
                          default: t(() => [
                            e(
                              s,
                              { shadow: "hover", class: "mb-10px text-center" },
                              {
                                default: t(() => [
                                  k,
                                  e(o(u), { text: d, tag: "img" })
                                ]),
                                _: 1
                              }
                            )
                          ]),
                          _: 1
                        }
                      ),
                      e(
                        a,
                        { xl: 6, lg: 6, md: 12, sm: 24, xs: 24 },
                        {
                          default: t(() => [
                            e(
                              s,
                              { shadow: "hover", class: "mb-10px text-center" },
                              {
                                default: t(() => [
                                  D,
                                  e(o(u), {
                                    text: d,
                                    options: {
                                      color: {
                                        dark: "#55D187",
                                        light: "#2d8cf0"
                                      }
                                    }
                                  })
                                ]),
                                _: 1
                              }
                            )
                          ]),
                          _: 1
                        }
                      ),
                      e(
                        a,
                        { xl: 6, lg: 6, md: 12, sm: 24, xs: 24 },
                        {
                          default: t(() => [
                            e(
                              s,
                              { shadow: "hover", class: "mb-10px text-center" },
                              {
                                default: t(() => [
                                  T,
                                  e(o(u), { text: d, onClick: m })
                                ]),
                                _: 1
                              }
                            )
                          ]),
                          _: 1
                        }
                      ),
                      e(
                        a,
                        { xl: 6, lg: 6, md: 12, sm: 24, xs: 24 },
                        {
                          default: t(() => [
                            e(
                              s,
                              { shadow: "hover", class: "mb-10px text-center" },
                              {
                                default: t(() => [
                                  q,
                                  e(o(u), { text: _.value }, null, 8, ["text"])
                                ]),
                                _: 1
                              }
                            )
                          ]),
                          _: 1
                        }
                      ),
                      e(
                        a,
                        { xl: 6, lg: 6, md: 12, sm: 24, xs: 24 },
                        {
                          default: t(() => [
                            e(
                              s,
                              { shadow: "hover", class: "mb-10px text-center" },
                              {
                                default: t(() => [
                                  y,
                                  e(o(u), {
                                    text: d,
                                    disabled: "",
                                    onDisabledClick: f
                                  })
                                ]),
                                _: 1
                              }
                            )
                          ]),
                          _: 1
                        }
                      ),
                      e(
                        a,
                        { xl: 6, lg: 6, md: 12, sm: 24, xs: 24 },
                        {
                          default: t(() => [
                            e(
                              s,
                              { shadow: "hover", class: "mb-10px text-center" },
                              {
                                default: t(() => [
                                  z,
                                  e(o(u), { text: d, logo: o(r) }, null, 8, [
                                    "logo"
                                  ])
                                ]),
                                _: 1
                              }
                            )
                          ]),
                          _: 1
                        }
                      ),
                      e(
                        a,
                        { xl: 6, lg: 6, md: 12, sm: 24, xs: 24 },
                        {
                          default: t(() => [
                            e(
                              s,
                              { shadow: "hover", class: "mb-10px text-center" },
                              {
                                default: t(() => [
                                  N,
                                  e(
                                    o(u),
                                    {
                                      text: d,
                                      logo: {
                                        src: o(r),
                                        logoSize: 0.2,
                                        borderSize: 0.05,
                                        borderRadius: 50,
                                        bgColor: "blue"
                                      }
                                    },
                                    null,
                                    8,
                                    ["logo"]
                                  )
                                ]),
                                _: 1
                              }
                            )
                          ]),
                          _: 1
                        }
                      ),
                      e(
                        a,
                        { xl: 6, lg: 6, md: 12, sm: 24, xs: 24 },
                        {
                          default: t(() => [
                            e(
                              s,
                              { shadow: "hover", class: "mb-10px text-center" },
                              {
                                default: t(() => [
                                  R,
                                  e(o(u), { text: d, width: 100 })
                                ]),
                                _: 1
                              }
                            )
                          ]),
                          _: 1
                        }
                      )
                    ]),
                    _: 1
                  }
                )
              ]),
              _: 1
            })
          ])
        );
      };
    }
  });
export { I as default };
