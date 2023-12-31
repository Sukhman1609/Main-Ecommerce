
import React, { useEffect } from 'react';
import { useLocation,NavLink } from 'react-router-dom';
// import Footer from './Project/Footer/Footer';
import './Project/Styles/result.css'
const SearchResults = () => {
  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    // Handle state data
    console.log('Search Results:', state.searchResults);
  }, [state]);
  const handleBuyNow = () => {
    const token = localStorage.getItem("token");
  
    if (!token) {
      const userConfirmed = window.confirm('Please Login First to continue with purchase!!!');
      if (userConfirmed) {
        window.location.href = '/login';
      }
    } else {
      console.log('Handle Buy Now called222222222222');
    }
  };
  return (
    <div className="search-results-container">
      <div className='mainResult'>
      <h2 style={{textAlign:'center',fontSize:'22pt'}}>Search Results</h2>
      {state.searchResults && state.searchResults.length > 0 ? (
        <ul className='cards'>
          {state.searchResults.map((result) => (
            <li key={result.id}><div className='box1'><img src={result && result.bollywoodimg} alt={result.name} className='subImg' />
            <p className='name' >{result.name}</p> 
            <p className='price' >Price: ₹ {result.price}</p> 
            <p className='rating' >Rating: {result.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{result.rating_stars}</span></p> 
            <NavLink to={`/detail/${result.id}`} > 
            <button className='bestSellerButton' onClick={handleBuyNow}>BUY NOW</button></NavLink>
            </div></li>
          ))}
        </ul>
      ) : (
        <p style={{textAlign:'center',fontSize:'25pt'}}>No results found.</p>
      )}
    </div>
    {/* <Footer/> */}
    </div>
    
  );
};

export default SearchResults;
