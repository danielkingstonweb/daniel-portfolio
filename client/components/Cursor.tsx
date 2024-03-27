import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/all'
import { COLORS } from './Values'

gsap.registerPlugin(CustomEase)

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
      duration: 1,
      ease: CustomEase.create(
        'custom',
        'M0,0 C0.11,0.494 0.236,1.116 0.41,1.078 0.511,1.055 0.504,1 1,1 ',
      ),
    })

    const yCto = gsap.quickTo(cursor, 'top', {
      duration: 1,
      ease: CustomEase.create(
        'custom',
        'M0,0 C0.11,0.494 0.236,1.116 0.41,1.078 0.511,1.055 0.504,1 1,1 ',
      ),
    })

    window.addEventListener('pointermove', (e) => {
      const { target } = e
      const isTargetLinkOrBtn =
        target?.closest('a') || target?.closest('button')

      const cursorPosition = {
        left: e.clientX,
        top: e.clientY,
      }

      xCto(cursorPosition.left - 12)
      yCto(cursorPosition.top - 12)
      xDto(cursorPosition.left - 2)
      yDto(cursorPosition.top - 2)

      gsap.to(cursor, {
        duration: 0.5,
        ease: 'power1.out',
        opacity: isTargetLinkOrBtn ? 0.4 : 1,
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
