import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakingtimeForMeComponent } from './makingtime-for-me.component';

describe('MakingtimeForMeComponent', () => {
  let component: MakingtimeForMeComponent;
  let fixture: ComponentFixture<MakingtimeForMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakingtimeForMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakingtimeForMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
