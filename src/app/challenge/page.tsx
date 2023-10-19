"use client"
import ChallengeSet from '@/components/common/challenge/unregistered/ChallengeSet';
import { getAllChallenge } from '@/lib/api/querys/challenge/getAllChallenge';
import { useQuery } from 'react-query';
import { AllChallenges } from '@/types/challenge/Challenge';
import Loading from '@/components/animation/Loading/Loading';
import { useSearchParams } from 'next/navigation';
import styled from 'styled-components';
import ChallengeItem from '@/components/common/challenge/registered/ChallengeItem';
import CommonError from '@/components/common/error/CommonError';

const Challenge = () => {
  const param = useSearchParams();
  const query = param.get('state');

  const { data, error, isLoading } = useQuery({
    queryKey: ['allChallenges'], 
    queryFn: async () => {
      const res = await getAllChallenge();
      const challenges: AllChallenges[] = res.challenges;
      return challenges;
    },
    staleTime: 5000,
    cacheTime: Infinity
  })
  
  if (isLoading) {
    return <Loading />
  }

  if (!isLoading &&  
    (error || data === undefined)) {
    return <CommonError msg="Fetch failed" />;
  }

  return (
    <main>
      <HomeInner>
      {query === 'application' ? (
        data.map((challenge: AllChallenges, idx: number) => {
          return (
            <div key={idx}>
              <ChallengeSet
                category={challenge.category}
                endDate={challenge.challengeEndsAt}
                id={challenge.challengeId}
                title={challenge.challengeName}
                participants={challenge.challengeParticipantsCount}
                startDate={challenge.challengeStartsAt}
                thumbnail={challenge.challengeThumbnail}
                deposit={challenge.challengeTotalDeposit}
                isRegistered={false}
              />
            </div>
          )
        })
      ) : (
        data.map((challenge: AllChallenges, idx: number) => {
          return (
            <div key={idx}>
              <ChallengeItem
                id={challenge.challengeId}
                title={challenge.challengeName}
                thumbnailUrl={challenge.challengeThumbnail}
                startDate={challenge.challengeStartsAt}
                endDate={challenge.challengeEndsAt}
                frequency={challenge.challengeVerificationFrequency}
                isRegistered={false}
              />
            </div>
          )
        })
      )}
      </HomeInner>
    </main>
  )
}

const HomeInner = styled.div`
  width: 90%;
  margin: 0 auto;
`

export default Challenge