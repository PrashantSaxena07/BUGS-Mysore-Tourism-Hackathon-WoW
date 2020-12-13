import React from "react";
import img from "../img/map4.jpg"
import Card from "../component/Card"
import img1 from "../img/Mysore1.jpg"
import img2 from "../img/Mysore2.jpg"
import img3 from "../img/Mysore3.jpg"
import Headest from "../component/Headest"

const Destination = () => {

    return (
        <>
            <div className="conatiner">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <img src={img} style={{ height: "70vh", width: "100%" }} alt="#"></img>

                    </div>

                </div>
            </div>   
            
                <div>
                    <div className="row">

                        <Card img={img1} />
                        <Card img={img2} />
                        <Card img={img3} />
                    </div>
                </div> 
                <div>   
                    <div className="row">

                        <Card img={img1} />
                        <Card img={img2} />
                        <Card img={img3} />
                    </div>
                </div>
                <div>
                    <div className="row">

                        <Card img={img1} />
                        <Card img={img2} />
                        <Card img={img3} />
                    </div>
                </div>
                
            
        </>
    )
}

export default Destination;