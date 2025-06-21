import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import RightPanel from "../components/RightPanel";

function CalendarPage() {
  const [value, setValue] = useState(new Date());
  const events = [
    { date: new Date(2025, 5, 22), title: "Project Meeting with Amit Sharma" },
    { date: new Date(2025, 5, 23), title: "Code Review with Priya Singh" },
    { date: new Date(2025, 5, 24), title: "Client Call with Rahul Verma" },
    { date: new Date(2025, 5, 25), title: "Deployment by Sneha Patel" },
  ];
  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const event = events.find(
        (e) =>
          e.date.getFullYear() === date.getFullYear() &&
          e.date.getMonth() === date.getMonth() &&
          e.date.getDate() === date.getDate()
      );
      return event ? (
        <div style={{ color: "#fff", background: "#0984e3", borderRadius: 4, padding: "2px 4px", fontSize: 12, marginTop: 2 }}>
          {event.title}
        </div>
      ) : null;
    }
    return null;
  };
  return (
    <div style={{ display: "flex", gap: 32, width: "100%", alignItems: "flex-start", flexWrap: "wrap" }}>
      <div style={{ flex: 2, minWidth: 0 }}>
        <div style={{
          width: "100%",
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          padding: "32px 24px",
          margin: "24px 0"
        }}>
          <h2 style={{ color: "#0984e3", marginBottom: "24px", fontWeight: 700, fontSize: "2rem", letterSpacing: 1 }}>📅 Calendar Page</h2>
          <Calendar
            onChange={setValue}
            value={value}
            tileContent={tileContent}
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div style={{ flex: 1, minWidth: 320 }}>
        <RightPanel />
      </div>
    </div>
  );
}

export default CalendarPage;