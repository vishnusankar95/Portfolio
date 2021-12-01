import React from 'react'
import './skills.css'

function Skills() {
    return (
        <div>
        <h1 className="heading">Skills</h1>
        <div className="container">
          <div className="logoWrapper">
            <i className="devicon-html5-plain colored" />
            <span>HTML</span>
          </div>
          <div className="logoWrapper">
            <i className="devicon-css3-plain colored" />
            <span>CSS</span>
          </div>
          <div className="logoWrapper">
            <i className="devicon-javascript-plain colored"></i>
            <span>Javascript</span>
          </div>
          <div className="logoWrapper">
            <i class="devicon-bootstrap-plain colored"></i>
            <span>Bootstrap</span>
          </div>
          <div className="logoWrapper">
            <i className="devicon-react-original colored" />
            <span>React</span>
          </div>
          <div className="logoWrapper">
            <i class="devicon-materialui-plain colored"></i>
            <span>Material UI</span>
          </div>
          <div className="logoWrapper">
            <i class="devicon-git-plain colored"></i>
            <span>Git</span>
          </div>
          <div className="logoWrapper">
            <i class="devicon-codepen-plain"></i>
            <span>CodePen</span>
          </div>
          <div className="logoWrapper">
            <i
              style={{ color: "#7248B6" }}
              className="devicon-redux-original"
            />
            <span>Redux</span>
          </div>
          <div className="logoWrapper">
            <i style={{ color: "#509941" }} className="devicon-nodejs-plain" />
            <span>Node</span>
          </div>
          <div className="logoWrapper">
            <i className="devicon-express-original" />
            <span>Express</span>
          </div>
          <div className="logoWrapper">
            <i className="devicon-mongodb-plain colored" />
            <span>MongoDB</span>
          </div>
        </div>
        </div>
    )
}

export default Skills
