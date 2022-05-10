## 配置解读
### mode
编译模式

### bail
在第一个错误出错时抛出，而不是无视错误

### devtool
 通过在浏览器调试工具(browser devtools)中添加元信息(meta info)增强调试。牺牲了构建速度的 `source-map' 是最详细的。

### entry
编译解析入口， 值可以是字符串、数组、对象

### output
编译输出出口，定义输出文件类型，接收一个对象

```js
{
    path: '' , //所有输出文件的目标路径, 必须要绝对路径
    pathinfo: '', //告诉 webpack 在 bundle 中引入「所包含模块信息」的相关注释。
    filename: '', //此选项决定了每个输出 bundle 的名称
    publicPath: '', //
    libraryTarget: '', //通用模块定义
    futureEmitAssets: '', //启用一个新的资源输出逻辑
    chunkFilename: '', //此选项决定了非入口(non-entry) chunk 文件的名称
    devtoolModuleFilenameTemplate: '', //自定义每个 source map 的 sources 数组中使用的名称
    jsonpFunction: '', //只在 target 是 web 时使用，用于按需加载(load on-demand) chunk 的 JSONP 函数
    globalObject: '', //默认是window
}
```

### optimization
优化配置

```js
{
    minimize: '', //告知 webpack 使用 TerserPlugin 或其它在 optimization.minimizer 定义的插件压缩 bundle。
    minimizer: '', //允许你通过提供一个或多个定制过的 TerserPlugin 实例， 覆盖默认压缩工具(minimizer)。
    splitChunk: '', //对于动态导入模块，默认使用 webpack v4+ 提供的全新的通用分块策略(common chunk strategy)。请在 SplitChunksPlugin 页面中查看配置其行为的可用选项。
    runtimeChunk: '', //将 optimization.runtimeChunk 设置为 true 或 'multiple'，会为每个只含有 runtime 的入口添加一个额外 chunk。
}
```

### resolve
这些选项能设置模块如何被解析。

```js
{
    alias: {}, //创建 import 或 require 的别名
    extensions: [], //自动解析确定的扩展
    modules: [], //告诉 webpack 解析模块时应该搜索的目录
    plugins: [], //应该使用的额外的解析插件列表
}
```

### resolveLoader
这组选项与上面的 resolve 对象的属性集合相同，但仅用于解析 webpack 的 loader 包。

### module
决定了如何处理项目中的不同类型的模块。
Rule每个规则可以分为三部分 - 条件(condition)，结果(result)和嵌套规则(nested rule)。

```js
{
    noParse: RegExp | [RegExp] | function, //防止 webpack 解析那些任何与给定正则表达式相匹配的文件。
    rules: [], //创建模块时，匹配请求的规则数组。这些规则能够对模块(module)应用 loader，或者修改解析器(parser)。
}
```
rules.oneof  规则数组，当规则匹配时，只使用第一个匹配规则。

### plugins
webpack 插件列表。例如，当多个 bundle 共享一些相同的依赖，CommonsChunkPlugin 有助于提取这些依赖到共享的 bundle 中，来避免重复打包。

### node
这些选项可以配置是否 polyfill 或 mock 某些 Node.js 全局变量和模块。

### performance
这些选项可以控制 webpack 如何通知「资源(asset)和入口起点超过指定文件限制」。 此功能受到 webpack 性能评估的启发。
