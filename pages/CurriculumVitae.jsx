import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "../pdf-worker";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// import curriculumPdf  from '../src/assets/curriculum/curriculum.pdf'
// pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

const CurriculumVitae = () => {
   const [file, setFile] = useState("./curriculum.pdf");
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages: nextNumPages }) {
      setNumPages(nextNumPages);
    }

	return (
		<>
			<div className="flex justify-center items-center bg-gray-200">
				<Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
					{Array.from({ length: numPages }, (_, index) => (
						<Page
							key={`page_${index + 1}`}
							pageNumber={index + 1}
							renderAnnotationLayer={false}
							renderTextLayer={false}
                     width="700"
                     renderInteractiveForms
                     
                  />
					))}
				</Document>
				<p>
					Page {pageNumber} of {numPages}
				</p>
			</div>
		</>
	);
};

export default CurriculumVitae;
