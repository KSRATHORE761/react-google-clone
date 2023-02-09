import React from 'react';
import Home from './pages/Home';
import './App.css';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    //BEM
    <div className="app">
    <Router>
    <Routes>
    {/*SearchPage(The result page */}
      <Route path="/search" element={<SearchPage/>}/>
      {/*Home(the one with the search on */}
      <Route exact path="/" element={<Home/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
