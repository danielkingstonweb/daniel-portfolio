import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

export default function ScrollPrompt() {
  const scrollPromptScope = useRef()
  const scrollPromptTL = useRef()

  useGSAP(
    () => {
      gsap.set('.prompt-svg', {
        opacity: 0,
        scaleX: '60%',
        scaleY: '60%',
      })

      scrollPromptTL.current = gsap
        .timeline({ repeat: -1 })
        .to('.prompt-svg', {
          y: 60,
          opacity: 1,
          stagger: -0.2,
          ease: 'power2.out',
        })
        .to('.prompt-svg', {
          y: 120,
          opacity: 0,
          stagger: -0.2,
          ease: 'power2.in',
        })
    },
    { scope: scrollPromptScope },
  )

  return (
    <>
      <div className="single__info-scroll" ref={scrollPromptScope}>
        <svg
          width="47"
          height="32"
          viewBox="0 0 47 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="prompt-svg"
        >
          <path
            d="M25.9961 30.9099L45.9649 9.84377C47.345 8.38773 47.345 6.03328 45.9649 4.59273L42.6465 1.09203C41.2663 -0.364008 39.0345 -0.364009 37.669 1.09203L23.5147 16.0242L9.36036 1.09203C7.98016 -0.36401 5.74836 -0.36401 4.38285 1.09203L1.03515 4.57724C-0.345049 6.03328 -0.345049 8.38773 1.03514 9.82828L21.0039 30.8944C22.3841 32.3659 24.6159 32.3659 25.9961 30.9099Z"
            fill="#030303"
          />
        </svg>
        <svg
          width="47"
          height="32"
          viewBox="0 0 47 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="prompt-svg"
        >
          <path
            d="M25.9961 30.9099L45.9649 9.84377C47.345 8.38773 47.345 6.03328 45.9649 4.59273L42.6465 1.09203C41.2663 -0.364008 39.0345 -0.364009 37.669 1.09203L23.5147 16.0242L9.36036 1.09203C7.98016 -0.36401 5.74836 -0.36401 4.38285 1.09203L1.03515 4.57724C-0.345049 6.03328 -0.345049 8.38773 1.03514 9.82828L21.0039 30.8944C22.3841 32.3659 24.6159 32.3659 25.9961 30.9099Z"
            fill="#030303"
          />
        </svg>
        <svg
          width="47"
          height="32"
          viewBox="0 0 47 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="prompt-svg"
        >
          <path
            d="M25.9961 30.9099L45.9649 9.84377C47.345 8.38773 47.345 6.03328 45.9649 4.59273L42.6465 1.09203C41.2663 -0.364008 39.0345 -0.364009 37.669 1.09203L23.5147 16.0242L9.36036 1.09203C7.98016 -0.36401 5.74836 -0.36401 4.38285 1.09203L1.03515 4.57724C-0.345049 6.03328 -0.345049 8.38773 1.03514 9.82828L21.0039 30.8944C22.3841 32.3659 24.6159 32.3659 25.9961 30.9099Z"
            fill="#030303"
          />
        </svg>
      </div>
    </>
  )
}
