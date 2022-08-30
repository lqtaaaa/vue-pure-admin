import {
  d as w,
  u as X,
  t as Z,
  a2 as G,
  r as f,
  b9 as _,
  ba as Q,
  h as s,
  e as W,
  f as Y,
  k as t,
  j as n,
  g as C,
  b as a,
  J as ee,
  l as r,
  Z as b,
  w as te,
  I as oe,
  n as ne,
  bb as h,
  ak as ae,
  al as le,
  _ as ue
} from "./index.69183727.js";
import se from "./config.340edfa0.js";
import { u as c } from "./hooks.5d98ec2d.js";
const ie = d => (ae("data-v-93f717de"), (d = d()), le(), d),
  ce = { class: "ml-20px" },
  re = ie(() => C("label", null, "\u5B57\u5178\u540D\u79F0\uFF1A", -1)),
  de = { class: "text-model" },
  me = r(" \u7F16\u8F91 "),
  pe = r(" \u65B0\u589E\u5B50\u7C7B\u578B "),
  fe = r(" \u5B57\u5178\u914D\u7F6E "),
  _e = r(" \u5220\u9664 "),
  be = w({ name: "Dict" }),
  he = w({
    ...be,
    setup(d) {
      const { t: m } = X(),
        e = Z({
          submitLoading: !1,
          showEdit: !1,
          selectRow: null,
          filterName: "",
          tableData: [
            {
              id: 1,
              name: "\u72B6\u6001",
              model: "",
              children: [
                {
                  id: "1-1",
                  name: "\u670D\u52A1\u72B6\u6001",
                  model: "serviceStatus"
                },
                {
                  id: "1-2",
                  name: "\u5728\u7EBF\u72B6\u6001",
                  model: "onlienStatus"
                }
              ]
            },
            {
              id: 2,
              name: "\u64CD\u4F5C\u7CFB\u7EDF",
              model: "operatingSystem"
            }
          ],
          formData: { name: "", model: "" },
          formItems: [
            {
              field: "name",
              title: "\u5B57\u5178\u540D\u79F0",
              span: 24,
              itemRender: {
                name: "$input",
                props: {
                  placeholder: "\u8BF7\u8F93\u5165\u5B57\u5178\u540D\u79F0"
                }
              }
            },
            {
              field: "model",
              title: "\u5B57\u5178\u7C7B\u578B",
              span: 24,
              itemRender: {
                name: "$input",
                props: {
                  placeholder: "\u8BF7\u8F93\u5165\u5B57\u5178\u7C7B\u578B",
                  disabled: !0
                }
              }
            },
            {
              align: "right",
              span: 24,
              itemRender: {
                name: "$buttons",
                children: [
                  {
                    props: {
                      type: "submit",
                      content: "\u63D0\u4EA4",
                      status: "primary"
                    }
                  },
                  { props: { type: "reset", content: "\u91CD\u7F6E" } }
                ]
              }
            }
          ]
        });
      let g = G(e.tableData);
      const p = f(),
        E = f(),
        V = () => {
          const o = _.toValueString(e.filterName).trim();
          if (o) {
            const i = { children: "children" },
              x = ["name"];
            (e.tableData = _.searchTree(
              g,
              l => x.some(D => _.toValueString(l[D]).indexOf(o) > -1),
              i
            )),
              ne(() => {
                p.value.setAllTreeExpand(!0);
              });
          } else e.tableData = g;
        },
        y = _.debounce(
          function () {
            V();
          },
          100,
          { leading: !1, trailing: !0 }
        ),
        A = async () => {
          (await await h.modal.confirm(
            "\u60A8\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F"
          )) === "confirm" &&
            h.modal.message({
              content: "\u6D4B\u8BD5\u6570\u636E\uFF0C\u4E0D\u53EF\u5220\u9664",
              status: "error"
            });
        };
      function B(o, i) {
        (e.selectRow = o),
          (e.showEdit = !0),
          (e.formItems[1].itemRender.props.disabled = i);
      }
      function I() {
        B(null, !1);
      }
      function S(o) {
        B(null, !1);
      }
      function T(o) {
        (e.formData = {
          name: o.name,
          model: o.model ? o.model : "\u6682\u65E0\u5B57\u5178\u7C7B\u578B"
        }),
          B(o, !0);
      }
      const { clipboardValue: R } = Q(),
        $ = ({ row: o }) => {
          R.value = a(o).model;
        },
        N = f({}),
        L = () => {
          (e.submitLoading = !0),
            setTimeout(() => {
              const o = N.value;
              (e.submitLoading = !1),
                (e.showEdit = !1),
                e.selectRow
                  ? (h.modal.message({
                      content: "\u4FDD\u5B58\u6210\u529F",
                      status: "success"
                    }),
                    Object.assign(e.selectRow, e.formData))
                  : (h.modal.message({
                      content: "\u65B0\u589E\u6210\u529F",
                      status: "success"
                    }),
                    o.insert(e.formData));
            }, 500);
        };
      let v = f(!1);
      function q(o) {
        v.value = !0;
      }
      function U() {
        v.value = !1;
      }
      function O() {
        p.value.setAllTreeExpand(!0);
      }
      function j() {
        p.value.clearTreeExpand();
      }
      function z() {
        E.value.reset();
      }
      return (o, i) => {
        const x = s("el-input"),
          l = s("el-button"),
          D = s("el-button-group"),
          H = s("vxe-toolbar"),
          F = s("vxe-table-column"),
          K = s("el-tooltip"),
          J = s("vxe-table"),
          M = s("vxe-form"),
          P = s("vxe-modal");
        return (
          W(),
          Y("div", null, [
            t(
              H,
              { class: "dark:bg-dark" },
              {
                buttons: n(() => [
                  C("div", ce, [
                    re,
                    t(
                      x,
                      {
                        class: "!w-200px",
                        modelValue: e.filterName,
                        "onUpdate:modelValue":
                          i[0] || (i[0] = u => (e.filterName = u)),
                        placeholder: a(m)("buttons.hssearch"),
                        onKeyup: ee(a(y), ["prevent"]),
                        onInput: a(y),
                        clearable: ""
                      },
                      null,
                      8,
                      ["modelValue", "placeholder", "onKeyup", "onInput"]
                    )
                  ])
                ]),
                tools: n(() => [
                  t(D, null, {
                    default: n(() => [
                      t(
                        l,
                        {
                          type: "primary",
                          icon: a(c)("fa:plus-square-o", { online: !0 }),
                          onClick: I
                        },
                        {
                          default: n(() => [r(b(a(m)("buttons.hsadd")), 1)]),
                          _: 1
                        },
                        8,
                        ["icon"]
                      ),
                      t(
                        l,
                        {
                          type: "primary",
                          icon: a(c)("fa:folder-open-o", { online: !0 }),
                          onClick: O
                        },
                        {
                          default: n(() => [
                            r(b(a(m)("buttons.hsexpendAll")), 1)
                          ]),
                          _: 1
                        },
                        8,
                        ["icon"]
                      ),
                      t(
                        l,
                        {
                          type: "primary",
                          icon: a(c)("fa:folder-o", { online: !0 }),
                          onClick: j
                        },
                        {
                          default: n(() => [
                            r(b(a(m)("buttons.hscollapseAll")), 1)
                          ]),
                          _: 1
                        },
                        8,
                        ["icon"]
                      )
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }
            ),
            t(
              J,
              {
                ref_key: "xTree",
                ref: p,
                border: "",
                resizable: "",
                "tree-config": {
                  children: "children",
                  iconOpen: "fa fa-minus-square-o",
                  iconClose: "fa fa-plus-square-o"
                },
                data: e.tableData,
                onCellDblclick: $
              },
              {
                default: n(() => [
                  t(F, {
                    "tree-node": "",
                    field: "name",
                    title: "\u5B57\u5178\u540D\u79F0"
                  }),
                  t(
                    F,
                    { title: "\u5B57\u5178\u7C7B\u578B" },
                    {
                      default: n(({ row: u }) => [
                        t(
                          K,
                          {
                            effect: "dark",
                            content: "\u53CC\u51FB\u590D\u5236\uFF1A" + u.model,
                            placement: "right"
                          },
                          {
                            default: n(() => [C("span", de, b(u.model), 1)]),
                            _: 2
                          },
                          1032,
                          ["content"]
                        )
                      ]),
                      _: 1
                    }
                  ),
                  t(
                    F,
                    { title: "\u64CD\u4F5C", width: "360", fixed: "right" },
                    {
                      default: n(({ row: u }) => [
                        t(
                          l,
                          {
                            link: "",
                            type: "primary",
                            icon: a(c)("edits"),
                            onClick: k => T(u)
                          },
                          { default: n(() => [me]), _: 2 },
                          1032,
                          ["icon", "onClick"]
                        ),
                        t(
                          l,
                          {
                            link: "",
                            type: "primary",
                            icon: a(c)("fa:plus-square-o", { online: !0 }),
                            onClick: k => S()
                          },
                          { default: n(() => [pe]), _: 2 },
                          1032,
                          ["icon", "onClick"]
                        ),
                        te(
                          t(
                            l,
                            {
                              link: "",
                              type: "primary",
                              icon: a(c)("fa:cog", { online: !0 }),
                              onClick: k => q()
                            },
                            { default: n(() => [fe]), _: 2 },
                            1032,
                            ["icon", "onClick"]
                          ),
                          [[oe, u.model]]
                        ),
                        t(
                          l,
                          {
                            link: "",
                            type: "primary",
                            icon: a(c)("delete"),
                            onClick: A
                          },
                          { default: n(() => [_e]), _: 1 },
                          8,
                          ["icon"]
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
              P,
              {
                resize: "",
                width: "450",
                modelValue: e.showEdit,
                "onUpdate:modelValue": i[1] || (i[1] = u => (e.showEdit = u)),
                title: e.selectRow ? "\u7F16\u8F91" : "\u65B0\u589E",
                loading: e.submitLoading,
                onHide: z
              },
              {
                default: n(() => [
                  t(
                    M,
                    {
                      ref_key: "xForm",
                      ref: E,
                      data: e.formData,
                      items: e.formItems,
                      "title-align": "right",
                      "title-width": "100",
                      onSubmit: L
                    },
                    null,
                    8,
                    ["data", "items"]
                  )
                ]),
                _: 1
              },
              8,
              ["modelValue", "title", "loading"]
            ),
            t(
              se,
              {
                drawer: a(v),
                drawTitle: "\u5B57\u5178\u5217\u8868",
                onHandleClose: U
              },
              null,
              8,
              ["drawer"]
            )
          ])
        );
      };
    }
  });
const De = ue(he, [["__scopeId", "data-v-93f717de"]]);
export { De as default };
