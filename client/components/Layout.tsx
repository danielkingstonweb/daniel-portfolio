import { Outlet } from 'react-router-dom'
import Grain from './Grain'
import Nav from './Nav'

export default function Layout() {
  return (
    <>
      <Grain />
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  )
}
