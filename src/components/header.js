import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <div className="header">
            <div>
                <h1 className="title">Welcome to my Portfolio</h1>

            </div>
           
            <nav activeClassName="nav-nav-bar-active">

                <ul className="nav-nav-bar">

                    <li><Link to="/">AboutMe</Link></li>

                    <li><Link to="/Contacts">Contacts</Link></li>
                    <li><Link to="/Works">Works</Link></li>
                    <li>
                        <a href="https://drive.google.com/file/d/1H77qdDwR9kdwjJ-X_7siNRn_fDe1kwUe/view?usp=sharing">Resume</a>
                    </li>

                </ul>

            </nav>
            
        </div>
    )
};
export default header;