export default function validToken() {
  const date = localStorage.getItem("currentDate");
  if (!date) {
    return false;
  }
  const specificDate: Date = new Date(date);
  const currentDate: Date = new Date();
  const timeDifference: number = currentDate.getTime() - specificDate.getTime();
  const millisecondsInADay: number = 1000 * 60 * 60 * 24;
  const daysDifference: number = Math.floor(
    timeDifference / millisecondsInADay
  );

  if (daysDifference > 2) return false;
  return true;
}
