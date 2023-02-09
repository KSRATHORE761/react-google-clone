import React from 'react';
import '../pages/Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import Search from './Search';

function Home() {
  return (
    <div className='home'>
    <div className='home__header'>
    <div className='home__headerLeft'>
    {/*Links*/}
    <Link to='/about'>About</Link>
    <Link to='/store'>Store</Link>
    </div>
    <div className='home__headerRight'>
      {/*Link*/}
      <Link to='/gmail'>Gmail</Link>
      <Link to='/images'>Images</Link>
      {/*Icon*/}
      <AppsIcon></AppsIcon>
      <Avatar></Avatar>
      {/*Avatar*/}
    </div>
    </div>
    <div className='home__body'>
    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'/>
    <div className='home__inputContainer'>
      <Search/>
    </div>
    </div>
    </div>
  )
}

export default Home
