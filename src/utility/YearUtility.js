// Formula taken from a stackoverflow post
export const getDecadeYears = (startYear, endYear) => {
  const currentYear = endYear || new Date().getFullYear();
  const years = [];
  let tempStartYear = startYear || 1980;
  while (tempStartYear <= currentYear) {
    years.push(tempStartYear);
    tempStartYear += 1;
  }
  return years;
};
