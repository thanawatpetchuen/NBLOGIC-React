//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { _login } from './Login';

// create a component
export class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>

                <TextInput placeholder="Username" 
                placeholderTextColor="rgba(0,0,0,0.6)" 
                returnKeyType="next"
                onChangeText={(text) => this.setState({email: text})}
                value={this.state.email}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                onSubmitEditing={() => this.passwordInput.focus()}
                style={styles.input}></TextInput>

                <TextInput placeholder="Password" 
                placeholderTextColor="rgba(0,0,0,0.6)" 
                onChangeText={(text) => this.setState({password: text})}
                value={this.state.password}
                returnKeyType="go"
                secureTextEntry
                ref={(input) => this.passwordInput = input}
                style={styles.input}></TextInput>
                

                <TouchableOpacity style={styles.buttonContainer}
                    onPress={this._login}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 20
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.6)',
        marginBottom: 20,
        borderRadius: 10,
        color: 'black',
        paddingHorizontal: 10
        // borderWidth: 1
    },
    buttonContainer: {
        backgroundColor: "rgba(0,0,0,0.6)",
        paddingVertical: 15,
        borderRadius: 30,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    }
});

//make this component available to the app

