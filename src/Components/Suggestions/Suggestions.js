import React from 'react';
import './Suggestions.css';

function Suggestions({ data, onSelect }) {
    const suggestionList = (list) => {
        return list.map((obj) => (
            <div className="suggestion" key={obj.imdbID} onClick={() => { onSelect(obj.imdbID) }}>
                {obj.Title}
            </div>
        ))
    }
    return (
        <div className="suggestions-wrapper">
            {suggestionList(data)}
        </div>
    )
}

export default Suggestions;