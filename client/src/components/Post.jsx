import React from 'react'

export default class Post extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <div className = 'main-container'>
                <input type = 'text' placeholder = 'Email' className = 'input' />
                <textarea className = 'text' placeholder = 'Your Message'></textarea>
            </div>
        )
    }
}