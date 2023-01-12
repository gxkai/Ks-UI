const { paramCase, pascalCase, camelCase } = require('change-case')
module.exports = {
  helpers: {
    componentName: function (string) {
      return `Ks${pascalCase(string)}`
    },
    className: function (string) {
      return `ks-${paramCase(string)}`
    },
    propsName: function (string) {
      return `${camelCase(string)}Props`
    },
    propsTypeName: function (string) {
      return `${pascalCase(string)}Props`
    },
    instanceTypeName: function (string) {
      return `${pascalCase(string)}Instance`
    },
  }
}
