//import liraries
import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';

import Header from '../ProfileService/Header';
import Bar from '../ProfileService/Bar';
import Info from '../ProfileService/Info';

// create a component
class Profile extends Component {
    static navigationOptions = {
        title: 'New',
        header: null,
        tabBarLabel: 'Profile',
        tabBarIcon: () => (
            <Icon name='user' color='white' type="entypo"></Icon>
        ),
    };
    render() {
        return (
            <ScrollView>
                <StatusBar barStyle="light-content"></StatusBar>
            <View >
                <Header />
                
                
            </View>
            </ScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    info:{
        flex: 10,
    }
});

//make this component available to the app
export default Profile;
