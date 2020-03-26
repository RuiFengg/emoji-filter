import React, { Component } from 'react'
import PropTypes from "prop-types"

export default class ListRow extends Component {
    static propTypes = {
        symbol: PropTypes.string,
        description: PropTypes.string
    }

    render() {
        const { symbol, description } = this.props
        return (
            <button 
                type="button"
                className="list-group-item d-flex justify-content-between copy-to-clipboard"
                data-clipboard-text={symbol}
            >
                {symbol}
                {description}
                <span>Click to Copy</span>
            </button>
        )
    }
}
