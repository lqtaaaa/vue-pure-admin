import {
  d as _,
  r as B,
  aP as r,
  h as t,
  c as g,
  e as o,
  i as V,
  j as a,
  g as b,
  k as n,
  w as d,
  f as u,
  l as m
} from "./index.69183727.js";
const k = { class: "card-header" },
  w = m("\u53EA\u6709admin\u53EF\u770B"),
  x = [w],
  E = m("\u53EA\u6709test\u53EF\u770B"),
  C = [E],
  F = _({ name: "PermissionButton" }),
  N = _({
    ...F,
    setup(I) {
      const s = B(r.getItem("info").username || "admin");
      function p(e) {
        r.setItem("info", {
          username: e,
          accessToken: `eyJhbGciOiJIUzUxMiJ9.${e}`
        }),
          window.location.reload();
      }
      return (e, l) => {
        const c = t("el-radio-button"),
          h = t("el-radio-group"),
          f = t("el-card"),
          i = g("auth");
        return (
          o(),
          V(f, null, {
            header: a(() => [
              b("div", k, [
                n(
                  h,
                  {
                    modelValue: s.value,
                    "onUpdate:modelValue": l[0] || (l[0] = v => (s.value = v)),
                    onChange: p
                  },
                  {
                    default: a(() => [
                      n(c, { label: "admin" }),
                      n(c, { label: "test" })
                    ]),
                    _: 1
                  },
                  8,
                  ["modelValue"]
                )
              ])
            ]),
            default: a(() => [
              d((o(), u("p", null, x)), [[i, "v-admin"]]),
              d((o(), u("p", null, C)), [[i, "v-test"]])
            ]),
            _: 1
          })
        );
      };
    }
  });
export { N as default };
