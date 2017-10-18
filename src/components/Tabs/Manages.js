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

import SettingsList from 'react-native-settings-list';

// import Button from '../service/button';
import styles from '../../styles/common-styles.js';
import { StackNavigator } from 'react-navigation';
import { firebaseRef } from '../service/Firebase';
import Register from '../Screens/Register';
import AddSubject from '../Screens/AddSubject';
import ChangeSubject from '../Screens/ChangeSubject';
import DropSubject from '../Screens/DropSubject';


// create a component
class Manage extends Component {
    static navigationOptions = {
        title: 'Manage',
        // header: null,
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
        this.changePage = this.changePage.bind(this);
       
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

    changePage = (page) => {
        this.props.navigation.navigate(`${page}`);
    }
    
    

    

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={ { backgroundColor: 'gray', flex: 1 } }>
                <View style={ { flex: 1, marginTop: 50 } }>
                    <SettingsList>
                        <SettingsList.Header headerText='Subject' headerStyle={ { color: 'white' } }/>
                        <SettingsList.Item title="Register" hasNavArrow={true}/>
                    </SettingsList>

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
    buttonContainer2: {
        backgroundColor: "rgba(0,0,0,0.6)",
        
        borderRadius: 30,
        padding: 20,
        
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    }
  });

const styless = StyleSheet.create({
    body: {
        padding: 10,
        paddingTop: 10,
    }
})

//make this component available to the app
export default Manage;
