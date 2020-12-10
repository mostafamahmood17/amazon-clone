import React from 'react';
import './Home.css'
import Product from './Product';

const Home = () => {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-na.ssl-images-amazon.com/images/G/01/img20/events/Q4/Holiday/deals/trafficdrivers/Q4_2020_HolidayDeals_TrafficDrivers_Desktop_Hero_v2_1500x600._CB417563015_.jpg" alt="" />

                <div className="home_row">
                    <Product 
                    id="1125464"
                    title="Timex watch"
                    price={29.99}
                    image="https://m.media-amazon.com/images/I/81cXiiV-UuL._AC_UL320_.jpg"
                    rating={5}/>
                    <Product 
                    id="1125465"
                    title="Daniel Wellington Petite Melrose Rose Gold Watch, Mesh, for Men and Women"
                    price={43.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/81wVZUTjdSL._AC_UY1000_.jpg"
                    rating={4}/>
                </div>
                <div className="home_row">
                    <Product 
                    id="1125467"
                    title="Timex Men's Expedition Scout Solar-Powered 40mm Watch"
                    price={56.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/81cXiiV-UuL._AC_UY780_.jpg"
                    rating={5}/>
                    <Product 
                    id="1125498"
                    title="Timex Men's under water"
                    price={87.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/91tK8GlvU7L._AC_UY780_.jpg"
                    rating={4}/>
                    <Product 
                    id="1125654"
                    title="Timex Men's indigio"
                    price={57.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/819Y8iCWweL._AC_UL1500_.jpg"
                    rating={5}/>

                </div>
                <div className="home_row">
                <Product 
                  id="1125687"
                  title="Fossil"
                  price={64.99}
                  image="https://images-na.ssl-images-amazon.com/images/I/81Jt7Y9KHUL._AC_UL1500_.jpg"
                  rating={4}/>
                </div>
            </div>
        </div>
    );
};

export default Home;