import React from 'react';
import { StyleSheet, Text ,View,ScrollView,TouchableOpacity,Button, TextInput} from 'react-native';

import Header from '../components/header';


export default class UserProfile extends React.Component {
    render() {
        return (            
            <View>
                {/*<Header/>*/}
                <View style={styles.body}>
                    <Text style={styles.body}>userName</Text>   
                    <TextInput style={styles.textInput}
                        placeholder='password'
                    />         
                    <Button style={styles.button} 
                        color='#505050'
                        borderRadius= '50'
                        title='change password' 
                    />                  
                    <Button style={styles.button} 
                        color='#505050'
                        borderRadius= '50'
                        title='log out' 
                    />   
                </View>               
            </View>
        );
    }
}
const styles = StyleSheet.create({
    textInput: {
        height: 40, 
        //margin:20,
        padding: 10,
        marginBottom: 35,
        borderColor: 'gray', 
        borderWidth: 1 
    },
    body: {
        margin:25,
    },
    button: {
        color:'#505050',
        borderRadius: 100,
        marginTop: 50,
    },
    text: {

    }
});