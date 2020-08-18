import React from 'react';
import './Suggestions.css';

function Suggestions({ data, onSelect, selectedIndex }) {
    const suggestionList = (list) => {
        return list.map((obj, index) => (
            <div className={`suggestion ${selectedIndex === index? ' selected': ''}`} key={obj.imdbID} onClick={() => { onSelect(obj.imdbID, index) }}>
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