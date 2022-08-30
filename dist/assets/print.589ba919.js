import { a as L } from "./avatars.000f50cc.js";
import { _ as P } from "./Line.vue_vue_type_script_setup_true_lang.5fd7d368.js";
import {
  d as D,
  t as M,
  r as B,
  h as c,
  c as q,
  e as f,
  i as _,
  j as i,
  g as d,
  k as s,
  f as V,
  Y as O,
  L as G,
  w as b,
  l as $,
  ak as z,
  al as R,
  _ as U
} from "./index.69183727.js";
const x = function (e, l) {
  if (((l = l || {}), !(this instanceof x))) return new x(e, l);
  this.conf = {
    styleStr: "",
    setDomHeightArr: [],
    echartDomArr: [],
    printBeforeFn: null,
    printDoneCallBack: null
  };
  for (const o in this.conf) o && l.hasOwnProperty(o) && (this.conf[o] = l[o]);
  typeof e == "string"
    ? (this.dom = document.querySelector(e))
    : (this.dom = this.isDOM(e) ? e : e.$el),
    this.conf.setDomHeightArr &&
      this.conf.setDomHeightArr.length &&
      this.setDomHeight(this.conf.setDomHeightArr),
    this.init();
};
x.prototype = {
  init: function () {
    const e = this.getStyle() + this.getHtml();
    this.writeIframe(e);
  },
  extendOptions: function (e, l) {
    for (const o in l) e[o] = l[o];
    return e;
  },
  getStyle: function () {
    let e = "";
    const l = document.querySelectorAll("style,link");
    for (let o = 0; o < l.length; o++) e += l[o].outerHTML;
    return (
      (e += `<style>.no-print{display:none;}${this.conf.styleStr}</style>`), e
    );
  },
  getHtml: function () {
    const e = document.querySelectorAll("input"),
      l = document.querySelectorAll("select"),
      o = document.querySelectorAll("textarea");
    for (let t = 0; t < e.length; t++)
      e[t].type == "checkbox" || e[t].type == "radio"
        ? e[t].checked == !0
          ? e[t].setAttribute("checked", "checked")
          : e[t].removeAttribute("checked")
        : (e[t].type == "text", e[t].setAttribute("value", e[t].value));
    for (let t = 0; t < o.length; t++)
      o[t].type == "textarea" && (o[t].innerHTML = o[t].value);
    for (let t = 0; t < l.length; t++)
      if (l[t].type == "select-one") {
        const n = l[t].children;
        for (const r in n)
          n[r].tagName == "OPTION" &&
            (n[r].selected == !0
              ? n[r].setAttribute("selected", "selected")
              : n[r].removeAttribute("selected"));
      }
    return this.dom.outerHTML;
  },
  writeIframe: function (e) {
    let l, o;
    const t = document.createElement("iframe"),
      n = document.body.appendChild(t);
    (t.id = "myIframe"),
      t.setAttribute(
        "style",
        "position:absolute;width:0;height:0;top:-10px;left:-10px;"
      ),
      (l = n.contentWindow || n.contentDocument),
      (o = n.contentDocument || n.contentWindow.document),
      o.open(),
      o.write(e),
      o.close();
    const r = this;
    t.onload = function () {
      r.conf.printBeforeFn && r.conf.printBeforeFn({ doc: o }),
        r.drawEchartImg(o).then(() => {
          r.toPrint(l),
            setTimeout(function () {
              document.body.removeChild(t),
                r.conf.printDoneCallBack && r.conf.printDoneCallBack();
            }, 100);
        });
    };
  },
  drawEchartImg(e) {
    return new Promise(l => {
      this.conf.echartDomArr &&
        this.conf.echartDomArr.length > 0 &&
        this.conf.echartDomArr.forEach(o => {
          const t = e.querySelector("#" + o.$el.id),
            n = new Image(),
            r = t.offsetWidth + "px",
            v = t.offsetHeight + "px";
          (n.style.width = r),
            (n.style.height = v),
            (n.src = o.imgSrc),
            (t.innerHTML = ""),
            t.appendChild(n);
        }),
        l();
    });
  },
  toPrint: function (e) {
    try {
      setTimeout(function () {
        e.focus();
        try {
          e.document.execCommand("print", !1, null) || e.print();
        } catch {
          e.print();
        }
        e.close();
      }, 10);
    } catch (l) {
      console.error(l);
    }
  },
  isDOM:
    typeof HTMLElement == "object"
      ? function (e) {
          return e instanceof HTMLElement;
        }
      : function (e) {
          return (
            e &&
            typeof e == "object" &&
            e.nodeType === 1 &&
            typeof e.nodeName == "string"
          );
        },
  setDomHeight(e) {
    e &&
      e.length &&
      e.forEach(l => {
        document.querySelectorAll(l).forEach(t => {
          t.style.height = t.offsetHeight + "px";
        });
      });
  }
};
const p = e => (z("data-v-bbb9e9b1"), (e = e()), R(), e),
  W = { class: "card-header" },
  Y = p(() =>
    d(
      "span",
      { class: "font-medium" },
      "\u6253\u5370\u529F\u80FD\uFF08\u62A5\u8868\u3001\u56FE\u8868\u3001\u56FE\u7247\uFF09",
      -1
    )
  ),
  J = $("\u6253\u5370"),
  K = p(() => d("p", { class: "font-medium pt-1" }, "Element-Plus Table", -1)),
  Q = p(() => d("p", { class: "font-medium pt-1" }, "Vxe Table", -1)),
  X = p(() => d("p", { class: "font-medium pt-1" }, "Echart", -1)),
  Z = p(() => d("p", { class: "font-medium pt-1" }, "Image", -1)),
  j = p(() =>
    d(
      "img",
      {
        src: L,
        alt: "avatars",
        class: "img",
        style: { width: "200px", height: "200px", margin: "50px auto" }
      },
      null,
      -1
    )
  ),
  ee = D({ name: "Print" }),
  te = D({
    ...ee,
    setup(e) {
      const l = M({
          tableData: [
            {
              id: 10001,
              name: "Test1",
              role: "Develop",
              sex: "Man",
              age: 28,
              address: "test abc"
            },
            {
              id: 10002,
              name: "Test2",
              role: "Test",
              sex: "Women",
              age: 22,
              address: "Guangzhou"
            },
            {
              id: 10003,
              name: "Test3",
              role: "PM",
              sex: "Man",
              age: 32,
              address: "Shanghai"
            },
            {
              id: 10004,
              name: "Test4",
              role: "Designer",
              sex: "Women",
              age: 24,
              address: "Shanghai"
            }
          ]
        }),
        o = B("1"),
        t = [
          { value: "1", el: ".el-table", label: "Element-Plus Table" },
          { value: "2", el: ".vxe-table", label: "Vxe Table" },
          { value: "3", el: ".echart", label: "Echart" },
          { value: "4", el: ".img", label: "Image" }
        ];
      function n() {
        var u;
        let a =
          (u = t.filter(w => w.value === o.value)[0]) == null ? void 0 : u.el;
        x(a).toPrint;
      }
      const r = ({ column: a }) => {
          if (a.property === "name")
            return { backgroundColor: "#f60", color: "#ffffff" };
        },
        v = ({ rowIndex: a }) => {
          if ([2, 3, 5].includes(a))
            return { backgroundColor: "red", color: "#ffffff" };
        },
        S = ({ row: a, column: u }) => {
          if (u.property === "sex") {
            if (a.sex >= "1") return { backgroundColor: "#187" };
            if (a.age === 26) return { backgroundColor: "#2db7f5" };
          }
        },
        k = ({ rowIndex: a }) =>
          a === 1 ? "warning-row" : a === 3 ? "success-row" : "",
        T = [
          {
            date: "2016-05-03",
            name: "Tom",
            address: "No. 189, Grove St, Los Angeles"
          },
          {
            date: "2016-05-02",
            name: "Tom",
            address: "No. 189, Grove St, Los Angeles"
          },
          {
            date: "2016-05-04",
            name: "Tom",
            address: "No. 189, Grove St, Los Angeles"
          },
          {
            date: "2016-05-01",
            name: "Tom",
            address: "No. 189, Grove St, Los Angeles"
          }
        ];
      return (a, u) => {
        const w = c("el-option"),
          C = c("el-select"),
          H = c("el-button"),
          A = c("el-table-column"),
          E = c("el-table"),
          y = c("el-col"),
          m = c("vxe-column"),
          N = c("vxe-table"),
          F = c("el-row"),
          I = c("el-card"),
          g = q("motion");
        return (
          f(),
          _(I, null, {
            header: i(() => [
              d("div", W, [
                Y,
                d("div", null, [
                  s(
                    C,
                    {
                      modelValue: o.value,
                      "onUpdate:modelValue":
                        u[0] || (u[0] = h => (o.value = h)),
                      class: "m-2",
                      placeholder: "Select",
                      size: "small"
                    },
                    {
                      default: i(() => [
                        (f(),
                        V(
                          G,
                          null,
                          O(t, h =>
                            s(
                              w,
                              { key: h.value, label: h.label, value: h.value },
                              null,
                              8,
                              ["label", "value"]
                            )
                          ),
                          64
                        ))
                      ]),
                      _: 1
                    },
                    8,
                    ["modelValue"]
                  ),
                  s(
                    H,
                    { size: "small", type: "primary", onClick: n },
                    { default: i(() => [J]), _: 1 }
                  )
                ])
              ])
            ]),
            default: i(() => [
              s(
                F,
                { gutter: 24 },
                {
                  default: i(() => [
                    b(
                      (f(),
                      _(
                        y,
                        {
                          xs: 22,
                          sm: 22,
                          md: 11,
                          lg: 11,
                          xl: 11,
                          style: {
                            margin: "10px",
                            border: "0.01rem solid var(--el-color-primary)"
                          },
                          initial: { opacity: 0, y: 100 },
                          enter: {
                            opacity: 1,
                            y: 0,
                            transition: { delay: 200 }
                          }
                        },
                        {
                          default: i(() => [
                            K,
                            s(
                              E,
                              {
                                border: "",
                                data: T,
                                "row-class-name": k,
                                class: "el-table w-full mt-40px mr-40px"
                              },
                              {
                                default: i(() => [
                                  s(A, {
                                    prop: "date",
                                    label: "Date",
                                    width: "180"
                                  }),
                                  s(A, {
                                    prop: "name",
                                    label: "Name",
                                    width: "180"
                                  }),
                                  s(A, { prop: "address", label: "Address" })
                                ]),
                                _: 1
                              }
                            )
                          ]),
                          _: 1
                        }
                      )),
                      [[g]]
                    ),
                    b(
                      (f(),
                      _(
                        y,
                        {
                          xs: 22,
                          sm: 22,
                          md: 11,
                          lg: 11,
                          xl: 11,
                          style: {
                            margin: "10px",
                            border: "0.01rem solid var(--el-color-primary)"
                          },
                          initial: { opacity: 0, y: 100 },
                          enter: {
                            opacity: 1,
                            y: 0,
                            transition: { delay: 200 }
                          }
                        },
                        {
                          default: i(() => [
                            Q,
                            s(
                              N,
                              {
                                class: "vxe-table",
                                border: "",
                                style: { margin: "40px auto" },
                                "header-cell-style": r,
                                "row-style": v,
                                "cell-style": S,
                                data: l.tableData
                              },
                              {
                                default: i(() => [
                                  s(m, { type: "seq", width: "60" }),
                                  s(m, { field: "name", title: "Name" }),
                                  s(m, { field: "sex", title: "Sex" }),
                                  s(m, { field: "age", title: "Age" }),
                                  s(m, { field: "attr1", title: "Attr1" }),
                                  s(m, {
                                    field: "address",
                                    title: "Address",
                                    "show-overflow": ""
                                  })
                                ]),
                                _: 1
                              },
                              8,
                              ["data"]
                            )
                          ]),
                          _: 1
                        }
                      )),
                      [[g]]
                    ),
                    b(
                      (f(),
                      _(
                        y,
                        {
                          xs: 22,
                          sm: 22,
                          md: 11,
                          lg: 11,
                          xl: 11,
                          style: {
                            width: "200px",
                            height: "300px",
                            margin: "10px",
                            border: "0.01rem solid var(--el-color-primary)"
                          },
                          initial: { opacity: 0, y: 100 },
                          enter: {
                            opacity: 1,
                            y: 0,
                            transition: { delay: 200 }
                          }
                        },
                        {
                          default: i(() => [
                            X,
                            s(P, {
                              class: "echart",
                              style: { margin: "0 auto" }
                            })
                          ]),
                          _: 1
                        }
                      )),
                      [[g]]
                    ),
                    b(
                      (f(),
                      _(
                        y,
                        {
                          xs: 22,
                          sm: 22,
                          md: 11,
                          lg: 11,
                          xl: 11,
                          style: {
                            width: "200px",
                            height: "300px",
                            margin: "10px",
                            border: "0.01rem solid var(--el-color-primary)"
                          },
                          initial: { opacity: 0, y: 100 },
                          enter: {
                            opacity: 1,
                            y: 0,
                            transition: { delay: 200 }
                          }
                        },
                        { default: i(() => [Z, j]), _: 1 }
                      )),
                      [[g]]
                    )
                  ]),
                  _: 1
                }
              )
            ]),
            _: 1
          })
        );
      };
    }
  });
const se = U(te, [["__scopeId", "data-v-bbb9e9b1"]]);
export { se as default };
