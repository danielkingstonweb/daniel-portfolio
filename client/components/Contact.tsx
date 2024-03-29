import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { COLORS } from './Values'

export default function Contact() {
  const contactArea = useRef(null)
  const emailRef = useRef(null)
  const lineRef = useRef(null)

  const { contextSafe } = useGSAP(
    () => {
      gsap.set(lineRef.current, {
        scaleX: 0,
      })

      gsap.set('.contact-links-underline', {
        scaleX: 0,
      })
    },
    { scope: contactArea },
  )

  const onMouseEnter = contextSafe(({ currentTarget }) => {
    const icons = gsap.utils.toArray('.contact-links-icon', currentTarget)
    const detail = gsap.utils.toArray('.contact-links-detail', currentTarget)
    const underlines = gsap.utils.toArray(
      '.contact-links-underline',
      currentTarget,
    )
    gsap.to(icons, {
      duration: 0.5,
      y: -60,
      ease: 'power3.out',
      fill: COLORS.purple,
    })
    gsap.to(detail, {
      color: COLORS.purple,
    })
    gsap.to(underlines, {
      scaleX: 1,
      duration: 0.5,
      background: COLORS.purple,
      ease: 'power1.inOut',
      transformOrigin: 'left',
    })
  })

  const onMouseLeave = contextSafe(({ currentTarget }) => {
    const icons = gsap.utils.toArray('.contact-links-icon', currentTarget)
    const detail = gsap.utils.toArray('.contact-links-detail', currentTarget)
    const underlines = gsap.utils.toArray(
      '.contact-links-underline',
      currentTarget,
    )
    gsap.to(icons, {
      duration: 0.5,
      y: 0,
      ease: 'power3.out',
      fill: COLORS.black,
    })
    gsap.to(detail, {
      color: COLORS.black,
    })

    if (!gsap.isTweening(underlines)) {
      // If not, start the leave animation
      gsap.to(underlines, {
        scaleX: 0,
        duration: 0.5,
        background: COLORS.black,
        ease: 'power1.inOut',
        transformOrigin: 'right',
      })
    } else {
      setTimeout(() => {
        gsap.to(underlines, {
          scaleX: 0,
          duration: 0.5,
          background: COLORS.black,
          ease: 'power1.inOut',
          transformOrigin: 'right',
        })
      }, 200)
    }
  })

  const onMouseEnterEmail = contextSafe(({ currentTarget }) => {
    gsap.to(emailRef.current, {
      duration: 0.6,
      color: COLORS.purple,
      ease: 'power3.out',
      transformOrigin: 'left',
    })
    gsap.to(lineRef.current, {
      scaleX: 1,
      duration: 0.4,
      background: COLORS.purple,
      ease: 'power1.inOut',
      transformOrigin: 'left',
    })
  })

  const onMouseLeaveEmail = contextSafe(({ currentTarget }) => {
    // Check if the enter animation is still active
    if (
      !gsap.isTweening(emailRef.current) &&
      !gsap.isTweening(lineRef.current)
    ) {
      // If not, start the leave animation
      gsap.to(emailRef.current, {
        duration: 0.6,
        color: COLORS.black,
        ease: 'power3.out',
      })
      gsap.to(lineRef.current, {
        scaleX: 0,
        duration: 0.6,
        background: COLORS.black,
        ease: 'power1.inOut',
        transformOrigin: 'right',
      })
    } else {
      // If the enter animation is still active, delay the leave animation
      setTimeout(() => {
        gsap.to(emailRef.current, {
          duration: 0.6,
          color: COLORS.black,
          ease: 'power3.out',
        })
        gsap.to(lineRef.current, {
          scaleX: 0,
          duration: 0.6,
          background: COLORS.black,
          ease: 'power1.inOut',
          transformOrigin: 'right',
        })
      }, 400) // Delay time may need to be adjusted
    }
  })

  return (
    <div className="contact" ref={contactArea}>
      <div className="contact__header">
        <h1 className="contact-title">Think we'd be a good fit?</h1>
      </div>
      <div
        onMouseEnter={onMouseEnterEmail}
        onMouseLeave={onMouseLeaveEmail}
        className="contact__email"
      >
        <a href="" className="contact__email-link">
          <h2 ref={emailRef} className="contact-email">
            daniel@kingston.co.nz
          </h2>
        </a>
        <div ref={lineRef} className="contact-email-underline"></div>
      </div>
      <div className="contact__links">
        <div className="contact-links">
          <a
            href="https://www.instagram.com/miscellaneousimagefile/"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-links__icons">
              <svg
                className="contact-links-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" />
              </svg>
              <svg
                className="contact-links-icon contact-links-icon--alt"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
              </svg>
            </div>
            <div className="contact-links__detail">
              <p className="contact-links-detail">@miscellaneuosimagefile</p>
              <div className="contact-links-underline"></div>
            </div>
          </a>
          <a
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            href="https://github.com/danielkingstonweb"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-links__icons">
              <svg
                className="contact-links-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z" />
              </svg>
              <svg
                className="contact-links-icon contact-links-icon--alt"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
              </svg>
            </div>
            <div className="contact-links__detail">
              <p className="contact-links-detail">@danielkingstonweb</p>
              <div className="contact-links-underline"></div>
            </div>
          </a>
          <a
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            href="https://www.linkedin.com/in/daniel-kingston-web/"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-links__icons">
              <svg
                className="contact-links-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
              <svg
                className="contact-links-icon contact-links-icon--alt"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
              </svg>
            </div>
            <div className="contact-links__detail">
              <p className="contact-links-detail">/danielkingstonweb</p>
              <div className="contact-links-underline"></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
