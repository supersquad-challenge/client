export const getThumbnail = (title: string) => {
  switch (title) {
    case "One meal with Salad":
      return '/default/challenge_salad.jpg';
    case "Write 3 Things to Do":
      return '/default/challenge_write.jpg';
    case "Go to GYM everyday":
      return '/default/challenge_gym.jpg';
    default :
      return '/default/challenge_diet.svg';
  }
}