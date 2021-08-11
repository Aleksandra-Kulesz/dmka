import React, { useState } from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

export function Pdf(props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    return (
        <div className="pdf">
            <a href={props.docs}>
                <Document
                    file={props.docs}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
            </a>
            <div>
                <p>
                    Strona {pageNumber || (numPages ? 1 : '--')} z {numPages || '--'}
                </p>
                {numPages === 1 ? null : <><button
                    type="button"
                    disabled={pageNumber <= 1}
                    onClick={previousPage}
                >
                    Poprzednia
                </button>
                    <button
                        type="button"
                        disabled={pageNumber >= numPages}
                        onClick={nextPage}
                    >
                        Następna
                    </button></>}
            </div>
        </div>
    );
}