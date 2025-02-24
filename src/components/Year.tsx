import { Month } from "./Month";
import useDaysInMonth from "../hooks/useDaysInMonth";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const Year = ({ year }: { year: number }) => {
  const currentYear = year || new Date().getFullYear();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-row flex-wrap justify-center gap-4">
        {months.map((month, index) => {
          const daysInMonth = useDaysInMonth(currentYear, index);
          return (
            <Month
              key={month}
              name={month}
              days={Array.from({ length: daysInMonth }, (_, i) => i + 1)}
            />
          );
        })}
      </div>
    </div>
  );
};
