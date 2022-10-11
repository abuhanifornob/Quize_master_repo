import React from 'react';
import "./QuizTopic.css"

const QuizTopic = ({topic}) => {
    const{name,total,id,logo}=topic;
    return (
        <div className='topic'>
            <div className='topic-logo'>
                <img src={logo} alt="" />
            </div>
            <div className='topic-information'>
              <h3>{name}</h3>

              <p>Total Question: {total}</p>
              <div className='btn-information'>
              <button className='class-btn'>Start Quiz <span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-2 h-3 btn-icon">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg></span>
 </button>
              </div>
              
            </div>
        
        </div>
    );
};

export default QuizTopic;