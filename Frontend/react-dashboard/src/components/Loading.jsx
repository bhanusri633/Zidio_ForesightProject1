import "../styles/loading.css";

function Loading() {
  return (
    <div className="loading">

      <div className="spinner"></div>

      <h2>Loading Dashboard...</h2>

      <p>Fetching latest analytics...</p>

    </div>
  );
}

export default Loading;