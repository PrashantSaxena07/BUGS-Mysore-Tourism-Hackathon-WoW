import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "../img/ex_cov1.jpg";

// const { default: Excursions } = require("../component/Excursions");



const ExcursionCard = () => {
    return (
        <>
        <div class="col-sm">
            <div class="card" style={{ width: "18rem"}}>
                    <img src={ img} className="card-img-top" alt={{}}></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default ExcursionCard;