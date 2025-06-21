import React from "react";
import RightPanel from "../components/RightPanel";

function Dashboard({ users, setUsers }) {
  return (
    <div style={{
      display: "flex",
      gap: 32,
      width: "100%",
      alignItems: "flex-start",
      flexWrap: "wrap"
    }}>
      <div style={{ flex: 2, minWidth: 0 }}>
        {/* Main dashboard cards */}
        <div style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 24,
          marginBottom: 32,
        }}>
          {/* Earnings Card */}
          <div style={{
            gridColumn: "span 2",
            background: "linear-gradient(90deg, #4f8cff 0%, #38b6ff 100%)",
            color: "#fff",
            borderRadius: 18,
            padding: 32,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            boxShadow: "0 2px 8px rgba(79,140,255,0.08)",
            minHeight: 180
          }}>
            <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 8 }}>Earnings</div>
            <div style={{ fontWeight: 900, fontSize: 32, marginBottom: 12 }}>$63,448.78</div>
            <button style={{ background: "#fff", color: "#4f8cff", border: "none", borderRadius: 8, padding: "8px 20px", fontWeight: 700, fontSize: 16, cursor: "pointer" }}>Download</button>
          </div>
          {/* Customers Card */}
          <div style={{ background: "#fff", borderRadius: 18, padding: 24, boxShadow: "0 2px 8px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", alignItems: "flex-start", minHeight: 100 }}>
            <span style={{ fontSize: 32, color: "#fbc531" }}>👥</span>
            <div style={{ fontWeight: 700, fontSize: 22, margin: "12px 0 4px 0" }}>39,354</div>
            <div style={{ color: "#636e72", fontSize: 15 }}>Customers</div>
          </div>
          {/* Products Card */}
          <div style={{ background: "#fff", borderRadius: 18, padding: 24, boxShadow: "0 2px 8px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", alignItems: "flex-start", minHeight: 100 }}>
            <span style={{ fontSize: 32, color: "#00b894" }}>📦</span>
            <div style={{ fontWeight: 700, fontSize: 22, margin: "12px 0 4px 0" }}>4,396</div>
            <div style={{ color: "#636e72", fontSize: 15 }}>Products</div>
          </div>
          {/* Sales Card */}
          <div style={{ background: "#fff", borderRadius: 18, padding: 24, boxShadow: "0 2px 8px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", alignItems: "flex-start", minHeight: 100 }}>
            <span style={{ fontSize: 32, color: "#0984e3" }}>💰</span>
            <div style={{ fontWeight: 700, fontSize: 22, margin: "12px 0 4px 0" }}>423,39</div>
            <div style={{ color: "#636e72", fontSize: 15 }}>Sales</div>
          </div>
          {/* Refunds Card */}
          <div style={{ background: "#fff", borderRadius: 18, padding: 24, boxShadow: "0 2px 8px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", alignItems: "flex-start", minHeight: 100 }}>
            <span style={{ fontSize: 32, color: "#e17055" }}>↩️</span>
            <div style={{ fontWeight: 700, fontSize: 22, margin: "12px 0 4px 0" }}>39,354</div>
            <div style={{ color: "#636e72", fontSize: 15 }}>Refunds</div>
          </div>
        </div>
      </div>
      <div style={{ flex: 1, minWidth: 320 }}>
        <RightPanel users={users} setUsers={setUsers} />
      </div>
    </div>
  );
}

export default Dashboard;