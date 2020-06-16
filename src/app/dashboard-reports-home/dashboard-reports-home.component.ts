import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { HttpClient, HttpHeaders } from '@angular/common/http';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { reportsData } from './report-data';

@Component({
  selector: 'app-dashboard-reports-home',
  templateUrl: './dashboard-reports-home.component.html',
  styleUrls: ['./dashboard-reports-home.component.css']
})
export class DashboardReportsHomeComponent implements OnInit {
  reportsData: any;
  scoreList: Object[];
  
  constructor(private httpClient: HttpClient) { 
      this.scoreList = [{
        userName : "User1",
        firstAttmptScore : 2,
        secondAttmptScore : 7
    },
    {
        userName : "User2",
        firstAttmptScore : 3,
        secondAttmptScore : 8
    },
    {
        userName : "User3",
        firstAttmptScore : 1,
        secondAttmptScore : 6
    },
    {
        userName : "User4",
        firstAttmptScore : 4,
        secondAttmptScore : 9
    },
    {
        userName : "User5",
        firstAttmptScore : 3,
        secondAttmptScore : 7
    },
    {
        userName : "User6",
        firstAttmptScore : 2,
        secondAttmptScore : 8
    }];

    let headers = new HttpHeaders();
     headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Access-Control-Allow-Origin','*');
     this.httpClient.get('http://localhost:8010/downloadReport',{headers: headers}).subscribe(
       (data:any[]) => {             
           this.reportsData = data;
           console.log("Reports Data "+ data); 
           for (let val of data){
             console.log("Reports Data Value::: "+ val.data );
           }          
       }
     )
  }

  generatePdf(){
    const documentDefinition = {
      content: [
          { text: 'USER REPORTS TABLE', style: 'header' },
          this.docDefinition(this.reportsData, [ 'userName', 'questionNo', 'question', 'selectedAnswer', 'userScore' ])
      ]
    };
    pdfMake.createPdf(documentDefinition).download("Reports.pdf");
   }    

  buildTableBody(data, columns) {
    var body = [];
    body.push(columns);
    for (let value of data) {
      var dataRow = [];
        for (let column of columns) {
              dataRow.push(value[column]);
          }
        body.push(dataRow);
    }  
    return body;
  }

  docDefinition(data, columns) {
    return {
      table: {
          headerRows: 1,
          body: this.buildTableBody(data, columns)
      }
   };
  }

  ngOnInit(): void {
  }

}
