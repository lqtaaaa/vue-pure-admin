import {
  d as i,
  r as _,
  as as V,
  h as n,
  e as h,
  i as B,
  j as s,
  k as r,
  b as u,
  S as c,
  g as a,
  l as p
} from "./index.69183727.js";
const b = a(
    "div",
    { class: "card-header" },
    [
      a(
        "span",
        { class: "font-medium" },
        "\u9875\u9762\u6C34\u5370\u529F\u80FD"
      )
    ],
    -1
  ),
  E = a(
    "span",
    null,
    " \u8BF7\u8F93\u5165\u8981\u521B\u5EFA\u6C34\u5370\u7684\u503C\uFF1A",
    -1
  ),
  v = a(
    "span",
    null,
    "\u8BF7\u9009\u62E9\u8981\u521B\u5EFA\u6C34\u5370\u7684\u989C\u8272\uFF1A",
    -1
  ),
  x = a("br", null, null, -1),
  A = p(" \u521B\u5EFA "),
  w = p("\u6E05\u9664"),
  y = i({ name: "WaterMark" }),
  W = i({
    ...y,
    setup(N) {
      let o = _("#409EFF"),
        t = _("vue-pure-admin");
      const { setWatermark: m, clear: F } = V();
      return (S, e) => {
        const f = n("el-input"),
          C = n("el-color-picker"),
          d = n("el-button"),
          k = n("el-card");
        return (
          h(),
          B(k, null, {
            header: s(() => [b]),
            default: s(() => [
              E,
              r(
                f,
                {
                  class: "mb-4 mr-4",
                  style: { width: "200px" },
                  modelValue: u(t),
                  "onUpdate:modelValue":
                    e[0] || (e[0] = l => (c(t) ? (t.value = l) : (t = l))),
                  clearable: ""
                },
                null,
                8,
                ["modelValue"]
              ),
              v,
              r(
                C,
                {
                  modelValue: u(o),
                  "onUpdate:modelValue":
                    e[1] || (e[1] = l => (c(o) ? (o.value = l) : (o = l))),
                  "show-alpha": ""
                },
                null,
                8,
                ["modelValue"]
              ),
              x,
              r(
                d,
                {
                  onClick: e[2] || (e[2] = l => u(m)(u(t), { fillStyle: u(o) }))
                },
                { default: s(() => [A]), _: 1 }
              ),
              r(d, { onClick: u(F) }, { default: s(() => [w]), _: 1 }, 8, [
                "onClick"
              ])
            ]),
            _: 1
          })
        );
      };
    }
  });
export { W as default };
