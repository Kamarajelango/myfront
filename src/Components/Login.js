import React, { useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Button from '@mui/material/Button';
import Joi from 'joi'
import axios from 'axios';
import { toast } from 'react-toastify'

function Login() {
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("Email"))
            navigate("/Home")
    }, [])
    const validateSchema = Joi.object({
        email: Joi.string().email({ tlds: { allow: false } }).required(),
        password: Joi.string().required(),
    })
    const validate = (values) => {
        const errors = {};
        const { error } = validateSchema.validate(values)
        if (error) {
            const [err] = error.details;
            errors[err.context.key] = error.message;
        }
        return errors;
    }
    const INITIAL_FORM = {
        email: "",
        password: "",
    }

    const onSubmit = ({ email, password }) => {
        const { error } = validateSchema.validate({ email, password })
        toast.error(error)
        if (!error) {
            //API CALL
            (async () => {
                try {
                    const response = await axios.get(`https://63c7b9bc075b3f3a91d193b8.mockapi.io/users?email=${email}`)
                    console.log(response)
                    if (Object.keys(response.data).length === 0) {
                        toast.error('Please Enter valid email')
                    } else {
                        if (response.data[0].password === password) {
                            toast.success('Signin Successfully')
                            localStorage.setItem("Email", email)
                            localStorage.setItem("Name", response.data[0].name)
                            navigate('/Home')

                        } else {
                            toast.error("Please Enter valid credentials")
                        }
                    }
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
        </nav> <br /><br /><br />
        <Formik
            initialValues={INITIAL_FORM}
            validate={validate}
            onSubmit={onSubmit}
        >
            {() => {
                return (
                    <Form >
                        <div className='auth container' >
                            <h5 className=" mt-2">Login</h5> <hr />

                            <label htmlFor="" className="form-label">Email<span className='text-danger'>*</span></label>
                            <Field name='email' className='form-control' type='email' placeholder="Enter Your Email" />
                            <ErrorMessage name='email' render={msg => <div className='text-danger'>{msg}</div>} />

                            <label htmlFor="inputPassword4" className="form-label">Password<span className='text-danger'>*</span></label>
                            <Field name='password' className='form-control' type='password' placeholder="Enter Your Password" />
                            <ErrorMessage name='password' render={msg => <div className='text-danger'>{msg}</div>} />

                            <Button endIcon={<LockOpenIcon />} type="submit" className="but mt-2">Sign in</Button>
                            <div className="text-center mt-2 mb-2"><span>Don't have an account?</span><Link to='/Register' className='change-auth'> Sign Up</Link></div>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    </>

}

export default Login
