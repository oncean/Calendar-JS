import moment from 'moment'
export const buildCurrentMonth = (current: string | Date) => {
  const result = []
  const today = moment(current)
  const startDay = moment(today).startOf('month')
  const endDay = moment(today).endOf('month')
  const indexDay = moment(startDay).day(0)
  let currentType = 0

  for (let i = 0; i < 42; i++) {
    if (indexDay.isBefore(startDay)) {
      currentType = 0
    } else if (indexDay.isAfter(endDay)) {
      currentType = 2
    } else {
      currentType = 1
    }
    result.push({
      date: indexDay.format(),
      day: indexDay.date(),
      weekDay: indexDay.day(),
      type: currentType
    })
    indexDay.add(1, 'days')
  }
  return result
}