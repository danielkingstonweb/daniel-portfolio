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
    queryKey: ['all_work'],
    queryFn: () => {
      return getWork()
    },
  })


}
