import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthMindsetResultsComponent } from './growth-mindset-results.component';

describe('GrowthMindsetResultsComponent', () => {
  let component: GrowthMindsetResultsComponent;
  let fixture: ComponentFixture<GrowthMindsetResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowthMindsetResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowthMindsetResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
