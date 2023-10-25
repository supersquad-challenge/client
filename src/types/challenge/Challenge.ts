export type AllChallenges = {
  category: string;
  challengeEndsAt: string;
  challengeId: string;
  challengeName: string;
  challengeParticipantsCount: number;
  challengeStartsAt: string;
  challengeStatus: string;
  challengeThumbnail: string;
  challengeTotalDeposit: number;
  challengeVerificationFrequency: string; 
}

export type SingleChallenges = {
  challengeEndsAt: string;
  challengeId: string;
  challengeName: string;
  challengeParticipantsCount: number;
  challengeStartsAt: string;
  challengeThumbnail: string;
  challengeTotalDeposit: number;
  challengeVerificationFrequency: string;
  challengeVerificationMethod: string;
  cryptoYield: number;
  poolAddress: string;
  description: string;
}

export type ParsedDesc = {
  text: string
  type: 'T' | 'D'
}

export type ChallengeDetail = {
  _id: string;
  category: string;
  challengeName: string;
  joinChallengeStartsAt: string;
  joinChallengeEndsAt: string;
  challengeStartsAt: string;
  challengeEndsAt: string;
  challengeStatus: string;
  challengeVerificationFrequency: string;
  challengeTotalVerificationNum: number;
  challengeRequiredCompleteNum: number;
  challengeMaxParticipants: number;
  challengeParticipantsCount: number
  challengeVerificationMethod: string;
  challengeCashDeposit: number;
  cashSuccessPool: number;
  cashFailPool: number;
  challengeCryptoDeposit: number;
  cryptoSuccessPool: number;
  cryptoFailPool: number;
  challengeTotalDeposit: number
  defiPool: string
  cryptoYield: number;
  description: string;
  challengeThumbnail: string;
  __v: number;
}