import {
  d,
  u as i,
  h as l,
  e as u,
  f as m,
  k as t,
  j as o,
  b as e,
  g as p,
  Z as r,
  aL as f,
  l as x,
  L as g
} from "./index.69183727.js";
import { M as a } from "./motion.a67c55c6.js";
import { R as k } from "./index.fe4f3afb.js";
const C = { class: "text-gray-500 text-xs" },
  B = d({
    __name: "qrCode",
    setup(b) {
      const { t: s } = i();
      return (v, n) => {
        const _ = l("el-divider"),
          c = l("el-button");
        return (
          u(),
          m(
            g,
            null,
            [
              t(
                e(a),
                { class: "-mt-2 -mb-2" },
                {
                  default: o(() => [
                    t(e(k), { text: e(s)("login.test") }, null, 8, ["text"])
                  ]),
                  _: 1
                }
              ),
              t(
                e(a),
                { delay: 100 },
                {
                  default: o(() => [
                    t(_, null, {
                      default: o(() => [p("p", C, r(e(s)("login.tip")), 1)]),
                      _: 1
                    })
                  ]),
                  _: 1
                }
              ),
              t(
                e(a),
                { delay: 150 },
                {
                  default: o(() => [
                    t(
                      c,
                      {
                        class: "w-full mt-4",
                        onClick: n[0] || (n[0] = y => e(f)().SET_CURRENTPAGE(0))
                      },
                      { default: o(() => [x(r(e(s)("login.back")), 1)]), _: 1 }
                    )
                  ]),
                  _: 1
                }
              )
            ],
            64
          )
        );
      };
    }
  });
export { B as _ };
