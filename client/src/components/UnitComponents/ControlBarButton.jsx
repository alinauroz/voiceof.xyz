import React from 'react'

export default class ControlBarButton extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        return <input type = 'button' className = 'control-bar-button' onClick = '' value = {this.props.title} />
    }
}