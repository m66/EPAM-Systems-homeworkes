import * as url from 'url'
import { createServer } from 'http'

import { routes } from './routes'
import { sendResponse } from "./functions";

const port = process.env.MY_PORT || 3001

const server = createServer((req, res) => {
  const { pathname } = url.parse(req.url!, true)
  const { method } = req

  const route = req.url!.startsWith('/files/')
    ? routes['/files/:fileName']
    : routes[pathname!]
  const controller = route && route[method!]

    if(controller) {
      controller(req, res)
    } else {
      sendResponse(res, 404, { message: "Page not found!" });
    }
})

server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
