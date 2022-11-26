import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Price from "../components/ui/Price";
import Rating from "../components/ui/Rating";
// import Summary from "../components/ui/Summary";

//Link to not working
const BookInfo =( {books} ) => {
    //useParams () allows to you to take ids and import them
    const {id} = useParams( );
    const book = books.find(book => +book.id === +id);
    console.log(book)
    return (
        <div id="books__body">
            <main className="books__main">
                <div className="books__container">
                    <div className="row"> 
                        <div className="book__selected--top">
                            <a href = "/books" className="book__link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </a>
                            <a href="/books" className="book__link">
                                <h2 className="book__selected--title--top">Books</h2>
                            </a>
                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img src= {book.url} className="book__selected--img" alt="" />
                            </figure>

                            <div className="book__selected--description">
                                <h2 className="book__selected--title">
                                    {book.title}
                                </h2>
                                <Rating rating={book.rating}/>
                                <div className="book__selected--price">
                                    <Price originalPrice={book.originalPrice} salePrice={book.salePrice}/>
                                </div>
                            
                                <div className="book__summary">
                                    <h3 className="book__summary--title">Summary</h3>
                                    <p className="book__summary--para">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam est labore beatae omnis nihil ducimus non officiis iste at nesciunt? Sunt atque est maiores vitae repellat, excepturi quos voluptates iure!
                                    </p>
                                    <p className="book__summary--para">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam est labore beatae omnis nihil ducimus non officiis iste at nesciunt? Sunt atque est maiores vitae repellat, excepturi quos voluptates iure!
                                    </p>
                                    {/* <Summary Summary={book.summary}/> */}
                                </div>
                                <button className="btn">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="book__selected__title--top">
                                Recomanded Books
                            </h2>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default BookInfo;