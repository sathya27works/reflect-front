import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-curiosity-quiz-query',
  templateUrl: './curiosity-quiz-query.component.html',
  styleUrls: ['./curiosity-quiz-query.component.css']
})
export class CuriosityQuizQueryComponent implements OnInit {
  entries: Object[];

  constructor(private httpClient: HttpClient){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8')
                      .set('Access-Control-Allow-Origin','*');
    this.httpClient.get('http://localhost:8090/quiz/curiosity',{headers: headers})
    .subscribe(
      (data:any[]) => {
        
          console.log("Received data"); 
          this.entries = data;
      }
    )
}
  

  ngOnInit(): void {
  }

}
