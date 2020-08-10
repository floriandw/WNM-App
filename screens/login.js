import React from 'react';
import { StyleSheet, Text ,View,ScrollView,TouchableOpacity, TextInput, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Header from '../components/header';
import { max } from 'react-native-reanimated';

export default class Login extends React.Component {
    render() {    
        return ( 
            <View style={styles.container}>
                
                <View style={styles.body}>
                    <TextInput style={styles.textInput}
                        placeholder='username'
                    />
                    <TextInput style={styles.textInput}
                        placeholder='password'
                    />
                    <Button style={styles.button} 
                        color='#505050'
                        borderRadius= '50'
                        title='login'   
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
        marginBottom: 35,
        borderColor: 'gray', 
        borderWidth: 1 
    },
    body: {
        margin:25,
        
    },
    container: {
        backgroundColor: "#ECEDEA",
        //width:100,
        height: '100%',
    },
    button: {
        color:'#505050',
        borderRadius: 100,
        marginTop: 50,
    }
});