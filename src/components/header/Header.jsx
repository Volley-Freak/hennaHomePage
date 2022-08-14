import React from 'react'
import './header.css'
import {IoIosCall} from 'react-icons/io'
import product1 from '../../assets/item1.png'

const Header = () => {
    
  return (
    <header>
        <div className="header_container">
            <div className="hero">
                <h1>Highest Quality Henna</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quos exercitationem dolore asperiores reiciendis.
                     Aliquam unde eos dicta omnis excepturi?
                </p>
                <a href="#products" className="btn btn-primary">Our Products</a>
                <p className="customer_care">Our support team is available 24/7 to resolve any product issues</p>
                <div className="contact_no">
                    <span className='call-icon'>
                    <IoIosCall />
                    </span>
                    <div>
                    <h5>Phone Number</h5>
                    <h4>+91-638-XXX-XXXX</h4>
                    </div>
                </div>
            </div>
            <div className="slider">
                <h1>Senna Leaves</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente totam quisquam eaque ex.
                </p>
                <a href="#product" className="btn btn-secondary">About Product</a>
                <div className="product-img">
                    <img src={product1} alt="product1" />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header