import { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export default function Cursor() {
  const cursorFollow = useRef(null)

  const { contextSafe } = useGSAP((e) => {
    gsap.set(cursorFollow.current, {
      xPercent: -50,
      yPercent: -50,
    })
  })
  return <div ref={cursorFollow} className="cursor-follower"></div>
}
