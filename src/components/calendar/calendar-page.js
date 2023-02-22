import React, { useState } from "react";
import styles from "./calendar-page.module.css";
import CalendarNav from "./calendar-nav/calendar-nav";
import CalendarBlock from "./calendar-block/calendar-block";

function CalendarPage() {
  const [date, setDate] = useState(new Date());
  const [currentDay, setCurrentDay] = useState(new Date().getDate());

  const handlePrevClick = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    setCurrentDay(undefined);
  };

  const handleNextClick = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
    setCurrentDay(undefined);
  };

  return (
    <main className={styles.calendarPageContainer}>
      <section className={styles.calBlock}>
        <CalendarNav onPrevClick={handlePrevClick} />
        <CalendarBlock date={date} setDate={setDate} currentDay={currentDay} />
        <CalendarNav onNextClick={handleNextClick} />
      </section>
      <div className={styles.pickedDateSettings}>
        <h1 className={styles.notPickedDateText}>PICK A DATE TO ADD A TASK</h1>
      </div>
    </main>
  );
}

export default CalendarPage;
