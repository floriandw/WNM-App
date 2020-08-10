
import React, { useState, useCallback, useEffect } from 'react';
import { Platform,StyleSheet, Text ,View, FlatList,TextInput, Button, Keyboard,ActivityIndicator} from 'react-native';

import Colors from '../constant/color';
import Header from '../components/header';
import Category from '../components/category';


import { useSelector, useDispatch } from 'react-redux';

import * as categoryActions from '../store/actions/category';

const CreateCategory = props => {

    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [error, setError] = useState();

    const categories = useSelector(state => state.category.categories);

    const dispatch = useDispatch();

    const loadData = useCallback(async () => {
        setError(null);
        setIsRefreshing(true);

        try {
            await dispatch(categoryActions.getCategoryDetails());
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

    if (!isLoading && categories.length === 0) {
        return (
            <View style={styles.indicator}>
                <TextInput style={styles.textInput}
                    placeholder='category'
                    //padding= '1'
                />                    
                <Button style={styles.button} 
                    color='#505050'
                    borderRadius= '50'
                    title='create category'
                />
                {/*<TextInput style={styles.textInput}
                    placeholder='category'
                    //padding= '1'
                />        
                <Button style={styles.button} 
                    color='#505050'
                    borderRadius= '50'
                    title='new category'
                    onPress={() => props.navigation.navigate('CreateCategory')}
        />*/}
                <Text>No Categories Yet</Text>
            </View>
        );
    }

    return ( 
        <View style={styles.container}>        
            <TextInput style={styles.textInput}
                placeholder='category'
                //padding= '1'
            />                    
            <Button style={styles.button} 
                color='#505050'
                borderRadius= '50'
                title='create category'
            />
            
            <FlatList
                    onRefresh={loadData}
                    refreshing={isRefreshing}
                    onTouchStart={Keyboard.dismiss}
                    data={categories}
                    keyExtractor={(item, index) => item.id}
                    renderItem={itemData => (
                        <Category
                            category={itemData.item.category}
                            //deadline={itemData.item.getDeadline}
                            onSelect={() => {
                                props.navigation.navigate('editCategory', {
                                    category: itemData.item.category,
                                    //deadline: itemData.item.getDeadline
                                });
                            }}
                        />
                    )}
                />
            {/*<ScrollView style={styles.scrollContainer}>  
                <Category></Category>           
                <Category></Category>  
                <Category></Category>           
                <Category></Category>  
                <Category></Category>           
                <Category></Category>  
                <Category></Category>           
                <Category></Category>  
                        </ScrollView>  */}                
        </View>
    );

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
    },
    scrollContainer: {
        marginBottom: 100,
    },
});

export default CreateCategory;