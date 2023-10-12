import axios from "axios";

type Props = {
  userId: string;
  challengeId: string;
}

export const setChallenge = async({ userId, challengeId }: Props) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/myChallenge/register`, {
      userInfoId: userId,
      challengeId: challengeId
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
}