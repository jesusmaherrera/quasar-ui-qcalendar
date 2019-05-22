export const calendarView = (state, view) => {
  state.calendarView = view
}
export const selectedDate = (state, date) => {
  state.selectedDate = date
}
export const locale = (state, locale) => {
  state.locale = locale
}
export const fiveDayWorkWeek = (state, b) => {
  state.fiveDayWorkWeek = b
}
export const firstDayMonday = (state, b) => {
  state.firstDayMonday = b
}
export const shortMonthLabel = (state, b) => {
  state.shortMonthLabel = b
}
export const showDayOfYearLabel = (state, b) => {
  state.showDayOfYearLabel = b
}
export const shortWeekdayLabel = (state, b) => {
  state.shortWeekdayLabel = b
}
export const shortIntervalLabel = (state, b) => {
  state.shortIntervalLabel = b
}
export const hour24Format = (state, b) => {
  state.hour24Format = b
}
export const hideHeader = (state, b) => {
  state.hideHeader = b
}
export const showMonthLabel = (state, b) => {
  state.showMonthLabel = b
}
export const showWorkWeeks = (state, b) => {
  state.showWorkWeeks = b
}
export const intervalRange = (state, r) => {
  state.intervalRange = r
}
export const intervalRangeStep = (state, step) => {
  state.intervalRangeStep = step
}
export const intervalHeight = (state, height) => {
  state.intervalHeight = height
}
export const dayHeight = (state, height) => {
  state.dayHeight = height
}
export const enableThemes = (state, b) => {
  state.enableThemes = b
}
export const theme = (state, theme) => {
  state.theme = { ...theme }
}