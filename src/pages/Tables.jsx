import React from "react";
import { useTable } from "react-table";

function Tables() {
  const data = React.useMemo(
    () => [
      { name: "Amit Sharma", email: "amit.sharma@example.com", role: "Admin" },
      { name: "Priya Singh", email: "priya.singh@example.com", role: "Editor" },
      { name: "Rahul Verma", email: "rahul.verma@example.com", role: "Viewer" },
      { name: "Sneha Patel", email: "sneha.patel@example.com", role: "Editor" },
      { name: "Vikram Mehra", email: "vikram.mehra@example.com", role: "Admin" },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: "Name", accessor: "name" },
      { Header: "Email", accessor: "email" },
      { Header: "Role", accessor: "role" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div style={{
      background: "#fff",
      borderRadius: 16,
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      padding: 32,
      margin: "24px auto",
      maxWidth: 900
    }}>
      <h2 style={{ color: "#0984e3", marginBottom: 24, fontWeight: 700, fontSize: "2rem", letterSpacing: 1 }}>📋 Team Members</h2>
      <table {...getTableProps()} style={{ border: "1px solid #eee", width: "100%", marginTop: "20px", borderRadius: 8, overflow: "hidden", background: "#fafbfc" }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} style={{ background: "#f5f6fa" }}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} style={{ padding: "14px 10px", border: "1px solid #eee", fontWeight: 700, color: "#636e72", fontSize: 16, background: "#f5f6fa" }}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} style={{ padding: "12px 10px", border: "1px solid #eee", fontSize: 15, color: "#2d3436" }}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Tables;