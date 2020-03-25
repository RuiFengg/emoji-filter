import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class SearchInput extends Component {
    static propTypes = {
        textChange: PropTypes.func
    }

    handleChange = event => {
        this.props.textChange(event)
    }

    render() {
        return (
            <div className="card card-body my-3">
                <form>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                        </div>
                        <input
                            className="form-control" 
                            type="text" 
                            placeholder="Enter Keyword"
                            onChange={this.handleChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
