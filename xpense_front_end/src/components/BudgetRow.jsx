import React, { Component } from 'react'
import BudgetInput from './BudgetInput'


class BudgetRow extends Component {
  render () {
    return (
              <tr key={this.props.index}>
                <td>{this.props.budget.title}</td>
                <td><BudgetInput budget={this.props.budget.budget}/></td>
                <td>{this.props.budget.spent}</td>
                <td>{this.props.budget.budget-this.props.budget.spent}</td>
              </tr>
    )
  }
}

export default BudgetRow