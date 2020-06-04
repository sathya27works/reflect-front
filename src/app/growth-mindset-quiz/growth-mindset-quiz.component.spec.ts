import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthMindsetQuizComponent } from './growth-mindset-quiz.component';

describe('GrowthMindsetQuizComponent', () => {
  let component: GrowthMindsetQuizComponent;
  let fixture: ComponentFixture<GrowthMindsetQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowthMindsetQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowthMindsetQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
