import { useQuery } from '@tanstack/react-query'
import { getWork } from '../apis/work'
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { CustomEase } from 'gsap/CustomEase'
import { CustomWiggle } from 'gsap/all'
import { DesWork } from '../../models/deswork'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(MorphSVGPlugin, CustomEase, CustomWiggle, ScrollTrigger)
import Nav from './Nav'
import { get } from 'superagent'

export default function Work() {
  const [hasLoaed, setHasLoaded] = useState()

  const divTL = useRef()
  const sectionTL = useRef()
  const workScope = useRef()

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

  const { contextSafe } = useGSAP(
    () => {
      const lines = gsap.utils.toArray('.work-div')
      const images = gsap.utils.toArray('.work-img')
      const sections = gsap.utils.toArray('.work__section')
      console.log(images, sections)

      sections.map((section, index) => {
        gsap.set(section, {
          y: 150,
          opacity: 0,
        })

        sectionTL.current = gsap
          .timeline({
            scrollTrigger: {
              // scrub: true,
              trigger: section,
              start: 'top 450',
              toggleActions: 'play none none reverse',
              markers: true,
            },
          })
          .to(section, {
            duration: 1,
            opacity: 100,
            ease: 'power3.out',
            y: -100,
          })

        images.map((image, index) => {})

        lines.map((line, index) => {
          gsap.set(line, {
            scaleX: 0,
          })

          divTL.current = gsap
            .timeline({
              scrollTrigger: {
                // scrub: true,
                trigger: line,
                start: 'top 450',
                toggleActions: 'play none none reverse',
                markers: true,
              },
            })
            .to(line, {
              scaleX: 1,
              duration: 1,
              ease: 'power1.inOut',
              transformOrigin: index % 2 === 0 ? 'left' : 'right',
            })
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
      <Nav />
      <div className="work" ref={workScope}>
        <div className="work__header">
          <h1 className="work-heading">MY WORK</h1>
          <h2 className="work-subheading">
            A collection of work in Development & Design
          </h2>
        </div>
        <div className="work__body">
          {workItems.map((work) => (
            <div
              key={work.id}
              className={`work__section ${work.isLeft ? 'left' : 'right'}`}
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
          ))}
        </div>
      </div>
    </>
  )
}
