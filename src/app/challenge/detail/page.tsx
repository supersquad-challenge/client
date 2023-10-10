"use client"
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

const Detail = () => {
  const [challengeId, setChallengeId] = useState<string | null>(null);
  const params = useSearchParams();
  
  useEffect(() => {
    setChallengeId(params.get('id'));
  }, []);

  return (
    <main>
      {challengeId}
    </main>
  )
}

export default Detail