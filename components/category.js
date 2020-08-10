import React from 'react';
import {Platform, StyleSheet, Text ,View,TouchableOpacity, TouchableWithoutFeedback, TouchableNativeFeedback} from 'react-native';


const Category = props => {
    
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === "android" && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <TouchableCmp onPress={props.onSelect} useForeground>
            <View style={styles.toDo}>
            
                <Text style={styles.categoryText}>Category: {props.category}</Text>
                
                <TouchableOpacity /*onPress={this.props.editMethod}*/ style={styles.categoryEdit}>
                    <Text style={styles.categoryDeleteText}>Edit</Text>
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
    categoryText: {
        color: '#3B5675',
    },
    categoryEdit: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#50A5ED',
        padding: 10,
        top: 22,
        bottom: 22,
        right: 39
    },
    categoryDeleteText: {
        color: 'white',
    }
});
export default Category;