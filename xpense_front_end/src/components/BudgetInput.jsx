import React, { Component } from 'react'

class BudgetInput extends Component {
    
    render() {
        return (
            <input 
                className="budget-input"
                type="number" id="budget"
                min="0"
                value={this.props.budget.budget}
                onChange={(evt) => this.props.handleChange(evt)}
                onBlur={(evt) => this.props.handleBudgetValueChange(evt, this.props.budget._id, this.props.index)}
            />
        )
    }
}

export default BudgetInput