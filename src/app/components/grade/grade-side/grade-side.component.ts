import { Component } from '@angular/core';
import { LinhaPeriodo } from '../../../models/periodo.model';
import { mockGrade } from '../../../mocks/mockGrade';

@Component({
  selector: 'app-grade-side',
  standalone: true,
  imports: [],
  templateUrl: './grade-side.component.html',
  styleUrl: './grade-side.component.css',
})
export class GradeSideComponent {
  linhaperiodos: LinhaPeriodo[] = mockGrade.periodosFaculdade;
}
