module.exports = {
  presets: [
    // Compile to environments listed in .browserslistrc
    '@babel/env',
    '@babel/typescript',
  ],
  plugins: [
    // class { handleThing = () => { } }
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/proposal-class-properties', { loose: true }],
    // { ...spread }
    '@babel/proposal-object-rest-spread',
  ],
}
