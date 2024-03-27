import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import ScrollPrompt from './ScrollPrompt'
import { useRef } from 'react'
import { COLORS } from './Values'
import InteractiveLink from './InteractiveLink'
import { useQuery } from '@tanstack/react-query'
import { aboutWork } from '../apis/aboutWork.ts'
import { Draggable } from 'gsap/src/all'
import InertiaPlugin from 'gsap/InertiaPlugin'

gsap.registerPlugin(Draggable, InertiaPlugin)

export default function About() {
  const aboutArea = useRef(null)

  const {
    data: aboutWorkData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['about_work'],
    queryFn: () => {
      return aboutWork()
    },
  })

  useGSAP(
    () => {
      const items = gsap.utils.toArray('.about-item') as HTMLElement[]

      items.map((item) => {
        const randomX = gsap.utils.random(0, 100)
        const randomY = gsap.utils.random(0, 100)
        const randomScale = gsap.utils.random(0.9, 1.5)

        gsap.set(item, {
          xPercent: randomX,
          yPercent: randomY,
          scale: randomScale,
          duration: 1, // duration of the animation
          ease: 'power1.inOut', // easing function for a smooth effect
        })

        Draggable.create(item, {
          bounds: '.about__content',
          inertia: true,
        })
      })
    },
    { dependencies: [aboutWorkData], scope: aboutArea },
  )

  if (isError) {
    return <h1>Bruh shit BROKEN</h1>
  }

  if (isLoading) {
    return <h1>bruh shit COMIN</h1>
  }

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
              <InteractiveLink to="/Contact" text="Let's get in touch" />
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
        <div className="about__content">
          {aboutWorkData.map((work) => (
            <>
              <div key={work.id} className="about-item">
                <img src={work.images} alt="" className="about-item-img" />
                <div className="about-item__content">
                  <div className="about-item__left">
                    <h3 className="about-item-title">{work.title}</h3>
                    <h3 className="about-item-subtitle">{work.subtitle}</h3>
                  </div>
                  <div className="about-item__right">
                    <p className="about-item-date">{work.year}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}
