import React from 'react';
import { StyleSheet, Text ,View,TouchableOpacity, TouchableWithoutFeedback} from 'react-native';


export default function CategoryDrop() {
    return (
        <View style={styles.chooseCategory}>
            <TouchableOpacity style={styles.category}>
                <Text style={styles.categoryText}>Categories  ↓</Text>
            </TouchableOpacity> 
        </View>
    );
}
const styles = StyleSheet.create({
    chooseCategory: {
        position: 'relative',
        //padding: 15,
        //paddingRight:100,
        backgroundColor:'#D8DDE9',
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    category: {
        padding: 15,
        alignSelf: 'stretch',
        //textAlign: 'center',
    },
    categoryText: {
        textAlign: 'center',
        color: 'black',
    },
    /*toDoDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        //padding: 10,
        top: 22,
        bottom: 22,
        right: 10
    },
    /*toDoEdit: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#50A5ED',
        padding: 10,
        top: 22,
        bottom: 22,
        right: 39
    },*/
    toDoDeleteText: {
        color: 'black',
    }
});