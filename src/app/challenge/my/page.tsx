"use client"
import Loading from '@/components/animation/Loading/Loading';
import ChallengeItem from '@/components/common/challenge/registered/ChallengeItem';
import ChallengeSet from '@/components/common/challenge/unregistered/ChallengeSet';
import CommonError from '@/components/common/error/CommonError';
import { getAllChallengeByUserId } from '@/lib/api/axios/user/getAllChallengeByUserId';
import { UserChallengeInfo } from '@/types/user/User';
import { useSearchParams } from 'next/navigation'
import { useQuery } from 'react-query';
import styled from 'styled-components';

const MyChallenge = () => {
  const param = useSearchParams();
  const query = param.get('state');
  const userId = localStorage.getItem('supersquad');
  const { data, error, isLoading } = useQuery({
    queryKey: ['allMyChallenges'], 
    queryFn: async () => {
      const res = await getAllChallengeByUserId({
        userId: userId || ''
      });
      const userChallenge = res.challengeInfo;
      return userChallenge;
    },
    staleTime: 5000,
    cacheTime: Infinity
  });

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
        data.map((challenge: UserChallengeInfo, idx: number) => {
          return (
            <div key={idx}>
              <ChallengeSet
                category={challenge.category}
                endDate={challenge.challengeEndsAt}
                id={challenge.userChallengeId}
                title={challenge.challengeName}
                participants={challenge.challengeParticipantsCount}
                startDate={challenge.challengeStartsAt}
                thumbnail={challenge.challengeThumbnail}
                deposit={challenge.challengeTotalDeposit}
                isRegistered={true}
              />
            </div>
          )
        })
      ) : (
        data.map((challenge: UserChallengeInfo, idx: number) => {
          return (
            <div key={idx}>
              <ChallengeItem
                id={challenge.userChallengeId}
                title={challenge.challengeName}
                thumbnailUrl={challenge.challengeThumbnail}
                startDate={challenge.challengeStartsAt}
                endDate={challenge.challengeEndsAt}
                frequency={challenge.challengeVerificationFrequency}
                isRegistered={true}
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

export default MyChallenge