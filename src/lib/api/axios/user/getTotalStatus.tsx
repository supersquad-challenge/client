import axios from "axios";

type Props = {
  userChallengeId: string;
}

export const getTotalStatus = async({ userChallengeId }: Props) => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/myChallenge/totalStatus/${userChallengeId}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}