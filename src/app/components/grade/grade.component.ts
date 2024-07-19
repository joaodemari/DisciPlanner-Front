import { Component, inject, OnInit } from '@angular/core';
import { GradeService } from '../../services/grade.service';
import { Grade } from '../../models/grade.model';
import { GradeHeaderComponent } from './grade-header/grade-header.component';
import { GradeBodyComponent } from './grade-body/grade-body.component';
import { GradeSideComponent } from './grade-side/grade-side.component';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'grade',
  standalone: true,
  imports: [GradeHeaderComponent, GradeBodyComponent, GradeSideComponent, AsyncPipe],
  templateUrl: './grade.component.html',
  styleUrl: './grade.component.css',
})
export class GradeComponent {
  
}
