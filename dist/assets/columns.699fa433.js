import { k as e, ah as r, l } from "./index.69183727.js";
function u() {
  return {
    columns: [
      {
        cellRenderer: () =>
          e("span", { class: "flex items-center -mt-6" }, [
            e(
              r,
              {
                icon: "close-circle-line",
                color: "#F56C6C",
                width: "18px",
                height: "18px"
              },
              null
            ),
            e("span", { class: "ml-1 mr-4" }, [
              l("\u60A8\u7684\u8D26\u6237\u5DF2\u88AB\u51BB\u7ED3")
            ]),
            e(
              "a",
              {
                href: "javascript:void(0);",
                class: "flex items-center",
                style: "color: var(--el-color-primary)"
              },
              [
                l("\u7ACB\u5373\u89E3\u51BB"),
                e(
                  r,
                  {
                    icon: "arrow-right-s-line",
                    color: "var(--el-color-primary)",
                    width: "18px",
                    height: "18px"
                  },
                  null
                )
              ]
            )
          ])
      },
      {
        cellRenderer: () =>
          e("span", { class: "flex items-center -mt-8" }, [
            e(
              r,
              {
                icon: "close-circle-line",
                color: "#F56C6C",
                width: "18px",
                height: "18px"
              },
              null
            ),
            e("span", { class: "ml-1 mr-4" }, [
              l(
                "\u60A8\u7684\u8D26\u6237\u8FD8\u4E0D\u5177\u5907\u7533\u8BF7\u8D44\u683C"
              )
            ]),
            e(
              "a",
              {
                href: "javascript:void(0);",
                class: "flex items-center",
                style: "color: var(--el-color-primary)"
              },
              [
                l("\u7ACB\u5373\u5347\u7EA7"),
                e(
                  r,
                  {
                    icon: "arrow-right-s-line",
                    color: "var(--el-color-primary)",
                    width: "18px",
                    height: "18px"
                  },
                  null
                )
              ]
            )
          ])
      }
    ]
  };
}
export { u as useColumns };
