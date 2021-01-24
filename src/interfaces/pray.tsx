export interface ICardShalat {
  calcMethod?: string,
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
  selectedDate?: string,
  schedule: Array<IScheduleSalat>,
}

export interface IScheduleSalat {
    isActive: boolean,
    time: string,
    title: string,
}
