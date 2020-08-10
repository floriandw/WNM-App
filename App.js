import React, { useState } from 'react';

import { Font, AppLoading } from 'expo';

// import NavigationContainer from './navigator/NavigationContainer';
import Navigator from './navigation/navigator';

import userReducer from './store/reducers/user';
import categoryReducer from './store/reducers/category';
import authReducer from './store/reducers/auth';

import { enableScreens } from 'react-native-screens';

import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'; // async logica

const rootReducer = combineReducers({
    user: userReducer,
    category: categoryReducer,
    auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

enableScreens();

// const fetchFont = () => {
//     return Font.loadAsync({
//         'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
//         'open-sans': require('./assets/fonts/OpenSans-Regular.ttf')
//     });
// };

export default function App() {

    const [fontLoaded, setFontLoaded] = useState(false);

    // if (!fontLoaded) {
    //     return (
    //         <AppLoading
    //             startAsync={fetchFont}
    //             onFinish={() => setFontLoaded(true)}
    //         />
    //     );
    // }

    return (
        <Provider store={store}>
            <Navigator />
        </Provider>
    );
}