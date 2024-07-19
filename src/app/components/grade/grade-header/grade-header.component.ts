import { Component, Input } from '@angular/core';
import { weekDays } from '../../../mocks/weekDaysMock';

@Component({
  selector: 'app-grade-header',
  standalone: true,
  imports: [],
  templateUrl: './grade-header.component.html',
  styleUrl: './grade-header.component.css',
})
export class GradeHeaderComponent {
  weekDays = weekDays;
}
