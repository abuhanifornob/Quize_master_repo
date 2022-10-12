import React, { useState } from 'react'; 
import AnswerSheet from '../AnswerSheet/AnswerSheet';
import CorrectAns from '../CorrectAns/CorrectAns';
import "./QuestionsDetails.css"

const QuestionsDetails = ({questionPaper,number}) => {
  const{correctAnswer,id,options,question}=questionPaper;
  // const [chekAns,setChekAns]=useState(false);
  // const chekHandelar=async(ans)=>{
  //   if(correctAnswer===ans){
  //   setChekAns(true);
  //   }
  //   console.log(chekAns)
  // }
  console.log(questionPaper);
    return (
        <div className='question-container'>
          <div className='questionNameContainer'>
            <div className='questionName'><h3>Quis {number+1}: {question}</h3></div>
            <button className='correctAnsButton'>
          
            <div className='correatAnsIcon'>
              
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
               <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
               </svg>
  
              </div>
            </button>
            
          </div>
           
           <div className='option-container'>
           
            <AnswerSheet
            options={options}
            correctAnswer={correctAnswer}
            ></AnswerSheet>
           
           </div>
           

        </div>
    );
};

export default QuestionsDetails;