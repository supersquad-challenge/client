import axios from "axios";

type Props = {
  email: string;
  address: string;
}

export const setAddress = async({ email, address }: Props) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/address`, {
      email: email,
      address: address
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
}