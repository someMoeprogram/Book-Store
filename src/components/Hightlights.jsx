import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/Highlight";

const Highlights =() => {
    return(
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why Choose <span className="purple">Library</span>
                    </h2>
                    <div className="highlight__wrapper">
                        <Highlight 
                            icon={<FontAwesomeIcon icon="bolt"/>}
                            title="Easy and Quick"
                            para="Get Access to the book you purchased online instantly!"
                        />
                        <Highlight 
                            icon={<FontAwesomeIcon icon="book-open"/>}
                            title="10,000+ Books"
                            para="Get Access to the book you purchased online instantly!"
                        />
                        <Highlight 
                            icon={<FontAwesomeIcon icon="tags"/>}
                            title="Affordable"
                            para="Get your hands on popular books for as little as $10."
                        />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Highlights