import { useColumns as r } from "./columns.37d01971.js";
import {
  d as t,
  h as u,
  e as a,
  f as i,
  Y as p,
  k as _,
  L as d
} from "./index.69183727.js";
const b = t({
  __name: "Github",
  setup(f) {
    const { columnsA: o, columnsB: s, columnsC: e } = r(),
      c = [
        { columns: o, column: 3 },
        { columns: s, column: 2 },
        { columns: e, column: 1 }
      ];
    return (k, C) => {
      const l = u("PureDescriptions");
      return (
        a(),
        i(
          d,
          null,
          p(c, (n, m) =>
            _(
              l,
              {
                key: m,
                columns: n.columns,
                column: n.column,
                class: "margin-top",
                direction: "vertical",
                border: ""
              },
              null,
              8,
              ["columns", "column"]
            )
          ),
          64
        )
      );
    };
  }
});
export { b as _ };
