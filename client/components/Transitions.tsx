import { useContext, useRef } from 'react'
import { SwitchTransition, Transition } from 'react-transition-group'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import TransitionContext from '../context/TransitionContext'

const Transitions: React.FC = ({ children }) => {
  const location = useLocation()
  const { toggleCompleted } = useContext(TransitionContext)
  const nodeRef = useRef(null)

  return (
    <SwitchTransition>
      <Transition
        key={location.pathname}
        nodeRef={nodeRef}
        timeout={500}
        onEnter={() => {
          toggleCompleted(false)
          gsap.set(nodeRef.current, {
            opacity: 0,
            scale: 0.8,
            xPercent: -100,
          })
          gsap
            .timeline({
              paused: true,
              onComplete: () => toggleCompleted(true),
            })
            .to(nodeRef.current, { autoAlpha: 1, xPercent: 0, duration: 0.25 })
            .to(nodeRef.current, { scale: 1, duration: 0.25 })
            .play()
        }}
        onExit={() => {
          gsap
            .timeline({ paused: true })
            .to(nodeRef.current, { scale: 0.8, duration: 0.2 })
            .to(nodeRef.current, { xPercent: 100, autoAlpha: 0, duration: 0.2 })
            .play()
        }}
      >
        {children}
      </Transition>
    </SwitchTransition>
  )
}

export default Transitions
