import { Router } from 'express'

import * as db from '../db/work.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const work = await db.getAllWork()

    res.json({ work: work.map((work) => work.title) })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
