//import liraries
import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { View, 
         Text, 
         StyleSheet, 
         AsyncStorage, 
         AlertIOS, 
         Image,
         Button,
         TouchableOpacity
          } from 'react-native';

// import Button from '../service/button';
import styles from '../../styles/common-styles.js';
import { StackNavigator } from 'react-navigation';
import { firebaseRef } from '../service/Firebase';


// create a component
class Manage extends Component {
    static navigationOptions = {
        title: 'Manage',
        header: null,
        tabBarLabel: 'Manage',
        tabBarIcon: () => (
            <Icon style={page_styles.logo} name='cog' type="entypo" color='white'></Icon>
        ),
        
    };
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            user: ''
        }

        this.logout = this.logout.bind(this);
       
    };   

    componentWillMount(){
        AsyncStorage.getItem('user_data').catch((error) => {
            console.log(error);
        }).then((value) => {
            let user_data = JSON.parse(value);
            console.log(user_data);
            this.setState({user: user_data});
            // AlertIOS.alert(`${this.state.test.email}`)
        });
    
    }


    logout (){ 
        AsyncStorage.removeItem('user_detail').then(() => {    
            firebaseRef.auth().signOut();
            this.props.navigation.navigate("Login")
          });
        
    }
    
    

    

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
            
            <View style={styles.body}>
            
                <View style={styles.body}>
                  <View style={page_styles.email_container}>
                    <Text>Manage</Text>
                    <Text style={page_styles.email_text}>{this.state.user.email}</Text>
                    <Button onPress={ () => navigate('AboutMe') }
                        title="Learn More"    
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"/>
                        <TouchableOpacity style={page_styles.buttonContainer}
            onPress={this.logout}>
            <Text style={page_styles.buttonText}>LOG OUT</Text>
            </TouchableOpacity>
                  </View>
                  
                </View>
            
            </View>
          </View>
    );
    }
}

// define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#737373',
//     },
// });

const page_styles = StyleSheet.create({
    email_container: {
      padding: 20
    },
    email_text: {
      fontSize: 18
    },
    logo: {
        padding: 0
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
export default Manage;
