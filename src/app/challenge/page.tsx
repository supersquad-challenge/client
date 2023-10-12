import { getAllChallenge } from '@/lib/api/challenge/getAllChallenge'
import React from 'react'

const Challenge = async () => {
  const { challenges } = await getAllChallenge();

  console.log(challenges)
  return (
    <main>
      {challenges.map((chal: any) => {
        <div key={chal.challengeId}>{chal.challengeId}</div>
      })}
    </main>
  )
}

export default Challenge