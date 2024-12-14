import React, { useRef } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";

const App = () => {
  const pdfExportComponent = useRef<PDFExport | null>(null);

  const handleDownloadPDF = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  return (
    <div>
      <button onClick={handleDownloadPDF}>Download PDF</button>

      <PDFExport ref={pdfExportComponent}>
        <div style={{ padding: 20, fontSize: 16 }}>
          <h1>Judul Dokumen</h1>
          <p>Ini adalah contoh konten untuk diubah menjadi PDF.</p>
        </div>
      </PDFExport>
    </div>
  );
};

export default App;
