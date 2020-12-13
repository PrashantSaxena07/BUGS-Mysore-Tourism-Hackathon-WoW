import ExCard from "../components/ExcursionCard.jsx";
import React from "react";
import img from "../img/ex_cov1.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';


const Excursions=()=>{

    return(

            <div className="container-lg d-grid gap-3">
                <div className="d-grid gap-3">
                    <div className="p-5 row">
                        <img className="w-100" style={{ height: "100vh"}} src={img} alt="#"></img> 
                    </div>
                    
                    <div className="p-5 row">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    Sort By:
                                </div>
                                
                                <div className="col-sm">
                                    <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Name
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Ranking
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                                </div>
                                <div className="col-sm">
                                        <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Popularity
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm">

                                </div>
                                <div className="col-sm">

                                </div>
                            </div>
                        </div>    
                    </div>

                    <div className="p-5 row">
                        {ExCard()}
                        {ExCard()}
                        {ExCard()}
                    </div>
                    <div className="p-5 row">
                        {ExCard()}
                        {ExCard()}
                        {ExCard()}
                    </div>
                    <div className="p-5 row">
                        {ExCard()}
                        {ExCard()}
                        {ExCard()}
                    </div>
                </div>
            </div>
    )
}


export default Excursions;