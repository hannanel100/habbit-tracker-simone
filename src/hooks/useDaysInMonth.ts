import { useState, useEffect } from 'react';

const useDaysInMonth = (year: number, month: number) => {
  const [daysInMonth, setDaysInMonth] = useState(0);

  useEffect(() => {
    const calculateDaysInMonth = () => {
      return new Date(year, month + 1, 0).getDate();
    };

    setDaysInMonth(calculateDaysInMonth());
  }, [year, month]);

  return daysInMonth;
};

export default useDaysInMonth;
