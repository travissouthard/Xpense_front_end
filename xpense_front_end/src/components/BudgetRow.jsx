import React, { Component } from 'react'
import BudgetInput from './BudgetInput'
import TransactionModal from './TransactionModal'


class BudgetRow extends Component {
  state = {
    transactionModalOn: false,
  }
  toggleTransactionModal = () => {
    this.setState({
      transactionModalOn: !this.state.transactionModalOn,
    })
  }
  render () {
    return (
      <tr>
        <td>{this.props.title}</td>
        <td><BudgetInput budget={this.props.budget}/></td>
        <td onClick={() => this.toggleTransactionModal()}>
          {this.props.spent}
          {this.state.transactionModalOn ? (
            <TransactionModal transactions={this.props.transactions}/>
          ) : (
            ""
          )}
        </td>
        <td>{this.props.budget-this.props.spent}</td>
      </tr>
    )
  }
}

export default BudgetRow