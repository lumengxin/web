module.exports = function(configs, webpack, ctx) {
    configs.resolve = {};
    configs.resolve.alias = {
        'vue$': 'vue/dist/vue.esm.js'
    }
};