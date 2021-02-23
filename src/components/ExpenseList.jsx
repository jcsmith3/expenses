import React from 'react'
import { connect } from 'react-redux'
import ExpenseItem from './ExpenseItem'
import { removeExpense } from '../redux/expenses/actions'
import selectExpenses from '../redux/selectors/filteredExpenses'

const ExpenseList = props => (
  <ul className="expenseList"  >
    { props.expenses.map( expense =>

      <li className="expenseItem" key={ expense.id }>
        <ExpenseItem expense={ expense } />

        <button
          onClick={ () =>
            props.dispatch( removeExpense( { id: expense.id }
            ))}>
          X
        </button>

      </li>
      )}
  </ul>
)

const mapState = state => ({
  expenses: selectExpenses(state.expenses, state.filters)
})

export default connect( mapState )( ExpenseList )
