import { CATEGORIES } from '../../data/dummy-data';
import { GET_CATEGORY } from '../actions/category';

const initialState = {
    //loggedInUser: {},
    categories: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORY:
            return {
                //loggedInUser: action.loggedInUser,
                categories: action.categories
            }
    }

    return state;
}