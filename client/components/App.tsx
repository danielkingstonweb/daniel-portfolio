import { Outlet } from 'react-router-dom'
import { useFruits } from '../hooks/useFruits.ts'
import { TransitionProvider } from '../context/TransitionContext.tsx'

function App() {
  // const { data } = useFruits()

  return (
    <>
      {/* <TransitionProvider> */}
        <Outlet />
      {/* </TransitionProvider> */}
    </>
  )
}

export default App
