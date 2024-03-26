import request from 'superagent'
import { AboutWork } from '../../models/aboutwork'
// import { response } from 'express'

const rootUrl = '/api/v1'

export async function aboutWork(): Promise<AboutWork[]> {
  try {
    const response = await request.get(`${rootUrl}/AboutWork`)
    return response.body
  } catch (error) {
    throw console.error('Error fetching about work', error)
  }
}
