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
         Alert,
         TouchableOpacity,
         StatusBar
          } from 'react-native';

import SettingsList from 'react-native-settings-list';

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
        gesturesEnabled: false,
        swipeEnabled: false,
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
        var bgColor = '#DCE3F4';
  return (

    <View style={{backgroundColor:'#EFEFF4',flex:1}}>
        <View style={{borderBottomWidth:1, backgroundColor:'rgba(245,128,51,0.7)',borderColor:'#c8c7cc'}}>
        <StatusBar barStyle="light-content"></StatusBar>
        <Text style={{alignSelf:'center',marginTop:30,marginBottom:10,fontWeight:'bold',fontSize:16, color: 'white'}}>Manage</Text>
    </View>
      <View style={{backgroundColor:'#EFEFF4',flex:1}}>
        <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
          <SettingsList.Header headerStyle={{marginTop:15}}/>
          
          <SettingsList.Item
            
            title='Register'
            titleInfoStyle={styles.titleInfoStyle}
            onPress={() => Alert.alert('Route to Wifi Page')}
          />
          <SettingsList.Item
            
            title='Add Subject'
            titleInfoStyle={styles.titleInfoStyle}
            onPress={() => Alert.alert('Route to Blutooth Page')}
          />
          <SettingsList.Item
            
            title='Change Subject'
            onPress={() => Alert.alert('Route To Cellular Page')}
          />
          <SettingsList.Item
            
            title='Drop Subject'
            titleInfo='Off'
            titleInfoStyle={styles.titleInfoStyle}
            onPress={() => Alert.alert('Route To Hotspot Page')}
          />
          <SettingsList.Header headerStyle={{marginTop:15}}/>
          <SettingsList.Item
            
            title='Notifications'
            onPress={() => Alert.alert('Route To Notifications Page')}
          />
          <SettingsList.Item
            icon={<Icon style={ { padding:5, paddingTop: 10 } } name='log-out' type="entypo" color='black'></Icon>}
            title='Log Out'
            onPress={ this.logout }
          />
          
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
