import { EventSubscriber, On } from 'event-dispatch'

import { env } from '../../env'
import { Logger } from '../../lib/logger'
import { events } from './events'

const log = new Logger(__filename)

@EventSubscriber()
export class AuthInvalidSubscriber {
  @On(events.auth.invalid)
  public onAuthInvalid(data: { success: boolean }): void {}
}
