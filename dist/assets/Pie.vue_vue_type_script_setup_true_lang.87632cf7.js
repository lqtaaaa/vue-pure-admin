import {
  d as n,
  am as i,
  A as l,
  r as o,
  an as c,
  e as m,
  f as p
} from "./index.69183727.js";
const f = n({
  __name: "Pie",
  setup(u) {
    const { isDark: t } = i();
    let r = l(() => (t.value ? "dark" : "light"));
    const e = o(null),
      { setOptions: s } = c(e, { theme: r });
    return (
      s(
        {
          tooltip: { trigger: "item" },
          legend: { orient: "vertical", right: !0 },
          series: [
            {
              name: "Github\u4FE1\u606F",
              type: "pie",
              radius: "60%",
              center: ["40%", "50%"],
              data: [
                { value: 1079, name: "watchers" },
                { value: 1079, name: "star" },
                { value: 204, name: "forks" },
                { value: 3, name: "open_issues" }
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)"
                }
              }
            }
          ]
        },
        { name: "click", callback: a => {} },
        { type: "zrender", name: "click", callback: a => {} }
      ),
      (a, h) => (
        m(),
        p(
          "div",
          {
            ref_key: "pieChartRef",
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
