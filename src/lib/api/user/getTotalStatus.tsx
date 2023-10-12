import axios from "axios";

type Props = {
  userId: string;
}

export const getTotalStatus = async({ userId }: Props) => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/myChallenge/totalStatus/:${userId}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}