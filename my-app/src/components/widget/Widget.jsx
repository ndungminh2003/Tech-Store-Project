import React from 'react'
import './widget.scss'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export default function Widget({type}) {

  let data;
  let amount = 100;
  let diff = 50;
  switch(type){

    case "user":
      data={
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <PeopleIcon className='icon'/>
      }
      break;

    case "order":
      data={
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: <ShoppingCartIcon className='icon'/>
      }
      break;

    case "earning":
      data={
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: <AttachMoneyIcon className='icon'/>
      }
      break;

    case "balance":
      data={
        title: "BALANCE",
        isMoney: true,
        link: "See detail",
        icon: <AccountBalanceIcon className='icon'/>
      }
      break;

    default:
      break;

  }


  return (
    <div className="widget">
      <div className="left">
        <div className="title">{data.title}</div>
        <div className="counter">
          {data.isMoney && "$"} {amount}
        </div>
        <div className="link">{data.link}</div>
      </div>

      <div className="right">
        <div className="percentage positive">

          <ArrowUpwardIcon />
          <span>{diff}%</span>

        </div>
        {data.icon}

      </div>
    </div>
  )

}
