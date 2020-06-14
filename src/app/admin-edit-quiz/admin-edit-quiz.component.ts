import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../service/dataService';

@Component({
  selector: 'app-admin-edit-quiz',
  templateUrl: './admin-edit-quiz.component.html',
  styleUrls: ['./admin-edit-quiz.component.css']
})
export class AdminEditQuizComponent implements OnInit {

  entries: Object[];
  dataQueryDetails: Object[];
  answerSelected: boolean;
  selectedgroup: any

  constructor(private httpClient: HttpClient,public dataservice: DataService){
   
}

getQuizTypeDetails(){
  console.log(this.selectedgroup)
  
  let headers = new HttpHeaders();
  headers = headers.set('Content-Type', 'application/json; charset=utf-8')
                    .set('Access-Control-Allow-Origin','*');
  this.httpClient.get('http://localhost:8090/quiz/'+this.selectedgroup,{headers: headers})
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
