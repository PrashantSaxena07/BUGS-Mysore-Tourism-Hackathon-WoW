import React from "react"


const Card = (props) => {
    return (
        <div className="col-lg-4 col-md-4 col-sm-4 my-5  d-flex justify-content-center align-items-center">
            <div class="card" style={{width:"18rem"}}>
                <img src={props.img} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <p class="card-text"><h4 className="text-primary align-items-center">TOURSHOTSPOT</h4> <br/>operates within a wide network largely based in South India, with its services varying from crafting
of experiential tours, hotel reservations, transportation and other tour related services.</p>
                </div>
            </div>
        </div>
    )

}

export default Card;