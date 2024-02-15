import { useQuery } from '@tanstack/react-query'
import { getWork } from '../apis/work'
import { COLORS } from './Values'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { DesWork } from '../../models/deswork'
import Nav from './Nav'
import { get } from 'superagent'

export default function Work() {
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
      <div className="work">
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
              </div>
              <div className="work__section-right">
                <div className="work__img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGVsDnCQGRM7VttPXt1VLukEYEZu0YuhdV4NpRsWxjw&s"
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
