import React from "react";
export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <span className="footer__copyright">
              © 2024 Brand All Rights Reserved
            </span>

            <nav className="footer__social-media">            
              <a
                href="https://www.pinterest.ru/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="footer__social-media-icon pinterest"></div>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <div className="footer__social-media-icon twitter"></div>
              </a>
            </nav>
          </div>
        </div>
      </footer>
    );
  }
}
