import React from 'react'
import '../pages/SearchPage.css';
import response from '../response';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import { Link } from 'react-router-dom';
// import { Search } from '@mui/icons-material';
import LinkIcon from '@mui/icons-material/Link';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Search from './Search';

function SearchPage() {
    const[{term},dispatch] = useStateValue();
    const{data} = useGoogleSearch(term); // Live API CALL
    //https://developers.google.com/custom-search/v1/using_rest
    //https://cse.google.com/cse/create/new
    //const data = response;
    console.log(data);
  return (
    <div className='searchPage'>
     <div className='searchPage__header'>
      <Link to='/'>
        <img className='searchPage__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'
          alt=''>
          </img>
      </Link>
      <div className='searchPage__headerBody'>
        <Search hideButtons/>

        <div className='searchPage__options'>
          <div className='searchPage__optionsLeft'>
          <div className='searchPage__option'>
          <SearchIcon></SearchIcon>
          <Link to='/all'>All</Link>
          </div>
          <div className='searchPage__option'>
          <DescriptionIcon/>
          <Link to='/news'>News</Link>
          </div>
          <div className='searchPage__option'>
          <ImageIcon/>
          <Link to='/images'>Images</Link>
          </div>
          <div className='searchPage__option'>
            <LocalOfferIcon/>
          <Link to='/shopping'>Shopping</Link>
          </div>
          <div className='searchPage__option'>
            <RoomIcon/>
          <Link to='/maps'>Maps</Link>
          </div>
          <div className='searchPage__option'>
            <MoreVertIcon/>
          <Link to='/more'>More</Link>
          </div>
          </div>
          <div className='searchPage__optionsRight'>
          <div className='searchPage__option'>
          <Link to='/settings'>Settings</Link>
          </div>
          <div className='searchPage__option'>
          <Link to='/tools'>Tools</Link>
          </div>
          </div>
        </div>
      </div>
    </div>
    {term && (
      <div className='searchPage__results'>
      <p className='searchPage__resultCount'>
        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
      </p>

      {data?.items.map(item =>(
        <div className='searchPage__result'>
        <a href={item.link}>
        {item.pagemap?.cse_image?.length>0 
        && 
        item.pagemap?.cse_image[0]?.src &&(
          <img className='searchPage_resultImage' 
          src={item.pagemap?.cse_image?.length
          > 0 && item.pagemap?.cse_image[0]?.src}>
          </img>
        )}
        {item.displayLink}&#9661;
        </a>
        <a className='searchPage__resultTitle' href={item.link}><h2>{item.title}</h2></a>
        <p className='searchPage_resultSnippet'>{item.snippet}</p>
        </div>
      ))}
    </div>
    )}
    </div>
  )
}

export default SearchPage
