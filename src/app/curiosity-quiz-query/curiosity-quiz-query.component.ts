import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curiosity-quiz-query',
  templateUrl: './curiosity-quiz-query.component.html',
  styleUrls: ['./curiosity-quiz-query.component.css']
})
export class CuriosityQuizQueryComponent implements OnInit {
  entries: Object[];

    constructor() {
     
    this.entries = [
      {
        queryid:"curiousityQuiz1",
        question: "A Need for Cognition is a scientific measure of intellectual curiosity. Take the quiz by answering true or false and PLACING JUST THE LETTER Y in the column you agree with"
        
      },
      {
        queryid:"curiousityQuiz1",
        question: "I would prefer complex to simple problems."
        
      }
    ];
   
  }

  ngOnInit() {
  }

}