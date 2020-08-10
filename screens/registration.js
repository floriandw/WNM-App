import React from 'react';
import { StyleSheet, Text ,View,ScrollView,TouchableOpacity, TextInput, Button} from 'react-native';


import Header from '../components/header';


export default class Registration extends React.Component {
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
                        <TextInput style={styles.textInput}
                            placeholder='password verify'
                        />
                        <Button style={styles.button} 
                            color='#505050'
                            borderRadius= '50'
                            title='registrate'
                        />
                    </View>                              
                </View>
        );
    }
}
const styles = StyleSheet.create({
    textInput: {
        height: 40, 

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
    }
});