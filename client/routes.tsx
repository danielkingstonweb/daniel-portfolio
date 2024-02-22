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
import { TransitionProvider } from './context/TransitionContext'
import Transitions from './components/Transitions'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <TransitionProvider>
        <Route
          path="/"
          element={
            <Transitions>
              <App />
            </Transitions>
          }
        >
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
              <Transitions>
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
      </TransitionProvider>
    </>,
  ),
)

export default router
