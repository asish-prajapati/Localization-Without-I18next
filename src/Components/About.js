import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    const { title1, desc1, title2, desc2, button } = this.props.data;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src="https://nordicgiant2.github.io/react-nice-resume-page/images/profilepic.jpg"
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>{title1}</h2>

              <p>{desc1}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>{title2}</h2>
                  <p className="address">
                    <span>{desc2.name}</span>
                    <br />
                    <span>
                      {desc2.street}
                      <br />
                      {desc2.city} {desc2.state}, {desc2.zipcode}
                    </span>
                    <br />
                    <span>{desc2.phone}</span>
                    <br />
                    <span>{desc2.email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="#" className="button">
                      <i className="fa fa-download"></i>
                      {button}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
