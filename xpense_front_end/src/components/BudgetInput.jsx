import React, { Component } from 'react'

class BudgetInput extends Component {
    state = {
        budget: this.props.budget.budget,
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(this.props.baseUrl + '/budgets/' + this.props.budget._id, {
            method: 'PUT',
            body: JSON.stringify({
                budget: this.state.budget,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => {
            return res.json();
        }).then(data => {
            this.props.updateBudget(data.budget);
        });
    }

    render() {
        return (
            <input 
                className="budget-input"
                type="number" id="budget"
                min="0"
                value={this.state.budget}
                onChange={ (evt) => this.handleChange(evt) }
                onBlur={ (evt) => this.handleSubmit(evt) }
            />
        )
    }
}

export default BudgetInput