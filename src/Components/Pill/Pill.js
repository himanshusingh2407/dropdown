import React from 'react';
import './Pill.css'; 

function Pill({text, onDelete}) {
    return (
        <div className="pill">
            <span className="content">{text}</span>
            <span onClick={onDelete} className="delete-pill">x</span>
        </div>
    )
}

export default Pill;