import React from 'react'; 
import AnswerSheet from '../AnswerSheet/AnswerSheet';
import "./QuestionsDetails.css"

const QuestionsDetails = ({questionSheet,number}) => {
  const{correctAnswer,id,options,question}=questionSheet;
  console.log(questionSheet);
    return (
        <div className='question-container'>
           <h3>Quis {number+1}: {question}</h3>
           <div className='option-container'>
           {
            options.map((option,index)=><AnswerSheet
            key={index}
            option={option}
            ></AnswerSheet>)
           }
           </div>
           

        </div>
    );
};

export default QuestionsDetails;