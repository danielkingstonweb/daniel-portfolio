import { useQuery } from '@tanstack/react-query'
import { getWork } from '../apis/work'
import { Link } from 'react-router-dom'
import Nav from './Nav'

export default function Work() {
  return (
    <>
      <Nav />
      <h1>WORKDEEZNUTS</h1>
    </>
  )
}
