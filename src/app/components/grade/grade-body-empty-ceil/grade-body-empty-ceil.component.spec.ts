import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeBodyEmptyCeilComponent } from './grade-body-empty-ceil.component';

describe('GradeBodyEmptyCeilComponent', () => {
  let component: GradeBodyEmptyCeilComponent;
  let fixture: ComponentFixture<GradeBodyEmptyCeilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradeBodyEmptyCeilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeBodyEmptyCeilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
