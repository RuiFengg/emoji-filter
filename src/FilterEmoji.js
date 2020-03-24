export default function filterEmoji(emojiList, searchText, maxResults) {
    return emojiList
        .filter(emoji => 
            emoji.unicodeName.includes(searchText) || emoji.group.includes(searchText)
             || emoji.subGroup.includes(searchText) 
                 )
                  .slice(0, maxResults)                
}