import { r as l, k as s, h as i, b6 as u, aJ as c } from "./index.69183727.js";
import { A as d, E as p } from "./index.f879185a.js";
function h() {
  const t = l({}),
    n = l([
      {
        type: "selection",
        width: 55,
        hide: ({ checkList: e }) => !e.includes("\u52FE\u9009\u5217")
      },
      {
        label: "\u5E8F\u53F7",
        type: "index",
        width: 70,
        hide: ({ checkList: e }) => !e.includes("\u5E8F\u53F7\u5217")
      },
      { label: "\u7528\u6237\u7F16\u53F7", prop: "id" },
      { label: "\u7528\u6237\u540D\u79F0", prop: "username" },
      { label: "\u7528\u6237\u6635\u79F0", prop: "nickname" },
      {
        label: "\u6027\u522B",
        prop: "sex",
        cellRenderer: ({ row: e, props: a }) =>
          s(
            i("el-tag"),
            {
              size: a.size,
              type: e.sex === 1 ? "danger" : "",
              effect: "plain"
            },
            { default: () => [e.sex === 1 ? "\u5973" : "\u7537"] }
          )
      },
      {
        label: "\u90E8\u95E8",
        prop: "dept",
        formatter: ({ dept: e }) => e.name
      },
      { label: "\u624B\u673A\u53F7\u7801", prop: "mobile" },
      {
        label: "\u72B6\u6001",
        prop: "status",
        width: 130,
        cellRenderer: e => {
          var a;
          return s(
            d,
            {
              size: e.props.size === "small" ? "small" : "default",
              loading: (a = t.value[e.index]) == null ? void 0 : a.loading,
              checked: e.row.status,
              "onUpdate:checked": o => (e.row.status = o),
              checkedValue: 1,
              unCheckedValue: 0,
              "checked-children": "\u5DF2\u5F00\u542F",
              "un-checked-children": "\u5DF2\u5173\u95ED",
              onChange: () => r(e)
            },
            null
          );
        }
      },
      {
        label: "\u521B\u5EFA\u65F6\u95F4",
        width: 180,
        prop: "createTime",
        formatter: ({ createTime: e }) => u(e).format("YYYY-MM-DD HH:mm:ss")
      },
      { label: "\u64CD\u4F5C", fixed: "right", width: 180, slot: "operation" }
    ]);
  function r({ row: e, index: a }) {
    c.confirm(
      `\u786E\u8BA4\u8981<strong>${
        e.status === 0 ? "\u505C\u7528" : "\u542F\u7528"
      }</strong><strong style='color:var(--el-color-primary)'>${
        e.username
      }</strong>\u7528\u6237\u5417?`,
      "\u7CFB\u7EDF\u63D0\u793A",
      {
        confirmButtonText: "\u786E\u5B9A",
        cancelButtonText: "\u53D6\u6D88",
        type: "warning",
        dangerouslyUseHTMLString: !0,
        draggable: !0
      }
    )
      .then(() => {
        (t.value[a] = Object.assign({}, t.value[a], { loading: !0 })),
          setTimeout(() => {
            (t.value[a] = Object.assign({}, t.value[a], { loading: !1 })),
              p.success(
                "\u5DF2\u6210\u529F\u4FEE\u6539\u7528\u6237\u72B6\u6001"
              );
          }, 300);
      })
      .catch(() => {
        e.status === 0 ? (e.status = 1) : (e.status = 0);
      });
  }
  return { columns: n };
}
export { h as useColumns };
