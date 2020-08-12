import React from 'react';
import './Suggestions.css';

function Suggestions({ data, onSelect }) {
    const suggestionList = (list) => {
        return list.map((obj) => (
            <div className="suggestion" key={obj.imdbID} onClick={() => { onSelect(obj.imdbID) }}>
                <div>{obj.Title}</div>
                <div className="suggestion-year">{obj.Year}</div>
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