import { u } from "./hooks.cf58c23a.js";
import { d as a, e as s, f as n, Z as o, b as r } from "./index.69183727.js";
const i = a({ name: "TabParamsDetail" }),
  f = a({
    ...i,
    setup(l) {
      const { initToDetail: e, id: t } = u();
      return (
        e("params"),
        (m, p) => (
          s(),
          n(
            "div",
            null,
            o(r(t)) +
              " - \u8BE6\u60C5\u9875\u5185\u5BB9\u5728\u6B64\uFF08params\u4F20\u53C2\uFF09",
            1
          )
        )
      );
    }
  });
export { f as default };
