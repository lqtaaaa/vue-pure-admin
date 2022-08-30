import {
  az as N,
  d as h,
  r as u,
  o as T,
  h as o,
  c as j,
  e as i,
  f as d,
  g as U,
  k as n,
  j as r,
  b as $,
  w as v,
  I as f,
  L as C,
  Y as O,
  i as q,
  ax as J,
  l as R,
  aJ as Y,
  a6 as G,
  n as H
} from "./index.69183727.js";
import K from "./Card.d62dc972.js";
import { _ as Q } from "./DialogForm.vue_vue_type_script_setup_true_lang.a93d9dc6.js";
import { u as W } from "./hooks.5d98ec2d.js";
const X = g => N.request("post", "/getCardList", { data: g }),
  Z = { class: "main" },
  ee = { class: "w-full flex justify-between mb-4" },
  te = R(" \u65B0\u5EFA\u4EA7\u54C1 "),
  ae = h({ name: "ListCard" }),
  se = h({
    ...ae,
    setup(g) {
      const w = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `,
        y = { name: "", status: "", description: "", type: "", mark: "" },
        e = u({ current: 1, pageSize: 12, total: 0 }),
        p = u([]),
        m = u(!0),
        x = async () => {
          try {
            const { data: t } = await X();
            (p.value = t.list),
              (e.value = { ...e.value, total: t.list.length });
          } catch {
          } finally {
            setTimeout(() => {
              m.value = !1;
            }, 500);
          }
        };
      T(() => {
        x();
      });
      const c = u(!1),
        _ = u({ ...y }),
        s = u(""),
        E = t => {
          (e.value.pageSize = t), (e.value.current = 1);
        },
        L = t => {
          e.value.current = t;
        },
        z = t => {
          Y.confirm(
            t
              ? `\u786E\u8BA4\u5220\u9664\u540E${t.name}\u7684\u6240\u6709\u4EA7\u54C1\u4FE1\u606F\u5C06\u88AB\u6E05\u7A7A, \u4E14\u65E0\u6CD5\u6062\u590D`
              : "",
            "\u63D0\u793A",
            { type: "warning" }
          )
            .then(() => {
              G({ type: "success", message: "\u5220\u9664\u6210\u529F" });
            })
            .catch(() => {});
        },
        A = t => {
          (c.value = !0),
            H(() => {
              _.value = { ...t, status: t != null && t.isSetup ? "1" : "0" };
            });
        };
      return (t, l) => {
        const b = o("el-button"),
          D = o("IconifyIconOffline"),
          k = o("el-icon"),
          I = o("el-input"),
          S = o("el-empty"),
          B = o("el-col"),
          V = o("el-row"),
          F = o("el-pagination"),
          M = j("loading");
        return (
          i(),
          d("div", Z, [
            U("div", ee, [
              n(
                b,
                {
                  icon: $(W)("add"),
                  onClick: l[0] || (l[0] = a => (c.value = !0))
                },
                { default: r(() => [te]), _: 1 },
                8,
                ["icon"]
              ),
              n(
                I,
                {
                  style: { width: "300px" },
                  modelValue: s.value,
                  "onUpdate:modelValue": l[1] || (l[1] = a => (s.value = a)),
                  placeholder: "\u8BF7\u8F93\u5165\u4EA7\u54C1\u540D\u79F0",
                  clearable: ""
                },
                {
                  suffix: r(() => [
                    n(
                      k,
                      { class: "el-input__icon" },
                      {
                        default: r(() => [
                          v(n(D, { icon: "search" }, null, 512), [
                            [f, s.value.length === 0]
                          ])
                        ]),
                        _: 1
                      }
                    )
                  ]),
                  _: 1
                },
                8,
                ["modelValue"]
              )
            ]),
            v(
              (i(),
              d(
                "div",
                {
                  "element-loading-svg": w,
                  "element-loading-svg-view-box": "-10, -10, 50, 50"
                },
                [
                  v(
                    n(
                      S,
                      { description: "\u6682\u65E0\u6570\u636E" },
                      null,
                      512
                    ),
                    [
                      [
                        f,
                        p.value
                          .slice(
                            e.value.pageSize * (e.value.current - 1),
                            e.value.pageSize * e.value.current
                          )
                          .filter(a =>
                            a.name.toLowerCase().includes(s.value.toLowerCase())
                          ).length === 0
                      ]
                    ]
                  ),
                  e.value.total > 0
                    ? (i(),
                      d(
                        C,
                        { key: 0 },
                        [
                          n(
                            V,
                            { gutter: 16 },
                            {
                              default: r(() => [
                                (i(!0),
                                d(
                                  C,
                                  null,
                                  O(
                                    p.value
                                      .slice(
                                        e.value.pageSize *
                                          (e.value.current - 1),
                                        e.value.pageSize * e.value.current
                                      )
                                      .filter(a =>
                                        a.name
                                          .toLowerCase()
                                          .includes(s.value.toLowerCase())
                                      ),
                                    (a, P) => (
                                      i(),
                                      q(
                                        B,
                                        {
                                          key: P,
                                          xs: 24,
                                          sm: 12,
                                          md: 8,
                                          lg: 6,
                                          xl: 4
                                        },
                                        {
                                          default: r(() => [
                                            n(
                                              K,
                                              {
                                                product: a,
                                                onDeleteItem: z,
                                                onManageProduct: A
                                              },
                                              null,
                                              8,
                                              ["product"]
                                            )
                                          ]),
                                          _: 2
                                        },
                                        1024
                                      )
                                    )
                                  ),
                                  128
                                ))
                              ]),
                              _: 1
                            }
                          ),
                          n(
                            F,
                            {
                              class: "float-right",
                              currentPage: e.value.current,
                              "onUpdate:currentPage":
                                l[2] || (l[2] = a => (e.value.current = a)),
                              "page-size": e.value.pageSize,
                              total: e.value.total,
                              "page-sizes": [12, 24, 36],
                              background: !0,
                              layout: "total, sizes, prev, pager, next, jumper",
                              onSizeChange: E,
                              onCurrentChange: L
                            },
                            null,
                            8,
                            ["currentPage", "page-size", "total"]
                          )
                        ],
                        64
                      ))
                    : J("", !0)
                ]
              )),
              [[M, m.value]]
            ),
            n(
              Q,
              {
                visible: c.value,
                "onUpdate:visible": l[3] || (l[3] = a => (c.value = a)),
                data: _.value
              },
              null,
              8,
              ["visible", "data"]
            )
          ])
        );
      };
    }
  });
export { se as default };
