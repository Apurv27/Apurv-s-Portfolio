import React from "react";
import resumePDF from "../assets/Apurv_Jambhulkar_Resume.pdf";

function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Apurv_Jambhulkar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ width: "100%", margin: 0, padding: 0, textAlign: "center" }}>
      {/* Top Download Button */}
      <button
        onClick={handleDownload}
        style={{
          margin: "15px auto",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Download Resume
      </button>

      {/* Resume iframe */}
      <iframe
        src={resumePDF + "#toolbar=0&navpanes=0"}
        style={{
          width: "100%",
          height: "100vh", // full screen height
          border: "none",
        }}
        title="Resume"
      />

      {/* Bottom Download Button */}
      <button
        onClick={handleDownload}
        style={{
          margin: "15px auto",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Download Resume
      </button>
    </div>
  );
}

export default Resume;
 