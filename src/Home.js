import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img 
            className='home__image'
            src="https://m.media-amazon.com/images/G/03/digital/video/mobileprog/appLPs/UK_MAI_MobileApp_LPC_719x414._CB1198675309_.jpg"
            alt="amazon_prime"
            />
        

            <div className='home__row'>
                <Product 
                    id="1231342"
                    title="The lean startup"
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51PU3tU3BfL._SX397_BO1,204,203,200_.jpg"
                    rating={5}
                />
                <Product />
            </div>

            <div className='home__row'>
                <Product />
                <Product />
                <Product />
            </div>

            <div className='home__row'>
                <Product />
            </div>
        </div>
    </div>
  )
}

export default Home