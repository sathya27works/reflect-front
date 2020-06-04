import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-growth-mindset-quiz',
  templateUrl: './growth-mindset-quiz.component.html',
  styleUrls: ['./growth-mindset-quiz.component.css']
})
export class GrowthMindsetQuizComponent implements OnInit {
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
