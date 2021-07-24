// import  AboutMe  from "./components"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import '../App.css';
  
  const AboutMe = () => {
    console.log(AboutMe)
    return (
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

                    <div className="col-md-8" type="text">
                      
                      <p> 
                      Aaron Mighty live in Charlotte, NC. I am studying Web development at UNCC bootcamp. I am passionate about engineering and technology. I'm an associate Industrial Engineering with Associate Degree from South Africa. I had an interest into computer since teenagers but decided to do engineering and automation instead. now as it where the world is going there is huge need of IT graduates i like programming 

                      other than that I love music,traveling,experience with new things. I multi-lingual so as speak many language apart from the french, and english which are common.
                      </p>
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
export default AboutMe
