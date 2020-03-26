import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { filterSearch } from '../actions/dataActions'
import { connect } from 'react-redux'

class SearchInput extends Component {
    static propTypes = {
        textChange: PropTypes.func
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
                            onChange={event => this.props.filterSearch(event.target.value)}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    filteredData: state.filteredData,
    CompleteData: state.CompleteData
})


export default connect(mapStateToProps, {filterSearch})(SearchInput)
