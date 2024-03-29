import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/dataService';

@Component({
  selector: 'app-growth-mindset-quiz',
  templateUrl: './growth-mindset-quiz.component.html',
  styleUrls: ['./growth-mindset-quiz.component.css']
})
export class GrowthMindsetQuizComponent implements OnInit, OnDestroy {
  entries: Object[];
  dataQueryDetails: Object[];

  constructor(private httpClient: HttpClient,private router: Router,public dataservice: DataService){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8')
                      .set('Access-Control-Allow-Origin','*');
    this.httpClient.get('http://localhost:8090/quiz/growthMindset',{headers: headers})
    .subscribe(
      (data:any[]) => {        
          console.log(data); 
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
