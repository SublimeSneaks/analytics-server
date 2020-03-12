import { Action } from 'routing-controllers'

// TODO: Replace Promise<{}> with Promise<UserInterface>
// TODO: Sort out connection object
export function currentUserChecker(
  connection: any,
): (action: Action) => Promise<{} | undefined> {
  return async function innerCurrentUserChecker(
    action: Action,
  ): Promise<{} | undefined> {
    return action.request.user
  }
}
