import React, { useState } from 'react';
import '../pages/Search.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import { useSelect } from '@mui/base';
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Search({hideButtons=false}) {
  const[{},dispatch] = useStateValue();
  const navigate = useNavigate();
  const [input,setInput]= useState('');
  const search = (e) =>{
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term:input,
    })
    navigate('/Search')
    //do something with input... come back and fix
  }
  return (
    <form className='search'>
     <div className='search__input'>
      <SearchIcon className='search__inputIcon'></SearchIcon>
      <input value={input}  onChange = {e => setInput(e.target.value)}/>
      <MicIcon></MicIcon>
     </div>
     {!hideButtons ? (
      <div className='search__buttons'>
     <Button type='submit' variant='outlined' onClick={search}>Google Search</Button>
     <Button variant='outlined'>I'm Feeling Lucky</Button>
     </div>
     ):(
      <div className='search__buttons'>
     <Button className='search__hidebuttons' type='submit' variant='outlined' onClick={search}>Google Search</Button>
     <Button className='search__hidebuttons' variant='outlined'>I'm Feeling Lucky</Button>
     </div>
     )}

    </form>
  )
}

export default Search
