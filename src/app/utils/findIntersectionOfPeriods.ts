import { LinhaPeriodo } from '../models/periodo.model';

export default function findUnionOfPeriods(
  period1: LinhaPeriodo,
  period2: LinhaPeriodo
): LinhaPeriodo[] {
  const start = Math.max(period1.Inicio_minutos, period2.Inicio_minutos);
  const end = Math.min(period1.Fim_minutos, period2.Fim_minutos);

  if (start > end) {
    return [period1, period2];
  }

  return [
    {
      nome_periodo: period1.nome_periodo,
      Inicio_minutos: start,
      Fim_minutos: end,
      Dia_semana: period1.Dia_semana,
    },
  ];
}
