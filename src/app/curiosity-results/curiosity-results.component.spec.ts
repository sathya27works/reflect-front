import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriosityResultsComponent } from './curiosity-results.component';

describe('CuriosityResultsComponent', () => {
  let component: CuriosityResultsComponent;
  let fixture: ComponentFixture<CuriosityResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuriosityResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuriosityResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
