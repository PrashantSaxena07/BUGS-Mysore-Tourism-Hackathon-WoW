import React from "react";
import img from "../img/Mysore5.jpg";
import "../css/Home.css";    

import HomeCard from '../components/HomeCard'

const Home=()=>{

    return (
        <>
            <div className="container-lg d-grid gap-3">
                <div className="d-grid gap-3">
                    <div className="p-5 row cont">
                        <img className="w-100" style={{ height: "100vh" }} src={img} alt="#"></img>
                        <div class="centered">
                                <h1>Mysuru</h1>
                        </div>
                    </div>
                    <div className="row p-5">
                        <p>
                                The cultural ambiance and achievements of Mysuru earned it the sobriquet CulturalCapital of Karnataka. Mysuru is noted for its heritage structures and palaces, includingthe Mysuru Palace, and for the festivities that take place during the Dasara festivalwhen the city receives many tourists from around the world.
                                India's tourism sector may lose 4 crore jobs due to COVID-19, a debilitating loss of 5lakh crore, this is the time where we all have to come together and come up with aninnovative and safe way to keep this industry alive!
                        </p>
                    </div>
                    <div class="container overflow-hidden">
                    <div class="row gy-5">
                        <div class="col-6">
                                <div class="p-3 border bg-light"><HomeCard title="nightlife" img={img} /> </div>
                        </div>
                        <div class="col-6">
                                <div class="p-3 border bg-light"><HomeCard title ="daylife" img={img} /></div>
                        </div>
                        <div class="col-6">
                                <div class="p-3 border bg-light"><HomeCard title="afternoon life" img={ img}/></div>
                        </div>
                        <div class="col-6">
                                <div class="p-3 border bg-light"><HomeCard title="Evening life" img={ img}/></div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home;