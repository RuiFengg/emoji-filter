import React, { Component } from 'react'

export default class SearchInput extends Component {

    handleChange = event => {
        this.props.textChange(event)
    }

    render() {
        return (
            <div>
                <input 
                    className="form-control" 
                    type="text" 
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}
