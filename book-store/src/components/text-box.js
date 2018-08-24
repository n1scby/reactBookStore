import React from 'react';

const textBox = props => {
    return(
        <div className="text-box-style">
            <input type="text" className="book-text-box" value={props.value} onChange={props.change}/>
        </div>
    );
};

export default textBox;