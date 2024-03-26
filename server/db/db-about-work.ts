import connection from './connection.ts'
import { AboutWork } from '../../models/aboutwork.ts'

export async function getAllAboutWork(db = connection): Promise<AboutWork[]> {
  return await db('about_work').select()
}

export async function getSingleAboutWork(
  id: number,
  db = connection,
): Promise<AboutWork[]> {
  console.log(id)
  return await db('about_work').select().where('id', id).first()
}
