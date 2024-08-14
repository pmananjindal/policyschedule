// src/pages/Layout.tsx
"use client";
import React from "react";
import EditSnapshotPolicy from "./dashboard/EditSnapshotPolicy";
import PerformanceMetrics from "./dashboard/PerformanceMetrics";

const MainLayout = () => {
  const [selectedComponent, setSelectedComponent] =
    React.useState<string>("PerformanceMetrics");

  const renderContent = () => {
    switch (selectedComponent) {
      case "PerformanceMetrics":
        return <PerformanceMetrics />;
      case "EditSnapshotPolicy":
        return <EditSnapshotPolicy />;
      default:
        return <EditSnapshotPolicy />;
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Left Navigation */}
      <nav
        style={{
          width: "250px",
          backgroundColor: "#1B222B",
          padding: "20px",
          borderRight: "1px solid #ddd",
        }}
      >
        <h1 style={{ color: "white", fontSize: 24 }}>[Cluster Name]</h1>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "white",
                padding: "10px",
                textAlign: "left",
                width: "100%",
              }}
              onClick={() => setSelectedComponent("PerformanceMetrics")}
            >
              Performance Metrics
            </button>
          </li>
          <li>
            <button
              style={{
                background: "none",
                color: "white",
                border: "none",
                cursor: "pointer",
                padding: "10px",
                textAlign: "left",
                width: "100%",
              }}
              onClick={() => setSelectedComponent("EditSnapshotPolicy")}
            >
              Edit Snapshot Policy
            </button>
          </li>
        </ul>
      </nav>

      {/* Right Content Area */}
      <main
        style={{
          flex: 1,
          width: "1400px",
          padding: "20px",
          backgroundColor: "#1B222B",
          color: "white",
        }}
      >
        {renderContent()}
      </main>
    </div>
  );
};

export default MainLayout;
