import React from 'react'
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import { setDateRange, setTextFilter } from '../redux/filters/actions'
import SortButton from './SortButton'
import "react-datepicker/dist/react-datepicker.css"

const ExpenseListFilters = props => {
  return (
    <div>
      <input type="text"
        value={ props.filters.text}
        onChange={ e =>
          props.dispatch(setTextFilter( e.target.value ))}
        />
        <SortButton
          buttonName="Date"
          sortBy={ props.filters.sortBy } />
        <SortButton
          buttonName="Amount"
          sortBy={ props.filters.sortBy } />

        <>
          <DatePicker
            onChange={ value => props.dispatch(setDateRange({ startDate: value }))}
            selected={ props.filters.dateRange.startDate }
            isClearable
          />
          <DatePicker
            onChange={ value => props.dispatch(setDateRange({ endDate: value }))}
            selected={ props.filters.dateRange.endDate }
            isClearable
          />
        </>

    </div>
  )
}

const mapState = state => ({
  filters: state.filters
})

export default connect( mapState )( ExpenseListFilters )