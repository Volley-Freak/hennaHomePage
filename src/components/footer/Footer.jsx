import React from 'react'
import Logo from '../../assets/logo.png'
import {FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp} from 'react-icons/fa'
import {GoLocation} from 'react-icons/go'
import {IoIosCall} from 'react-icons/io'
import {BsFillClockFill} from 'react-icons/bs'
import {AiFillCaretRight} from 'react-icons/ai'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import image5 from '../../assets/image5.jpg'
import image6 from '../../assets/image6.jpg'
import partner from '../../assets/partner.png'
import './footer.css'


const Footer = () => {
  return (
    <>
    <footer>
        <div className="main-footer">
            <div className="company-info">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis accusamus minima dolore autem rerum vero!</p>
                </div>
                <div className="social-icons">
                    <a href="https://www.facebook.com/"><FaFacebookF /></a>
                    <a href="https://www.instagram.com/"><FaInstagram /></a>
                    <a href="https://www.twitter.com"><FaTwitter /></a>
                    <a href="https://web.whatsapp.com/"><FaWhatsapp /></a>
                </div>
            </div>
            <div className="contact-info">
                <h3>Contact Information</h3>
                <div className="call">
                    <div className="icon">

                    <IoIosCall />
                    </div>
                    <span>
                        <h5>+91-638-XXX-XXXX</h5>
                        <h5>+91-638-XXX-XXXX</h5>
                    </span>
                </div>
                <div className="location">
                    <div className="icon">

                    <GoLocation />
                    </div>
                    <span>
                        <h5>E-74, INDUSTRIAL AREA IIIRD PHASE</h5>
                        <h5>Rajasthan 306104</h5>
                    </span>
                </div>
                <div className="time">
                    <div className="icon">

                    <BsFillClockFill  />
                    </div>
                    <span>
                        <h5>9:00 am to 5:00 pm</h5>
                        <h5>Monday to Saturday</h5>
                    </span>
                </div>
            </div>
            <div className="shop-products">
                <h3>Shop Products</h3>
                <ul>
                    <li><AiFillCaretRight className='icon' />Henna</li>
                    <li><AiFillCaretRight className='icon' />Oil</li>
                    <li><AiFillCaretRight className='icon' />Seeds</li>
                    <li><AiFillCaretRight className='icon' />Edibles</li>
                    <li><AiFillCaretRight className='icon' />Concentrates</li>
                    <li><AiFillCaretRight className='icon' />Shop All</li>
                </ul>
            </div>
            <div className="instagram">
                <h3>Instagram</h3>
                <div className="images">
                    <div className="row">
                        <img src={image1} alt="instagram" />
                        <img src={image2} alt="instagram" />
                        <img src={image3} alt="instagram" />
                    </div>
                    <div className="row">
                    <img src={image4} alt="instagram" />
                    <img src={image5} alt="instagram" />
                    <img src={image6} alt="instagram" />
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <div className="copyright-payment">
        <p>All Rights Reserved. Shivang Exports (Terms of Use) Developed & Managed By Weblink.In Pvt. Ltd.</p>
        <a href="https://www.exportersindia.com/">
            <img src={partner} alt="company-partner" />
        </a>
    </div>
    </>
  )
}

export default Footer