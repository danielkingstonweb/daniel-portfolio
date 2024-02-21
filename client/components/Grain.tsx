import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'

export default function Grain() {
  const grainy = useRef(null)
  const grainTL = useRef()
  useGSAP(() => {
    grainTL.current = gsap
      .timeline({ repeat: -1 })
      .to(grainy.current, { duration: 0, x: 0, y: 0 })
      .to(grainy.current, { duration: 0.5, x: '-5%', y: '-10%', ease: 'none' })
      .to(grainy.current, { duration: 0.5, x: '-15%', y: '5%', ease: 'none' })
      .to(grainy.current, { duration: 0.5, x: '7%', y: '-25%', ease: 'none' })
      .to(grainy.current, { duration: 0.5, x: '-5%', y: '25%', ease: 'none' })
      .to(grainy.current, { duration: 0.5, x: '-15%', y: '10%', ease: 'none' })
      .to(grainy.current, { duration: 0.5, x: '15%', ease: 'none' })
      .to(grainy.current, { duration: 0.5, y: '15%', ease: 'none' })
      .to(grainy.current, { duration: 0.5, x: '3%', y: '35%', ease: 'none' })
      .to(grainy.current, { duration: 0.5, x: '-10%', y: '10%', ease: 'none' })
      .to(grainy.current, { duration: 0.5, x: 0, y: 0 })
  })
  return <div ref={grainy} className="noise"></div>
}
