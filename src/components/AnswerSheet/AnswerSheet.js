import React, { useState } from 'react';
import Result from '../Result/Result';

import "./AnswerSheet.css"

const AnswerSheet = ({options,correctAnswer}) => {
    console.log(options);
    const [chekAns,setCheckAns]=useState(false);
    const checkHandeler=async(selectOption)=>{
        if(selectOption===correctAnswer){
            setCheckAns(true)
        }
        else{
            setCheckAns(false)
        }
    }
    
    console.log(chekAns);
    return (
       <div>
        {
            options.map((option,index)=><Result
             key={index}
             option={option}
             checkHandeler={checkHandeler}
             result={chekAns}
            ></Result>)
        }
       </div>
       
    );
};

export default AnswerSheet;