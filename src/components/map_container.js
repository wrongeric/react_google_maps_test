import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    render(){
        const style = {
            width: '100%',
            height: '50%',
        }
        return (
            <Map google={this.props.google}
                 zoom={14}
                 style={style}
                 onClick={this.onMapClicked}
                 initialCenter={{
                     lat: 33.666057,
                     lng: -117.901004,
                 }}>
                <Marker
                    onClick={this.onMarkerClick}
                    title={'Entertainment'}
                    name={'OC County Fair'}
                    position={{lat: 33.666057, lng: -117.901004}} />
                <Marker
                    onClick={this.onMarkerClick}
                    name={'Ohshima Japanese Cuisine'}
                    position={{lat: 37.778519, lng: -117.836904}} />
                <Marker />

                {/*<InfoWindow onclose={this.onInfoWindowClose}>*/}
                    {/*<div>*/}
                        {/*<h1>{this.state.selectedPlace.name}</h1>*/}
                    {/*</div>*/}
                {/*</InfoWindow>*/}

            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: `AIzaSyAl82-QVgSS43dlCQqr6flx8BaCbREVOTA`,
})(MapContainer)

