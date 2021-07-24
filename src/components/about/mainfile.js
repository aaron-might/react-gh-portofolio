import React from "react";
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function body(props) {
    return (
        <div className="aboutApp">

            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>
                            About Me
         </h3>
            <div className="card-body">
                        <blockquote className="blockquote mb-0">
          <div className="row">
         <div className="col-md-3">
       <img id="pic" src="https://avatars0.githubusercontent.com/u/56319950?s=460&u=29ea5c9829ccb251f4c3e739338f1ba870b5ce7d&v=4" alt="profile pic" width="100%" height="auto%" />
      </div>

    <div className="col-md-8">

     <p>My name is Ana Suvac. I am an aspiring developer currently registered with UNC Charlotte Coding Bootcamp. I anticipate completing the program in April 2020.</p>
 </div>
  </div>
   </blockquote>
   </div>
 </div>
            </div>

        </div>
            )
            </div>
        }
export default body