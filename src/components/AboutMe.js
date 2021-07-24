// import  AboutMe  from "./components"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import '../App.css';

// const Home = () => (
    // <div>
    //   <h1 className="title is-1">This is the Home Page</h1>
    //   <p>
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida,
    //     risus at dapibus aliquet, elit quam scelerisque tortor, nec accumsan eros
    //     nulla interdum justo. Pellentesque dignissim, sapien et congue rutrum,
    //     lorem tortor dapibus turpis, sit amet vestibulum eros mi et odio.
    //   </p>
    // </div>
  // );
  
  
  const AboutMe = () => {
    console.log(AboutMe)
    return (
      <div className="aboutApp">

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
export default AboutMe
