import * as express from 'express'
import helmet from 'helmet'
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers'

@Middleware({ type: 'before', priority: 800 })
export class SecurityNoCacheMiddleware implements ExpressMiddlewareInterface {
  public use(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ): any {
    return helmet.noCache()(req, res, next)
  }
}
