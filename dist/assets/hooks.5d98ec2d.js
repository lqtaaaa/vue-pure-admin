import { d as t, s as r, af as i, ag as I, ah as a } from "./index.69183727.js";
function u(e, o) {
  const f = /^IF-/;
  if (f.test(e)) {
    const n = e.split(f)[1],
      s = n.slice(0, n.indexOf(" ") == -1 ? n.length : n.indexOf(" ")),
      c = n.slice(n.indexOf(" ") + 1, n.length);
    return t({
      name: "FontIcon",
      render() {
        return r(i, { icon: s, iconType: c, ...o });
      }
    });
  } else
    return typeof e == "function" ||
      typeof (e == null ? void 0 : e.render) == "function"
      ? e
      : t({
          name: "Icon",
          render() {
            const n = o && o.online ? I : a;
            return r(n, { icon: e, ...o });
          }
        });
}
export { u };
