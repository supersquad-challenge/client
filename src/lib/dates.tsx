export function daysBetweenDates(rawDate1: string, rawDate2: string) {
  const date1 = new Date(rawDate1);
  const date2 = new Date(rawDate2);

  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const durationWeeks = Math.floor(diffDays / 7) + 1;
  let weekOrWeeks = '';
  if (durationWeeks == 1) {
    weekOrWeeks = 'week';
  } else if (durationWeeks > 1) {
    weekOrWeeks = 'weeks';
  }

  return `${durationWeeks} ${weekOrWeeks}`;
}

export function convertIsoDateToReadable(str: string) {
  // "2023-10-05"와 같은 형식의 문자열에서 날짜 객체를 생성
  const date = new Date(str);

  // 월, 일 정보를 가져옴
  const month = date.toLocaleString('en-US', { month: 'short' });
  const day = date.getDate();

  // 일(day)에 해당하는 접미사를 결정 (예: "st", "nd", "rd", "th")
  let suffix = 'th';
  if (day % 10 === 1 && day !== 11) {
    suffix = 'st';
  } else if (day % 10 === 2 && day !== 12) {
    suffix = 'nd';
  } else if (day % 10 === 3 && day !== 13) {
    suffix = 'rd';
  }

  // 최종 형식을 만듦 (예: "Oct 5th")
  return `${month} ${day}${suffix}`;
}
