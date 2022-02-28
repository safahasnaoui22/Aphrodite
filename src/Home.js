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
        src = "https://img.static-rmg.be/a/view/q75/w/h/2171972/gettyimages-867341470-jpg.jpg"
        alt = "" /
        >

        <
        div className = "home_row" >
        <
        Product id = "12321341"
        title = "DrEsS"
        price = { 250 }
        rating = { 0 }
        image = "https://th.bing.com/th/id/OIP.yHi86ts-LqEMV_EDjxZvKQHaLG?pid=ImgDet&rs=1" /
        >
        <
        Product id = "49538094"
        title = "DrEsS"
        price = { 239.0 }
        rating = { 0 }
        image = "https://simages.tbdress.com/Upload/Image/2015/42/510-680/a73437cb-f0f0-4e62-890f-92e5c543e464.jpg" /
        >
        <
        /div>

        <
        div className = "home_row" >
        <
        Product id = "4903850"
        title = "Talon"
        price = { 199.99 }
        rating = { 0 }
        image = "https://th.bing.com/th/id/R.bdfa6a64bd57428495e526d8d31ba1ec?rik=NZRM96w9S6%2fi8Q&pid=ImgRaw&r=0" /
        >
        <
        Product id = "23445930"
        title = "PArfuM"
        price = { 98.99 }
        rating = {0 }
        image = "https://th.bing.com/th/id/OIP.CkWp_-BpJAxI1a4c05kH5wHaFd?pid=ImgDet&rs=1" /
        >
        <
        Product id = "3254354345"
        title = "sac "
        price = { 598.99 }
        rating = { 0 }
        image = "https://th.bing.com/th/id/R.54e2291b03fa604370680abf8fe23037?rik=La1SFPg4IJ7GUw&pid=ImgRaw&r=0" /
        >
        <
        /div>

        <
        div className = "home_row" >
        <
        Product id = "90829332"
        title = "Sac "
        price = { 1094.98 }
        rating = { 0 }
        image = "https://th.bing.com/th/id/R.14e407d6320e2eb8f7398056df058e36?rik=jVW4tUwnobJC%2fA&riu=http%3a%2f%2fwww.ruthschoice.be%2fgarcon%2fburberry-sac-femme-nouvelle-collection---5.jpg&ehk=tU1Fc8uhYylZ2I%2fQR5FdNT9F53zrSSlk8zzLJ7LWm98%3d&risl=&pid=ImgRaw&r=0" /
        >
        <
        /div> < /
        div > <
        /div>
    );
}

export default Home;