import { Outlet } from 'react-router-dom'
import Layout from './Layout'

function App() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
