import dayjs from 'dayjs'

export default (expenses, { text, sortBy, dateRange }) => {
  return expenses
    .filter(expense => {
      const startDateMatch = dateRange.startDate ? dayjs( expense.createdAt ).isAfter( dateRange.startDate ) : true
      const endDateMatch = dateRange.endDate ? dayjs( expense.createdAt ).isBefore( dateRange.endDate ) : true
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase())
      return startDateMatch && endDateMatch && textMatch
    })
    .sort((a, b) => {
      switch (sortBy.type) {
        case 'date':
          if (sortBy.desc) return a.createdAt < b.createdAt ? 1 : -1
          else if (!sortBy.desc) return a.createdAt < b.createdAt ? -1 : 1
          else return 0

        case 'amount':
          if (sortBy.desc) return a.amount < b.amount ? 1 : -1
          else if (!sortBy.desc) return a.amount < b.amount ? -1 : 1
          else return 0
      }
    })
}
