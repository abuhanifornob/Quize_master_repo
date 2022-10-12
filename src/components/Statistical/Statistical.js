
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, XAxis, YAxis,Tooltip  } from 'recharts';
import "./Statistical.css"

const Statistical = () => {
    const quizeTopicStatistical=useLoaderData();
     const {data}=quizeTopicStatistical;
     console.log(data);
    return (
        <div className='statisticlChart'>
            <h3>Statistical Summary</h3>
            <LineChart width={600} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="total" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip></Tooltip>
  </LineChart>
        </div>
    );
};

export default Statistical;