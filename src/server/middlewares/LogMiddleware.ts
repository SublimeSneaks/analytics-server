import * as express from 'express'
import morgan from 'morgan'
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers'

import { env } from '../../env'
import { Logger } from '../../lib/logger'

@Middleware({ type: 'before', priority: 500 })
export class LogMiddleware implements ExpressMiddlewareInterface {
  private log = new Logger(__dirname)

  public use(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ): any {
    return morgan(env.log.morganFormat, {
      stream: {
        write: this.log.debug.bind(this.log),
      },
    })(req, res, next)
  }
}
