import { Application } from 'express'
import {
  MicroframeworkLoader,
  MicroframeworkSettings,
} from 'microframework-w3tec'
import { createExpressServer } from 'routing-controllers'

import { authorizationChecker } from '../auth/authorizationChecker'
import { currentUserChecker } from '../auth/currentUserChecker'
import { env } from '../env'

export const expressLoader: MicroframeworkLoader = (
  settings: MicroframeworkSettings | undefined,
) => {
  if (settings) {
    const connection = settings.getData('connection')

    /**
     * We create a new express server instance.
     * We could have also use useExpressServer here to attach controllers to an existing express instance.
     */
    const expressApp: Application = createExpressServer({
      cors: true,
      classTransformer: true,
      defaultErrorHandler: false,
      /**
       * We can add options about how routing-controllers should configure itself.
       * Here we specify what controllers should be registered in our express server.
       */
      controllers: env.dirs.controllers,
      middlewares: env.dirs.middlewares,
      interceptors: env.dirs.interceptors,

      /**
       * Authorization features
       */
      authorizationChecker: authorizationChecker(connection),
      currentUserChecker: currentUserChecker(connection),
    })

    // Have it use the X-Forwarded-For header for IP
    expressApp.set('trust proxy', true)

    // Disable the 'X-Powered-By: express' header
    expressApp.disable('x-powered-by')

    // Run application to listen on given port
    if (!env.isTest) {
      const server = expressApp.listen(env.app.port)
      settings.setData('express_server', server)
    }

    // Here we can set the data for other loaders
    settings.setData('express_app', expressApp)
  }
}
