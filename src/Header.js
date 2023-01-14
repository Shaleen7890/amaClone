import React,{useState} from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {Link,useNavigate} from 'react-router-dom'
import { useStateValue } from './StateProvider';
import { onAuthStateChanged,signOut } from 'firebase/auth';
import { auth } from './firebase';

function Header() {
    const [{basket},dispatch]= useStateValue();
    const [user,setUser]= useState({});
    onAuthStateChanged(auth,(currentUser)=>setUser(currentUser));
    const navigate= useNavigate();
    const logout=async(event)=>{
        await signOut(auth);
    }
    return (
        <div className='header'>
            <Link to='/'>
            <img className='header-logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' />
            </Link>
            <div className='header-search'>
                <input className='header-searchInput' type='text' />
                <SearchIcon className='header-searchIcon'/>
            </div>
            <div className='header-nav'>
            <Link to={!user &&'/login'}>
                <div className='header-option'>
                    <span onClick={logout} className='header-option1'>
                        <small>Hello {user? user.email:'Guest'}</small>
                        <strong>{user? 'Sign Out':'Sign In'}</strong>
                    </span>
                </div>
                </Link>
                    <div className='header-option'>
                        <span className='header-option1'>
                            <small>Return</small>
                            <strong>& Orders</strong>
                        </span>
                    </div>
                <div className='header-option'>
                    <span className='header-option1'>
                        <small>Your</small>
                        <strong>Prime</strong>
                    </span>
                </div>
                <Link to='/checkout'>
                <div className='header-optionBasket'>
                    <ShoppingBasketIcon/>
                    <span className='header-basketCount'>{basket?.length}</span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header