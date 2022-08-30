import { h as p } from "./index.f879185a.js";
import {
  d as E,
  r as u,
  h as N,
  e as v,
  i as T,
  j as d,
  g as l,
  k as r,
  f as h,
  l as o,
  Z as f,
  L as C,
  b as c
} from "./index.69183727.js";
const b = { class: "card-header" },
  P = { class: "font-medium" },
  S = o(" \u4EFFantdv\u6811\u9009\u62E9\uFF0C\u91C7\u7528 "),
  H = o(" @pureadmin/components "),
  I = o(" \uFF0C\u5B8C\u5168\u517C\u5BB9antdv\u7684 "),
  U = o(" TreeSelect "),
  j = o(" \u5199\u6CD5 "),
  R = { class: "flex justify-around flex-wrap" },
  V = l("span", null, "\u7EBF\u6027\u6837\u5F0F\uFF1A", -1),
  z = { key: 0, style: { color: "#08c" } },
  L = l("span", null, "\u865A\u62DF\u6EDA\u52A8\uFF1A", -1),
  O = { key: 0, style: { color: "#1890ff" } },
  W = l("span", null, "\u53EF\u52FE\u9009\uFF1A", -1),
  $ = l("span", null, "\u5F02\u6B65\u52A0\u8F7D\uFF1A", -1),
  K = E({ name: "AntTreeSelect" }),
  G = E({
    ...K,
    setup(M) {
      const m = u(""),
        A = u([
          {
            title: "parent 1",
            value: "parent 1",
            children: [
              {
                title: "parent 1-0",
                value: "parent 1-0",
                children: [
                  { title: "my leaf", value: "leaf1" },
                  { title: "your leaf", value: "leaf2" }
                ]
              },
              { title: "parent 1-1", value: "parent 1-1" }
            ]
          }
        ]),
        x = p.SHOW_PARENT;
      function F(s = "0", e = 3) {
        const a = [];
        for (let i = 0; i < 10; i += 1) {
          const t = `${s}-${i}`,
            n = { title: t, value: t };
          e > 0 && (n.children = F(t, e - 1)), a.push(n);
        }
        return a;
      }
      const w = u(["0-0-0", "0-0-1"]),
        g = u(["0-0-0"]),
        B = [
          {
            title: "Node1",
            value: "0-0",
            children: [{ title: "Child Node1", value: "0-0-0" }]
          },
          {
            title: "Node2",
            value: "0-1",
            children: [
              { title: "Child Node3", value: "0-1-0", disabled: !0 },
              { title: "Child Node4", value: "0-1-1" },
              { title: "Child Node5", value: "0-1-2" }
            ]
          }
        ],
        k = u(),
        _ = u([
          { id: 1, pId: 0, value: "1", title: "Expand to load" },
          { id: 2, pId: 0, value: "2", title: "Expand to load" },
          { id: 3, pId: 0, value: "3", title: "Tree Node", isLeaf: !0 }
        ]),
        y = (s, e = !1) => {
          const a = Math.random().toString(36).substring(2, 6);
          return {
            id: a,
            pId: s,
            value: a,
            title: e ? "Tree Node" : "Expand to load",
            isLeaf: e
          };
        },
        D = s =>
          new Promise(e => {
            const { id: a } = s.dataRef;
            setTimeout(() => {
              (_.value = _.value.concat([y(a, !1), y(a, !0)])), e(!0);
            }, 300);
          });
      return (s, e) => {
        const a = N("el-link"),
          i = N("el-card");
        return (
          v(),
          T(i, null, {
            header: d(() => [
              l("div", b, [
                l("span", P, [
                  S,
                  r(
                    a,
                    {
                      href: "https://www.npmjs.com/package/@pureadmin/components",
                      target: "_blank",
                      style: { "font-size": "16px", margin: "0 4px 5px" }
                    },
                    { default: d(() => [H]), _: 1 }
                  ),
                  I,
                  r(
                    a,
                    {
                      href: "https://next.antdv.com/components/tree-select-cn",
                      target: "_blank",
                      style: { "font-size": "16px", margin: "0 4px 5px" }
                    },
                    { default: d(() => [U]), _: 1 }
                  ),
                  j
                ])
              ])
            ]),
            default: d(() => [
              l("div", R, [
                l("div", null, [
                  V,
                  r(
                    c(p),
                    {
                      class: "w-200px",
                      value: m.value,
                      "onUpdate:value": e[0] || (e[0] = t => (m.value = t)),
                      "show-search": "",
                      "dropdown-style": {
                        maxHeight: "400px",
                        overflow: "auto"
                      },
                      placeholder: "Please select",
                      "allow-clear": "",
                      "tree-line": !0,
                      "tree-default-expand-all": "",
                      "tree-data": A.value
                    },
                    {
                      title: d(({ value: t, title: n }) => [
                        t === "parent 1-1"
                          ? (v(), h("b", z, "sss"))
                          : (v(), h(C, { key: 1 }, [o(f(n), 1)], 64))
                      ]),
                      _: 1
                    },
                    8,
                    ["value", "tree-data"]
                  )
                ]),
                l("div", null, [
                  L,
                  r(
                    c(p),
                    {
                      class: "w-200px mt-6",
                      value: w.value,
                      "onUpdate:value": e[1] || (e[1] = t => (w.value = t)),
                      "tree-checkable": "",
                      "tree-default-expand-all": "",
                      "show-checked-strategy": c(x),
                      height: 233,
                      "tree-data": F(),
                      "max-tag-count": 10
                    },
                    {
                      title: d(({ title: t, value: n }) => [
                        n === "0-0-1-0"
                          ? (v(), h("span", O, f(t), 1))
                          : (v(), h(C, { key: 1 }, [o(f(t), 1)], 64))
                      ]),
                      _: 1
                    },
                    8,
                    ["value", "show-checked-strategy", "tree-data"]
                  )
                ]),
                l("div", null, [
                  W,
                  r(
                    c(p),
                    {
                      class: "w-200px",
                      value: g.value,
                      "onUpdate:value": e[2] || (e[2] = t => (g.value = t)),
                      "tree-data": B,
                      "tree-checkable": "",
                      "allow-clear": "",
                      "show-checked-strategy": c(x),
                      placeholder: "Please select"
                    },
                    null,
                    8,
                    ["value", "show-checked-strategy"]
                  )
                ]),
                l("div", null, [
                  $,
                  r(
                    c(p),
                    {
                      class: "w-200px",
                      value: k.value,
                      "onUpdate:value": e[3] || (e[3] = t => (k.value = t)),
                      "tree-data-simple-mode": "",
                      "dropdown-style": {
                        maxHeight: "400px",
                        overflow: "auto"
                      },
                      "tree-data": _.value,
                      placeholder: "Please select",
                      "load-data": D
                    },
                    null,
                    8,
                    ["value", "tree-data"]
                  )
                ])
              ])
            ]),
            _: 1
          })
        );
      };
    }
  });
export { G as default };
