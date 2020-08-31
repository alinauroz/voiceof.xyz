import React from 'react'

export default class TopBar extends React.Component {
    constructor (props) {
        super (props);
    }

    render () {
        return (
            <div className = 'topbar'>
                <div className = 'topbar-links-container'>
                    <a href = '#fork_me' class = 'topbar-links'>Fork Me</a>
                    <a href = '#faqs' class = 'topbar-links'>FAQs</a>
                    <a href = '#contact' class = 'topbar-links'>Contact</a>
                </div>
            </div>
        )
    }
}