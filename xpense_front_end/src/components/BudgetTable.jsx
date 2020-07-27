import React, { Component } from 'react'
import BudgetRow from './BudgetRow'

class BudgetTable extends Component {
  render () {
    return (
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Budget</th>
            <th>Spent</th>
            <th>Remaining</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {  this.props.budget.map((budget, index)=> {
            return (
                <BudgetRow
                  key={index}
                  title={budget.title}
                  budget={budget}
                  spent={budget.spent}
                  transactions={budget.transactions}
                  baseUrl={this.props.baseUrl}
                  deleteCategory={this.props.deleteCategory}
                  deleteTransaction={this.props.deleteTransaction}
                />
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default BudgetTable
