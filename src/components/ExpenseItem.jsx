import React from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'

export default ({ expense })=> (
    <div className="expenseItem__card">
        <Link to={`/edit/${expense.id}`}>
          <h3>{ expense.description }</h3>
        </Link>
        <div className="expenseItem__details">
          <p>{ dayjs(expense.createdAt).format('MM/DD/YYYY') }</p>
          <p>${ expense.amount/100 }</p>
        </div>
    </div>
)