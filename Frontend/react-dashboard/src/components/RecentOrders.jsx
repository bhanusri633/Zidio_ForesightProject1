import { useState } from "react";
import "../styles/orders.css";

function RecentOrders() {

  const orders = [
    { invoice:"536365", customer:"John Smith", country:"United Kingdom", product:"White Hanging Heart", qty:6, amount:450, status:"Delivered"},
    { invoice:"536366", customer:"David", country:"Germany", product:"Jumbo Bag Red", qty:12, amount:820, status:"Pending"},
    { invoice:"536367", customer:"Emma", country:"France", product:"Ring Purse", qty:4, amount:210, status:"Shipped"},
    { invoice:"536368", customer:"Olivia", country:"Netherlands", product:"Retro Spot Mug", qty:9, amount:670, status:"Delivered"},
    { invoice:"536369", customer:"William", country:"Australia", product:"Assorted Colour Bird", qty:5, amount:390, status:"Delivered"},
    { invoice:"536370", customer:"Sophia", country:"USA", product:"Heart Lantern", qty:8, amount:950, status:"Pending"},
    { invoice:"536371", customer:"James", country:"Canada", product:"Gift Bag", qty:10, amount:740, status:"Delivered"},
    { invoice:"536372", customer:"Charlotte", country:"Spain", product:"Tea Cup", qty:3, amount:280, status:"Shipped"},
  ];

  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [page, setPage] = useState(1);

  const rowsPerPage = 5;

  const filtered = orders
    .filter(order =>
      order.product.toLowerCase().includes(search.toLowerCase()) ||
      order.customer.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a,b)=>
      sortAsc ? a.amount-b.amount : b.amount-a.amount
    );

  const totalPages = Math.ceil(filtered.length/rowsPerPage);

  const currentOrders = filtered.slice(
    (page-1)*rowsPerPage,
    page*rowsPerPage
  );

  return (

    <div className="orders-card">

      <div className="orders-header">

        <h3>📋 Recent Orders</h3>

        <input
          className="order-search"
          placeholder="Search..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />

      </div>

      <button
        className="sort-btn"
        onClick={()=>setSortAsc(!sortAsc)}
      >
        Sort Amount {sortAsc ? "↑" : "↓"}
      </button>

      <table>

        <thead>

          <tr>
            <th>Invoice</th>
            <th>Customer</th>
            <th>Country</th>
            <th>Product</th>
            <th>Qty</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>

        </thead>

        <tbody>

          {currentOrders.map((item,index)=>(

            <tr key={index}>

              <td>{item.invoice}</td>
              <td>{item.customer}</td>
              <td>{item.country}</td>
              <td>{item.product}</td>
              <td>{item.qty}</td>
              <td>₹{item.amount}</td>

              <td>
                <span className={item.status.toLowerCase()}>
                  {item.status}
                </span>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

      <div className="pagination">

        <button
          disabled={page===1}
          onClick={()=>setPage(page-1)}
        >
          Previous
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page===totalPages}
          onClick={()=>setPage(page+1)}
        >
          Next
        </button>

      </div>

    </div>

  );
}

export default RecentOrders;