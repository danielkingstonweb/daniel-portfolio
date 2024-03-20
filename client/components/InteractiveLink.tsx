import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { COLORS } from './Values'

export default function InteractiveLink({ to, text }) {
  const linkRef = useRef(null)
  const lineRef = useRef(null)
  const linkIcon = useRef(null)

  const { contextSafe } = useGSAP(() => {
    gsap.set(linkIcon.current, {
      rotate: -45,
    })

    gsap.set(lineRef.current, {
      scaleX: 0,
    })
  })

  const onMouseEnter = contextSafe(() => {
    gsap.to(linkIcon.current, {
      duration: 0.5,
      rotate: 0,
      fill: COLORS.purple,
      ease: 'power1.inOut',
    })

    gsap.to(linkRef.current, {
      duration: 0.5,
      color: COLORS.purple,
      ease: 'power1.inOut',
    })

    gsap.to(lineRef.current, {
      scaleX: 1,
      duration: 0.5,
      background: COLORS.purple,
      ease: 'power1.inOut',
      transformOrigin: 'left',
    })
  })

  const onMouseLeave = contextSafe(() => {
    gsap.to(linkIcon.current, {
      duration: 0.5,
      rotate: -45,
      fill: COLORS.black,
      ease: 'power1.inOut',
    })
    gsap.to(linkRef.current, {
      duration: 0.5,
      color: COLORS.black,
      ease: 'power1.inOut',
    })

    if (!gsap.isTweening(lineRef.current)) {
      // If not, start the leave animation
      gsap.to(lineRef.current, {
        scaleX: 0,
        duration: 0.5,
        background: COLORS.black,
        ease: 'power1.inOut',
        transformOrigin: 'right',
      })
    } else {
      setTimeout(() => {
        gsap.to(lineRef.current, {
          scaleX: 0,
          duration: 0.5,
          background: COLORS.black,
          ease: 'power1.inOut',
          transformOrigin: 'right',
        })
      }, 200)
    }
  })

  return (
    <div
      className="interactive"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="interactive__left">
        <Link ref={linkRef} className="interactive-link" to={to}>
          {text}
        </Link>
        <div ref={lineRef} className="interactive-link-underline"></div>
      </div>
      <svg
        className="interactive-link-icon"
        ref={linkIcon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
      </svg>
    </div>
  )
}

// export default InteractiveLink;
