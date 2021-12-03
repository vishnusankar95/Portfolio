import React from 'react'
import './skills.css'
import html from '../../img/html.png'
import css from '../../img/css.png'
import javascripts from '../../img/javascripts.png'
import react from '../../img/react.png'
import github from '../../img/github.png'
import node from '../../img/node.png'
import express from '../../img/express.png'
import mongoose from '../../img/mongoose.png'

function Skills() {
    return (
        <div className="aligner">
        <h1 className="heading">Skills</h1>
        <div className="container">
          <div className="logoWrapper">
            <img  src={html} alt="HTML"  className="logopic"/>
            <span>HTML</span>
          </div>

          <div className="logoWrapper">
          <img  src={css} alt="CSS"  className="logopic"/>
            <span>CSS</span>
          </div>

          <div className="logoWrapper">
          <img  src={javascripts} alt="JavaScript"  className="logopic"/>
            <span>Javascript</span>
          </div>

          {/* <div className="logoWrapper">
            <i class="devicon-bootstrap-plain colored"></i>
            <span>Bootstrap</span>
          </div> */}

          <div className="logoWrapper">
          <img  src={react} alt="React"  className="logopic"/>
            <span>React</span>
          </div>

          {/* <div className="logoWrapper">
            <i class="devicon-materialui-plain colored"></i>
            <span>Material UI</span>
          </div> */}

          <div className="logoWrapper">
          <img  src={github} alt="Git hub"  className="logopic"/>
            <span>Git</span>
          </div>

          {/* <div className="logoWrapper">
            <i class="devicon-codepen-plain"></i>
            <span>CodePen</span>
          </div> */}

          {/* <div className="logoWrapper">
            <i
              style={{ color: "#7248B6" }}
              className="devicon-redux-original"
            />
            <span>Redux</span>
          </div> */}

          <div className="logoWrapper">
          <img  src={node} alt="Node"  className="logopic"/>
            <span>Node</span>
          </div>

          <div className="logoWrapper">
          <img  src={express} alt="express"  className="logopic"/>
            <span>Express</span>
          </div>

          <div className="logoWrapper">
          <img  src={mongoose} alt="MongoDB"  className="logopic"/>
            <span>MongoDB</span>
          </div>
        </div>
        </div>
    )
}

export default Skills
