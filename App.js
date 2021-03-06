import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Keyboard,
  ScrollView,
  AsyncStorage,
  Platform
} from 'react-native';

import { StackNavigator, TabNavigator, Navigation } from 'react-navigation';
import Login from './src/components/Login/Login';
import New from './src/components/Login/New';
import Feed from './src/components/Tabs/Feed';
import Feed2 from './src/components/Tabs/Feed2';
import Profile from './src/components/Tabs/Profile';
import Manage from './src/components/Tabs/Manage';
import AboutMe from './src/components/Screens/AboutMe';


const MainScreenNavigator = TabNavigator({
  Feed: {screen: Feed},
  Feed2: {screen: Feed2},
  Profile: {screen: Profile},
  Manage: {screen: Manage}
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: Platform.OS === 'ios' ? {
    activeTintColor: 'white',
    activeBackgroundColor: 'rgb(245,128,51)',
    inactiveTintColor: 'black',
    inactiveBackgroundColor: 'grey',
    labelStyle: {
      fontSize: 16,
      padding: 0,
    }
  } : {
    activeTintColor: 'white',
    inactiveTintColor: 'black',
    labelStyle: {
      fontSize: 16,
      padding: 0,
    },
    style: {
      backgroundColor: 'rgb(245,128,51)'
    }
  }
  
});

const Navigations = StackNavigator({
  Login: {screen: Login},
  // New: {screen: New},
  AboutMe: {screen: AboutMe},
  MainScreenNavigator: {screen: MainScreenNavigator},
  
  // Feed: {screen: Feed},
  
});



MainScreenNavigator.navigationOptions = {
  tittle: 'Tab'
};



export default Navigations;


export class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      page: null,
      loaded: false
    };
  }

  componentWillMount(){
    console.log();
    AsyncStorage.getItem('user_detail').then((user_data_json) => {
      
            let user_data = JSON.parse(user_data_json);
            // let component = {component: Signup};
            if(user_data != null){
              app.authWithCustomToken(user_data.token, (error, authData) => {
                if(error){
                  console.log(error)
                }else{
                  this.props.navigation.navigate("Feed");
                }
              });
            }else{
              this.setState({
                page: <Login/>
              });
            }
          });
  }
  
  render() {
    var {navigate} = this.props.navigation;
    return (
          <View style="styles.container">
          { this.state.page }
          </View>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,1)',
   
      
  }
})
