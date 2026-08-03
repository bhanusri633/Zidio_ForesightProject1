import "../styles/datasetStats.css";
import {
  FaDatabase,
  FaTable,
  FaGlobe,
  FaBoxOpen,
  FaCheckCircle,
  FaCopy
} from "react-icons/fa";

function DatasetStats() {
  return (
    <div className="dataset-stats">

      <div className="dataset-card">
        <FaDatabase className="dataset-icon"/>
        <h4>Total Records</h4>
        <h2>541,909</h2>
      </div>

      <div className="dataset-card">
        <FaTable className="dataset-icon"/>
        <h4>Columns</h4>
        <h2>8</h2>
      </div>

      <div className="dataset-card">
        <FaGlobe className="dataset-icon"/>
        <h4>Countries</h4>
        <h2>38</h2>
      </div>

      <div className="dataset-card">
        <FaBoxOpen className="dataset-icon"/>
        <h4>Products</h4>
        <h2>4,070</h2>
      </div>

      <div className="dataset-card">
        <FaCheckCircle className="dataset-icon"/>
        <h4>Quality Score</h4>
        <h2>98%</h2>
      </div>

      <div className="dataset-card">
        <FaCopy className="dataset-icon"/>
        <h4>Duplicates</h4>
        <h2>5,268</h2>
      </div>

    </div>
  );
}

export default DatasetStats;