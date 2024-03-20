import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import ScrollPrompt from './ScrollPrompt'
import { useRef } from 'react'
import { COLORS } from './Values'
import InteractiveLink from './InteractiveLink'

export default function About() {
  const aboutArea = useRef(null)

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
        <div className="about__content"></div>
      </div>
    </>
  )
}
