import { Component } from '@angular/core';
import * as jsPDF from 'jspdf';
declare const $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // downloading from the xponline downloader
  public downloadPdf() {
    return xepOnline.Formatter.Format('content',{ render: 'download'});
  } // end : downloadPdf

  // download from jsPDF downloader
  downloadJSPDF() {
    debugger;
    let  doc = new jsPDF();
    doc.setFontSize(16);
    doc.addHTML($('#content')[0], 15, 15, {
      'background': '#fff',
    }, function() {
      doc.save('sample-file.pdf');
    });
  }

} // end: export
