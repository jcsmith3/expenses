import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortBy } from '../redux/filters/actions'
import SortButton from './SortButton'

const ExpenseListFilters = props => {
  return (
    <div>
      <input type="text"
        value={ props.filters.text}
        onChange={ e =>
          props.dispatch(setTextFilter( e.target.value ))}
        />
        <SortButton buttonName="Date" sortBy={ props.filters.sortBy } />
        <SortButton buttonName="Amount" sortBy={ props.filters.sortBy } />
    </div>
  )
}

const mapState = state => ({
  filters: state.filters
})

export default connect( mapState )( ExpenseListFilters )