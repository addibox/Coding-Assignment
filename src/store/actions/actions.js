import * as actionTypes from './actionTypes';

export const fetchData = () => {
    return dispatch => {
        return fetch('./data.json')
                .then( res => {
                    return res.json();
                })
                .then( data => {
                    console.log(data);
                    return dispatch(setData(data));
                })
                .catch( err => {
                    console.log(err)
                })
    };
};

export const setData = (data) => {
    return {
        type: actionTypes.setData,
        data : data
    };
};

export const addItem = (id, title) => {
    return {
        type: actionTypes.addItem, 
        itemId: id, 
        itemTitle: title
    };
}; 

export const removeItem = (id, title) => {
    return {
        type: actionTypes.removeItem, 
        itemId: id, 
        itemTitle: title
    };
};
