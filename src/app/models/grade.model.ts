import { LinhaPeriodo } from './periodo.model';
import { PeriodoTurma as BlocoTurma } from './turma.model';

export interface Grade {
  creditos: number;
  nome_Aluno: string;
  periodosFaculdade: LinhaPeriodo[];
  blocosTurma: BlocoTurma[];
}
