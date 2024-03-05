import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export default function Cursor() {
  // Using useRef() to store the cursor element reference
  const cursorRef = useRef(null)

  // Using useGSAP() hook to manage GSAP animations
  const { contextSafe } = useGSAP()

  // Wrapping the animation functions with contextSafe()
  const animateCursor = contextSafe(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    window.addEventListener('mousemove', (e) => {
      const { target, x, y } = e
      const isTargetLinkOrBtn =
        target?.closest('a') || target?.closest('button')

      gsap.to(cursor, {
        x: x + 3,
        y: y + 3,
        duration: 0.7,
        ease: 'power4',
        opacity: isTargetLinkOrBtn ? 0.6 : 1,
        transform: `scale(${isTargetLinkOrBtn ? 3.5 : 1})`,
      })
    })

    document.addEventListener('mouseleave', () => {
      gsap.to(cursor, {
        duration: 0.7,
        opacity: 0,
      })
    })
  })

  // Call animateCursor once when component mounts
  animateCursor()

  return <div className="cursor-follower" ref={cursorRef} />
}
