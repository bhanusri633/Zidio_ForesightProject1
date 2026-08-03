import "../styles/analyticsFilters.css";

function AnalyticsFilters() {
  return (
    <div className="analytics-filters">

      <select>
        <option>2024</option>
        <option>2023</option>
        <option>2022</option>
      </select>

      <select>
        <option>All Countries</option>
        <option>United Kingdom</option>
        <option>Germany</option>
        <option>France</option>
      </select>

      <select>
        <option>All Products</option>
        <option>White Hanging Heart</option>
        <option>Jumbo Bag Red</option>
      </select>

      <select>
        <option>All Categories</option>
        <option>Gift</option>
        <option>Decoration</option>
      </select>

    </div>
  );
}

export default AnalyticsFilters;