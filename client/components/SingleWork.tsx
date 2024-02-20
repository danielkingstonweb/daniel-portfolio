import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getOneWork } from '../apis/work'
import { DesWork } from '../../models/deswork'
import { useEffect, useRef, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'
import Nav from './Nav'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
export default function SingleWork() {
  const { workId } = useParams<{ workId: string }>()
  const smoother = useRef()
  const scrollArea = useRef()
  const {
    data: singleWork,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['work', workId],
    queryFn: () => {
      return getOneWork(Number(workId))
    },
  })

  // const imageUrls = singleWork.images.split(',')
  const imgUrl = singleWork?.images.split(',')

  useGSAP(
    () => {
      smoother.current = ScrollSmoother.create({
        smooth: 2,
        effects: true,
        normalizeScroll: true,
      })
    },
    { dependencies: [singleWork], scope: scrollArea },
  )

  if (isError) {
    return <h1>Cuh This Shit Browken</h1>
  }

  if (isLoading) {
    return <h1>Shit Comin Bro</h1>
  }

  const getLinksArray = (linkString: string) => {
    if (!linkString) return []
    return linkString.split(',')
  }

  const getFieldArray = (fieldString: string) => {
    if (!fieldString) return []
    console.log(fieldString)

    return fieldString.replaceAll(',', ' | ')
  }

  return (
    <>
      <Nav />
      <div id="smooth-wrapper" ref={scrollArea}>
        <div id="smooth-content">
          <div className="single">
            <div className="single__header">
              <h1 className="single-title">{singleWork.title}</h1>
            </div>
            <div className="single__back">
              <Link to="/Work">Go Back</Link>
            </div>
            <div className="single__info">
              <div className="single__info-div"></div>
              <div className="single__info-left">
                <div className="single__info-title">
                  <h2 className="single-info-title">Project Overview</h2>
                </div>
                <div className="single__info-field">
                  <p className="single-info-field">
                    {getFieldArray(singleWork.field)}
                  </p>
                </div>
                <div className="single__info-description">
                  <p className="single-info-description">
                    {singleWork.description}
                  </p>
                </div>
              </div>
              <div className="single__info-div"></div>
              <div className="single__info-right">
                <div className="single__info-title">
                  <h2 className="single-info-title">Technology | Tools</h2>
                  <div className="single__info-tech">
                    <p className="single__info-tech">
                      {getFieldArray(singleWork.tools)}
                    </p>
                  </div>
                </div>
                {singleWork.links.length > 0 ? (
                  <div className="single__info-title">
                    <h2 className="single-info-title">Links</h2>
                    <div className="single__info-links">
                      <a
                        href={singleWork.links}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Git Repository
                      </a>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="single__info-scroll"></div>
            </div>
            <div className="single_imgs">
              <img src={`/` + imgUrl[0]} alt="" className="single-img" />
              <img src={`/` + imgUrl[1]} alt="" className="single-img" />
              <img src={`/` + imgUrl[2]} alt="" className="single-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
