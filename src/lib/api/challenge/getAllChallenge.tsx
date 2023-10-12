export const getAllChallenge = async() => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/challenge`, {
      cache: "no-store"
    });
    const data = res.json();
    console.log(data)
    return data;
  } catch (e) {
    console.log(e);
  }
}