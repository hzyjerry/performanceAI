/* eslint-disable no-console, no-use-before-define */

import path from 'path'
import Express from 'express'
import bodyParser from 'body-parser'
import qs from 'qs'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createMemoryHistory, match, RouterContext } from 'react-router'

import configureStore from '../common/store/configureStore'
import { fetchCounter } from '../common/api/counter'

const app = new Express()
const port = 3000

// Use this middleware to set up hot module reloading via webpack.
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))
app.use(bodyParser.json());

app.use(Express.static(__dirname + '/../client'));

const HTML = ({ content, store }) => (
  <html>
    <head>
      <meta charset="utf-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="description" content=""/>
      <meta name="author" content=""/>

      <title>Performance AI - Automatic Performance Analyzer</title>

      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet"/>
      {/* Custom CSS */}
      <link href="/css/sb-admin.css" rel="stylesheet"/>
      {/* Morris Charts CSS */}
      <link href="/css/plugins/morris.css" rel="stylesheet"/>
      <link href="/css/custom.css" rel="stylesheet"/>
      {/* Custom Fonts */}
      <link href="/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/c3/0.4.11/c3.min.css" rel="stylesheet" type="text/css" />

      {/* 
      HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries
      WARNING: Respond.js doesn't work if you view the page via file://
        [if lt IE 9]
          <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
          <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        [endif]
      */}
    </head>
    <body>
      <div id="wrapper" dangerouslySetInnerHTML={{ __html: content }}/>
      <script src="/js/jquery.js"></script>
      <script src="/js/plugins/morris/raphael.min.js"></script>
      <script src="/js/plugins/morris/morris.min.js"></script>
      <script src="/js/plugins/morris/morris-data.js"></script>
      <script src="/js/bootstrap.min.js"></script>
      <script src="/js/plugins/loadingoverlay/loadingoverlay.min.js"></script>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/c3/0.4.11/c3.min.js"></script>
      {/* <script src="js/plugins/loadingoverlay/loadingoverlay_progress.min.js"></script> */}
      <script dangerouslySetInnerHTML={{ __html: `window.__initialState__=${JSON.stringify(store.getState())};` }}/>

      {/* Project Compile */}
      <script src="/static/bundle.js"></script>
      <script>
        </script>
    </body>
  </html>
)

// This is fired every time the server side receives a request
app.get('/*', handleRender)

function handleRender(req, res) {
  // console.log('Handling render')
  // Query our mock API asynchronously
  fetchCounter(apiResult => {
    // Read the counter from the request, if provided
    const params = qs.parse(req.query)

    const preloadedState = { 
      uploadedFile: false, 
      analyzedResult: {
        isFetching: false,
        didInvalidate: false,
        results: {},
        error: {}
      }
    }
    const memoryHistory = createMemoryHistory(req.url)
    const store = configureStore(memoryHistory, preloadedState)
    // console.log(store.getState())

    const content = ""
    /*renderToString(
      <Provider store={store}>
        <RouterContext {...renderProps}>
        </RouterContext>
      </Provider>
    )*/

    res.send('<!doctype html>\n' + renderToString(<HTML content={content} store={store}/>))
  })
}

app.post('/upload', function (req, res, next) {
  setTimeout(function () {
    console.log(req.body);
    console.log("Received upload call");
    res.json({
      results: ['good', 'bad']
    });
  }, 1000)
});


app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
})
