import { Grade } from '../models/grade.model';
import { DiaSemana } from './weekDaysMock';

export const mockGrade: Grade = {
  creditos: 32,
  nome_Aluno: 'João Pedro Tiellet Demari',
  periodosFaculdade: [
    {
      inicio: 17 * 60 + 30,
      fim: 18 * 60 + 15,
      label: '17:30 - 18:15',
      posicao_Linha: 1,
      customizedLabel: 'J',
    },
    {
      inicio: 18 * 60 + 15,
      fim: 19 * 60,
      label: '18:15 - 19:00',
      posicao_Linha: 2,
      customizedLabel: 'K',
    },
    {
      inicio: 19 * 60 + 15,
      fim: 20 * 60,
      label: '19:15 - 20:00',
      posicao_Linha: 3,
      customizedLabel: 'L',
    },
    {
      inicio: 20 * 60,
      fim: 20 * 60 + 45,
      label: '20:00 - 20:45',
      posicao_Linha: 4,
      customizedLabel: 'M',
    },
    {
      inicio: 20 * 60 + 45,
      fim: 21 * 60 + 30,
      label: '20:45 - 21:30',
      posicao_Linha: 5,
      customizedLabel: 'N',
    },
    {
      inicio: 21 * 60 + 30,
      fim: 22 * 60 + 15,
      label: '21:30 - 22:15',
      posicao_Linha: 6,
      customizedLabel: 'P',
    },
  ],
  blocosTurma: [
    {
      numero_Turma: 30,
      linha_Comeco: 1,
      linha_Fim: 2,
      nome_Disciplina: 'Aprendizado De Máquina',
      dia_Semana: DiaSemana.Terca,
    },
    {
      numero_Turma: 30,
      linha_Comeco: 1,
      linha_Fim: 2,
      dia_Semana: DiaSemana.Quinta,
      nome_Disciplina: 'Aprendizado De Máquina',
    },

    {
      numero_Turma: 31,
      linha_Comeco: 3,
      linha_Fim: 4,
      nome_Disciplina: 'Projeto E Otimização De Algoritmos',
      dia_Semana: DiaSemana.Segunda,
    },
    {
      numero_Turma: 30,
      linha_Comeco: 3,
      linha_Fim: 4,
      nome_Disciplina: 'Linguagens De Programação',
      dia_Semana: DiaSemana.Terca,
    },
    {
      linha_Comeco: 3,
      numero_Turma: 31,
      linha_Fim: 4,
      dia_Semana: DiaSemana.Quarta,
      nome_Disciplina: 'Projeto E Otimização De Algoritmos',
    },

    {
      linha_Comeco: 3,
      numero_Turma: 30,
      linha_Fim: 4,
      dia_Semana: DiaSemana.Quinta,
      nome_Disciplina: 'Linguagens De Programação',
    },
    {
      numero_Turma: 33,
      linha_Comeco: 5,
      linha_Fim: 6,
      nome_Disciplina: 'Fundamentos De Processamento Paralelo E Distribuído',
      dia_Semana: DiaSemana.Segunda,
    },
    {
      numero_Turma: 30,
      nome_Disciplina: 'Verificação E Validação De Software',
      linha_Comeco: 5,
      linha_Fim: 6,
      dia_Semana: DiaSemana.Terca,
    },
    {
      linha_Comeco: 5,
      numero_Turma: 33,
      linha_Fim: 6,
      dia_Semana: DiaSemana.Quarta,
      nome_Disciplina: 'Fundamentos De Processamento Paralelo E Distribuído',
    },

    {
      linha_Comeco: 5,
      linha_Fim: 6,
      dia_Semana: DiaSemana.Quinta,
      numero_Turma: 30,
      nome_Disciplina: 'Verificação E Validação De Software',
    },
  ],
};
