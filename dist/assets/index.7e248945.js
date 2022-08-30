import {
  aR as jt,
  be as Pt,
  bf as Lt,
  bg as Ht,
  bh as qt,
  bi as Nt,
  bj as Rt,
  bk as Ut,
  aV as Wt,
  aX as We,
  aY as Gt,
  e as u,
  f as $,
  g as d,
  d as oe,
  u as kt,
  A as J,
  L as pe,
  Y as _e,
  ar as ne,
  b as n,
  i as M,
  $ as Ce,
  Z as Q,
  k as r,
  _ as ce,
  h as C,
  l as ee,
  aN as Ze,
  r as G,
  N as Kt,
  ab as Xt,
  ac as Fe,
  y as Te,
  n as Re,
  bl as nt,
  j as h,
  S as Je,
  a4 as Ct,
  ae as fe,
  ax as Y,
  av as Ge,
  bm as Zt,
  o as qe,
  U as ge,
  ay as ie,
  w as de,
  I as he,
  aA as Ye,
  bn as at,
  bo as Ke,
  a as rt,
  a_ as ke,
  J as Le,
  C as Jt,
  bp as Me,
  aW as je,
  t as lt,
  aK as ze,
  bq as Yt,
  V as Qt,
  br as Ue,
  aE as Se,
  K as xt,
  b2 as Ie,
  bs as en,
  G as it,
  aD as Et,
  aG as tn,
  bt as ot,
  bu as nn,
  a$ as $t,
  aZ as ut,
  s as we,
  bv as yt,
  bw as on,
  ak as St,
  al as Ft,
  am as ct,
  bx as sn,
  a3 as Oe,
  aP as an,
  b1 as rn,
  a8 as ln,
  c as un
} from "./index.69183727.js";
import {
  b as Be,
  c as dt,
  g as pt,
  a as cn,
  t as dn,
  f as Ae,
  d as pn,
  e as hn,
  u as fn
} from "./globalization.2f63b6c2.js";
import { u as _n } from "./epTheme.5d1ffbb5.js";
import { u as Xe } from "./hooks.5d98ec2d.js";
import { d as mn, c as vn } from "./index.f879185a.js";
import { a as Pe } from "./avatars.000f50cc.js";
import "./index.esm.4e0c2904.js";
var gn = "[object Map]",
  yn = "[object Set]",
  bn = Object.prototype,
  wn = bn.hasOwnProperty;
function kn(t) {
  if (t == null) return !0;
  if (
    jt(t) &&
    (Pt(t) ||
      typeof t == "string" ||
      typeof t.splice == "function" ||
      Lt(t) ||
      Ht(t) ||
      qt(t))
  )
    return !t.length;
  var e = Nt(t);
  if (e == gn || e == yn) return !t.size;
  if (Rt(t)) return !Ut(t).length;
  for (var o in t) if (wn.call(t, o)) return !1;
  return !0;
}
const Cn = Wt({
  id: "pure-setting",
  state: () => ({
    title: We().Title,
    fixedHeader: We().FixedHeader,
    hiddenSideBar: We().HiddenSideBar
  }),
  getters: {
    getTitle() {
      return this.title;
    },
    getFixedHeader() {
      return this.fixedHeader;
    },
    getHiddenSideBar() {
      return this.HiddenSideBar;
    }
  },
  actions: {
    CHANGE_SETTING({ key: t, value: e }) {
      this.hasOwnProperty(t) && (this[t] = e);
    },
    changeSetting(t) {
      this.CHANGE_SETTING(t);
    }
  }
});
function It() {
  return Cn(Gt);
}
const xn = { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" },
  En = d("path", { fill: "none", d: "M0 0h24v24H0z" }, null, -1),
  $n = d(
    "path",
    {
      d: "M2.88 18.054a35.897 35.897 0 0 1 8.531-16.32.8.8 0 0 1 1.178 0c.166.18.304.332.413.455a35.897 35.897 0 0 1 8.118 15.865c-2.141.451-4.34.747-6.584.874l-2.089 4.178a.5.5 0 0 1-.894 0l-2.089-4.178a44.019 44.019 0 0 1-6.584-.874zm6.698-1.123 1.157.066L12 19.527l1.265-2.53 1.157-.066a42.137 42.137 0 0 0 4.227-.454A33.913 33.913 0 0 0 12 4.09a33.913 33.913 0 0 0-6.649 12.387c1.395.222 2.805.374 4.227.454zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
    },
    null,
    -1
  ),
  Sn = [En, $n];
function Fn(t, e) {
  return u(), $("svg", xn, Sn);
}
const Dt = { render: Fn },
  In = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    width: "1em",
    height: "1em",
    class: "re-screen",
    color: "#00000073",
    viewBox: "0 0 16 16"
  },
  Dn = d(
    "path",
    {
      d: "M3 12h10V4H3v8zm2-6h6v4H5V6zM2 6H1V2.5l.5-.5H5v1H2v3zm13-3.5V6h-1V3h-3V2h3.5l.5.5zM14 10h1v3.5l-.5.5H11v-1h3v-3zM2 13h3v1H1.5l-.5-.5V10h1v3z",
      fill: "currentColor"
    },
    null,
    -1
  ),
  An = [Dn];
function Tn(t, e) {
  return u(), $("svg", In, An);
}
const Bn = { render: Tn },
  zn = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    width: "1em",
    height: "1em",
    class: "re-screen",
    color: "#00000073",
    viewBox: "0 0 16 16"
  },
  Mn = d(
    "path",
    {
      d: "M3.5 4H1V3h2V1h1v2.5l-.5.5zM13 3V1h-1v2.5l.5.5H15V3h-2zm-1 9.5V15h1v-2h2v-1h-2.5l-.5.5zM1 12v1h2v2h1v-2.5l-.5-.5H1zm11-1.5-.5.5h-7l-.5-.5v-5l.5-.5h7l.5.5v5zM10 7H6v2h4V7z",
      fill: "currentColor"
    },
    null,
    -1
  ),
  Vn = [Mn];
function On(t, e) {
  return u(), $("svg", zn, Vn);
}
const jn = { render: On },
  Pn = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    class: "iconify iconify--ant-design",
    width: "20",
    height: "20",
    viewBox: "0 0 1024 1024"
  },
  Ln = d(
    "path",
    {
      fill: "currentColor",
      d: "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 0 0 0 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"
    },
    null,
    -1
  ),
  Hn = [Ln];
function qn(t, e) {
  return u(), $("svg", Pn, Hn);
}
const At = { render: qn },
  Nn = { class: "result" },
  Rn = ["onMouseenter"],
  Un = { class: "result-item-title" },
  Wn = oe({
    __name: "SearchResult",
    props: { value: null, options: null },
    emits: ["update:value", "enter"],
    setup(t, { emit: e }) {
      const o = t,
        { t: s } = kt(),
        c = J(() => v => ({
          background:
            (v == null ? void 0 : v.path) === l.value ? _n().epThemeColor : "",
          color: v.path === l.value ? "#fff" : "",
          fontSize: v.path === l.value ? "16px" : "14px"
        })),
        l = J({
          get() {
            return o.value;
          },
          set(v) {
            e("update:value", v);
          }
        });
      async function i(v) {
        l.value = v.path;
      }
      function m() {
        e("enter");
      }
      return (v, y) => (
        u(),
        $("div", Nn, [
          (u(!0),
          $(
            pe,
            null,
            _e(t.options, b => {
              var f, _, S;
              return (
                u(),
                $(
                  "div",
                  {
                    key: b.path,
                    class: "result-item dark:bg-[#1d1d1d]",
                    style: ne(n(c)(b)),
                    onClick: m,
                    onMouseenter: j => i(b)
                  },
                  [
                    (u(),
                    M(
                      Ce(
                        n(Xe)(
                          (_ = (f = b.meta) == null ? void 0 : f.icon) != null
                            ? _
                            : "bookmark-2-line"
                        )
                      )
                    )),
                    d(
                      "span",
                      Un,
                      Q(n(s)((S = b.meta) == null ? void 0 : S.title)),
                      1
                    ),
                    r(n(At))
                  ],
                  44,
                  Rn
                )
              );
            }),
            128
          ))
        ])
      );
    }
  });
const Gn = ce(Wn, [["__scopeId", "data-v-408e83b6"]]),
  Kn = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    class: "iconify iconify--mdi",
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  },
  Xn = d(
    "path",
    {
      fill: "currentColor",
      d: "M1 7h6v2H3v2h4v2H3v2h4v2H1V7m10 0h4v2h-4v2h2a2 2 0 0 1 2 2v2c0 1.11-.89 2-2 2H9v-2h4v-2h-2a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2m8 0h2a2 2 0 0 1 2 2v1h-2V9h-2v6h2v-1h2v1c0 1.11-.89 2-2 2h-2a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2Z"
    },
    null,
    -1
  ),
  Zn = [Xn];
function Jn(t, e) {
  return u(), $("svg", Kn, Zn);
}
const Yn = { render: Jn },
  Qn = { class: "search-footer color-[#333] dark:color-white" },
  eo = { class: "search-footer-item" },
  to = ee(" \u786E\u8BA4 "),
  no = { class: "search-footer-item" },
  oo = ee(" \u5207\u6362 "),
  so = { class: "search-footer-item" },
  ao = ee(" \u5173\u95ED "),
  ro = oe({
    __name: "SearchFooter",
    setup(t) {
      return (e, o) => {
        const s = C("IconifyIconOffline");
        return (
          u(),
          $("div", Qn, [
            d("span", eo, [r(n(At), { class: "icon" }), to]),
            d("span", no, [
              r(s, { icon: "arrow-up-line", class: "icon" }),
              r(s, { icon: "arrow-down-line", class: "icon" }),
              oo
            ]),
            d("span", so, [r(n(Yn), { class: "icon" }), ao])
          ])
        );
      };
    }
  });
const lo = ce(ro, [["__scopeId", "data-v-e1a289a3"]]),
  io = { class: "el-input__icon" },
  uo = { class: "search-result-container" },
  co = oe({
    __name: "SearchModal",
    props: { value: { type: Boolean } },
    emits: ["update:value"],
    setup(t, { emit: e }) {
      const o = t,
        { device: s } = Be(),
        c = Ze(),
        l = G(""),
        i = G(""),
        m = G(null),
        v = Kt([]),
        y = Ct(S, 300),
        b = J(() => Xt(Fe().menusTree)),
        f = J({
          get() {
            return o.value;
          },
          set(w) {
            e("update:value", w);
          }
        });
      Te(f, async w => {
        var z;
        w && (await Re(), (z = m.value) == null || z.focus());
      });
      function _(w) {
        const z = [];
        function R(O) {
          O.forEach(U => {
            z.push(U), U.children && R(U.children);
          });
        }
        return R(w), z;
      }
      function S() {
        var z;
        const w = _(b.value);
        (v.value = w.filter(R => {
          var O;
          return (
            l.value &&
            fe((O = R.meta) == null ? void 0 : O.title)
              .toLocaleLowerCase()
              .includes(l.value.toLocaleLowerCase().trim())
          );
        })),
          ((z = v.value) == null ? void 0 : z.length) > 0
            ? (i.value = v.value[0].path)
            : (i.value = "");
      }
      function j() {
        (f.value = !1),
          setTimeout(() => {
            (v.value = []), (l.value = "");
          }, 200);
      }
      function V() {
        const { length: w } = v.value;
        if (w === 0) return;
        const z = v.value.findIndex(R => R.path === i.value);
        z === 0
          ? (i.value = v.value[w - 1].path)
          : (i.value = v.value[z - 1].path);
      }
      function F() {
        const { length: w } = v.value;
        if (w === 0) return;
        const z = v.value.findIndex(R => R.path === i.value);
        z + 1 === w
          ? (i.value = v.value[0].path)
          : (i.value = v.value[z + 1].path);
      }
      function L() {
        const { length: w } = v.value;
        w === 0 || i.value === "" || (c.push(i.value), j());
      }
      return (
        nt("Enter", L),
        nt("ArrowUp", V),
        nt("ArrowDown", F),
        (w, z) => {
          const R = C("IconifyIconOffline"),
            O = C("el-input"),
            U = C("el-empty"),
            W = C("el-dialog");
          return (
            u(),
            M(
              W,
              {
                top: "5vh",
                width: n(s) === "mobile" ? "80vw" : "50vw",
                modelValue: n(f),
                "onUpdate:modelValue":
                  z[2] || (z[2] = I => (Je(f) ? (f.value = I) : null)),
                "before-close": j
              },
              {
                footer: h(() => [r(lo)]),
                default: h(() => [
                  r(
                    O,
                    {
                      ref_key: "inputRef",
                      ref: m,
                      modelValue: l.value,
                      "onUpdate:modelValue":
                        z[0] || (z[0] = I => (l.value = I)),
                      clearable: "",
                      placeholder:
                        "\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22",
                      onInput: n(y)
                    },
                    {
                      prefix: h(() => [
                        d("span", io, [r(R, { icon: "search" })])
                      ]),
                      _: 1
                    },
                    8,
                    ["modelValue", "onInput"]
                  ),
                  d("div", uo, [
                    n(v).length === 0
                      ? (u(),
                        M(U, {
                          key: 0,
                          description: "\u6682\u65E0\u641C\u7D22\u7ED3\u679C"
                        }))
                      : (u(),
                        M(
                          Gn,
                          {
                            key: 1,
                            value: i.value,
                            "onUpdate:value":
                              z[1] || (z[1] = I => (i.value = I)),
                            options: n(v),
                            onClick: L
                          },
                          null,
                          8,
                          ["value", "options"]
                        ))
                  ])
                ]),
                _: 1
              },
              8,
              ["width", "modelValue"]
            )
          );
        }
      );
    }
  });
const po = ce(co, [["__scopeId", "data-v-1bd6f01f"]]);
function ho(t = !1) {
  const e = G(t);
  function o(i) {
    e.value = i;
  }
  function s() {
    o(!0);
  }
  function c() {
    o(!1);
  }
  function l() {
    o(!e.value);
  }
  return { bool: e, setBool: o, setTrue: s, setFalse: c, toggle: l };
}
const ht = oe({
    __name: "index",
    setup(t) {
      const { bool: e, toggle: o } = ho();
      function s() {
        o();
      }
      return (c, l) => {
        const i = C("IconifyIconOffline");
        return (
          u(),
          $(
            pe,
            null,
            [
              d(
                "div",
                {
                  class:
                    "search-container w-40px h-48px flex-c cursor-pointer navbar-bg-hover",
                  onClick: s
                },
                [r(i, { icon: "search" })]
              ),
              r(
                n(po),
                {
                  value: n(e),
                  "onUpdate:value":
                    l[0] || (l[0] = m => (Je(e) ? (e.value = m) : null))
                },
                null,
                8,
                ["value"]
              )
            ],
            64
          )
        );
      };
    }
  }),
  bt = [
    {
      key: "1",
      name: "\u901A\u77E5",
      list: [
        {
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
          title: "\u4F60\u6536\u5230\u4E86 12 \u4EFD\u65B0\u5468\u62A5",
          datetime: "\u4E00\u5E74\u524D",
          description: "",
          type: "1"
        },
        {
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
          title:
            "\u4F60\u63A8\u8350\u7684 \u524D\u7AEF\u9AD8\u624B \u5DF2\u901A\u8FC7\u7B2C\u4E09\u8F6E\u9762\u8BD5",
          datetime: "\u4E00\u5E74\u524D",
          description: "",
          type: "1"
        },
        {
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png",
          title:
            "\u8FD9\u79CD\u6A21\u677F\u53EF\u4EE5\u533A\u5206\u591A\u79CD\u901A\u77E5\u7C7B\u578B",
          datetime: "\u4E00\u5E74\u524D",
          description: "",
          type: "1"
        },
        {
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
          title:
            "\u5C55\u793A\u6807\u9898\u5185\u5BB9\u8D85\u8FC7\u4E00\u884C\u540E\u7684\u5904\u7406\u65B9\u5F0F\uFF0C\u5982\u679C\u5185\u5BB9\u8D85\u8FC71\u884C\u5C06\u81EA\u52A8\u622A\u65AD\u5E76\u652F\u6301tooltip\u663E\u793A\u5B8C\u6574\u6807\u9898\u3002",
          datetime: "\u4E00\u5E74\u524D",
          description: "",
          type: "1"
        },
        {
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
          title:
            "\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",
          datetime: "\u4E00\u5E74\u524D",
          description: "",
          type: "1"
        },
        {
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
          title:
            "\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",
          datetime: "\u4E00\u5E74\u524D",
          description: "",
          type: "1"
        }
      ]
    },
    {
      key: "2",
      name: "\u6D88\u606F",
      list: [
        {
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
          title: "\u674E\u767D \u8BC4\u8BBA\u4E86\u4F60",
          description:
            "\u957F\u98CE\u7834\u6D6A\u4F1A\u6709\u65F6,\u76F4\u6302\u4E91\u5E06\u6D4E\u6CA7\u6D77",
          datetime: "\u4E00\u5E74\u524D",
          type: "2"
        },
        {
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
          title: "\u674E\u767D \u56DE\u590D\u4E86\u4F60",
          description:
            "\u884C\u8DEF\u96BE\uFF0C\u884C\u8DEF\u96BE\uFF0C\u591A\u6B67\u8DEF\uFF0C\u4ECA\u5B89\u5728\u3002",
          datetime: "\u4E00\u5E74\u524D",
          type: "2"
        },
        {
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
          title: "\u6807\u9898",
          description:
            "\u8BF7\u5C06\u9F20\u6807\u79FB\u52A8\u5230\u6B64\u5904\uFF0C\u4EE5\u4FBF\u6D4B\u8BD5\u8D85\u957F\u7684\u6D88\u606F\u5728\u6B64\u5904\u5C06\u5982\u4F55\u5904\u7406\u3002\u672C\u4F8B\u4E2D\u8BBE\u7F6E\u7684\u63CF\u8FF0\u6700\u5927\u884C\u6570\u4E3A2\uFF0C\u8D85\u8FC72\u884C\u7684\u63CF\u8FF0\u5185\u5BB9\u5C06\u88AB\u7701\u7565\u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7tooltip\u67E5\u770B\u5B8C\u6574\u5185\u5BB9",
          datetime: "\u4E00\u5E74\u524D",
          type: "2"
        }
      ]
    },
    {
      key: "3",
      name: "\u4EE3\u529E",
      list: [
        {
          avatar: "",
          title: "\u4EFB\u52A1\u540D\u79F0",
          description:
            "\u4EFB\u52A1\u9700\u8981\u5728 2022-11-16 20:00 \u524D\u542F\u52A8",
          datetime: "",
          extra: "\u672A\u5F00\u59CB",
          status: "info",
          type: "3"
        },
        {
          avatar: "",
          title: "\u7B2C\u4E09\u65B9\u7D27\u6025\u4EE3\u7801\u53D8\u66F4",
          description:
            "\u4E00\u62F3\u63D0\u4EA4\u4E8E 2022-11-16\uFF0C\u9700\u5728 2022-11-18 \u524D\u5B8C\u6210\u4EE3\u7801\u53D8\u66F4\u4EFB\u52A1",
          datetime: "",
          extra: "\u9A6C\u4E0A\u5230\u671F",
          status: "danger",
          type: "3"
        },
        {
          avatar: "",
          title: "\u4FE1\u606F\u5B89\u5168\u8003\u8BD5",
          description:
            "\u6307\u6D3E\u5C0F\u4ED9\u4E8E 2022-12-12 \u524D\u5B8C\u6210\u66F4\u65B0\u5E76\u53D1\u5E03",
          datetime: "",
          extra: "\u5DF2\u8017\u65F6 8 \u5929",
          status: "warning",
          type: "3"
        },
        {
          avatar: "",
          title: "vue-pure-admin \u7248\u672C\u53D1\u5E03",
          description: "vue-pure-admin \u7248\u672C\u53D1\u5E03",
          datetime: "",
          extra: "\u8FDB\u884C\u4E2D",
          type: "3"
        }
      ]
    }
  ],
  fo = {
    class: "notice-container border-b-1 border-[#f0f0f0] dark:border-[#303030]"
  },
  _o = { class: "notice-container-text" },
  mo = { class: "notice-text-title color-[#000000d9] dark:color-white" },
  vo = { class: "notice-text-datetime color-[#00000073] dark:color-white" },
  go = oe({
    __name: "noticeItem",
    props: { noticeItem: { type: Object, default: () => {} } },
    setup(t) {
      const e = t,
        o = G(null),
        s = G(!1),
        c = G(null),
        l = G(!1);
      function i() {
        Re(() => {
          var v, y;
          ((v = o.value) == null ? void 0 : v.scrollWidth) >
          ((y = o.value) == null ? void 0 : y.clientWidth)
            ? (s.value = !0)
            : (s.value = !1);
        });
      }
      function m(v, y) {
        let b = document.createElement("span");
        (b.innerText = y),
          (b.className = "getDescriptionWidth"),
          document.querySelector("body").appendChild(b);
        let f = document.querySelector(".getDescriptionWidth").offsetWidth;
        document.querySelector(".getDescriptionWidth").remove();
        const _ = v.target.offsetWidth;
        f > 2 * _ ? (l.value = !0) : (l.value = !1);
      }
      return (v, y) => {
        var S, j;
        const b = C("el-avatar"),
          f = C("el-tooltip"),
          _ = C("el-tag");
        return (
          u(),
          $("div", fo, [
            e.noticeItem.avatar
              ? (u(),
                M(
                  b,
                  {
                    key: 0,
                    size: 30,
                    src: e.noticeItem.avatar,
                    class: "notice-container-avatar"
                  },
                  null,
                  8,
                  ["src"]
                ))
              : Y("", !0),
            d("div", _o, [
              d("div", mo, [
                r(
                  f,
                  {
                    "popper-class": "notice-title-popper",
                    disabled: !s.value,
                    content: e.noticeItem.title,
                    placement: "top-start"
                  },
                  {
                    default: h(() => [
                      d(
                        "div",
                        {
                          ref_key: "titleRef",
                          ref: o,
                          class: "notice-title-content",
                          onMouseover: i
                        },
                        Q(e.noticeItem.title),
                        545
                      )
                    ]),
                    _: 1
                  },
                  8,
                  ["disabled", "content"]
                ),
                (S = e.noticeItem) != null && S.extra
                  ? (u(),
                    M(
                      _,
                      {
                        key: 0,
                        type: (j = e.noticeItem) == null ? void 0 : j.status,
                        size: "small",
                        class: "notice-title-extra"
                      },
                      {
                        default: h(() => {
                          var V;
                          return [
                            ee(
                              Q((V = e.noticeItem) == null ? void 0 : V.extra),
                              1
                            )
                          ];
                        }),
                        _: 1
                      },
                      8,
                      ["type"]
                    ))
                  : Y("", !0)
              ]),
              r(
                f,
                {
                  "popper-class": "notice-title-popper",
                  disabled: !l.value,
                  content: e.noticeItem.description,
                  placement: "top-start"
                },
                {
                  default: h(() => [
                    d(
                      "div",
                      {
                        ref_key: "descriptionRef",
                        ref: c,
                        class: "notice-text-description",
                        onMouseover:
                          y[0] || (y[0] = V => m(V, e.noticeItem.description))
                      },
                      Q(e.noticeItem.description),
                      545
                    )
                  ]),
                  _: 1
                },
                8,
                ["disabled", "content"]
              ),
              d("div", vo, Q(e.noticeItem.datetime), 1)
            ])
          ])
        );
      };
    }
  });
const yo = ce(go, [["__scopeId", "data-v-f09f21a4"]]),
  bo = { key: 0 },
  wo = oe({
    __name: "noticeList",
    props: { list: { type: Array, default: () => [] } },
    setup(t) {
      const e = t;
      return (o, s) => {
        const c = C("el-empty");
        return e.list.length
          ? (u(),
            $("div", bo, [
              (u(!0),
              $(
                pe,
                null,
                _e(
                  e.list,
                  (l, i) => (
                    u(),
                    M(yo, { noticeItem: l, key: i }, null, 8, ["noticeItem"])
                  )
                ),
                128
              ))
            ]))
          : (u(), M(c, { key: 1, description: "\u6682\u65E0\u6570\u636E" }));
      };
    }
  }),
  ko = { class: "dropdown-badge navbar-bg-hover select-none" },
  Co = { class: "header-notice-icon" },
  xo = { class: "noticeList-container" },
  Eo = oe({
    __name: "index",
    setup(t) {
      const e = Ge("dropdownDom", null),
        o = G(bt[0].name),
        s = G(bt);
      let c = G(0);
      s.value.forEach(i => {
        c.value += i.list.length;
      });
      function l() {
        e.value.handleOpen();
      }
      return (i, m) => {
        const v = C("IconifyIconOffline"),
          y = C("el-badge"),
          b = C("el-scrollbar"),
          f = C("el-dropdown-menu"),
          _ = C("el-dropdown");
        return (
          u(),
          M(
            _,
            {
              ref_key: "dropdownDom",
              ref: e,
              trigger: "click",
              placement: "bottom-end"
            },
            {
              dropdown: h(() => [
                r(f, null, {
                  default: h(() => [
                    r(
                      n(mn),
                      {
                        centered: "",
                        class: "dropdown-tabs",
                        activeName: o.value,
                        "onUpdate:activeName":
                          m[0] || (m[0] = S => (o.value = S)),
                        onTabClick: l
                      },
                      {
                        default: h(() => [
                          (u(!0),
                          $(
                            pe,
                            null,
                            _e(
                              s.value,
                              S => (
                                u(),
                                M(
                                  n(vn),
                                  {
                                    key: S.key,
                                    tab: `${S.name}(${S.list.length})`
                                  },
                                  {
                                    default: h(() => [
                                      r(
                                        b,
                                        { "max-height": "330px" },
                                        {
                                          default: h(() => [
                                            d("div", xo, [
                                              r(wo, { list: S.list }, null, 8, [
                                                "list"
                                              ])
                                            ])
                                          ]),
                                          _: 2
                                        },
                                        1024
                                      )
                                    ]),
                                    _: 2
                                  },
                                  1032,
                                  ["tab"]
                                )
                              )
                            ),
                            128
                          ))
                        ]),
                        _: 1
                      },
                      8,
                      ["activeName"]
                    )
                  ]),
                  _: 1
                })
              ]),
              default: h(() => [
                d("span", ko, [
                  r(
                    y,
                    { value: n(c), max: 99 },
                    {
                      default: h(() => [
                        d("span", Co, [r(v, { icon: "bell" })])
                      ]),
                      _: 1
                    },
                    8,
                    ["value"]
                  )
                ])
              ]),
              _: 1
            },
            512
          )
        );
      };
    }
  });
const ft = ce(Eo, [["__scopeId", "data-v-89884804"]]),
  _t = oe({
    __name: "index",
    setup(t) {
      const { t: e } = kt(),
        { isFullscreen: o, toggle: s } = Zt();
      return (c, l) => {
        const i = C("FontIcon");
        return (
          u(),
          $(
            "div",
            {
              class:
                "screen-full w-36px h-48px flex-ac cursor-pointer navbar-bg-hover",
              onClick: l[0] || (l[0] = (...m) => n(s) && n(s)(...m))
            },
            [
              r(
                i,
                {
                  title: n(o)
                    ? n(e)("buttons.hsexitfullscreen")
                    : n(e)("buttons.hsfullscreen"),
                  icon: n(o)
                    ? "team-iconexit-fullscreen"
                    : "team-iconfullscreen"
                },
                null,
                8,
                ["title", "icon"]
              )
            ]
          )
        );
      };
    }
  }),
  $o = { key: 0, class: "horizontal-header" },
  So = { class: "select-none" },
  Fo = { class: "horizontal-header-right" },
  Io = { class: "check-zh" },
  Do = ee(" \u7B80\u4F53\u4E2D\u6587 "),
  Ao = { class: "check-en" },
  To = ee(" English "),
  Bo = { class: "el-dropdown-link navbar-bg-hover" },
  zo = ["src"],
  Mo = { key: 1, class: "dark:color-white" },
  Vo = ["title"],
  Oo = oe({
    __name: "mixNav",
    setup(t) {
      const e = G();
      let o = G(null);
      const {
          t: s,
          route: c,
          locale: l,
          translationCh: i,
          translationEn: m
        } = dt(e),
        {
          device: v,
          routers: y,
          logout: b,
          onPanel: f,
          menuSelect: _,
          resolvePath: S,
          username: j,
          avatarsStyle: V,
          getDropdownItemStyle: F,
          getDropdownItemClass: L
        } = Be();
      function w(z) {
        var U, W;
        const R = Fe().wholeMenus,
          O = at(z, R)[0];
        o.value =
          (W = (U = Ke(O, R)) == null ? void 0 : U.children[0]) == null
            ? void 0
            : W.path;
      }
      return (
        qe(() => {
          w(c.path);
        }),
        Te(
          () => c.path,
          () => {
            w(c.path);
          }
        ),
        (z, R) => {
          const O = C("FontIcon"),
            U = C("el-menu-item"),
            W = C("el-menu"),
            I = C("IconifyIconOffline"),
            K = C("el-dropdown-item"),
            se = C("el-dropdown-menu"),
            xe = C("el-dropdown");
          return n(v) !== "mobile"
            ? (u(),
              $("div", $o, [
                r(
                  W,
                  {
                    router: "",
                    ref_key: "menuRef",
                    ref: e,
                    mode: "horizontal",
                    class: "horizontal-header-menu",
                    "default-active": n(o),
                    onSelect: R[0] || (R[0] = ae => n(_)(ae, n(y)))
                  },
                  {
                    default: h(() => [
                      (u(!0),
                      $(
                        pe,
                        null,
                        _e(
                          n(Fe)().wholeMenus,
                          ae => (
                            u(),
                            M(
                              U,
                              { key: ae.path, index: n(S)(ae) || ae.redirect },
                              {
                                title: h(() => [
                                  ge(ae.meta.icon)
                                    ? (u(),
                                      $(
                                        "div",
                                        {
                                          key: 0,
                                          class: ie([
                                            "sub-menu-icon",
                                            ae.meta.icon
                                          ])
                                        },
                                        [
                                          (u(),
                                          M(
                                            Ce(
                                              n(Xe)(ae.meta && ge(ae.meta.icon))
                                            )
                                          ))
                                        ],
                                        2
                                      ))
                                    : Y("", !0),
                                  d("span", So, Q(n(fe)(ae.meta.title)), 1),
                                  ae.meta.extraIcon
                                    ? (u(),
                                      M(
                                        O,
                                        {
                                          key: 1,
                                          width: "30px",
                                          height: "30px",
                                          style: {
                                            position: "absolute",
                                            right: "10px"
                                          },
                                          icon: ae.meta.extraIcon.name,
                                          svg: !!ae.meta.extraIcon.svg
                                        },
                                        null,
                                        8,
                                        ["icon", "svg"]
                                      ))
                                    : Y("", !0)
                                ]),
                                _: 2
                              },
                              1032,
                              ["index"]
                            )
                          )
                        ),
                        128
                      ))
                    ]),
                    _: 1
                  },
                  8,
                  ["default-active"]
                ),
                d("div", Fo, [
                  r(ht),
                  r(ft, { id: "header-notice" }),
                  de(r(_t, { id: "header-screenfull" }, null, 512), [
                    [he, !n(Ye)()]
                  ]),
                  r(
                    xe,
                    { id: "header-translation", trigger: "click" },
                    {
                      dropdown: h(() => [
                        r(
                          se,
                          { class: "translation" },
                          {
                            default: h(() => [
                              r(
                                K,
                                {
                                  style: ne(n(F)(n(l), "zh")),
                                  class: ie([
                                    "!dark:color-white",
                                    n(L)(n(l), "zh")
                                  ]),
                                  onClick: n(i)
                                },
                                {
                                  default: h(() => [
                                    de(
                                      d(
                                        "span",
                                        Io,
                                        [r(I, { icon: "check" })],
                                        512
                                      ),
                                      [[he, n(l) === "zh"]]
                                    ),
                                    Do
                                  ]),
                                  _: 1
                                },
                                8,
                                ["style", "class", "onClick"]
                              ),
                              r(
                                K,
                                {
                                  style: ne(n(F)(n(l), "en")),
                                  class: ie([
                                    "!dark:color-white",
                                    n(L)(n(l), "en")
                                  ]),
                                  onClick: n(m)
                                },
                                {
                                  default: h(() => [
                                    de(
                                      d(
                                        "span",
                                        Ao,
                                        [r(I, { icon: "check" })],
                                        512
                                      ),
                                      [[he, n(l) === "en"]]
                                    ),
                                    To
                                  ]),
                                  _: 1
                                },
                                8,
                                ["style", "class", "onClick"]
                              )
                            ]),
                            _: 1
                          }
                        )
                      ]),
                      default: h(() => [
                        r(n(pt), {
                          class:
                            "navbar-bg-hover w-40px h-48px p-11px cursor-pointer outline-none"
                        })
                      ]),
                      _: 1
                    }
                  ),
                  r(
                    xe,
                    { trigger: "click" },
                    {
                      dropdown: h(() => [
                        r(
                          se,
                          { class: "logout" },
                          {
                            default: h(() => [
                              r(
                                K,
                                { onClick: n(b) },
                                {
                                  default: h(() => [
                                    r(I, {
                                      icon: "logout-circle-r-line",
                                      style: { margin: "5px" }
                                    }),
                                    ee(" " + Q(n(s)("buttons.hsLoginOut")), 1)
                                  ]),
                                  _: 1
                                },
                                8,
                                ["onClick"]
                              )
                            ]),
                            _: 1
                          }
                        )
                      ]),
                      default: h(() => [
                        d("span", Bo, [
                          n(Pe)
                            ? (u(),
                              $(
                                "img",
                                { key: 0, src: n(Pe), style: ne(n(V)) },
                                null,
                                12,
                                zo
                              ))
                            : Y("", !0),
                          n(j) ? (u(), $("p", Mo, Q(n(j)), 1)) : Y("", !0)
                        ])
                      ]),
                      _: 1
                    }
                  ),
                  d(
                    "span",
                    {
                      class: "el-icon-setting navbar-bg-hover",
                      title: n(s)("buttons.hssystemSet"),
                      onClick: R[1] || (R[1] = (...ae) => n(f) && n(f)(...ae))
                    },
                    [r(I, { icon: "setting" })],
                    8,
                    Vo
                  )
                ])
              ]))
            : Y("", !0);
        }
      );
    }
  });
const jo = ce(Oo, [["__scopeId", "data-v-a0902a52"]]),
  Po = ["onClick"],
  Lo = oe({
    __name: "breadCrumb",
    setup(t) {
      const e = rt(),
        o = G([]),
        s = Ze(),
        c = s.options.routes,
        l = ke().multiTags,
        i = y => {
          const b = y && y.name;
          return b
            ? b.trim().toLocaleLowerCase() === "Welcome".toLocaleLowerCase()
            : !1;
        },
        m = () => {
          let y;
          Object.keys(e.query).length > 0
            ? l.forEach(_ => {
                Me(e.query, _ == null ? void 0 : _.query) && (y = ge(_));
              })
            : Object.keys(e.params).length > 0
            ? l.forEach(_ => {
                Me(e.params, _ == null ? void 0 : _.params) && (y = ge(_));
              })
            : (y = Ke(s.currentRoute.value.path, l));
          const b = at(s.currentRoute.value.path, c);
          let f = [];
          b.forEach(_ => {
            _ !== "/" && f.push(Ke(_, c));
          }),
            (y == null ? void 0 : y.path) !== "/welcome" && f.push(y),
            i(f[0]) ||
              (f = [
                {
                  path: "/welcome",
                  parentPath: "/",
                  meta: { title: "menus.hshome" }
                }
              ].concat(f)),
            f.forEach((_, S) => {
              (y == null ? void 0 : y.query) ||
                (y == null ? void 0 : y.params) ||
                (_ != null &&
                  _.children &&
                  _.children.forEach(j => {
                    var V, F;
                    ((V = j == null ? void 0 : j.meta) == null
                      ? void 0
                      : V.title) ===
                      ((F = _ == null ? void 0 : _.meta) == null
                        ? void 0
                        : F.title) && f.splice(S, 1);
                  }));
            }),
            (o.value = f.filter(
              _ =>
                (_ == null ? void 0 : _.meta) &&
                (_ == null ? void 0 : _.meta.title) !== !1
            ));
        },
        v = y => {
          const { redirect: b, path: f } = y;
          b ? s.push(b) : s.push(f);
        };
      return (
        qe(() => {
          m();
        }),
        Te(
          () => e.path,
          () => {
            m();
          }
        ),
        (y, b) => {
          const f = C("el-breadcrumb-item"),
            _ = C("el-breadcrumb");
          return (
            u(),
            M(
              _,
              { class: "!leading-[50px] select-none", separator: "/" },
              {
                default: h(() => [
                  r(
                    Jt,
                    { appear: "", name: "breadcrumb" },
                    {
                      default: h(() => [
                        (u(!0),
                        $(
                          pe,
                          null,
                          _e(
                            o.value,
                            S => (
                              u(),
                              M(
                                f,
                                { key: S.path },
                                {
                                  default: h(() => [
                                    d(
                                      "a",
                                      { onClick: Le(j => v(S), ["prevent"]) },
                                      Q(n(fe)(S.meta.title)),
                                      9,
                                      Po
                                    )
                                  ]),
                                  _: 2
                                },
                                1024
                              )
                            )
                          ),
                          128
                        ))
                      ]),
                      _: 1
                    }
                  )
                ]),
                _: 1
              }
            )
          );
        }
      );
    }
  }),
  Ho = ["title"],
  qo = oe({
    __name: "topCollapse",
    props: { isActive: { type: Boolean, default: !1 } },
    emits: ["toggleClick"],
    setup(t, { emit: e }) {
      const o = t,
        s = () => {
          e("toggleClick");
        };
      return (c, l) => {
        const i = C("IconifyIconOffline");
        return (
          u(),
          $(
            "div",
            {
              class: "px-3 mr-1 navbar-bg-hover",
              title: o.isActive
                ? "\u70B9\u51FB\u6298\u53E0"
                : "\u70B9\u51FB\u5C55\u5F00",
              onClick: s
            },
            [
              r(
                i,
                {
                  icon: o.isActive ? "menu-fold" : "menu-unfold",
                  class:
                    "inline-block align-middle hover:color-primary !dark:hover:color-white"
                },
                null,
                8,
                ["icon"]
              )
            ],
            8,
            Ho
          )
        );
      };
    }
  }),
  No = {
    class:
      "navbar bg-[#fff] shadow-sm shadow-[rgba(0, 21, 41, 0.08)] dark:shadow-[#0d0d0d]"
  },
  Ro = { key: 3, class: "vertical-header-right" },
  Uo = ee(" \u7B80\u4F53\u4E2D\u6587 "),
  Wo = { class: "check-en" },
  Go = ee(" English "),
  Ko = { class: "el-dropdown-link navbar-bg-hover" },
  Xo = ["src"],
  Zo = { key: 1, class: "dark:color-white" },
  Jo = ["title"],
  Yo = oe({
    __name: "navbar",
    setup(t) {
      const {
          layout: e,
          device: o,
          logout: s,
          onPanel: c,
          pureApp: l,
          username: i,
          avatarsStyle: m,
          toggleSideBar: v,
          getDropdownItemStyle: y,
          getDropdownItemClass: b
        } = Be(),
        { t: f, locale: _, translationCh: S, translationEn: j } = dt();
      return (V, F) => {
        const L = C("IconifyIconOffline"),
          w = C("el-dropdown-item"),
          z = C("el-dropdown-menu"),
          R = C("el-dropdown");
        return (
          u(),
          $("div", No, [
            n(o) === "mobile"
              ? (u(),
                M(
                  qo,
                  {
                    key: 0,
                    class: "hamburger-container",
                    "is-active": n(l).sidebar.opened,
                    onToggleClick: n(v)
                  },
                  null,
                  8,
                  ["is-active", "onToggleClick"]
                ))
              : Y("", !0),
            n(e) !== "mix" && n(o) !== "mobile"
              ? (u(), M(Lo, { key: 1, class: "breadcrumb-container" }))
              : Y("", !0),
            n(e) === "mix" ? (u(), M(jo, { key: 2 })) : Y("", !0),
            n(e) === "vertical"
              ? (u(),
                $("div", Ro, [
                  r(ht),
                  r(ft, { id: "header-notice" }),
                  de(r(_t, { id: "header-screenfull" }, null, 512), [
                    [he, !n(Ye)()]
                  ]),
                  r(
                    R,
                    { id: "header-translation", trigger: "click" },
                    {
                      dropdown: h(() => [
                        r(
                          z,
                          { class: "translation" },
                          {
                            default: h(() => [
                              r(
                                w,
                                {
                                  style: ne(n(y)(n(_), "zh")),
                                  class: ie([
                                    "!dark:color-white",
                                    n(b)(n(_), "zh")
                                  ]),
                                  onClick: n(S)
                                },
                                {
                                  default: h(() => [
                                    de(
                                      r(
                                        L,
                                        { class: "check-zh", icon: "check" },
                                        null,
                                        512
                                      ),
                                      [[he, n(_) === "zh"]]
                                    ),
                                    Uo
                                  ]),
                                  _: 1
                                },
                                8,
                                ["style", "class", "onClick"]
                              ),
                              r(
                                w,
                                {
                                  style: ne(n(y)(n(_), "en")),
                                  class: ie([
                                    "!dark:color-white",
                                    n(b)(n(_), "en")
                                  ]),
                                  onClick: n(j)
                                },
                                {
                                  default: h(() => [
                                    de(
                                      d(
                                        "span",
                                        Wo,
                                        [r(L, { icon: "check" })],
                                        512
                                      ),
                                      [[he, n(_) === "en"]]
                                    ),
                                    Go
                                  ]),
                                  _: 1
                                },
                                8,
                                ["style", "class", "onClick"]
                              )
                            ]),
                            _: 1
                          }
                        )
                      ]),
                      default: h(() => [
                        r(n(pt), {
                          class:
                            "navbar-bg-hover w-40px h-48px p-11px cursor-pointer outline-none"
                        })
                      ]),
                      _: 1
                    }
                  ),
                  r(
                    R,
                    { trigger: "click" },
                    {
                      dropdown: h(() => [
                        r(
                          z,
                          { class: "logout" },
                          {
                            default: h(() => [
                              r(
                                w,
                                { onClick: n(s) },
                                {
                                  default: h(() => [
                                    r(L, {
                                      icon: "logout-circle-r-line",
                                      style: { margin: "5px" }
                                    }),
                                    ee(" " + Q(n(f)("buttons.hsLoginOut")), 1)
                                  ]),
                                  _: 1
                                },
                                8,
                                ["onClick"]
                              )
                            ]),
                            _: 1
                          }
                        )
                      ]),
                      default: h(() => [
                        d("span", Ko, [
                          n(Pe)
                            ? (u(),
                              $(
                                "img",
                                { key: 0, src: n(Pe), style: ne(n(m)) },
                                null,
                                12,
                                Xo
                              ))
                            : Y("", !0),
                          n(i) ? (u(), $("p", Zo, Q(n(i)), 1)) : Y("", !0)
                        ])
                      ]),
                      _: 1
                    }
                  ),
                  d(
                    "span",
                    {
                      class: "el-icon-setting navbar-bg-hover",
                      title: n(f)("buttons.hssystemSet"),
                      onClick: F[0] || (F[0] = (...O) => n(c) && n(c)(...O))
                    },
                    [r(L, { icon: "setting" })],
                    8,
                    Jo
                  )
                ]))
              : Y("", !0)
          ])
        );
      };
    }
  });
const Qo = ce(Yo, [["__scopeId", "data-v-8b3cd65c"]]),
  es = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    width: "1em",
    height: "1em",
    viewBox: "0 0 36 36"
  },
  ts = d(
    "path",
    {
      d: "m19.41 18 8.29-8.29a1 1 0 0 0-1.41-1.41L18 16.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29-8.3 8.29A1 1 0 1 0 9.7 27.7l8.3-8.29 8.29 8.29a1 1 0 0 0 1.41-1.41z",
      fill: "currentColor"
    },
    null,
    -1
  ),
  ns = [ts];
function os(t, e) {
  return u(), $("svg", es, ns);
}
const ss = { render: os },
  as = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 512"
  },
  rs = d(
    "path",
    {
      d: "m400 148-21.12-24.57A191.43 191.43 0 0 0 240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 0 0 181.07-128",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "square",
      "stroke-miterlimit": "10",
      "stroke-width": "32"
    },
    null,
    -1
  ),
  ls = d(
    "path",
    {
      d: "M464 68.45V220a4 4 0 0 1-4 4H308.45a4 4 0 0 1-2.83-6.83L457.17 65.62a4 4 0 0 1 6.83 2.83z",
      fill: "currentColor"
    },
    null,
    -1
  ),
  is = [rs, ls];
function us(t, e) {
  return u(), $("svg", as, is);
}
const cs = { render: us },
  ds = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    width: "1em",
    height: "1em",
    viewBox: "0 0 36 36"
  },
  ps = d(
    "path",
    { d: "M26 17H10a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2z", fill: "currentColor" },
    null,
    -1
  ),
  hs = [ps];
function fs(t, e) {
  return u(), $("svg", ds, hs);
}
const _s = { render: fs },
  ms = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24"
  },
  vs = d(
    "g",
    {
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round"
    },
    [
      d("path", { d: "m7 12 7 7M7 12l7-7", "stroke-linejoin": "round" }),
      d("path", { d: "M21 12H7.5" }),
      d("path", { d: "M3 3v18", "stroke-linejoin": "round" })
    ],
    -1
  ),
  gs = [vs];
function ys(t, e) {
  return u(), $("svg", ms, gs);
}
const bs = { render: ys },
  ws = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20"
  },
  ks = d(
    "path",
    {
      d: "M3 5h14V3H3v2zm12 8V7H5v6h10zM3 17h14v-2H3v2z",
      fill: "currentColor"
    },
    null,
    -1
  ),
  Cs = [ks];
function xs(t, e) {
  return u(), $("svg", ws, Cs);
}
const Es = { render: xs },
  $s = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24"
  },
  Ss = d(
    "g",
    {
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round"
    },
    [
      d("path", { d: "m17 12-7 7M17 12l-7-7", "stroke-linejoin": "round" }),
      d("path", { d: "M3 12h13.5" }),
      d("path", { d: "M21 3v18", "stroke-linejoin": "round" })
    ],
    -1
  ),
  Fs = [Ss];
function Is(t, e) {
  return u(), $("svg", $s, Fs);
}
const Ds = { render: Is };
function As() {
  var U, W;
  const t = rt(),
    e = Ze(),
    o = Qt(),
    s = G(0),
    c = G(0),
    l = G(0),
    i = G(!1),
    m = G(-1),
    v = G({}),
    y = G(
      ((U = je.getItem("responsive-configure")) == null
        ? void 0
        : U.showModel) || "smart"
    ),
    b =
      (W = G(je.getItem("responsive-configure").hideTabs)) != null
        ? W
        : G("false"),
    f = J(() => ke().multiTags),
    _ = lt([
      {
        icon: cs,
        text: ze("buttons.hsreload"),
        divided: !1,
        disabled: !1,
        show: !0
      },
      {
        icon: ss,
        text: ze("buttons.hscloseCurrentTab"),
        divided: !1,
        disabled: !(f.value.length > 1),
        show: !0
      },
      {
        icon: bs,
        text: ze("buttons.hscloseLeftTabs"),
        divided: !0,
        disabled: !(f.value.length > 1),
        show: !0
      },
      {
        icon: Ds,
        text: ze("buttons.hscloseRightTabs"),
        divided: !1,
        disabled: !(f.value.length > 1),
        show: !0
      },
      {
        icon: Es,
        text: ze("buttons.hscloseOtherTabs"),
        divided: !0,
        disabled: !(f.value.length > 2),
        show: !0
      },
      {
        icon: _s,
        text: ze("buttons.hscloseAllTabs"),
        divided: !1,
        disabled: !(f.value.length > 1),
        show: !0
      }
    ]);
  function S(I, K, se) {
    return Object.keys(t.query).length === 0 &&
      Object.keys(t.params).length === 0
      ? t.path === I.path
        ? K
        : se
      : Object.keys(t.query).length > 0
      ? Me(t.query, I.query)
        ? K
        : se
      : Me(t.params, I.params)
      ? K
      : se;
  }
  const j = J(() => (I, K) => {
      if (K !== 0) return S(I, !0, !1);
    }),
    V = J(() => I => S(I, "is-active", "")),
    F = J(() => I => S(I, "schedule-active", "")),
    L = J(() => ({ transform: `translateX(${l.value}px)` })),
    w = J(() => ({ left: c.value + "px", top: s.value + "px" })),
    z = () => {
      i.value = !1;
    };
  function R(I) {
    if ((I && (m.value = I), n(y) === "smart")) {
      if (Ue(o.refs["schedule" + I][0], "schedule-active")) return;
      Se(!0, "schedule-in", o.refs["schedule" + I][0]),
        Se(!1, "schedule-out", o.refs["schedule" + I][0]);
    } else {
      if (Ue(o.refs["dynamic" + I][0], "card-active")) return;
      Se(!0, "card-in", o.refs["dynamic" + I][0]),
        Se(!1, "card-out", o.refs["dynamic" + I][0]);
    }
  }
  function O(I) {
    if (((m.value = -1), n(y) === "smart")) {
      if (Ue(o.refs["schedule" + I][0], "schedule-active")) return;
      Se(!1, "schedule-in", o.refs["schedule" + I][0]),
        Se(!0, "schedule-out", o.refs["schedule" + I][0]);
    } else {
      if (Ue(o.refs["dynamic" + I][0], "card-active")) return;
      Se(!1, "card-in", o.refs["dynamic" + I][0]),
        Se(!0, "card-out", o.refs["dynamic" + I][0]);
    }
  }
  return (
    qe(() => {
      if (!y.value) {
        const I = je.getItem("responsive-configure");
        (I.showModel = "card"), je.setItem("responsive-configure", I);
      }
    }),
    Te(
      () => i.value,
      () => {
        Yt(document, "click", z);
      }
    ),
    {
      route: t,
      router: e,
      visible: i,
      showTags: b,
      instance: o,
      multiTags: f,
      showModel: y,
      tagsViews: _,
      buttonTop: s,
      buttonLeft: c,
      translateX: l,
      activeIndex: m,
      getTabStyle: L,
      iconIsActive: j,
      linkIsActive: V,
      currentSelect: v,
      scheduleIsActive: F,
      getContextMenuStyle: w,
      $t: ze,
      closeMenu: z,
      onMounted: qe,
      onMouseenter: R,
      onMouseleave: O,
      transformI18n: fe
    }
  );
}
const Ts = { class: "arrow-left" },
  Bs = ["onContextmenu", "onMouseenter", "onMouseleave", "onClick"],
  zs = ["onClick"],
  Ms = { class: "arrow-right" },
  Vs = ["onClick"],
  Os = { class: "right-button" },
  js = ["title"],
  Ps = oe({
    __name: "index",
    setup(t) {
      const {
          route: e,
          router: o,
          visible: s,
          showTags: c,
          instance: l,
          multiTags: i,
          tagsViews: m,
          buttonTop: v,
          buttonLeft: y,
          showModel: b,
          translateX: f,
          activeIndex: _,
          getTabStyle: S,
          iconIsActive: j,
          linkIsActive: V,
          currentSelect: F,
          scheduleIsActive: L,
          getContextMenuStyle: w,
          closeMenu: z,
          onMounted: R,
          onMouseenter: O,
          onMouseleave: U,
          transformI18n: W
        } = As(),
        I = G(),
        K = G(),
        se = G(),
        xe = () => {
          const g = i.value.findIndex(D =>
            D.query
              ? Me(e.query, D.query)
              : D.params
              ? Me(e.params, D.params)
              : D.path === e.path
          );
          ae(g);
        },
        ae = g => {
          var N, te;
          if (!l.refs["dynamic" + g]) return;
          const A = l.refs["dynamic" + g][0],
            H = A == null ? void 0 : A.offsetLeft,
            re = A == null ? void 0 : A.offsetWidth,
            B = se.value
              ? (N = se.value) == null
                ? void 0
                : N.offsetWidth
              : 0;
          (I.value ? ((te = I.value) == null ? void 0 : te.offsetWidth) : 0) <
            B || H === 0
            ? (f.value = 0)
            : H < -f.value
            ? (f.value = -H + 10)
            : H > -f.value && H + re < -f.value + B
            ? (f.value = Math.min(0, B - re - H - 10))
            : (f.value = -(H - (B - 10 - re)));
        },
        De = g => {
          var H;
          const D = se.value
              ? (H = se.value) == null
                ? void 0
                : H.offsetWidth
              : 0,
            A = I.value ? I.value.offsetWidth : 0;
          g > 0
            ? (f.value = Math.min(0, f.value + g))
            : D < A
            ? f.value >= -(A - D) && (f.value = Math.max(f.value + g, D - A))
            : (f.value = 0);
        };
      function be(g, D) {
        const A = i.value.some(re => re.path === g);
        function H(re, B, q) {
          A ||
            re.forEach(N => {
              let te = q + N.path;
              N.path === B || te === B
                ? ke().handleTags("push", {
                    path: B,
                    parentPath: `/${q.split("/")[1]}`,
                    meta: N.meta,
                    name: N.name
                  })
                : N.children && N.children.length > 0 && H(N.children, B, q);
            });
        }
        H(o.options.routes, g, D);
      }
      function Ve() {
        const g = "refresh-button";
        Se(!0, g, document.querySelector(".rotate"));
        const { fullPath: D, query: A } = n(e);
        o.replace({ path: "/redirect" + D, query: A }),
          setTimeout(() => {
            tn(document.querySelector(".rotate"), g);
          }, 600);
      }
      function Ee(g, D, A) {
        var N, te, $e, gt;
        let H = [],
          re = i.value.findIndex(ve => {
            if (ve.query) {
              if (ve.path === g.path) return ve.query === g.query;
            } else if (ve.params) {
              if (ve.path === g.path) return ve.params === g.params;
            } else return ve.path === g.path;
          });
        const B = (ve, Vt, Ot) => {
          Ot
            ? ke().handleTags("equal", [$t[0], g])
            : (H = ke().handleTags("splice", "", {
                startIndex: ve,
                length: Vt
              }));
        };
        A === "other"
          ? B(1, 1, !0)
          : A === "left"
          ? B(1, re - 1)
          : A === "right"
          ? B(re + 1, i.value.length)
          : B(re, 1);
        let q = ke().handleTags("slice");
        if (D === e.path) {
          if ((A ? ot(H) : nn(e.matched, "delete"), A === "left")) return;
          (N = q[0]) != null && N.query
            ? o.push({ name: q[0].name, query: q[0].query })
            : (te = q[0]) != null && te.params
            ? o.push({ name: q[0].name, params: q[0].params })
            : o.push({ path: q[0].path });
        } else {
          if (
            (A ? ot(H) : ot([g]),
            !i.value.length || i.value.some(ve => ve.path === e.path))
          )
            return;
          ($e = q[0]) != null && $e.query
            ? o.push({ name: q[0].name, query: q[0].query })
            : (gt = q[0]) != null && gt.params
            ? o.push({ name: q[0].name, params: q[0].params })
            : o.push({ path: q[0].path });
        }
      }
      function a(g, D) {
        Ee(g, g.path, D);
      }
      function p(g, D, A) {
        if (D && D.disabled) return;
        let H;
        switch (
          (A
            ? (H = {
                path: A.path,
                meta: A.meta,
                name: A.name,
                query: A == null ? void 0 : A.query,
                params: A == null ? void 0 : A.params
              })
            : (H = { path: e.path, meta: e.meta }),
          g)
        ) {
          case 0:
            Ve();
            break;
          case 1:
            a(H);
            break;
          case 2:
            a(H, "left");
            break;
          case 3:
            a(H, "right");
            break;
          case 4:
            a(H, "other");
            break;
          case 5:
            ke().handleTags("splice", "", {
              startIndex: 1,
              length: i.value.length
            }),
              o.push("/welcome");
            break;
        }
        setTimeout(() => {
          T(e.fullPath, e.query);
        });
      }
      function k(g) {
        const { key: D, item: A } = g;
        p(D, A);
      }
      function Z(g, D) {
        p(g, D, F.value);
      }
      function x(g) {
        Array.of(1, 2, 3, 4, 5).forEach(D => {
          m[D].show = g;
        });
      }
      function E(g) {
        Array.of(1, 2, 3, 4, 5).forEach(D => {
          m[D].disabled = g;
        });
      }
      function T(g, D = {}, A = !1) {
        let H = i.value,
          re = i.value.length,
          B = -1;
        kn(D)
          ? (B = H.findIndex(q => q.path === g))
          : (B = H.findIndex(q => Me(q.query, D))),
          x(!0),
          A && (m[0].show = !0),
          B === 1 && re !== 2
            ? ((m[2].show = !1),
              Array.of(1, 3, 4, 5).forEach(q => {
                m[q].disabled = !1;
              }),
              (m[2].disabled = !0))
            : B === 1 && re === 2
            ? (E(!1),
              Array.of(2, 3, 4).forEach(q => {
                (m[q].show = !1), (m[q].disabled = !0);
              }))
            : re - 1 === B && B !== 0
            ? ((m[3].show = !1),
              Array.of(1, 2, 4, 5).forEach(q => {
                m[q].disabled = !1;
              }),
              (m[3].disabled = !0))
            : E(B === 0 || g === "/redirect/welcome");
      }
      function P(g, D) {
        z(),
          g.path === "/welcome"
            ? (x(!1), (m[0].show = !0))
            : e.path !== g.path && e.name !== g.name
            ? ((m[0].show = !1), T(g.path, g.query))
            : i.value.length === 2 && e.path !== g.path
            ? (x(!0), (m[4].show = !1))
            : e.path === g.path && T(g.path, g.query, !0),
          (F.value = g);
        const A = 105,
          H = n(K).getBoundingClientRect().left,
          B = n(K).offsetWidth - A,
          q = D.clientX - H + 5;
        q > B ? (y.value = B) : (y.value = q),
          It().hiddenSideBar
            ? (v.value = D.clientY)
            : (v.value = D.clientY - 40),
          Re(() => {
            s.value = !0;
          });
      }
      function X(g) {
        const { name: D, path: A } = g;
        D
          ? g.query
            ? o.push({ name: D, query: g.query })
            : g.params
            ? o.push({ name: D, params: g.params })
            : o.push({ name: D })
          : o.push({ path: A });
      }
      return (
        xt(() => {
          !l ||
            (T(e.fullPath),
            Ie.on("tagViewsChange", g => {
              n(c) !== g && (c.value = g);
            }),
            Ie.on("tagViewsShowModel", g => {
              b.value = g;
            }),
            Ie.on("changLayoutRoute", ({ indexPath: g, parentPath: D }) => {
              be(g, D),
                setTimeout(() => {
                  T(g);
                });
            }));
        }),
        Te([e], () => {
          (_.value = -1), xe();
        }),
        R(() => {
          en(
            se,
            Ct(() => {
              xe();
            }, 200)
          );
        }),
        (g, D) => {
          const A = C("IconifyIconOffline"),
            H = C("router-link"),
            re = C("el-dropdown-item"),
            B = C("el-dropdown-menu"),
            q = C("el-dropdown");
          return n(c)
            ? Y("", !0)
            : (u(),
              $(
                "div",
                { key: 0, ref_key: "containerDom", ref: K, class: "tags-view" },
                [
                  d("div", Ts, [
                    r(A, {
                      icon: "arrow-left-s-line",
                      onClick: D[0] || (D[0] = N => De(200))
                    })
                  ]),
                  d(
                    "div",
                    {
                      ref_key: "scrollbarDom",
                      ref: se,
                      class: "scroll-container"
                    },
                    [
                      d(
                        "div",
                        {
                          class: "tab",
                          ref_key: "tabDom",
                          ref: I,
                          style: ne(n(S))
                        },
                        [
                          (u(!0),
                          $(
                            pe,
                            null,
                            _e(
                              n(i),
                              (N, te) => (
                                u(),
                                $(
                                  "div",
                                  {
                                    ref_for: !0,
                                    ref: "dynamic" + te,
                                    key: te,
                                    class: ie([
                                      "scroll-item is-closable",
                                      n(V)(N),
                                      g.$route.path === N.path &&
                                      n(b) === "card"
                                        ? "card-active"
                                        : ""
                                    ]),
                                    onContextmenu: Le(
                                      $e => P(N, $e),
                                      ["prevent"]
                                    ),
                                    onMouseenter: Le(
                                      $e => n(O)(te),
                                      ["prevent"]
                                    ),
                                    onMouseleave: Le(
                                      $e => n(U)(te),
                                      ["prevent"]
                                    ),
                                    onClick: $e => X(N)
                                  },
                                  [
                                    r(
                                      H,
                                      {
                                        to: N.path,
                                        class:
                                          "!dark:color-text_color_primary !dark:hover:color-primary"
                                      },
                                      {
                                        default: h(() => [
                                          ee(Q(n(W)(N.meta.title)), 1)
                                        ]),
                                        _: 2
                                      },
                                      1032,
                                      ["to"]
                                    ),
                                    n(j)(N, te) || (te === n(_) && te !== 0)
                                      ? (u(),
                                        $(
                                          "span",
                                          {
                                            key: 0,
                                            class: "el-icon-close",
                                            onClick: Le($e => a(N), ["stop"])
                                          },
                                          [r(A, { icon: "close-bold" })],
                                          8,
                                          zs
                                        ))
                                      : Y("", !0),
                                    n(b) !== "card"
                                      ? (u(),
                                        $(
                                          "div",
                                          {
                                            key: 1,
                                            ref_for: !0,
                                            ref: "schedule" + te,
                                            class: ie([n(L)(N)])
                                          },
                                          null,
                                          2
                                        ))
                                      : Y("", !0)
                                  ],
                                  42,
                                  Bs
                                )
                              )
                            ),
                            128
                          ))
                        ],
                        4
                      )
                    ],
                    512
                  ),
                  d("span", Ms, [
                    r(A, {
                      icon: "arrow-right-s-line",
                      onClick: D[1] || (D[1] = N => De(-200))
                    })
                  ]),
                  r(
                    it,
                    { name: "el-zoom-in-top" },
                    {
                      default: h(() => [
                        de(
                          (u(),
                          $(
                            "ul",
                            {
                              key: Math.random(),
                              style: ne(n(w)),
                              class: "contextmenu"
                            },
                            [
                              (u(!0),
                              $(
                                pe,
                                null,
                                _e(
                                  n(m),
                                  (N, te) => (
                                    u(),
                                    $(
                                      "div",
                                      {
                                        key: te,
                                        style: {
                                          display: "flex",
                                          "align-items": "center"
                                        }
                                      },
                                      [
                                        N.show
                                          ? (u(),
                                            $(
                                              "li",
                                              {
                                                key: 0,
                                                onClick: $e => Z(te, N)
                                              },
                                              [
                                                (u(),
                                                M(Ce(ge(N.icon)), { key: te })),
                                                ee(" " + Q(n(W)(N.text)), 1)
                                              ],
                                              8,
                                              Vs
                                            ))
                                          : Y("", !0)
                                      ]
                                    )
                                  )
                                ),
                                128
                              ))
                            ],
                            4
                          )),
                          [[he, n(s)]]
                        )
                      ]),
                      _: 1
                    }
                  ),
                  d("ul", Os, [
                    d("li", null, [
                      d(
                        "span",
                        {
                          title: n(W)("buttons.hsrefreshRoute"),
                          class: "el-icon-refresh-right rotate",
                          onClick: Ve
                        },
                        [r(A, { icon: "refresh-right" })],
                        8,
                        js
                      )
                    ]),
                    d("li", null, [
                      r(
                        q,
                        {
                          trigger: "click",
                          placement: "bottom-end",
                          onCommand: k
                        },
                        {
                          dropdown: h(() => [
                            r(B, null, {
                              default: h(() => [
                                (u(!0),
                                $(
                                  pe,
                                  null,
                                  _e(
                                    n(m),
                                    (N, te) => (
                                      u(),
                                      M(
                                        re,
                                        {
                                          key: te,
                                          command: { key: te, item: N },
                                          divided: N.divided,
                                          disabled: N.disabled
                                        },
                                        {
                                          default: h(() => [
                                            (u(),
                                            M(Ce(ge(N.icon)), {
                                              key: te,
                                              style: { "margin-right": "6px" }
                                            })),
                                            ee(" " + Q(n(W)(N.text)), 1)
                                          ]),
                                          _: 2
                                        },
                                        1032,
                                        ["command", "divided", "disabled"]
                                      )
                                    )
                                  ),
                                  128
                                ))
                              ]),
                              _: 1
                            })
                          ]),
                          default: h(() => [
                            r(A, {
                              icon: "arrow-down",
                              class: "dark:color-white"
                            })
                          ]),
                          _: 1
                        }
                      )
                    ]),
                    d("li", null, [Et(g.$slots, "default", {}, void 0, !0)])
                  ])
                ],
                512
              ));
        }
      );
    }
  });
const Ls = ce(Ps, [["__scopeId", "data-v-fb717710"]]),
  Hs = { key: 1 },
  qs = oe({
    __name: "appMain",
    props: { fixedHeader: Boolean },
    setup(t) {
      const e = t,
        { $storage: o, $config: s } = ut(),
        c = J(() => (s == null ? void 0 : s.KeepAlive)),
        l = J(() => b => b.meta.transition),
        i = J(() => (o == null ? void 0 : o.configure.hideTabs)),
        m = J(() => (o == null ? void 0 : o.layout.layout) === "vertical"),
        v = J(() => [
          i.value && m ? "padding-top: 48px;" : "",
          !i.value && m ? "padding-top: 85px;" : "",
          i.value && !m.value ? "padding-top: 48px" : "",
          !i.value && !m.value ? "padding-top: 85px;" : "",
          e.fixedHeader ? "" : "padding-top: 0;"
        ]),
        y = oe({
          render() {
            return we(
              it,
              {
                name:
                  l.value(this.route) &&
                  this.route.meta.transition.enterTransition
                    ? "pure-classes-transition"
                    : (l.value(this.route) &&
                        this.route.meta.transition.name) ||
                      "fade-transform",
                enterActiveClass:
                  l.value(this.route) &&
                  `animate__animated ${this.route.meta.transition.enterTransition}`,
                leaveActiveClass:
                  l.value(this.route) &&
                  `animate__animated ${this.route.meta.transition.leaveTransition}`,
                mode: "out-in",
                appear: !0
              },
              { default: () => [this.$slots.default()] }
            );
          },
          props: { route: { type: void 0, required: !0 } }
        });
      return (b, f) => {
        const _ = C("el-backtop"),
          S = C("el-scrollbar"),
          j = C("router-view");
        return (
          u(),
          $(
            "section",
            {
              class: ie([
                e.fixedHeader ? "app-main" : "app-main-nofixed-header"
              ]),
              style: ne(n(v))
            },
            [
              r(j, null, {
                default: h(({ Component: V, route: F }) => [
                  e.fixedHeader
                    ? (u(),
                      M(
                        S,
                        { key: 0 },
                        {
                          default: h(() => [
                            r(
                              _,
                              {
                                title: "\u56DE\u5230\u9876\u90E8",
                                target: ".app-main .el-scrollbar__wrap"
                              },
                              { default: h(() => [r(n(Dt))]), _: 1 }
                            ),
                            r(
                              n(y),
                              { route: F },
                              {
                                default: h(() => [
                                  n(c)
                                    ? (u(),
                                      M(
                                        yt,
                                        {
                                          key: 0,
                                          include: n(Fe)().cachePageList
                                        },
                                        [
                                          (u(),
                                          M(Ce(V), {
                                            key: F.fullPath,
                                            class: "main-content"
                                          }))
                                        ],
                                        1032,
                                        ["include"]
                                      ))
                                    : (u(),
                                      M(Ce(V), {
                                        key: F.fullPath,
                                        class: "main-content"
                                      }))
                                ]),
                                _: 2
                              },
                              1032,
                              ["route"]
                            )
                          ]),
                          _: 2
                        },
                        1024
                      ))
                    : (u(),
                      $("div", Hs, [
                        r(
                          n(y),
                          { route: F },
                          {
                            default: h(() => [
                              n(c)
                                ? (u(),
                                  M(
                                    yt,
                                    { key: 0, include: n(Fe)().cachePageList },
                                    [
                                      (u(),
                                      M(Ce(V), {
                                        key: F.fullPath,
                                        class: "main-content"
                                      }))
                                    ],
                                    1032,
                                    ["include"]
                                  ))
                                : (u(),
                                  M(Ce(V), {
                                    key: F.fullPath,
                                    class: "main-content"
                                  }))
                            ]),
                            _: 2
                          },
                          1032,
                          ["route"]
                        )
                      ]))
                ]),
                _: 1
              })
            ],
            6
          )
        );
      };
    }
  });
const wt = ce(qs, [["__scopeId", "data-v-3bc2f969"]]),
  mt = t => (St("data-v-a4e6dcc9"), (t = t()), Ft(), t),
  Ns = mt(() => d("div", { class: "right-panel-background" }, null, -1)),
  Rs = { class: "right-panel-items" },
  Us = { class: "project-configuration" },
  Ws = mt(() => d("h3", null, "\u9879\u76EE\u914D\u7F6E", -1)),
  Gs = mt(() =>
    d(
      "div",
      { class: "border-b-1 border-[#dcdfe6] dark:border-[#303030]" },
      null,
      -1
    )
  ),
  Ks = oe({
    __name: "index",
    setup(t) {
      let e = G(!1);
      const o = G(null);
      return (
        on(o, s => {
          s.clientX > o.value.offsetLeft || (e.value = !1);
        }),
        Ie.on("openPanel", () => {
          e.value = !0;
        }),
        (s, c) => {
          const l = C("IconifyIconOffline"),
            i = C("el-icon");
          return (
            u(),
            $(
              "div",
              { class: ie([{ show: n(e) }, "right-panel-container"]) },
              [
                Ns,
                d(
                  "div",
                  {
                    ref_key: "target",
                    ref: o,
                    class: "right-panel bg-white dark:bg-dark"
                  },
                  [
                    d("div", Rs, [
                      d("div", Us, [
                        Ws,
                        r(
                          i,
                          {
                            title: "\u5173\u95ED\u914D\u7F6E",
                            class: "el-icon-close",
                            onClick:
                              c[0] ||
                              (c[0] = m =>
                                Je(e) ? (e.value = !n(e)) : (e = !n(e)))
                          },
                          { default: h(() => [r(l, { icon: "close" })]), _: 1 }
                        )
                      ]),
                      Gs,
                      Et(s.$slots, "default", {}, void 0, !0)
                    ])
                  ],
                  512
                )
              ],
              2
            )
          );
        }
      );
    }
  });
const Xs = ce(Ks, [["__scopeId", "data-v-a4e6dcc9"]]),
  me = t => (St("data-v-71f40149"), (t = t()), Ft(), t),
  Zs = ee("\u4E3B\u9898"),
  Js = ee("\u5BFC\u822A\u680F\u6A21\u5F0F"),
  Ys = { class: "pure-theme" },
  Qs = me(() => d("div", null, null, -1)),
  ea = me(() => d("div", null, null, -1)),
  ta = [Qs, ea],
  na = me(() => d("div", null, null, -1)),
  oa = me(() => d("div", null, null, -1)),
  sa = [na, oa],
  aa = me(() => d("div", null, null, -1)),
  ra = me(() => d("div", null, null, -1)),
  la = [aa, ra],
  ia = ee("\u4E3B\u9898\u8272"),
  ua = { class: "theme-color" },
  ca = ["onClick"],
  da = ee("\u754C\u9762\u663E\u793A"),
  pa = { class: "setting" },
  ha = me(() => d("span", null, "\u7070\u8272\u6A21\u5F0F", -1)),
  fa = me(() => d("span", null, "\u8272\u5F31\u6A21\u5F0F", -1)),
  _a = me(() => d("span", null, "\u9690\u85CF\u6807\u7B7E\u9875", -1)),
  ma = me(() => d("span", null, "\u4FA7\u8FB9\u680FLogo", -1)),
  va = me(() => d("span", null, "\u6807\u7B7E\u9875\u6301\u4E45\u5316", -1)),
  ga = me(() => d("span", null, "\u6807\u7B7E\u98CE\u683C", -1)),
  ya = ee("\u5361\u7247"),
  ba = ee("\u7075\u52A8"),
  wa = ee(" \u6E05\u7A7A\u7F13\u5B58\u5E76\u8FD4\u56DE\u767B\u5F55\u9875 "),
  ka = oe({
    __name: "index",
    setup(t) {
      var a, p, k, Z;
      const e = Ze(),
        { device: o } = Be(),
        { isDark: s } = ct(),
        { isSelect: c } = sn(),
        { $storage: l } = ut(),
        i = Ge("mixRef", null),
        m = Ge("verticalRef", null),
        v = Ge("horizontalRef", null),
        {
          body: y,
          dataTheme: b,
          layoutTheme: f,
          themeColors: _,
          dataThemeChange: S,
          setEpThemeColor: j,
          setLayoutThemeColor: V
        } = cn();
      if (n(f)) {
        let x = n(f).layout,
          E = n(f).theme;
        dn({ scopeName: `layout-theme-${E}` }), Ee(x);
      }
      const F = G(
          (p = (a = l.configure) == null ? void 0 : a.showModel) != null
            ? p
            : "smart"
        ),
        L = G(
          (Z = (k = l.configure) == null ? void 0 : k.showLogo) != null ? Z : !0
        ),
        w = lt({
          greyVal: l.configure.grey,
          weakVal: l.configure.weak,
          tabsVal: l.configure.hideTabs,
          showLogo: l.configure.showLogo,
          showModel: l.configure.showModel,
          multiTagsCache: l.configure.multiTagsCache
        }),
        z = J(() => x => ({ background: x })),
        R = J(() => x => !(x === "light" && s.value));
      function O(x, E) {
        const T = l.configure;
        (T[x] = E), (l.configure = T);
      }
      function U(x, E, T) {
        const P = T || document.body;
        let { className: X } = P;
        (X = X.replace(E, "").trim()), (P.className = x ? `${X} ${E} ` : X);
      }
      const W = x => {
          U(w.greyVal, "html-grey", document.querySelector("html")),
            O("grey", x);
        },
        I = x => {
          U(w.weakVal, "html-weakness", document.querySelector("html")),
            O("weak", x);
        },
        K = () => {
          let x = w.tabsVal;
          O("hideTabs", x), Ie.emit("tagViewsChange", x);
        },
        se = () => {
          let x = w.multiTagsCache;
          O("multiTagsCache", x), ke().multiTagsCacheChange(x);
        };
      function xe() {
        e.push("/login");
        const {
          Grey: x,
          Weak: E,
          MultiTagsCache: T,
          EpThemeColor: P,
          Layout: X
        } = We();
        Ae().setLayout(X),
          j(P),
          ke().multiTagsCacheChange(T),
          U(x, "html-grey", document.querySelector("html")),
          U(E, "html-weakness", document.querySelector("html")),
          ke().handleTags("equal", [...$t]),
          je.clear(),
          an.clear(),
          rn();
      }
      function ae(x) {
        O("showModel", x), Ie.emit("tagViewsShowModel", x);
      }
      function De() {
        n(L) ? O("showLogo", !0) : O("showLogo", !1),
          Ie.emit("logoChange", n(L));
      }
      function be(x) {
        x.forEach(E => {
          U(!1, c, n(E));
        });
      }
      Te(l, ({ layout: x }) => {
        switch (
          (y.style.setProperty("--w-e-toolbar-active-color", x.epThemeColor),
          x.layout)
        ) {
          case "vertical":
            U(!0, c, n(m)), Oe(be([v]), 50), Oe(be([i]), 50);
            break;
          case "horizontal":
            U(!0, c, n(v)), Oe(be([m]), 50), Oe(be([i]), 50);
            break;
          case "mix":
            U(!0, c, n(i)), Oe(be([m]), 50), Oe(be([v]), 50);
            break;
        }
      });
      const Ve = J(
        () => x =>
          x === f.value.theme && f.value.theme !== "light"
            ? "#fff"
            : x === f.value.theme && f.value.theme === "light"
            ? "#1d2b45"
            : "transparent"
      );
      function Ee(x) {
        var E, T, P;
        (f.value.layout = x),
          window.document.body.setAttribute("layout", x),
          (l.layout = {
            layout: x,
            theme: f.value.theme,
            darkMode: (E = l.layout) == null ? void 0 : E.darkMode,
            sidebarStatus: (T = l.layout) == null ? void 0 : T.sidebarStatus,
            epThemeColor: (P = l.layout) == null ? void 0 : P.epThemeColor
          }),
          Ae().setLayout(x);
      }
      return (
        Re(() => {
          var x, E;
          w.greyVal &&
            ((x = document.querySelector("html")) == null ||
              x.setAttribute("class", "html-grey")),
            w.weakVal &&
              ((E = document.querySelector("html")) == null ||
                E.setAttribute("class", "html-weakness")),
            w.tabsVal && K(),
            S();
        }),
        (x, E) => {
          const T = C("el-divider"),
            P = C("el-switch"),
            X = C("el-tooltip"),
            g = C("IconifyIconOffline"),
            D = C("el-icon"),
            A = C("el-radio"),
            H = C("el-radio-group"),
            re = C("el-button");
          return (
            u(),
            M(Xs, null, {
              default: h(() => [
                r(T, null, { default: h(() => [Zs]), _: 1 }),
                r(
                  P,
                  {
                    modelValue: n(b),
                    "onUpdate:modelValue":
                      E[0] || (E[0] = B => (Je(b) ? (b.value = B) : null)),
                    "inline-prompt": "",
                    class: "pure-datatheme",
                    "active-icon": n(pn),
                    "inactive-icon": n(hn),
                    onChange: n(S)
                  },
                  null,
                  8,
                  ["modelValue", "active-icon", "inactive-icon", "onChange"]
                ),
                r(T, null, { default: h(() => [Js]), _: 1 }),
                d("ul", Ys, [
                  r(
                    X,
                    {
                      class: "item",
                      content: "\u5DE6\u4FA7\u6A21\u5F0F",
                      placement: "bottom"
                    },
                    {
                      default: h(() => [
                        d(
                          "li",
                          {
                            class: ie(
                              n(f).layout === "vertical"
                                ? x.$style.isSelect
                                : ""
                            ),
                            ref_key: "verticalRef",
                            ref: m,
                            onClick: E[1] || (E[1] = B => Ee("vertical"))
                          },
                          ta,
                          2
                        )
                      ]),
                      _: 1
                    }
                  ),
                  n(o) !== "mobile"
                    ? (u(),
                      M(
                        X,
                        {
                          key: 0,
                          class: "item",
                          content: "\u9876\u90E8\u6A21\u5F0F",
                          placement: "bottom"
                        },
                        {
                          default: h(() => [
                            d(
                              "li",
                              {
                                class: ie(
                                  n(f).layout === "horizontal"
                                    ? x.$style.isSelect
                                    : ""
                                ),
                                ref_key: "horizontalRef",
                                ref: v,
                                onClick: E[2] || (E[2] = B => Ee("horizontal"))
                              },
                              sa,
                              2
                            )
                          ]),
                          _: 1
                        }
                      ))
                    : Y("", !0),
                  n(o) !== "mobile"
                    ? (u(),
                      M(
                        X,
                        {
                          key: 1,
                          class: "item",
                          content: "\u6DF7\u5408\u6A21\u5F0F",
                          placement: "bottom"
                        },
                        {
                          default: h(() => [
                            d(
                              "li",
                              {
                                class: ie(
                                  n(f).layout === "mix" ? x.$style.isSelect : ""
                                ),
                                ref_key: "mixRef",
                                ref: i,
                                onClick: E[3] || (E[3] = B => Ee("mix"))
                              },
                              la,
                              2
                            )
                          ]),
                          _: 1
                        }
                      ))
                    : Y("", !0)
                ]),
                r(T, null, { default: h(() => [ia]), _: 1 }),
                d("ul", ua, [
                  (u(!0),
                  $(
                    pe,
                    null,
                    _e(n(_), (B, q) =>
                      de(
                        (u(),
                        $(
                          "li",
                          {
                            key: q,
                            style: ne(n(z)(B.color)),
                            onClick: N => n(V)(B.themeColor)
                          },
                          [
                            r(
                              D,
                              {
                                style: { margin: "0.1em 0.1em 0 0" },
                                size: 17,
                                color: n(Ve)(B.themeColor)
                              },
                              {
                                default: h(() => [r(g, { icon: "check" })]),
                                _: 2
                              },
                              1032,
                              ["color"]
                            )
                          ],
                          12,
                          ca
                        )),
                        [[he, n(R)(B.themeColor)]]
                      )
                    ),
                    128
                  ))
                ]),
                r(T, null, { default: h(() => [da]), _: 1 }),
                d("ul", pa, [
                  d("li", null, [
                    ha,
                    r(
                      P,
                      {
                        modelValue: w.greyVal,
                        "onUpdate:modelValue":
                          E[4] || (E[4] = B => (w.greyVal = B)),
                        "inline-prompt": "",
                        "inactive-color": "#a6a6a6",
                        "active-text": "\u5F00",
                        "inactive-text": "\u5173",
                        onChange: W
                      },
                      null,
                      8,
                      ["modelValue"]
                    )
                  ]),
                  d("li", null, [
                    fa,
                    r(
                      P,
                      {
                        modelValue: w.weakVal,
                        "onUpdate:modelValue":
                          E[5] || (E[5] = B => (w.weakVal = B)),
                        "inline-prompt": "",
                        "inactive-color": "#a6a6a6",
                        "active-text": "\u5F00",
                        "inactive-text": "\u5173",
                        onChange: I
                      },
                      null,
                      8,
                      ["modelValue"]
                    )
                  ]),
                  d("li", null, [
                    _a,
                    r(
                      P,
                      {
                        modelValue: w.tabsVal,
                        "onUpdate:modelValue":
                          E[6] || (E[6] = B => (w.tabsVal = B)),
                        "inline-prompt": "",
                        "inactive-color": "#a6a6a6",
                        "active-text": "\u5F00",
                        "inactive-text": "\u5173",
                        onChange: K
                      },
                      null,
                      8,
                      ["modelValue"]
                    )
                  ]),
                  d("li", null, [
                    ma,
                    r(
                      P,
                      {
                        modelValue: L.value,
                        "onUpdate:modelValue":
                          E[7] || (E[7] = B => (L.value = B)),
                        "inline-prompt": "",
                        "active-value": !0,
                        "inactive-value": !1,
                        "inactive-color": "#a6a6a6",
                        "active-text": "\u5F00",
                        "inactive-text": "\u5173",
                        onChange: De
                      },
                      null,
                      8,
                      ["modelValue"]
                    )
                  ]),
                  d("li", null, [
                    va,
                    r(
                      P,
                      {
                        modelValue: w.multiTagsCache,
                        "onUpdate:modelValue":
                          E[8] || (E[8] = B => (w.multiTagsCache = B)),
                        "inline-prompt": "",
                        "inactive-color": "#a6a6a6",
                        "active-text": "\u5F00",
                        "inactive-text": "\u5173",
                        onChange: se
                      },
                      null,
                      8,
                      ["modelValue"]
                    )
                  ]),
                  d("li", null, [
                    ga,
                    r(
                      H,
                      {
                        modelValue: F.value,
                        "onUpdate:modelValue":
                          E[9] || (E[9] = B => (F.value = B)),
                        size: "small",
                        onChange: ae
                      },
                      {
                        default: h(() => [
                          r(
                            A,
                            { label: "card" },
                            { default: h(() => [ya]), _: 1 }
                          ),
                          r(
                            A,
                            { label: "smart" },
                            { default: h(() => [ba]), _: 1 }
                          )
                        ]),
                        _: 1
                      },
                      8,
                      ["modelValue"]
                    )
                  ])
                ]),
                r(T),
                r(
                  re,
                  {
                    type: "danger",
                    style: { width: "90%", margin: "24px 15px" },
                    onClick: xe
                  },
                  {
                    default: h(() => [
                      r(g, {
                        icon: "fa-sign-out",
                        width: "15",
                        height: "15",
                        style: { "margin-right": "4px" }
                      }),
                      wa
                    ]),
                    _: 1
                  }
                )
              ]),
              _: 1
            })
          );
        }
      );
    }
  }),
  Ca = "_isSelect_bhpkq_2",
  xa = { isSelect: Ca };
const Ea = { $style: xa },
  $a = ce(ka, [
    ["__cssModules", Ea],
    ["__scopeId", "data-v-71f40149"]
  ]),
  Sa = { class: "sidebar-title" },
  Fa = { class: "sidebar-title" },
  Ia = oe({
    __name: "logo",
    props: { collapse: Boolean },
    setup(t) {
      const e = t,
        { title: o } = Be();
      return (s, c) => {
        const l = C("FontIcon"),
          i = C("router-link");
        return (
          u(),
          $(
            "div",
            { class: ie(["sidebar-logo-container", { collapse: e.collapse }]) },
            [
              r(
                it,
                { name: "sidebarLogoFade" },
                {
                  default: h(() => [
                    e.collapse
                      ? (u(),
                        M(
                          i,
                          {
                            key: "props.collapse",
                            title: n(o),
                            class: "sidebar-logo-link",
                            to: "/"
                          },
                          {
                            default: h(() => [
                              r(l, {
                                icon: "team-iconlogo",
                                svg: "",
                                style: { width: "35px", height: "35px" }
                              }),
                              d("span", Sa, Q(n(o)), 1)
                            ]),
                            _: 1
                          },
                          8,
                          ["title"]
                        ))
                      : (u(),
                        M(
                          i,
                          {
                            key: "expand",
                            title: n(o),
                            class: "sidebar-logo-link",
                            to: "/"
                          },
                          {
                            default: h(() => [
                              r(l, {
                                icon: "team-iconlogo",
                                svg: "",
                                style: { width: "35px", height: "35px" }
                              }),
                              d("span", Fa, Q(n(o)), 1)
                            ]),
                            _: 1
                          },
                          8,
                          ["title"]
                        ))
                  ]),
                  _: 1
                }
              )
            ],
            2
          )
        );
      };
    }
  });
const Da = ce(Ia, [["__scopeId", "data-v-c43e2be5"]]);
var Ne = { exports: {} },
  Tt = {},
  Aa = function (e) {
    return (
      e &&
      typeof e == "object" &&
      typeof e.copy == "function" &&
      typeof e.fill == "function" &&
      typeof e.readUInt8 == "function"
    );
  },
  st = { exports: {} };
typeof Object.create == "function"
  ? (st.exports = function (e, o) {
      (e.super_ = o),
        (e.prototype = Object.create(o.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }));
    })
  : (st.exports = function (e, o) {
      e.super_ = o;
      var s = function () {};
      (s.prototype = o.prototype),
        (e.prototype = new s()),
        (e.prototype.constructor = e);
    });
(function (t) {
  var e = /%[sdj%]/g;
  (t.format = function (a) {
    if (!z(a)) {
      for (var p = [], k = 0; k < arguments.length; k++)
        p.push(c(arguments[k]));
      return p.join(" ");
    }
    for (
      var k = 1,
        Z = arguments,
        x = Z.length,
        E = String(a).replace(e, function (P) {
          if (P === "%%") return "%";
          if (k >= x) return P;
          switch (P) {
            case "%s":
              return String(Z[k++]);
            case "%d":
              return Number(Z[k++]);
            case "%j":
              try {
                return JSON.stringify(Z[k++]);
              } catch {
                return "[Circular]";
              }
            default:
              return P;
          }
        }),
        T = Z[k];
      k < x;
      T = Z[++k]
    )
      F(T) || !W(T) ? (E += " " + T) : (E += " " + c(T));
    return E;
  }),
    (t.deprecate = function (a, p) {
      if (O(ln.process))
        return function () {
          return t.deprecate(a, p).apply(this, arguments);
        };
      if (process.noDeprecation === !0) return a;
      var k = !1;
      function Z() {
        if (!k) {
          if (process.throwDeprecation) throw new Error(p);
          process.traceDeprecation ? console.trace(p) : console.error(p),
            (k = !0);
        }
        return a.apply(this, arguments);
      }
      return Z;
    });
  var o = {},
    s;
  t.debuglog = function (a) {
    if (
      (O(s) && (s = process.env.NODE_DEBUG || ""), (a = a.toUpperCase()), !o[a])
    )
      if (new RegExp("\\b" + a + "\\b", "i").test(s)) {
        var p = process.pid;
        o[a] = function () {
          var k = t.format.apply(t, arguments);
          console.error("%s %d: %s", a, p, k);
        };
      } else o[a] = function () {};
    return o[a];
  };
  function c(a, p) {
    var k = { seen: [], stylize: i };
    return (
      arguments.length >= 3 && (k.depth = arguments[2]),
      arguments.length >= 4 && (k.colors = arguments[3]),
      V(p) ? (k.showHidden = p) : p && t._extend(k, p),
      O(k.showHidden) && (k.showHidden = !1),
      O(k.depth) && (k.depth = 2),
      O(k.colors) && (k.colors = !1),
      O(k.customInspect) && (k.customInspect = !0),
      k.colors && (k.stylize = l),
      v(k, a, k.depth)
    );
  }
  (t.inspect = c),
    (c.colors = {
      bold: [1, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      white: [37, 39],
      grey: [90, 39],
      black: [30, 39],
      blue: [34, 39],
      cyan: [36, 39],
      green: [32, 39],
      magenta: [35, 39],
      red: [31, 39],
      yellow: [33, 39]
    }),
    (c.styles = {
      special: "cyan",
      number: "yellow",
      boolean: "yellow",
      undefined: "grey",
      null: "bold",
      string: "green",
      date: "magenta",
      regexp: "red"
    });
  function l(a, p) {
    var k = c.styles[p];
    return k
      ? "\x1B[" + c.colors[k][0] + "m" + a + "\x1B[" + c.colors[k][1] + "m"
      : a;
  }
  function i(a, p) {
    return a;
  }
  function m(a) {
    var p = {};
    return (
      a.forEach(function (k, Z) {
        p[k] = !0;
      }),
      p
    );
  }
  function v(a, p, k) {
    if (
      a.customInspect &&
      p &&
      se(p.inspect) &&
      p.inspect !== t.inspect &&
      !(p.constructor && p.constructor.prototype === p)
    ) {
      var Z = p.inspect(k, a);
      return z(Z) || (Z = v(a, Z, k)), Z;
    }
    var x = y(a, p);
    if (x) return x;
    var E = Object.keys(p),
      T = m(E);
    if (
      (a.showHidden && (E = Object.getOwnPropertyNames(p)),
      K(p) && (E.indexOf("message") >= 0 || E.indexOf("description") >= 0))
    )
      return b(p);
    if (E.length === 0) {
      if (se(p)) {
        var P = p.name ? ": " + p.name : "";
        return a.stylize("[Function" + P + "]", "special");
      }
      if (U(p)) return a.stylize(RegExp.prototype.toString.call(p), "regexp");
      if (I(p)) return a.stylize(Date.prototype.toString.call(p), "date");
      if (K(p)) return b(p);
    }
    var X = "",
      g = !1,
      D = ["{", "}"];
    if ((j(p) && ((g = !0), (D = ["[", "]"])), se(p))) {
      var A = p.name ? ": " + p.name : "";
      X = " [Function" + A + "]";
    }
    if (
      (U(p) && (X = " " + RegExp.prototype.toString.call(p)),
      I(p) && (X = " " + Date.prototype.toUTCString.call(p)),
      K(p) && (X = " " + b(p)),
      E.length === 0 && (!g || p.length == 0))
    )
      return D[0] + X + D[1];
    if (k < 0)
      return U(p)
        ? a.stylize(RegExp.prototype.toString.call(p), "regexp")
        : a.stylize("[Object]", "special");
    a.seen.push(p);
    var H;
    return (
      g
        ? (H = f(a, p, k, T, E))
        : (H = E.map(function (re) {
            return _(a, p, k, T, re, g);
          })),
      a.seen.pop(),
      S(H, X, D)
    );
  }
  function y(a, p) {
    if (O(p)) return a.stylize("undefined", "undefined");
    if (z(p)) {
      var k =
        "'" +
        JSON.stringify(p)
          .replace(/^"|"$/g, "")
          .replace(/'/g, "\\'")
          .replace(/\\"/g, '"') +
        "'";
      return a.stylize(k, "string");
    }
    if (w(p)) return a.stylize("" + p, "number");
    if (V(p)) return a.stylize("" + p, "boolean");
    if (F(p)) return a.stylize("null", "null");
  }
  function b(a) {
    return "[" + Error.prototype.toString.call(a) + "]";
  }
  function f(a, p, k, Z, x) {
    for (var E = [], T = 0, P = p.length; T < P; ++T)
      Ee(p, String(T)) ? E.push(_(a, p, k, Z, String(T), !0)) : E.push("");
    return (
      x.forEach(function (X) {
        X.match(/^\d+$/) || E.push(_(a, p, k, Z, X, !0));
      }),
      E
    );
  }
  function _(a, p, k, Z, x, E) {
    var T, P, X;
    if (
      ((X = Object.getOwnPropertyDescriptor(p, x) || { value: p[x] }),
      X.get
        ? X.set
          ? (P = a.stylize("[Getter/Setter]", "special"))
          : (P = a.stylize("[Getter]", "special"))
        : X.set && (P = a.stylize("[Setter]", "special")),
      Ee(Z, x) || (T = "[" + x + "]"),
      P ||
        (a.seen.indexOf(X.value) < 0
          ? (F(k) ? (P = v(a, X.value, null)) : (P = v(a, X.value, k - 1)),
            P.indexOf(`
`) > -1 &&
              (E
                ? (P = P.split(
                    `
`
                  )
                    .map(function (g) {
                      return "  " + g;
                    })
                    .join(
                      `
`
                    )
                    .substr(2))
                : (P =
                    `
` +
                    P.split(
                      `
`
                    ).map(function (g) {
                      return "   " + g;
                    }).join(`
`))))
          : (P = a.stylize("[Circular]", "special"))),
      O(T))
    ) {
      if (E && x.match(/^\d+$/)) return P;
      (T = JSON.stringify("" + x)),
        T.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
          ? ((T = T.substr(1, T.length - 2)), (T = a.stylize(T, "name")))
          : ((T = T.replace(/'/g, "\\'")
              .replace(/\\"/g, '"')
              .replace(/(^"|"$)/g, "'")),
            (T = a.stylize(T, "string")));
    }
    return T + ": " + P;
  }
  function S(a, p, k) {
    var Z = a.reduce(function (x, E) {
      return (
        E.indexOf(`
`) >= 0,
        x + E.replace(/\u001b\[\d\d?m/g, "").length + 1
      );
    }, 0);
    return Z > 60
      ? k[0] +
          (p === ""
            ? ""
            : p +
              `
 `) +
          " " +
          a.join(`,
  `) +
          " " +
          k[1]
      : k[0] + p + " " + a.join(", ") + " " + k[1];
  }
  function j(a) {
    return Array.isArray(a);
  }
  t.isArray = j;
  function V(a) {
    return typeof a == "boolean";
  }
  t.isBoolean = V;
  function F(a) {
    return a === null;
  }
  t.isNull = F;
  function L(a) {
    return a == null;
  }
  t.isNullOrUndefined = L;
  function w(a) {
    return typeof a == "number";
  }
  t.isNumber = w;
  function z(a) {
    return typeof a == "string";
  }
  t.isString = z;
  function R(a) {
    return typeof a == "symbol";
  }
  t.isSymbol = R;
  function O(a) {
    return a === void 0;
  }
  t.isUndefined = O;
  function U(a) {
    return W(a) && ae(a) === "[object RegExp]";
  }
  t.isRegExp = U;
  function W(a) {
    return typeof a == "object" && a !== null;
  }
  t.isObject = W;
  function I(a) {
    return W(a) && ae(a) === "[object Date]";
  }
  t.isDate = I;
  function K(a) {
    return W(a) && (ae(a) === "[object Error]" || a instanceof Error);
  }
  t.isError = K;
  function se(a) {
    return typeof a == "function";
  }
  t.isFunction = se;
  function xe(a) {
    return (
      a === null ||
      typeof a == "boolean" ||
      typeof a == "number" ||
      typeof a == "string" ||
      typeof a == "symbol" ||
      typeof a > "u"
    );
  }
  (t.isPrimitive = xe), (t.isBuffer = Aa);
  function ae(a) {
    return Object.prototype.toString.call(a);
  }
  function De(a) {
    return a < 10 ? "0" + a.toString(10) : a.toString(10);
  }
  var be = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  function Ve() {
    var a = new Date(),
      p = [De(a.getHours()), De(a.getMinutes()), De(a.getSeconds())].join(":");
    return [a.getDate(), be[a.getMonth()], p].join(" ");
  }
  (t.log = function () {
    console.log("%s - %s", Ve(), t.format.apply(t, arguments));
  }),
    (t.inherits = st.exports),
    (t._extend = function (a, p) {
      if (!p || !W(p)) return a;
      for (var k = Object.keys(p), Z = k.length; Z--; ) a[k[Z]] = p[k[Z]];
      return a;
    });
  function Ee(a, p) {
    return Object.prototype.hasOwnProperty.call(a, p);
  }
})(Tt);
var Ta = process.platform === "win32",
  ye = Tt;
function Qe(t, e) {
  for (var o = [], s = 0; s < t.length; s++) {
    var c = t[s];
    !c ||
      c === "." ||
      (c === ".."
        ? o.length && o[o.length - 1] !== ".."
          ? o.pop()
          : e && o.push("..")
        : o.push(c));
  }
  return o;
}
function He(t) {
  for (var e = t.length - 1, o = 0; o <= e && !t[o]; o++);
  for (var s = e; s >= 0 && !t[s]; s--);
  return o === 0 && s === e ? t : o > s ? [] : t.slice(o, s + 1);
}
var Bt = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,
  Ba = /^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/,
  le = {};
function et(t) {
  var e = Bt.exec(t),
    o = (e[1] || "") + (e[2] || ""),
    s = e[3] || "",
    c = Ba.exec(s),
    l = c[1],
    i = c[2],
    m = c[3];
  return [o, l, i, m];
}
function vt(t) {
  var e = Bt.exec(t),
    o = e[1] || "",
    s = !!o && o[1] !== ":";
  return { device: o, isUnc: s, isAbsolute: s || !!e[2], tail: e[3] };
}
function zt(t) {
  return "\\\\" + t.replace(/^[\\\/]+/, "").replace(/[\\\/]+/g, "\\");
}
le.resolve = function () {
  for (var t = "", e = "", o = !1, s = arguments.length - 1; s >= -1; s--) {
    var c;
    if (
      (s >= 0
        ? (c = arguments[s])
        : t
        ? ((c = process.env["=" + t]),
          (!c || c.substr(0, 3).toLowerCase() !== t.toLowerCase() + "\\") &&
            (c = t + "\\"))
        : (c = process.cwd()),
      ye.isString(c))
    ) {
      if (!c) continue;
    } else throw new TypeError("Arguments to path.resolve must be strings");
    var l = vt(c),
      i = l.device,
      m = l.isUnc,
      v = l.isAbsolute,
      y = l.tail;
    if (
      !(i && t && i.toLowerCase() !== t.toLowerCase()) &&
      (t || (t = i), o || ((e = y + "\\" + e), (o = v)), t && o)
    )
      break;
  }
  return (
    m && (t = zt(t)),
    (e = Qe(e.split(/[\\\/]+/), !o).join("\\")),
    t + (o ? "\\" : "") + e || "."
  );
};
le.normalize = function (t) {
  var e = vt(t),
    o = e.device,
    s = e.isUnc,
    c = e.isAbsolute,
    l = e.tail,
    i = /[\\\/]$/.test(l);
  return (
    (l = Qe(l.split(/[\\\/]+/), !c).join("\\")),
    !l && !c && (l = "."),
    l && i && (l += "\\"),
    s && (o = zt(o)),
    o + (c ? "\\" : "") + l
  );
};
le.isAbsolute = function (t) {
  return vt(t).isAbsolute;
};
le.join = function () {
  for (var t = [], e = 0; e < arguments.length; e++) {
    var o = arguments[e];
    if (!ye.isString(o))
      throw new TypeError("Arguments to path.join must be strings");
    o && t.push(o);
  }
  var s = t.join("\\");
  return (
    /^[\\\/]{2}[^\\\/]/.test(t[0]) || (s = s.replace(/^[\\\/]{2,}/, "\\")),
    le.normalize(s)
  );
};
le.relative = function (t, e) {
  (t = le.resolve(t)), (e = le.resolve(e));
  for (
    var o = t.toLowerCase(),
      s = e.toLowerCase(),
      c = He(e.split("\\")),
      l = He(o.split("\\")),
      i = He(s.split("\\")),
      m = Math.min(l.length, i.length),
      v = m,
      y = 0;
    y < m;
    y++
  )
    if (l[y] !== i[y]) {
      v = y;
      break;
    }
  if (v == 0) return e;
  for (var b = [], y = v; y < l.length; y++) b.push("..");
  return (b = b.concat(c.slice(v))), b.join("\\");
};
le._makeLong = function (t) {
  if (!ye.isString(t)) return t;
  if (!t) return "";
  var e = le.resolve(t);
  return /^[a-zA-Z]\:\\/.test(e)
    ? "\\\\?\\" + e
    : /^\\\\[^?.]/.test(e)
    ? "\\\\?\\UNC\\" + e.substring(2)
    : t;
};
le.dirname = function (t) {
  var e = et(t),
    o = e[0],
    s = e[1];
  return !o && !s ? "." : (s && (s = s.substr(0, s.length - 1)), o + s);
};
le.basename = function (t, e) {
  var o = et(t)[2];
  return (
    e &&
      o.substr(-1 * e.length) === e &&
      (o = o.substr(0, o.length - e.length)),
    o
  );
};
le.extname = function (t) {
  return et(t)[3];
};
le.format = function (t) {
  if (!ye.isObject(t))
    throw new TypeError(
      "Parameter 'pathObject' must be an object, not " + typeof t
    );
  var e = t.root || "";
  if (!ye.isString(e))
    throw new TypeError(
      "'pathObject.root' must be a string or undefined, not " + typeof t.root
    );
  var o = t.dir,
    s = t.base || "";
  return o ? (o[o.length - 1] === le.sep ? o + s : o + le.sep + s) : s;
};
le.parse = function (t) {
  if (!ye.isString(t))
    throw new TypeError(
      "Parameter 'pathString' must be a string, not " + typeof t
    );
  var e = et(t);
  if (!e || e.length !== 4) throw new TypeError("Invalid path '" + t + "'");
  return {
    root: e[0],
    dir: e[0] + e[1].slice(0, -1),
    base: e[2],
    ext: e[3],
    name: e[2].slice(0, e[2].length - e[3].length)
  };
};
le.sep = "\\";
le.delimiter = ";";
var za = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
  ue = {};
function tt(t) {
  return za.exec(t).slice(1);
}
ue.resolve = function () {
  for (var t = "", e = !1, o = arguments.length - 1; o >= -1 && !e; o--) {
    var s = o >= 0 ? arguments[o] : process.cwd();
    if (ye.isString(s)) {
      if (!s) continue;
    } else throw new TypeError("Arguments to path.resolve must be strings");
    (t = s + "/" + t), (e = s[0] === "/");
  }
  return (t = Qe(t.split("/"), !e).join("/")), (e ? "/" : "") + t || ".";
};
ue.normalize = function (t) {
  var e = ue.isAbsolute(t),
    o = t && t[t.length - 1] === "/";
  return (
    (t = Qe(t.split("/"), !e).join("/")),
    !t && !e && (t = "."),
    t && o && (t += "/"),
    (e ? "/" : "") + t
  );
};
ue.isAbsolute = function (t) {
  return t.charAt(0) === "/";
};
ue.join = function () {
  for (var t = "", e = 0; e < arguments.length; e++) {
    var o = arguments[e];
    if (!ye.isString(o))
      throw new TypeError("Arguments to path.join must be strings");
    o && (t ? (t += "/" + o) : (t += o));
  }
  return ue.normalize(t);
};
ue.relative = function (t, e) {
  (t = ue.resolve(t).substr(1)), (e = ue.resolve(e).substr(1));
  for (
    var o = He(t.split("/")),
      s = He(e.split("/")),
      c = Math.min(o.length, s.length),
      l = c,
      i = 0;
    i < c;
    i++
  )
    if (o[i] !== s[i]) {
      l = i;
      break;
    }
  for (var m = [], i = l; i < o.length; i++) m.push("..");
  return (m = m.concat(s.slice(l))), m.join("/");
};
ue._makeLong = function (t) {
  return t;
};
ue.dirname = function (t) {
  var e = tt(t),
    o = e[0],
    s = e[1];
  return !o && !s ? "." : (s && (s = s.substr(0, s.length - 1)), o + s);
};
ue.basename = function (t, e) {
  var o = tt(t)[2];
  return (
    e &&
      o.substr(-1 * e.length) === e &&
      (o = o.substr(0, o.length - e.length)),
    o
  );
};
ue.extname = function (t) {
  return tt(t)[3];
};
ue.format = function (t) {
  if (!ye.isObject(t))
    throw new TypeError(
      "Parameter 'pathObject' must be an object, not " + typeof t
    );
  var e = t.root || "";
  if (!ye.isString(e))
    throw new TypeError(
      "'pathObject.root' must be a string or undefined, not " + typeof t.root
    );
  var o = t.dir ? t.dir + ue.sep : "",
    s = t.base || "";
  return o + s;
};
ue.parse = function (t) {
  if (!ye.isString(t))
    throw new TypeError(
      "Parameter 'pathString' must be a string, not " + typeof t
    );
  var e = tt(t);
  if (!e || e.length !== 4) throw new TypeError("Invalid path '" + t + "'");
  return (
    (e[1] = e[1] || ""),
    (e[2] = e[2] || ""),
    (e[3] = e[3] || ""),
    {
      root: e[0],
      dir: e[0] + e[1].slice(0, -1),
      base: e[2],
      ext: e[3],
      name: e[2].slice(0, e[2].length - e[3].length)
    }
  );
};
ue.sep = "/";
ue.delimiter = ":";
Ta ? (Ne.exports = le) : (Ne.exports = ue);
Ne.exports.posix = ue;
Ne.exports.win32 = le;
const Ma = { key: 0, class: "sub-menu-icon" },
  Va = { key: 0 },
  Oa = { key: 0, class: "sub-menu-icon" },
  ja = { key: 1 },
  Mt = oe({
    __name: "sidebarItem",
    props: {
      item: { type: Object },
      isNest: { type: Boolean, default: !1 },
      basePath: { type: String, default: "" }
    },
    setup(t) {
      const e = t,
        { layout: o, isCollapse: s } = Be(),
        c = J(() =>
          s.value
            ? { position: "static" }
            : { position: "absolute", right: "10px" }
        ),
        l = J(() => ({ display: "flex", alignItems: "center" })),
        i = J(() => ({
          width: s.value ? "100%" : "",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          overflow: "hidden"
        })),
        m = J(() => ({
          overflow: "hidden",
          textOverflow: "ellipsis",
          outline: "none"
        })),
        v = J(() => ({
          width: s.value ? "" : "210px",
          display: "inline-block",
          overflow: "hidden",
          textOverflow: "ellipsis"
        })),
        y = J(() => ({ overflow: "hidden", textOverflow: "ellipsis" })),
        b = G(null),
        f = new WeakMap(),
        _ = G(null);
      function S(F) {
        f.get(F) ||
          Re(() => {
            var L, w;
            ((L = _.value) == null ? void 0 : L.scrollWidth) >
            ((w = _.value) == null ? void 0 : w.clientWidth)
              ? Object.assign(F, { showTooltip: !0 })
              : Object.assign(F, { showTooltip: !1 }),
              f.set(F, !0);
          });
      }
      function j(F = [], L) {
        var z, R;
        const w = F.filter(O => ((b.value = O), !0));
        return (R = (z = w[0]) == null ? void 0 : z.meta) != null &&
          R.showParent
          ? !1
          : w.length === 1
          ? !0
          : w.length === 0
          ? ((b.value = { ...L, path: "", noShowingChildren: !0 }), !0)
          : !1;
      }
      function V(F) {
        const L = /^http(s?):\/\//;
        return L.test(F) || L.test(e.basePath)
          ? F || e.basePath
          : Ne.exports.resolve(e.basePath, F);
      }
      return (F, L) => {
        const w = C("el-tooltip"),
          z = C("FontIcon"),
          R = C("el-menu-item"),
          O = C("sidebar-item", !0),
          U = C("el-sub-menu");
        return j(e.item.children, e.item) &&
          (!b.value.children || b.value.noShowingChildren)
          ? (u(),
            M(
              R,
              {
                key: 0,
                index: V(b.value.path),
                class: ie({ "submenu-title-noDropdown": !t.isNest }),
                style: ne(n(l))
              },
              {
                title: h(() => [
                  d(
                    "div",
                    { style: ne(n(i)) },
                    [
                      n(o) === "horizontal"
                        ? (u(), $("span", Va, Q(n(fe)(b.value.meta.title)), 1))
                        : (u(),
                          M(
                            w,
                            {
                              key: 1,
                              placement: "top",
                              offset: -10,
                              disabled: !b.value.showTooltip
                            },
                            {
                              content: h(() => [
                                ee(Q(n(fe)(b.value.meta.title)), 1)
                              ]),
                              default: h(() => [
                                d(
                                  "span",
                                  {
                                    ref_key: "menuTextRef",
                                    ref: _,
                                    style: ne(n(m)),
                                    onMouseover:
                                      L[0] || (L[0] = W => S(b.value))
                                  },
                                  Q(n(fe)(b.value.meta.title)),
                                  37
                                )
                              ]),
                              _: 1
                            },
                            8,
                            ["disabled"]
                          )),
                      b.value.meta.extraIcon
                        ? (u(),
                          M(
                            z,
                            {
                              key: 2,
                              width: "30px",
                              height: "30px",
                              style: ne(n(c)),
                              icon: b.value.meta.extraIcon.name,
                              svg: !!b.value.meta.extraIcon.svg
                            },
                            null,
                            8,
                            ["style", "icon", "svg"]
                          ))
                        : Y("", !0)
                    ],
                    4
                  )
                ]),
                default: h(() => {
                  var W, I, K, se;
                  return [
                    ge(e.item.meta.icon)
                      ? (u(),
                        $("div", Ma, [
                          (u(),
                          M(
                            Ce(
                              n(Xe)(
                                ge(b.value.meta.icon) ||
                                  (e.item.meta && ge(e.item.meta.icon))
                              )
                            )
                          ))
                        ]))
                      : Y("", !0),
                    n(s) &&
                    n(o) === "vertical" &&
                    ((I = (W = e.item) == null ? void 0 : W.pathList) == null
                      ? void 0
                      : I.length) === 1
                      ? (u(),
                        $(
                          "div",
                          { key: 1, style: ne(n(i)) },
                          [
                            d(
                              "span",
                              { style: ne(n(m)) },
                              Q(n(fe)(b.value.meta.title)),
                              5
                            )
                          ],
                          4
                        ))
                      : Y("", !0),
                    n(s) &&
                    n(o) === "mix" &&
                    ((se = (K = e.item) == null ? void 0 : K.pathList) == null
                      ? void 0
                      : se.length) === 2
                      ? (u(),
                        $(
                          "div",
                          { key: 2, style: ne(n(i)) },
                          [
                            d(
                              "span",
                              { style: ne(n(m)) },
                              Q(n(fe)(b.value.meta.title)),
                              5
                            )
                          ],
                          4
                        ))
                      : Y("", !0)
                  ];
                }),
                _: 1
              },
              8,
              ["index", "class", "style"]
            ))
          : (u(),
            M(
              U,
              { key: 1, ref: "subMenu", index: V(e.item.path) },
              {
                title: h(() => [
                  ge(e.item.meta.icon)
                    ? (u(),
                      $("div", Oa, [
                        (u(), M(Ce(n(Xe)(e.item.meta && ge(e.item.meta.icon)))))
                      ]))
                    : Y("", !0),
                  n(o) === "horizontal"
                    ? (u(), $("span", ja, Q(n(fe)(e.item.meta.title)), 1))
                    : (u(),
                      M(
                        w,
                        {
                          key: 2,
                          placement: "top",
                          offset: -10,
                          disabled: !n(s) || !e.item.showTooltip
                        },
                        {
                          content: h(() => [
                            ee(Q(n(fe)(e.item.meta.title)), 1)
                          ]),
                          default: h(() => [
                            d(
                              "div",
                              {
                                ref_key: "menuTextRef",
                                ref: _,
                                style: ne(n(v)),
                                onMouseover: L[1] || (L[1] = W => S(e.item))
                              },
                              [
                                d(
                                  "span",
                                  { style: ne(n(y)) },
                                  Q(n(fe)(e.item.meta.title)),
                                  5
                                )
                              ],
                              36
                            )
                          ]),
                          _: 1
                        },
                        8,
                        ["disabled"]
                      )),
                  e.item.meta.extraIcon
                    ? (u(),
                      M(
                        z,
                        {
                          key: 3,
                          width: "30px",
                          height: "30px",
                          style: { position: "absolute", right: "10px" },
                          icon: e.item.meta.extraIcon.name,
                          svg: !!e.item.meta.extraIcon.svg
                        },
                        null,
                        8,
                        ["icon", "svg"]
                      ))
                    : Y("", !0)
                ]),
                default: h(() => [
                  (u(!0),
                  $(
                    pe,
                    null,
                    _e(
                      e.item.children,
                      W => (
                        u(),
                        M(
                          O,
                          {
                            key: W.path,
                            "is-nest": !0,
                            item: W,
                            "base-path": V(W.path),
                            class: "nest-menu"
                          },
                          null,
                          8,
                          ["item", "base-path"]
                        )
                      )
                    ),
                    128
                  ))
                ]),
                _: 1
              },
              8,
              ["index"]
            ));
      };
    }
  }),
  Pa = { class: "container" },
  La = oe({
    __name: "leftCollapse",
    props: { isActive: { type: Boolean, default: !1 } },
    emits: ["toggleClick"],
    setup(t, { emit: e }) {
      const o = t,
        { isDark: s } = ct(),
        c = () => {
          e("toggleClick");
        };
      return (l, i) => {
        const m = C("IconifyIconOffline"),
          v = C("el-tooltip");
        return (
          u(),
          $("div", Pa, [
            r(
              v,
              {
                placement: "right",
                effect: n(s) ? "dark" : "light",
                content: o.isActive
                  ? "\u70B9\u51FB\u6298\u53E0"
                  : "\u70B9\u51FB\u5C55\u5F00"
              },
              {
                default: h(() => [
                  r(
                    m,
                    {
                      icon: o.isActive ? "menu-fold" : "menu-unfold",
                      class:
                        "cursor-pointer inline-block align-middle color-primary hover:color-primary !dark:hover:color-white w-16px h-16px ml-4 mb-1",
                      onClick: c
                    },
                    null,
                    8,
                    ["icon"]
                  )
                ]),
                _: 1
              },
              8,
              ["effect", "content"]
            )
          ])
        );
      };
    }
  });
const Ha = ce(La, [["__scopeId", "data-v-24ab114a"]]),
  qa = oe({
    __name: "vertical",
    setup(t) {
      var _, S;
      const e = rt(),
        o = G(
          (S =
            (_ = je.getItem("responsive-configure")) == null
              ? void 0
              : _.showLogo) != null
            ? S
            : !0
        ),
        {
          routers: s,
          device: c,
          pureApp: l,
          isCollapse: i,
          menuSelect: m,
          toggleSideBar: v
        } = Be();
      let y = G([]);
      const b = J(() =>
        l.layout === "mix" && c.value !== "mobile" ? y.value : Fe().wholeMenus
      );
      function f(j) {
        const V = at(j, Fe().wholeMenus),
          F = Ke(V[0] || j, Fe().wholeMenus);
        !(F != null && F.children) ||
          (y.value = F == null ? void 0 : F.children);
      }
      return (
        f(e.path),
        xt(() => {
          Ie.on("logoChange", j => {
            o.value = j;
          });
        }),
        Te(
          () => e.path,
          () => {
            f(e.path), m(e.path, s);
          }
        ),
        (j, V) => {
          const F = C("el-menu"),
            L = C("el-scrollbar");
          return (
            u(),
            $(
              "div",
              { class: ie(["sidebar-container", o.value ? "has-logo" : ""]) },
              [
                o.value
                  ? (u(),
                    M(Da, { key: 0, collapse: n(i) }, null, 8, ["collapse"]))
                  : Y("", !0),
                r(
                  L,
                  {
                    "wrap-class": "scrollbar-wrapper",
                    class: ie([n(c) === "mobile" ? "mobile" : "pc"])
                  },
                  {
                    default: h(() => [
                      r(
                        F,
                        {
                          router: "",
                          "unique-opened": "",
                          mode: "vertical",
                          class: "outer-most select-none",
                          collapse: n(i),
                          "default-active": n(e).path,
                          "collapse-transition": !1,
                          onSelect: V[0] || (V[0] = w => n(m)(w, n(s)))
                        },
                        {
                          default: h(() => [
                            (u(!0),
                            $(
                              pe,
                              null,
                              _e(
                                n(b),
                                w => (
                                  u(),
                                  M(
                                    Mt,
                                    {
                                      key: w.path,
                                      item: w,
                                      "base-path": w.path,
                                      class: "outer-most select-none"
                                    },
                                    null,
                                    8,
                                    ["item", "base-path"]
                                  )
                                )
                              ),
                              128
                            ))
                          ]),
                          _: 1
                        },
                        8,
                        ["collapse", "default-active"]
                      )
                    ]),
                    _: 1
                  },
                  8,
                  ["class"]
                ),
                n(c) !== "mobile"
                  ? (u(),
                    M(
                      Ha,
                      {
                        key: 1,
                        "is-active": n(l).sidebar.opened,
                        onToggleClick: n(v)
                      },
                      null,
                      8,
                      ["is-active", "onToggleClick"]
                    ))
                  : Y("", !0)
              ],
              2
            )
          );
        }
      );
    }
  }),
  Na = { class: "horizontal-header" },
  Ra = { class: "horizontal-header-right" },
  Ua = { class: "check-zh" },
  Wa = ee(" \u7B80\u4F53\u4E2D\u6587 "),
  Ga = { class: "check-en" },
  Ka = ee(" English "),
  Xa = { class: "el-dropdown-link navbar-bg-hover" },
  Za = ["src"],
  Ja = { key: 1, class: "dark:color-white" },
  Ya = ["title"],
  Qa = oe({
    __name: "horizontal",
    setup(t) {
      const e = G(),
        {
          t: o,
          route: s,
          locale: c,
          translationCh: l,
          translationEn: i
        } = dt(e),
        {
          title: m,
          routers: v,
          logout: y,
          backHome: b,
          onPanel: f,
          menuSelect: _,
          username: S,
          avatarsStyle: j,
          getDropdownItemStyle: V,
          getDropdownItemClass: F
        } = Be();
      return (
        Te(
          () => s.path,
          () => {
            _(s.path, v);
          }
        ),
        (L, w) => {
          const z = C("FontIcon"),
            R = C("el-menu"),
            O = C("IconifyIconOffline"),
            U = C("el-dropdown-item"),
            W = C("el-dropdown-menu"),
            I = C("el-dropdown");
          return (
            u(),
            $("div", Na, [
              d(
                "div",
                {
                  class: "horizontal-header-left",
                  onClick: w[0] || (w[0] = (...K) => n(b) && n(b)(...K))
                },
                [
                  r(z, {
                    icon: "team-iconlogo",
                    svg: "",
                    style: { width: "35px", height: "35px" }
                  }),
                  d("h4", null, Q(n(m)), 1)
                ]
              ),
              r(
                R,
                {
                  router: "",
                  ref_key: "menuRef",
                  ref: e,
                  mode: "horizontal",
                  class: "horizontal-header-menu",
                  "default-active": n(s).path,
                  onSelect: w[1] || (w[1] = K => n(_)(K, n(v)))
                },
                {
                  default: h(() => [
                    (u(!0),
                    $(
                      pe,
                      null,
                      _e(
                        n(Fe)().wholeMenus,
                        K => (
                          u(),
                          M(
                            Mt,
                            { key: K.path, item: K, "base-path": K.path },
                            null,
                            8,
                            ["item", "base-path"]
                          )
                        )
                      ),
                      128
                    ))
                  ]),
                  _: 1
                },
                8,
                ["default-active"]
              ),
              d("div", Ra, [
                r(ht),
                r(ft, { id: "header-notice" }),
                de(r(_t, { id: "header-screenfull" }, null, 512), [
                  [he, !n(Ye)()]
                ]),
                r(
                  I,
                  { id: "header-translation", trigger: "click" },
                  {
                    dropdown: h(() => [
                      r(
                        W,
                        { class: "translation" },
                        {
                          default: h(() => [
                            r(
                              U,
                              {
                                style: ne(n(V)(n(c), "zh")),
                                class: ie([
                                  "!dark:color-white",
                                  n(F)(n(c), "zh")
                                ]),
                                onClick: n(l)
                              },
                              {
                                default: h(() => [
                                  de(
                                    d(
                                      "span",
                                      Ua,
                                      [r(O, { icon: "check" })],
                                      512
                                    ),
                                    [[he, n(c) === "zh"]]
                                  ),
                                  Wa
                                ]),
                                _: 1
                              },
                              8,
                              ["style", "class", "onClick"]
                            ),
                            r(
                              U,
                              {
                                style: ne(n(V)(n(c), "en")),
                                class: ie([
                                  "!dark:color-white",
                                  n(F)(n(c), "en")
                                ]),
                                onClick: n(i)
                              },
                              {
                                default: h(() => [
                                  de(
                                    d(
                                      "span",
                                      Ga,
                                      [r(O, { icon: "check" })],
                                      512
                                    ),
                                    [[he, n(c) === "en"]]
                                  ),
                                  Ka
                                ]),
                                _: 1
                              },
                              8,
                              ["style", "class", "onClick"]
                            )
                          ]),
                          _: 1
                        }
                      )
                    ]),
                    default: h(() => [
                      r(n(pt), {
                        class:
                          "navbar-bg-hover w-40px h-48px p-11px cursor-pointer outline-none"
                      })
                    ]),
                    _: 1
                  }
                ),
                r(
                  I,
                  { trigger: "click" },
                  {
                    dropdown: h(() => [
                      r(
                        W,
                        { class: "logout" },
                        {
                          default: h(() => [
                            r(
                              U,
                              { onClick: n(y) },
                              {
                                default: h(() => [
                                  r(O, {
                                    icon: "logout-circle-r-line",
                                    style: { margin: "5px" }
                                  }),
                                  ee(" " + Q(n(o)("buttons.hsLoginOut")), 1)
                                ]),
                                _: 1
                              },
                              8,
                              ["onClick"]
                            )
                          ]),
                          _: 1
                        }
                      )
                    ]),
                    default: h(() => [
                      d("span", Xa, [
                        n(Pe)
                          ? (u(),
                            $(
                              "img",
                              { key: 0, src: n(Pe), style: ne(n(j)) },
                              null,
                              12,
                              Za
                            ))
                          : Y("", !0),
                        n(S) ? (u(), $("p", Ja, Q(n(S)), 1)) : Y("", !0)
                      ])
                    ]),
                    _: 1
                  }
                ),
                d(
                  "span",
                  {
                    class: "el-icon-setting navbar-bg-hover",
                    title: n(o)("buttons.hssystemSet"),
                    onClick: w[2] || (w[2] = (...K) => n(f) && n(f)(...K))
                  },
                  [r(O, { icon: "setting" })],
                  8,
                  Ya
                )
              ])
            ])
          );
        }
      );
    }
  });
const er = ce(Qa, [["__scopeId", "data-v-f00ef328"]]),
  tr = { key: 0 },
  nr = oe({
    __name: "index",
    setup(t) {
      const { isDark: e } = ct(),
        { layout: o } = fn(),
        s = Ye(),
        c = It(),
        { $storage: l } = ut(),
        i = lt({
          sidebar: J(() => Ae().sidebar),
          device: J(() => Ae().device),
          fixedHeader: J(() => c.fixedHeader),
          classes: J(() => ({
            hideSidebar: !i.sidebar.opened,
            openSidebar: i.sidebar.opened,
            withoutAnimation: i.sidebar.withoutAnimation,
            mobile: i.device === "mobile"
          })),
          hideTabs: J(() => (l == null ? void 0 : l.configure.hideTabs))
        });
      function m(_) {
        var S, j, V, F;
        window.document.body.setAttribute("layout", _),
          (l.layout = {
            layout: `${_}`,
            theme: (S = l.layout) == null ? void 0 : S.theme,
            darkMode: (j = l.layout) == null ? void 0 : j.darkMode,
            sidebarStatus: (V = l.layout) == null ? void 0 : V.sidebarStatus,
            epThemeColor: (F = l.layout) == null ? void 0 : F.epThemeColor
          });
      }
      function v(_, S) {
        Ae().toggleDevice(_), Ae().toggleSideBar(S, "resize");
      }
      let y = !0;
      Ie.on("resize", ({ detail: _ }) => {
        if (s) return;
        let { width: S } = _;
        S <= 760 ? m("vertical") : m(Ae().layout),
          S > 0 && S <= 760
            ? (v("mobile", !1), (y = !0))
            : S > 760 && S <= 990
            ? y && (v("desktop", !1), (y = !1))
            : S > 990 &&
              (i.sidebar.isClickCollapse || (v("desktop", !0), (y = !0)));
      }),
        qe(() => {
          s && v("mobile", !1);
        });
      function b() {
        c.hiddenSideBar
          ? c.changeSetting({ key: "hiddenSideBar", value: !1 })
          : c.changeSetting({ key: "hiddenSideBar", value: !0 });
      }
      const f = oe({
        render() {
          return we(
            "div",
            {
              class: { "fixed-header": i.fixedHeader },
              style: [
                i.hideTabs && o.value.includes("horizontal")
                  ? e.value
                    ? "box-shadow: 0 1px 4px #0d0d0d"
                    : "box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08)"
                  : ""
              ]
            },
            {
              default: () => [
                !c.hiddenSideBar &&
                (o.value.includes("vertical") || o.value.includes("mix"))
                  ? we(Qo)
                  : we("div"),
                !c.hiddenSideBar && o.value.includes("horizontal")
                  ? we(er)
                  : we("div"),
                we(
                  Ls,
                  {},
                  {
                    default: () => [
                      we(
                        "span",
                        { onClick: b },
                        {
                          default: () => [
                            c.hiddenSideBar
                              ? we(jn, { class: "dark:color-white" })
                              : we(Bn, { class: "dark:color-white" })
                          ]
                        }
                      )
                    ]
                  }
                )
              ]
            }
          );
        }
      });
      return (_, S) => {
        const j = C("el-backtop"),
          V = C("el-scrollbar"),
          F = un("resize");
        return de(
          (u(),
          $(
            "div",
            { class: ie(["app-wrapper", i.classes]) },
            [
              de(
                d(
                  "div",
                  {
                    class: "app-mask",
                    onClick: S[0] || (S[0] = L => n(Ae)().toggleSideBar())
                  },
                  null,
                  512
                ),
                [
                  [
                    he,
                    i.device === "mobile" &&
                      i.sidebar.opened &&
                      n(o).includes("vertical")
                  ]
                ]
              ),
              de(r(qa, null, null, 512), [
                [
                  he,
                  !n(c).hiddenSideBar &&
                    (n(o).includes("vertical") || n(o).includes("mix"))
                ]
              ]),
              d(
                "div",
                {
                  class: ie([
                    "main-container",
                    n(c).hiddenSideBar ? "main-hidden" : ""
                  ])
                },
                [
                  i.fixedHeader
                    ? (u(),
                      $("div", tr, [
                        r(n(f)),
                        r(wt, { "fixed-header": i.fixedHeader }, null, 8, [
                          "fixed-header"
                        ])
                      ]))
                    : (u(),
                      M(
                        V,
                        { key: 1 },
                        {
                          default: h(() => [
                            r(
                              j,
                              {
                                title: "\u56DE\u5230\u9876\u90E8",
                                target: ".main-container .el-scrollbar__wrap"
                              },
                              { default: h(() => [r(n(Dt))]), _: 1 }
                            ),
                            r(n(f)),
                            r(wt, { "fixed-header": i.fixedHeader }, null, 8, [
                              "fixed-header"
                            ])
                          ]),
                          _: 1
                        }
                      ))
                ],
                2
              ),
              r($a)
            ],
            2
          )),
          [[F]]
        );
      };
    }
  });
const cr = ce(nr, [["__scopeId", "data-v-9e3ec6ab"]]);
export { cr as default };
