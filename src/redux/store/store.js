import { createStore, combineReducers } from 'redux'
import expensesReducer from '../expenses/reducer'
import filterReducer from '../filters/reducer'



export default () => {

  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filterReducer
    })
  )

  return store
}