import React from "react";



const Home = () => {

    return (
        <>
            <div className="my-5 ">
                <h1 className="text-center display-3">Contact US</h1>
            </div>
            <div className="container contact_div my-5">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form action="http://localhost:3001/contact" method="POST">
                            <div className="form-group my-2">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" placeholder="name@example.com" />
                            </div>
                            <div className="form-group my-2">
                                <label for="exampleFormControlInput1">Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="name" placeholder="Enter Your Name" />
                            </div>
                            <div className="form-group my-2">
                                <label for="exampleFormControlInput1">Phone Number</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" placeholder="mobile number" />
                            </div>
                            <div className="form-group my-2">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" name="message" rows="3"></textarea>
                            </div>
                            <button className="btn btn-primary my-2" type="submit">Submit form</button>
                        </form>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Home;