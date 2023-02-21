import { spearI18n } from "@spearly/spear-cli/dist/plugins/spear-i18n.js"

export default {
  "spearlyAuthKey": "abc",
  "projectName": "test",
  "generateSitemap": false,
  "plugins": [
    spearI18n("./i18n.yaml")
  ]
};