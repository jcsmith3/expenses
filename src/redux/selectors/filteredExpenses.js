
export default (expenses, { text, sortBy, dateRange }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof dateRange.startDate !== 'number' ||
        expense.createdAt >= dateRange.startDate
      const endDateMatch =
        typeof dateRange.endDate !== 'number' ||
        expense.createdAt <= dateRange.endDate
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
