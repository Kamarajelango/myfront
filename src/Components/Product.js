import React, { useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { useParams, useNavigate } from 'react-router-dom'
import { ProductList } from '../Container/ProductList';

import Navigation from './Navigation';

function Product() {
    const navigate = useNavigate()
    useEffect(() => {
        let userentry = localStorage.getItem("Email")
        if (userentry === '' || userentry === null) {
            navigate('/Login')
        }
    }, []);
    const params = useParams()
    const props = ProductList.find((element) => element.id === parseInt(params.id))
    return <>
        <Navigation />
        <div className="container">
            <div className="card bg-dark text-white" >
                <img src={props.image} className="card-img img-fluid" alt="..." style={{ height: "500px" }} />
                <div className="card-img-overlay">
                    <div>
                        <h3 className="card-title text-center ">{props.headername}</h3>
                        <p className="card-text text-center fs-4 ">{props.choose} </p><br />
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col">

                            <div className="card my  mx-3 cursor-pointer " style={{ width: "260px" }} role='button' onClick={() => { navigate(`/service/${params.id}`) }} >
                                <img src={props.cardimage} className="card-img-top img-fluid" style={{ height: "198px", width: "258px" }}
                                    alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-dark text-center">{props.title}</h5><br />
                                    <div className='d-grid gap-2 '>
                                        <button className=" btn btn-info rounded-pill">Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </div><br />

            <h4>FAQs</h4><br />

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header >
                        <b>{props.acorqus0}</b>
                    </Accordion.Header>
                    <Accordion.Body className=" text-muted">
                        {props.acorans0}
                    </Accordion.Body>
                </Accordion.Item><br />

                <Accordion.Item eventKey="1">
                    <Accordion.Header> <b>{props.acorqus1} </b></Accordion.Header>
                    <Accordion.Body className=" text-muted">
                        {props.acorans1}
                    </Accordion.Body>
                </Accordion.Item><br />

                <Accordion.Item eventKey="2">
                    <Accordion.Header><b> {props.acorqus2}</b> </Accordion.Header>
                    <Accordion.Body className=" text-muted">
                        {props.acorans2}
                    </Accordion.Body>
                </Accordion.Item><br />

                <Accordion.Item eventKey="3">
                    <Accordion.Header><b>{props.acorqus3}</b> </Accordion.Header>
                    <Accordion.Body className=" text-muted">
                        {props.acorans3}
                    </Accordion.Body>
                </Accordion.Item><br />

                <Accordion.Item eventKey="4">
                    <Accordion.Header><b>{props.acorqus4}</b> </Accordion.Header>
                    <Accordion.Body className=" text-muted">
                        {props.acorans4}
                    </Accordion.Body>
                </Accordion.Item><br />

                <Accordion.Item eventKey="5">
                    <Accordion.Header><b>Do you have a service guarantee?</b> </Accordion.Header>
                    <Accordion.Body className=" text-muted">
                        Yes.Our experts give you a service guarantee of 30 days.
                    </Accordion.Body>
                </Accordion.Item><br />
            </Accordion>


            <div>
                <h4>{props.abouttitle}</h4>
                <ul className="text-muted no-bullets">{props.about1}<br />
                    <p className='container'>
                        <h3 className=''>{props.about00}</h3>
                        <li>{props.about2}</li>
                        <li>{props.about3}</li>
                        <li>{props.about4} </li>
                        <li> {props.about5} </li>
                        <li> {props.about6} </li>
                        <li>{props.about7}</li>
                        <li>{props.about8} </li>

                    </p>
                </ul>
            </div>
        </div><br /><br />
        <div className="footer">
            <div className="footer mx-3" style={{ color: "black" }} >Terms and Condition</div>
            <div className="footer " style={{ color: "rgb(10, 10, 10)" }} >Privacy Policy</div></div>

        <p className="footer" style={{ color: 'darkgray' }}>Near Worker Pvt. Ltd.</p>
    </>
}

export default Product