import { Outlet, useLocation } from 'react-router-dom'
import { useRef } from 'react'
import Grain from './Grain'
import Nav from './Nav'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
export default function Layout() {
  const scrollArea = useRef(null)
  const location = useLocation()
  useGSAP(
    () => {
      ScrollSmoother.create({
        smooth: 2,
        effects: true,
        normalizeScroll: true,
      })
    },
    { dependencies: [location], scope: scrollArea },
  )

  return (
    <>
      <Grain />
      <Nav />
      <main>
        <div id="smooth-wrapper" ref={scrollArea}>
          <div id="smooth-content">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  )
}
