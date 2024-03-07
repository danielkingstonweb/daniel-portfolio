import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import Layout from './components/Layout'
import App from './components/App'
import Home from './components/Home'
import Work from './components/Work'
import About from './components/About'
import Photography from './components/Photography'
import SingleWork from './components/SingleWork'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Work" element={<Work />} />
        <Route path="About" element={<About />} />
        <Route path="Photography" element={<Photography />} />
        <Route path="Work/:workId" element={<SingleWork />} />
      </Route>
    </>,
  ),
)

export default router
