import "../styles/filters.css";

function Filters({
  selectedPeriod,
  setSelectedPeriod,
  selectedCountry,
  setSelectedCountry,
  selectedProduct,
  setSelectedProduct,
  search,
  setSearch,
}) {
  return (
    <div className="filters">

      {/* Time Period */}
      <select
        value={selectedPeriod}
        onChange={(e) => setSelectedPeriod(e.target.value)}
      >
        <option>Last 30 Days</option>
        <option>Last 3 Months</option>
        <option>Last 6 Months</option>
        <option>Last Year</option>
      </select>

      {/* Country */}
      <select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option>All Countries</option>
        <option>United Kingdom</option>
        <option>Germany</option>
        <option>France</option>
      </select>

      {/* Product */}
      <select
        value={selectedProduct}
        onChange={(e) => setSelectedProduct(e.target.value)}
      >
        <option>All Products</option>
        <option>WHITE HANGING HEART T-LIGHT HOLDER</option>
      </select>

    </div>
  );
}

export default Filters;