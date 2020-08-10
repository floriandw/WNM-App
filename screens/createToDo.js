import React from 'react';
import { StyleSheet, Text ,View,ScrollView,TouchableOpacity,Button, TextInput} from 'react-native';

import Header from '../components/header';


export default class CreateToDo extends React.Component {
    render() {
        return (            
            <View>
                
                <View style={styles.body}>
                    <TextInput style={styles.textInput}
                        placeholder='todo'
                    />       
                    <TextInput style={styles.textInput}
                        placeholder='deadline'
                    />                  
                    <Text>Do you want to share it with an user?</Text>
                    <TextInput style={styles.textInput}
                        placeholder='username'
                    />  
                    <Button style={styles.button2} 
                        color='#505050'
                        borderRadius= '50'
                        title='create todo' 
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
    button: {
        color:'#505050',
        borderRadius: 100,
        marginTop: 50,
    },
    button2: {
        marginTop:0,
    },
    shareTodo: {
        padding: 15,
        alignSelf: 'stretch',
        //textAlign: 'center',
    },
    toDoText : {
        color: '#3B5675',
    }
});