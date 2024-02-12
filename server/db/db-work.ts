import connection from './connection.ts'
import { DesWork } from '../../models/deswork.ts'

export async function getAllWork(db = connection): Promise<DesWork[]> {
  return db('work').select()
}
