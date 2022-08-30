import { u as y } from "./epTheme.5d1ffbb5.js";
import {
  d as C,
  r as u,
  A as E,
  k as e,
  w as L,
  c as _,
  b8 as A,
  L as m,
  h as l,
  ah as d,
  l as p,
  a0 as T
} from "./index.69183727.js";
const D = `
  <path class="path" d="
    M 30 15
    L 28 17
    M 25.61 25.61
    A 15 15, 0, 0, 1, 15 30
    A 15 15, 0, 1, 1, 27.99 7.5
    L 15 15
  "
    style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"
  />
`,
  R = {
    title: { type: String, default: "\u5217\u8868" },
    dataList: { type: Array, default: () => [] },
    tableRef: {
      type: Object,
      default() {
        return {};
      }
    },
    loading: { type: Boolean, default: !1 }
  },
  B = C({
    name: "TableProBar",
    props: R,
    emits: ["refresh"],
    setup(o, { emit: h, slots: n, attrs: b }) {
      const v = u(),
        s = u([]),
        a = u("default"),
        r = u(!0),
        f = E(() => t => ({
          background: t === a.value ? y().epThemeColor : "",
          color: t === a.value ? "#fff" : "var(--el-text-color-primary)"
        }));
      function w() {
        (r.value = !r.value), g(o.dataList, r.value);
      }
      function g(t, i) {
        t.forEach(c => {
          o.tableRef.toggleRowExpansion(c, i),
            c.children !== void 0 && c.children !== null && g(c.children, i);
        });
      }
      const k = {
          dropdown: () =>
            e(
              l("el-dropdown-menu"),
              { class: "translation" },
              {
                default: () => [
                  e(
                    l("el-dropdown-item"),
                    {
                      style: f.value("large"),
                      onClick: () => (a.value = "large")
                    },
                    { default: () => [p("\u677E\u6563")] }
                  ),
                  e(
                    l("el-dropdown-item"),
                    {
                      style: f.value("default"),
                      onClick: () => (a.value = "default")
                    },
                    { default: () => [p("\u9ED8\u8BA4")] }
                  ),
                  e(
                    l("el-dropdown-item"),
                    {
                      style: f.value("small"),
                      onClick: () => (a.value = "small")
                    },
                    { default: () => [p("\u7D27\u51D1")] }
                  )
                ]
              }
            )
        },
        x = {
          reference: () =>
            e(
              d,
              {
                class: "cursor-pointer",
                icon: "setting",
                width: "16",
                color: "text_color_regular",
                onMouseover: t => (v.value = t.currentTarget)
              },
              null
            )
        };
      return () => {
        var t;
        return e(m, null, [
          L(
            e(
              "div",
              A(b, {
                class: "w-99/100 mt-6 p-2 bg-white dark:bg-dark",
                "element-loading-svg": D,
                "element-loading-svg-view-box": "-10, -10, 50, 50"
              }),
              [
                e("div", { class: "flex justify-between w-full h-60px p-4" }, [
                  e("p", { class: "font-bold truncate" }, [o.title]),
                  e("div", { class: "flex items-center justify-around" }, [
                    e("div", { class: "flex mr-4" }, [
                      n == null ? void 0 : n.buttons()
                    ]),
                    (t = o.tableRef) != null && t.size
                      ? e(m, null, [
                          e(
                            l("el-tooltip"),
                            {
                              effect: "dark",
                              content: r.value
                                ? "\u6298\u53E0"
                                : "\u5C55\u5F00",
                              placement: "top"
                            },
                            {
                              default: () => [
                                e(
                                  d,
                                  {
                                    class: "cursor-pointer",
                                    icon: r.value ? "unExpand" : "expand",
                                    width: "16",
                                    color: "text_color_regular",
                                    onClick: () => w()
                                  },
                                  null
                                )
                              ]
                            }
                          ),
                          e(l("el-divider"), { direction: "vertical" }, null)
                        ])
                      : void 0,
                    e(
                      l("el-tooltip"),
                      {
                        effect: "dark",
                        content: "\u5237\u65B0",
                        placement: "top"
                      },
                      {
                        default: () => [
                          e(
                            d,
                            {
                              class: "cursor-pointer",
                              icon: "refresh-right",
                              width: "16",
                              color: "text_color_regular",
                              onClick: () => h("refresh")
                            },
                            null
                          )
                        ]
                      }
                    ),
                    e(l("el-divider"), { direction: "vertical" }, null),
                    e(
                      l("el-tooltip"),
                      {
                        effect: "dark",
                        content: "\u5BC6\u5EA6",
                        placement: "top"
                      },
                      {
                        default: () => [
                          e(
                            l("el-dropdown"),
                            { trigger: "click" },
                            {
                              default: () => [
                                e(
                                  d,
                                  {
                                    class: "cursor-pointer",
                                    icon: "density",
                                    width: "16",
                                    color: "text_color_regular"
                                  },
                                  null
                                )
                              ],
                              ...k
                            }
                          )
                        ]
                      }
                    ),
                    e(l("el-divider"), { direction: "vertical" }, null),
                    e(
                      l("el-popover"),
                      { width: "200", trigger: "click" },
                      {
                        default: () => [
                          e(
                            l("el-checkbox-group"),
                            {
                              modelValue: s.value,
                              "onUpdate:modelValue": i => (s.value = i)
                            },
                            {
                              default: () => [
                                e(
                                  l("el-checkbox"),
                                  { label: "\u5E8F\u53F7\u5217" },
                                  null
                                ),
                                e(
                                  l("el-checkbox"),
                                  { label: "\u52FE\u9009\u5217" },
                                  null
                                )
                              ]
                            }
                          )
                        ],
                        ...x
                      }
                    )
                  ]),
                  e(
                    l("el-tooltip"),
                    {
                      "popper-options": {
                        modifiers: [
                          {
                            name: "computeStyles",
                            options: { adaptive: !1, enabled: !1 }
                          }
                        ]
                      },
                      placement: "top",
                      "virtual-ref": v.value,
                      "virtual-triggering": !0,
                      trigger: "hover",
                      content: "\u5217\u8BBE\u7F6E"
                    },
                    null
                  )
                ]),
                o.dataList.length > 0
                  ? n.default({ size: a.value, checkList: s.value })
                  : e(
                      l("el-empty"),
                      { description: "\u6682\u65E0\u6570\u636E" },
                      null
                    )
              ]
            ),
            [[_("loading"), o.loading]]
          )
        ]);
      };
    }
  }),
  P = T(B);
export { P as T };
