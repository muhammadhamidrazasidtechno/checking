import jsPDF from "jspdf";

type TableRow = [string, string]; // Define a type for each row
type TableRows = TableRow[]; // Define a type for the array of rows

interface PdfDownloaderProps {
  tableRows: TableRows;
  heading: string;
  saveName: string;
}

const PdfDownloader = ({
  tableRows,
  heading,
  saveName,
}: PdfDownloaderProps) => {
  const doc = new jsPDF();
  const width = doc.internal.pageSize.getWidth();

  const drawGradientRect = (
    doc: jsPDF,
    x: number,
    y: number,
    width: number,
    height: number,
    color1: string,
    color2: string
  ) => {
    const steps = 100;
    const r1 = parseInt(color1.substring(1, 3), 16);
    const g1 = parseInt(color1.substring(3, 5), 16);
    const b1 = parseInt(color1.substring(5, 7), 16);
    const r2 = parseInt(color2.substring(1, 3), 16);
    const g2 = parseInt(color2.substring(3, 5), 16);
    const b2 = parseInt(color2.substring(5, 7), 16);

    for (let i = 0; i <= steps; i++) {
      const ratio = i / steps;
      const r = Math.round(r1 + ratio * (r2 - r1));
      const g = Math.round(g1 + ratio * (g2 - g1));
      const b = Math.round(b1 + ratio * (b2 - b1));
      doc.setFillColor(r, g, b);
      doc.rect(x, y + (i * height) / steps, width, height / steps, "F");
    }
  };

  drawGradientRect(doc, 0, 10, width, 20, "#3FCF51", "#287A20");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.text(heading, width / 2, 22, { align: "center" });

  const tableColumn = ["Field", "Details"];
  const startY = 40; // Adjusted starting position for the table
  (doc as any).autoTable({
    head: [tableColumn],
    body: tableRows,
    startY: startY,
    theme: "grid",
    styles: {
      cellPadding: 5,
      fontSize: 12,
      halign: "center",
      valign: "middle",
    },
    columnStyles: {
      0: { cellWidth: 70, fontStyle: "bold" },
      1: { cellWidth: "auto" },
    },
    didDrawCell: (data: any) => {
      if (data.section === "head") {
        const gradientColor1 = "#EA3400";
        const gradientColor2 = "#FF9805";
        const x = data.cell.x;
        const y = data.cell.y;
        const width = data.cell.width;
        const height = data.cell.height;
        drawGradientRect(
          doc,
          x,
          y,
          width,
          height,
          gradientColor1,
          gradientColor2
        );
        doc.setTextColor(255, 255, 255);
        doc.text(data.cell.text, x + width / 2, y + height / 2, {
          align: "center",
          baseline: "middle",
        });
      }
    },
  });

  doc.save(`${saveName}.pdf`);
};

export default PdfDownloader;
