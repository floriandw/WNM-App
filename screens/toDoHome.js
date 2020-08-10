import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text ,View,ScrollView,TouchableOpacity, FlatList,TextInput, Button, Keyboard,ActivityIndicator} from 'react-native';
import Colors from '../constant/color';


import Header from '../components/header';
import ToDo from '../components/toDo';
import Category from '../components/categoryDrop';

import { useSelector, useDispatch } from 'react-redux';

import * as userActions from '../store/actions/user';

const ToDoHome = props => {

    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [error, setError] = useState();

    const todos = useSelector(state => state.user.todos);

    const dispatch = useDispatch();

    const loadData = useCallback(async () => {
        setError(null);
        setIsRefreshing(true);

        try {
            await dispatch(userActions.getUserDertails(1));
        } catch (error) {
            console.log(error)
            setError(error);
        }

        setIsRefreshing(false);
    }, [dispatch, loadData]);

    useEffect(() => {
        setIsLoading(true);
        loadData().then(() => { setIsLoading(false); });
    }, [dispatch, loadData]);

    if (error) {
        return (
            <View style={styles.indicator}>
                <Text>{error}</Text>
                <Button
                    title='Try Again'
                    onPress={loadData}
                    color={Colors.primaryGreen}
                />
            </View>
        );
    }

    if (isLoading) {
        return (
            <View style={styles.indicator}>
                <ActivityIndicator
                    size='large'
                    color={Colors.primaryGreen}
                />
            </View>
        );
    }

    if (!isLoading && todos.length === 0) {
        return (
            <View style={styles.indicator}>
                <Button style={styles.button} 
                    color='#505050'
                    borderRadius= '50'
                    title='new todo'
                    onPress={() => props.navigation.navigate('CreateToDo')}
                />
                <Text>No Todos Yet</Text>
            </View>
        );
    }

    return ( 
        <View style={styles.container}>
            <View style={styles.body}>   
                <Button style={styles.button} 
                    color='#505050'
                    borderRadius= '50'
                    title='new todo'
                />                   
                <Category></Category>
                
                <Text style={styles.todoText}>todos:</Text> 
                <FlatList
                    onRefresh={loadData}
                    refreshing={isRefreshing}
                    onTouchStart={Keyboard.dismiss}
                    data={todos}
                    keyExtractor={(item, index) => item.id}
                    renderItem={itemData => (
                        <ToDo
                            todo={itemData.item.todo}
                            deadline={itemData.item.getDeadline}
                            onSelect={() => {
                                props.navigation.navigate('UpdateToDo', {
                                    todo: itemData.item.todo,
                                    deadline: itemData.item.getDeadline
                                });
                            }}
                        />
                    )}
                />
            </View>                              
        </View>
    );
}
const styles = StyleSheet.create({
    todoText: {
        color: '#3B5675',
        margin: 4,
    },
    scrollContainer: {
        marginBottom: 100,
        //flex:0,
    },
    indicator: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
});

export default ToDoHome;