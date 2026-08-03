import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function ExportExcel({ data }) {
  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Dashboard"
    );

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const file = new Blob(
      [excelBuffer],
      {
        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      }
    );

    saveAs(file, "Sales_Dashboard.xlsx");
  };

  return (
    <button
      className="export-btn"
      onClick={exportExcel}
    >
      📊 Export Excel
    </button>
  );
}

export default ExportExcel;