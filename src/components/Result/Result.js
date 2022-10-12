import React from 'react'; 
import "./Result.css"

const Result = ({option,checkHandeler}) => {
    return (
        <div className='options'>
             <div className="option" >
        <label class="container" onClick={()=>checkHandeler(option)}>{option}
            <input type="radio" checked="checked" name="radio"/>
            <span class="checkmark"></span>
     </label>
    </div>
        </div>
    );
};

export default Result;