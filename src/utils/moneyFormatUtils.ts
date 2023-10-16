export const thousandFormat = (money: string | number) => {
  if (money !== undefined) {
    const base = money.toString();
  
    return base.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  return 0
}

