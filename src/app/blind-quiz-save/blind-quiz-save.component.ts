import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-blind-quiz-save',
  templateUrl: './blind-quiz-save.component.html',
  styleUrls: ['./blind-quiz-save.component.css']
})
export class BlindQuizSaveComponent implements OnInit {
  newHero: string;
  website: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.newHero = this.route.snapshot.paramMap.get('newHero');
    this.website = this.route.snapshot.paramMap.get('website');
   // console.log(this.website);
  }

}
