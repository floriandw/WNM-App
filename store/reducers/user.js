import { USERS } from '../../data/dummy-data';
import {GET_USER, GET_USERS} from '../actions/user';


const initialState = {
    loggedInUser: {},
    todos: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                loggedInUser: action.loggedInUser,
                todos: action.todos
            }
        case GET_USERS:
        return {
            loggedInUser: action.loggedInUser,
            todos: action.todos
        }
    }

    return state;
}