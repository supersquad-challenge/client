import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
type Props = {
  challengeId: string;
}

export const getSingleChallenge = async({ challengeId }: Props) => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/challenge/${challengeId}`);
    return res.data;
  } catch (e){
    console.log(e)
  }
}