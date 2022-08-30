/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ function T(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function E(t) {
  var n, e;
  return T(t) === !1
    ? !1
    : ((n = t.constructor),
      n === void 0
        ? !0
        : ((e = n.prototype),
          !(T(e) === !1 || e.hasOwnProperty("isPrototypeOf") === !1)));
}
function O() {
  return (
    (O = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var n = 1; n < arguments.length; n++) {
            var e = arguments[n];
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          }
          return t;
        }),
    O.apply(this, arguments)
  );
}
function P(t, n) {
  if (t == null) return {};
  var e,
    r,
    i = {},
    o = Object.keys(t);
  for (r = 0; r < o.length; r++) n.indexOf((e = o[r])) >= 0 || (i[e] = t[e]);
  return i;
}
const V = { silent: !1, logLevel: "warn" },
  k = ["validator"],
  x = Object.prototype,
  S = x.toString,
  D = x.hasOwnProperty,
  q = /^\s*function (\w+)/;
function $(t) {
  var n;
  const e = (n = t == null ? void 0 : t.type) !== null && n !== void 0 ? n : t;
  if (e) {
    const r = e.toString().match(q);
    return r ? r[1] : "";
  }
  return "";
}
const y = E,
  F = t => t;
let c = F;
const h = (t, n) => D.call(t, n),
  L =
    Number.isInteger ||
    function (t) {
      return typeof t == "number" && isFinite(t) && Math.floor(t) === t;
    },
  b =
    Array.isArray ||
    function (t) {
      return S.call(t) === "[object Array]";
    },
  g = t => S.call(t) === "[object Function]",
  m = t => y(t) && h(t, "_vueTypes_name"),
  A = t =>
    y(t) &&
    (h(t, "type") ||
      ["_vueTypes_name", "validator", "default", "required"].some(n =>
        h(t, n)
      ));
function _(t, n) {
  return Object.defineProperty(t.bind(n), "__original", { value: t });
}
function v(t, n, e = !1) {
  let r,
    i = !0,
    o = "";
  r = y(t) ? t : { type: t };
  const u = m(r) ? r._vueTypes_name + " - " : "";
  if (A(r) && r.type !== null) {
    if (r.type === void 0 || r.type === !0 || (!r.required && n === void 0))
      return i;
    b(r.type)
      ? ((i = r.type.some(a => v(a, n, !0) === !0)),
        (o = r.type.map(a => $(a)).join(" or ")))
      : ((o = $(r)),
        (i =
          o === "Array"
            ? b(n)
            : o === "Object"
            ? y(n)
            : o === "String" ||
              o === "Number" ||
              o === "Boolean" ||
              o === "Function"
            ? (function (a) {
                if (a == null) return "";
                const s = a.constructor.toString().match(q);
                return s ? s[1] : "";
              })(n) === o
            : n instanceof r.type));
  }
  if (!i) {
    const a = `${u}value "${n}" should be of type "${o}"`;
    return e === !1 ? (c(a), !1) : a;
  }
  if (h(r, "validator") && g(r.validator)) {
    const a = c,
      s = [];
    if (
      ((c = l => {
        s.push(l);
      }),
      (i = r.validator(n)),
      (c = a),
      !i)
    ) {
      const l =
        (s.length > 1 ? "* " : "") +
        s.join(`
* `);
      return (s.length = 0), e === !1 ? (c(l), i) : l;
    }
  }
  return i;
}
function f(t, n) {
  const e = Object.defineProperties(n, {
      _vueTypes_name: { value: t, writable: !0 },
      isRequired: {
        get() {
          return (this.required = !0), this;
        }
      },
      def: {
        value(i) {
          return i === void 0
            ? (h(this, "default") && delete this.default, this)
            : g(i) || v(this, i, !0) === !0
            ? ((this.default = b(i)
                ? () => [...i]
                : y(i)
                ? () => Object.assign({}, i)
                : i),
              this)
            : (c(`${this._vueTypes_name} - invalid default value: "${i}"`),
              this);
        }
      }
    }),
    { validator: r } = e;
  return g(r) && (e.validator = _(r, e)), e;
}
function d(t, n) {
  const e = f(t, n);
  return Object.defineProperty(e, "validate", {
    value(r) {
      return (
        g(this.validator) &&
          c(`${
            this._vueTypes_name
          } - calling .validate() will overwrite the current custom validator function. Validator info:
${JSON.stringify(this)}`),
        (this.validator = _(r, this)),
        this
      );
    }
  });
}
function w(t, n, e) {
  const r = (function (s) {
    const l = {};
    return (
      Object.getOwnPropertyNames(s).forEach(p => {
        l[p] = Object.getOwnPropertyDescriptor(s, p);
      }),
      Object.defineProperties({}, l)
    );
  })(n);
  if (((r._vueTypes_name = t), !y(e))) return r;
  const { validator: i } = e,
    o = P(e, k);
  if (g(i)) {
    let { validator: s } = r;
    s && (s = (a = (u = s).__original) !== null && a !== void 0 ? a : u),
      (r.validator = _(
        s
          ? function (l) {
              return s.call(this, l) && i.call(this, l);
            }
          : i,
        r
      ));
  }
  var u, a;
  return Object.assign(r, o);
}
function j(t) {
  return t.replace(/^(?!\s*$)/gm, "  ");
}
const Y = () => d("any", {}),
  B = () => d("function", { type: Function }),
  C = () => d("boolean", { type: Boolean }),
  I = () => d("string", { type: String }),
  J = () => d("number", { type: Number }),
  M = () => d("array", { type: Array }),
  R = () => d("object", { type: Object }),
  z = () => f("integer", { type: Number, validator: t => L(t) }),
  G = () => f("symbol", { validator: t => typeof t == "symbol" });
function H(t, n = "custom validation failed") {
  if (typeof t != "function")
    throw new TypeError(
      "[VueTypes error]: You must provide a function as argument"
    );
  return f(t.name || "<<anonymous function>>", {
    type: null,
    validator(e) {
      const r = t(e);
      return r || c(`${this._vueTypes_name} - ${n}`), r;
    }
  });
}
function K(t) {
  if (!b(t))
    throw new TypeError(
      "[VueTypes error]: You must provide an array as argument."
    );
  const n = `oneOf - value should be one of "${t.join('", "')}".`,
    e = t.reduce((r, i) => {
      if (i != null) {
        const o = i.constructor;
        r.indexOf(o) === -1 && r.push(o);
      }
      return r;
    }, []);
  return f("oneOf", {
    type: e.length > 0 ? e : void 0,
    validator(r) {
      const i = t.indexOf(r) !== -1;
      return i || c(n), i;
    }
  });
}
function Q(t) {
  if (!b(t))
    throw new TypeError(
      "[VueTypes error]: You must provide an array as argument"
    );
  let n = !1,
    e = [];
  for (let i = 0; i < t.length; i += 1) {
    const o = t[i];
    if (A(o)) {
      if (m(o) && o._vueTypes_name === "oneOf" && o.type) {
        e = e.concat(o.type);
        continue;
      }
      if ((g(o.validator) && (n = !0), o.type === !0 || !o.type)) {
        c('oneOfType - invalid usage of "true" or "null" as types.');
        continue;
      }
      e = e.concat(o.type);
    } else e.push(o);
  }
  e = e.filter((i, o) => e.indexOf(i) === o);
  const r = e.length > 0 ? e : null;
  return f(
    "oneOfType",
    n
      ? {
          type: r,
          validator(i) {
            const o = [],
              u = t.some(a => {
                const s = v(
                  m(a) && a._vueTypes_name === "oneOf" ? a.type || null : a,
                  i,
                  !0
                );
                return typeof s == "string" && o.push(s), s === !0;
              });
            return (
              u ||
                c(`oneOfType - provided value does not match any of the ${
                  o.length
                } passed-in validators:
${j(
  o.join(`
`)
)}`),
              u
            );
          }
        }
      : { type: r }
  );
}
function U(t) {
  return f("arrayOf", {
    type: Array,
    validator(n) {
      let e = "";
      const r = n.every(i => ((e = v(t, i, !0)), e === !0));
      return (
        r ||
          c(`arrayOf - value validation error:
${j(e)}`),
        r
      );
    }
  });
}
function W(t) {
  return f("instanceOf", { type: t });
}
function X(t) {
  return f("objectOf", {
    type: Object,
    validator(n) {
      let e = "";
      const r = Object.keys(n).every(i => ((e = v(t, n[i], !0)), e === !0));
      return (
        r ||
          c(`objectOf - value validation error:
${j(e)}`),
        r
      );
    }
  });
}
function Z(t) {
  const n = Object.keys(t),
    e = n.filter(i => {
      var o;
      return !((o = t[i]) === null || o === void 0 || !o.required);
    }),
    r = f("shape", {
      type: Object,
      validator(i) {
        if (!y(i)) return !1;
        const o = Object.keys(i);
        if (e.length > 0 && e.some(u => o.indexOf(u) === -1)) {
          const u = e.filter(a => o.indexOf(a) === -1);
          return (
            c(
              u.length === 1
                ? `shape - required property "${u[0]}" is not defined.`
                : `shape - required properties "${u.join(
                    '", "'
                  )}" are not defined.`
            ),
            !1
          );
        }
        return o.every(u => {
          if (n.indexOf(u) === -1)
            return (
              this._vueTypes_isLoose === !0 ||
              (c(
                `shape - shape definition does not include a "${u}" property. Allowed keys: "${n.join(
                  '", "'
                )}".`
              ),
              !1)
            );
          const a = v(t[u], i[u], !0);
          return (
            typeof a == "string" &&
              c(`shape - "${u}" property validation error:
 ${j(a)}`),
            a === !0
          );
        });
      }
    });
  return (
    Object.defineProperty(r, "_vueTypes_isLoose", { writable: !0, value: !1 }),
    Object.defineProperty(r, "loose", {
      get() {
        return (this._vueTypes_isLoose = !0), this;
      }
    }),
    r
  );
}
const tt = ["name", "validate", "getter"],
  et = (() => {
    var t;
    return (
      ((t = class {
        static get any() {
          return Y();
        }
        static get func() {
          return B().def(this.defaults.func);
        }
        static get bool() {
          return C().def(this.defaults.bool);
        }
        static get string() {
          return I().def(this.defaults.string);
        }
        static get number() {
          return J().def(this.defaults.number);
        }
        static get array() {
          return M().def(this.defaults.array);
        }
        static get object() {
          return R().def(this.defaults.object);
        }
        static get integer() {
          return z().def(this.defaults.integer);
        }
        static get symbol() {
          return G();
        }
        static get nullable() {
          return { type: null };
        }
        static extend(n) {
          if (b(n)) return n.forEach(s => this.extend(s)), this;
          const { name: e, validate: r = !1, getter: i = !1 } = n,
            o = P(n, tt);
          if (h(this, e))
            throw new TypeError(
              `[VueTypes error]: Type "${e}" already defined`
            );
          const { type: u } = o;
          if (m(u))
            return (
              delete o.type,
              Object.defineProperty(
                this,
                e,
                i
                  ? { get: () => w(e, u, o) }
                  : {
                      value(...s) {
                        const l = w(e, u, o);
                        return (
                          l.validator &&
                            (l.validator = l.validator.bind(l, ...s)),
                          l
                        );
                      }
                    }
              )
            );
          let a;
          return (
            (a = i
              ? {
                  get() {
                    const s = Object.assign({}, o);
                    return r ? d(e, s) : f(e, s);
                  },
                  enumerable: !0
                }
              : {
                  value(...s) {
                    const l = Object.assign({}, o);
                    let p;
                    return (
                      (p = r ? d(e, l) : f(e, l)),
                      l.validator && (p.validator = l.validator.bind(p, ...s)),
                      p
                    );
                  },
                  enumerable: !0
                }),
            Object.defineProperty(this, e, a)
          );
        }
      }).defaults = {}),
      (t.sensibleDefaults = void 0),
      (t.config = V),
      (t.custom = H),
      (t.oneOf = K),
      (t.instanceOf = W),
      (t.oneOfType = Q),
      (t.arrayOf = U),
      (t.objectOf = X),
      (t.shape = Z),
      (t.utils = {
        validate: (n, e) => v(e, n, !0) === !0,
        toType: (n, e, r = !1) => (r ? d(n, e) : f(n, e))
      }),
      t
    );
  })();
function N(
  t = {
    func: () => {},
    bool: !0,
    string: "",
    number: 0,
    array: () => [],
    object: () => ({}),
    integer: 0
  }
) {
  var n;
  return (
    ((n = class extends et {
      static get sensibleDefaults() {
        return O({}, this.defaults);
      }
      static set sensibleDefaults(e) {
        this.defaults = e !== !1 ? O({}, e !== !0 ? e : t) : {};
      }
    }).defaults = O({}, t)),
    n
  );
}
class nt extends N() {}
const rt = N({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  object: void 0,
  integer: void 0
});
rt.extend([
  { name: "style", getter: !0, type: [String, Object], default: void 0 },
  { name: "VNodeChild", getter: !0, type: void 0 }
]);
export { rt as p };
