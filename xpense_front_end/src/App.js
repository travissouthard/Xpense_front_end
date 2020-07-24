import React from 'react';

import BudgetForm from './components/BudgetForm'
import BudgetTable from './components/BudgetTable'
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

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      budgets: []
    }
  }


  getBudget = () => {
    fetch(baseUrl + '/').then(res => {
      console.log(baseUrl)
      return res.json();
    }).then(data => {
      this.setState({
        budgets: data
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

  render() {
    return (
      <div>
<<<<<<< HEAD
        <BudgetForm baseUrl={baseUrl} addBudget={this.addBudget}/>
        <BudgetTable budgets={this.state.budgets} />
=======
        <h1>Xpense App</h1>
        <TransactionForm budget={this.state.budget}/>
        <BudgetTable budget={this.state.budget} />
>>>>>>> 959c62f780b07f640cdf99e8e2bf3fe5a4491fad
      </div>
    )
  }
}

export default App;