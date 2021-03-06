import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-nav">
        <li className="footer-nav__item">
          <a
            href="https://www.youtube.com/c/%ED%95%A0%EC%88%98%EC%9E%88%EB%8B%A4%EC%95%8C%EA%B3%A0%ED%88%AC%EC%9E%90"
            target="_blank"
            className="footer-nav__link"
          >
            할수있다 알고투자 (유튜브 채널)
          </a>
        </li>
        <li className="footer-nav__item">
          <a
            href="https://han.gl/49BQk"
            target="_blank"
            className="footer-nav__link"
          >
            투자 자료 모음 (구글 시트)
          </a>
        </li>
        <li className="footer-nav__item">
          <a
            href="https://github.com/hal-to/hal-to.github.io"
            target="_blank"
            className="footer-nav__link"
          >
            소스(Github)
          </a>
        </li>
      </ul>
      <p className="copyright">
        &copy; Copyright 2021 by 일편단씸. 내용물은 모두 갓환국님의 영상과
        자료들입니다.
      </p>
    </footer>
  );
};

export default Footer;
