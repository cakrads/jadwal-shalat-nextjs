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
