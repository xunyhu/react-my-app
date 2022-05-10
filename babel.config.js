module.exports = {
    presets: [ "@babel/preset-env", "@babel/preset-react" ],
    plugins: [ 
      "@babel/plugin-transform-arrow-functions", 
      ["@babel/plugin-proposal-decorators", {"legacy": true}],  // 这里是关键
      ["@babel/plugin-proposal-class-properties", { "loose": false }],   // 这个是编译类的方法
    ]
  }