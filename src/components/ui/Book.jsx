import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Price from "./Price";
import Rating from "./Rating";

// link to = not working 
const Book = ({book}) => {
  return (
    <div className="book">
      <a href ={`/books/${book.id}`}> 
        <figure className="book__img--wrapper">
          <img
            src={book.url}
            alt=""
            className="book__img"
          />
        </figure>
      </a>
      <div className="book__title">
        <a href ={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </a>
      </div>
      <Rating rating={book.rating} />
      <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
    </div>
  );
};

export default Book
