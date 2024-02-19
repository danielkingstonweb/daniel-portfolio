import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getOneWork } from '../apis/work'
import { DesWork } from '../../models/deswork'

export default function SingleWork() {
  const { workId } = useParams<{ workId: string }>()

  const {
    data: singleWork,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['work', workId],
    queryFn: () => getOneWork(Number(workId)),
  })

  if (isError) {
    return <h1>Cuh This Shit Browken</h1>
  }

  if (isLoading) {
    return <h1>Shit Comin Bro</h1>
  }

  // return <h1>{singleWork.title}</h1>
  return <h1>{singleWork.title}</h1>
}
