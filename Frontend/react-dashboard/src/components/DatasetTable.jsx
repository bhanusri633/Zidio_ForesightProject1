import "../styles/datasetTable.css";

function DatasetTable() {

  const data = [
    {
      invoice: 536365,
      product: "White Hanging Heart",
      country: "United Kingdom",
      quantity: 6,
      price: "₹450"
    },
    {
      invoice: 536366,
      product: "Jumbo Bag Red",
      country: "Germany",
      quantity: 12,
      price: "₹820"
    },
    {
      invoice: 536367,
      product: "Retro Spot Mug",
      country: "France",
      quantity: 8,
      price: "₹620"
    },
    {
      invoice: 536368,
      product: "Ring Purse",
      country: "Australia",
      quantity: 4,
      price: "₹250"
    },
    {
      invoice: 536369,
      product: "Bird Ornament",
      country: "Netherlands",
      quantity: 9,
      price: "₹730"
    }
  ];

  return (
    <div className="dataset-table">

      <h2>📋 Dataset Preview</h2>

      <table>

        <thead>
          <tr>
            <th>Invoice</th>
            <th>Product</th>
            <th>Country</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>

          {data.map((row) => (

            <tr key={row.invoice}>
              <td>{row.invoice}</td>
              <td>{row.product}</td>
              <td>{row.country}</td>
              <td>{row.quantity}</td>
              <td>{row.price}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default DatasetTable;