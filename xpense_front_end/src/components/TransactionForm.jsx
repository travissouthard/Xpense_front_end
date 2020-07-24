import React, { Component } from 'react'

export default class TransactionForm extends Component {
    state = {
        date: "",
        payee: "",
        category: "",
        spent: 0,
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
                const copyBudgets = [...this.props.budget];
                const findIndex = this.props.budget.findIndex(budget => budget.category === data.category);
                copyBudgets[findIndex].transactions.push(data.transactions);
                this.setState({budget: copyBudgets})
            })
        })
    }
    render() {
        return (
            <form>
                <label htmlFor="date">Date: 
                    <input
                        onChange={(event) => this.handleChange(event)}
                        type="date"
                        id="date"
                        name="date"
                        value={this.state.date}
                    />
                </label>
                <label htmlFor="payee">Payee: 
                    <input onChange={(event) => this.handleChange(event)} type="text" id="payee" name="payee" value={this.state.payee}/>
                </label>
                <label htmlFor="category">Category: 
                    <input onChange={(event) => this.handleChange(event)} type="text" id="category" name="category" value={this.state.category}/>
                </label>
                <label htmlFor="spent">Spent: 
                    <input onChange={(event) => this.handleChange(event)} type="number" id="spent" name="spent" value={this.state.spent}/>
                </label>
                <input type="submit" value="Add Transaction" />
            </form>
        )
    }
}
