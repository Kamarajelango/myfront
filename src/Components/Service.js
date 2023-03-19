import React, { useState, useContext, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useParams, useNavigate } from 'react-router-dom'
import { ProductList } from '../Container/ProductList';
import { CartContext } from '../Cart/Context'

import Navigation from './Navigation';

function Service() {
    const navigate = useNavigate()
    useEffect(() => {
        let userentry = localStorage.getItem("Email")
        if (userentry === '' || userentry === null) {
            navigate('/Login')
        }
    }, []);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const params = useParams();
    const item = ProductList.find((element) => element.id === parseInt(params.id))
    const { service } = item
    // console.log(service)
    const { addToCart, cart, removeToCart } = useContext(CartContext)

    return <>
        <Navigation />
        <div className="container ">
            <div className='d-flex justify-content-space-evenly'>
                <h1>
                    {item.heading}
                </h1>
                {/* <img src={item.service[0].cardimage} alt='bah'/> */}
            </div>
            <p><i className="bi bi-star-half pe-2"></i> {item.headrating}</p>
            <p className="mb-5"><i className="bi bi-bag-check-fill"></i><span className="text-secondary">{item.headbookyear} </span> </p>

            <hr className="hr " />
            <br />


            <div className='row'>
                <div className="col-12 col-md-6 col-lg-8  p-5 double">
                    <h3 className='text-success'>Our Services</h3>
                    <div className=''>
                        <h4>{item.service[0].heading}</h4>
                        <div className='service-button'>

                            <p><i className="bi bi-star-fill fs-6 pe-2 "></i>{item.service[0].h1rating}</p>
                            <div className=''>
                                {
                                    cart.some(p => p.id === service[0].id) ?
                                        <button
                                            className='button-service1  ms-auto'
                                            onClick={() => removeToCart(service[0])}
                                        >Remove from cart
                                        </button>
                                        :
                                        <button
                                            className='button-service  ms-auto'
                                            onClick={() => addToCart(service[0])}
                                        >Add to cart </button>
                                }
                            </div>

                        </div>
                        <p className="header-title-right wow fadeInRight text-secondary" dangerouslySetInnerHTML={{ __html: item.service[0].h1amountdeatils }} />
                        <hr />

                        <ul className="header-title-right wow fadeInRight text-secondary" dangerouslySetInnerHTML={{ __html: item.service[0].h1description }} />
                        {/* <!-- Button trigger modal --> */}
                        <button className="modal-button" onClick={handleShow}>
                            View details
                        </button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header className='mx-auto' closeButton>
                                {/* <Modal.Title>Modal heading</Modal.Title> */}
                            </Modal.Header>
                            <Modal.Body>
                                <div>
                                    <img src={item.detailimage} alt="" style={{ height: '100%', width: '100%' }} />
                                </div>
                                <hr className="hr" />
                                <div>
                                    <img alt="" draggable="false"
                                        src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1642769111732-ef1145.png"
                                        className="css-9pa8cd" style={{ height: ' 100%', width: '100%' }} />
                                </div>
                                <hr className="hr" />

                                <div><img alt="" draggable="false"
                                    src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1638939055392-9c018f.png"
                                    className="css-9pa8cd" style={{ height: '100%', width: '100%' }} />
                                </div>
                                <hr className="hr" />
                                <div>
                                    <img alt="" draggable="false"
                                        src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1638939073179-e1a5e8.png"
                                        className="css-9pa8cd" style={{ height: '100%', width: '100%' }} />
                                </div>
                                <hr className="hr" />
                                <div>
                                    <img alt="" draggable="false"
                                        src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1638939050703-356915.png"
                                        className="css-9pa8cd" style={{ height: '100%', width: '100%' }} />
                                </div>

                            </Modal.Body>
                            {/* <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer> */}
                        </Modal>
                        <h4 className="mt-3">{item.service[1].heading}</h4>
                        <div className='service-button'>

                            <p><i className="bi bi-star-fill fs-6 pe-2"></i> {item.service[1].h2rating}</p>
                            <div className=''>
                                {
                                    cart.some(p => p.id === service[1].id) ?
                                        <button
                                            className='button-service1  ms-auto'
                                            onClick={() => removeToCart(service[1])}
                                        >Remove from cart
                                        </button>
                                        :
                                        <button
                                            className='button-service  ms-auto'
                                            onClick={() => addToCart(service[1])}
                                        >Add to cart </button>
                                }
                            </div>
                        </div>

                        <p className="header-title-right wow fadeInRight text-secondary" dangerouslySetInnerHTML={{ __html: item.service[1].h2amountdeatils }} />

                        <hr />
                        <ul className="header-title-right wow fadeInRight text-secondary" dangerouslySetInnerHTML={{ __html: item.service[1].h2description }} />

                        {/* <!-- Button trigger modal --> */}
                        <button className="modal-button" onClick={handleShow}>
                            View details
                        </button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header className='mx-auto' closeButton>
                                {/* <Modal.Title>Modal heading</Modal.Title> */}
                            </Modal.Header>
                            <Modal.Body>
                                <div>
                                    <img src={item.detailimage} alt="" style={{ height: '100%', width: '100%' }} />
                                </div>
                                <hr className="hr" />
                                <div>
                                    <img alt="" draggable="false"
                                        src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1642769111732-ef1145.png"
                                        className="css-9pa8cd" style={{ height: ' 100%', width: '100%' }} />
                                </div>
                                <hr className="hr" />

                                <div><img alt="" draggable="false"
                                    src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1638939055392-9c018f.png"
                                    className="css-9pa8cd" style={{ height: '100%', width: '100%' }} />
                                </div>
                                <hr className="hr" />
                                <div>
                                    <img alt="" draggable="false"
                                        src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1638939073179-e1a5e8.png"
                                        className="css-9pa8cd" style={{ height: '100%', width: '100%' }} />
                                </div>
                                <hr className="hr" />
                                <div>
                                    <img alt="" draggable="false"
                                        src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1638939050703-356915.png"
                                        className="css-9pa8cd" style={{ height: '100%', width: '100%' }} />
                                </div>

                            </Modal.Body>
                            {/* <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer> */}
                        </Modal>

                        <h4 className="mt-3">{item.service[2].heading}</h4>
                        <div className='service-button'>

                            <p><i className="bi bi-star-fill fs-6 pe-2"></i> {item.service[2].h3rating}</p>
                            <div className=''>
                                {
                                    cart.some(p => p.id === service[2].id) ?
                                        <button
                                            className='button-service1  ms-auto'
                                            onClick={() => removeToCart(service[2])}
                                        >Remove from cart
                                        </button>
                                        :
                                        <button
                                            className='button-service  ms-auto'
                                            onClick={() => addToCart(service[2])}
                                        >Add to cart </button>
                                }
                            </div>
                        </div>

                        <p className="header-title-right wow fadeInRight text-secondary" dangerouslySetInnerHTML={{ __html: item.service[2].h3amountdeatils }} />
                        <hr />
                        <ul className="header-title-right wow fadeInRight text-secondary" dangerouslySetInnerHTML={{ __html: item.service[2].h3description }} />

                        <h4 className="mt-3">{item.service[3].heading}</h4>
                        <div className='service-button'>

                            <p><i className="bi bi-star-fill fs-6 pe-2"></i>{item.service[3].h4rating}</p>
                            <div className=''>
                                {
                                    cart.some(p => p.id === service[3].id) ?
                                        <button
                                            className='button-service1  ms-auto'
                                            onClick={() => removeToCart(service[3])}
                                        >Remove from cart
                                        </button>
                                        :
                                        <button
                                            className='button-service  ms-auto'
                                            onClick={() => addToCart(service[3])}
                                        >Add to cart </button>
                                }
                            </div>
                        </div>

                        <p className="header-title-right wow fadeInRight text-secondary" dangerouslySetInnerHTML={{ __html: item.service[3].h4amountdeatils }} />

                        <hr />
                        <ul className="header-title-right wow fadeInRight text-secondary" dangerouslySetInnerHTML={{ __html: item.service[3].h4description }} />   </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 p-5 double text" style={{ border: '1px solid rgb(163, 159, 159)' }}>
                    <p className="cash"><svg width="4%" height="4%" viewBox="0 0 16 16" fill="" className="mx-2" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="7" fill="#6E43E5"></circle>
                        <path d="M12 8c0 .402-.238.767-.606.929l-.225.099a4.175 4.175 0 00-2.141 2.14l-.099.226a1.015 1.015 0 01-1.858 0l-.099-.225a4.175 4.175 0 00-2.14-2.141l-.226-.099a1.015 1.015 0 010-1.858l.225-.099a4.174 4.174 0 002.141-2.14l.099-.226a1.015 1.015 0 011.858 0l.099.225a4.175 4.175 0 002.14 2.141l.226.099c.368.162.606.527.606.929z" fill="#fff"></path>
                    </svg>

                        <span className="text-bolder text-dark">Save 15% on every order</span> <br />
                        <svg width="8%" height="5">
                        </svg><span className="text-muted">Get Plus now</span>
                    </p><br />
                    <p className="cash">
                        <svg width="4%" height="4%" viewBox="0 0 16 16" fill="" className="mx-2"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 7.929L8.472 1.4a.997.997 0 00-.904-.274l-5.04 1.008a.5.5 0 00-.393.393l-1.008 5.04a.998.998 0 00.274.904L7.928 15a.999.999 0 001.414 0L15 9.343a.999.999 0 000-1.414zM5.25 6a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                fill="#24A346"></path>
                        </svg><span className="text-bolder">CRED Pay</span> <br />
                        <svg width="8%" height="5">
                        </svg><span className="text-muted">Cashback up to ₹200</span>
                    </p><br />
                    <p className="cash">
                        <svg width="4%" height="4%" viewBox="0 0 16 16" fill="" className="mx-2"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 7.929L8.472 1.4a.997.997 0 00-.904-.274l-5.04 1.008a.5.5 0 00-.393.393l-1.008 5.04a.998.998 0 00.274.904L7.928 15a.999.999 0 001.414 0L15 9.343a.999.999 0 000-1.414zM5.25 6a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                fill="#24A346"></path>
                        </svg><span className="text-bolder">10% cashback on simple</span> <br />
                        <svg width="8%" height="5">
                        </svg><span className="text-muted"> Up to ₹500 | Use SIMPLE</span>
                    </p><br />
                    <p className="cash">
                        <svg width="4%" height="4%" viewBox="0 0 16 16" fill="" className="mx-2"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 7.929L8.472 1.4a.997.997 0 00-.904-.274l-5.04 1.008a.5.5 0 00-.393.393l-1.008 5.04a.998.998 0 00.274.904L7.928 15a.999.999 0 001.414 0L15 9.343a.999.999 0 000-1.414zM5.25 6a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                fill="#24A346"></path>
                        </svg><span className="text-bolder">Mobikwik | ZIP (Pay Later)</span> <br />
                        <svg width="8%" height="5">
                        </svg><span className="text-muted">Get 5% assured cashback</span>
                    </p><br />
                    <p className="cash"> <svg width="4%" height="4%" viewBox="0 0 16 16" fill="" className="mx-2"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15 7.929L8.472 1.4a.997.997 0 00-.904-.274l-5.04 1.008a.5.5 0 00-.393.393l-1.008 5.04a.998.998 0 00.274.904L7.928 15a.999.999 0 001.414 0L15 9.343a.999.999 0 000-1.414zM5.25 6a.75.75 0 110-1.5.75.75 0 010 1.5z"
                            fill="#24A346"></path>
                    </svg>
                        <span className="text-bolder"> Upto ₹200 Cashback</span> <br />
                        <svg width="8%" height="5">
                        </svg><span className="text-muted"> On Lazypay Transactions</span>
                    </p><br />
                    <p className="cash">
                        <svg width="4%" height="4%" viewBox="0 0 16 16" fill="" className="mx-2"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 7.929L8.472 1.4a.997.997 0 00-.904-.274l-5.04 1.008a.5.5 0 00-.393.393l-1.008 5.04a.998.998 0 00.274.904L7.928 15a.999.999 0 001.414 0L15 9.343a.999.999 0 000-1.414zM5.25 6a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                fill="#24A346"></path>
                        </svg><span className="text-bolder">Assured cashback on Paytm</span> <br />
                        <svg width="8%" height="5">
                        </svg><span className="text-muted">Up to ₹200 off</span>
                    </p><br />
                    <p className="cash"> <svg width="4%" height="4%" viewBox="0 0 16 16" fill="" className="mx-2"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15 7.929L8.472 1.4a.997.997 0 00-.904-.274l-5.04 1.008a.5.5 0 00-.393.393l-1.008 5.04a.998.998 0 00.274.904L7.928 15a.999.999 0 001.414 0L15 9.343a.999.999 0 000-1.414zM5.25 6a.75.75 0 110-1.5.75.75 0 010 1.5z"
                            fill="#24A346"></path>
                    </svg>
                        <span className="text-bolder">15% Off on postpe</span> <br />
                        <svg width="8%" height="5">
                        </svg><span className="text-muted">Flat 15% off up to ₹250</span>
                    </p><br />
                    <p className="cash"> <svg width="4%" height="4%" viewBox="0 0 16 16" fill="" className="mx-2"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15 7.929L8.472 1.4a.997.997 0 00-.904-.274l-5.04 1.008a.5.5 0 00-.393.393l-1.008 5.04a.998.998 0 00.274.904L7.928 15a.999.999 0 001.414 0L15 9.343a.999.999 0 000-1.414zM5.25 6a.75.75 0 110-1.5.75.75 0 010 1.5z"
                            fill="#24A346"></path>
                    </svg>
                        <span className="text-bolder text-dark">Get upto ₹250 Cashback</span> <br />
                        <svg width="8%" height="5">
                        </svg><span className="text-muted"> Valid on Mobikwik Wallet</span>
                    </p><br />
                    <p className="cash"> <svg width="4%" height="4%" viewBox="0 0 16 16" fill="" className="mx-2"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15 7.929L8.472 1.4a.997.997 0 00-.904-.274l-5.04 1.008a.5.5 0 00-.393.393l-1.008 5.04a.998.998 0 00.274.904L7.928 15a.999.999 0 001.414 0L15 9.343a.999.999 0 000-1.414zM5.25 6a.75.75 0 110-1.5.75.75 0 010 1.5z"
                            fill="#24A346"></path>
                    </svg>
                        <span className="text-bolder text-dark">15% off on Kotak cards</span> <br />
                        <svg width="8%" height="5">
                        </svg><span className="text-muted">15% off up to INR 250</span>
                    </p><br />
                </div>
            </div>

        </div>
        <div className="footer">
            <div className="footer mx-3" style={{ color: "black" }} >Terms and Condition</div>
            <div className="footer " style={{ color: "rgb(10, 10, 10)" }} >Privacy Policy</div></div>

        <p className="footer" style={{ color: 'darkgray' }}>Near Worker Pvt. Ltd.</p>

    </>
}

export default Service