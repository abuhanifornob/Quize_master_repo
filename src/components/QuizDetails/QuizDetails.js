import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionsDetails from '../QuestionsDetails/QuestionsDetails';

const QuizDetails = () => {
    const loadQuestion=useLoaderData();
    const{questions}=loadQuestion.data;
  
 
    return (
        <div>
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