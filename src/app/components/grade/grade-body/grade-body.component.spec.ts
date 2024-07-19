import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeBodyComponent } from './grade-body.component';

describe('GradeBodyComponent', () => {
  let component: GradeBodyComponent;
  let fixture: ComponentFixture<GradeBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradeBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
