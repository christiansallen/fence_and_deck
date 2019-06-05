import React, { Component } from "react";
import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";
import Fence from "./Fence.js";

class Pdf extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  pdf = () => {
    return (
      <div>
        <PDFDownloadLink document={<myDoc />} fileName="deckVisualizer.pdf">
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>
      </div>
    );
  };

  render() {
    const myDoc = (
      <Document>
        <Page>
          <Fence />
        </Page>
      </Document>
    );

    return this.pdf();
  }
}

export default Pdf;
