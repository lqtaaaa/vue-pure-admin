import {
  d as i,
  am as n,
  A as o,
  r as c,
  an as l,
  e as p,
  f as u
} from "./index.69183727.js";
const d = i({
  __name: "Bar",
  setup(h) {
    const { isDark: a } = n();
    let t = o(() => (a.value ? "dark" : "light"));
    const e = c(null),
      { setOptions: r } = l(e, { theme: t });
    return (
      r(
        {
          tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
          grid: { bottom: "20%", height: "68%", containLabel: !0 },
          xAxis: [
            {
              type: "category",
              axisTick: { alignWithLabel: !0 },
              axisLabel: { interval: 0 },
              data: ["open_issues", "forks", "watchers", "star"]
            }
          ],
          yAxis: [{ type: "value" }],
          series: [
            {
              name: "GitHub\u4FE1\u606F",
              type: "bar",
              data: [3, 204, 1079, 1079]
            }
          ]
        },
        { name: "click", callback: s => {} }
      ),
      (s, m) => (
        p(),
        u(
          "div",
          {
            ref_key: "barChartRef",
            ref: e,
            style: { width: "100%", height: "35vh" }
          },
          null,
          512
        )
      )
    );
  }
});
export { d as _ };
