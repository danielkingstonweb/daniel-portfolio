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

    const xDto = gsap.quickTo(cursorDot, 'left', {
      duration: 0.7,
      ease: 'back.out(1.7)',
    })

    const yDto = gsap.quickTo(cursorDot, 'top', {
      duration: 0.7,
      ease: 'back.out(1.7)',
    })

    const xCto = gsap.quickTo(cursor, 'left', {
      duration: 0.7,
      ease: 'power1.out',
    })

    const yCto = gsap.quickTo(cursor, 'top', {
      duration: 0.7,
      ease: 'power1.out',
    })

    window.addEventListener('mousemove', (e) => {
      const { target } = e
      const isTargetLinkOrBtn =
        target?.closest('a') || target?.closest('button')

      const cursorPosition = {
        left: e.clientX,
        top: e.clientY,
      }

      xCto(cursorPosition.left - 11)
      yCto(cursorPosition.top - 11)
      xDto(cursorPosition.left)
      yDto(cursorPosition.top)

      gsap.to(cursor, {
        duration: 0.7,
        ease: 'power1.out',
        opacity: isTargetLinkOrBtn ? 0.6 : 1,
        background: isTargetLinkOrBtn ? COLORS.orange : 'none',
        borderColor: isTargetLinkOrBtn ? COLORS.orange : COLORS.purple,
        mixBlendMode: isTargetLinkOrBtn ? 'difference' : 'normal',
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
