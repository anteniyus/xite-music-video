import { getDecadeYears } from "../utility/YearUtility";

export const decades = [
  {
    id: 0,
    name: "2020 & Newer",
  },
  {
    id: 1,
    name: "2010 - 2019",
  },
  {
    id: 2,
    name: "2000 - 2009",
  },
  {
    id: 3,
    name: "1990 - 1999",
  },
  {
    id: 4,
    name: "1980 - 1989",
  },
  {
    id: 5,
    name: "1970 - 1979",
  },
  {
    id: 6,
    name: "1960 - 1969",
  },
  {
    id: 7,
    name: "1950 - 1959",
  },
];

export const decadesYearsMapping = {
  0: getDecadeYears(2020),
  1: getDecadeYears(2010, 2019),
  2: getDecadeYears(2000, 2009),
  3: getDecadeYears(1990, 1999),
  4: getDecadeYears(1980, 1989),
  5: getDecadeYears(1970, 1979),
  6: getDecadeYears(1960, 1969),
  7: getDecadeYears(1950, 1959),
};
