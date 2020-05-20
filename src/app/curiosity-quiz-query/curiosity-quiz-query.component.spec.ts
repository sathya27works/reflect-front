import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriosityQuizQueryComponent } from './curiosity-quiz-query.component';

describe('CuriosityQuizQueryComponent', () => {
  let component: CuriosityQuizQueryComponent;
  let fixture: ComponentFixture<CuriosityQuizQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuriosityQuizQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuriosityQuizQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
