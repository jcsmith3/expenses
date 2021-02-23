import React from 'react'

export default ({ expense })=> (
    <div className="expenseItem__card">
      <h3>{ expense.description }</h3>
      <div className="expenseItem__details">
        <p>{ expense.createdAt }</p>
        <p>${ expense.amount/100 }</p>
      </div>
    </div>
)