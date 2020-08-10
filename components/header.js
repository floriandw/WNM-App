import React from 'react';
import { StyleSheet,TextInput, Text, View,TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import Colors from '../constant/color';

export default function Header() {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.headerCategory}> 
                <Text>
                    categories
                </Text>
            </TouchableOpacity>
            <Text style={styles.headerText}>
                ToDo
            </Text>
            <TouchableOpacity style={styles.headerProfile}>
                <Text>
                    profile
                </Text>
            </TouchableOpacity>
        </View>  
    );
  }

const styles = StyleSheet.create({
    header: {
        height: 65,
        marginTop: 0,
        paddingTop: 30,
        backgroundColor: Colors.primaryGreen,
        justifyContent: 'center',
        flexDirection: 'row',
  
    },
    headerText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
    },
    headerCategory: {
        marginRight: 100,
    },
    headerProfile : {
        marginLeft: 100,
    },
});