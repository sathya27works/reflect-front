import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageReflectComponent } from './home-page-reflect.component';

describe('HomePageReflectComponent', () => {
  let component: HomePageReflectComponent;
  let fixture: ComponentFixture<HomePageReflectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageReflectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageReflectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
