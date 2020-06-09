import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../service/dataService';

@Component({
  selector: 'app-admin-add-quiz',
  templateUrl: './admin-add-quiz.component.html',
  styleUrls: ['./admin-add-quiz.component.css']
})
export class AdminAddQuizComponent implements OnInit {
  entries: Object[];
  dataQueryDetails: Object[];
  answerSelected: boolean;

  constructor(private httpClient: HttpClient,private router: Router,public dataservice: DataService){
    
}
  

  ngOnInit(): void {
  }


}
