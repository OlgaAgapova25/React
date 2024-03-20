import React from "react";
export default class Advantages extends React.Component {
  render() {
    return (
      <div className="advantages">
        <div className="container">
          <div className="advantages__content">
            <section className="advantages__item">
              <img
                src="/advantages_1.svg"
                alt="Free delivery"
                className="advantages__item-icon"
              />
              <h3 className="advantages__item-title">
                Free Delivery
                <span className="advantages__item-description">
                  Worldwide delivery on all. Authorit tively morph
                  next-generation innov tion with extensive models.
                </span>
              </h3>
            </section>
            <section className="advantages__item">
              <img
                src="/advantages_2.svg"
                alt="Sales & discounts"
                className="advantages__item-icon"
              />
              <h3 className="advantages__item-title">
                Sales & discounts
                <span className="advantages__item-description">
                  Worldwide delivery on all. Authorit tively morph
                  next-generation innov tion with extensive models.
                </span>
              </h3>
            </section>
            <section className="advantages__item">
              <img
                src="/advantages_3.svg"
                alt="Quality assurance"
                className="advantages__item-icon"
              />
              <h3 className="advantages__item-title">
                Quality assurance
                <span className="advantages__item-description">
                  Worldwide delivery on all. Authorit tively morph
                  next-generation innov tion with extensive models.
                </span>
              </h3>
            </section>
          </div>
        </div>
      </div>
    );
  }
}