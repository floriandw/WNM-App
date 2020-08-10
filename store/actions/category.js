import { CATEGORIES } from '../../data/dummy-data';
//import Category from '../../components/category';

export const GET_CATEGORY = 'GET_CATEGORY';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';

export const getCategoryDetails = () => {
    return async dispatch => {
        dispatch({
            type: GET_CATEGORY,
            
            categories: CATEGORIES
        });
    }
}