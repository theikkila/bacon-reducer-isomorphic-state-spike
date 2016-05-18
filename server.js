var express = require('express');
var app = express();

import React from 'react'

import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './routes'


function fullPage(initialState, renderProps) {
  return `
    <html>
      <head>
        <title>testspike</title>
        <script>
          window.STATE = ${JSON.stringify(initialState)}
        </script>
      </head>
      <body>
        <div id="root">${renderToString(<RouterContext {...renderProps} />)}</div>
      </body>
      <script type="text/javascript" src="bundle.js" charset="utf-8"></script>
    </html>
  `
}


app.use('/', express.static('public'));

app.get('*', (req, res) => {
  const initialState = {color: 1};

  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      res.status(200).send(fullPage(initialState, renderProps))
    } else {
      res.status(404).send('Not found')
    }
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
