import { Component, Input } from '@angular/core';
import { mockGrade } from '../mocks/mockGrade';

@Component({
  selector: 'app-profile-information',
  standalone: true,
  imports: [],
  templateUrl: './profile-information.component.html',
  styleUrl: './profile-information.component.css',
})
export class ProfileInformationComponent {
  @Input()
  nome_aluno: string = mockGrade.nome_Aluno;

  faculdade: string = 'PUCRS - Pontifícia Universidade Católica do Rio Grande do Sul';

  curso: string = 'Engenharia de Software';

  creditos: number = mockGrade.creditos;
}
