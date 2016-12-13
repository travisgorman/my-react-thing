var HTMLWebpackPlugin = require('html-webpack-plugin');
// Bring in HTMLWebpackPlugin, and create a new instance, extending it with some configuration
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  // where you tell the plugin what it needs to know
  // the first property, `template`, should be a filepath to the current HTML file, the one to be copied and moved
  template: __dirname + '/app/index.html',
  // the name of the newly created HTML file in the 'build' folder
  filename: 'index.html',
  // the final property `inject` specifies whether the 'script' tag should go in the 'head' or 'body'
  inject: 'body'
});
// put HTMLWebpackPluginConfig in the 'plugins' array on `module.exports`


// This is the actual webpack.config.js. You can extend this configuration object with all kinds of stuff, 
// but all of these properties are pretty much mandatory.
module.exports = {
  // what javascript file should webpack transform?
    // the entry point - the outermost component 
  entry: __dirname + '/app/index.js'
  // in Node.js, `__dirname` refers to the currently executing file
  module: {
      // the loaders array contains object literals, each representing a transformation the code will go through before reaching the browser
      // each 'loader', added to the loaders array, represents a transformation the code will go through before reaching the browser.
    loaders: [
      {
        // All loader objects need a `test` property. Thiss specifies which files will be affected by the loader
        test: /\.js$/ /* this loader affects all files ending in ".js" - javascript files */
        // loaders can also have an `include` and/or `exclude` property
        // you don't want anything in `/node_modules/` transformed
        exclude: /node_modules/,
        // specify what transformation the loader should perform
        loader: 'babel-loader'
        // this loader will search for all files ending in ".js",
        // excluding any files in the "node_modules" folder,
        // and run them all through the 'babel-loader' transformation.
      }, { /* sass */ }, { /* img */ }
    ]
  },
  // where the compiled script is called, and where it ends up
  output: {
    // everything is bundled into one script, `main.js`
    filename: 'main.js',
    // and delivered to the 'build' directory
    path: __dirname + '/build'
    // To make sure 'index.html' is compiled to 'build' as well...
  },
  // add the `HTMLWebpackPluginConfig` from above to the `plugins` array
  plugins: [ HTMLWebpackPluginConfig ]
};
