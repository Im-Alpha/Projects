import { getDay } from "date-fns";
import React from "react";
import { FaClock } from "react-icons/fa6";

const StoreHours = () => {
  var week = [
    { day: "Sunday", hours: "11:00am - 8:00pm" },
    { day: "Monday", hours: "11:00am - 9:00pm" },
    { day: "Tuesday", hours: "11:00am - 9:00pm" },
    { day: "Wednesday", hours: "11:00am - 9:00pm" },
    { day: "Thursday", hours: "11:00am - 9:00pm" },
    { day: "Friday", hours: "11:00am - 9:30pm" },
    { day: "Saturday", hours: "11:00am - 9:30pm" },
  ];

  var months = [
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

  function getHoursByDay(day: String) {
    const foundDay = week.find((item) => item.day === day);
    return foundDay ? foundDay.hours : "Hours not found";
  }
  var curr_day = new Date().toLocaleDateString("en-US", { weekday: "long" });

  var hours = getHoursByDay(curr_day);

  return (
    <>
      <div className="flex flex-row gap-2 items-center justify-center">
        <div className="flex items-center justify-center gap-1">
          <FaClock />
          <span className="brightness-90 antialiased font-sans text-sm">
            Today
          </span>
        </div>
        <div className="flex brightness-90 font-sans">{hours}</div>
      </div>
    </>
  );
};
export default StoreHours;
