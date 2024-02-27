import { Outlet } from 'react-router-dom'
import Nav from './Nav.tsx'
import router from '../routes.tsx'

function App() {
  // const { data } = useFruits()

  return (
    <>
      <Outlet />
    </>
  )
}

export default App
