//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

// create a component
export class Spinner extends Component {
    render() {
        return (
            <ActivityIndicator size="large">

            </ActivityIndicator>
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
export default Spinner;

