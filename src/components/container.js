import React, {Component} from 'react';
import {Map} from './map';
import {GoogleApiComponent} from 'google-maps-react';
import {GoogleApiWrapper} from 'google-maps-react';

export class Container extends Component {
    render() {
        const style = {
            width: '100vw',
            height: '100vh'
        }
        return (
            <div style={style}>
                <Map google={this.props.google}
                />
            </div>
        )
    }
}

export default GoogleApiComponent({
    apiKey: 'AIzaSyAl82-QVgSS43dlCQqr6flx8BaCbREVOTA'
})(Container)


// export class Container extends Component {
//     render() {
//         const style = {
//             width: '100vw',
//             height: '100vh'
//         };
//         return (
//             <div>
//                 <Map google={this.props.google} />
//             </div>
//         )
//     }
// }
//
// export default GoogleApiComponent({
//     apiKey: 'AIzaSyAl82-QVgSS43dlCQqr6flx8BaCbREVOTA'
// })(Container)