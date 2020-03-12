import * as Sentry from '@sentry/node'
import * as express from 'express'
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers'

@Middleware({ type: 'before', priority: 1100 })
export class SentryMiddleware implements ExpressMiddlewareInterface {
  public use(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ): any {
    return Sentry.Handlers.requestHandler({
      user: [
        'id',
        'userName',
        'isAdmin',
        'scopes',
        'email',
        'username',
        'user_id',
      ],
    })(req, res, next)
  }
}
