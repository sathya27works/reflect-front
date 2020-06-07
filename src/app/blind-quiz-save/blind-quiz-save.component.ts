import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-blind-quiz-save',
  templateUrl: './blind-quiz-save.component.html',
  styleUrls: ['./blind-quiz-save.component.css']
})
export class BlindQuizSaveComponent implements OnInit {
  newHero: string;
  website: string;
  url: string;
  body: any;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.newHero = this.route.snapshot.paramMap.get('newHero');
    this.website = this.route.snapshot.paramMap.get('website');
    this.url = "http://localhost:8090/submitBlindSpot"+"/"+this.newHero+"/"+this.website+"/"+"user";
     let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8')
                      .set('Access-Control-Allow-Origin','*');
    this.http.get<any>(this.url,{headers: headers})
    .subscribe(
      (data:any) => {
          console.log('>>>>>>>> '+data);
      },(error: HttpErrorResponse) => {
       console.log('>>>>>>>> '+error);
     }
    )
  }

}
