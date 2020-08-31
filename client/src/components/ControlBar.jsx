import React from 'react'
import ControlBarButton from './UnitComponents/ControlBarButton'

export default class ControlBar extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            selected : 0
        }
    }

    setSelected = (selected) => {
        this.setState({selected})
    }

    render () {
        return (
            <>
                <ControlBarButton 
                    title = 'Post'
                    selected = {this.state.selected == 0}
                    onClick = {() => this.setSelected(0)}
                />
                <ControlBarButton 
                    title = 'Report'
                    selected = {this.state.selected == 1}
                    onClick = {() => this.setSelected(1)}
                />
                <ControlBarButton 
                    title = 'Delete'
                    selected = {this.state.selected == 2}
                    onClick = {() => this.setSelected(2)}
                />
            </>
        )
    }
}