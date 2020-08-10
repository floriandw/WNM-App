import React from 'react';
import { StyleSheet, Text ,View,ScrollView,TouchableOpacity,Button, TextInput} from 'react-native';

import Header from '../components/header';

const updateToDo = props => {

    const todo = props.navigation.getParam('todo');
    const deadline = props.navigation.getParam('deadline');

    return (            
        <View>
            <View style={styles.body}>
                <Text>todo</Text>
                <TextInput style={styles.textInput}
                    placeholder='todo'
                    value={todo}
                />      
                <Text>deadline</Text> 
                <TextInput style={styles.textInput}
                    placeholder='deadline'
                    value={deadline}
                />         
                <Button style={styles.button} 
                    color='#505050'
                    borderRadius= '50'
                    title='update' 
                />                  
            </View>               
        </View>
    );
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

export default updateToDo;