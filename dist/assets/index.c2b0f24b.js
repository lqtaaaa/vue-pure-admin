import {
  d as g,
  A as f,
  bc as x,
  ab as q,
  ac as H,
  r as L,
  a_ as v,
  h as F,
  e as p,
  i as S,
  j as a,
  g as r,
  f as E,
  Y as D,
  k as e,
  l as n,
  Z as d,
  b as o,
  L as B,
  ae as k,
  bd as A
} from "./index.69183727.js";
import { h as V } from "./index.f879185a.js";
import { u as j } from "./hooks.cf58c23a.js";
const I = r(
    "div",
    null,
    "\u6807\u7B7E\u9875\u590D\u7528\uFF0C\u8D85\u51FA\u9650\u5236\u81EA\u52A8\u5173\u95ED\uFF08\u4F7F\u7528\u573A\u666F: \u52A8\u6001\u8DEF\u7531\uFF09",
    -1
  ),
  M = { class: "flex-wrap items-center" },
  P = r("p", null, "query\u4F20\u53C2\u6A21\u5F0F\uFF1A", -1),
  R = { class: "flex-wrap items-center" },
  z = r("p", null, "params\u4F20\u53C2\u6A21\u5F0F\uFF1A", -1),
  U = n("\u5173\u95ED\u6807\u7B7E"),
  Y = n(
    " \u8DF3\u8F6C\u9875\u5185\u83DC\u5355\uFF08\u4F20name\u5BF9\u8C61\uFF0C\u4F18\u5148\u63A8\u8350\uFF09 "
  ),
  Z = n(
    " \u8DF3\u8F6C\u9875\u5185\u83DC\u5355\uFF08\u76F4\u63A5\u4F20\u8981\u8DF3\u8F6C\u7684\u8DEF\u5F84\uFF09 "
  ),
  G = n(
    " \u8DF3\u8F6C\u9875\u5185\u83DC\u5355\uFF08\u4F20path\u5BF9\u8C61\uFF09 "
  ),
  J = n(" \u70B9\u51FB\u67E5\u770B\u66F4\u591A\u8DF3\u8F6C\u65B9\u5F0F "),
  K = n(" \u8DF3\u8F6C\u65E0Layout\u7684\u7A7A\u767D\u9875\u9762 "),
  O = g({ name: "Tabs" }),
  eu = g({
    ...O,
    setup(Q) {
      const { toDetail: C, router: b } = j();
      let c = f(() => x(q(H().menusTree), 0, { disabled: !0 }));
      const m = L([]);
      let h = f(() => {
        var s;
        return (s = v()) == null ? void 0 : s.multiTags;
      });
      function y() {
        m.value.forEach(s => {
          var l;
          let t = (l = A(c.value, s).redirect) != null ? l : A(c.value, s).path;
          v().handleTags("splice", t),
            t === "/tabs/index" &&
              b.push({ path: h.value[h.value.length - 1].path });
        });
      }
      return (s, t) => {
        const l = F("el-button"),
          i = F("el-divider"),
          $ = F("el-tag"),
          w = F("el-link"),
          T = F("el-card");
        return (
          p(),
          S(T, null, {
            header: a(() => [I]),
            default: a(() => [
              r("div", M, [
                P,
                (p(),
                E(
                  B,
                  null,
                  D(6, u =>
                    e(
                      l,
                      { class: "m-2", key: u, onClick: _ => o(C)(u, "query") },
                      {
                        default: a(() => [
                          n(" \u6253\u5F00" + d(u) + "\u8BE6\u60C5\u9875 ", 1)
                        ]),
                        _: 2
                      },
                      1032,
                      ["onClick"]
                    )
                  ),
                  64
                ))
              ]),
              e(i),
              r("div", R, [
                z,
                (p(),
                E(
                  B,
                  null,
                  D(6, u =>
                    e(
                      l,
                      { class: "m-2", key: u, onClick: _ => o(C)(u, "params") },
                      {
                        default: a(() => [
                          n(" \u6253\u5F00" + d(u) + "\u8BE6\u60C5\u9875 ", 1)
                        ]),
                        _: 2
                      },
                      1032,
                      ["onClick"]
                    )
                  ),
                  64
                ))
              ]),
              e(i),
              e(
                o(V),
                {
                  class: "w-300px",
                  value: m.value,
                  "onUpdate:value": t[0] || (t[0] = u => (m.value = u)),
                  "show-search": "",
                  "dropdown-style": { maxHeight: "400px", overflow: "auto" },
                  placeholder:
                    "\u8BF7\u9009\u62E9\u8981\u5173\u95ED\u7684\u6807\u7B7E",
                  fieldNames: {
                    children: "children",
                    key: "uniqueId",
                    value: "uniqueId"
                  },
                  "allow-clear": "",
                  multiple: "",
                  "tree-default-expand-all": "",
                  "tree-data": o(c)
                },
                {
                  tagRender: a(({ closable: u, onClose: _, option: N }) => [
                    e(
                      $,
                      { class: "mr-3px", closable: u, onClose: _ },
                      { default: a(() => [n(d(o(k)(N.meta.title)), 1)]), _: 2 },
                      1032,
                      ["closable", "onClose"]
                    )
                  ]),
                  title: a(({ data: u }) => [
                    r("span", null, d(o(k)(u.meta.title)), 1)
                  ]),
                  _: 1
                },
                8,
                ["value", "tree-data"]
              ),
              e(
                l,
                { class: "m-2", onClick: y },
                { default: a(() => [U]), _: 1 }
              ),
              e(i),
              e(
                l,
                {
                  onClick:
                    t[1] || (t[1] = u => s.$router.push({ name: "Menu1-2-2" }))
                },
                { default: a(() => [Y]), _: 1 }
              ),
              e(
                l,
                {
                  onClick:
                    t[2] ||
                    (t[2] = u =>
                      s.$router.push("/nested/menu1/menu1-2/menu1-2-2"))
                },
                { default: a(() => [Z]), _: 1 }
              ),
              e(
                l,
                {
                  onClick:
                    t[3] ||
                    (t[3] = u =>
                      s.$router.push({
                        path: "/nested/menu1/menu1-2/menu1-2-2"
                      }))
                },
                { default: a(() => [G]), _: 1 }
              ),
              e(
                w,
                {
                  class: "ml-4",
                  href: "https://router.vuejs.org/zh/guide/essentials/navigation.html#%E5%AF%BC%E8%88%AA%E5%88%B0%E4%B8%8D%E5%90%8C%E7%9A%84%E4%BD%8D%E7%BD%AE",
                  target: "_blank"
                },
                { default: a(() => [J]), _: 1 }
              ),
              e(i),
              e(
                l,
                {
                  onClick:
                    t[4] || (t[4] = u => s.$router.push({ name: "Empty" }))
                },
                { default: a(() => [K]), _: 1 }
              )
            ]),
            _: 1
          })
        );
      };
    }
  });
export { eu as default };
