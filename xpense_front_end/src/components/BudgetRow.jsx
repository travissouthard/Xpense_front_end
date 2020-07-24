import React, { Component } from 'react'
import BudgetInput from './BudgetInput'


class BudgetRow extends Component {
  render () {
    return (
              <tr key={this.props.index}>
                <td>{this.props.title}</td>
                <td><BudgetInput budget={this.props.budget}/></td>
                <td>{this.props.spent}</td>
                <td>{this.props.budget-this.props.spent}</td>
              </tr>
    )
  }
}

export default BudgetRow