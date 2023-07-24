import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOverviewComponent } from './section-overview.component';

describe('SectionOverviewComponent', () => {
  let component: SectionOverviewComponent;
  let fixture: ComponentFixture<SectionOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionOverviewComponent]
    });
    fixture = TestBed.createComponent(SectionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
