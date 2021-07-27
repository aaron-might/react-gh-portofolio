import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import '../App.css'
const {PUBLIC_URL} = process.env;

const Works = () => {
    return (
        <div className="portfolioApp">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>
                            Works
                        </h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-1">
                            </div>

                            <div className="col-md-3">
                                <a href="https://aaron-might.github.io/Day-Planner-Project/">
                                    <img src={PUBLIC_URL + '/images/day-planner.png'}

                                        className="card-img-top" alt="Dayplanner">
                                    </img>

                                </a>
                                <p className="card-text">Day-Planner-Project</p>
                                <p id="repo"><a href="https://github.com/aaron-might/Day-Planner-Project">
                                    Day-Planner-Project</a></p>
                            </div>
                            <div className="col-md-1"></div>

                            <div className="col-md-3">
                                <a href="https://mighty-245.herokuapp.com/">
                                    <img src={PUBLIC_URL + '/images/budget-app.png'}
                                        className="card-img-top" alt="budgetapp">
                                    </img>
                                </a>
                                <p className="card-text">budget-app</p>
                                <p id="repo"><a href="https://github.com/aaron-might/budget-app">
                                    budget-app</a></p>
                            </div>
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-3">
                                <a href="https://radiant-ridge-95664.herokuapp.com/">
                                    <img src={PUBLIC_URL + '/images/build-a-chart.png'}
                                        className="card-img-top" alt="build-a-chart">
                                    </img>
                                </a>
                                <p className="card-text">build-a-char</p>
                                <p id="repo"><a href="https://github.com/b00000001/build-a-char"
                                >build-a-char</a></p>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-3">
                                <a href="https://huirayj.github.io/random-meal-generator/">
                                    <img src={PUBLIC_URL + '/images/rmg.png'}
                                        className="card-img-top" alt="rmg">
                                    </img>
                                </a>
                                <p className="card-text">rmg</p>
                                <p id="repo"><a href="https://github.com/huirayj/random-meal-generator"
                                >random-meal-generator</a></p>
                                <div className="col-md-1"></div>
                            </div>
                     
                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                                <a href=" https://aaron-might.github.io/horiseon-seo-project/">
                                    <img src={PUBLIC_URL + "/images/seo.png"}
                                        className="card-img-top" alt="seo" />
                                </a>
                                <p className="card-text">seo</p>
                                <p id="repo"><a href="https://github.com/aaron-might/horiseon-seo-project"
                                >seo</a></p>

                            </div>
                            <div className="col-md-1"></div>

                            <div className="col-md-3">
                                <a href="https://aaron-might.github.io/Password-Generator-Project/">
                                    <img src={PUBLIC_URL + "/images/code-generator.png"}
                                        className="card-img-top" alt="code-generator" />
                                </a>
                                <p className="card-text">Password Generator</p>
                                <p id="repo"><a href="https://github.com/aaron-might/Password-Generator-Project"
                                >Password-Generator-Project</a></p>
                            </div>
                        </div>
                        <br></br>
                        <div className="gitProfile">
                            <p>GitHub Profile: <a href="https://github.com/aaron-might/">
                                https://github.com/aaron-might/</a> </p>
                            <p>Linkedin Profile: <a href="https://www.linkedin.com/in/aaron-mighty-55a411211/"
                            >https://www.linkedin.com/in/aaron-mighty-55a411211/</a></p>
                            <p>Email Address: aaronmigthy7@gmail.com</p> <p>Phone Number:(917)-862-9113</p>
                            <a href="https://drive.google.com/file/d/1H77qdDwR9kdwjJ-X_7siNRn_fDe1kwUe/view?usp=sharing"> Resume</a>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default Works
