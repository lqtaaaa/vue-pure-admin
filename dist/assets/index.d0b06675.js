import {
  e as o,
  f as n,
  g as c,
  d as s,
  k as r,
  b as d,
  _ as a
} from "./index.69183727.js";
const i = { width: "32", height: "32", viewBox: "0 0 48 48" },
  l = c(
    "path",
    {
      fill: "#2F88FF",
      "fill-rule": "evenodd",
      stroke: "#000",
      "stroke-linejoin": "round",
      "stroke-width": "4",
      d: "M44 40.836c-4.893-5.973-9.238-9.362-13.036-10.168-3.797-.805-7.412-.927-10.846-.365V41L4 23.545 20.118 7v10.167c6.349.05 11.746 2.328 16.192 6.833 4.445 4.505 7.009 10.117 7.69 16.836Z",
      "clip-rule": "evenodd"
    },
    null,
    -1
  ),
  u = [l];
function p(_, e) {
  return o(), n("svg", i, u);
}
const f = { render: p },
  v = s({ name: "Empty" }),
  h = s({
    ...v,
    setup(_) {
      return (e, t) => (
        o(),
        n(
          "div",
          {
            class: "back",
            title: "\u8FD4\u56DE\u4E0A\u4E00\u9875",
            onClick: t[0] || (t[0] = k => e.$router.go(-1))
          },
          [r(d(f), { class: "w-80px h-80px" })]
        )
      );
    }
  });
const m = a(h, [["__scopeId", "data-v-f2527b34"]]);
export { m as default };
