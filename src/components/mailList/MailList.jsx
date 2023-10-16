import "./mailList.css";

const MailList = () => {
  return <div className="mail">
    <h1 className="mailTitle">Save money, save time!</h1>
    <span className="mailDesc">Sign up for upcoming deals</span>
    <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subcribe</button>
    </div>
  </div>;
};

export default MailList;
