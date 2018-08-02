#Description
This is demo for converting HTML content into PDF.The demo is achieved using following:
#1.jsPDF 
#2.xepOnline plugin

## 1. jsPDF 
Steps:
1. Download jsPDF from NPM
    npm install jspdf --save
   Include Dev dependency
    npm install @types/jspdf --save -dev
   Include /jspdf.min.js into your application's index.html
   you will get the file from https://github.com/MrRio/jsPDF/blob/master/dist/jspdf.min.js
2. In the app.component.html
  ```
      <button (click)="downloadJSPDF()">Download from jsPDF </button>
  ```
    & In app.component.ts mention the code to convert and download the PDF.
 ```
 
        let  doc = new jsPDF();
        doc.setFontSize(16);
        doc.addHTML($('#content')[0], 15, 15, {
        'background': '#fff',
        }, function() {
        doc.save('sample-file.pdf');
        });
   ```  
for more visit: https://rawgit.com/MrRio/jsPDF/master/

###2.xepOnline plugin 
Steps:
    1. Import jQuery 3.2.1 in the index.html
    2. Import http://www.cloudformatter.com/Resources/Pages/CSS2Pdf/Script/xepOnline.jqPlugin.js in the index.html
    3. In the typing.d.ts file of your project
```
    declare var xepOnline:any;
```
    4.In app.component.html
```
    <button (click)="downloadPdf()">Download from xepOnline </button>
```
    5.In app.component.ts
```
    public downloadPdf() {
    return xepOnline.Formatter.Format('content',{ render: 'download'});
  }
```

# HtmlPDF

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Hopefully you will find this demo useful.