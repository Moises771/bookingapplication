import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://s3-eu-north-1.amazonaws.com/py3.visitsweden.com/images/Liseberg_HotelCuriosa_600x600_MINT_CMSTemplat.width-1650.jpg" 
          alt=""
          className="fpImg"
        />
        <span className="fpName">Apart Hotel Maestro</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from £99</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://s3-eu-north-1.amazonaws.com/py3.visitsweden.com/images/Liseberg_HotelCuriosa_600x600_MINT_CMSTemplat.width-1650.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Apart Hotel Maestro</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from £99</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://s3-eu-north-1.amazonaws.com/py3.visitsweden.com/images/Liseberg_HotelCuriosa_600x600_MINT_CMSTemplat.width-1650.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Apart Hotel Maestro</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from £99</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
