import { USERS } from '../../data/dummy-data';

export const GET_USER = 'GET_USER';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const DELETE_USER = 'DELETE_USER';

export const getUserDertails = (id) => {
    return async dispatch => {
        dispatch({
            type: GET_USER,
            loggedInUser: USERS.find(user => user.id === '1'),
            todos: USERS.find(user => user.id === '1').todos
        });
    }
}

export const getUsers = () => {
    return async dispatch => {
        dispatch({
            type: GET_USERS,
            users: USERS

        });
    }
}