import { u as a } from "./hooks.cf58c23a.js";
import { d as e, e as n, f as o, Z as r, b as s } from "./index.69183727.js";
const i = e({ name: "TabQueryDetail" }),
  m = e({
    ...i,
    setup(l) {
      const { initToDetail: u, id: t } = a();
      return (
        u("query"),
        (c, _) => (
          n(),
          o(
            "div",
            null,
            r(s(t)) +
              " - \u8BE6\u60C5\u9875\u5185\u5BB9\u5728\u6B64\uFF08query\u4F20\u53C2\uFF09",
            1
          )
        )
      );
    }
  });
export { m as default };
