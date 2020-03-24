import React, { Component } from 'react'

export default class ListRow extends Component {
    render() {
        const { symbol, description } = this.props
        return (
            <li className="list-group-item">
                <span>{symbol}</span>
                <span>{description}</span>
            </li>
        )
    }
}
