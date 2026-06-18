import toast from "react-hot-toast";

import {
  generatePdfReport,
} from "../../utils/pdfReport";

function ExportPdfButton({
  user,
  stats,
  repositories,
  activities,
}) {

  const handleExport = () => {

    try {

      generatePdfReport({
        user,
        stats,
        repositories,
        activities,
      });

      toast.success(
        "PDF exported successfully"
      );

    } catch (error) {

      console.error(error);

      toast.error(
        "Failed to export PDF"
      );

    }

  };

  return (

    <button
      className="export-btn"
      onClick={handleExport}
    >

      Export PDF

    </button>

  );

}

export default ExportPdfButton;