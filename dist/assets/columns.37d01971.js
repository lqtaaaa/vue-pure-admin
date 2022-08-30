import { k as e, h as l, ah as n, l as u } from "./index.69183727.js";
function r() {
  const c = [
    { type: "", label: "\u5584\u826F" },
    { type: "success", label: "\u597D\u5B66" },
    { type: "info", label: "\u5E7D\u9ED8" },
    { type: "danger", label: "\u65C5\u6E38" },
    { type: "warning", label: "\u8FFD\u5267" }
  ];
  return {
    columnsA: [
      {
        labelRenderer: () =>
          e("div", { class: "flex items-center" }, [
            e(l("el-icon"), null, {
              default: () => [e(n, { icon: "user" }, null)]
            }),
            u("\u7528\u6237\u540D")
          ]),
        value: "xiaoxian"
      },
      {
        labelRenderer: () =>
          e("div", { class: "flex items-center" }, [
            e(l("el-icon"), null, {
              default: () => [e(n, { icon: "iphone" }, null)]
            }),
            u("\u624B\u673A\u53F7")
          ]),
        value: "123456789"
      },
      {
        labelRenderer: () =>
          e("div", { class: "flex items-center" }, [
            e(l("el-icon"), null, {
              default: () => [e(n, { icon: "location" }, null)]
            }),
            u("\u5C45\u4F4F\u5730")
          ]),
        value: "\u4E0A\u6D77"
      }
    ],
    columnsB: [
      {
        labelRenderer: () =>
          e("div", { class: "flex items-center" }, [
            e(l("el-icon"), null, {
              default: () => [e(n, { icon: "tickets" }, null)]
            }),
            u("\u6807\u7B7E")
          ]),
        cellRenderer: () =>
          c.map(a =>
            e(
              l("el-tag"),
              { class: "mr-10px", type: a.type, size: "small", effect: "dark" },
              { default: () => [a.label] }
            )
          )
      },
      {
        labelRenderer: () =>
          e("div", { class: "flex items-center" }, [
            e(l("el-icon"), null, {
              default: () => [e(n, { icon: "office-building" }, null)]
            }),
            u("\u8054\u7CFB\u5730\u5740")
          ]),
        value: "\u4E0A\u6D77\u5E02\u5F90\u6C47\u533A"
      }
    ],
    columnsC: [
      {
        labelRenderer: () =>
          e("div", { class: "flex items-center" }, [
            e(l("el-icon"), null, {
              default: () => [e(n, { icon: "notebook" }, null)]
            }),
            u("\u597D\u597D\u5B66\u4E60\uFF0C\u5929\u5929\u5411\u4E0A")
          ]),
        value: "\u4E0A\u6D77\u5E02\u5F90\u6C47\u533A"
      }
    ]
  };
}
export { r as useColumns };
