import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeHeaderComponent } from './grade-header.component';

describe('GradeHeaderCellComponent', () => {
  let component: GradeHeaderComponent;
  let fixture: ComponentFixture<GradeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradeHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GradeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
