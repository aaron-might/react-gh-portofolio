
import React from 'react';
// import ReactDOM from "react-dom";
import {Link} from 'react-router-dom'
// import Header from './shared/Header'
function Home(){
    return(
        <h1>Home</h1>
    )
}

function AboutMe() {
    return(
    <div className="aboutme">

    <div className="container">
        <div className="card">
            <div className="card-header">
            <h2>About Me</h2>
    <div className="card-body">
                <blockquote className="blockquote mb-0">
  <div className="row">
 <div className="col-md-3">
 
 <img
 src={'/images/avatar.png'}
         alt="Canvas Logo"></img>
</div>

<div className="col-md-8">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis eros ut felis consequat, ut ultricies mi vulputate. Maecenas elementum ornare mattis. </p>



<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis eros ut felis consequat, ut ultricies mi vulputate. Maecenas elementum ornare mattis. </p>


<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis eros ut felis consequat, ut ultricies mi vulputate. Maecenas elementum ornare mattis. </p>
</div>
</div>
</blockquote>
</div>
</div>
    </div>

</div>
</div>
    )
}

function Title() {
    return (
        <h1> this my portofolio created with react.js</h1>
    )
}
function Work(){
    return (
        // <div>
        //     <div>
        //         <a href="https://github.com/Call-for-Code/Project-Sample">Project new </a>,
        //         <img 
        //         src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg"
        //         //src={'/src/images/logo.png'}
        //         alt="Canvas Logo"
        //         />
        //     </div>
        //     <div>
        //         <a href="https://github.com/Call-for-Code/Project-Sample">Project 1 </a>,
        //         <img 
        //         src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg"
        //         //src={'/src/images/logo.png'}
        //         alt="Canvas Logo"
        //         />
        //     </div>
        //     <div>
        //         <a href="https://github.com/Call-for-Code/Project-Sample">Project 2 </a>,
        //         <img 
        //         src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg"
        //         //src={'/src/images/logo.png'}
        //         alt="Canvas Logo"
        //         />
        //     </div>
        //     <div>
        //         <a href="https://github.com/Call-for-Code/Project-Sample">Project 3 </a>,
        //         <img 
        //         src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg"
        //         //src={'/src/images/logo.png'}
        //         alt="Canvas Logo"
        //         />
        //     </div>
        // </div>
        <div className="portfolioApp">
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h3>
                        Portfolio
                </h3>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-1">
                        </div>

                        <div className="col-md-3">
                            <a href="https://ana199816.github.io/homework-06/">
                                <img src="assets/img/weather1.png"
                                    className="card-img-top" alt="img-one" />
                            </a>
                            <p className="card-text">Weather Dashboard</p>
                            <p id="repo"><a href="https://github.com/Ana199816/homework-06">https://github.com/Ana199816/homework-06</a></p>
                        </div>
                        <div className="col-md-1"></div>

                        <div className="col-md-3">
                            <a href="https://ana199816.github.io/homework-05/">
                                <img src="assets/img/work.day.png"
                                    className="card-img-top" alt="img-two" />
                            </a>
                            <p className="card-text">Day Planner</p>
                            <p id="repo"><a href="https://github.com/Ana199816/homework-05"
                            >https://github.com/Ana199816/homework-05</a></p>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="row">
                        <div className="col-md-1">

                        </div>
                        <div className="col-md-3">
                            <a href="https://ana199816.github.io/homework-04/">
                                <img src="img/quiz3.png"
                                    className="card-img-top" alt="img-one" />
                            </a>
                            <p className="card-text">JS Quiz</p>
                            <p id="repo"><a href="https://github.com/Ana199816/homework-04"
                            >https://github.com/Ana199816/homework-04</a></p>
                        </div>
                        <div className="col-md-1">

                        </div>
                        <div className="col-md-3">
                            <a href="https://github.com/Argent-T/Drinky-Bird">
                                <img src="img/screen1.jpg"
                                    className="card-img-top" alt="img-one" />
                            </a>
                            <p className="card-text">Project-1</p>
                            <p id="repo"><a href="https://github.com/Argent-T/Drinky-Bird"
                            >https://github.com/Argent-T/Drinky-Bird</a></p>
                            <div className="col-md-1"></div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-3">
                            <a href="https://ana199816.github.io/Homework-03/">
                                <img src="assets/img/screenshot pasw.PNG"
                                    className="card-img-top" alt="img-one" />
                            </a>
                            <p className="card-text">Try: Password Generator</p>
                            <p id="repo"><a href="https://github.com/Ana199816/Homework-03"
                            >https://github.com/Ana199816/Homework-03</a></p>

                        </div>

                        <div className="col-md-1"></div>

                        <div className="col-md-3">
                            <a href="https://asproject2.herokuapp.com/">
                                <img src="assets/img/let's.travel.png"
                                    className="card-img-top" alt="img-one" />
                            </a>
                            <p className="card-text">Project 2: Let's Travel</p>
                            <p id="repo"><a href="https://github.com/Ana199816/Project-2"
                            >https://github.com/Ana199816/Project-2</a></p>

                        </div>
                    </div>
                    <br></br>
                    <div className="gitProfile">
                        <p>GitHub Profile: <a href="https://github.com/Ana199816">
                        https://github.com/Ana199816</a> </p>
                        <p>Linkedin Profile: <a href="https://www.linkedin.com/in/ana-suvac-192057195/"
                        >https://www.linkedin.com/in/ana-suvac-192057195/</a></p>
                        <p>Email Address: anasuvac@yahoo.com</p>
                        <p>Phone Number:(850)-890-5740</p>
                        <a href="https://github.com/Ana199816/homework-16/blob/master/assets/resume/resume.pdf"
                        > Resume</a>

                    </div>
                </div>

            </div>






        </div>
    </div>
)
}
function Contacts() {
    return (
    //     <form>
    //   <h1>Hello </h1>
    //   <p>Enter your name:</p>
    //   <input
    //     type='text'
    //     //onChange={this.myChangeHandler}
    //   />
    //   <p>Enter your email:</p>
    //   <input
    //     type='email'/>
    //   <p>Enter your message:</p>
    //   <input
    //     type='text'/>
<div className="contactApp">
<div className="container">
        <div className="card">
                    <div className="card-header">
                        <h3>Contact</h3>
                    </div>
            <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <div className="input-group">
                        <div className="input-group-prepend">
                                    <span className="input-group-text">First and last name</span>
                                </div>
                                <input type="text" aria-label="First name" className="form-control" />
                                    <input type="text" aria-label="Last name" className="form-control" />
                    </div>
                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                                        </div>
                                        <input type="text" className="form-control" aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroup-sizing-default">Message</span>
                                            </div>
                                            <textarea name="input" id="input" cols="30" rows="5"></textarea>
                                        </div>
                                        <input className="btn btn-primary" type="submit" value="Submit" />
                </blockquote>
                                    </div>
        </div>
                            </div>
        </div>
    )
}

function Resume() {
   
     window.location.href ="https://docs.google.com/document/d/1a1BsVi599F5q0Fr51qW86oPCydmvXsst5U11JWptw-Q/edit?usp=sharing"
    
}

function NavBar(){
    return (
        <ul className="nav-nav-bar">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/aboutme">AboutMe</Link>
            </li>
            <li>Portofolio</li>
            <li>
                <Link to="/contacts">Contacts</Link>
            </li>
            <li>
                <Link to ="/resume">Resume</Link>
            </li>
            <li>
                <Link to="/work">Work</Link>
                
            </li>
          
        </ul>
    )
}
// export default Title;
export { Title, NavBar, Home, AboutMe, Work, Contacts, Resume} 