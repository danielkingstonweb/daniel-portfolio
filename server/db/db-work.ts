import connection from './connection.ts'
import { DesWork } from '../../models/deswork.ts'

export async function getAllWork(db = connection): Promise<DesWork[]> {
  return await db('work').select()
}

export async function getSingleWork(
  id: number,
  db = connection,
): Promise<DesWork[]> {
  return await db('work').select().where('id', id)
}
