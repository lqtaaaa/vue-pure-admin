import {
  d as F,
  r as p,
  y as O,
  o as j,
  b7 as $,
  h as a,
  e as A,
  f as M,
  g as v,
  k as t,
  j as o,
  w as L,
  I as P,
  b as c,
  l as _,
  Z as T,
  ay as U,
  ar as Z,
  ak as q,
  al as G,
  V as H,
  _ as J
} from "./index.69183727.js";
import { g as K } from "./system.fe4630a1.js";
import { u as g } from "./hooks.5d98ec2d.js";
const Q = u => (q("data-v-75babf40"), (u = u()), G(), u),
  W = { class: "max-w-260px h-full min-h-780px bg-white dark:bg-dark" },
  X = { class: "flex items-center h-34px" },
  Y = Q(() =>
    v(
      "p",
      {
        class: "flex-1 ml-2 font-bold text-base truncate",
        title: "\u90E8\u95E8\u5217\u8868"
      },
      " \u90E8\u95E8\u5217\u8868 ",
      -1
    )
  ),
  ee = _(" \u5C55\u5F00\u5168\u90E8 "),
  te = _(" \u6298\u53E0\u5168\u90E8 "),
  oe = _(" \u91CD\u7F6E\u72B6\u6001 "),
  ne = F({
    __name: "tree",
    setup(u) {
      const E = { children: "children", label: "name" },
        x = p([]),
        i = p(""),
        { proxy: I } = H(),
        y = p();
      let r = p({});
      const C = (n, e) => (n ? e.name.includes(n) : !0);
      function V(n) {
        var l;
        const e = n.$treeNodeId;
        (r.value[e] =
          (l = r.value[e]) != null && l.highlight
            ? Object.assign({ id: e }, r.value[e], { highlight: !1 })
            : Object.assign({ id: e }, r.value[e], { highlight: !0 })),
          Object.values(r.value).forEach(d => {
            d.id !== e && (d.highlight = !1);
          });
      }
      function f(n) {
        let e = I.$refs.treeRef.store._getAllNodes();
        for (var l = 0; l < e.length; l++) e[l].expanded = n;
      }
      function N() {
        (r.value = {}), (i.value = ""), f(!0);
      }
      return (
        O(i, n => {
          y.value.filter(n);
        }),
        j(async () => {
          let { data: n } = await K();
          x.value = $(n);
        }),
        (n, e) => {
          const l = a("IconifyIconOffline"),
            d = a("el-icon"),
            D = a("el-input"),
            m = a("el-button"),
            h = a("el-dropdown-item"),
            R = a("el-dropdown-menu"),
            S = a("el-dropdown"),
            z = a("el-divider"),
            B = a("el-tree");
          return (
            A(),
            M("div", W, [
              v("div", X, [
                Y,
                t(
                  D,
                  {
                    style: { flex: "2" },
                    size: "small",
                    modelValue: i.value,
                    "onUpdate:modelValue": e[0] || (e[0] = s => (i.value = s)),
                    placeholder: "\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0",
                    clearable: ""
                  },
                  {
                    suffix: o(() => [
                      t(
                        d,
                        { class: "el-input__icon" },
                        {
                          default: o(() => [
                            L(t(l, { icon: "search" }, null, 512), [
                              [P, i.value.length === 0]
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
                ),
                t(S, null, {
                  dropdown: o(() => [
                    t(R, null, {
                      default: o(() => [
                        t(h, null, {
                          default: o(() => [
                            t(
                              m,
                              {
                                class:
                                  "reset-margin !h-20px !text-gray-500 !dark:hover:color-primary",
                                link: "",
                                type: "primary",
                                icon: c(g)("expand"),
                                onClick: e[1] || (e[1] = s => f(!0))
                              },
                              { default: o(() => [ee]), _: 1 },
                              8,
                              ["icon"]
                            )
                          ]),
                          _: 1
                        }),
                        t(h, null, {
                          default: o(() => [
                            t(
                              m,
                              {
                                class:
                                  "reset-margin !h-20px !text-gray-500 !dark:hover:color-primary",
                                link: "",
                                type: "primary",
                                icon: c(g)("unExpand"),
                                onClick: e[2] || (e[2] = s => f(!1))
                              },
                              { default: o(() => [te]), _: 1 },
                              8,
                              ["icon"]
                            )
                          ]),
                          _: 1
                        }),
                        t(h, null, {
                          default: o(() => [
                            t(
                              m,
                              {
                                class:
                                  "reset-margin !h-20px !text-gray-500 !dark:hover:color-primary",
                                link: "",
                                type: "primary",
                                icon: c(g)("reset"),
                                onClick: N
                              },
                              { default: o(() => [oe]), _: 1 },
                              8,
                              ["icon"]
                            )
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  default: o(() => [
                    t(l, {
                      class: "w-28px cursor-pointer",
                      width: "18px",
                      icon: "more-vertical"
                    })
                  ]),
                  _: 1
                })
              ]),
              t(z),
              t(
                B,
                {
                  ref_key: "treeRef",
                  ref: y,
                  data: x.value,
                  "node-key": "id",
                  size: "small",
                  props: E,
                  "default-expand-all": "",
                  "expand-on-click-node": !1,
                  "filter-node-method": C,
                  onNodeClick: V
                },
                {
                  default: o(({ node: s, data: b }) => {
                    var k, w;
                    return [
                      v(
                        "span",
                        {
                          class: U([
                            "pl-1",
                            "pr-1",
                            "rounded",
                            "flex",
                            "items-center",
                            "select-none",
                            i.value.trim().length > 0 &&
                              s.label.includes(i.value) &&
                              "text-red-500",
                            (k = c(r)[s.id]) != null && k.highlight
                              ? "dark:color-primary"
                              : ""
                          ]),
                          style: Z({
                            background:
                              (w = c(r)[s.id]) != null && w.highlight
                                ? "var(--el-color-primary-light-7)"
                                : "transparent"
                          })
                        },
                        [
                          t(
                            l,
                            {
                              icon:
                                b.type === 1
                                  ? "office-building"
                                  : b.type === 2
                                  ? "location-company"
                                  : "dept"
                            },
                            null,
                            8,
                            ["icon"]
                          ),
                          _(" " + T(s.label), 1)
                        ],
                        6
                      )
                    ];
                  }),
                  _: 1
                },
                8,
                ["data"]
              )
            ])
          );
        }
      );
    }
  });
const se = J(ne, [["__scopeId", "data-v-75babf40"]]);
export { se as default };
