import { Router } from 'express'
import * as db from '../db/db-about-work.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    console.log('bruh')
    const work = await db.getAllAboutWork()
    res.json(work)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
