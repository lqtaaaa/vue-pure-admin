import { k as e, h as o, l as i, O as n } from "./index.69183727.js";
function l(t) {
  return (
    typeof t == "function" ||
    (Object.prototype.toString.call(t) === "[object Object]" && !n(t))
  );
}
function u() {
  const { pkg: t, lastBuildTime: s } = {
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
    { version: r } = t;
  return {
    columns: [
      {
        label: "\u7248\u672C",
        cellRenderer: () =>
          e(o("el-tag"), { size: "small" }, l(r) ? r : { default: () => [r] })
      },
      {
        label: "\u6700\u540E\u7F16\u8BD1\u65F6\u95F4",
        cellRenderer: () =>
          e(o("el-tag"), { size: "small" }, l(s) ? s : { default: () => [s] })
      },
      {
        label: "\u6587\u6863\u5730\u5740",
        cellRenderer: () =>
          e(
            "a",
            { href: "https://pure-admin-doc.vercel.app", target: "_blank" },
            [
              e("span", { style: "color: var(--el-color-primary)" }, [
                i("\u6587\u6863\u5730\u5740")
              ])
            ]
          )
      },
      {
        label: "\u9884\u89C8\u5730\u5740",
        cellRenderer: () =>
          e(
            "a",
            { href: "https://vue-pure-admin.vercel.app", target: "_blank" },
            [
              e("span", { style: "color: var(--el-color-primary)" }, [
                i("\u9884\u89C8\u5730\u5740")
              ])
            ]
          )
      },
      {
        label: "Github",
        cellRenderer: () =>
          e(
            "a",
            {
              href: "https://github.com/xiaoxian521/vue-pure-admin",
              target: "_blank"
            },
            [
              e("span", { style: "color: var(--el-color-primary)" }, [
                i("Github")
              ])
            ]
          )
      },
      {
        label: "QQ\u4EA4\u6D41\u7FA4",
        cellRenderer: () =>
          e(
            "a",
            {
              href: "https://jq.qq.com/?_wv=1027&k=E9fwmFGr",
              target: "_blank"
            },
            [
              e("span", { style: "color: var(--el-color-primary)" }, [
                i(
                  "\u70B9\u51FB\u94FE\u63A5\u52A0\u5165\u7FA4\u804A\u3010Pure Admin\u3011"
                )
              ])
            ]
          )
      }
    ]
  };
}
export { u as useColumns };
