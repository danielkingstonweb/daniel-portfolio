import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import Work from './components/Work'
import Contact from './components/Contact'
import Photography from './components/Photography'
import SingleWork from './components/SingleWork'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="Work" element={<Work />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Photography" element={<Photography />} />
        <Route path="Work/:workId" element={<SingleWork />} />
      </Route>
    </>,
  ),
)

export default router
