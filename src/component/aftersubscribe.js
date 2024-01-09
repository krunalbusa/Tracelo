import offer1 from "../images/offer1.png";
import offer1arrow from "../images/offer1-arrow.png";

export default function Aftersubscribe() {
  return (
    <div>
      {/*first offer*/}
      <div className="offer-comp-1" id="offers"></div>
      <div className="offer-comp-1-text-1">
        <p>Special Offer!</p>
      </div>
      <div className="offer-comp-1-text-2">
        <p>Try mobefined for only €0.50 during 24 hours!</p>
      </div>
      <div className="offer-comp-1-text-3">
        <p>Tracelo is a service based on a monthly subscription</p>
      </div>
      <img className="offer-comp-1-img" src={offer1} alt=""/>
      <button className="offer-comp-1-btn">
        <img className="offer-comp-1-btn-arrow" src={offer1arrow} alt=""/>
      </button>

      {/*second offer */}
      <div className="offer-comp-2"></div>
      <div className="offer-comp-2-trial"></div>
      <div className="offer-comp-2-trial-text">
        <p>Trial Period</p>
      </div>
      <div className="offer-comp-2-text1">
        <h1>€ 0.50</h1>
      </div>
      <div className="offer-comp-2-text2">
        <h5>24 hours Trial</h5>
      </div>
      <div className="offer-comp-2-text3">
        <p>
          With this first payment, you can enjoy all the services of the
          platform, without restrictions, for 24 hours. After 24 hours, the
          customers must pay the subscription cost of € 29.90 per month.
        </p>
      </div>
      <button className="offer-comp-2-btn" >
        <p className="offer-comp-2-btn-text">Start Trial</p>
      </button>

      {/*thrid offe */}
      <div className="offer-comp-3"></div>
      <div className="offer-comp-3-trial"></div>
      <div className="offer-comp-3-trial-text">
        <p>Subscription</p>
      </div>
      <div className="offer-comp-3-text1">
        <h1>€ 29.90</h1>
      </div>
      <div className="offer-comp-3-text2">
        <h5>Monthly fee</h5>
      </div>
      <div className="offer-comp-3-text3">
        <p>
          Once the 24 hours trial period has ended, the offer will automatically
          renew to a monthly subscription. Remember that you can cancel the
          subscription whenever you want.
        </p>
      </div>
      <button className="offer-comp-3-btn">
        <p className="offer-comp-3-btn-text">Subscribe Now</p>
      </button>
    </div>
  );
}
