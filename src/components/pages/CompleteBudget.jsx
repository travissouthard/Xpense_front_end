import React, { Component } from 'react'
//import BudgetForm from '../../components/BudgetForm';
import BudgetTable from '../BudgetTable';
//import BudgetInput from './components/BudgetInput';
import TransactionForm from '../TransactionForm';

const baseUrl = 'http://localhost:3003';
//TODO setup env file for front end
// let baseUrl;
// if (process.env.NODE_ENV === 'development') {
//   baseUrl = 'http://localhost:3000';
// } else {
//   baseUrl = 'https://peaceful-stream-27012.herokuapp.com';
// }
console.log('current base URL:', baseUrl);

export default class CompleteBudget extends Component {

  constructor(props) {
    super(props)
    this.state = {
      budget: [{
        title: "Gas",
        budget: 10,
        spent: 6,
        transactions: [],
      },
      {
        title: "Food",
        budget: 0,
        spent: 0,
        transactions: [],
      },
      {
        title: "Lodging",
        budget: 0,
        spent: 0,
        transactions: [],
      },
      {
        title: "Entertainment",
        budget: 0,
        spent: 0,
        transactions: [],
      },
      {
        title: "Shopping",
        budget: 0,
        spent: 0,
        transactions: [],
      },
      {
        title: "Car rental",
        budget: 0,
        spent: 0,
        transactions: [],
      },
      {
        title: "Misc.",
        budget: 0,
        spent: 0,
        transactions: [],
      }],
      date: "",
      payee: "",
      category: "",
      spent: 0,
      transactionFormOn: false,
    }
  }

  getBudget = () => {
    fetch(baseUrl + '/').then(res => {
      // console.log(baseUrl)
      return res.json();
    }).then(data => {
      this.setState({
        budget: data
      });
    });
  }

  addBudget = (newBudget) => {
    const copyBudgets = [...this.state.budget];
    copyBudgets.push(newBudget);
    this.setState({
      budgets: copyBudgets,
    });
  }

  componentDidMount() {
    this.getBudget();
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(baseUrl + "/budgets/" + this.state.category, {
      method: "PUT",
      body: JSON.stringify({
        date: this.state.date,
        payee: this.state.payee,
        category: this.state.category,
        spent: this.state.spent,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => res.json(
      )).then(data => {
        const copyBudgets = [...this.state.budget];
        const findIndex = this.state.budget.findIndex(budget => budget._id === data._id);
        copyBudgets[findIndex] = data;
        this.setState({
          budget: copyBudgets,
          date: "",
          payee: "",
          category: "",
          spent: 0,
          transactionFormOn: false,
        });
      }).catch(error => console.error({"Error": error}))
    this.getBudget()
  }

  toggleTransactionForm = () => {
    this.setState({
      transactionFormOn: !this.state.transactionFormOn,
      date: "",
      payee: "",
      category: "",
      spent: 0,
    })
  }
    render() {
        return (
            <div>
                {this.state.transactionFormOn ? (
          <TransactionForm
            baseUrl={baseUrl}
            budget={this.state.budget}
            date={this.state.date}
            payee={this.state.payee}
            category={this.state.category}
            spent={this.state.spent}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            toggleTransactionForm={this.toggleTransactionForm}
          />
          ) : (
            <button className="form-button" onClick={() => this.toggleTransactionForm()}>Add New Transaction</button>
          )}
        <BudgetTable budget={this.state.budget} />
            </div>
        )
    }
}
