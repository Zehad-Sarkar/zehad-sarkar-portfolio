import React from "react";
import { FaDownload } from "react-icons/fa";

const Download = () => {
  const resumeLink = `https://drive.google.com/file/d/110c7H5GU92At4QxYetHlUniZvnmsO9Cv/view?usp=sharing`;
  const handleDownload = () => {
    // window.open(resumeLink,'_blank')
    const link = document.createElement("a");
    link.href = resumeLink;
    link.download = "mernDeveloper.pdf";
    link.click();
  };
  return (
    <div>
      <span className="flex" onClick={handleDownload}>
        Resume
        <FaDownload />
      </span>
    </div>
  );
};

export default Download;
