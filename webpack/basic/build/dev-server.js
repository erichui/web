let webpack = require('webpack');
let config = require('./webpack.config.dev.js');
let webpackDevServer = require('webpack-dev-server');

let complier = webpack(config);

// init server
let app = new webpackDevServer(complier, {
	publicPath: config.output.publicPath,
	hot: true
})

app.listen(8080,'localhost',function(err) {
	if(err) {
		console.log(err,12313123131);
	}
})
console.log("listen at http://localhost:8080")