import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  const [{ basket, user }] = useStateValue();
  
const login = () => {
  if (user) {
    auth.signOut();
  }
}

  return (
    <nav className="header">
    {/* logo on the left img */}
   <Link to="/">
    <img
    className="header__logo" 
    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
    alt=""
    />
    </Link>
    
    {/* search box */}
    <div className="header__search">
    <input type="text" className="header__searchInput" />
    <SearchIcon className="header__searchIcon" />
    </div>
    
    {/* 3 links */}
    <div className="header__nav">
     
   <Link to={!user && "/login"} className="header__link">
     <div className="header__option">
     <span className="header__optionLineOne">Hello {user && user.email}</span>
       <span className="header__optionLineTwo">SignIn</span>
     </div>
   </Link>


   <Link to="/" className="header__link">
     <div className="header__option">
       <span className="header__optionLineOne">Returns</span>
       <span className="header__optionLineTwo">& Orders</span>
     </div>
   </Link>


   <Link to="/" className="header__link">
     <div className="header__option">
       <span className="header__optionLineOne"> Your</span>
       <span className="header__optionLineTwo" >Prime</span>
     </div>
   </Link>

   <Link to="/checkout" className="header__link">
       <div className="header__optionBasket">
     <ShoppingCartIcon />
     <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
    </div>
   </Link>

  
   

    </div>
  
</nav>
  );
}

export default Header