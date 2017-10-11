//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
// import Animation from 'lottie-react-native';

import anim from '../../images/loading.json';

// create a component
export class Loading extends Component {
    render() {
        return (
            <Animation 
            ref={animation => {
                this.animation = animation;
            }}
            style={{
                width: 100,
                height: 100
            }}
            loop={true}
            source={anim}/>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    // spinner: {
    //     size: 40
    // },
});

//make this component available to the app
export default Loading;

