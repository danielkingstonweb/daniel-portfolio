import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact__intro">
          <div className="contact__intro-top">
            <div className="contact__intro-top-left">
              <div className="contact__intro-title">
                <h1 className="contact-intro-title">Kia Ora! I'm Daniel</h1>
              </div>
            </div>
            <div className="contact__intro-top-right"></div>
          </div>
          <div className="contact__intro-bottom">
            <div className="contact__intro-bottom-left">
              <div className="contact__intro-title">
                <h1 className="contact-intro-title">
                  At Heart, I'm a designer
                </h1>
              </div>
              <div className="contact__intro-subtitle">
                <h2 className="contact-intro-subtitle">
                  I’ve been applying everything I’ve learned over the years to
                  Web Development. I’m passionate about working intimately with
                  clients and other creatives to bring ideas to life.
                </h2>
              </div>
              <div className="contact__intro-fit">
                <h3 className="contact-intro-fit">Think we'd be a good fit?</h3>
              </div>
              <div className="contact__intro-links">
                <a href="" className="contact-intro-link">
                  <img src="" alt="" className="contact-intro-img" />
                  <p className="contact-intro-detail">Instagram</p>
                </a>
                <a href="" className="contact-intro-link">
                  <img src="" alt="" className="contact-intro-img" />
                  <p className="contact-intro-detail">GitHub</p>
                </a>
                <a href="" className="contact-intro-link">
                  <img src="" alt="" className="contact-intro-img" />
                  <p className="contact-intro-detail">Linkedin</p>
                </a>
                <a href="" className="contact-intro-link">
                  <img src="" alt="" className="contact-intro-img" />
                  <p className="contact-intro-detail">Email</p>
                </a>
                <a href="" className="contact-intro-link">
                  <img src="" alt="" className="contact-intro-img" />
                  <p className="contact-intro-detail">Resume</p>
                </a>
              </div>
              <div className="contact__intro-prompt">
                <p className="contact__intro-prompt-copy"></p>
                <div className="contact-intro-prompt"></div>
              </div>
            </div>
            <div className="contact__intro-bottom-right">
              <img src="" alt="" className="contact__intro-bottom-img" />
            </div>
          </div>
        </div>
        <div className="contact__content"></div>
      </div>
    </>
  )
}
