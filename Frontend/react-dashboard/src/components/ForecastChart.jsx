import "../styles/forecast.css";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function ForecastChart() {
  const data = [
    { month: "Jan", actual: 900000, forecast: 950000 },
    { month: "Feb", actual: 850000, forecast: 900000 },
    { month: "Mar", actual: 1200000, forecast: 1180000 },
    { month: "Apr", actual: 980000, forecast: 1010000 },
    { month: "May", actual: 1210000, forecast: 1250000 },
    { month: "Jun", actual: 1190000, forecast: 1220000 },
    { month: "Jul", actual: 1160000, forecast: 1180000 },
    { month: "Aug", actual: 1210000, forecast: 1260000 },
    { month: "Sep", actual: 1710000, forecast: 1760000 },
    { month: "Oct", actual: 1920000, forecast: 1960000 },
    { month: "Nov", actual: 2290000, forecast: 2330000 },
    { month: "Dec", actual: 1580000, forecast: 1700000 },
  ];

  return (
    <div className="forecast-card">

      <h3>📈 Forecast vs Actual Sales (2025)</h3>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Line
            type="monotone"
            dataKey="actual"
            name="Actual Sales"
            stroke="#3B82F6"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="forecast"
            name="Forecast"
            stroke="#22C55E"
            strokeWidth={3}
            strokeDasharray="8 5"
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

export default ForecastChart;