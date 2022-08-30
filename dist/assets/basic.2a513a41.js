import {
  C as a,
  a as d,
  b as i,
  c as l,
  d as m,
  e as h
} from "./index.esm.c79b8927.js";
import {
  d as D,
  _ as b,
  h as s,
  c as F,
  e as r,
  f as p,
  w as B,
  k as e,
  j as t,
  l as o,
  ak as w,
  al as E,
  g as x
} from "./index.69183727.js";
const I = D({
  name: "ExampleSimple",
  components: {
    [a.name]: a,
    [d.name]: d,
    [i.name]: i,
    [l.name]: l,
    [m.name]: m
  },
  directives: { contextmenu: h }
});
const C = u => (w("data-v-5197b2ef"), (u = u()), E(), u),
  S = C(() => x("h1", null, "\u57FA\u672C\u4F7F\u7528", -1)),
  k = { class: "wrapper" },
  A = C(() =>
    x("code", null, "\u53F3\u952E\u70B9\u51FB\u6B64\u533A\u57DF", -1)
  ),
  $ = [A],
  G = o("GitHub"),
  N = o("GitLab"),
  V = o("\u571F\u8C46"),
  g = o("\u5C0F\u6CB9\u83DC"),
  y = o("\u7A7A\u5FC3\u83DC"),
  j = o("\u9EC4\u74DC"),
  H = o("\u83E0\u841D\u871C"),
  L = o("\u54C8\u5BC6\u74DC");
function T(u, q, z, J, K, M) {
  const n = s("v-contextmenu-item"),
    _ = s("v-contextmenu-divider"),
    c = s("v-contextmenu-submenu"),
    v = s("v-contextmenu"),
    f = F("contextmenu");
  return (
    r(),
    p("div", null, [
      S,
      B((r(), p("div", k, $)), [[f, void 0, "contextmenu"]]),
      e(
        v,
        { ref: "contextmenu" },
        {
          default: t(() => [
            e(n, null, { default: t(() => [G]), _: 1 }),
            e(n, null, { default: t(() => [N]), _: 1 }),
            e(_),
            e(
              c,
              { title: "\u852C\u83DC\u83DC" },
              {
                default: t(() => [
                  e(n, null, { default: t(() => [V]), _: 1 }),
                  e(
                    c,
                    { title: "\u9752\u83DC" },
                    {
                      default: t(() => [
                        e(n, null, { default: t(() => [g]), _: 1 }),
                        e(n, null, { default: t(() => [y]), _: 1 })
                      ]),
                      _: 1
                    }
                  ),
                  e(n, null, { default: t(() => [j]), _: 1 })
                ]),
                _: 1
              }
            ),
            e(n, { disabled: "" }, { default: t(() => [H]), _: 1 }),
            e(_),
            e(n, null, { default: t(() => [L]), _: 1 })
          ]),
          _: 1
        },
        512
      )
    ])
  );
}
const Q = b(I, [
  ["render", T],
  ["__scopeId", "data-v-5197b2ef"]
]);
export { Q as default };
