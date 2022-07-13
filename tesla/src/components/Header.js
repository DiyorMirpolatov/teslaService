import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="d-flex justify-content-evenly align-items-center">
        <div className="logo">
          <a href="#q">
            <h1 className="text-center">TST</h1>
            <p className="text-center">TESLA SERVICE TASHKENT</p>
          </a>
        </div>
        <div>
          <ul className="d-lg-flex headerUl d-none gap-5 justify-content-between">
            <li className="">
              <a href="#q">Asosiy Sahifa</a>
            </li>
            <li>
              <a href="#about">Biz Haqimizda</a>
            </li>
            <li>
              <Link to={'/cars'}>Mashinalar</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="d-lg-flex headerUl d-none">
            <li>
              <a href="tel: =998930755620">
                <i className="fa-solid fa-phone"></i>Aloqa: +998999999999
              </a>
            </li>
          </ul>
        </div>
        <button
          className="btn offBtn btn-warning d-lg-none d-block text-white"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div
          className=" offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="d-flex justify-content-end offcanvas-header ">
            <button
              type="button"
              className="btn-close text-end"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="d-flex headerUl flex-column gap-5 justify-content-between">
              <li className="">
                <a href="#q">Asosiy Sahifa</a>
              </li>
              <li>
                {" "}
                <a href="#about">Biz Haqimizda</a>
              </li>
              <li>
                <Link to={'/cars'}>Mashinalar</Link>
              </li>
              <li>
                <a href="tel: +998930755620">
                  <i className="fa-solid fa-phone"></i> Call now: +998999999999
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
