import React, { useState } from 'react';
import './Calendar.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const prevMonth = () => {
    setCurrentDate((prevDate) => {
      const prevMonthDate = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1);
      return prevMonthDate;
    });
  };

  const nextMonth = () => {
    setCurrentDate((prevDate) => {
      const nextMonthDate = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1);
      return nextMonthDate;
    });
  };

  const getMonthName = (date) => {
    const options = { month: 'long', year: 'numeric' };
    return date.toLocaleDateString('uk-UA', options);
  };

  const renderWeekdays = () => {
    const weekdays = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    return weekdays.map((day) => <div className="calendar__day">{day}</div>);
  };

  const renderCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();

    const weeks = [];
    let week = [];

    for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
      week.push(<div className="calendar__day calendar__day--empty" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);

      week.push(
        <div className="calendar__day">
          {day}
          <div className="calendar__event">Подія</div>
        </div>
      );

      if (date.getDay() === 6) {
        weeks.push(<div className="calendar__week">{week}</div>);
        week = [];
      }
    }

    if (week.length > 0) {
      weeks.push(<div className="calendar__week">{week}</div>);
    }

    return weeks;
  };

  return (
    <div className="calendar">
      <div className="calendar__header">
        <button className="calendar__nav" onClick={prevMonth}>{'<'}</button>
        <div className="calendar__month">{getMonthName(currentDate)}</div>
        <button className="calendar__nav" onClick={nextMonth}>{'>'}</button>
      </div>
      <div className="calendar__weekdays">{renderWeekdays()}</div>
      <div className="calendar__days">{renderCalendarDays()}</div>
    </div>
  );
};

export default Calendar;


