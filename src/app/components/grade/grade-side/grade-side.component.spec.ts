import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeSideComponent } from './grade-side.component';

describe('GradeSideComponent', () => {
  let component: GradeSideComponent;
  let fixture: ComponentFixture<GradeSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradeSideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
