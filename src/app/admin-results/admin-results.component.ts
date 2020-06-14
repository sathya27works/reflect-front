import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/dataService';

@Component({
  selector: 'app-admin-results',
  templateUrl: './admin-results.component.html',
  styleUrls: ['./admin-results.component.css']
})
export class AdminResultsComponent implements OnInit {

  resultDetails: string;
  entries: Object[];
  private sub: any;
  

constructor(private http: HttpClient, private route: ActivatedRoute,public dataservice: DataService){
}

  ngOnInit(): void {
    this.entries = this.dataservice.entries; 
   
    console.log("Invoked Admin Results page"); 
    this.sub = this.route.params.subscribe(params => {
      
      console.log(this.entries);
      let headers = new HttpHeaders();
      //let body = JSON.stringify(this.entries);
    
    headers = headers.set('Access-Control-Allow-Origin','*');
      this.http.post<any>('http://localhost:8090/submitQuiz', this.entries,{headers}).subscribe(data => {
        this.resultDetails = data;
})
   });
  }

}
