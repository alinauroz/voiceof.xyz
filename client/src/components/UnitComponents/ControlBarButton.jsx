import React from 'react'

export default class ControlBarButton extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        if (this.props.selected) var className = 'control-bar-button selected'
        else var className = 'control-bar-button'
        return <input type = 'button' className = {className} onClick = {this.props.onClick || ""} value = {this.props.title} />
    }
}