import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1111111"
            title="AmazonBasics Steel, Security Safe Lock Box, Black - 0.5 Cubic Feet"
            price={29.99}
            image="https://m.media-amazon.com/images/I/718l03qCcJL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="2222222"
            title="Kenwood kMix Stand Mixwer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="3333333"
            title="AmazonBasics 36 Pack AAA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
            price={10.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71nDX36Y9UL._AC_UL640_FMwebp_QL65_.jpg"
          />
          <Product
            id="4444444"
            title="AmazonBasics High-Back Executive Swivel Office Desk Chair with Ribbed Puresoft Upholstery - Black, Lumbar Support, Modern Style"
            price={154.55}
            rating={4}
            image="https://m.media-amazon.com/images/I/71YCInWiz8L._AC_UL800_FMwebp_QL65_.jpg"
          />
          <Product
            id="5555555"
            title="AmazonBasics Nylon Braided Lightning to USB A Cable, MFi Certified Apple iPhone Charger, Dark Gray, 6-Foot"
            price={14.49}
            rating={4}
            image="https://m.media-amazon.com/images/I/71p11135VSL._AC_UL640_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="6666666"
            title="Samsung Curve Led GAMING monitor"
            price={1094.9}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
