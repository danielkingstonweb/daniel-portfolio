import { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export default function Cursor() {
  const cursorFollow = useRef(null)

  const { contextSafe } = useGSAP((e) => {
    gsap.to(cursorFollow, {
      duration: 0.4,
      x: e.clientX,
      y: e.clientY,
      ease: 'power2.out',
    })
  })
  return <div ref={cursorFollow} className="cursor-follower"></div>
}
