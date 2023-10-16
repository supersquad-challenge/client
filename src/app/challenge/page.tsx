"use client"
import ChallengeSet from '@/components/common/challenge/unregistered/ChallengeSet';
import { getAllChallenge } from '@/lib/api/axios/challenge/getAllChallenge';
import { useQuery } from 'react-query';
import React, { useEffect } from 'react'

const Challenge = () => {

  useEffect(() =>{
    console.log(getAllChallenge());
  }, [])
  // const { data, error, isLoading } = useQuery({
  //   queryKey: ['allChallenges'], 
  //   queryFn: async () => {
  //     const res = await getAllChallenge();
  //     return res;
  //   }
  // })

  return (
    <main>
      Hello, World
      <ChallengeSet />
    </main>
  )
}

export default Challenge