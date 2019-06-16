const { createElement } = require('react')
const express = require('express')
const { renderToString } = require('react-dom/server')
const { Eclipse } = require('react-loading-io')

const port = 3000
const app = express()

app.get('*', (req, res) => {
  const html = renderToString(createElement(Eclipse))
  res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>SSR Example</title>
    </head>
    <body>
      ${html}
    </body>
    </html>
  `)
})

app.listen(port, () => console.log(`http://localhost:${port}`))
