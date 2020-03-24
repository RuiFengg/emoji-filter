import React, { Component } from 'react'
import ListRow from './ListRow'

export default class EmojiList extends Component {
    render() {
        return (
            <ul className="list-group">
                {this.props.filteredData.map(emoji => 
                    <ListRow
                        key={emoji.slug} 
                        symbol={emoji.character} 
                        description={emoji.group}
                    />
                )}
            </ul>
        )
    }
}
