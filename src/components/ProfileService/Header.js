//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, AsyncStorage } from 'react-native';
import { firebaseRef } from '../service/Firebase';
// create a component
class ProfilePage extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            user: '',
            cuser: firebaseRef.auth().currentUser
        }

    }

    componentWillMount(){
        var userId = this.state.cuser.uid;
        var userRef = firebaseRef.database().ref("users/"+userId);

        userRef.on("value", (data) => {
            this.setState({
                user: data.val()
            })
        });
        // AsyncStorage.getItem('user_detail').catch((error) => {
        //     console.log(error);
        // }).then((value) => {
        //     let user_data = JSON.parse(value);
        //     this.setState({user: user_data});
              
        // });
    }
    render() {
        return (
            <Image style={styles.headerBackground} source={{uri: this.state.user.urlCover}}>
                <View style={styles.header}>
                    <View style={styles.profilepicWrap}>
                        <Image style={styles.profilepic} source={{uri: this.state.user.urlProfileImage}}></Image>
                    </View>

                    <Text style={styles.name}>{this.state.user.Name}</Text>
                    <Text style={styles.pos}>- {this.state.user.quote} -</Text>
                    <Text style={styles.pos}>- {this.state.user.email} -</Text>

                </View>
            
            <View style={styles.bar}>
            <View style={[styles.barItem, styles.barseparator]}>
                <Text style={styles.barTop}>{this.state.user.Year}</Text>
                <Text style={styles.barBottom}>Years</Text>
            </View>

            <View style={styles.barItem}>
                <Text style={styles.barTop}>{this.state.user.faculty}</Text>
                <Text style={styles.barBottom}>Department</Text>
            </View>
                </View>
                <View style={styles.container}>
                <View>
                <Text style={styles.infoItem}>{this.state.user.info}</Text>
                </View>
            </View>
            </Image>
            
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    headerBackground: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    profilepicWrap: {
        width: 180,
        height: 180,
        borderRadius: 100,
        borderColor: 'rgba(0,0,0,0.4)',
        borderWidth: 16,
    },
    profilepic: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        borderRadius: 80,
        borderColor: '#fff',
        borderWidth: 4,
    },
    name: {
        marginTop: 20,
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    pos: {
        fontSize: 14,
        color: '#0394c0',
        fontWeight: '300',
        fontStyle: 'italic',
    },
    bar: {
        borderTopColor: '#fff',
        borderTopWidth: 4,
        borderBottomColor: '#fff',
        borderBottomWidth: 4,
        backgroundColor: '#f58033',
        flexDirection: 'row',
    },
    barseparator: {
        borderRightWidth: 4,
    },
    barItem: {
        flex: 1,
        padding: 18,
        alignItems: 'center'
    },
    barTop: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    barBottom: {
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#737373',
    },
    infoItem: {
        flex: 1,
        padding: 36,
        alignItems: 'center'
    },
});

//make this component available to the app
export default ProfilePage;
