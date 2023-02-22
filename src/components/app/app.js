import styles from "./app.module.css";
import { useState, useEffect } from "react";
import Tab from "../tab/tab";
import CurrentTime from "../current-time/current-time";
import MiniCalendar from "../calendar/calendar-page";

function App() {
  const [currentTab, setCurrentTab] = useState("To do");

  return (
    <main className={styles.back}>
      <Tab
        titles={["To do", "Calendar"]}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      {currentTab === "To do" && <CurrentTime />}
      {currentTab === "Calendar" && <MiniCalendar />}
    </main>
  );
}

export default App;
