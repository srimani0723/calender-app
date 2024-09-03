import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import "./index.css";

const CalendarView = (props) => {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  const changeDate = (e) => {
    setDate(e);
  };

  const handleClick = () => {
    const url = `/events/${date.toISOString().split("T")[0]}`;
    navigate(url);
  };

  return (
    <div className="calendar-view">
      <h1 className="h1">Calender</h1>
      <Calendar onChange={changeDate} onClickDay={handleClick} value={date} />
    </div>
  );
};

export default CalendarView;
