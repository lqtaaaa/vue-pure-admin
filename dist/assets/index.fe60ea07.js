import {
  d as a,
  r as d,
  aP as o,
  h as n,
  e as _,
  i as f,
  j as t,
  g as e,
  Z as m,
  b as u,
  k as p,
  l as c
} from "./index.69183727.js";
import { u as D } from "./hooks.5d98ec2d.js";
const F = { class: "card-header" },
  h = c(" \u5F53\u524D\u89D2\u8272\uFF1A "),
  E = { style: { "font-size": "26px" } },
  C = e(
    "p",
    { style: { color: "#ffa500" } },
    " \u67E5\u770B\u5DE6\u4FA7\u83DC\u5355\u53D8\u5316(\u7CFB\u7EDF\u7BA1\u7406)\uFF0C\u6A21\u62DF\u540E\u53F0\u6839\u636E\u4E0D\u540C\u89D2\u8272\u8FD4\u56DE\u5BF9\u5E94\u8DEF\u7531 ",
    -1
  ),
  x = c(" \u5207\u6362\u89D2\u8272 "),
  y = a({ name: "PermissionPage" }),
  b = a({
    ...y,
    setup(B) {
      let s = d(o.getItem("info").username);
      function i() {
        u(s) === "admin"
          ? (o.setItem("info", {
              username: "test",
              accessToken: "eyJhbGciOiJIUzUxMiJ9.test"
            }),
            window.location.reload())
          : (o.setItem("info", {
              username: "admin",
              accessToken: "eyJhbGciOiJIUzUxMiJ9.admin"
            }),
            window.location.reload());
      }
      return (k, w) => {
        const r = n("el-button"),
          l = n("el-card");
        return (
          _(),
          f(l, null, {
            header: t(() => [
              e("div", F, [e("span", null, [h, e("span", E, m(u(s)), 1), C])])
            ]),
            default: t(() => [
              p(
                r,
                {
                  type: "primary",
                  onClick: i,
                  icon: u(D)("user", { color: "#fff" })
                },
                { default: t(() => [x]), _: 1 },
                8,
                ["icon"]
              )
            ]),
            _: 1
          })
        );
      };
    }
  });
export { b as default };
