import { d as t, aN as c, b as p, e as u, f as _ } from "./index.69183727.js";
const f = t({ name: "Redirect" }),
  h = t({
    ...f,
    setup(i) {
      const { currentRoute: a, replace: r } = c(),
        { params: n, query: o } = p(a),
        { path: e } = n,
        s = Array.isArray(e) ? e.join("/") : e;
      return r({ path: "/" + s, query: o }), (m, d) => (u(), _("div"));
    }
  });
export { h as default };
