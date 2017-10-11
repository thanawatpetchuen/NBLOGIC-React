//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage, AlertIOS } from 'react-native';


// create a component
class New extends Component {
    static navigationOptions = {
        title: 'New',
        header: null
    };
    constructor(props) {
        super(props)
        this.state = {
            email: ''
        }
        AsyncStorage.getItem('user_data', (err, result) => {
            console.log(result);

        }).then((value) => {
            // let data = value;
            JSON.parse(value);
            this.setState({email: value.email});
            // AlertIOS.alert(`${value}`);
        });
        
    };   
    
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.email}</Text>
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
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default New;
