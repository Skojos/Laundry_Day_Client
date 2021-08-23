import React from "react";
import Calendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

const CalendarView = () => {
  return (
    <div className="px-5 pt-5">
      <Calendar
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        allDaySlot={false}
        locale="sv"
        weekNumbers={true}
        weekText="V"
        fixedWeekCount={false}
        firstDay={1}
        nowIndicator={true}
        allDaySlot={false}
        scrollTime="07:00:00"
        headerToolbar={{
          start: "timeGridWeek,timeGridDay",
          center: "title",
          end: "today prev,next",
        }}
        buttonText={{
          today: "Idag",
          month: "Månad",
          week: "Vecka",
          day: "Dag",
          list: "Lista",
        }}
        businessHours={[
          {
            daysOfWeek: [1, 2, 3, 4, 5],
            startTime: "07:00:00",
            endTime: "20:00:00",
          },
          {
            daysOfWeek: [6],
            startTime: "08:00:00",
            endTime: "16:00:00",
          },
        ]}
      />
    </div>
  );
};

export default CalendarView;
