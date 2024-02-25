import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import Work from './components/Work'
import Contact from './components/Contact'
import Photography from './components/Photography'
import SingleWork from './components/SingleWork'
import Transitions from './components/Transitions'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
          <Route
            index
            element={
              <Transitions>
                <Home />
              </Transitions>
            }
          />
          <Route
            path="Work"
            element={
              <Transitions addEndListener={Work}>
                <Work />
              </Transitions>
            }
          />
          <Route
            path="Contact"
            element={
              <Transitions>
                <Contact />
              </Transitions>
            }
          />
          <Route
            path="Photography"
            element={
              <Transitions>
                <Photography />
              </Transitions>
            }
          />
          <Route
            path="Work/:workId"
            element={
              <Transitions>
                <SingleWork />
              </Transitions>
            }
          />
      </Route>
    </>,
  ),
)

export default router
