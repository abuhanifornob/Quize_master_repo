import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionsDetails from '../QuestionsDetails/QuestionsDetails';

const QuizDetails = () => {
    const loadQuestion=useLoaderData();
    const{questions}=loadQuestion.data;
    console.log(loadQuestion);
 
    return (
        <div>
            <h3>Quiz of {loadQuestion.data.name}</h3>
            {
               questions.map((question,index)=><QuestionsDetails
                key={question.id}
                questionSheet={question}
                number={index}
               ></QuestionsDetails>)
            }
        </div>
    );
};

export default QuizDetails;