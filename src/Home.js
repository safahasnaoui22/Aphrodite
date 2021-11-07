import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return ( <
        div className = "home" >
        <
        div className = "home_container" >
        <
        img className = "home_image"
        src = "https://th.bing.com/th/id/R.b82363bcf8819b4ae57c13b1270dfa98?rik=cydfZQZ3edzuGg&riu=http%3a%2f%2fwww.bjo-france.com%2fwp-content%2fuploads%2f2020%2f04%2fdiamonds-2142417_1280.jpg&ehk=z8Lu69wjXM1lnJ33q7l62CayWV5lOUkdC%2b%2fACMvfBEY%3d&risl=&pid=ImgRaw&r=0"
        alt = "" /
        >

        <
        div className = "home_row" >
        <
        Product id = "12321341"
        title = "Ring"
        price = { 250 }
        rating = { 5 }
        image = "https://s7d4.scene7.com/is/image/GabrielCo/ER6687W44JJ-1" /
        >
        <
        Product id = "49538094"
        title = "jewelry brasle diamond"
        price = { 239.0 }
        rating = { 4 }
        image = "https://th.bing.com/th/id/R.ac4a61333655bb70e17096cecc9b8a85?rik=bJPTw9ubBVkXsw&pid=ImgRaw&r=0" /
        >
        <
        /div>

        <
        div className = "home_row" >
        <
        Product id = "4903850"
        title = "fashion"
        price = { 199.99 }
        rating = { 3 }
        image = "https://media.istockphoto.com/photos/fashion-jewellery-picture-id936849290" /
        >
        <
        Product id = "23445930"
        title = "Necklace"
        price = { 98.99 }
        rating = { 5 }
        image = "https://th.bing.com/th/id/R.34454b90caf205ae6ff5a5a30189fe6f?rik=NA4zxyFqbD6tNw&pid=ImgRaw&r=0" /
        >
        <
        Product id = "3254354345"
        title = "jewelry ne diamond"
        price = { 598.99 }
        rating = { 4 }
        image = "https://th.bing.com/th/id/R.4a602caaa48f25bf75b6c85db491a81b?rik=TIyp4Kx1ZTymBQ&pid=ImgRaw&r=0" /
        >
        <
        /div>

        <
        div className = "home_row" >
        <
        Product id = "90829332"
        title = "jewelry ne diamond"
        price = { 1094.98 }
        rating = { 4 }
        image = "https://th.bing.com/th/id/OIP.oavCsP_JZsBmGniXoPHu-QHaHa?pid=ImgDet&rs=1" /
        >
        <
        /div> < /
        div > <
        /div>
    );
}

export default Home;