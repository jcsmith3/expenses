export const setTextFilter = (value = '') => ({
  type: 'TEXT_FILTER',
  value
})

export const sortBy = ({ type, desc = true }) => ({
  type: 'SORT_BY',
  value: { type, desc }
})

export const setDateRange = ({ startDate = undefined, endDate = undefined }) => ({
  type: 'SET_DATE_RANGE',
  value: { startDate, endDate }
})
