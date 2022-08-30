import { useColumns as U } from "./columns.850c11d6.js";
import { a as $ } from "./system.fe4630a1.js";
import { T as z } from "./index.ce9feac3.js";
import { u as i } from "./hooks.5d98ec2d.js";
import {
  d as F,
  t as k,
  r as f,
  o as I,
  h as a,
  e as N,
  f as j,
  k as e,
  j as o,
  b as n,
  l as c,
  _ as M
} from "./index.69183727.js";
import "./index.f879185a.js";
import "./epTheme.5d1ffbb5.js";
const O = { class: "main" },
  q = c(" \u641C\u7D22 "),
  G = c(" \u91CD\u7F6E "),
  H = c(" \u65B0\u589E\u89D2\u8272 "),
  J = c(" \u4FEE\u6539 "),
  K = c(" \u5220\u9664 "),
  Q = c(" \u83DC\u5355\u6743\u9650 "),
  W = c(" \u6570\u636E\u6743\u9650 "),
  X = F({ name: "Role" }),
  Y = F({
    ...X,
    setup(Z) {
      const s = k({ name: "", code: "", status: "" });
      let m = f([]),
        d = f(!0);
      const { columns: w } = U(),
        g = f(),
        h = k({ total: 0, pageSize: 10, currentPage: 1, background: !0 });
      function ee(l) {}
      function oe(l) {}
      function D(l) {}
      function x(l) {}
      function B(l) {}
      async function _() {
        d.value = !0;
        let { data: l } = await $();
        (m.value = l.list),
          (h.total = l.total),
          setTimeout(() => {
            d.value = !1;
          }, 500);
      }
      const V = l => {
        !l || (l.resetFields(), _());
      };
      return (
        I(() => {
          _();
        }),
        (l, u) => {
          const C = a("el-input"),
            p = a("el-form-item"),
            b = a("el-option"),
            E = a("el-select"),
            r = a("el-button"),
            S = a("el-form"),
            T = a("el-popconfirm"),
            y = a("el-dropdown-item"),
            R = a("el-dropdown-menu"),
            L = a("el-dropdown"),
            A = a("PureTable");
          return (
            N(),
            j("div", O, [
              e(
                S,
                {
                  ref_key: "formRef",
                  ref: g,
                  inline: !0,
                  model: s,
                  class: "bg-white dark:bg-dark w-99/100 pl-8 pt-4"
                },
                {
                  default: o(() => [
                    e(
                      p,
                      { label: "\u89D2\u8272\u540D\u79F0\uFF1A", prop: "name" },
                      {
                        default: o(() => [
                          e(
                            C,
                            {
                              modelValue: s.name,
                              "onUpdate:modelValue":
                                u[0] || (u[0] = t => (s.name = t)),
                              placeholder:
                                "\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",
                              clearable: ""
                            },
                            null,
                            8,
                            ["modelValue"]
                          )
                        ]),
                        _: 1
                      }
                    ),
                    e(
                      p,
                      { label: "\u89D2\u8272\u6807\u8BC6\uFF1A", prop: "code" },
                      {
                        default: o(() => [
                          e(
                            C,
                            {
                              modelValue: s.code,
                              "onUpdate:modelValue":
                                u[1] || (u[1] = t => (s.code = t)),
                              placeholder:
                                "\u8BF7\u8F93\u5165\u89D2\u8272\u6807\u8BC6",
                              clearable: ""
                            },
                            null,
                            8,
                            ["modelValue"]
                          )
                        ]),
                        _: 1
                      }
                    ),
                    e(
                      p,
                      { label: "\u72B6\u6001\uFF1A", prop: "status" },
                      {
                        default: o(() => [
                          e(
                            E,
                            {
                              modelValue: s.status,
                              "onUpdate:modelValue":
                                u[2] || (u[2] = t => (s.status = t)),
                              placeholder: "\u8BF7\u9009\u62E9\u72B6\u6001",
                              clearable: ""
                            },
                            {
                              default: o(() => [
                                e(b, {
                                  label: "\u5DF2\u5F00\u542F",
                                  value: "1"
                                }),
                                e(b, {
                                  label: "\u5DF2\u5173\u95ED",
                                  value: "0"
                                })
                              ]),
                              _: 1
                            },
                            8,
                            ["modelValue"]
                          )
                        ]),
                        _: 1
                      }
                    ),
                    e(p, null, {
                      default: o(() => [
                        e(
                          r,
                          {
                            type: "primary",
                            icon: n(i)("search"),
                            loading: n(d),
                            onClick: _
                          },
                          { default: o(() => [q]), _: 1 },
                          8,
                          ["icon", "loading"]
                        ),
                        e(
                          r,
                          {
                            icon: n(i)("refresh"),
                            onClick: u[3] || (u[3] = t => V(g.value))
                          },
                          { default: o(() => [G]), _: 1 },
                          8,
                          ["icon"]
                        )
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                },
                8,
                ["model"]
              ),
              e(
                n(z),
                {
                  title: "\u89D2\u8272\u5217\u8868",
                  loading: n(d),
                  dataList: n(m),
                  onRefresh: _
                },
                {
                  buttons: o(() => [
                    e(
                      r,
                      { type: "primary", icon: n(i)("add") },
                      { default: o(() => [H]), _: 1 },
                      8,
                      ["icon"]
                    )
                  ]),
                  default: o(({ size: t, checkList: P }) => [
                    e(
                      A,
                      {
                        border: "",
                        align: "center",
                        showOverflowTooltip: "",
                        "table-layout": "auto",
                        size: t,
                        data: n(m),
                        columns: n(w),
                        checkList: P,
                        pagination: h,
                        paginationSmall: t === "small",
                        "header-cell-style": {
                          background: "var(--el-table-row-hover-bg-color)",
                          color: "var(--el-text-color-primary)"
                        },
                        onSelectionChange: B,
                        onSizeChange: x,
                        onCurrentChange: D
                      },
                      {
                        operation: o(({ row: te }) => [
                          e(
                            r,
                            {
                              class: "reset-margin",
                              link: "",
                              type: "primary",
                              size: t,
                              onClick: v => void 0,
                              icon: n(i)("edits")
                            },
                            { default: o(() => [J]), _: 2 },
                            1032,
                            ["size", "onClick", "icon"]
                          ),
                          e(
                            T,
                            { title: "\u662F\u5426\u786E\u8BA4\u5220\u9664?" },
                            {
                              reference: o(() => [
                                e(
                                  r,
                                  {
                                    class: "reset-margin",
                                    link: "",
                                    type: "primary",
                                    size: t,
                                    icon: n(i)("delete"),
                                    onClick: v => void 0
                                  },
                                  { default: o(() => [K]), _: 2 },
                                  1032,
                                  ["size", "icon", "onClick"]
                                )
                              ]),
                              _: 2
                            },
                            1024
                          ),
                          e(
                            L,
                            null,
                            {
                              dropdown: o(() => [
                                e(
                                  R,
                                  null,
                                  {
                                    default: o(() => [
                                      e(
                                        y,
                                        null,
                                        {
                                          default: o(() => [
                                            e(
                                              r,
                                              {
                                                class:
                                                  "reset-margin !h-20px !text-gray-500",
                                                link: "",
                                                type: "primary",
                                                size: t,
                                                icon: n(i)("menu")
                                              },
                                              { default: o(() => [Q]), _: 2 },
                                              1032,
                                              ["size", "icon"]
                                            )
                                          ]),
                                          _: 2
                                        },
                                        1024
                                      ),
                                      e(
                                        y,
                                        null,
                                        {
                                          default: o(() => [
                                            e(
                                              r,
                                              {
                                                class:
                                                  "reset-margin !h-20px !text-gray-500",
                                                link: "",
                                                type: "primary",
                                                size: t,
                                                icon: n(i)("database")
                                              },
                                              { default: o(() => [W]), _: 2 },
                                              1032,
                                              ["size", "icon"]
                                            )
                                          ]),
                                          _: 2
                                        },
                                        1024
                                      )
                                    ]),
                                    _: 2
                                  },
                                  1024
                                )
                              ]),
                              default: o(() => [
                                e(
                                  r,
                                  {
                                    class: "ml-3",
                                    link: "",
                                    type: "primary",
                                    size: t,
                                    onClick: v => void 0,
                                    icon: n(i)("more")
                                  },
                                  null,
                                  8,
                                  ["size", "onClick", "icon"]
                                )
                              ]),
                              _: 2
                            },
                            1024
                          )
                        ]),
                        _: 2
                      },
                      1032,
                      [
                        "size",
                        "data",
                        "columns",
                        "checkList",
                        "pagination",
                        "paginationSmall",
                        "header-cell-style"
                      ]
                    )
                  ]),
                  _: 1
                },
                8,
                ["loading", "dataList"]
              )
            ])
          );
        }
      );
    }
  });
const ce = M(Y, [["__scopeId", "data-v-dc317dfc"]]);
export { ce as default };
