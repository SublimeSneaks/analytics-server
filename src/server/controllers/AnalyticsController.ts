import {
  Authorized,
  Delete,
  Get,
  JsonController,
  Param,
  Post,
} from 'routing-controllers'

import { AnalyticsService } from '../services/AnalyticsService'
import { AnalyticResponse } from './responses/AnalyticResponse'

@JsonController('/analytics')
export class AnalyticsController {
  constructor(private analyticsService: AnalyticsService) {}

  /**
   * getAnalytic
   * * Route to return a specific analytic with its passed id as a url param
   * @param {string} id the id of the analytic object to return
   * @returns {Promise.<AnalyticResponse>} the analytic object
   * @async
   */
  @Get('/:id')
  @Authorized()
  public async getAnalytic(@Param('id') id: string): Promise<AnalyticResponse> {
    return {}
  }

  /**
   * deleteAnalytic
   * * Route to delete a specific analytic object with the passed id
   * @param {string} id the id of the analytic object to delete
   * @returns {Promise.<AnalyticResponse>} the deleted analytic object
   * @async
   */
  @Delete('/:id')
  @Authorized()
  public async deleteAnalytic(
    @Param('id') id: string,
  ): Promise<AnalyticResponse> {
    return {}
  }

  /**
   * getLatest
   * * Route to get the latest analytic objects
   * @returns {Promise.<AnalyticResponse[]>} a list of the latest analytic objects
   * @async
   */
  @Get('/latest')
  @Authorized()
  public async getLatest(): Promise<AnalyticResponse[]> {
    return []
  }

  /**
   * createAnalytic
   * * Route to create a new analytic object
   * * Typically posted to by users themselves through their client script.
   * @returns {Promise.<AnalyticResponse>} the created Analytic object
   * @async
   */
  @Post()
  @Authorized(['user'])
  public async createAnalytic(): Promise<AnalyticResponse> {
    return {}
  }
}
