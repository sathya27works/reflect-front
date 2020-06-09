import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditQuizComponent } from './admin-edit-quiz.component';

describe('AdminEditQuizComponent', () => {
  let component: AdminEditQuizComponent;
  let fixture: ComponentFixture<AdminEditQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
