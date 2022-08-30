import {
  d as n,
  am as i,
  A as o,
  r as l,
  an as c,
  e as p,
  f as m
} from "./index.69183727.js";
const f = n({
  __name: "Line",
  setup(h) {
    const { isDark: t } = i();
    let a = o(() => (t.value ? "dark" : "light"));
    const e = l(null),
      { setOptions: r } = c(e, { theme: a });
    return (
      r(
        {
          grid: { bottom: "20%", height: "68%", containLabel: !0 },
          tooltip: { trigger: "item" },
          xAxis: {
            type: "category",
            axisLabel: { interval: 0 },
            data: ["open_issues", "forks", "watchers", "star"]
          },
          yAxis: { type: "value" },
          series: [{ data: [3, 204, 1079, 1079], type: "line", areaStyle: {} }]
        },
        { name: "click", callback: s => {} }
      ),
      (s, u) => (
        p(),
        m(
          "div",
          {
            ref_key: "lineChartRef",
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
export { f as _ };
