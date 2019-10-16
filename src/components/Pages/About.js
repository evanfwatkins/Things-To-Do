import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={aboutStyle}>
                    <h1>What really is the Todo List?</h1>
                    <p style={pStyle}>The Todo List is an entry level Javascript project where I learn the basics of the Framework, React. Mixing my skills of previous front end development bootcamps, I can collabarate structure, style, and functionality all while learning the in's and out's of React. At work I always struggle to find a place to put notes, tasks, or contact information that I need to remember for a later date, so I figured I would create something that can be used day to day. </p>
                    <br></br>
                    <h4> Below is a list of contacts:</h4>
                </div>
            </React.Fragment>
        )
    }
}

const aboutStyle = {
    textAlign: 'center',

}

const pStyle = {
    border: 'solid',
    padding: 'auto'

}

export default About
