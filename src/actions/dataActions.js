import { FETCH, FILTER } from './types'
import axios from 'axios'

export const fetchData = () => dispatch =>
     axios.get(`https://emoji-api.com/emojis?access_key=123412341234`)
    .then(response => {
        dispatch({
            type: FETCH,
            payload: response.data
        })
})

export const filterSearch = event => dispatch =>
    dispatch({
        type: FILTER,
        payload: event
    })
    