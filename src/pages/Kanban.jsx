import React from "react";

function Kanban() {
  const kanbanData = [
    { id: 1, status: "To Do", summary: "Design login page", assignee: "Amit Sharma" },
    { id: 2, status: "In Progress", summary: "API integration", assignee: "Priya Singh" },
    { id: 3, status: "Testing", summary: "Write unit tests", assignee: "Rahul Verma" },
    { id: 4, status: "Done", summary: "Deploy to server", assignee: "Sneha Patel" },
    { id: 5, status: "To Do", summary: "Create dashboard UI", assignee: "Vikram Mehra" },
  ];
  const columns = [
    { key: "To Do", label: "To Do", color: "#fdcb6e" },
    { key: "In Progress", label: "In Progress", color: "#0984e3" },
    { key: "Testing", label: "Testing", color: "#00b894" },
    { key: "Done", label: "Done", color: "#636e72" },
  ];
  return (
    <div style={{
      background: "#fff",
      borderRadius: 16,
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      padding: 32,
      margin: "24px auto",
      maxWidth: 1200,
      minHeight: 500,
    }}>
      <h2 style={{ color: "#2d3436", marginBottom: 32, fontWeight: 700, fontSize: "2rem", letterSpacing: 1 }}>🗂️ Kanban Board</h2>
      <div style={{ display: "flex", gap: 24, justifyContent: "space-between" }}>
        {columns.map(col => (
          <div key={col.key} style={{ flex: 1, background: "#f5f6fa", borderRadius: 12, padding: 16, minHeight: 400 }}>
            <div style={{ fontWeight: 700, color: col.color, fontSize: 18, marginBottom: 16 }}>{col.label}</div>
            {kanbanData.filter(card => card.status === col.key).map(card => (
              <div key={card.id} style={{
                background: "#fff",
                borderRadius: 8,
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                padding: 16,
                marginBottom: 16,
                borderLeft: `5px solid ${col.color}`
              }}>
                <div style={{ fontWeight: 600, fontSize: 16 }}>{card.summary}</div>
                <div style={{ color: "#636e72", fontSize: 14, marginTop: 6 }}>👤 {card.assignee}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Kanban;