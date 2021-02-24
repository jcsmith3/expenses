import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, Connect } from 'react-redux'
import AppRouter from './router/AppRouter'
import configStore from './redux/store/store'
import { addExpense, editExpense, deleteExpense } from './redux/expenses/actions'
import { setTextFilter, sortBy, setDateRange } from './redux/filters/actions'
import filteredExpenses from './redux/selectors/filteredExpenses'
import './styles/styles.sass'

const store = configStore()

store.subscribe(() => {
  const state = store.getState()
  const filtered = filteredExpenses( state.expenses, state.filters )
  // console.log(filtered)
})


store.dispatch(addExpense({ description: 'water', amount: 30, createdAt: 100 }))
store.dispatch(addExpense({ description: 'cake', amount: 520, createdAt: 8432100 }))
store.dispatch(addExpense({ description: 'food', amount: 1300, createdAt: 12341 }))


const AppRoot = document.getElementById('root')

const jsx = (
  <Provider store={ store }>
    <AppRouter />
  </Provider>
)

ReactDOM.render( jsx, AppRoot )