import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Kanban from "./pages/Kanban";
import Calendar from "./pages/Calendar";
import Charts from "./pages/Charts";
import Tables from "./pages/Tables";
import RightPanel from "./components/RightPanel";

function App() {
  const [theme, setTheme] = useState("light");
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const [searchTerm, setSearchTerm] = useState("");

  const themeStyles = {
    light: {
      appBg: "#f5f6fa",
      textColor: "#22223b",
      topbarBg: "#fff",
      topbarBorder: "#e0e0e0"
    },
    dark: {
      appBg: "#23272f",
      textColor: "#f5f6fa",
      topbarBg: "#23272f",
      topbarBorder: "#333"
    },
    blue: {
      appBg: "#e3eafc",
      textColor: "#23272f",
      topbarBg: "#0984e3",
      topbarBorder: "#0984e3"
    }
  };
  const { appBg, textColor, topbarBg, topbarBorder } = themeStyles[theme];

  const handleAddUser = (e) => {
    e.preventDefault();
    if (newUser.name && newUser.email) {
      setUsers([...users, newUser]);
      setNewUser({ name: "", email: "" });
    }
  };

  const filteredUsers = users.filter(
    user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <div style={{ background: appBg, minHeight: "100vh", color: textColor }}>
        {/* Topbar */}
        <div style={{
          position: "fixed",
          left: 240,
          right: 0,
          top: 0,
          height: 64,
          background: topbarBg,
          borderBottom: `1px solid ${topbarBorder}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px 0 0",
          zIndex: 100,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 24, marginLeft: 16 }}>
            <span style={{ fontSize: 26, cursor: "pointer" }}>☰</span>
            <span style={{ fontSize: 22, cursor: "pointer" }} onClick={() => setShowModal(true)}>🔍</span>
            <select
              value={theme}
              onChange={e => setTheme(e.target.value)}
              style={{
                borderRadius: 8,
                border: "1px solid #e3eafc",
                padding: "6px 12px",
                fontSize: 15,
                fontWeight: 600,
                background: "#fff",
                color: "#23272f",
                cursor: "pointer"
              }}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="blue">Blue</option>
            </select>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <span style={{ fontSize: 22, cursor: "pointer" }}>🛒</span>
            <span style={{ fontSize: 22, cursor: "pointer" }}>💬</span>
            <span style={{ fontSize: 22, cursor: "pointer" }}>🔔</span>
            <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#f5f6fa", borderRadius: 20, padding: "4px 12px" }}>
              <img
                src="/pradeep-profile.png"
                alt="user"
                style={{ width: 32, height: 32, borderRadius: "50%", border: `2px solid #0984e3` }}
                onError={e => { e.target.onerror = null; e.target.src = "https://ui-avatars.com/api/?name=Pradeep+Misal&background=0984e3&color=fff"; }}
              />
              <span style={{ fontWeight: 600, fontSize: 15, color: "#23272f" }}>Pradeep Misal</span>
              <span style={{ fontSize: 18, color: "#636e72" }}>▼</span>
            </div>
          </div>
        </div>
        {/* Search Modal */}
        {showModal && (
          <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000
          }}>
            <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 16px rgba(0,0,0,0.15)", padding: 32, minWidth: 340, maxWidth: 400 }}>
              <h2 style={{ color: "#0984e3", marginBottom: 18 }}>Search Users</h2>
              <input
                type="text"
                placeholder="Search by name or email"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                style={{ padding: 10, borderRadius: 8, border: "1px solid #e3eafc", fontSize: 16, width: "100%", marginBottom: 16 }}
                autoFocus
              />
              <button type="button" onClick={() => setShowModal(false)} style={{ background: "#eee", color: "#23272f", border: "none", borderRadius: 8, padding: "8px 0", fontWeight: 500, fontSize: 15, cursor: "pointer", marginBottom: 16, width: "100%" }}>Close</button>
              {filteredUsers.length > 0 ? (
                <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
                  {filteredUsers.map((user, idx) => (
                    <li key={idx} style={{ padding: "6px 0", borderBottom: "1px solid #f0f0f0", fontSize: 15 }}>
                      {user.name} - {user.email}
                    </li>
                  ))}
                </ul>
              ) : (
                <div style={{ color: "#636e72", fontSize: 15 }}>No users found.</div>
              )}
            </div>
          </div>
        )}
        <Sidebar />
        <div style={{ marginLeft: 240, padding: "32px 32px 32px 32px", minHeight: "100vh", marginTop: 64, background: appBg, width: "calc(100vw - 240px)", maxWidth: "calc(100vw - 240px)", boxSizing: "border-box" }}>
          {/* Pass add user props to RightPanel for Quick Actions */}
          <Routes>
            <Route path="/" element={<Dashboard users={users} setUsers={setUsers} />} />
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/tables" element={<Tables />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;