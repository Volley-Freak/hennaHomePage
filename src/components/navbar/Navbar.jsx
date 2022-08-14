import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import {AiOutlineHeart} from 'react-icons/ai'
import {FaShoppingCart, FaSearch} from 'react-icons/fa'
import './navbar.css'

const Navbar = () => {

    const [navBg, setNavbg] = useState('transparent-navbar')
    const [icons, setIcons] = useState('shopping_icons transparent_nav_icons')

    const listenScrollY = (e) => {
        if (window.scrollY > 1) {
            setNavbg('white-navbar')
            setIcons('shopping_icons white_nav_icons')
        } else {
            setNavbg('transparent-navbar')
            setIcons('shopping_icons transparent_nav_icons')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollY)

        return () => window.removeEventListener('scroll',listenScrollY)

    },[])

  return (
    <nav className={navBg}>
        <div className="company">
            <img src={logo} id="logo" alt="logo" />
        </div>
        <div className="links">
            <a href="#header">Home</a>
            <a href="#about">About Us</a>
            <a href="#products">Products</a>
            <a href="#contact">Contact Us</a>
        </div>
        <div className="search">
            <div className="search-input">
                <input type="text" placeholder='Search...' name='search' id='search'/>
                <div className="search-icon-div">
                    <FaSearch id='search-icon'/>
                </div>
            </div>
        </div>
        <div className="shopping">
            <div className={icons}>
            <AiOutlineHeart />
            </div>
            <div className={icons}>
            <FaShoppingCart id='cart' />
            </div>
        </div>
    </nav>
  )
}

export default Navbar