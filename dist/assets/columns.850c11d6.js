import { r as l, k as s, h as i, b6 as c, aJ as u } from "./index.69183727.js";
import { A as d, E as p } from "./index.f879185a.js";
function m() {
  const a = l({}),
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
      { label: "\u89D2\u8272\u7F16\u53F7", prop: "id" },
      { label: "\u89D2\u8272\u540D\u79F0", prop: "name" },
      { label: "\u89D2\u8272\u6807\u8BC6", prop: "code" },
      {
        label: "\u89D2\u8272\u7C7B\u578B",
        prop: "type",
        cellRenderer: ({ row: e, props: t }) =>
          s(
            i("el-tag"),
            {
              size: t.size,
              type: e.type === 1 ? "danger" : "",
              effect: "plain"
            },
            {
              default: () => [
                e.type === 1 ? "\u5185\u7F6E" : "\u81EA\u5B9A\u4E49"
              ]
            }
          )
      },
      { label: "\u663E\u793A\u987A\u5E8F", prop: "sort" },
      {
        label: "\u72B6\u6001",
        prop: "status",
        width: 130,
        cellRenderer: e => {
          var t;
          return s(
            d,
            {
              size: e.props.size === "small" ? "small" : "default",
              loading: (t = a.value[e.index]) == null ? void 0 : t.loading,
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
        formatter: ({ createTime: e }) => c(e).format("YYYY-MM-DD HH:mm:ss")
      },
      { label: "\u64CD\u4F5C", fixed: "right", width: 180, slot: "operation" }
    ]);
  function r({ row: e, index: t }) {
    u.confirm(
      `\u786E\u8BA4\u8981<strong>${
        e.status === 0 ? "\u505C\u7528" : "\u542F\u7528"
      }</strong><strong style='color:var(--el-color-primary)'>${
        e.name
      }</strong>\u89D2\u8272\u5417?`,
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
        (a.value[t] = Object.assign({}, a.value[t], { loading: !0 })),
          setTimeout(() => {
            (a.value[t] = Object.assign({}, a.value[t], { loading: !1 })),
              p.success(
                "\u5DF2\u6210\u529F\u4FEE\u6539\u89D2\u8272\u72B6\u6001"
              );
          }, 300);
      })
      .catch(() => {
        e.status === 0 ? (e.status = 1) : (e.status = 0);
      });
  }
  return { columns: n };
}
export { m as useColumns };
