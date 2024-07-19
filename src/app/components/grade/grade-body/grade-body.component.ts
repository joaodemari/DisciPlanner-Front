import { Component, inject, Input, OnInit } from '@angular/core';
import { Grade } from '../../../models/grade.model';
import { GradeBodyCeilComponent } from '../grade-body-ceil/grade-body-ceil.component';
import { weekDays, weekDayStr } from '../../../mocks/weekDaysMock';
import { PeriodoTurma } from '../../../models/turma.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { GradeBodyEmptyCeilComponent } from '../grade-body-empty-ceil/grade-body-empty-ceil.component';
import { GradeService } from '../../../services/grade.service';
import { catchError, Observable, retry } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grade-body',
  standalone: true,
  imports: [GradeBodyCeilComponent, GradeBodyEmptyCeilComponent, CommonModule, AsyncPipe],
  templateUrl: './grade-body.component.html',
  styleUrl: './grade-body.component.css',
})
export class GradeBodyComponent {
  dias: weekDayStr[] = weekDays;

  constructor(private http: HttpClient) {}

  apiUrl = 'https://localhost:7132';

  getGrades(): Observable<Grade> {
    return this.http
      .get<Grade>(this.apiUrl + '/api/grade/1')
      .pipe(retry(1), catchError(this.handleError)) as Observable<Grade>;
  }

  handleError(error: any) {
    console.error(error);
    return error;
  }

  getDynamicStyles(turma: PeriodoTurma) {
    const styles = {
      'grid-column-start': turma.dia_Semana,
      'grid-row-start': turma.linha_Comeco,
      'grid-column-end': turma.dia_Semana + 1,
      'grid-row-end': turma.linha_Fim + 1,
    };
    return styles;
  }

  grade$: Observable<Grade> = this.getGrades();
}
