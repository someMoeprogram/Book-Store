import React from "react";
import book from "./Book";

const Price = ( {salePrice, originalPrice} ) => {
  return (
    <div>
        <div className="book__price">
            <div>
                {salePrice ? (
                    <>
                        <span className="book__price--normal">
                            ${originalPrice.toFixed(2)}
                        </span> 
                            ${salePrice.toFixed(2)}
                    </>

                ) : (
                    <>${originalPrice.toFixed(2)} </>
                )}
            </div>
        </div>
        
    </div>
  );
};

export default Price;
