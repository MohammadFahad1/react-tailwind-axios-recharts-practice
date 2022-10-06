import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = () => {

    const data = [
        {
            name: 'Page A',
            CQ: 4000,
            MCQ: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            CQ: 3000,
            MCQ: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            CQ: 2000,
            MCQ: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            CQ: 2780,
            MCQ: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            CQ: 1890,
            MCQ: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            CQ: 2390,
            MCQ: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            CQ: 3490,
            MCQ: 4300,
            amt: 2100,
        },
    ];

    return (
        <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="MCQ" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="CQ" stroke="#82ca9d" />
        </LineChart>
    );
};

export default Chart;