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
      duration: 0.7,
      ease: CustomEase.create(
        'custom',
        'M0,0 C0,0 0.143,0.36 0.189,0.519 0.212,0.599 0.253,0.746 0.279,0.814 0.3,0.874 0.347,0.984 0.374,1.032 0.397,1.073 0.447,1.145 0.474,1.172 0.498,1.197 0.548,1.23 0.574,1.241 0.599,1.251 0.625,1.277 0.679,1.254 0.751,1.221 0.834,1.093 0.904,1.054 1,1 1,1 1,1 ',
      ),
    })

    const yCto = gsap.quickTo(cursor, 'top', {
      duration: 0.7,
      ease: CustomEase.create(
        'custom',
        'M0,0 C0,0 0.143,0.36 0.189,0.519 0.212,0.599 0.253,0.746 0.279,0.814 0.3,0.874 0.347,0.984 0.374,1.032 0.397,1.073 0.447,1.145 0.474,1.172 0.498,1.197 0.548,1.23 0.574,1.241 0.599,1.251 0.625,1.277 0.679,1.254 0.751,1.221 0.834,1.093 0.904,1.054 1,1 1,1 1,1 ',
      ),
    })

    window.addEventListener('mousemove', (e) => {
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
