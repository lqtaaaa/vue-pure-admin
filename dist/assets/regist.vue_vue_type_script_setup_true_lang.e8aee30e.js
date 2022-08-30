import {
  d as B,
  u as N,
  r as x,
  t as T,
  h as p,
  e as z,
  i as D,
  j as o,
  k as l,
  b as e,
  ae as f,
  aK as m,
  g as F,
  l as c,
  Z as g,
  aL as I
} from "./index.69183727.js";
import { M as u } from "./motion.a67c55c6.js";
import { u as k, a as $ } from "./verifyCode.8f97a82c.js";
import { E as C } from "./index.f879185a.js";
import { u as _ } from "./hooks.5d98ec2d.js";
const j = { class: "w-full flex justify-between" },
  L = B({
    __name: "regist",
    setup(A) {
      const { t: n } = N(),
        V = x(!1),
        i = x(!1),
        s = T({
          username: "",
          phone: "",
          verifyCode: "",
          password: "",
          repeatPassword: ""
        }),
        v = x(),
        { isDisabled: h, text: b } = k(),
        R = [
          {
            validator: (w, a, t) => {
              a === ""
                ? t(new Error(f(m("login.passwordSureReg"))))
                : s.password !== a
                ? t(new Error(f(m("login.passwordDifferentReg"))))
                : t();
            },
            trigger: "blur"
          }
        ],
        U = async w => {
          (i.value = !0),
            w &&
              (await w.validate((a, t) => {
                if (a)
                  V.value
                    ? setTimeout(() => {
                        C.success(f(m("login.registerSuccess"))),
                          (i.value = !1);
                      }, 2e3)
                    : ((i.value = !1), C.warning(f(m("login.tickPrivacy"))));
                else return (i.value = !1), t;
              }));
        };
      function P() {
        k().end(), I().SET_CURRENTPAGE(0);
      }
      return (w, a) => {
        const t = p("el-input"),
          d = p("el-form-item"),
          y = p("el-button"),
          E = p("el-checkbox"),
          S = p("el-form");
        return (
          z(),
          D(
            S,
            {
              ref_key: "ruleFormRef",
              ref: v,
              model: s,
              rules: e($),
              size: "large"
            },
            {
              default: o(() => [
                l(e(u), null, {
                  default: o(() => [
                    l(
                      d,
                      {
                        rules: [
                          {
                            required: !0,
                            message: e(f)(e(m)("login.usernameReg")),
                            trigger: "blur"
                          }
                        ],
                        prop: "username"
                      },
                      {
                        default: o(() => [
                          l(
                            t,
                            {
                              clearable: "",
                              modelValue: s.username,
                              "onUpdate:modelValue":
                                a[0] || (a[0] = r => (s.username = r)),
                              placeholder: e(n)("login.username"),
                              "prefix-icon": e(_)("user")
                            },
                            null,
                            8,
                            ["modelValue", "placeholder", "prefix-icon"]
                          )
                        ]),
                        _: 1
                      },
                      8,
                      ["rules"]
                    )
                  ]),
                  _: 1
                }),
                l(
                  e(u),
                  { delay: 100 },
                  {
                    default: o(() => [
                      l(
                        d,
                        { prop: "phone" },
                        {
                          default: o(() => [
                            l(
                              t,
                              {
                                clearable: "",
                                modelValue: s.phone,
                                "onUpdate:modelValue":
                                  a[1] || (a[1] = r => (s.phone = r)),
                                placeholder: e(n)("login.phone"),
                                "prefix-icon": e(_)("iphone")
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
                l(
                  e(u),
                  { delay: 150 },
                  {
                    default: o(() => [
                      l(
                        d,
                        { prop: "verifyCode" },
                        {
                          default: o(() => [
                            F("div", j, [
                              l(
                                t,
                                {
                                  clearable: "",
                                  modelValue: s.verifyCode,
                                  "onUpdate:modelValue":
                                    a[2] || (a[2] = r => (s.verifyCode = r)),
                                  placeholder: e(n)("login.smsVerifyCode"),
                                  "prefix-icon": e(_)(
                                    "ri:shield-keyhole-line",
                                    { online: !0 }
                                  )
                                },
                                null,
                                8,
                                ["modelValue", "placeholder", "prefix-icon"]
                              ),
                              l(
                                y,
                                {
                                  disabled: e(h),
                                  class: "ml-2",
                                  onClick:
                                    a[3] ||
                                    (a[3] = r => e(k)().start(v.value, "phone"))
                                },
                                {
                                  default: o(() => [
                                    c(
                                      g(
                                        e(b).length > 0
                                          ? e(b) + e(n)("login.info")
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
                l(
                  e(u),
                  { delay: 200 },
                  {
                    default: o(() => [
                      l(
                        d,
                        { prop: "password" },
                        {
                          default: o(() => [
                            l(
                              t,
                              {
                                clearable: "",
                                "show-password": "",
                                modelValue: s.password,
                                "onUpdate:modelValue":
                                  a[4] || (a[4] = r => (s.password = r)),
                                placeholder: e(n)("login.password"),
                                "prefix-icon": e(_)("lock")
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
                l(
                  e(u),
                  { delay: 250 },
                  {
                    default: o(() => [
                      l(
                        d,
                        { rules: R, prop: "repeatPassword" },
                        {
                          default: o(() => [
                            l(
                              t,
                              {
                                clearable: "",
                                "show-password": "",
                                modelValue: s.repeatPassword,
                                "onUpdate:modelValue":
                                  a[5] || (a[5] = r => (s.repeatPassword = r)),
                                placeholder: e(n)("login.sure"),
                                "prefix-icon": e(_)("lock")
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
                l(
                  e(u),
                  { delay: 300 },
                  {
                    default: o(() => [
                      l(d, null, {
                        default: o(() => [
                          l(
                            E,
                            {
                              modelValue: V.value,
                              "onUpdate:modelValue":
                                a[6] || (a[6] = r => (V.value = r))
                            },
                            {
                              default: o(() => [
                                c(g(e(n)("login.readAccept")), 1)
                              ]),
                              _: 1
                            },
                            8,
                            ["modelValue"]
                          ),
                          l(
                            y,
                            { link: "", type: "primary" },
                            {
                              default: o(() => [
                                c(g(e(n)("login.privacyPolicy")), 1)
                              ]),
                              _: 1
                            }
                          )
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }
                ),
                l(
                  e(u),
                  { delay: 350 },
                  {
                    default: o(() => [
                      l(d, null, {
                        default: o(() => [
                          l(
                            y,
                            {
                              class: "w-full",
                              size: "default",
                              type: "primary",
                              loading: i.value,
                              onClick: a[7] || (a[7] = r => U(v.value))
                            },
                            {
                              default: o(() => [
                                c(g(e(n)("login.definite")), 1)
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
                l(
                  e(u),
                  { delay: 400 },
                  {
                    default: o(() => [
                      l(d, null, {
                        default: o(() => [
                          l(
                            y,
                            { class: "w-full", size: "default", onClick: P },
                            {
                              default: o(() => [c(g(e(n)("login.back")), 1)]),
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
export { L as _ };
