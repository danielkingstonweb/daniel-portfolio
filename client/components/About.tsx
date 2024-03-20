import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import ScrollPrompt from './ScrollPrompt'
import { useRef } from 'react'
import { COLORS } from './Values'

export default function About() {
  const aboutArea = useRef(null)
  const introIcon = useRef(null)
  const lineRef = useRef(null)
  const linkRef = useRef(null)

  const { contextSafe } = useGSAP(
    () => {
      gsap.set(introIcon.current, {
        rotate: -45,
      })

      gsap.set(lineRef.current, {
        scaleX: 0,
      })
    },
    { scope: aboutArea },
  )

  const onMouseEnter = contextSafe(({ currentTarget }) => {
    gsap.to(introIcon.current, {
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

  const onMouseLeave = contextSafe(({ currentTarget }) => {
    gsap.to(introIcon.current, {
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
    <>
      <div className="about" ref={aboutArea}>
        <div className="about__intro">
          <div className="about__intro-top">
            <div className="about__intro-top-left">
              <div className="about__intro-title">
                <h1 className="about-intro-title">Kia Ora! I'm Daniel</h1>
              </div>
            </div>
            <div className="about__intro-top-right"></div>
          </div>
          <div className="about__intro-bottom">
            <div className="about__intro-bottom-left">
              <div className="about__intro-title">
                <h1 className="about-intro-title">At Heart, I'm a designer</h1>
              </div>
              <div className="about__intro-subtitle">
                <h2 className="about-intro-subtitle">
                  I’ve been applying everything I’ve learned over the years to
                  Web Development. I’m passionate about working intimately with
                  clients and other creatives to bring ideas to life.
                </h2>
              </div>
              <div className="about__intro-fit">
                <h3 className="about-intro-fit">Think we'd be a good fit?</h3>
              </div>
              <div
                className="about__intro-link"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <div className="about__intro-link-left">
                  <Link
                    ref={linkRef}
                    className="about-intro-link"
                    to="/Contact"
                  >
                    Let's get in touch
                  </Link>
                  <div
                    ref={lineRef}
                    className="about-intro-link-underline"
                  ></div>
                </div>
                <svg
                  className="about-intro-icon"
                  ref={introIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </div>
              <div className="about__intro-prompt">
                <div className="about-intro-prompt">
                  <ScrollPrompt />
                </div>
                <p className="about__intro-prompt-copy">
                  A collection of paid & passion work that I love
                </p>
              </div>
            </div>
            <div className="about__intro-bottom-right">
              <div className="about__intro-img"></div>
            </div>
          </div>
        </div>
        <div className="about__content"></div>
      </div>
    </>
  )
}
