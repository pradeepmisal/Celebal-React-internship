import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
  LabelList
} from "recharts";

const data = [
  { state: "Maharashtra", sales: 120 },
  { state: "Uttar Pradesh", sales: 95 },
  { state: "Tamil Nadu", sales: 80 },
  { state: "West Bengal", sales: 70 },
  { state: "Gujarat", sales: 60 },
  { state: "Karnataka", sales: 55 },
  { state: "Rajasthan", sales: 50 },
];

function Charts() {
  return (
    <div style={{
      background: "#fff",
      borderRadius: "16px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      padding: "32px 24px",
      margin: "24px auto",
      maxWidth: "900px"
    }}>
      <h2 style={{ color: "#2d3436", marginBottom: "24px", fontWeight: 700, fontSize: "2rem", letterSpacing: 1 }}>📊 Statewise Sales in India</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="state" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#0984e3">
            <LabelList dataKey="sales" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Charts;