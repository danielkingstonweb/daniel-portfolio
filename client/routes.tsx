import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import App from './components/App'
import Landing from './components/Landing'
import Work from './components/Work'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Landing />} />
        <Route path="Work" element={<Work />} />
      </Route>
    </>,
  ),
)

export default router
