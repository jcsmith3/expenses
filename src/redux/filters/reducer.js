import dayjs from 'dayjs'

const filterState = {
  text: '',
  sortBy: { type: 'date', desc: true },
  dateRange: {
    startDate: dayjs().startOf('month')['$d'],
    endDate: dayjs().endOf('month')['$d']
  }
}

export default (state = filterState, action) => {
  switch (action.type) {
    case 'TEXT_FILTER':
      return { ...state, text: action.value }
    case 'SORT_BY':
      return { ...state, sortBy: action.value }
    case 'SET_DATE_RANGE':
      return { ...state, dateRange: { ...state.dateRange, ...action.value } }

    default:
      return state
  }
}
