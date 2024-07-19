import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PeriodoTurma } from '../../../models/turma.model';

@Component({
  selector: 'app-grade-body-ceil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grade-body-ceil.component.html',
  styleUrl: './grade-body-ceil.component.css',
})
export class GradeBodyCeilComponent {
  @Input()
  ceilData!: PeriodoTurma;

  constructor() {
    console.log('GradeBodyCeilComponent created', this.ceilData);
  }
}
