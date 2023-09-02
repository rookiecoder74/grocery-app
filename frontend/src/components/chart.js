import React from 'react'
import "../css/chart.css";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {name:"10 day ago",Total:0},
  {name:"8 day ago",Total:100},
  {name:"6 day ago",Total:150},
  {name:"4 day ago",Total:200},
  {name:"2 day ago",Total:550},
  {name:"Today",  Total:500},
];
const chart = () => {
  return (
    <div className='chart'>
      <div className='charttitle'>Last Few Days(Revenue)</div>
       <ResponsiveContainer width="100%" aspect={2/1.2}>
       <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
</AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default chart