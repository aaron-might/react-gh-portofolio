import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contacts = () => {
    return (

        //     <div form>
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
        //     </div>
        //     );
        // }

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

export default Contacts