import React from 'react';
import { StyleSheet, Text ,View,ScrollView,TouchableOpacity, TextInput, Button} from 'react-native';

import Header from '../components/header';

export default class EditCategory extends React.Component {
    render() {
        return ( 
            <View>
                
                <View style={styles.body}>
                    <TextInput style={styles.textInput}
                        placeholder='category'
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
    }
});