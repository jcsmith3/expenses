import React from 'react'
import { connect } from 'react-redux'
import { sortBy as setSort } from '../redux/filters/actions'

const SortButton = ({ sortBy, buttonName, ...props })=> {
  const name = buttonName.toLowerCase()
  const handleSortChange = () => {

    props.dispatch(
      setSort({
        type: name,
        desc: name === sortBy.type ?
        !sortBy.desc :
        true
      }))
  }

  return (
    <button onClick={ handleSortChange }>
      {
        sortBy.desc ?
          <React.Fragment>
            <span>{`${ name }`}</span>
            {
              name === sortBy.type &&
              <span>{`${String.fromCharCode('8659')}`}</span>
            }
          </React.Fragment> :
          <React.Fragment>
            <span>{`${ name }`}</span>
            {
            name === sortBy.type &&
            <span>{`${String.fromCharCode('8657')}`}</span>
            }
          </React.Fragment>
      }
    </button>
  )
}

export default connect()( SortButton )