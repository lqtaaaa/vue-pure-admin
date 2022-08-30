import {
  t as a,
  ae as o,
  aK as s,
  aL as E,
  aM as u,
  r as f,
  a2 as C
} from "./index.69183727.js";
const d = /^\d{6}$/,
  v =
    /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[()])+$)(?!^.*[\u4E00-\u9FA5].*$)([^(0-9a-zA-Z)]|[()]|[a-z]|[A-Z]|[0-9]){8,18}$/,
  $ = a({
    password: [
      {
        validator: (i, r, e) => {
          r === ""
            ? e(new Error(o(s("login.passwordReg"))))
            : v.test(r)
            ? e()
            : e(new Error(o(s("login.passwordRuleReg"))));
        },
        trigger: "blur"
      }
    ],
    verifyCode: [
      {
        validator: (i, r, e) => {
          r === ""
            ? e(new Error(o(s("login.verifyCodeReg"))))
            : E().verifyCode !== r
            ? e(new Error(o(s("login.verifyCodeCorrectReg"))))
            : e();
        },
        trigger: "blur"
      }
    ]
  }),
  h = a({
    phone: [
      {
        validator: (i, r, e) => {
          r === ""
            ? e(new Error(o(s("login.phoneReg"))))
            : u(r)
            ? e()
            : e(new Error(o(s("login.phoneCorrectReg"))));
        },
        trigger: "blur"
      }
    ],
    verifyCode: [
      {
        validator: (i, r, e) => {
          r === ""
            ? e(new Error(o(s("login.verifyCodeReg"))))
            : d.test(r)
            ? e()
            : e(new Error(o(s("login.verifyCodeSixReg"))));
        },
        trigger: "blur"
      }
    ]
  }),
  I = a({
    phone: [
      {
        validator: (i, r, e) => {
          r === ""
            ? e(new Error(o(s("login.phoneReg"))))
            : u(r)
            ? e()
            : e(new Error(o(s("login.phoneCorrectReg"))));
        },
        trigger: "blur"
      }
    ],
    verifyCode: [
      {
        validator: (i, r, e) => {
          r === ""
            ? e(new Error(o(s("login.verifyCodeReg"))))
            : d.test(r)
            ? e()
            : e(new Error(o(s("login.verifyCodeSixReg"))));
        },
        trigger: "blur"
      }
    ],
    password: [
      {
        validator: (i, r, e) => {
          r === ""
            ? e(new Error(o(s("login.passwordReg"))))
            : v.test(r)
            ? e()
            : e(new Error(o(s("login.passwordRuleReg"))));
        },
        trigger: "blur"
      }
    ]
  }),
  l = f(!1),
  t = f(null),
  g = f(""),
  A = () => ({
    isDisabled: l,
    timer: t,
    text: g,
    start: async (e, w, n = 60) => {
      if (!e) return;
      const R = C(n);
      await e.validateField(w, p => {
        p &&
          (clearInterval(t.value),
          (t.value = setInterval(() => {
            n > 0
              ? ((g.value = `${n}`), (l.value = !0), (n -= 1))
              : ((g.value = ""),
                (l.value = !1),
                clearInterval(t.value),
                (n = R));
          }, 1e3)));
      });
    },
    end: () => {
      (g.value = ""), (l.value = !1), clearInterval(t.value);
    }
  });
export { I as a, $ as l, h as p, A as u };
