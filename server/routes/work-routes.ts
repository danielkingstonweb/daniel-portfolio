import { Router } from 'express'

import * as db from '../db/db-work.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const work = await db.getAllWork()
    res.json(work)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:workId', async (req, res) => {
  try {
    const workId = Number(req.params.workId)
    const singleWork = await db.getSingleWork(workId)
    res.json(singleWork)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'uh oh, no Work!' })
  }
})

export default router
