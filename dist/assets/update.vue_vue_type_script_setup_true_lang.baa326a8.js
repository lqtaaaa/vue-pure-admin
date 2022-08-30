import {
  d as E,
  u as P,
  r as C,
  t as B,
  h as f,
  e as N,
  i as S,
  j as a,
  k as o,
  b as e,
  g as T,
  l as w,
  Z as g,
  ae as y,
  aK as V,
  aL as z
} from "./index.69183727.js";
import { M as i } from "./motion.a67c55c6.js";
import { u as v, a as D } from "./verifyCode.8f97a82c.js";
import { E as F } from "./index.f879185a.js";
import { u as m } from "./hooks.5d98ec2d.js";
const I = { class: "w-full flex justify-between" },
  K = E({
    __name: "update",
    setup($) {
      const { t: n } = P(),
        u = C(!1),
        r = B({ phone: "", verifyCode: "", password: "", repeatPassword: "" }),
        c = C(),
        { isDisabled: h, text: x } = v(),
        b = [
          {
            validator: (p, l, s) => {
              l === ""
                ? s(new Error(y(V("login.passwordSureReg"))))
                : r.password !== l
                ? s(new Error(y(V("login.passwordDifferentReg"))))
                : s();
            },
            trigger: "blur"
          }
        ],
        k = async p => {
          (u.value = !0),
            p &&
              (await p.validate((l, s) => {
                if (l)
                  setTimeout(() => {
                    F.success(y(V("login.passwordUpdateReg"))), (u.value = !1);
                  }, 2e3);
                else return (u.value = !1), s;
              }));
        };
      function R() {
        v().end(), z().SET_CURRENTPAGE(0);
      }
      return (p, l) => {
        const s = f("el-input"),
          d = f("el-form-item"),
          _ = f("el-button"),
          U = f("el-form");
        return (
          N(),
          S(
            U,
            {
              ref_key: "ruleFormRef",
              ref: c,
              model: r,
              rules: e(D),
              size: "large"
            },
            {
              default: a(() => [
                o(e(i), null, {
                  default: a(() => [
                    o(
                      d,
                      { prop: "phone" },
                      {
                        default: a(() => [
                          o(
                            s,
                            {
                              clearable: "",
                              modelValue: r.phone,
                              "onUpdate:modelValue":
                                l[0] || (l[0] = t => (r.phone = t)),
                              placeholder: e(n)("login.phone"),
                              "prefix-icon": e(m)("iphone")
                            },
                            null,
                            8,
                            ["modelValue", "placeholder", "prefix-icon"]
                          )
                        ]),
                        _: 1
                      }
                    )
                  ]),
                  _: 1
                }),
                o(
                  e(i),
                  { delay: 100 },
                  {
                    default: a(() => [
                      o(
                        d,
                        { prop: "verifyCode" },
                        {
                          default: a(() => [
                            T("div", I, [
                              o(
                                s,
                                {
                                  clearable: "",
                                  modelValue: r.verifyCode,
                                  "onUpdate:modelValue":
                                    l[1] || (l[1] = t => (r.verifyCode = t)),
                                  placeholder: e(n)("login.smsVerifyCode"),
                                  "prefix-icon": e(m)(
                                    "ri:shield-keyhole-line",
                                    { online: !0 }
                                  )
                                },
                                null,
                                8,
                                ["modelValue", "placeholder", "prefix-icon"]
                              ),
                              o(
                                _,
                                {
                                  disabled: e(h),
                                  class: "ml-2",
                                  onClick:
                                    l[2] ||
                                    (l[2] = t => e(v)().start(c.value, "phone"))
                                },
                                {
                                  default: a(() => [
                                    w(
                                      g(
                                        e(x).length > 0
                                          ? e(x) + e(n)("login.info")
                                          : e(n)("login.getVerifyCode")
                                      ),
                                      1
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ["disabled"]
                              )
                            ])
                          ]),
                          _: 1
                        }
                      )
                    ]),
                    _: 1
                  }
                ),
                o(
                  e(i),
                  { delay: 150 },
                  {
                    default: a(() => [
                      o(
                        d,
                        { prop: "password" },
                        {
                          default: a(() => [
                            o(
                              s,
                              {
                                clearable: "",
                                "show-password": "",
                                modelValue: r.password,
                                "onUpdate:modelValue":
                                  l[3] || (l[3] = t => (r.password = t)),
                                placeholder: e(n)("login.password"),
                                "prefix-icon": e(m)("lock")
                              },
                              null,
                              8,
                              ["modelValue", "placeholder", "prefix-icon"]
                            )
                          ]),
                          _: 1
                        }
                      )
                    ]),
                    _: 1
                  }
                ),
                o(
                  e(i),
                  { delay: 200 },
                  {
                    default: a(() => [
                      o(
                        d,
                        { rules: b, prop: "repeatPassword" },
                        {
                          default: a(() => [
                            o(
                              s,
                              {
                                clearable: "",
                                "show-password": "",
                                modelValue: r.repeatPassword,
                                "onUpdate:modelValue":
                                  l[4] || (l[4] = t => (r.repeatPassword = t)),
                                placeholder: e(n)("login.sure"),
                                "prefix-icon": e(m)("lock")
                              },
                              null,
                              8,
                              ["modelValue", "placeholder", "prefix-icon"]
                            )
                          ]),
                          _: 1
                        }
                      )
                    ]),
                    _: 1
                  }
                ),
                o(
                  e(i),
                  { delay: 250 },
                  {
                    default: a(() => [
                      o(d, null, {
                        default: a(() => [
                          o(
                            _,
                            {
                              class: "w-full",
                              size: "default",
                              type: "primary",
                              loading: u.value,
                              onClick: l[5] || (l[5] = t => k(c.value))
                            },
                            {
                              default: a(() => [
                                w(g(e(n)("login.definite")), 1)
                              ]),
                              _: 1
                            },
                            8,
                            ["loading"]
                          )
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }
                ),
                o(
                  e(i),
                  { delay: 300 },
                  {
                    default: a(() => [
                      o(d, null, {
                        default: a(() => [
                          o(
                            _,
                            { class: "w-full", size: "default", onClick: R },
                            {
                              default: a(() => [w(g(e(n)("login.back")), 1)]),
                              _: 1
                            }
                          )
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }
                )
              ]),
              _: 1
            },
            8,
            ["model", "rules"]
          )
        );
      };
    }
  });
export { K as _ };
