import {
  d as a,
  h as E,
  e as d,
  f as B,
  k as e,
  j as u,
  b as s,
  g as F,
  l as n,
  a3 as D,
  a4 as i,
  a5 as r,
  a6 as h
} from "./index.69183727.js";
const A = F("div", null, "\u9632\u6296\uFF1Adebounce", -1),
  m = F(
    "div",
    { class: "mb-5" },
    " \u6240\u8C13\u9632\u6296\uFF0C\u5C31\u662F\u6307\u89E6\u53D1\u4E8B\u4EF6\u540E\u5728 n \u79D2\u5185\u51FD\u6570\u53EA\u80FD\u6267\u884C\u4E00\u6B21\uFF0C\u5982\u679C\u5728 n \u79D2\u5185\u53C8\u89E6\u53D1\u4E86\u4E8B\u4EF6\uFF0C\u5219\u4F1A\u91CD\u65B0\u8BA1\u7B97\u51FD\u6570\u6267\u884C\u65F6\u95F4\u3002 ",
    -1
  ),
  f = n(
    " \u8FDE\u7EED\u70B9\u51FB\u6211\uFF0C\u53EA\u4F1A\u6267\u884C\u7B2C\u4E00\u6B21\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u7ACB\u5373\u6267\u884C "
  ),
  b = n(
    " \u8FDE\u7EED\u70B9\u51FB\u6211\uFF0C\u53EA\u4F1A\u6267\u884C\u6700\u540E\u4E00\u6B21\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u5EF6\u540E\u6267\u884C "
  ),
  k = F("div", null, "\u8282\u6D41\uFF1Athrottle", -1),
  p = F(
    "div",
    { class: "mb-5" },
    " \u6240\u8C13\u8282\u6D41\uFF0C\u5C31\u662F\u6307\u8FDE\u7EED\u89E6\u53D1\u4E8B\u4EF6\u4F46\u662F\u5728 n \u79D2\u4E2D\u53EA\u6267\u884C\u4E00\u6B21\u51FD\u6570\u3002\u8282\u6D41\u4F1A\u7A00\u91CA\u51FD\u6570\u7684\u6267\u884C\u9891\u7387\u3002 ",
    -1
  ),
  v = n(
    " \u8FDE\u7EED\u70B9\u51FB\u6211\uFF0C\u6BCF\u4E00\u79D2\u53EA\u4F1A\u6267\u884C\u4E00\u6B21\u70B9\u51FB\u4E8B\u4EF6 "
  ),
  x = a({ name: "Debounce" }),
  j = a({
    ...x,
    setup(g) {
      const t = () => {
          h({
            message:
              "\u606D\u559C\u4F60\uFF0C\u8FD9\u662F\u4E00\u6761\u6210\u529F\u6D88\u606F",
            type: "success"
          });
        },
        C = D(t, 1e3, !0),
        l = i(t, 1e3),
        _ = r(t, 1e3, !1);
      return (N, V) => {
        const o = E("el-button"),
          c = E("el-card");
        return (
          d(),
          B("div", null, [
            e(
              c,
              { class: "mb-5" },
              {
                header: u(() => [A]),
                default: u(() => [
                  m,
                  e(o, { onClick: s(C) }, { default: u(() => [f]), _: 1 }, 8, [
                    "onClick"
                  ]),
                  e(o, { onClick: s(l) }, { default: u(() => [b]), _: 1 }, 8, [
                    "onClick"
                  ])
                ]),
                _: 1
              }
            ),
            e(c, null, {
              header: u(() => [k]),
              default: u(() => [
                p,
                e(o, { onClick: s(_) }, { default: u(() => [v]), _: 1 }, 8, [
                  "onClick"
                ])
              ]),
              _: 1
            })
          ])
        );
      };
    }
  });
export { j as default };
