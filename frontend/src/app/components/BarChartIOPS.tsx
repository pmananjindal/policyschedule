import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartIOPS = ({
  data,
  xaxisDataKey,
  yaxisDataKey,
  readData,
  writeData,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div style={{ width: "700px" }}>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey={xaxisDataKey}
              stroke="#AB7EDD"
              activeDot={{ r: 8 }}
              strokeWidth={2}
              isAnimationActive={true}
              animationDuration={500}
            />
            <Line
              type="monotone"
              dataKey={yaxisDataKey}
              stroke="#0098BD"
              strokeWidth={2}
              isAnimationActive={true}
              animationDuration={500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div
        style={{
          width: "250px",
          textAlign: "left",
          paddingLeft: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <span style={{ fontSize: "24px" }}>Read</span>
          <span
            style={{ marginLeft: "10px", fontSize: "20px", color: "#AB7EDD" }}
          >
            {readData}
          </span>
          {/* <span style={{ marginLeft: "10px", color: "#888", fontSize: "18px" }}>
            / 21.8%
          </span> */}
        </div>
        <div>
          <span style={{ fontSize: "24px" }}>Write</span>
          <span
            style={{ marginLeft: "10px", fontSize: "20px", color: "#0098BD" }}
          >
            {writeData}
          </span>
          {/* <span style={{ marginLeft: "10px", color: "#888", fontSize: "18px" }}>
            / 56.4%
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default BarChartIOPS;
