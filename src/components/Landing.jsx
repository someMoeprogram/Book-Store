import React from "react";
import { Link } from "react-router-dom";
import UndrawBooks from "../assets/Undraw_Books.svg";

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>America's Most Awarded Online Library Platoform</h1>
            <h2>
              Find your dream book with <span className="purple">Library</span>
            </h2>
            <Link to="#features">
              <button className="btn">Browse Books</button>
            </Link>
            <figure className="header__im--wrapper">
              <img src={UndrawBooks} alt="" />
            </figure>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Landing;
