import React, {Component} from 'react';
import {GoogleMap} from './googlemap'

export class Container extends React.Component {
    render() {
        const style = {
            width: '100vw',
            height: '60vh'
        }
        if (!this.props.loaded) {
            return <div>Loading...</div>
        }
        return (
            <div style={style}>
                <GoogleMap google={this.props.google} />
            </div>
        )
    }
}

export default GoogleApiComponent({
    apiKey: "AIzaSyAl82-QVgSS43dlCQqr6flx8BaCbREVOTA"
})(Container)