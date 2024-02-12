import { useQuery } from '@tanstack/react-query'
import { getWork } from '../apis/work'
import { COLORS } from './Values'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { DesWork } from '../../models/deswork'
import Nav from './Nav'

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

  // const filteredWork = myWork.filter((work) => work)

  return (
    <>
      <div className="work">
        <div className="work__header">
          <h1 className="work-heading">MY WORK</h1>
        </div>
      </div>
    </>
  )
}
