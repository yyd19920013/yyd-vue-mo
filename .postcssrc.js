// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    "plugins": {
        // to edit target browsers: use "browserlist" field in package.json
        "autoprefixer": {},
        "postcss-pxtorem": {
            "rootValue": 100,
            "propList": ["*"], // 如需开启pxToRem模式，请在数组中加入"*"
            "selectorBlackList": [] //如需把css选择器加入黑名单，请在数组中加入对应的前缀，比如"mint-"
        }
    }
}