import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-curiosity-results',
  templateUrl: './curiosity-results.component.html',
  styleUrls: ['./curiosity-results.component.css']
})
export class CuriosityResultsComponent implements OnInit {

  resultDetails: Object[];
  
  constructor(private httpClient: HttpClient){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8')
                      .set('Access-Control-Allow-Origin','*');
    this.httpClient.get('http://localhost:8090/quiz/curiosity',{headers: headers})
    .subscribe(
      (data:any[]) => {
          console.log("Received Curiosity Result data"); 
          this.resultDetails = data;
          
      }
    )
}

  ngOnInit(): void {
  }

  submitQuiz(event: any){
    console.log('submitting quiz answers');
    this.resultDetails = event;
  }
}
