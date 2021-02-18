import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './router/AppRouter'
import './styles/styles.sass'

const AppRoot = document.getElementById('root')

ReactDOM.render( <AppRouter />, AppRoot )