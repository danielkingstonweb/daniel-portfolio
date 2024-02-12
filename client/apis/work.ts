import request from 'superagent'
import { DesWork } from '../../models/deswork'

const rootUrl = '/api/v1'

export async function getWork(): Promise<DesWork[]> {
  try {
    const response = await request.get(`${rootUrl}/Work`)
    return response.body
  } catch (error) {
    throw console.error('Error fetching all work', error)
  }
}
