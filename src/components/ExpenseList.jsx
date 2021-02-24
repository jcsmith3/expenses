import React from 'react'
import { connect } from 'react-redux'
import ExpenseItem from './ExpenseItem'
import selectExpenses from '../redux/selectors/filteredExpenses'

const ExpenseList = props => (
  <ul className="expenseList"  >
    { props.expenses.map( expense =>

      <li className="expenseItem" key={ expense.id }>
        <ExpenseItem expense={ expense } />
      </li>

      )}
  </ul>
)

const mapState = state => ({
  expenses: selectExpenses(state.expenses, state.filters)
})

export default connect( mapState )( ExpenseList )
