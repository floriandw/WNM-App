import React from 'react';
import { StyleSheet, Text ,View,TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, Platform} from 'react-native';


const ToDo = props => {

    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === "android" && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <TouchableCmp onPress={props.onSelect} useForeground>
            <View style={styles.toDo}>
            
                <Text style={styles.toDoText}>todo: {props.todo}</Text>
                <Text style={styles.toDoText}>deadline: {props.deadline}</Text>
                {/*<TouchableOpacity /*onPress={this.props.editMethod} style={styles.toDoEdit}>
                    <Text style={styles.toDoDeleteText}>Edit</Text>
                </TouchableOpacity>

                */}
                <TouchableOpacity /*onPress={this.props.deleteMethod}*/ style={styles.toDoDelete}>
                    <Text style={styles.toDoDeleteText}>X</Text>
                </TouchableOpacity>
            </View>
        </TouchableCmp>
    );
}

const styles = StyleSheet.create({
    toDo: {
        position: 'relative',
        padding: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#505050',
        paddingRight:100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
    },
    toDoText: {

        color: '#3B5675',
    },
    toDoDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#AE4A36',
        padding: 10,
        top: 22,
        bottom: 22,
        right: 10
    },
    toDoEdit: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#50A5ED',
        padding: 10,
        top: 22,
        bottom: 22,
        right: 39
    },
    toDoDeleteText: {
        color: 'white',
    }
});

export default ToDo;