export interface IPrayCard {
  calcMethod?: ICalcMethod,
  pray: INextPrayTime,
  timeLeft: string,
  today?: string,
  todayHijr?: string,
}

export interface INextPrayTime {
  title: string,
  time: string,
}

export interface IPrayTable {
  dateIndex?: number,
  onChangeIndex?: (string) => () => void,
  selectedDate?: string,
  schedule: Array<IPraySchedule>,
}

export interface IPraySchedule {
  isActive: boolean,
  time: string,
  title: string,
}

export interface ICalcMethod {
  title?: string,
  value?: string,
}

export interface ILocation {
  coords?: [any, any],
  title: string,
}
