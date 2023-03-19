import React, { useState, useContext, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Modal from 'react-bootstrap/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from 'react-bootstrap/Button';
import Badge from '@mui/material/Badge';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import swal from 'sweetalert';
import { CartContext } from '../Cart/Context'


function Navigation() {
  const stripe_key = 'pk_test_51MM7n2SIvvrfTmkOSaMrl3N5uqKCjAzOMe1yGavRjMrs4YOacGd9ggjbsmBqEJ059lmaUhjsRNNla6eYkl0WLzYp00ORyTdDXo'
  const [signout, setSignout] = useState(false)
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handledClose = () => setShow(false);
  const [total, setTotal] = useState(0)
  const { cart, changeQuantity, removeToCart, cartEmpty } = useContext(CartContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem("Email"))
      navigate('/Login')
  }, [signout])

  const handleSignout = () => {
    localStorage.clear();
    setSignout(true)
  }

  useEffect(() => {
    setTotal(
      cart.reduce((acc, cur) => acc + Number(cur.price) * cur.quantity, 0)
    )
  }, [cart])
  const [product] = useState({
    name: 'products',
    price: total,
  })

  const handleSuccess = () => {
    swal({
      text: "Your payment was successfully",
      icon: "success",
      timer: 4000,
      button: false,
    });
  }
  const handleFailure = () => {
    swal({
      text: "Your payment was Failed",
      icon: "error",
      timer: 4000,
    });
  }
  const handleToken = async (token) => {

    try {
      await axios.post("http://localhost:5000/checkout", {
        token
      }
      )
      handleFailure()
    } catch (error) {
      console.log(error)
      handleSuccess()
      cartEmpty(cart)
    }
  }

  return (
    <Navbar bg="light" expand="lg" sticky="top" className='shadow-sm p-3 mb-5 bg-white rounded'>
      <Container>
        <Link to='/Home' className='text_decoration'> <Navbar.Brand className='text-info'>Nearworker</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to='/Home' className='text_decoration'> <Nav.Link href='!#' className='text-info'>Home</Nav.Link></Link>
            <li className="nav-item dropdown">
              <div className="nav-link dropdown-toggle text-info pointer" href="!#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                Category
              </div>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ color: 'darkturquoise' }}>
                <li><Link to='/product/1' className="dropdown-item">Solar</Link></li>
                <li><Link to='/product/6' className="dropdown-item" >AC</Link></li>
                <li><Link to='/product/11' className="dropdown-item" >TV</Link></li>
                <li><Link to='/product/16' className="dropdown-item">Refrigerator</Link></li>
                <li><Link to='/product/21' className="dropdown-item" >Water Purifier</Link></li>
                <li><Link to='/product/26' className="dropdown-item" >Inveter(UPS)</Link></li>
                <li><Link to='/product/31' className="dropdown-item">Wiring</Link></li>
                <li><Link to='/product/36' className="dropdown-item" >Plumbering</Link></li>
                <li><Link to='/product/41' className="dropdown-item" >Washing Machine</Link></li>
              </ul>
            </li>

            <Link to='/ContactUs' className='text_decoration' ><Nav.Link href='!#' className='text-info'>ContactUs</Nav.Link></Link>
            <Link to='/About' className='text_decoration'><Nav.Link href='!#' className='text-info'>About</Nav.Link></Link>

            <Nav.Link to='/Cart' className='text-info ' onClick={handleShow}>

              <Badge badgeContent={cart.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </Nav.Link>
            <Modal show={show} onHide={handledClose} className='modal right from-right '>
              <Modal.Header closeButton>
                <Modal.Title>Cart</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className='row'>
                  <div>
                    {cart.length === 0 ? (<div className='cart-items-empty'>
                      <h5>No items are added</h5>
                      <img className='img-fluid mx-auto d-block mt-5 pt-3' src='https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png' alt="cartimage" />
                    </div>) : (
                      cart.map((items) => (

                        <div key={items.id}>
                          <div
                            style={{
                              display: 'flex',
                              padding: 5,
                              border: "1px solid grey",

                              justifyContent: "space-between",

                            }}>
                            <div style={{ display: 'flex', gap: 5 }}>
                              <img
                                className='img-fluid'
                                src={items.cardimage}
                                alt='...'
                                style={{ width: 60 }}
                              />
                              <div>
                                <span
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: 'space-evenly',
                                  }}
                                >{items.heading}</span>

                                <b>₹{items.price}</b>
                              </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", }}>
                              <button className='btn btn-outline-success m-1' onClick={() => changeQuantity(items.id, items.quantity - 1)}>-</button>
                              <span >{items.quantity}</span>
                              <button className='btn btn-outline-warning m-1' onClick={() => changeQuantity(items.id, items.quantity + 1)}>+</button>
                              <DeleteIcon
                                onClick={() => removeToCart(items)}
                                className='text-danger pointer '
                              />
                            </div>
                          </div>
                        </div>
                      ))
                    )
                    }
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <div className='me-auto'>
                  <b style={{ alignSelf: 'center', justifyContent: "space-between" }}>Total: ₹{total}</b>
                </div>
                <div>
                  <StripeCheckout
                    name="NearWorker"
                    description={`Your amount is ₹ ${Math.round(total)}`}
                    stripeKey={stripe_key}
                    token={handleToken}
                    amount={product.price * 100}
                    billingAddress
                    shippingAddress
                    currency="INR"
                  >
                    <Button variant="info" onClick={handledClose}>
                      Payment<span><i className="bi bi-arrow-right-circle-fill mx-1"></i></span>
                    </Button>
                  </StripeCheckout>
                </div>

              </Modal.Footer>
            </Modal>
            {/* <Link to="/Login"><button className="btn login">Sign in</button></Link>  */}

            <li className="nav-item dropdown">
              <div className="nav-link dropdown-toggle icon pointer" role='button' id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false" >
                <i className="bi bi-person-circle fs-5 " />
              </div>
              <ul className="dropdown-menu">
                <li><div className="dropdown-item" >{
                  localStorage.getItem("Name")
                }</div></li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li><div className="dropdown-item pointer" role='button' onClick={handleSignout}>Sign out</div></li>
              </ul>
            </li>





          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
}

export default Navigation;