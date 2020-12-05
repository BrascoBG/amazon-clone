import React from "react";
import Product from "../Product/Product";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="header__row">
        <Product
          id={1234}
          title="Samsung Galaxy S20"
          price={899.0}
          rating={5}
          image="https://images.samsung.com/is/image/samsung/p5/au/smartphones/galaxy-s20/buy/S20-FE_Navy_SKUimage_MO-img.jpg?$ORIGIN_JPG$?$LazyLoad_Home_JPG$"
        />
        <Product
          id={1234}
          title="IPhone 20s"
          price={999.0}
          rating={4}
          image="https://images.samsung.com/is/image/samsung/p5/au/smartphones/galaxy-s20/buy/S20-FE_Navy_SKUimage_MO-img.jpg?$ORIGIN_JPG$?$LazyLoad_Home_JPG$"
        />
      </div>
      <div className="header__row">
        <Product
          id={1234}
          title="Samsung Galaxy S20"
          price={899.0}
          rating={5}
          image="https://images.samsung.com/is/image/samsung/p5/au/smartphones/galaxy-s20/buy/S20-FE_Navy_SKUimage_MO-img.jpg?$ORIGIN_JPG$?$LazyLoad_Home_JPG$"
        />
        <Product
          id={1234}
          title="Samsung Galaxy S20"
          price={899.0}
          rating={5}
          image="https://images.samsung.com/is/image/samsung/p5/au/smartphones/galaxy-s20/buy/S20-FE_Navy_SKUimage_MO-img.jpg?$ORIGIN_JPG$?$LazyLoad_Home_JPG$"
        />
        <Product
          id={1234}
          title="Samsung Galaxy S20"
          price={899.0}
          rating={5}
          image="https://images.samsung.com/is/image/samsung/p5/au/smartphones/galaxy-s20/buy/S20-FE_Navy_SKUimage_MO-img.jpg?$ORIGIN_JPG$?$LazyLoad_Home_JPG$"
        />
      </div>
      <div className="header__row">
        <Product
          id={1234}
          title="Samsung Galaxy S20"
          price={899.0}
          rating={5}
          image="https://images.samsung.com/is/image/samsung/p5/au/smartphones/galaxy-s20/buy/S20-FE_Navy_SKUimage_MO-img.jpg?$ORIGIN_JPG$?$LazyLoad_Home_JPG$"
        />
      </div>
    </div>
  );
}

export default Header;
