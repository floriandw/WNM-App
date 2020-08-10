
import React from 'react';
import { Platform } from 'react-native';

import Colors from '../constant/color';


/*
* import navigation
*/

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

/*
 * Import screens
 */

import Login from "../screens/login";
import Registration from "../screens/registration";
import ToDoHome from "../screens/toDoHome";
import CreateCategory from "../screens/createCategory";
import EditCategory from "../screens/editCategory";
import UpdateToDo from "../screens/updateToDo";
import CreateToDo from "../screens/createToDo";
import UserProfile from "../screens/userProfile";

/*
 * Stack Navigator
 */
const ToDoStackNavigator = createStackNavigator(
    {
        ToDoHome: ToDoHome,
        CreateToDo: CreateToDo,
        UpdateToDo: UpdateToDo
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryGreen : 'white'
            },
           /* headerTitleStyle: {
                fontFamily: 'open-sans-bold'
            },*/
            // headerBackTitleStyle: {
            //     fontFamily: 'open-sans'
            // },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryGreen
        }
    }
);

const CategoryStackNavigator = createStackNavigator(
    {
        CreateCategory: CreateCategory,
        EditCategory: EditCategory
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.secondaryBlue : 'white'
            },
            /*headerTitleStyle: {
                fontFamily: 'open-sans-bold'
            },*/
            // headerBackTitleStyle: {
            //     fontFamily: 'open-sans'
            // },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.secondaryBlue
        }
    }
);

const ProfileStackNavigator = createStackNavigator(
    {
        UserProfile: UserProfile
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.thirdBlue : 'white'
            },
            /*headerTitleStyle: {
                fontFamily: 'open-sans-bold'
            },*/
            // headerBackTitleStyle: {
            //     fontFamily: 'open-sans'
            // },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.thirdBlue
        }
    }
);

const AuthStackNavigator = createStackNavigator(
    {
        Login: Login,
        Registration: Registration
    },
    {
        // defaultNavigationOptions: {
        //     headerStyle: {
        //         backgroundColor: Platform.OS === 'android' ? Colors.primaryGreen : 'white'
        //     },
            // headerTitleStyle: {
            //     fontFamily: 'open-sans-bold'
            // },
            // headerBackTitleStyle: {
            //     fontFamily: 'open-sans'
            // },
            // headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryGreen
        // }
    }
);


/*
 * Tab Navigator
 */
const MainTabNavigatorScreens = {
    Categories: {
        screen: CategoryStackNavigator,
        navigationOptions: {
            tabBarColor: Colors.secondaryBlue
        }
    },
    Todos: {
        screen: ToDoStackNavigator,
        navigationOptions: {
            tabBarColor: Colors.primaryGreen
        }
    },
    Profile: {
        screen: ProfileStackNavigator,
        navigationOptions: {
            tabBarColor: Colors.thirdBlue
        }
    }
};

const MainTabNavigator =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator(MainTabNavigatorScreens, {
            activeColor: 'white',
            inactiveColor: 'black',
            shifting: true,
            barStyle: {
                backgroundColor: Colors.primaryColor,
            },
            initialRouteName: 'Todos'
        })
        : createBottomTabNavigator(MainTabNavigatorScreens, {
            tabBarOptions: {
                activeTintColor: Colors.accentColor,
                inactiveTintColor: Colors.fourthGrey,
                // labelStyle: {
                //     fontFamily: 'open-sans-bold'
                // },
                initialRouteName: 'Todos'
            }
        });


/*
 * Switch Navigator
 */
const MainNavigator = createSwitchNavigator({
    // Startup: StartupScreen,
    Auth: AuthStackNavigator,
    App: MainTabNavigator
});

export default createAppContainer(MainTabNavigator);