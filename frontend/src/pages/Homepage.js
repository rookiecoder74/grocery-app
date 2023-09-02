import ProductCarousel from '../components/ProductCarousel';
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import BottomNavbar from '../components/BottomNavbar'
import Footer from '../components/Footer'
import img from '../images/Whitebasket.png'
import axios from 'axios';
import '../css/Homepage.css'
const Homepage = () => {
  const [userType, setUserType] = useState('customer');
  useEffect(() => {
    // Make an API call to get user information after login
    const fetchUserType = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/userdetails');
        
        setUserType(response.data.userType); // Set the userType from the response
      } catch (error) {
        console.error('Error fetching user information:', error);
        console.log('Axios error details:', error.response);
      }
    };

    fetchUserType(); // Call the function to fetch userType
  }, []);
  return (
    <div>
      <Navbar userType={userType} />
      <BottomNavbar />
      <div className="groceries-home">
        <div className="landing1">
          <div className="body1">
            <div className="title1">
              <b className="lets-now-shop-for-container1">
                <p className="lets-now-shop1">Let’s now shop</p>
                <p className="lets-now-shop1">For daily food</p>
                <p className="lets-now-shop1">& necessities.</p>
              </b>
              <div className="freshness-and-speed1">
                Freshness and Speed at your Fingertips: Get groceries delivered in
                30 Minutes with our website or mobile app.
              </div>
              <button className="button1">
                <span className="button-content"><b>Order Now</b></span>
              </button>
            </div>
          </div>
          <img className="landing-icon" alt="" src={img} />
        </div>
      </div>
      <div className='title2'>
        <p className="lets-now-shop1" style={{ fontSize: "3rem" }}>Best Sellers</p>
      </div>
      <div className="product-card-container">
        <ProductCarousel />
      </div>
      <Footer />
    </div >
  );
};

export default Homepage;