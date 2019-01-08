const babelOptions = {
  presets: ['babel-preset-gatsby', 'babel-preset-react-app']
}

module.exports = require('babel-jest').createTransformer(babelOptions)
