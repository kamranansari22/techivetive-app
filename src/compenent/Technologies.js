import React from "react";
import Slider from "react-slick";

import blyppr  from "../assets/images/blyppr.jpg"
import blyppr_logo from "../assets/images/blyppr-logo.png"
import web_mobile from "../assets/images/web-mobile-icon.png"
import Firebase from "../assets/images/Firebase.png"
import clozerr from "../assets/images/clozerr.jpg"
import Flutter from "../assets/images/Flutter.png"
import elixir from "../assets/images/elixir.png"
import clozerr_logo from "../assets/images/clozerr-logo.png"
import iBeacon from "../assets/images/iBeacon.png"
import mongoDB from "../assets/images/mongoDB.png"
import Bridge_logo from "../assets/images/Bridge-logo.png"
import bridge from "../assets/images/bridge.jpg"
import Reacts from "../assets/images/React.png"
import Rails from "../assets/images/Rails.png"

export default class Technologies extends React.Component {
  
  render() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows:false,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
      <div>
        <section id="services" className="rq-services">
            <div className="fix-wrap">
                <h4 className="services-title mb-5">
                   Our TECHNOLOGIES
                </h4>
                <Slider {...settings}>
                    <div>
                        <img src="https://spinx-live-6jsc7gkvbdujvrbfu3miqzaj1t1.netdna-ssl.com/images/icon-magento.svg" />
                    </div>
                    <div>
                        <img src="https://spinx-live-6jsc7gkvbdujvrbfu3miqzaj1t1.netdna-ssl.com/images/icon-drupal.svg" />
                    </div>
                    <div>
                        <img src="https://spinx-live-6jsc7gkvbdujvrbfu3miqzaj1t1.netdna-ssl.com/images/icon-wordpress.svg" />
                    </div>
                    <div>
                        <img src="https://spinx-live-6jsc7gkvbdujvrbfu3miqzaj1t1.netdna-ssl.com/images/icon-android.svg" />
                    </div>
                    <div>
                        <img src="https://spinx-live-6jsc7gkvbdujvrbfu3miqzaj1t1.netdna-ssl.com/images/icon-angular.svg" />
                    </div>
                    <div>
                         <img src="https://spinx-live-6jsc7gkvbdujvrbfu3miqzaj1t1.netdna-ssl.com/images/icon-apple.svg" />
                    </div>
                    <div>
                         <img src="https://spinx-live-6jsc7gkvbdujvrbfu3miqzaj1t1.netdna-ssl.com/images/icon-php.svg" />
                    </div>
                    <div>
                         <img src="https://spinx-live-6jsc7gkvbdujvrbfu3miqzaj1t1.netdna-ssl.com/images/icon-nodejs.svg" />
                    </div>
                    <div>
                         <img src="https://spinx-live-6jsc7gkvbdujvrbfu3miqzaj1t1.netdna-ssl.com/images/icon-reactjs.svg" />
                    </div>
                    <div>
                         <img src="https://spinx-live-6jsc7gkvbdujvrbfu3miqzaj1t1.netdna-ssl.com/images/icon-java.svg" />
                    </div>
                </Slider>
            </div>    
        </section>
        <section id="portfolio" className="rq-portfolio">
          <div className="fix-wrap">
            <h4 className="portfolio-header">
                Our Cases
            </h4>
            <div className="portfolio-container" id="portfolio-container">
                <div className="portfolio-card blyppr">
                    <div className="portfolio-detail blyppr-detail">
                        <div className="platform">
                            <div className="detail-title">Platform</div>
                            <div className="platform-logo">
                                <img src={web_mobile} alt="" />
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="detail-title">Timeline</div>
                            <div className="detail-numeral">10</div>
                            <div className="detail-text">months</div>
                        </div>
                        <div className="team">
                            <div className="detail-title">Team</div>
                            <div className="detail-numeral">6</div>
                            <div className="detail-text">members</div>
                        </div>
                        <div className="stack">
                            <div className="detail-title">Stack</div>
                            <div className="stack-icons">
                                <img src={Firebase} alt="" />
                                <img src={Flutter} alt="" />
                                <img src={elixir} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-image">
                        <img  alt="" className=" ls-is-cached lazyloaded" src={blyppr} />
                    </div>
                    <div className="portfolio-logo">
                        <img src={blyppr_logo} alt="" />
                    </div>
                    <div className="portfolio-content-container">
                        <div className="portfolio-title blyppr-title">
                            <img src={blyppr_logo} alt="" className="portfolio-mob-logo" />Blyppr
                        </div>
                        <div className="portfolio-tag blyppr-tag">
                            <span> User Interface </span>
                            <span> User Experience </span>
                            <span> Mobile </span>
                            <span> Product Development </span>
                        </div>
                        <div className="portfolio-mobile-tag blyppr-tag">
                            <div> User Interface </div>
                            <div> User Experience </div> 
                            <div> Mobile </div>
                            <div> Product Development </div> 
                        </div>
                        <div className="portfolio-content">
                            A feature-loaded chat application designed with a 'privacy-first' approach. This app for mobile and desktop is being built using Flutter, the UI development framework from Google.
                        </div>
                        <div className="portfolio-read-more">
                        <a href="#"> <i className="fas fa-caret-right"></i>Read more </a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-card clozerr">
                    <div className="portfolio-logo">
                        <img src={clozerr_logo} alt="" />
                    </div>
                    <div className="portfolio-detail clozerr-detail">
                        <div className="platform">
                            <div className="detail-title">Platform</div>
                            <div className="platform-logo">
                                <img src={web_mobile} alt="" />
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="detail-title">Timeline</div>
                            <div className="detail-numeral">18</div>
                            <div className="detail-text">months</div>
                        </div>
                        <div className="team">
                            <div className="detail-title">Team</div>
                            <div className="detail-numeral">8</div>
                            <div className="detail-text">members</div>
                        </div>
                        <div className="stack">
                            <div className="detail-title">Stack</div>
                            <div className="stack-icons">
                                <img src={iBeacon} alt="" />
                                <img src={Flutter} alt="" />
                                <img src={mongoDB} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-image">
                        <img  alt="" className=" lazyloaded" src={clozerr} />
                    </div>
                    <div className="portfolio-content-container">
                        <div className="portfolio-title clozerr-title">
                            <img src={clozerr_logo} alt="" className="portfolio-mob-logo" />Clozerr
                        </div>
                        <div className="portfolio-tag clozerr-tag">
                            <span> IoT </span>
                            <span> Data Analysis </span>
                            <span> Mobile </span>
                        </div>
                        <div className="portfolio-mobile-tag clozerr-tag">
                            <div> IoT </div>
                            <div> Data analysis </div> 
                            <div> Mobile </div>
                        </div>
                        <div className="portfolio-content">
                            Clozerr is a compass for local restaurant deals. This mobile app leverages Bluetooth beacon technology to create a mobile-first loyalty program.
                        </div>
                        <div className="portfolio-read-more">
                        <a href="#"> <i className="fas fa-caret-right"></i>Read more </a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-card bridge">
                    <div className="portfolio-logo">
                        <img src={Bridge_logo} alt="" />
                    </div>
                    <div className="portfolio-detail bridge-detail">
                        <div className="platform">
                            <div className="detail-title">Platform</div>
                            <div className="platform-logo">
                                <img src={web_mobile} alt="" />
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="detail-title">Timeline</div>
                            <div className="detail-numeral">8</div>
                            <div className="detail-text">months</div>
                        </div>
                        <div className="team">
                            <div className="detail-title">Team</div>
                            <div className="detail-numeral">5</div>
                            <div className="detail-text">members</div>
                        </div>
                        <div className="stack">
                            <div className="detail-title">Stack</div>
                            <div className="stack-icons">
                                <img src={Reacts} alt="" />
                                <img src={Flutter} alt="" />
                                <img src={Rails} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-image">
                        <img alt="" className="ls-is-cached lazyloaded" src={bridge} />
                    </div>
                    <div className="portfolio-content-container">
                        <div className="portfolio-title bridge-title">
                            <img src={Bridge_logo} alt="" className="portfolio-mob-logo" />Bridge
                        </div>
                        <div className="portfolio-tag bridge-tag">
                            <span> User Interface </span>
                            <span> User Experience </span>
                            <span> Mobile </span>
                            <span> Web </span>
                        </div>
                        <div className="portfolio-mobile-tag bridge-tag">
                            <div> User Interface </div>
                            <div> User Experience </div> 
                            <div> Mobile </div>
                            <div> Web </div> 
                        </div>
                        <div className="portfolio-content">
                            A school management application which is inclusive of the management, teachers, parents &amp; students towards constructive goals of every stakeholder in the upbringing of a kid.
                        </div>
                        <div className="portfolio-read-more">
                        <a href="#"> <i className="fas fa-caret-right"></i>Read more </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="view-all-button" id="view-all">
                <a href="#">
                    VIEW ALL CASES
                </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}