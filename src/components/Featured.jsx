import React from "react";
import Book from "./ui/Book";
import {books} from '../data'
import { faBreadSlice } from "@fortawesome/free-solid-svg-icons";

const Featured = () => {
  console.log();
  console.log()
  function getFiveStarBook(){
  }
  return (
    <div>
      <section id="features">
        <div className="container">
          <dir className="row">
            <h2 className="section__title">
              Featured <span className="purple">Books</span>
            </h2>
          </dir>
          <div className="books">
            {books
              .filter((book) => book.rating === 5) 
              .slice(0,4)
              .map((book) => (
              <Book book={book} key={book.id}/>))
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;
