import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { toast } from "react-toastify";

function ExportPDF() {

  const downloadPDF = async () => {

    const dashboard = document.querySelector(".main-content");

    const canvas = await html2canvas(dashboard, {
      scale: 2,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();

    const pdfHeight =
      (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      pdfWidth,
      pdfHeight
    );

    pdf.save("SalesForecastDashboard.pdf");

    toast.success("PDF exported successfully!");

  };

  return (
    <button
      className="export-btn"
      onClick={downloadPDF}
    >
      📄 Export PDF
    </button>
  );
}

export default ExportPDF;