import React from 'react';

// import BudgetForm from './components/BudgetForm'
import BudgetTable from './components/BudgetTable'
// import BudgetInput from './components/BudgetInput'
import TransactionForm from './components/TransactionForm';



const baseUrl = 'http://localhost:3003';
//TODO setup env file for front end
// let baseUrl;
// if (process.env.NODE_ENV === 'development') {
//   baseUrl = 'http://localhost:3000';
// } else {
//   baseUrl = 'https://peaceful-stream-27012.herokuapp.com';
// }
console.log('current base URL:', baseUrl);

//ran into error, had to hard code seed data 
class App extends React.Component {
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
      transactionForm: {
        date: "",
        payee: "",
        category: "",
        spent: 0,
      },
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
    const copyBudgets = [...this.state.budgets];
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
      [event.target.id]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(this.props.baseUrl + "/budgets/" + this.state.category, {
      method: "PUT",
      body: JSON.stringify({
        transactions: [{
          date: this.state.date,
          payee: this.state.payee,
          category: this.state.category,
          spent: this.state.spent,
        }],
      }).then(res => res.json(
      )).then(data => {
        const copyBudgets = [...this.state.budget];
        const findIndex = this.state.budget.findIndex(budget => budget.category === data.category);
        copyBudgets[findIndex].transactions.push(data.transactions);
        this.setState({budget: copyBudgets});
      })
  }

  render() {
    return (
      <div>
        <h1>Xpense App</h1>
        <TransactionForm
          baseUrl={baseUrl}
          budget={this.state.budget}
          transactionForm={this.state.transactionForm}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <BudgetTable budget={this.state.budget} />
      </div>
    )
  }
}

export default App;