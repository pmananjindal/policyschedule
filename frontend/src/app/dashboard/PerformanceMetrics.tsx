// src/pages/PerformanceMetrics.tsx
import React, { useEffect, useState } from "react";
import BarChartIOPS from "../components/BarChartIOPS";
import axios from "axios";
interface IOPSData {
  date: string;
  readIOPS: number;
  writeIOPS: number;
}
interface ThroughputData {
  date: string;
  readThroughput: number;
  writeThroughput: number;
}
interface DataType {
  iopsData: IOPSData[];
  throughputData: ThroughputData[];
}
const PerformanceMetrics = () => {
  const [data, setData] = useState<DataType | null>(null);
  useEffect(() => {
    try {
      axios
        .get("http://localhost:3333/getData")
        .then((res) => {
          if (res) {
            setData(res.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);
  if (data) {
    return (
      <div>
        <h1 style={{ fontSize: 24 }}>Performance Metrics</h1>
        <BarChartIOPS
          data={data?.iopsData}
          xaxisDataKey="readIOPS"
          yaxisDataKey="writeIOPS"
          readData="21.2k IOPS"
          writeData="122.0 IOPS"
        />
        <BarChartIOPS
          data={data?.throughputData}
          xaxisDataKey="readThroughput"
          yaxisDataKey="writeThroughput"
          readData="10.3 KB/s"
          writeData="489.8 KB/s"
        />
      </div>
    );
  }
};

export default PerformanceMetrics;
