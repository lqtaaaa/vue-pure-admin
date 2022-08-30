import {
  a8 as x,
  az as _,
  d as h,
  t as C,
  aA as k,
  K as E,
  x as S,
  c as B,
  w as P,
  e as I,
  f as D,
  V as F,
  _ as y,
  a0 as R,
  i as J,
  b as Y
} from "./index.69183727.js";
var L = { exports: {} };
(function (v, w) {
  (function (p, M) {
    v.exports = M();
  })(x, function () {
    function p(e) {
      var r = [];
      return (
        e.AMapUI && r.push(M(e.AMapUI)),
        e.Loca && r.push(m(e.Loca)),
        Promise.all(r)
      );
    }
    function M(e) {
      return new Promise(function (r, a) {
        var i = [];
        if (e.plugins)
          for (var t = 0; t < e.plugins.length; t += 1)
            n.AMapUI.plugins.indexOf(e.plugins[t]) == -1 &&
              i.push(e.plugins[t]);
        if (u.AMapUI === o.failed)
          a("\u524D\u6B21\u8BF7\u6C42 AMapUI \u5931\u8D25");
        else if (u.AMapUI === o.notload) {
          (u.AMapUI = o.loading),
            (n.AMapUI.version = e.version || n.AMapUI.version),
            (t = n.AMapUI.version);
          var l = document.body || document.head,
            c = document.createElement("script");
          (c.type = "text/javascript"),
            (c.src = "https://webapi.amap.com/ui/" + t + "/main.js"),
            (c.onerror = function (s) {
              (u.AMapUI = o.failed), a("\u8BF7\u6C42 AMapUI \u5931\u8D25");
            }),
            (c.onload = function () {
              if (((u.AMapUI = o.loaded), i.length))
                window.AMapUI.loadUI(i, function () {
                  for (var s = 0, g = i.length; s < g; s++) {
                    var U = i[s].split("/").slice(-1)[0];
                    window.AMapUI[U] = arguments[s];
                  }
                  for (r(); d.AMapUI.length; ) d.AMapUI.splice(0, 1)[0]();
                });
              else for (r(); d.AMapUI.length; ) d.AMapUI.splice(0, 1)[0]();
            }),
            l.appendChild(c);
        } else
          u.AMapUI === o.loaded
            ? e.version && e.version !== n.AMapUI.version
              ? a(
                  "\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C AMapUI \u6DF7\u7528"
                )
              : i.length
              ? window.AMapUI.loadUI(i, function () {
                  for (var s = 0, g = i.length; s < g; s++) {
                    var U = i[s].split("/").slice(-1)[0];
                    window.AMapUI[U] = arguments[s];
                  }
                  r();
                })
              : r()
            : e.version && e.version !== n.AMapUI.version
            ? a(
                "\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C AMapUI \u6DF7\u7528"
              )
            : d.AMapUI.push(function (s) {
                s
                  ? a(s)
                  : i.length
                  ? window.AMapUI.loadUI(i, function () {
                      for (var g = 0, U = i.length; g < U; g++) {
                        var b = i[g].split("/").slice(-1)[0];
                        window.AMapUI[b] = arguments[g];
                      }
                      r();
                    })
                  : r();
              });
      });
    }
    function m(e) {
      return new Promise(function (r, a) {
        if (u.Loca === o.failed)
          a("\u524D\u6B21\u8BF7\u6C42 Loca \u5931\u8D25");
        else if (u.Loca === o.notload) {
          (u.Loca = o.loading), (n.Loca.version = e.version || n.Loca.version);
          var i = n.Loca.version,
            t = n.AMap.version.startsWith("2"),
            l = i.startsWith("2");
          if ((t && !l) || (!t && l))
            a("JSAPI \u4E0E Loca \u7248\u672C\u4E0D\u5BF9\u5E94\uFF01\uFF01");
          else {
            (t = n.key), (l = document.body || document.head);
            var c = document.createElement("script");
            (c.type = "text/javascript"),
              (c.src = "https://webapi.amap.com/loca?v=" + i + "&key=" + t),
              (c.onerror = function (s) {
                (u.Loca = o.failed), a("\u8BF7\u6C42 AMapUI \u5931\u8D25");
              }),
              (c.onload = function () {
                for (u.Loca = o.loaded, r(); d.Loca.length; )
                  d.Loca.splice(0, 1)[0]();
              }),
              l.appendChild(c);
          }
        } else
          u.Loca === o.loaded
            ? e.version && e.version !== n.Loca.version
              ? a(
                  "\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C Loca \u6DF7\u7528"
                )
              : r()
            : e.version && e.version !== n.Loca.version
            ? a("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C Loca \u6DF7\u7528")
            : d.Loca.push(function (s) {
                s ? a(s) : a();
              });
      });
    }
    if (!window) throw Error("AMap JSAPI can only be used in Browser.");
    var o;
    (function (e) {
      (e.notload = "notload"),
        (e.loading = "loading"),
        (e.loaded = "loaded"),
        (e.failed = "failed");
    })(o || (o = {}));
    var n = {
        key: "",
        AMap: { version: "1.4.15", plugins: [] },
        AMapUI: { version: "1.1", plugins: [] },
        Loca: { version: "1.3.2" }
      },
      u = { AMap: o.notload, AMapUI: o.notload, Loca: o.notload },
      d = { AMap: [], AMapUI: [], Loca: [] },
      A = [],
      f = function (e) {
        typeof e == "function" &&
          (u.AMap === o.loaded ? e(window.AMap) : A.push(e));
      };
    return {
      load: function (e) {
        return new Promise(function (r, a) {
          if (u.AMap == o.failed) a("");
          else if (u.AMap == o.notload) {
            var i = e.key,
              t = e.version,
              l = e.plugins;
            i
              ? (window.AMap &&
                  location.host !== "lbs.amap.com" &&
                  a(
                    "\u7981\u6B62\u591A\u79CDAPI\u52A0\u8F7D\u65B9\u5F0F\u6DF7\u7528"
                  ),
                (n.key = i),
                (n.AMap.version = t || n.AMap.version),
                (n.AMap.plugins = l || n.AMap.plugins),
                (u.AMap = o.loading),
                (t = document.body || document.head),
                (window.___onAPILoaded = function (s) {
                  if ((delete window.___onAPILoaded, s))
                    (u.AMap = o.failed), a(s);
                  else
                    for (
                      u.AMap = o.loaded,
                        p(e)
                          .then(function () {
                            r(window.AMap);
                          })
                          .catch(a);
                      A.length;

                    )
                      A.splice(0, 1)[0]();
                }),
                (l = document.createElement("script")),
                (l.type = "text/javascript"),
                (l.src =
                  "https://webapi.amap.com/maps?callback=___onAPILoaded&v=" +
                  n.AMap.version +
                  "&key=" +
                  i +
                  "&plugin=" +
                  n.AMap.plugins.join(",")),
                (l.onerror = function (s) {
                  (u.AMap = o.failed), a(s);
                }),
                t.appendChild(l))
              : a("\u8BF7\u586B\u5199key");
          } else if (u.AMap == o.loaded)
            if (e.key && e.key !== n.key)
              a("\u591A\u4E2A\u4E0D\u4E00\u81F4\u7684 key");
            else if (e.version && e.version !== n.AMap.version)
              a(
                "\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C JSAPI \u6DF7\u7528"
              );
            else {
              if (((i = []), e.plugins))
                for (t = 0; t < e.plugins.length; t += 1)
                  n.AMap.plugins.indexOf(e.plugins[t]) == -1 &&
                    i.push(e.plugins[t]);
              i.length
                ? window.AMap.plugin(i, function () {
                    p(e)
                      .then(function () {
                        r(window.AMap);
                      })
                      .catch(a);
                  })
                : p(e)
                    .then(function () {
                      r(window.AMap);
                    })
                    .catch(a);
            }
          else if (e.key && e.key !== n.key)
            a("\u591A\u4E2A\u4E0D\u4E00\u81F4\u7684 key");
          else if (e.version && e.version !== n.AMap.version)
            a("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C JSAPI \u6DF7\u7528");
          else {
            var c = [];
            if (e.plugins)
              for (t = 0; t < e.plugins.length; t += 1)
                n.AMap.plugins.indexOf(e.plugins[t]) == -1 &&
                  c.push(e.plugins[t]);
            f(function () {
              c.length
                ? window.AMap.plugin(c, function () {
                    p(e)
                      .then(function () {
                        r(window.AMap);
                      })
                      .catch(a);
                  })
                : p(e)
                    .then(function () {
                      r(window.AMap);
                    })
                    .catch(a);
            });
          }
        });
      },
      reset: function () {
        delete window.AMap,
          delete window.AMapUI,
          delete window.Loca,
          (n = {
            key: "",
            AMap: { version: "1.4.15", plugins: [] },
            AMapUI: { version: "1.1", plugins: [] },
            Loca: { version: "1.3.2" }
          }),
          (u = { AMap: o.notload, AMapUI: o.notload, Loca: o.notload }),
          (d = { AMap: [], AMapUI: [], Loca: [] });
      }
    };
  });
})(L);
const j = L.exports,
  z = v => _.request("get", "/getMapInfo", { params: v }),
  W =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAUCAMAAADSpG8HAAAC91BMVEUAAAAAJQskNR8JNS8AAAAHwgAu2CIAZQIDGgccFA8aTDwVvRAtwyUNqQgcZhgsXSUQQQ0BJQcHMwIpJw4BAQCM63sRRDct5xwHswAMOzAv4SAIxAAr3xofuhZWzUwYRTMqnDEvtyRDvjgKMSwBjQCWkJRdxFNnm2A0cy8KLSgknR0hQTEydjNDYzFhjFpocEsXig9wimhcTi45hy0kTy1Vg0hQLx0EPABCSkAYSxwATQc0UjIFCwOU/4mt/6YP7wXI/8Gh/5eK/4CG/3tJfla5/7K3/7Ck/5tL/0Yq/h0ANxDi/9DG/77D/7vA/7jG/7Cz/6yb/5Gd/4WY/4GF/oFrl3Zy9WtTh2Fj319F2kklakMgbjgOSDAx/yoALBgc8RECIQ7N/8bL/7Sx/6m6/6Oq/6Gm/6Cb/5aX/410oYRuln+U/3tklXNZjGtY019Ou15y/1RV/0YlZUUs1j1E/jk8/ysiYisWZiMFUh8CsR0i6hkj/xUd2RMa+hAAPgwK+gDa/8nT/8bW/7/a/73O/7m9/7W//6qLrZyt/5qk/5GY/JB/rI2k/4eK8YeO/3aI/3N6/21w/2Jf/2Jt72Jj5GJNemJLhmBEgVtOxlhR1lZAgVE2aFEzdE0ye0w/5Uk+nkdGzUY1TUVG4EQ+u0ElXzsicTkhZjgsijYsrDI37i0kgiwhSCwAoxsTnBsY0hALgBAAEQgN4gcHowUS/wT/////8PeWt8HI47WlxK/K/6aUuqGm/52f7Zyx/5qt/5XCupS9/5C+pI+U9456m4uI9oSS/4CE/4B+9nqa/3hkjHBVgWxUxWGA/2BNtl5WvFtS4Vll/1hGpFhY2ldd/FRa71Ne+lI6eFJAXlFq/05Ks01U2ExS9EcxTUAldz481zssRDszyDcfWTc9+jAXyzAx2S4PYSwIUiscOSkitygVMSgLwyYCvCEfpiEDyCAAvR4i3xwe1xwQaxoj9xgQShcKaBYKQBYMWBQU7BAMbA8X8A0J1wsFdgsAAABw6AJ/AAAAPXRSTlMAZ1XZBPPiqUM7/v7d04B2aFdSSRb68uzp5+fn5N/e3drT0MzKxsW+vr27tLOysLCrqqmno6CQj4aEd3Ig/fi2ogAAAkNJREFUKM9ioACwmIMIFCEBYz1DU34ODkFLHUYIEORWUpPjkeU1EICp0T1xYGfnpOLKNWveva2sfP3qcfG8eZGXI0J6LhR6+qtCzBPef2by5IiI4yEhR3p7D3U5uqfYrir/5rUh4VZH2MqwLRpgRUbbN62etWR+c1ODNxA0NDa22JbHxdXVbfBysusKu10rBFKkWPD1evjDm82+vr4+Pg4ODokOHeeyor28vP68CT6WHlLKDlLEFrv6pMuyvCY3N9dWPz+gukT/xZk7plXUJfwo9PCYNJEXrKjqTqhLdESLXXJAAEidb2LSglntu7ozD5fVxsbbV0uDFMnULAx1WTrFPy011S4ZqMzVISlyblZOZnd7WY1nvH09K0gRQOLrwIraHN3d01LtgOr8/Bfdzc3NzclCUiS17j7Qukspgenpju670+zsXNsWRU+dPi38VHkVXBHb++c5LssW7LXNCHR0dAwMdHdLufd09pxr02d/9Pz0036zBEgRT2xCePiSxZ1OtrYZGba2Ts62+x48K4qKmhOzvsR+Y221CkiR1o2El1O5lh91dnZ2cnJydp4wsW9FTBFQVRx36aMS+83gcALMbNumz8tXrcgODgrqCQoKDs7O7ltbURETE/e7tOrJrz1hHCBFnAcLPAqvzJyRl3c6/+LZ/PwZM89HFr9Yu/7Lh+8bqydstYCkAv2k/gKPyPnyzJJcc8WYmZmVNbVNFDxWxpZc7RdVZ4KlFSZrPj5+YWAqs2ESgQqxW3EKMTFxArnEAgDLUd+tnLfEzAAAAABJRU5ErkJggg==",
  T = { id: "mapview", ref: "mapview" },
  N = h({ name: "Amap" }),
  O = h({
    ...N,
    setup(v) {
      let w, p;
      const M = F(),
        m = C({ loading: !k() }),
        o = () => {
          p &&
            p.on("complete", () => {
              m.loading = !1;
            });
        };
      return (
        E(() => {
          if (!M) return;
          let { MapConfigure: n } =
              M.appContext.config.globalProperties.$config,
            { options: u } = n;
          j.load({
            key: n.amapKey,
            version: "2.0",
            plugins: ["AMap.MarkerCluster"]
          })
            .then(d => {
              (p = new d.Map(M.refs.mapview, u)),
                p.plugin(["AMap.ToolBar", "AMap.MapType"], () => {
                  p.addControl(new d.ToolBar()),
                    p.addControl(new d.MapType({ defaultType: 0 }));
                }),
                (w = new d.MarkerCluster(p, [], {
                  gridSize: 80,
                  maxZoom: 14,
                  renderMarker(A) {
                    let { marker: f, data: e } = A;
                    if (Array.isArray(e) && e[0]) {
                      var { driver: r, plateNumber: a, orientation: i } = e[0],
                        t = `<img style="transform: scale(1) rotate(${
                          360 - Number(i)
                        }deg);" src='${W}' />`;
                      f.setContent(t),
                        f.setLabel({
                          direction: "bottom",
                          offset: new d.Pixel(-4, 0),
                          content: `<div> ${a}(${r})</div>`
                        }),
                        f.setOffset(new d.Pixel(-18, -10)),
                        f.on("click", ({ lnglat: l }) => {
                          p.setZoom(13), p.setCenter(l);
                        });
                    }
                  }
                })),
                z()
                  .then(({ info: A }) => {
                    let f = A.map(e => ({ lnglat: [e.lng, e.lat], ...e }));
                    w && w.setData(f);
                  })
                  .catch(A => {}),
                o();
            })
            .catch(() => {
              throw (
                ((m.loading = !1),
                "\u5730\u56FE\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u52A0\u8F7D")
              );
            });
        }),
        S(() => {
          p && p.destroy() && p.clearEvents("click");
        }),
        (n, u) => {
          const d = B("loading");
          return P((I(), D("div", T, null, 512)), [[d, m.loading]]);
        }
      );
    }
  });
const Z = y(O, [["__scopeId", "data-v-986010d3"]]),
  q = R(Z),
  K = h({ name: "Map" }),
  Q = h({
    ...K,
    setup(v) {
      return (w, p) => (I(), J(Y(q)));
    }
  });
const V = y(Q, [["__scopeId", "data-v-93d0faf1"]]);
export { V as default };
