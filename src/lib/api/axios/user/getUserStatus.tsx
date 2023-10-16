import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();
type Props = {
  userChallengeId: string;
}

export const getUserStatus = async({ userChallengeId }: Props) => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/myChallenge/myStatus/${userChallengeId}`);
    return res.data;
  } catch (e) {
    console.log(e)
  }
}