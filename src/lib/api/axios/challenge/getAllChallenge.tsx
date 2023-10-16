import axios from "axios";

export const getAllChallenge = async() => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/challenge`);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  }