import React, { useContext } from 'react'
import { Store1 } from './ContextAPI'
import { NavLink } from 'react-router-dom'
import './Styles/Mobile.css'
import Footer from './Footer/Footer'

const Store = () => {
  const[ContextData]=useContext(Store1);
  console.log(ContextData);
  const randomIndex = Math.floor((Math.random() * 10)+1);
  console.log(randomIndex)
  // const randomItem = ContextData[randomIndex];
  // const navigate=useNavigate();
  // const [showLoginPopup, setShowLoginPopup] = useState(false);
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
    <div className='mobileContainer'>
      <div style={{display:'flex',flexDirection:'column',width:"280px"}}>
      <div className='left'>
      <ul>
                  <li style={{color:'coral', fontSize:'25px',fontWeight:'600',textDecoration:'underline', listStyle:'none'}}>Store</li>
                  <li><NavLink to="/store/mobiles" className='sublist'>Mobiles</NavLink></li>
              <li><NavLink to="/store/watches" className='sublist'>Watches</NavLink></li>
              <li><NavLink to="/store/iphones" className='sublist'>Iphones</NavLink></li>
              <li><NavLink to="/store/electronics" className='sublist'>Electronics</NavLink></li>
              </ul>
      </div>
      <div className='left1'>
         <img src='https://media4.giphy.com/media/26n79t82lmj989iAE/200w.webp?cid=ecf05e47wb1z6j4xx3r58ug787kv0xq495tok7b5q0ixctpp&ep=v1_gifs_search&rid=200w.webp&ct=g' alt=''  className='mimg'/>
      </div>
      </div>

    <div className='bestSellerContainer bestSellerContainer1'>
    <p className='bestSeller'>STORE</p>
    <hr className='bestSellerHr1'></hr>
<div className=' cards1'>
<div className=' box1'>
{ContextData.filter((item)=> item && item.id===randomIndex+2).map((item,index)=>{
          console.log(item);
          return(   <div >
          <img src={item.bollywoodimg} alt={item.name} className='subImg' />
           <p className='name' >{item.name}</p> 
           <p className='price' >Price: ₹ {item.price}</p> 
           <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
           <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>BUY NOW</button></NavLink>
           </div>)
        })} 
  </div>
 
  <div className=' box1'>
{ContextData.filter((item)=> item && item.id===randomIndex+7).map((item,index)=>{
          console.log(item);
          return(   <div >
          <img src={item.bollywoodimg} alt={item.name} className='subImg' />
           <p className='name' >{item.name}</p> 
           <p className='price' >Price: ₹ {item.price}</p> 
           <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
           <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>BUY NOW</button></NavLink>
           </div>)
        })} 
  </div>
  <div className=' box1'>
{ContextData.filter((item)=> item && item.id===randomIndex+11).map((item,index)=>{
          console.log(item);
          return(   <div >
          <img src={item.bollywoodimg} alt={item.name} className='subImg' />
           <p className='name' >{item.name}</p> 
           <p className='price' >Price: ₹ {item.price}</p> 
           <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
           <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>BUY NOW</button></NavLink>
           </div>)
        })} 
  </div>
  <div className=' box1'>
{ContextData.filter((item)=> item && item.id===randomIndex+15).map((item,index)=>{
          console.log(item);
          return(   <div >
          <img src={item.bollywoodimg} alt={item.name} className='subImg' />
           <p className='name' >{item.name}</p> 
           <p className='price' >Price: ₹ {item.price}</p> 
           <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
           <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>BUY NOW</button></NavLink>
           
           </div>)
        })} 
  </div>
  <div className=' box1'>
{ContextData.filter((item)=> item && item.id===randomIndex+7).map((item,index)=>{
          console.log(item);
          return(   <div >
          <img src={item.bollywoodimg} alt={item.name} className='subImg' />
           <p className='name' >{item.name}</p> 
           <p className='price' >Price: ₹ {item.price}</p> 
           <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
           <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>BUY NOW</button></NavLink>
           </div>)
        })} 
        
  </div>
  <div className=' box1'>
{ContextData.filter((item)=> item && item.id===randomIndex+20).map((item,index)=>{
          console.log(item);
          return(   <div >
          <img src={item.bollywoodimg} alt={item.name} className='subImg' />
           <p className='name' >{item.name}</p> 
           <p className='price' >Price: ₹ {item.price}</p> 
           <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
           <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>BUY NOW</button></NavLink>
           </div>)
        })} 
        
  </div>
  <div className=' box1'>
{ContextData.filter((item)=> item && item.id===randomIndex+22).map((item,index)=>{
          console.log(item);
          return(   <div >
          <img src={item.bollywoodimg} alt={item.name} className='subImg' />
           <p className='name' >{item.name}</p> 
           <p className='price' >Price: ₹ {item.price}</p> 
           <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
           <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>BUY NOW</button></NavLink>
           </div>)
        })} 
        
  </div>
  <div className=' box1'>
{ContextData.filter((item)=> item && item.id===randomIndex+3).map((item,index)=>{
          console.log(item);
          return(   <div >
          <img src={item.bollywoodimg} alt={item.name} className='subImg' />
           <p className='name' >{item.name}</p> 
           <p className='price' >Price: ₹ {item.price}</p> 
           <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
           <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>BUY NOW</button></NavLink>
           </div>)
        })} 
        
  </div>
  <div className=' box1'>
{ContextData.filter((item)=> item && item.id===randomIndex+23).map((item,index)=>{
          console.log(item);
          return(   <div >
          <img src={item.bollywoodimg} alt={item.name} className='subImg' />
           <p className='name' >{item.name}</p> 
           <p className='price' >Price: ₹ {item.price}</p> 
           <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
           <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>BUY NOW</button></NavLink>
           </div>)
        })} 
        
  </div>
  <div className=' box1'>
{ContextData.filter((item)=> item && item.id===randomIndex+43).map((item,index)=>{
          console.log(item);
          return(   <div >
          <img src={item.bollywoodimg} alt={item.name} className='subImg' />
           <p className='name' >{item.name}</p> 
           <p className='price' >Price: ₹ {item.price}</p> 
           <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
           <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>BUY NOW</button></NavLink>
           </div>)
        })} 
        
  </div>
  <div className=' box1'>
{ContextData.filter((item)=> item && item.id===randomIndex+39).map((item,index)=>{
          console.log(item);
          return(   <div >
          <img src={item.bollywoodimg} alt={item.name} className='subImg' />
           <p className='name' >{item.name}</p> 
           <p className='price' >Price: ₹ {item.price}</p> 
           <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
           <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>BUY NOW</button></NavLink>
           </div>)
        })} 
        
  </div>
  <div className=' box1'>
{ContextData.filter((item)=> item && item.id===randomIndex+30).map((item,index)=>{
          console.log(item);
          return(   <div >
          <img src={item.bollywoodimg} alt={item.name} className='subImg' />
           <p className='name' >{item.name}</p> 
           <p className='price' >Price: ₹ {item.price}</p> 
           <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
           <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>BUY NOW</button></NavLink>
           </div>)
        })} 
        
  </div>
</div>
</div>
<Footer/>
</div>
  )
}

export default Store
