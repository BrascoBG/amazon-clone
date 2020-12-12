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
          id={12}
          title="Samsung Galaxy S20"
          price={899.49}
          rating={5}
          image="https://images.samsung.com/is/image/samsung/p5/au/smartphones/galaxy-s20/buy/S20-FE_Navy_SKUimage_MO-img.jpg?$ORIGIN_JPG$?$LazyLoad_Home_JPG$"
        />
        <Product
          id={13}
          title="IPhone 12"
          price={999.89}
          rating={4}
          image="https://www.mobilepoint.bg/uploads/com_article/gallery/apple-iphone-12-mini-128gb-mge63-blue.jpg"
        />
      </div>
      <div className="header__row">
        <Product
          id={14}
          title="Sony TV KDL-215646545"
          price={1199.35}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71VC9cPNy6L._AC_SL1080_.jpg"
        />
        <Product
          id={15}
          title="Playstation 5"
          price={1899.69}
          rating={4}
          image="https://cdn.technomarket.bg/uploads/BG/2020/7-july/ps-5-materials/ps-5-6.jpg"
        />
        <Product
          id={16}
          title="Xbox One"
          price={1299.09}
          rating={5}
          image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3SQnt?ver=5797&q=90&m=6&h=1445&w=1849&b=%23FFFFFFFF&f=jpg&o=f&aim=true"
        />
      </div>
      <div className="header__row">
        <Product
          id={17}
          title="Speaker Beats"
          price={399.19}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61qiVLRGn8L._AC_SY355_.jpg"
        />
      </div>
    </div>
  );
}

export default Header;
