import {
  C as r,
  a as p,
  b as v,
  c as C,
  d as f,
  e as g
} from "./index.esm.c79b8927.js";
import {
  d as F,
  _ as I,
  h as c,
  c as b,
  e as a,
  f as l,
  w,
  k as t,
  j as e,
  L as x,
  Y as A,
  i as d,
  l as o,
  Z as E,
  ak as S,
  al as N,
  g as D
} from "./index.69183727.js";
const V = F({
  name: "ExampleDynamic",
  components: {
    [r.name]: r,
    [p.name]: p,
    [v.name]: v,
    [C.name]: C,
    [f.name]: f
  },
  directives: { contextmenu: g },
  data() {
    return { extra: [] };
  },
  methods: {
    addItem(n = "item") {
      this.extra.push(n);
    },
    removeItem() {
      this.extra.pop();
    }
  }
});
const h = n => (S("data-v-35002170"), (n = n()), N(), n),
  L = h(() => D("h1", null, "\u52A8\u6001\u83DC\u5355", -1)),
  j = { class: "wrapper" },
  G = h(() =>
    D("code", null, "\u53F3\u952E\u70B9\u51FB\u6B64\u533A\u57DF", -1)
  ),
  T = [G],
  Y = o(" \u6DFB\u52A0\u83DC\u5355 "),
  Z = o(" \u6DFB\u52A0\u83DC\u5355\u7EC4 "),
  q = o(" \u6DFB\u52A0\u5B50\u83DC\u5355 "),
  z = o(" \u5220\u9664 "),
  H = o("\u83DC\u53551"),
  J = o("\u83DC\u53552"),
  K = o("\u83DC\u53553"),
  M = o("\u83DC\u53551"),
  O = o("\u83DC\u53552"),
  P = o("\u83DC\u53553");
function Q(n, s, R, U, W, X) {
  const u = c("v-contextmenu-item"),
    m = c("v-contextmenu-group"),
    k = c("v-contextmenu-divider"),
    B = c("v-contextmenu-submenu"),
    y = c("v-contextmenu"),
    $ = b("contextmenu");
  return (
    a(),
    l("div", null, [
      L,
      w((a(), l("div", j, T)), [[$, void 0, "contextmenu"]]),
      t(
        y,
        { ref: "contextmenu" },
        {
          default: e(() => [
            t(
              m,
              { title: "\u64CD\u4F5C" },
              {
                default: e(() => [
                  t(
                    u,
                    {
                      "hide-on-click": !1,
                      onClick: s[0] || (s[0] = _ => n.extra.push("item"))
                    },
                    { default: e(() => [Y]), _: 1 }
                  ),
                  t(
                    u,
                    {
                      "hide-on-click": !1,
                      onClick: s[1] || (s[1] = _ => n.extra.push("group"))
                    },
                    { default: e(() => [Z]), _: 1 }
                  ),
                  t(
                    u,
                    {
                      "hide-on-click": !1,
                      onClick: s[2] || (s[2] = _ => n.extra.push("submenu"))
                    },
                    { default: e(() => [q]), _: 1 }
                  ),
                  t(
                    u,
                    {
                      "hide-on-click": !1,
                      onClick: s[3] || (s[3] = _ => n.extra.pop())
                    },
                    { default: e(() => [z]), _: 1 }
                  )
                ]),
                _: 1
              }
            ),
            (a(!0),
            l(
              x,
              null,
              A(
                n.extra,
                (_, i) => (
                  a(),
                  l(
                    x,
                    { key: i },
                    [
                      t(k),
                      _ === "group"
                        ? (a(),
                          d(
                            m,
                            { key: 0, title: `\u83DC\u5355\u7EC4 ${i + 1}` },
                            {
                              default: e(() => [
                                t(u, null, { default: e(() => [H]), _: 1 }),
                                t(u, null, { default: e(() => [J]), _: 1 }),
                                t(u, null, { default: e(() => [K]), _: 1 })
                              ]),
                              _: 2
                            },
                            1032,
                            ["title"]
                          ))
                        : _ === "submenu"
                        ? (a(),
                          d(
                            B,
                            { key: 1, title: `\u5B50\u83DC\u5355 ${i + 1}` },
                            {
                              default: e(() => [
                                t(u, null, { default: e(() => [M]), _: 1 }),
                                t(u, null, { default: e(() => [O]), _: 1 }),
                                t(u, null, { default: e(() => [P]), _: 1 })
                              ]),
                              _: 2
                            },
                            1032,
                            ["title"]
                          ))
                        : (a(),
                          d(
                            u,
                            { key: 2 },
                            {
                              default: e(() => [
                                o("\u83DC\u5355 " + E(i + 1), 1)
                              ]),
                              _: 2
                            },
                            1024
                          ))
                    ],
                    64
                  )
                )
              ),
              128
            ))
          ]),
          _: 1
        },
        512
      )
    ])
  );
}
const ne = I(V, [
  ["render", Q],
  ["__scopeId", "data-v-35002170"]
]);
export { ne as default };
