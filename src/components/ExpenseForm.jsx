import React from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

export default class ExpenseForm extends React.Component {
  constructor( props ) {
    super( props )
      this.state = {
        description: props.expense ? props.expense.description : '',
        amount: props.expense ? props.expense.amount / 100 : '',
        note: props.expense ? props.expense.note : '',
        createdAt: props.expense ? new Date(props.expense.createdAt) :  new Date(),
        error: ''
      }
  }

  handleSubmit = e => {
    e.preventDefault()

    if ( !this.state.description || !this.state.amount ) {
      const errors = []
      if ( !this.state.description ) errors.push('a description')
      if ( !this.state.amount ) errors.push('an amount')
      this.setState(() => ({ error: errors.length > 1 ? errors.join(' and ') : errors[0] }))
    }
    else this.props.onSubmit({
      description: this.state.description,
      amount: this.state.amount * 100,
      note: this.state.note,
      createdAt: Date.parse(this.state.createdAt)
    })
  }
  render () {
    return (
      <form>
        { this.state.error && <p>{`Please enter ${ this.state.error }`}</p>}
        <DatePicker
          selected={ this.state.createdAt }
          onChange={ value => value && this.setState( state => ({ ...state, createdAt: value }))}
        />
        <input
          type="text"
          placeholder="Description"
          value={ this.state.description }
          onChange={ e => this.setState( state => ({ ...state, description: e.target.value })) }
          autoFocus />

        <input
          type="text"
          value={ this.state.amount ? this.state.amount : '' }
          onChange={ e => {
            if ( e.target.value.match(/^\d*\.?\d{0,2}?$/)) {
              this.setState( state =>
                ({ ...state, amount: e.target.value })
              )
            }
          }}
          placeholder="Amount" />

        <textarea
          value={ this.state.note }
          onChange={ e => this.setState( state => ({ ...state, note: e.target.value })) }
          placeholder="Add a note for your expense" />

        <button onClick={ this.handleSubmit }>
          { this.props.expense ? 'Edit expense': 'Add expense' }
        </button>

      </form>
    )
  }
}