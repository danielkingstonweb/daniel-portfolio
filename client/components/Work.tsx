import { useQuery } from '@tanstack/react-query'
import { getWork } from '../apis/work'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { CustomEase } from 'gsap/CustomEase'
import { CustomWiggle } from 'gsap/all'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { DesWork } from '../../models/deswork'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(
  MorphSVGPlugin,
  CustomEase,
  CustomWiggle,
  ScrollTrigger,
  ScrollSmoother,
)
import Nav from './Nav'
import { get } from 'superagent'
import ScrollPrompt from './ScrollPrompt'
import Grain from './Grain'
import ScrollTop from './ScrollTop'

export default function Work() {
  const [hasLoaed, setHasLoaded] = useState()

  const divTL = useRef()
  const sectionTL = useRef()
  const imgTL = useRef()
  const workScope = useRef(null)
  const smoother = useRef(null)
  const scrollArea = useRef(null)
  const {
    data: myWork,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['work'],
    queryFn: () => {
      return getWork()
    },
  })

  useGSAP(
    () => {
      if (!isLoading) {
        ScrollSmoother.create({
          smooth: 2,
          effects: true,
          normalizeScroll: true,
        })
      }
    },
    { dependencies: [myWork], scope: scrollArea },
  )

  useGSAP(
    () => {
      const lines = gsap.utils.toArray('.work-div')
      const images = gsap.utils.toArray('.work-img')
      const sections = gsap.utils.toArray('.work__section')

      // console.log(images, sections)

      sections.map((section) => {
        gsap.set(section, {
          // y: 150,
          opacity: 0,
        })

        sectionTL.current = gsap
          .timeline({
            scrollTrigger: {
              // scrub: true,
              trigger: section,
              start: 'top 400',
              toggleActions: 'play none none reverse',
              // markers: true,
            },
          })
          .to(section, {
            duration: 1,
            opacity: 1,
            ease: 'power3.out',
            // y: 0,
          })
      })

      images.map((image) => {
        gsap.set(image, {
          y: 50,
          opacity: 0,
        })

        imgTL.current = gsap
          .timeline({
            scrollTrigger: {
              // scrub: true,
              trigger: image,
              start: 'top 510',
              toggleActions: 'play none none reverse',
              // markers: true,
            },
          })
          .to(image, {
            y: 0,
            opacity: 1,
            ease: 'power3.out',
          })
      })

      lines.map((line, index) => {
        gsap.set(line, {
          scaleX: 0,
        })

        divTL.current = gsap
          .timeline({
            scrollTrigger: {
              // scrub: true,
              trigger: line,
              start: 'top 420',
              toggleActions: 'play none none reverse',
              // markers: true,
            },
          })
          .to(line, {
            scaleX: 1,
            duration: 1,
            ease: 'power1.inOut',
            transformOrigin: index % 2 === 0 ? 'left' : 'right',
          })
      })
    },

    { dependencies: [myWork], scope: workScope },
  )

  if (isError) {
    return <h1>Bruh shit BROKEN</h1>
  }

  if (isLoading) {
    return <h1>bruh shit COMIN</h1>
  }

  const getImageUrlArray = (imageUrlString: string) => {
    if (!imageUrlString) return []
    return imageUrlString.split(',').map((url) => url.trim())
  }

  const getFieldArray = (fieldString: string) => {
    if (!fieldString) return []
    return fieldString.split(',')
  }

  const workItems = myWork.map((work, index) => ({
    ...work,
    isLeft: index % 2 === 0,
  }))

  return (
    <>
      <Grain />
      <Nav />
      <div id="smooth-wrapper">
        <div id="smooth-content" ref={scrollArea}>
          <div className="work" ref={workScope}>
            <ScrollTop />
            <div className="work__header">
              <h1 className="work-heading">MY WORK</h1>
              <h2 className="work-subheading">
                A collection of work in Development & Design
              </h2>
            </div>
            <ScrollPrompt />
            <div className="work__body">
              {workItems.map((work) => (
                <Link key={work.id} to={`/Work/${work.id}`}>
                  <div
                    className={`work__section ${
                      work.isLeft ? 'left' : 'right'
                    }`}
                  >
                    <div className="work__section-left">
                      <div className="work-div work-div-top"></div>
                      <div className="work__title">
                        <h3 className="work-title ">{work.title}</h3>
                        <div className="work__subtitle">
                          {getFieldArray(work.field).map((field, index) => (
                            <h4 key={index} className="work-subtitle">
                              {field}
                            </h4>
                          ))}
                        </div>
                      </div>
                      <div className="work-div work-div-bottom"></div>
                    </div>
                    <div className="work__section-right">
                      <div className="work__img">
                        <img
                          src={getImageUrlArray(work.images)[0]}
                          alt=""
                          className="work-img"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
