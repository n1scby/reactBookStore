import React from 'react';

const textBox = props => {
    return(
        <div className="text-box-style">
            <input type="text" value={props.value} onChange={props.change}/>
        </div>
    );
};

export default textBox;