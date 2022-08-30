import { useColumns as j } from "./columns.12751b6f.js";
import {
  d as E,
  h as a,
  e as r,
  f as d,
  k as u,
  j as s,
  b as k,
  L as F,
  Y as y,
  g as e,
  Z as g,
  ak as D,
  al as w,
  _ as C
} from "./index.69183727.js";
const i = n => (D("data-v-cc11bd3a"), (n = n()), w(), n),
  A = i(() =>
    e(
      "div",
      { class: "card-header" },
      [e("span", { class: "font-medium" }, "\u5173\u4E8E")],
      -1
    )
  ),
  S = i(() =>
    e(
      "span",
      { style: { "font-size": "15px" } },
      " Pure-Admin \u662F\u4E00\u4E2A\u57FA\u4E8EVue3\u3001Vite2\u3001TypeScript\u3001Element-Plus \u7684\u4E2D\u540E\u53F0\u89E3\u51B3\u65B9\u6848\uFF0C\u5B83\u53EF\u4EE5\u5E2E\u52A9\u60A8\u5FEB\u901F\u642D\u5EFA\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\uFF0C\u63D0\u4F9B\u73B0\u6210\u7684\u5F00\u7BB1\u89E3\u51B3\u65B9\u6848\u53CA\u4E30\u5BCC\u7684\u793A\u4F8B\u3002\u539F\u5219\u4E0A\u4E0D\u6536\u53D6\u4EFB\u4F55\u8D39\u7528\u53CA\u7248\u6743\uFF0C\u53EF\u4EE5\u653E\u5FC3\u4F7F\u7528\uFF0C\u4E0D\u8FC7\u5982\u9700\u4E8C\u6B21\u5F00\u6E90\uFF08\u6BD4\u5982\u7528\u6B64\u5E73\u53F0\u4E8C\u6B21\u5F00\u53D1\u5E76\u5F00\u6E90\uFF09\u8BF7\u8054\u7CFB\u4F5C\u8005\u83B7\u53D6\u8BB8\u53EF\uFF01 ",
      -1
    )
  ),
  q = i(() =>
    e(
      "div",
      { class: "card-header" },
      [e("span", { class: "font-medium" }, "\u9879\u76EE\u4FE1\u606F")],
      -1
    )
  ),
  z = i(() =>
    e(
      "div",
      { class: "card-header" },
      [
        e(
          "span",
          { class: "font-medium" },
          "\u751F\u4EA7\u73AF\u5883\u4F9D\u8D56"
        )
      ],
      -1
    )
  ),
  I = ["href"],
  P = { style: { color: "var(--el-color-primary)" } },
  V = i(() =>
    e(
      "div",
      { class: "card-header" },
      [
        e(
          "span",
          { class: "font-medium" },
          "\u5F00\u53D1\u73AF\u5883\u4F9D\u8D56"
        )
      ],
      -1
    )
  ),
  L = ["href"],
  N = { style: { color: "var(--el-color-primary)" } },
  O = E({ name: "About" }),
  T = E({
    ...O,
    setup(n) {
      const { pkg: b } = {
          pkg: {
            dependencies: {
              "@amap/amap-jsapi-loader": "^1.0.1",
              "@ctrl/tinycolor": "^3.4.1",
              "@logicflow/core": "^1.1.24",
              "@logicflow/extension": "^1.1.24",
              "@pureadmin/components": "^1.1.0",
              "@pureadmin/descriptions": "^1.1.0",
              "@pureadmin/table": "^1.2.0",
              "@pureadmin/utils": "^0.1.1",
              "@vueuse/core": "^9.1.1",
              "@vueuse/motion": "^2.0.0-beta.12",
              "@vueuse/shared": "^9.1.1",
              "@wangeditor/editor": "^5.1.14",
              "@wangeditor/editor-for-vue": "^5.1.12",
              "animate.css": "^4.1.1",
              axios: "^0.27.2",
              "china-area-data": "^5.0.1",
              cropperjs: "^1.5.12",
              "css-color-function": "^1.3.3",
              dayjs: "^1.11.4",
              "driver.js": "^0.9.8",
              echarts: "^5.3.3",
              "el-table-infinite-scroll": "^3.0.1",
              "element-plus": "^2.2.15",
              "element-resize-detector": "^1.2.3",
              "js-cookie": "^3.0.1",
              jsbarcode: "^3.11.5",
              lodash: "^4.17.21",
              "lodash-es": "^4.17.21",
              "lodash-unified": "^1.0.2",
              mitt: "^3.0.0",
              mockjs: "^1.1.0",
              nprogress: "^0.2.0",
              path: "^0.12.7",
              pinia: "^2.0.21",
              qrcode: "^1.5.1",
              qs: "^6.11.0",
              "resize-observer-polyfill": "^1.5.1",
              "responsive-storage": "^2.1.0",
              "rgb-hex": "^4.0.0",
              sortablejs: "^1.15.0",
              swiper: "^8.3.2",
              "v-contextmenu": "3.0.0",
              vue: "^3.2.37",
              "vue-form-create2": "^1.2.8",
              "vue-i18n": "^9.2.2",
              "vue-json-pretty": "^2.1.1",
              "vue-pdf-embed": "^1.1.4",
              "vue-router": "^4.1.3",
              "vue-types": "^4.2.1",
              "vue-virtual-scroller": "^2.0.0-alpha.1",
              vuedraggable: "^4.1.0",
              "vxe-table": "^4.3.0",
              "xe-utils": "^3.5.6",
              xgplayer: "^2.31.7",
              xlsx: "^0.18.5"
            },
            devDependencies: {
              "@commitlint/cli": "13.1.0",
              "@commitlint/config-conventional": "13.1.0",
              "@faker-js/faker": "^7.4.0",
              "@iconify-icons/carbon": "^1.2.8",
              "@iconify-icons/ep": "^1.2.7",
              "@iconify-icons/fa": "^1.2.3",
              "@iconify-icons/fa-solid": "^1.2.3",
              "@iconify-icons/fluent": "^1.2.16",
              "@iconify-icons/mdi": "^1.2.8",
              "@iconify-icons/ri": "^1.2.3",
              "@iconify-icons/uil": "^1.2.2",
              "@iconify/vue": "^3.2.1",
              "@intlify/vite-plugin-vue-i18n": "^6.0.1",
              "@pureadmin/theme": "^2.4.0",
              "@types/element-resize-detector": "1.1.3",
              "@types/js-cookie": "^3.0.1",
              "@types/lodash": "^4.14.180",
              "@types/lodash-es": "^4.17.6",
              "@types/mockjs": "1.0.3",
              "@types/node": "14.14.14",
              "@types/nprogress": "0.2.0",
              "@types/qrcode": "^1.4.2",
              "@types/qs": "^6.9.7",
              "@types/sortablejs": "^1.13.0",
              "@typescript-eslint/eslint-plugin": "^5.10.2",
              "@typescript-eslint/parser": "^5.10.2",
              "@vitejs/plugin-legacy": "^2.0.1",
              "@vitejs/plugin-vue": "^3.0.3",
              "@vitejs/plugin-vue-jsx": "^2.0.0",
              "@vue/eslint-config-prettier": "^7.0.0",
              "@vue/eslint-config-typescript": "^10.0.0",
              "@vue/runtime-core": "^3.2.37",
              autoprefixer: "^10.4.8",
              cloc: "^2.10.0",
              "cross-env": "7.0.3",
              eslint: "^8.8.0",
              "eslint-plugin-prettier": "^4.0.0",
              "eslint-plugin-vue": "^8.4.1",
              "font-awesome": "^4.7.0",
              husky: "^7.0.4",
              "lint-staged": "11.1.2",
              picocolors: "^1.0.0",
              postcss: "^8.4.16",
              "postcss-html": "^1.5.0",
              "postcss-import": "^14.1.0",
              "postcss-scss": "^4.0.4",
              prettier: "^2.5.1",
              "pretty-quick": "3.1.1",
              rimraf: "3.0.2",
              "rollup-plugin-visualizer": "^5.7.1",
              sass: "^1.53.0",
              "sass-loader": "^13.0.2",
              stylelint: "^14.3.0",
              "stylelint-config-html": "^1.0.0",
              "stylelint-config-prettier": "^9.0.3",
              "stylelint-config-recommended": "^6.0.0",
              "stylelint-config-standard": "^24.0.0",
              "stylelint-order": "^5.0.0",
              typescript: "^4.7.4",
              unocss: "^0.45.13",
              "unplugin-vue-define-options": "^0.7.3",
              vite: "^3.0.9",
              "vite-plugin-mock": "^2.9.6",
              "vite-plugin-remove-console": "^1.1.0",
              "vite-svg-loader": "^3.4.0",
              "vue-eslint-parser": "^8.2.0",
              "vue-tsc": "^0.40.4"
            },
            name: "vue-pure-admin",
            version: "3.4.6"
          },
          lastBuildTime: "2022-08-31 00:40:58"
        },
        { dependencies: p, devDependencies: m } = b,
        f = [],
        _ = [],
        { columns: B } = j();
      return (
        Object.keys(p).forEach(o => {
          f.push({ field: p[o], label: o });
        }),
        Object.keys(m).forEach(o => {
          _.push({ field: m[o], label: o });
        }),
        (o, Y) => {
          const l = a("el-card"),
            x = a("PureDescriptions"),
            v = a("el-descriptions-item"),
            h = a("el-descriptions");
          return (
            r(),
            d("div", null, [
              u(
                l,
                { class: "box-card mb-4", shadow: "never" },
                { header: s(() => [A]), default: s(() => [S]), _: 1 }
              ),
              u(
                l,
                { class: "box-card m-4", shadow: "hover" },
                {
                  header: s(() => [q]),
                  default: s(() => [
                    u(
                      x,
                      { columns: k(B), border: "", column: 3, align: "left" },
                      null,
                      8,
                      ["columns"]
                    )
                  ]),
                  _: 1
                }
              ),
              u(
                l,
                { class: "box-card m-4", shadow: "hover" },
                {
                  header: s(() => [z]),
                  default: s(() => [
                    u(
                      h,
                      { border: "" },
                      {
                        default: s(() => [
                          (r(),
                          d(
                            F,
                            null,
                            y(f, (t, c) =>
                              u(
                                v,
                                {
                                  label: t.label,
                                  "label-align": "left",
                                  align: "left",
                                  key: c
                                },
                                {
                                  default: s(() => [
                                    e(
                                      "a",
                                      {
                                        href:
                                          "https://www.npmjs.com/package/" +
                                          t.label,
                                        target: "_blank"
                                      },
                                      [e("span", P, g(t.field), 1)],
                                      8,
                                      I
                                    )
                                  ]),
                                  _: 2
                                },
                                1032,
                                ["label"]
                              )
                            ),
                            64
                          ))
                        ]),
                        _: 1
                      }
                    )
                  ]),
                  _: 1
                }
              ),
              u(
                l,
                { class: "box-card m-4", shadow: "hover" },
                {
                  header: s(() => [V]),
                  default: s(() => [
                    u(
                      h,
                      { border: "" },
                      {
                        default: s(() => [
                          (r(),
                          d(
                            F,
                            null,
                            y(_, (t, c) =>
                              u(
                                v,
                                {
                                  label: t.label,
                                  "label-align": "left",
                                  align: "left",
                                  key: c
                                },
                                {
                                  default: s(() => [
                                    e(
                                      "a",
                                      {
                                        href:
                                          "https://www.npmjs.com/package/" +
                                          t.label,
                                        target: "_blank"
                                      },
                                      [e("span", N, g(t.field), 1)],
                                      8,
                                      L
                                    )
                                  ]),
                                  _: 2
                                },
                                1032,
                                ["label"]
                              )
                            ),
                            64
                          ))
                        ]),
                        _: 1
                      }
                    )
                  ]),
                  _: 1
                }
              )
            ])
          );
        }
      );
    }
  });
const H = C(T, [["__scopeId", "data-v-cc11bd3a"]]);
export { H as default };
