import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://s3-eu-north-1.amazonaws.com/py3.visitsweden.com/images/Liseberg_HotelCuriosa_600x600_MINT_CMSTemplat.width-1650.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>Property 123</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://s3-eu-north-1.amazonaws.com/py3.visitsweden.com/images/Liseberg_HotelCuriosa_600x600_MINT_CMSTemplat.width-1650.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>Property 123</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://s3-eu-north-1.amazonaws.com/py3.visitsweden.com/images/Liseberg_HotelCuriosa_600x600_MINT_CMSTemplat.width-1650.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>Property 123</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
