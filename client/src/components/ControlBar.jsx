import React from 'react'
import ControlBarButton from './UnitComponents/ControlBarButton'

export default class ControlBar extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <>
                <ControlBarButton 
                    title = 'Post'
                />
                <ControlBarButton 
                    title = 'Report'
                />
                <ControlBarButton 
                    title = 'Delete'
                />
            </>
        )
    }
}