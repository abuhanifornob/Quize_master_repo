import React from 'react';

import "./AnswerSheet.css"

const AnswerSheet = ({option}) => {
    console.log(option)
    return (
       
            <div className='option'>
        <input type="checkbox" name="item" id="item" />
        <label htmlFor="item">{option}</label>
    </div>

       
    );
};

export default AnswerSheet;