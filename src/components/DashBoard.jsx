import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

export default props => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
)

