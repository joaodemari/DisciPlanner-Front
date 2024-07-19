import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeBodyCeilComponent } from './grade-body-ceil.component';

describe('GradeBodyCeilComponent', () => {
  let component: GradeBodyCeilComponent;
  let fixture: ComponentFixture<GradeBodyCeilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradeBodyCeilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeBodyCeilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
