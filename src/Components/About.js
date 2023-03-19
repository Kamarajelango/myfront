import React, { Link } from 'react'

import Navigation from './Navigation';

function About() {
    return <>
        <div className="container">
            <Navigation />
            <div className="card bg-dark text-white" style={{ marginLeft: "30px" }}>
                <img src="https://img.freepik.com/free-photo/about-us-word-written-wooden-cubes_352439-243.jpg?w=740"
                    className="card-img img-fluid" alt="..." />
                <div className="card-img-overlay">
                    <br /><br /><br /><br /><br /><br />
                    {/* <h1 className="card-title text-center text-danger fs-1"></h1><br/><br/><br/><br/>   */}
                    <div className="container text-end text-secondary fs-2"></div>
                </div>
            </div><br /><br />
            <div style={{ marginLeft: "30px" }}>
                <h4 className="text-center fw-bolder fs-3">Who we are</h4>
                <p className="text fs-4">NearWorker is Asia's largest online home services platform. Launched in 2022,
                    NearWorker today operates
                    in India, Australia, Singapore, malaysia. The platform helps customers book reliable & high quality
                    services - solar planning, AC, TV, refrigerator, washing machine, wiring works, water
                    purifier, plumbering works, inveter connectiom - delivered by trained professionals conveniently at
                    home. NearWorker's vision is
                    to empower millions of professionals worldwide to deliver services at home like never experienced
                    before. The Series F round was led by new investors -Prosus Ventures, Dragoneer and Wellington
                    Management with
                    participation from existing investors - Vy Capital, Tiger Global and Steadview. The latest round
                    includes a primary capital
                    infusion of USD 188 million and a secondary sale of approximately USD 67 million by select angels and
                    early investors.</p>
            </div><br /><br />
            <div className="row" style={{ marginLeft: "30px" }}>
                <div className="col-4">
                    <div>
                        <p className="fw-bold fs-4 text-center">32,000+</p>
                        <p className="text-center fs-5">Trained Professionals</p>
                    </div>
                </div>
                <div className="col-4">
                    <div>
                        <p className="fw-bold fs-4 text-center">5 Million+</p>
                        <p className="text-center fs-5">Happy Customers</p>
                    </div>
                </div>
                <div className="col-2">
                    <div>
                        <p className="fw-bold fs-4 text-center">55</p>
                        <p className="text-center fs-5">Cities</p>
                    </div>
                </div>
                <div className="col-2">
                    <div>
                        <p className="fw-bold fs-4 text-center">6</p>
                        <p className="text-center fs-5">Countries</p>
                    </div>
                </div>
            </div><br /><br />
            <div style={{ marginLeft: "30px" }}>
                <h2 className="text-center fw-bolder fs-3">How We do it</h2>
                <p className="text fs-5">NearWorker provides a platform that allows skilled and experienced professionals to
                    connect with users looking
                    for specific services. All the professionals, though experienced and skilled, undergo intensive training
                    modules
                    before being allowed to list their services on the platform. Once on the platform, our match-making
                    algorithm
                    identifies professionals who are closest to the user's requirements and available at the requested time
                    and
                    date.</p>
            </div><br /><br />
            <div style={{ marginLeft: "30px" }}>
                <p className="text-center fw-bolder fs-3">Our Story so far</p>
                <p className="text fs-5">30 cities in India: Andhra Pradesh,Arunachal Pradesh,
                    Chhattisgarh,Haryana,Goa, Himachal Pradesh,
                    Karnataka,Madhya Pradesh,Rajasthan,Madhya Pradesh,Maharashtra,Uttar Pradesh,Gujarat,Karnataka,Tamil
                    Nadu,Telangana,Bihar,West
                    Bengal,Jharkhand,Assam,Uttarakhand,Punjab,Haryana,Kerala,Meghalaya,Manipur,Mizoram,Nagaland,Sikkim,Tripura.
                </p>
                <div className="text-center ">
                    <img src="./pic/marked.png" style={{ height: "600", width: "400px" }} alt="" />
                </div>
            </div><br /><br />
            <div style={{ marginLeft: "30px" }}>
                <p>3 cities internationally: Australia, Singapore, Malaysia.</p>
                <div className="row " style={{ marginLeft: "30px" }}>
                    <div className="col pt-2">
                        <img src="./pic/australia.png" style={{ width: '15rem', height: '260px' }} alt="" />
                    </div>
                    <div className="col pt-2"><img src="./pic/singapore.jpg" style={{ width: '15rem', height: "260px" }} alt="" /></div>
                    <div className="col pt-2"><img src="./pic/malasia.png" style={{ width: "15rem", height: "260px" }} alt="" /></div>
                </div>
            </div><br /><br />
            <div style={{ marginLeft: "30px" }}>
                <h3>Terms and Conditions</h3>
                <ul>
                    <li>The Working Professionals has to register themselves to get an insight about NearWorker.</li>
                    <li>The Working Professionals has to select the types of memberships available with us.</li>
                    <li>The Working Professionals can't tie up with NearWorker Customers(people).</li>
                    <li>After selecting suitable membership they will be redirected towards the payment page.</li>
                    <li>The Working Professionals makes the payment to become a member of NearWorker.</li>
                    <li>There will be an option provided to stop the services with NearWorker.</li>
                    <li>But, Membership amount will be not refund.</li>
                    <li>Working Professionals will be enabled to interact with NearWorker.</li>
                    <li>Working Professionals will be enabled with a chat to interact with customers(people).</li>
                    <li>Customers(people) can rise any complaint for working professionals.</li>
                    <li>Any report get from customer side we analysis the report and we take action through legally(unwanted
                        issuse) .</li>
                    <li> Depending upon the membership and Rating we give the first priority</li>
                    <li>We are monitoring the Customer and Working Professionals.</li>
                </ul>
            </div><br /><br />
            <div style={{ marginLeft: "30px" }}>
                <p className="text-center fw-bolder fs-3">Our Investors</p>
                <div className="row" style={{ marginLeft: "50px" }}>
                    <div className="col-12 col-sm-6 col-md-2 col-lg-2"><img className="" src="./pic/tata.png" alt="" itemScope="" itemProp="image" /></div>
                    <div className="col-12 col-sm-6 col-md-3 col-lg-3 mt-2"><img className="" src="./pic/sony.png" alt="" itemScope="" itemProp="image" /></div>
                    <div className="col-12 col-sm-6 col-md-3 col-lg-3"><img className="abimg" src="./pic/addidas.png" alt="" itemScope="" itemProp="image" /></div>
                    <div className="col-12 col-sm-6 col-md-2 col-lg-2"><img className=""
                        src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1625219549330-1af90c.png"
                        alt="" itemScope="" itemProp="image" /></div>
                    <div className="col-12 col-sm-6 col-md-2 col-lg-2 "><img className="" src="./pic/coverse.jpg" alt="" itemScope="" itemProp="image" /></div>
                </div>
            </div><br /> <br />
            <div className="container bg" />
            <hr /><br /><br />


            <div className="footer">
                <div className="footer mx-3" style={{ color: "black" }} >Terms and Condition</div>
                <div className="footer " style={{ color: "rgb(10, 10, 10)" }} >Privacy Policy</div></div>

            <p className="footer" style={{ color: 'darkgray' }}>Near Worker Pvt. Ltd.</p>

        </div>







    </>
}

export default About