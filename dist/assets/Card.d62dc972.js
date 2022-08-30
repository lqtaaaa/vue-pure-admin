import {
  e as t,
  f as i,
  g as o,
  d as V,
  A as f,
  h as d,
  k as n,
  j as a,
  ay as g,
  b as s,
  i as l,
  ax as r,
  l as m,
  Z as u,
  _ as B
} from "./index.69183727.js";
const I = {
    fill: "none",
    viewBox: "0 0 16 16",
    width: "1em",
    height: "1em",
    class: "t-icon t-icon-shop"
  },
  S = o(
    "path",
    {
      fill: "currentColor",
      d: "M8 1a2.5 2.5 0 0 0-2.5 2.5V5h-2a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-2V3.5A2.5 2.5 0 0 0 8 1zm1.5 5v2h1V6H12v8H4V6h1.5v2h1V6h3zm0-1h-3V3.5a1.5 1.5 0 1 1 3 0V5z"
    },
    null,
    -1
  ),
  A = [S];
function D(e, c) {
  return t(), i("svg", I, A);
}
const N = { render: D },
  j = {
    fill: "none",
    viewBox: "0 0 16 16",
    width: "1em",
    height: "1em",
    class: "t-icon t-icon-laptop"
  },
  F = o(
    "path",
    {
      fill: "currentColor",
      d: "M2.5 12a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-11zm0-1h11V4h-11v7zM15 13H1v1h14v-1z"
    },
    null,
    -1
  ),
  O = [F];
function E(e, c) {
  return t(), i("svg", j, O);
}
const L = { render: E },
  R = {
    fill: "none",
    viewBox: "0 0 16 16",
    width: "1em",
    height: "1em",
    class: "t-icon t-icon-service"
  },
  T = o(
    "path",
    {
      fill: "currentColor",
      d: "M2.52 6.37a5.5 5.5 0 0 1 10.98.13v4c0 .05 0 .1-.02.15A4.5 4.5 0 0 1 9 14.7H8v-1h1a3.5 3.5 0 0 0 3.4-2.7h-1.9a.5.5 0 0 1-.5-.5v-4c0-.28.22-.5.5-.5h1.93a4.5 4.5 0 0 0-8.86 0H5.5c.28 0 .5.22.5.5v4a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-4c0-.04 0-.09.02-.13zM12.5 7H11v3h1.5V7zm-9 0v3H5V7H3.5z"
    },
    null,
    -1
  ),
  Z = [T];
function q(e, c) {
  return t(), i("svg", R, Z);
}
const G = { render: q },
  J = {
    fill: "none",
    viewBox: "0 0 16 16",
    width: "1em",
    height: "1em",
    class: "t-icon t-icon-calendar"
  },
  K = o(
    "path",
    {
      fill: "currentColor",
      d: "M10 3H6V1.5H5V3H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-2V1.5h-1V3zM5 5h1V4h4v1h1V4h2v2H3V4h2v1zM3 7h10v6H3V7z"
    },
    null,
    -1
  ),
  P = [K];
function Q(e, c) {
  return t(), i("svg", J, P);
}
const U = { render: Q },
  W = {
    fill: "none",
    viewBox: "0 0 16 16",
    width: "1em",
    height: "1em",
    class: "t-icon t-icon-user-avatar"
  },
  X = o(
    "path",
    {
      fill: "currentColor",
      d: "M8 10.5c1.24 0 2.42.31 3.5.88v1.12h1v-1.14a.94.94 0 0 0-.49-.84 8.48 8.48 0 0 0-8.02 0 .94.94 0 0 0-.49.84v1.14h1v-1.12A7.47 7.47 0 0 1 8 10.5zM10.5 6a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm-1 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"
    },
    null,
    -1
  ),
  Y = o(
    "path",
    {
      fill: "currentColor",
      d: "M2.5 1.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-11zm11 1v11h-11v-11h11z"
    },
    null,
    -1
  ),
  ee = [X, Y];
function te(e, c) {
  return t(), i("svg", W, ee);
}
const oe = { render: te },
  ce = { class: "list-card-item_detail !bg-white !dark:bg-dark" },
  ne = { class: "list-card-item_detail--operation" },
  ae = m(" \u7BA1\u7406 "),
  se = m(" \u5220\u9664 "),
  de = { class: "list-card-item_detail--name color-text_color_primary" },
  ie = { class: "list-card-item_detail--desc color-text_color_regular" },
  le = V({ name: "ReCard" }),
  re = V({
    ...le,
    props: { product: { type: Object } },
    emits: ["manage-product", "delete-item"],
    setup(e, { emit: c }) {
      const v = e,
        x = h => {
          c("manage-product", h);
        },
        w = h => {
          c("delete-item", h);
        },
        $ = f(() => [
          "list-card-item",
          { "list-card-item__disabled": !v.product.isSetup }
        ]),
        C = f(() => [
          "list-card-item_detail--logo",
          { "list-card-item_detail--logo__disabled": !v.product.isSetup }
        ]);
      return (h, _) => {
        const y = d("el-tag"),
          z = d("IconifyIconOffline"),
          p = d("el-dropdown-item"),
          k = d("el-dropdown-menu"),
          H = d("el-dropdown"),
          M = d("el-row");
        return (
          t(),
          i(
            "div",
            { class: g(s($)) },
            [
              o("div", ce, [
                n(
                  M,
                  { justify: "space-between" },
                  {
                    default: a(() => [
                      o(
                        "div",
                        { class: g(s(C)) },
                        [
                          e.product.type === 1
                            ? (t(), l(s(N), { key: 0 }))
                            : r("", !0),
                          e.product.type === 2
                            ? (t(), l(s(U), { key: 1 }))
                            : r("", !0),
                          e.product.type === 3
                            ? (t(), l(s(G), { key: 2 }))
                            : r("", !0),
                          e.product.type === 4
                            ? (t(), l(s(oe), { key: 3 }))
                            : r("", !0),
                          e.product.type === 5
                            ? (t(), l(s(L), { key: 4 }))
                            : r("", !0)
                        ],
                        2
                      ),
                      o("div", ne, [
                        n(
                          y,
                          {
                            color: e.product.isSetup ? "#00a870" : "#eee",
                            effect: "dark",
                            class: "mx-1 list-card-item_detail--operation--tag"
                          },
                          {
                            default: a(() => [
                              m(
                                u(
                                  e.product.isSetup
                                    ? "\u5DF2\u542F\u7528"
                                    : "\u5DF2\u505C\u7528"
                                ),
                                1
                              )
                            ]),
                            _: 1
                          },
                          8,
                          ["color"]
                        ),
                        n(
                          H,
                          {
                            trigger: "click",
                            disabled: !e.product.isSetup,
                            "max-height": "2"
                          },
                          {
                            dropdown: a(() => [
                              n(
                                k,
                                { disabled: !e.product.isSetup },
                                {
                                  default: a(() => [
                                    n(
                                      p,
                                      {
                                        onClick:
                                          _[0] || (_[0] = b => x(e.product))
                                      },
                                      { default: a(() => [ae]), _: 1 }
                                    ),
                                    n(
                                      p,
                                      {
                                        onClick:
                                          _[1] || (_[1] = b => w(e.product))
                                      },
                                      { default: a(() => [se]), _: 1 }
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ["disabled"]
                              )
                            ]),
                            default: a(() => [
                              n(z, {
                                icon: "more-vertical",
                                class: "text-size-24px"
                              })
                            ]),
                            _: 1
                          },
                          8,
                          ["disabled"]
                        )
                      ])
                    ]),
                    _: 1
                  }
                ),
                o("p", de, u(e.product.name), 1),
                o("p", ie, u(e.product.description), 1)
              ])
            ],
            2
          )
        );
      };
    }
  });
const _e = B(re, [["__scopeId", "data-v-1943aa63"]]);
export { _e as default };
