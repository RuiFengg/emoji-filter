import { FETCH, FILTER } from '../actions/types'
import filterEmoji from '../FilterEmoji'

const initState = {
    filteredData: [],
    completeData: []
}

const dataReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH:
            return {
                ...state,
                    filteredData: filterEmoji(action.payload, "", 20),
                    completeData: action.payload
            }
        case FILTER:
            return {
                    state,
                        filteredData: filterEmoji(state.completeData, action.payload, 20),
                        completeData: state.completeData     
            }
        default:
            return state
    }
}
export default dataReducer