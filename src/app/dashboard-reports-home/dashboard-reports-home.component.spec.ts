import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardReportsHomeComponent } from './dashboard-reports-home.component';

describe('DashboardReportsHomeComponent', () => {
  let component: DashboardReportsHomeComponent;
  let fixture: ComponentFixture<DashboardReportsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardReportsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardReportsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
