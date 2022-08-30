import {
  d as x,
  s as _,
  aa as g,
  A as w,
  ab as D,
  ac as L,
  ad as k,
  h as f,
  e as A,
  i as E,
  j as a,
  k as r,
  g as n,
  b as s,
  Z as y,
  ae as b
} from "./index.69183727.js";
const S = x({
    name: "ReTreeLine",
    props: {
      node: { type: Object, required: !0 },
      data: { type: Array, default: () => {} },
      treeData: { type: Array, default: () => [] },
      indent: { type: Number, default: 16 },
      showLabelLine: { type: Boolean, default: !0 }
    },
    setup(m, o) {
      const { slots: u } = o;
      return {
        getScopedSlot: t => {
          if (!t) return null;
          const d = t.split("||");
          let e = null;
          for (let l = 0; l < d.length; l++) {
            const i = d[l];
            e = (u || {})[i];
          }
          return e;
        },
        getSlotValue: (t, d, e = null) => (g(t) ? t(d) || e : t || e)
      };
    },
    render() {
      const m = this.getScopedSlot("default"),
        o = this.getScopedSlot("node-label"),
        u = this.getScopedSlot("after-node-label"),
        c = m
          ? this.getSlotValue(m, { node: this.node, data: this.data })
          : [
              o
                ? this.getSlotValue(o, { node: this.node, data: this.data })
                : _(
                    "span",
                    { class: "element-tree-node-label" },
                    this.node.label
                  ),
              this.showLabelLine
                ? _("span", { class: "element-tree-node-label-line" })
                : null,
              this.getSlotValue(u, { node: this.node, data: this.data })
            ],
        h = [];
      let t = this.node;
      for (; t; ) {
        let e = t.parent;
        if (t.level === 1 && !t.parent) {
          if (!this.treeData || !Array.isArray(this.treeData))
            throw Error(
              "if you using el-tree-v2 (Virtualized Tree) of element-plus,element-tree-line required data."
            );
          e = {
            children: Array.isArray(this.treeData)
              ? this.treeData.map(l => ({ ...l, key: l.id }))
              : [],
            level: 0,
            key: "node-0",
            parent: null
          };
        }
        if (e) {
          const l = (e.children || e.childNodes).findIndex(
            i => (i.key || i.id) === (t.key || t.id)
          );
          h.unshift(l === (e.children || e.childNodes).length - 1);
        }
        t = e;
      }
      const d = [];
      for (let e = 0; e < this.node.level; e++)
        d.push(
          _("span", {
            class: {
              "element-tree-node-line-ver": !0,
              "last-node-line": h[e] && this.node.level - 1 !== e,
              "last-node-isLeaf-line": h[e] && this.node.level - 1 === e
            },
            style: { left: this.indent * e + "px" }
          })
        );
      return _(
        "span",
        { class: "element-tree-node-label-wrapper" },
        [c]
          .concat(d)
          .concat([
            _("span", {
              class: "element-tree-node-line-hor",
              style: {
                width: (this.node.isLeaf ? 24 : 8) + "px",
                left: (this.node.level - 1) * this.indent + "px"
              }
            })
          ])
      );
    }
  }),
  F = n(
    "div",
    { class: "card-header" },
    [
      n(
        "span",
        { class: "font-medium" },
        " \u6269\u5C55elemenet-plus\u7684\u6811\u5F62\u7EC4\u4EF6\u5305\u62EC\u865A\u62DF\u6811\u7EC4\u4EF6\uFF0C\u652F\u6301\u8FDE\u63A5\u7EBF "
      )
    ],
    -1
  ),
  C = n(
    "div",
    { class: "card-header" },
    [n("span", { class: "font-medium" }, " \u666E\u901A\u6811\u7ED3\u6784 ")],
    -1
  ),
  N = { class: "max-h-550px overflow-y-auto" },
  V = { class: "text-sm" },
  B = n(
    "div",
    { class: "card-header" },
    [n("span", { class: "font-medium" }, " \u865A\u62DF\u6811\u7ED3\u6784 ")],
    -1
  ),
  T = { class: "max-h-550px overflow-y-auto" },
  q = { class: "text-sm" },
  I = x({ name: "LineTree" }),
  P = x({
    ...I,
    setup(m) {
      let o = w(() => D(L().menusTree)),
        u = k(o.value),
        c = { value: "uniqueId", children: "children" };
      return (h, t) => {
        const d = f("el-tree"),
          e = f("el-card"),
          l = f("el-col"),
          i = f("el-tree-v2"),
          v = f("el-row");
        return (
          A(),
          E(e, null, {
            header: a(() => [F]),
            default: a(() => [
              r(
                v,
                { gutter: 24 },
                {
                  default: a(() => [
                    r(
                      l,
                      {
                        xs: 24,
                        sm: 24,
                        md: 12,
                        lg: 12,
                        xl: 12,
                        class: "mb-20px"
                      },
                      {
                        default: a(() => [
                          r(e, null, {
                            header: a(() => [C]),
                            default: a(() => [
                              n("div", N, [
                                r(
                                  d,
                                  {
                                    data: s(o),
                                    props: s(c),
                                    "show-checkbox": "",
                                    "default-expand-all": "",
                                    "node-key": "uniqueId",
                                    indent: 30
                                  },
                                  {
                                    default: a(({ node: p }) => [
                                      r(
                                        s(S),
                                        { node: p, showLabelLine: !0 },
                                        {
                                          "node-label": a(() => [
                                            n(
                                              "span",
                                              V,
                                              y(s(b)(p.data.meta.title)),
                                              1
                                            )
                                          ]),
                                          _: 2
                                        },
                                        1032,
                                        ["node"]
                                      )
                                    ]),
                                    _: 1
                                  },
                                  8,
                                  ["data", "props"]
                                )
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }
                    ),
                    r(
                      l,
                      { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
                      {
                        default: a(() => [
                          r(e, null, {
                            header: a(() => [B]),
                            default: a(() => [
                              n("div", T, [
                                r(
                                  i,
                                  {
                                    data: s(o),
                                    props: s(c),
                                    "show-checkbox": "",
                                    height: 550,
                                    "default-expanded-keys": s(u)
                                  },
                                  {
                                    default: a(({ node: p }) => [
                                      r(
                                        s(S),
                                        {
                                          node: p,
                                          treeData: s(o),
                                          showLabelLine: !0,
                                          indent: 30
                                        },
                                        {
                                          "node-label": a(() => [
                                            n(
                                              "span",
                                              q,
                                              y(s(b)(p.data.meta.title)),
                                              1
                                            )
                                          ]),
                                          _: 2
                                        },
                                        1032,
                                        ["node", "treeData"]
                                      )
                                    ]),
                                    _: 1
                                  },
                                  8,
                                  ["data", "props", "default-expanded-keys"]
                                )
                              ])
                            ]),
                            _: 1
                          })
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
        );
      };
    }
  });
export { P as default };
