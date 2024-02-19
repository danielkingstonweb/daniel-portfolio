import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getOneWork } from '../apis/work'
import { DesWork } from '../../models/deswork'
import { Link } from 'react-router-dom'
import Nav from './Nav'

export default function SingleWork() {
  const { workId } = useParams<{ workId: string }>()

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

  if (isError) {
    return <h1>Cuh This Shit Browken</h1>
  }

  if (isLoading) {
    return <h1>Shit Comin Bro</h1>
  }

  // return <h1>{singleWork.title}</h1>
  return (
    <>
      <Nav />
      <div className="single">
        <div className="single__header">
          <h1 className="single-title">{singleWork.title}</h1>
        </div>
        <div className="single__back">
          <Link to="Work">Go Back</Link>
        </div>
        <div className="single__info">
          <div className="single__info-left">
            <div className="single__info-title">
              <h2 className="single-info-title">Project Overview</h2>
            </div>
            <div className="single__info-field">
              <p className="single-info-field"></p>
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
            </div>
            <div className="single__info-tech">
              <p className="single__info-tech">{singleWork.tools}</p>
            </div>
          </div>
          <div className="single__info-title">
            <h2 className="single-info-title">Links</h2>
          </div>
          <div className="single__info-links">
            <p className="single-link-links"></p>
          </div>
        </div>
        <div className="single_images"></div>
      </div>
    </>
  )
}
