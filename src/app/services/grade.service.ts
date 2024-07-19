import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mockGrade } from '../mocks/mockGrade';
import { Grade } from '../models/grade.model';
import { catchError, Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GradeService {
  constructor(private http: HttpClient) {}

  apiUrl = 'https://localhost:7132';

  getGrade() {
    return this.http.get<Grade>(this.apiUrl + '/api/grade/1').pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    console.error(error);
    return error;
  }
}
