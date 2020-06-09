import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddQuizComponent } from './admin-add-quiz.component';

describe('AdminAddQuizComponent', () => {
  let component: AdminAddQuizComponent;
  let fixture: ComponentFixture<AdminAddQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
