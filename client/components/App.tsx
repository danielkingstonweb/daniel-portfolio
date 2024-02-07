import { Outlet } from 'react-router-dom'
import { useFruits } from '../hooks/useFruits.ts'

function App() {
  // const { data } = useFruits()

  return (
    <>
      {/* <main> */}
      <Outlet />
      {/* </main> */}
    </>
  )
}

export default App
