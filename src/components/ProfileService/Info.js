
//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Info extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                <Text style={styles.infoItem}>{}}</Text>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#737373',
    },
    infoItem: {
        flex: 1,
        padding: 36,
        alignItems: 'center'
    },
});

//make this component available to the app
export default Info;
