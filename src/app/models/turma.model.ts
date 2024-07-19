import { DiaSemana, weekDayStr } from '../mocks/weekDaysMock';

export interface PeriodoTurma {
  numero_Turma: number;
  nome_Disciplina: string;
  linha_Comeco: number;
  linha_Fim: number;
  dia_Semana: number;
}
