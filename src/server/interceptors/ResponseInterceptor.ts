import express from 'express'
import { Action, Interceptor, InterceptorInterface } from 'routing-controllers'

import { Logger } from '../../decorators/Logger'
import { LoggerInterface } from '../../lib/logger'

@Interceptor()
export class ResponseInterceptor implements InterceptorInterface {
  constructor(@Logger(__filename) private log: LoggerInterface) {}

  intercept(action: Action, content: any) {
    const {response} = action

    const isSuccess = (statusCode: number) =>
      response.statusCode >= 200 && response.statusCode < 400

    return {
      success: isSuccess(response.statusCode),
      ...(typeof content === 'string'
        ? { message: content }
        : { data: content }),
    }
  }
}
