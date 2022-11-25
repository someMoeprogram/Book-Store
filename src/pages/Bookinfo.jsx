import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Price from "../components/ui/Price";
import Rating from "../components/ui/Rating";

//Link to not working
const Bookinfo =( {books} ) => {
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
                                <img src="https://covers.openlibrary.org/b/id/8091016-L.jpg" className="books__selected--img" alt="" />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">Crack the coding interview</h2>
                                <Rating rating="4.5" />
                            </div>
                            <div className="book__selected--price">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Bookinfo;