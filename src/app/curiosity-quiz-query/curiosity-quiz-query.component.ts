import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/dataService';

@Component({
  selector: 'app-curiosity-quiz-query',
  templateUrl: './curiosity-quiz-query.component.html',
  styleUrls: ['./curiosity-quiz-query.component.css']
})
export class CuriosityQuizQueryComponent implements OnInit, OnDestroy {
  entries: Object[];
  dataQueryDetails: Object[];
  answerSelected: boolean;

  constructor(private httpClient: HttpClient,private router: Router,public dataservice: DataService){
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
  ngOnDestroy() {
    this.dataservice.entries = this.entries; 
 }

}
