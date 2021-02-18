import React from 'react'
import { BrowserRouter, Route, Switch, useParams} from 'react-router-dom'
import Header from '../components/Header'
import Dashboard from '../components/DashBoard'
import AddExpense from '../components/AddExpense'
import EditExpense from '../components/EditExpense'
import HelpPage from '../components/HelpPage'
import NotFound from '../components/NotFound'


export default () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ Dashboard } />
        <Route path="/add" component={ AddExpense } />
        <Route path="/edit/:id" component={ EditExpense } />
        <Route path="/help" component={ HelpPage } />
        <Route component={ NotFound }/>
      </Switch>
    </div>
  </BrowserRouter>
)
