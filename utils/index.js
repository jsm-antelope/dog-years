export const humanToDogYears = (age) => {
  const earlyYears = 2 * 10.5
  const laterYears = (age - 2) * 4
  const myAgeInDogYears = earlyYears + laterYears
  return myAgeInDogYears
}
