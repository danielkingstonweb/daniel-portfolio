import connection from './connection.ts'
import { Work } from '../../models/deswork.ts'

export async function getAllWork(db = connection): Promise<Work[]> {
  return db('work').select()
}
