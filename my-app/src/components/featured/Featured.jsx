import React from 'react'
import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Featured() {
  return (

    <div className="featured">
      
      <div className="top">
        
        <div className="title">TOTAL REVENUE</div>
        <MoreVertIcon className='icon'/>

      </div>

      <div className="bottom">

        <div className="featureChart">
          <CircularProgressbar value={70} text='70%' />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>

      </div>

      <div className="summary">
          
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="result positive">
              <KeyboardArrowUpIcon className="icon"/>
              <div className="resultAmount">$230.3k</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Last Week</div>
  
            <div className="result negative">
              <KeyboardArrowDownIcon className="icon"/>
              <div className="resultAmount">$100.3k</div>
            </div>
            
          </div>

          <div className="item">
            <div className="itemTitle">Last Month</div>

            <div className="result positive">
              <KeyboardArrowUpIcon className="icon"/>
              <div className="resultAmount">$50.3k</div>
            </div>

          </div>
          
        </div>

    </div>
  )
}
