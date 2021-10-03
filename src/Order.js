import React from 'react'
import "./Order.css";
import CheckoutProduct from "./CheckoutProduct";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
function Order() {
    return (
        <div  className="order">
             <h2>order</h2>
            <p>{moment.unix(Order.data.created)}</p>
             <p className="order__id">
            <small>{Order.id}</small>
            </p>
              {Order.data.basket?.map(item => (
                <CheckoutProduct 
                id={item.id}
                title ={item.title }
                image = { item.image }
                price = { item.price }
                rating = { item.rating }
                hideButton
                />

            ))}


                   <CurrencyFormat
                    renderText = {(value) => (
                        <>
                        <h3 className="order__total">  order total: {value}                        </h3>
                        </>
                    )}
                     
                decimalScale = {2}
                value = {Order.data.amount /100} 
                displayType = {"text"}
                 thousandSeparator = {true}
                 prefix = {"$"}
                 />

        </div>
    )
}

export default Order
