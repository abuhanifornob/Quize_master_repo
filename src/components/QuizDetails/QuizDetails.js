import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionsDetails from '../QuestionsDetails/QuestionsDetails';
import "./QuizDetails.css"

const QuizDetails = () => {
    const loadQuestion=useLoaderData();
    const{questions}=loadQuestion.data;
  
 
    return (
        <div className='quize'>
            <h3>Quiz of {loadQuestion.data.name}</h3>
            {
               questions.map((ques,index)=><QuestionsDetails
                key={ques.id}
                questionPaper={ques}
                number={index}
               ></QuestionsDetails>)
            }
        </div>
    );
};

export default QuizDetails;