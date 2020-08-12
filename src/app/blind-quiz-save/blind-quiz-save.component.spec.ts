import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlindQuizSaveComponent } from './blind-quiz-save.component';

describe('BlindQuizSaveComponent', () => {
  let component: BlindQuizSaveComponent;
  let fixture: ComponentFixture<BlindQuizSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlindQuizSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlindQuizSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
