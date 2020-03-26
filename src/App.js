import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import SearchInput from './components/SearchInput'
import EmojiList from './components/EmojiList'
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends Component {

  render() {
    return (
        <div className="container">
          <div className="row justify-content-center">
            
            <h3>
            Emoji Filter
            <FontAwesomeIcon icon={faFilter} />
            </h3>
          </div>
          <SearchInput/>
          <EmojiList/>
        </div>
    )
  }
}

export default App;
