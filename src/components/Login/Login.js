//import liraries
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    Keyboard,
    ScrollView,
    TextInput,
    TouchableOpacity,
    AlertIOS,
    Alert,
    AsyncStorage
} from 'react-native';
import { LoginForm } from './LoginForm';
import { firebaseRef } from '../service/Firebase';
import { Spinner } from '../service/Spinner'; 
// import { Loading } from '../service/Loading'; 
// import Animation from 'lottie-react-native';

import anim from '../../images/loading.json';

export default class Login extends Component {
    static navigationOptions = {
        title: 'Login',
        header: null,
        gesturesEnabled: false,
    };
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            status: '',
            error: '',
            loading: false,

        };

        this._login = this._login.bind(this);
        

    }

    _login() {
        this.setState({ error: '', loading: true }); 
               
        firebaseRef.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => { 
            this.setState({ error: '', loading: false }); 

            var userId = firebaseRef.auth().currentUser.uid;
            var userRef = firebaseRef.database().ref("users/"+userId);
    
            userRef.on("value", async(data) => {
                console.log(data.val());
                await AsyncStorage.setItem('user_detail', JSON.stringify(data.val()));
            });
            this.setState({
               status: true, 
            });
            AsyncStorage.setItem('user_data', JSON.stringify(this.state));
            
            this.props.navigation.navigate("Feed");
        })
        .catch((error) => {
            //Login was not successful, let's create a new account
            this.setState({ error: error, loading: false});
            Alert.alert(
                `${this.state.error}`
            );
        });
    }

    
    renderButtonOrSpinner() {
            if (this.state.loading) {
                return <Spinner />; 
                // <Animation 
                // ref={animation => {
                //     this.animation = animation;
                    
                // }}
                // style={{
                //     width: 100,
                //     height: 100
                // }}
                // loop={true}
                // source={anim}/>
                
                   
            }
                return(
            <TouchableOpacity style={styles.buttonContainer}
            onPress={this._login}>
            <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
                );
        
    }

    componentDidMount(){
        // this.animation.play();
    }

    render() {
        var {navigate} = this.props.navigation;
        return (
            // <KeyboardAvoidingView>
            <ScrollView scrollEnabled={false}
                contentContainerStyle={styles.container}>
    
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <Image source={require('../../images/pexels-photo-201316.png')} style={styles.backgroundImage}>

                        <View style={styles.logoContainer}>
                            <Image style={styles.logo} source={require('../../images/nblogo.png')}></Image>
                            <Text style={styles.backdrop}>"Next Gen of the KLOGIC"</Text>
                        </View>
                        <View style={styles.formContainer}>
                            <View style={styles.containerT}>

                                <TextInput placeholder="Username"
                                    placeholderTextColor="rgba(0,0,0,0.6)"
                                    returnKeyType="next"
                                    onChangeText={(text) => this.setState({ email: text })}
                                    value={this.state.email}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    onSubmitEditing={() => this.passwordInput.focus()}
                                    style={styles.input}></TextInput>

                                <TextInput placeholder="Password"
                                    placeholderTextColor="rgba(0,0,0,0.6)"
                                    onChangeText={(text) => this.setState({ password: text })}
                                    value={this.state.password}
                                    returnKeyType="go"
                                    secureTextEntry
                                    ref={(input) => this.passwordInput = input}
                                    style={styles.input}></TextInput>

                                { this.renderButtonOrSpinner() }
                                
                            </View>
                        </View>
                        {/* <Image source={require('../../images/pexels-photo-201316.png')} style={styles.backgroundImage}></Image> */}

                    </Image>
                    {/* // </KeyboardAvoidingView> */}
                </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        width: null,
        height: null,

        // ImageBackground: '../../images/pexels-photo-201316.png',
        // backgroundColor: '#737373',
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    logo: {
        width: 300,
        height: 300
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    backdrop: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: 'rgba(0,0,0,0)',
        color: '#000',
        fontWeight: 'bold',
        opacity: 0.7
    },
    containerT: {
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
