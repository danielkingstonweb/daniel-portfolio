import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { COLORS } from './Values'

export default function Cursor() {
  const cursorRef = useRef(null)
  const cursorDotRef = useRef(null)

  const { contextSafe } = useGSAP()

  const animateCursor = contextSafe(() => {
    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current
    if (!cursor) return

    window.addEventListener('mousemove', (e) => {
      const { target, x, y } = e
      const isTargetLinkOrBtn =
        target?.closest('a') || target?.closest('button')

      gsap.to(cursorDot, {
        x: x,
        y: y,
        duration: 0.7,
        ease: 'back.out(1.7)',
      })

      gsap.to(cursor, {
        x: x - 11,
        y: y - 11,
        duration: 0.7,
        ease: 'power1.out',
        opacity: isTargetLinkOrBtn ? 0.6 : 1,
        background: isTargetLinkOrBtn ? COLORS.purple : 'none',
        transform: `scale(${isTargetLinkOrBtn ? 2.5 : 1})`,
      })
    })

    document.addEventListener('mouseleave', () => {
      gsap.to(cursor, {
        duration: 0.7,
        opacity: 0,
      })
    })
  })

  animateCursor()

  return (
    <>
      <div className="cursor-dot" ref={cursorDotRef}></div>
      <div className="cursor-follower" ref={cursorRef} />
    </>
  )
}
