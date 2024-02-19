import request from 'superagent'
import { DesWork } from '../../models/deswork'
import { response } from 'express'

const rootUrl = '/api/v1'

export async function getWork(): Promise<DesWork[]> {
  try {
    const response = await request.get(`${rootUrl}/Work`)
    return response.body
  } catch (error) {
    throw console.error('Error fetching all work', error)
  }
}

export async function getOneWork(workId: number): Promise<DesWork[]> {
  try {
    const response = await request.get(`${rootUrl}/Work/${workId}`)
    return response.body
  } catch (error) {
    console.error(`Error fetching work with id ${workId}: `, error)
    throw new Error(`Failed to fetch work with id ${workId}`)
  }
}
