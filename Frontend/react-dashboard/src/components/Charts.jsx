import "../styles/charts.css";
import PredictionCard from "./PredictionCard";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

const COLORS = [
  "#3B82F6",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
];

function Charts({ monthly, country, products }) {
  const monthNames = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthlyData = monthly.map((item) => ({
    month: monthNames[item.Month],
    sales: item.TotalAmount,
  }));

  const countryData = country.map((item) => ({
    name: item.Country,
    value: item.TotalAmount,
  }));

  const productData = products.map((item) => ({
    product:
      item.Description.length > 15
        ? item.Description.substring(0, 15) + "..."
        : item.Description,
    sales: Number(item.Quantity),
  }));


  return (
    <div className="charts">

      {/* Monthly Sales */}

      <div className="chart-card">
        <h3>📈 Monthly Sales Trend</h3>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={monthlyData}>
            <CartesianGrid stroke="#334155" strokeDasharray="4 4" />

            <XAxis dataKey="month" stroke="#94A3B8" />

            <YAxis
              stroke="#94A3B8"
              tickFormatter={(value) =>
                `${(value / 1000000).toFixed(1)}M`
              }
            />

            <Tooltip
              formatter={(value) => [
                `₹${Number(value).toLocaleString()}`,
                "Sales",
              ]}
            />

            <Line
              type="monotone"
              dataKey="sales"
              stroke="#3B82F6"
              strokeWidth={4}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Country */}

      <div className="chart-card">
        <h3>🌍 Sales by Country</h3>

        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
              data={countryData}
              dataKey="value"
              nameKey="name"
              outerRadius={95}
              innerRadius={45}
              label ={false}
            >
              {countryData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                background: "#1E293B",
                border: "none",
                borderRadius: "10px",
                color: "white",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Top Products */}

      <div className="chart-card">
        <h3>📦 Top Products</h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={productData}>

            <XAxis dataKey="product" />

            <YAxis />

            <Tooltip
              formatter={(value) => [value.toLocaleString(), "Units Sold"]}
            />

            <Bar
              dataKey="sales"
              fill="#3B82F6"
            />

          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Prediction */}

      <div className="chart-card">
        <PredictionCard />
      </div>

    </div>
  );
}

export default Charts;