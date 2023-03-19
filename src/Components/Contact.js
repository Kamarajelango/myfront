import React from 'react'
import Navigation from './Navigation';

function Contact() {
      return <>
        <div className="container">
            <Navigation />
            <div className="card bg-dark text-white">
                <img src="https://img.freepik.com/free-photo/double-exposure-image-business-person_31965-2287.jpg?w=826"
                    className="card-img img-fluid" alt="..." />
                <div className="card-img-overlay">                                       
                        <h1 className="card-title align-self-center text-danger fs-1 cont">Contact Us</h1>                                           
                </div>
            </div><br /><br />
            <div className="row">
                <div className="col-12 col-md-6"><img src="https://cdn.pixabay.com/photo/2018/02/19/09/15/book-3164558_960_720.jpg" className='img-fluid img-thumbnail'  alt="" /></div>
                <div className="col-12 col-md-6">
                    <h6 className="mb-3 text-primary fw-bolder">Get In Touch</h6>
                    <h1 className=" fw-bolder">Any Question? <br /> Write Down And Send Us</h1>
                   <form action='https://formspree.io/f/xoqzvkdq' method='POST'>
                   <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label"></label>
                        <input type="text" className="form-control" id="formGroupExampleInput"
                            placeholder="Enter your full name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label"></label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Phone number" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput3" className="form-label"></label>
                        <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Your email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput4" className="form-label"></label>
                        <input type="text" className="form-control" id="formGroupExampleInput4"
                            placeholder="Service Description" />
                    </div>
                    <div className="form-floating ">
                        <textarea className="form-control " placeholder="Message" id="floatingTextarea2"
                            style={{ height: '100px' }}></textarea>
                        <label htmlFor="floatingTextarea2">Message</label>
                    </div><br />
                    <button className="btn btn-danger" >GET A QUOTE</button>
                   </form>
                   
                </div>
            </div><br /><br /><br />
            <div className="row ">
                <div className="col">
                    <div className="card rounded-4" style={{ width: "16rem" }}>
                        <div className="card-body">
                            <h5 className="card-title fw-bolder">Main Office</h5>
                            <div className="div fw-bold">Keelapalur,Ariyalur.</div>
                            <p>6/1, keelapalur,near cettinadu cement factory,Ariyalur</p>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card rounded-4" style={{ width: "16rem" }}>
                        <div className="card-body">
                            <h5 className="card-title fw-bolder">Make a Call</h5><br />
                            <div className="fw-bold">+919876543210</div>
                            <p>Mon - sat:09am - 07pm</p>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card rounded-4" style={{ width: "16rem" }}>
                        <div className="card-body">
                            <h5 className="card-title fw-bolder">Send <br />a Mail</h5><br />
                            <div className="div"></div>
                            <p>Nearworker22@gmail.com</p>

                        </div>
                    </div>
                </div>
            </div><br />
            <div className="container bg">
                <hr /><br /><br />

            </div>
            <div className="footer">
                <div className="footer mx-3" style={{ color: "black" }} >Terms and Condition</div>
                <div className="footer " style={{ color: "rgb(10, 10, 10)" }} >Privacy Policy</div></div>

            <p className="footer" style={{ color: 'darkgray' }}>Near Worker Pvt. Ltd.</p>

        </div>
    </>
}

export default Contact