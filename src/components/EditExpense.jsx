import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { editExpense, removeExpense } from '../redux/expenses/actions'

const EditExpense = props => (
  <div>
    <h1>Edit Expense</h1>
    <ExpenseForm
      expense={ props.expense }
      onSubmit={ expense => {
        props.dispatch( editExpense( props.match.params.id, expense ))
        props.history.push('/')
      }}
    />
        <button
          onClick={ () => {
            props.dispatch( removeExpense( { id: props.match.params.id }))
            props.history.push('/')
          }}>
            Remove
        </button>
  </div>
)

const mapState = ( state, props ) => ({
  expense: state.expenses.find( expense =>
    expense.id === props.match.params.id )
})

export default connect( mapState )( EditExpense )