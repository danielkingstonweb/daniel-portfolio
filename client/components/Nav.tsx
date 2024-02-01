import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'

export default function Nav() {
  return (
    <>
      <div className="nav-toggle"></div>
      <nav className="nav"></nav>
    </>
  )
}
