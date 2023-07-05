import React from 'react'
import './chart.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 1500 },
  { name: "March", Total: 500 },
  { name: "April", Total: 2102 },
  { name: "May", Total: 300 },
  { name: "June", Total: 3000 },
];

export default function Chart() {

  
  return (
    <div className="chart">

    <div className="title">LAST 5 MONTH (REVENUE)</div>
    <ResponsiveContainer> 
      <AreaChart width={500} height={300} data={data}
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
        <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />


      </AreaChart>
    </ResponsiveContainer>
  
    </div>
  )
}
