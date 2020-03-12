import * as Sentry from '@sentry/node'
import {
  MicroframeworkLoader,
  MicroframeworkSettings,
} from 'microframework-w3tec'

import { env } from '../env'

export const sentryLoader: MicroframeworkLoader = (
  settings: MicroframeworkSettings | undefined,
) => {
  if (env.log.sentryDsn) {
    Sentry.init({
      dsn: env.log.sentryDsn,
      release: `(${env.node})${env.app.name}@${env.app.version}`,
    })
  }
}
