import {
  d as z,
  u as D,
  r as I,
  t as F,
  h as n,
  e as R,
  f as T,
  k as t,
  j as o,
  g as i,
  Z as _,
  b as f,
  l as p,
  _ as N
} from "./index.69183727.js";
import { u as g } from "./hooks.5d98ec2d.js";
const V = { class: "config" },
  E = { class: "color-black dark:color-white" },
  S = { class: "p-2" },
  B = p(" \u7F16\u8F91 "),
  $ = p(" \u5220\u9664 "),
  J = { class: "absolute left-3 flex items-center" },
  U = z({
    __name: "config",
    props: {
      drawer: { type: Boolean, default: !1 },
      drawTitle: { default: "" },
      direction: { default: "rtl" }
    },
    emits: ["handleClose"],
    setup(d, { emit: b }) {
      const { t: h } = D(),
        r = I({}),
        e = F({
          tableData: [
            { name: "\u7981\u7528", dataval: "0" },
            { name: "\u542F\u7528", dataval: "1" }
          ],
          isAllChecked: !1,
          isIndeterminate: !1,
          selectRecords: [],
          tablePage: { total: 0, currentPage: 1, pageSize: 10 }
        });
      function C() {
        (e.isAllChecked = !1), (e.isIndeterminate = !1), b("handleClose");
      }
      function j(l) {}
      function Z(l) {}
      const x = () => {
          setTimeout(() => {}, 1e3);
          const l = r.value;
          l.setAllCheckboxRow(e.isAllChecked),
            (e.selectRecords = l.getCheckboxRecords());
        },
        m = ({ records: l }) => {
          const a = r.value;
          (e.isAllChecked = a.isAllCheckboxChecked()),
            (e.isIndeterminate = a.isAllCheckboxIndeterminate()),
            (e.selectRecords = l);
        };
      return (l, a) => {
        const k = n("el-divider"),
          c = n("vxe-table-column"),
          u = n("el-button"),
          v = n("vxe-table"),
          w = n("vxe-checkbox"),
          y = n("vxe-pager"),
          P = n("el-drawer");
        return (
          R(),
          T("div", V, [
            t(
              P,
              {
                "model-value": d.drawer,
                direction: d.direction,
                "before-close": C,
                "destroy-on-close": "",
                size: "680px"
              },
              {
                header: o(() => [i("span", E, _(d.drawTitle), 1)]),
                default: o(() => [
                  t(k),
                  i("div", S, [
                    t(
                      v,
                      {
                        ref_key: "xTable",
                        ref: r,
                        border: "",
                        data: e.tableData,
                        onCheckboxChange: m,
                        onCheckboxAll: m
                      },
                      {
                        default: o(() => [
                          t(c, { type: "checkbox", width: "60" }),
                          t(c, { field: "name", title: "\u540D\u79F0" }),
                          t(c, {
                            field: "dataval",
                            title: "\u6570\u636E\u503C"
                          }),
                          t(
                            c,
                            { title: "\u64CD\u4F5C", fixed: "right" },
                            {
                              default: o(({ row: s }) => [
                                t(
                                  u,
                                  {
                                    link: "",
                                    type: "primary",
                                    icon: f(g)("edits"),
                                    onClick: A => void 0
                                  },
                                  { default: o(() => [B]), _: 2 },
                                  1032,
                                  ["icon", "onClick"]
                                ),
                                t(
                                  u,
                                  {
                                    link: "",
                                    type: "primary",
                                    icon: f(g)("delete"),
                                    onClick: A => void 0
                                  },
                                  { default: o(() => [$]), _: 2 },
                                  1032,
                                  ["icon", "onClick"]
                                )
                              ]),
                              _: 1
                            }
                          )
                        ]),
                        _: 1
                      },
                      8,
                      ["data"]
                    ),
                    t(
                      y,
                      {
                        perfect: "",
                        "current-page": e.tablePage.currentPage,
                        "onUpdate:current-page":
                          a[1] || (a[1] = s => (e.tablePage.currentPage = s)),
                        "page-size": e.tablePage.pageSize,
                        "onUpdate:page-size":
                          a[2] || (a[2] = s => (e.tablePage.pageSize = s)),
                        total: e.tablePage.total,
                        layouts: [
                          "PrevJump",
                          "PrevPage",
                          "Number",
                          "NextPage",
                          "NextJump",
                          "Sizes",
                          "FullJump",
                          "Total"
                        ]
                      },
                      {
                        left: o(() => [
                          i("span", J, [
                            t(
                              w,
                              {
                                modelValue: e.isAllChecked,
                                "onUpdate:modelValue":
                                  a[0] || (a[0] = s => (e.isAllChecked = s)),
                                indeterminate: e.isIndeterminate,
                                onChange: x
                              },
                              null,
                              8,
                              ["modelValue", "indeterminate"]
                            ),
                            i(
                              "p",
                              null,
                              "\u5DF2\u9009\u4E2D" +
                                _(e.selectRecords.length) +
                                "\u6761",
                              1
                            ),
                            t(
                              u,
                              { link: "", type: "danger", class: "ml-1" },
                              {
                                default: o(() => [
                                  p(_(f(h)("buttons.hsdelete")), 1)
                                ]),
                                _: 1
                              }
                            )
                          ])
                        ]),
                        _: 1
                      },
                      8,
                      ["current-page", "page-size", "total"]
                    )
                  ])
                ]),
                _: 1
              },
              8,
              ["model-value", "direction"]
            )
          ])
        );
      };
    }
  });
const H = N(U, [["__scopeId", "data-v-ffcae235"]]);
export { H as default };
