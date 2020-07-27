import React, { Component } from 'react'
import BudgetRow from './BudgetRow'

class BudgetTable extends Component {
  render () {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Category</th>
            <th scope="col" className="text-right">Budget</th>
            <th scope="col" className="text-right">Spent</th>
            <th scope="col" className="text-right">Remaining</th>
          </tr>
        </thead>
        <tbody>
        {  this.props.budget.map((budget, index)=> {
            return (
              <BudgetRow key={index} idx={index} title={budget.title} budget={budget} spent={budget.spent} transactions={budget.transactions} baseUrl={this.props.baseUrl}/>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default BudgetTable
