import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <a href="https://practicum.yandex.com/" target="_blank" rel="noopener noreferrer" className="footer__about">
        About us
      </a>
      <a href="/" target="_blank" rel="noopener noreferrer" className="footer__top">
        Back to top ↑
      </a>
      <ul className="footer__contact">
        <li>
          <a href="mailto:msgordienko@yandex-team.com" target="_blank" rel="noopener noreferrer" className="footer__email">
            msgordienko@yandex-team.com
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mariya-gordienko-ab78004b/" target="_blank" rel="noopener noreferrer" className="footer__social">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="tel:1510646625" className="footer__phone">
            +1-510-646-62-5
          </a>
        </li>
      </ul>
      <div className="footer__credits">
        <p className="footer__disclaimer">This website is developed by Practicum by Yandex students</p>
        <p className="footer__authors">Colin Maretsky, Denise Hung, Rebecca Burch, and Jake McCambley</p>
      </div>
      <p className="footer__copyright">&#169; 2020 Practicum by Yandex</p>
    </footer>
  );
}
