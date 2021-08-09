/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <a
          href="https://practicum.yandex.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__about transparency"
        >
          About us
        </a>
        {/* TODO link the link below to the header */}
        <a href="#" className="footer__top transparency">
          Back to top ↑
        </a>
        <ul className="footer__contact">
          <li className="footer__contact-source-wrapper">
            <a
              href="mailto:msgordienko@yandex-team.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__contact-source transparency"
            >
              msgordienko@yandex-team.com
              {/* Email */}
            </a>
          </li>
          <li className="footer__contact-source-wrapper">
            <a
              href="https://www.linkedin.com/in/mariya-gordienko-ab78004b/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__contact-source transparency"
            >
              LinkedIn
            </a>
          </li>
          <li className="footer__contact-source-wrapper">
            <a href="tel:1510646625" className="footer__contact-source transparency">
              +1-510-646-62-5
            </a>
          </li>
        </ul>
        <div className="footer__credits">
          <p className="footer__disclaimer">
            This website is developed by Practicum by Yandex students
          </p>
          <p className="footer__authors">
            Colin Maretsky, Denise Hung, Rebecca Burch, and Jake McCambley{' '}
          </p>
        </div>
        <p className="footer__copyright">&#169; 2020 Practicum by Yandex</p>
      </div>
    </footer>
  );
}
