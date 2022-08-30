import { c as $, r as x, a as V } from "./index.esm.4e0c2904.js";
import {
  d as _,
  r as m,
  N as F,
  o as B,
  y as j,
  E as D,
  U as A,
  e as w,
  f as b,
  F as H,
  h as C,
  i as S,
  j as h,
  g as p,
  k as v,
  b as c,
  l as P
} from "./index.69183727.js";
import { u as k } from "./hooks.5d98ec2d.js";
var T = Object.defineProperty,
  M = Object.defineProperties,
  N = Object.getOwnPropertyDescriptors,
  y = Object.getOwnPropertySymbols,
  R = Object.prototype.hasOwnProperty,
  I = Object.prototype.propertyIsEnumerable,
  E = (e, t, o) =>
    t in e
      ? T(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[t] = o),
  L = (e, t) => {
    for (var o in t || (t = {})) R.call(t, o) && E(e, o, t[o]);
    if (y) for (var o of y(t)) I.call(t, o) && E(e, o, t[o]);
    return e;
  },
  U = (e, t) => M(e, N(t));
function s(e) {
  let t = `\u8BF7\u4F7F\u7528 '@${e}' \u4E8B\u4EF6\uFF0C\u4E0D\u8981\u653E\u5728 props \u4E2D`;
  return (
    (t += `
Please use '@${e}' event instead of props`),
    t
  );
}
var O = (e, t) => {
  for (const [o, a] of t) e[o] = a;
  return e;
};
const z = _({
    props: {
      mode: { type: String, default: "default" },
      defaultContent: { type: Array, default: [] },
      defaultHtml: { type: String, default: "" },
      defaultConfig: { type: Object, default: {} },
      modelValue: { type: String, default: "" }
    },
    setup(e, t) {
      const o = m(null),
        a = F(null),
        i = m(""),
        d = () => {
          if (!o.value) return;
          const u = A(e.defaultContent);
          $({
            selector: o.value,
            mode: e.mode,
            content: u || [],
            html: e.defaultHtml || e.modelValue || "",
            config: U(L({}, e.defaultConfig), {
              onCreated(n) {
                if (
                  ((a.value = n),
                  t.emit("onCreated", n),
                  e.defaultConfig.onCreated)
                ) {
                  const r = s("onCreated");
                  throw new Error(r);
                }
              },
              onChange(n) {
                const r = n.getHtml();
                if (
                  ((i.value = r),
                  t.emit("update:modelValue", r),
                  t.emit("onChange", n),
                  e.defaultConfig.onChange)
                ) {
                  const l = s("onChange");
                  throw new Error(l);
                }
              },
              onDestroyed(n) {
                if ((t.emit("onDestroyed", n), e.defaultConfig.onDestroyed)) {
                  const r = s("onDestroyed");
                  throw new Error(r);
                }
              },
              onMaxLength(n) {
                if ((t.emit("onMaxLength", n), e.defaultConfig.onMaxLength)) {
                  const r = s("onMaxLength");
                  throw new Error(r);
                }
              },
              onFocus(n) {
                if ((t.emit("onFocus", n), e.defaultConfig.onFocus)) {
                  const r = s("onFocus");
                  throw new Error(r);
                }
              },
              onBlur(n) {
                if ((t.emit("onBlur", n), e.defaultConfig.onBlur)) {
                  const r = s("onBlur");
                  throw new Error(r);
                }
              },
              customAlert(n, r) {
                if (
                  (t.emit("customAlert", n, r), e.defaultConfig.customAlert)
                ) {
                  const l = s("customAlert");
                  throw new Error(l);
                }
              },
              customPaste: (n, r) => {
                if (e.defaultConfig.customPaste) {
                  const f = s("customPaste");
                  throw new Error(f);
                }
                let l;
                return (
                  t.emit("customPaste", n, r, f => {
                    l = f;
                  }),
                  l
                );
              }
            })
          });
        };
      function g(u) {
        const n = a.value;
        n != null && n.setHtml(u);
      }
      return (
        B(() => {
          d();
        }),
        j(
          () => e.modelValue,
          u => {
            u !== i.value && g(u);
          }
        ),
        { box: o }
      );
    }
  }),
  K = { ref: "box", style: { height: "100%" } };
function W(e, t, o, a, i, d) {
  return w(), b("div", K, null, 512);
}
var q = O(z, [["render", W]]);
const G = _({
    props: {
      editor: { type: Object },
      mode: { type: String, default: "default" },
      defaultConfig: { type: Object, default: {} }
    },
    setup(e) {
      const t = m(null),
        o = a => {
          if (!!t.value) {
            if (a == null)
              throw new Error(
                "Not found instance of Editor when create <Toolbar/> component"
              );
            x.getToolbar(a) ||
              V({
                editor: a,
                selector: t.value || "<div></div>",
                mode: e.mode,
                config: e.defaultConfig
              });
          }
        };
      return (
        D(() => {
          const { editor: a } = e;
          a != null && o(a);
        }),
        { selector: t }
      );
    }
  }),
  J = { ref: "selector" };
function Q(e, t, o, a, i, d) {
  return w(), b("div", J, null, 512);
}
var X = O(G, [["render", Q]]);
const Y = { class: "card-header" },
  Z = { class: "font-medium" },
  ee = P(
    " \u7F16\u8F91\u5668\u7EC4\u4EF6\uFF0C\u91C7\u7528\u5F00\u6E90\u7684 "
  ),
  te = P(" Wangeditor "),
  oe = { class: "wangeditor" },
  ne = _({ name: "Editor" }),
  le = _({
    ...ne,
    setup(e) {
      const t = "default",
        o = F(),
        a = m("<p>hello</p>");
      B(() => {
        setTimeout(() => {
          a.value =
            "<p>\u6A21\u62DF Ajax \u5F02\u6B65\u8BBE\u7F6E\u5185\u5BB9</p>";
        }, 1500);
      });
      const i = { excludeKeys: "fullScreen" },
        d = { placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9..." };
      H(() => {
        const u = o.value;
        u != null && u.destroy();
      });
      const g = u => {
        o.value = u;
      };
      return (u, n) => {
        const r = C("el-link"),
          l = C("el-card");
        return (
          w(),
          S(l, null, {
            header: h(() => [
              p("div", Y, [
                p("span", Z, [
                  ee,
                  v(
                    r,
                    {
                      href: "https://www.wangeditor.com",
                      target: "_blank",
                      icon: c(k)("edit"),
                      style: { "font-size": "16px", margin: "0 4px 5px" }
                    },
                    { default: h(() => [te]), _: 1 },
                    8,
                    ["icon"]
                  )
                ])
              ])
            ]),
            default: h(() => [
              p("div", oe, [
                v(
                  c(X),
                  {
                    style: { "border-bottom": "1px solid #ccc" },
                    editor: c(o),
                    defaultConfig: i,
                    mode: t
                  },
                  null,
                  8,
                  ["editor"]
                ),
                v(
                  c(q),
                  {
                    style: { height: "500px", "overflow-y": "hidden" },
                    modelValue: a.value,
                    "onUpdate:modelValue": n[0] || (n[0] = f => (a.value = f)),
                    defaultConfig: d,
                    mode: t,
                    onOnCreated: g
                  },
                  null,
                  8,
                  ["modelValue"]
                )
              ])
            ]),
            _: 1
          })
        );
      };
    }
  });
export { le as default };
