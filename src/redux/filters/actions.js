export const setTextFilter = (value = '') => ({
  type: 'TEXT_FILTER',
  value
})

export const sortBy = ({ type, desc = true }) => ({
  type: 'SORT_BY',
  value: { type, desc }
})

export const setDateRange = value => ({
  type: 'SET_DATE_RANGE',
  value
})
