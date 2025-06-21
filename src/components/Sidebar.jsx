import React from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Dashboard", icon: "🏠" },
  { to: "/kanban", label: "Kanban", icon: "🗂️" },
  { to: "/calendar", label: "Calendar", icon: "📅" },
  { to: "/charts", label: "Charts", icon: "📊" },
  { to: "/tables", label: "Tables", icon: "📋" },
];

function Sidebar() {
  const location = useLocation();
  return (
    <aside style={{
      width: 240,
      height: "100vh",
      background: "#fff",
      color: "#23272f",
      padding: "24px 0 0 0",
      position: "fixed",
      left: 0,
      top: 0,
      boxShadow: "2px 0 16px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      borderRight: "1px solid #e3eafc"
    }}>
      <div style={{ marginBottom: 36, fontWeight: 900, fontSize: 28, letterSpacing: 1, color: "#23272f", paddingLeft: 32 }}>
        <span style={{ color: "#0984e3", fontWeight: 900, fontSize: 32 }}>●</span> <span style={{fontWeight: 900}}>Admin</span>
      </div>
      <nav style={{ width: "100%" }}>
        <ul style={{ listStyle: "none", padding: 0, width: "100%" }}>
          {navLinks.map((link) => (
            <li key={link.to} style={{ margin: "10px 0" }}>
              <Link
                to={link.to}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: location.pathname === link.to ? "12px 32px" : "12px 32px",
                  color: location.pathname === link.to ? "#fff" : "#23272f",
                  background: location.pathname === link.to ? "#0984e3" : "transparent",
                  borderRadius: 10,
                  fontWeight: 600,
                  textDecoration: "none",
                  fontSize: 16,
                  boxShadow: location.pathname === link.to ? "0 2px 8px rgba(9,132,227,0.08)" : undefined,
                  transition: "all 0.2s"
                }}
              >
                <span style={{ fontSize: 20 }}>{link.icon}</span> {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;