import React from 'react';
import './home.scss';
import SideBar from '../../components/sidebar/SideBar';
import NavBar from '../../components/navbar/NavBar';


const Home = () => {
  return (
    <div className='home'>
      <SideBar />
      <div className="container">
        container
      </div>
    </div>
  )
}

export default Home;