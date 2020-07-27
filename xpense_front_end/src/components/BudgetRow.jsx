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
  sumTransactions = (array) => {
    let sum = 0;
    array.map(transaction => sum += Number(transaction.spent));
    return sum;
  }
  updateBudgetValue = (budgetValue) => {
    this.setState({
      budget: budgetValue
    })
  }
  render () {
    return (
      <tr className={this.props.idx%2===0 ?'tr-even':'tr-odd'}>
        <td>{this.props.title}</td>
        <td className= "budget text-right"><BudgetInput idx={this.props.idx} budget={this.props.budget} updateBudget={this.updateBudgetValue} baseUrl={this.props.baseUrl}/></td>
        <td className="text-right" onClick={() => this.toggleTransactionModal()}>
          {this.sumTransactions(this.props.transactions)}
          {this.state.transactionModalOn ? (
            <TransactionModal transactions={this.props.transactions}/>
          ) : (
            ""
          )}
        </td>
        <td className="text-right">{this.props.budget.budget-this.sumTransactions(this.props.transactions)}</td>
      </tr>
    )
  }
}

export default BudgetRow