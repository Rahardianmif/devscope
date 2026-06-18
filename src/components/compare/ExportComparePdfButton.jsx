import {
  generateComparePdf,
} from "../../utils/comparePdfReport";

function ExportComparePdfButton({
  userA,
  userB,
  statsA,
  statsB,
}) {

  const handleExport = () => {

    generateComparePdf({
      userA,
      userB,
      statsA,
      statsB,
    });

  };

  return (
    <button
      className="export-btn"
      onClick={handleExport}
    >
      Export Compare PDF
    </button>
  );
}

export default ExportComparePdfButton;