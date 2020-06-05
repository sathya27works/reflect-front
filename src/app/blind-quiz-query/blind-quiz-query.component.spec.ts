import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlindQuizQueryComponent } from './blind-quiz-query.component';

describe('BlindQuizQueryComponent', () => {
  let component: BlindQuizQueryComponent;
  let fixture: ComponentFixture<BlindQuizQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlindQuizQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlindQuizQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
