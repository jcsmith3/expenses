import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortBy } from '../redux/filters/actions'

const ExpenseListFilters = props => {

  const sortOptions = [
    { type: 'date', desc: true, text: 'Date', code: '8659' },
    { type: 'date', desc: false, text: 'Date', code: '8657' },
    { type: 'amount', desc: true, text: 'Amount', code: '8659' },
    { type: 'amount', desc: false, text: 'Amount', code: '8657' }
  ]

  const setSortBy = ({ type, desc })=> {
    props.dispatch(sortBy({ type, desc }))
  }

  return (
    <div>
      <input type="text"
        value={ props.filters.text}
        onChange={ e =>
          props.dispatch(setTextFilter( e.target.value ))}
        />

        <select
          onChange={ e => setSortBy( JSON.parse(e.target.value ))}>

        { sortOptions.map( ( option, i ) => (

          <option key={ i }
            value={ JSON.stringify( option )}>
            { `${option.text} ${String.fromCharCode(option.code)}`}
          </option>

        ))}
        </select>

    </div>
  )
}



const mapState = state => ({
  filters: state.filters
})

export default connect( mapState )( ExpenseListFilters )