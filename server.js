const express = require('express');
const webpack = require('webpack');
const open = require('open');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

const port = 8080;

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!\n`);
  console.log(`Go to --> 127.0.0.1:${port}\n`);
  open(`http://127.0.0.1:${port}`);
});
