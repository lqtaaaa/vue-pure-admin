import { aV as m, aW as o, aX as h, aY as p } from "./index.69183727.js";
const i = m({
  id: "pure-epTheme",
  state: () => {
    var t, e, r, s;
    return {
      epThemeColor:
        (e =
          (t = o.getItem("responsive-layout")) == null
            ? void 0
            : t.epThemeColor) != null
          ? e
          : h().EpThemeColor,
      epTheme:
        (s = (r = o.getItem("responsive-layout")) == null ? void 0 : r.theme) !=
        null
          ? s
          : h().Theme
    };
  },
  getters: {
    getEpThemeColor() {
      return this.epThemeColor;
    },
    fill() {
      return this.epTheme === "light"
        ? "#409eff"
        : this.epTheme === "yellow"
        ? "#d25f00"
        : "#fff";
    }
  },
  actions: {
    setEpThemeColor(t) {
      const e = o.getItem("responsive-layout");
      (this.epTheme = e == null ? void 0 : e.theme),
        (this.epThemeColor = t),
        (e.epThemeColor = t),
        o.setItem("responsive-layout", e);
    }
  }
});
function T() {
  return i(p);
}
export { T as u };
