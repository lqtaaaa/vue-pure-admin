import { d as o, c as i, w as n, s } from "./index.69183727.js";
const r = o({
  name: "Motion",
  props: { delay: { type: Number, default: 50 } },
  render() {
    const { delay: t } = this,
      e = i("motion");
    return n(s("div", {}, { default: () => [this.$slots.default()] }), [
      [
        e,
        {
          initial: { opacity: 0, y: 100 },
          enter: { opacity: 1, y: 0, transition: { delay: t } }
        }
      ]
    ]);
  }
});
export { r as M };
