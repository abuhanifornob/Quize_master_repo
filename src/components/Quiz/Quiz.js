import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Home from '../Home/Home';
import QuizTopic from '../QuizTopic/QuizTopic';
import "./Quiz.css"


const Quiz = () => {
    const quize=useLoaderData();
    const {data}=quize;
    return (
        <div>
            <Home></Home>
            <div className='topic-details'>
              {
                data.map(topic=><QuizTopic
                key={topic.id}
                topic={topic}
                ></QuizTopic>)
              }
            </div>
            
        </div>
    );
};

export default Quiz;
