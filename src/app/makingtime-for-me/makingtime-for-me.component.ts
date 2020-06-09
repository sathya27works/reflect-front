import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/dataService';

@Component({
  selector: 'app-makingtime-for-me',
  templateUrl: './makingtime-for-me.component.html',
  styleUrls: ['./makingtime-for-me.component.css']
})
export class MakingtimeForMeComponent implements OnInit, OnDestroy {
  entries: Object[];
  dataQueryDetails: Object[];

  constructor(private httpClient: HttpClient,private router: Router,public dataservice: DataService){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8')
                      .set('Access-Control-Allow-Origin','*');
    this.httpClient.get('http://localhost:8090/quiz/makingTimeforMe',{headers: headers})
    .subscribe(
      (data:any[]) => {
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
