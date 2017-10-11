//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class AboutMe extends Component {
    static navigationOptions = {
        title: 'About Me',
        headerStyle:{
            backgroundColor:  'rgba(245,128,51,0.6)',
        },
        headerTitleStyle: {
            color: 'white',
        },
        headerBackTitleStyle: {
            color: 'black',
        },
        // headerTintColor: 'rgba(245,128,51,0.6)',
        // header: null,
        
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>About Me</Text>
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
        backgroundColor: 'grey',
    },
});

//make this component available to the app
export default AboutMe;
