export const thousandFormat = (money: string | number): string => {
    const base = money.toString();  
    return base.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

