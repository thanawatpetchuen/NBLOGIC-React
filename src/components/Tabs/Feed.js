//import liraries
import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { View, 
         Text, 
         StyleSheet, 
         AsyncStorage, 
         AlertIOS, 
         Image, 
         TouchableOpacity,
         StatusBar,
          } from 'react-native';

// import Button from '../service/button';
import styles from '../../styles/common-styles.js';
import { firebaseRef } from '../service/Firebase';


// create a component
class Feed extends Component {
    static navigationOptions = {
        title: 'Feed',
        header: null,
        tabBarLabel: 'Feed',
        gesturesEnabled: false,
        
        tabBarIcon: () => (
            <Icon name='home' color='white'></Icon>
        ),
        
    };
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            cuser: ''
        }
        // var userId = firebaseRef.auth().currentUser.uid;
        // var userRef = firebaseRef.database().ref("users/"+userId);
        // userRef.on("value", (data) => {
        //     this.setState({
        //         cuser: data.val()
        //     })
        // });

        
        
    };   

    componentWillMount(){
        var userId = firebaseRef.auth().currentUser.uid;
        var userRef = firebaseRef.database().ref("users/"+userId);

        userRef.on("value", (data) => {
            this.setState({
                cuser: data.val()
            })
        });

        // AsyncStorage.getItem('user_detail').catch((error) => {
        //     console.log(error)
        // }).then((value) => {
        //     let user_state = JSON.parse(value);
        //     this.setState({
        //         cuser: user_state
        //     })
           
        // });

        
      
    }

    // detail(){
    //     console.log("this state status"+ this.state.user_state.status)
    //     if(this.state.user_state.status == true){
    //         AsyncStorage.getItem('user_detail').catch((error) => {
    //             console.log(error);
    //         }).then((value) => {
    //             let user_data = JSON.parse(value);
    //             this.setState({user: user_data});
    //             return <Text style={page_styles.email_text}>Test</Text>
                
               
    //         });
    //         }
    // }


    render() {
        var {navigate} = this.props.navigation;
        return (
            
            <View style={styles.container}>
                
            
            <View style={styles.body}>
            
                <View style={styles.body}>
                <StatusBar barStyle="dark-content"></StatusBar>
                  <View style={page_styles.email_container}>
                    <Text> Hello this is my feed </Text>
                    <Text> {this.state.cuser.Name} </Text>
                    <Text> {this.state.cuser.email} </Text>
                    
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
export default Feed;
