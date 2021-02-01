export interface ICardShalat {
  calcMethod?: ICalcMethod,
  shalat: INextPrayTime,
  timeLeft: string,
  today?: string,
  todayHijr?: string,
}

export interface INextPrayTime {
  title: string,
  time: string,
}

export interface ITableSalat {
  dateIndex?: number,
  onChangeIndex?: (string) => () => void,
  selectedDate?: string,
  schedule: Array<IScheduleSalat>,
}

export interface IScheduleSalat {
  isActive: boolean,
  time: string,
  title: string,
}

export interface ICalcMethod {
  title?: string,
  value?: string,
}
