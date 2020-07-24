import React, { Component } from 'react'
import BudgetInput from './BudgetInput'
import TransactionModal from './TransactionModal'


class BudgetRow extends Component {
  render () {
    return (
      <tr>
        <td>{this.props.title}</td>
        <td><BudgetInput budget={this.props.budget}/></td>
        <td>{this.props.spent}<TransactionModal transactions={this.props.transactions}/></td>
        <td>{this.props.budget-this.props.spent}</td>
      </tr>
    )
  }
}

export default BudgetRow