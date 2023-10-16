import axios from "axios"

type Props = {
  email: string;
  nickname: string;
}

export const setNickname = async({ email, nickname }: Props) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/nickname`, {
      email: email,
      nickname: nickname
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
}