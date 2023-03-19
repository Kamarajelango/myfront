import React,{useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Button from '@mui/material/Button';
import Joi from 'joi'
import axios from 'axios';
import { toast } from 'react-toastify'


function Register() {   
    const navigate = useNavigate();
    
       useEffect(()=>{
        if(localStorage.getItem("Email"))
        navigate("/Home")
    },[])

    const validateSchema = Joi.object({
        name: Joi.string().min(3).max(15).required(),
        email: Joi.string().email({ tlds: { allow: false } }).required(),
        password: Joi.string().required(),
        address: Joi.string().min(10).max(70).required(),
        pincode: Joi.number().min(6).required(),
        mobile: Joi.number().required(),
    })
    const validate = (values) => {
        const errors = {};
        const { error } = validateSchema.validate(values)
        if (error) {
            const [err] = error.details;
            errors[err.context.key] = error.message;
        }

        return errors;
        // if (!values.name) {
        //     errors.name = 'Name is Required'
        // } else if (!values.email) {
        //     errors.email = 'Email is Required'
        // } else if (!values.mobile) {
        //     errors.mobile = 'Mobile number is Required'
        // } else if (!values.password) {
        //     errors.password = 'Password is Required'
        // } else if (!values.address) {
        //     errors.address = 'Address is Required'
        // } else if (!values.pincode) {
        //     errors.pincode = 'Pincode is Required'
        // }
    }
    const INITIAL_FORM = {
        name: '',
        email: "",
        password: "",
        address: '',
        pincode: '',
        mobile: "",
    }
    const onSubmit = ({ name, email, password, address, pincode, mobile }) => {
        const { error } = validateSchema.validate({ name, email, password, address, pincode, mobile })
        toast.error(error)
        if (!error) {
            //API CALL
            (async () => {
                try {
                    const response = await axios.post('https://63c7b9bc075b3f3a91d193b8.mockapi.io/users', { name, email, password, address, pincode, mobile })
                    toast.success('Registered Successfully')
                    navigate('/login')
                } catch (error) {
                    toast.error(`Failed : ${error.message}`)
                }
            })();
        }
    }

    return <>
        <nav className="container navbar navbar-expand-lg navbar-light bg-light  p-3 mb-3 bg-body sticky-top">
            <div className="container">
                <div className="navbar-brand" href="!#" style={{ color: 'darkturquoise' }}>Nearworker</div>
            </div>
        </nav>
        <Formik
            initialValues={INITIAL_FORM}
            validate={validate}
            onSubmit={onSubmit}
        >
            {() => {
                return (
                    <Form >
                        <div className='auth container' >
                            <h5 className=" mt-2">Signup</h5> <hr />
                            <label htmlFor="fullname" className="form-label">Name<span className='text-danger'>*</span></label>
                            <Field name='name' className='form-control' placeholder="Enter Your Name" />
                            <ErrorMessage name='name' render={msg => <div className='text-danger'>{msg}</div>} />

                            <label htmlFor="" className="form-label">Email<span className='text-danger'>*</span></label>
                            <Field name='email' className='form-control' type='email' placeholder="Enter Your Email" />
                            <ErrorMessage name='email' render={msg => <div className='text-danger'>{msg}</div>} />

                            <label htmlFor="mobile" className="form-label">Mobile<span className='text-danger'>*</span></label>
                            <Field name='mobile' className='form-control' placeholder="Enter Your Mobile Number" />
                            <ErrorMessage name='mobile' render={msg => <div className='text-danger'>{msg}</div>} />

                            <label htmlFor="inputPassword4" className="form-label">Password<span className='text-danger'>*</span></label>
                            <Field name='password' className='form-control' type='password' placeholder="Enter Your Password" />
                            <ErrorMessage name='password' render={msg => <div className='text-danger'>{msg}</div>} />

                            <label htmlFor="inputAddress" className="form-label">Address<span className='text-danger'>*</span></label>
                            <Field name='address' className='form-control' placeholder="Enter Your Address" />
                            <ErrorMessage name='address' render={msg => <div className='text-danger'>{msg}</div>} />

                            <label htmlFor="pincode" className="form-label">Pin Code<span className='text-danger'>*</span></label>
                            <Field name='pincode' className='form-control' placeholder="Enter Your Pin Code" />
                            <ErrorMessage name='pincode' render={msg => <div className='text-danger'>{msg}</div>} />

                            <Button endIcon={<HowToRegIcon />} type="submit" className="but mt-2">Signup</Button>
                            <p className="text-center ">Already a member?<span><Link to='/Login' className='change-auth' >Login</Link></span></p>

                        </div>
                    </Form>
                )
            }}
        </Formik>
    </>
}

export default Register