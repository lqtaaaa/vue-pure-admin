import { r as l, k as a, h as s, b6 as i } from "./index.69183727.js";
function n() {
  return {
    columns: l([
      {
        type: "selection",
        width: 55,
        align: "left",
        hide: ({ checkList: e }) => !e.includes("\u52FE\u9009\u5217")
      },
      {
        label: "\u5E8F\u53F7",
        type: "index",
        width: 60,
        align: "left",
        hide: ({ checkList: e }) => !e.includes("\u5E8F\u53F7\u5217")
      },
      {
        label: "\u90E8\u95E8\u540D\u79F0",
        prop: "name",
        width: 180,
        align: "left"
      },
      { label: "\u6392\u5E8F", prop: "sort", width: 60 },
      {
        label: "\u72B6\u6001",
        prop: "status",
        width: 80,
        cellRenderer: ({ row: e, props: t }) =>
          a(
            s("el-tag"),
            {
              size: t.size,
              type: e.status === 1 ? "danger" : "success",
              effect: "plain"
            },
            {
              default: () => [e.status === 0 ? "\u5173\u95ED" : "\u5F00\u542F"]
            }
          )
      },
      {
        label: "\u521B\u5EFA\u65F6\u95F4",
        width: 180,
        prop: "createTime",
        formatter: ({ createTime: e }) => i(e).format("YYYY-MM-DD HH:mm:ss")
      },
      { label: "\u5907\u6CE8", prop: "remark" },
      { label: "\u64CD\u4F5C", fixed: "right", width: 140, slot: "operation" }
    ])
  };
}
export { n as useColumns };
