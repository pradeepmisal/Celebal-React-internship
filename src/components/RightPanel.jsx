import React, { useState } from "react";

function RightPanel({ users, setUsers }) {
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  const handleAddUser = (e) => {
    e.preventDefault();
    if (newUser.name && newUser.email) {
      setUsers([...users, newUser]);
      setNewUser({ name: "", email: "" });
    }
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 24,
      width: "100%"
    }}>
      {/* Insights Card */}
      <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.08)", padding: 24 }}>
        <h3 style={{ color: "#0984e3", fontWeight: 700, fontSize: 18, marginBottom: 12 }}>Insights</h3>
        <div style={{ display: "flex", gap: 24 }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontWeight: 700, fontSize: 22 }}>₹1,20,000</div>
            <div style={{ color: "#636e72", fontSize: 14 }}>Revenue</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontWeight: 700, fontSize: 22 }}>32</div>
            <div style={{ color: "#636e72", fontSize: 14 }}>Active Users</div>
          </div>
        </div>
      </div>
      {/* Recent Activity */}
      <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.08)", padding: 24 }}>
        <h3 style={{ color: "#0984e3", fontWeight: 700, fontSize: 18, marginBottom: 12 }}>Recent Activity</h3>
        <ul style={{ padding: 0, margin: 0, listStyle: "none", color: "#636e72", fontSize: 15 }}>
          <li style={{ marginBottom: 8 }}>✔️ Order #1234 completed</li>
          <li style={{ marginBottom: 8 }}>📝 Feedback from Priya Singh</li>
          <li style={{ marginBottom: 8 }}>👤 New user: Rahul Verma</li>
          <li>💬 Chat started with Sneha Patel</li>
        </ul>
      </div>
      {/* User Stats */}
      <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.08)", padding: 24 }}>
        <h3 style={{ color: "#0984e3", fontWeight: 700, fontSize: 18, marginBottom: 12 }}>User Stats</h3>
        <div style={{ display: "flex", gap: 24 }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontWeight: 700, fontSize: 22 }}>7</div>
            <div style={{ color: "#636e72", fontSize: 14 }}>Tasks Done</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontWeight: 700, fontSize: 22 }}>15</div>
            <div style={{ color: "#636e72", fontSize: 14 }}>Messages</div>
          </div>
        </div>
      </div>
      {/* Quick Actions Panel with Add User */}
      <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.08)", padding: 24, display: "flex", flexDirection: "column", gap: 12 }}>
        <h3 style={{ color: "#0984e3", fontWeight: 700, fontSize: 18, marginBottom: 12 }}>Quick Actions</h3>
        <form onSubmit={handleAddUser} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={e => setNewUser({ ...newUser, name: e.target.value })}
            style={{ padding: 8, borderRadius: 8, border: "1px solid #e3eafc", fontSize: 15 }}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={e => setNewUser({ ...newUser, email: e.target.value })}
            style={{ padding: 8, borderRadius: 8, border: "1px solid #e3eafc", fontSize: 15 }}
            required
          />
          <button type="submit" style={{ background: "#0984e3", color: "#fff", border: "none", borderRadius: 8, padding: "10px 0", fontWeight: 600, fontSize: 16, cursor: "pointer" }}>Add User</button>
        </form>
      </div>
    </div>
  );
}

export default RightPanel;
