import React from 'react';
import { StyleSheet, Text ,View,ScrollView,TouchableOpacity, TextInput, Button} from 'react-native';


import Header from '../components/header';
import ToDo from '../components/toDo';

export default class Home extends React.Component {

    
    constructor(props) {
        super(props);
        this.state = {
            toDoArray: [],
            toDoText: '',
        } 
    }
    

    render() {
        
        let todos = this.state.toDoArray.map((val, key) => {
            return <ToDo key={key} keyval={key} val={val}
                deleteMethod={ ()=> this.deleteToDo(key)} 
                editMethod= { ()=> this.editToDo(key)}/>
        });
        return (
                
                <View style={styles.container}>
                    <Header/>

                    <ScrollView style={styles.scrollContainer}>
                        {todos}
                    </ScrollView>
                    
                    <View style={styles.footer}>
                        <TextInput
                            style={styles.textInput}
                            onChangeText = {(toDoText) => this.setState({toDoText})}
                            value = {this.state.toDoText}
                            placeholder='Write your to-do here.'
                            placeholderTextColor='grey'>
                        </TextInput>
                    </View>
                    
                    <TouchableOpacity onPress={this.addToDo.bind(this)} style={styles.button}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>

        );

    }
    addToDo() {

        if (this.state.toDoText) {

            var d = new Date();
            this.state.toDoArray.push({
                'date': d.getFullYear() +
                "/" + (d.getMonth() + 1) +
                "/" + d.getDate()+
                " " + d.getHours() + ":" + d.getMinutes(),
                'todo': "todo: "+this.state.toDoText
            });
            this.setState({ toDoArray: this.state.toDoArray })
            this.setState({ toDoText: ''});
        }
    }

    deleteToDo(key) {
        this.state.toDoArray.splice(key,1);
        this.setState({ toDoArray: this.state.toDoArray})
    }
    editToDo(key) {
        this.state.toDoArray.splice(key,1);
        this.setState({ toDoArray: this.state.toDoArray})
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D6DEF1',
        flex: 1,
    },
    scrollContainer: {
        flex:1,
        marginBottom: 100,
    },
    footer: {
        position:'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex:10,
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 20,
        backgroundColor: '#40455E',
        borderTopWidth: 2,
        color:'white',
    },
    button: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 60,
        backgroundColor: '#52C59E',
        width:90,
        height: 90,
        borderRadius: 50,
        alignItems:'center',
        justifyContent: 'center',
        elevation:8,
    },
    buttonText: {
        color:'white',
        fontSize: 24,
    }
    
});