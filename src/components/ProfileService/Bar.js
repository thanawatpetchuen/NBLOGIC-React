//import liraries
import React, { Component } from 'react';
import { View, 
         Text, 
         StyleSheet, 
         } from 'react-native';

// create a component
class Bar extends Component {
    render() {
        return (
            <View style={styles.bar}>
                <View style={[styles.barItem, styles.barseparator]}>
                    <Text style={styles.barTop}>40K</Text>
                    <Text style={styles.barBottom}>Followers</Text>
                </View>

                <View style={styles.barItem}>
                    <Text style={styles.barTop}>10</Text>
                    <Text style={styles.barBottom}>Following</Text>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    bar: {
        borderTopColor: '#fff',
        borderTopWidth: 4,
        borderBottomColor: '#fff',
        borderBottomWidth: 4,
        backgroundColor: '#ec2e4a',
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
    }
});

//make this component available to the app
export default Bar;
