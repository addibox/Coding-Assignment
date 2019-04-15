
import * as actionTypes from '../store/actions/actionTypes';

const initialState = {
    data: null,
    myList: null,
    recommendations: null
}


const reducer = (state = initialState, action) => {
    
    let selectedAddItem, selectedRemoveItem;
    if(state.recommendations){
        selectedAddItem = state.recommendations.find( ele => {
            return ele.id === action.itemId;
        });
    };

    if(state.myList){
        selectedRemoveItem = state.myList.find( ele => {
            return ele.id === action.itemId;
        });
    };


     switch(action.type){
            case actionTypes.addItem:   
             if(state.myList.find(ele => ele.id === action.itemId)){
                 alert(action.itemTitle + " was in your list");
             }else{
                 return {
                     ...state,
                    myList: state.myList.concat(selectedAddItem),
                    recommendations: state.recommendations.filter( ele => ele.id !== action.itemId)
                }
             }
             return state; 
         case actionTypes.removeItem:
             if( state.myList.find( ele => ele.id === action.id )){
                 alert( action.itemTitle + " is not in your list");
             }else{
                 return {
                     ...state,
                     myList: state.myList.filter( ele => ele.id !== action.itemId),
                     recommendations: state.recommendations.concat(selectedRemoveItem)
                     
                 };
             }
             return state;
         case actionTypes.setData:
            return {
                ...state,
                data: action.data,
                myList: action.data.mylist,
                recommendations: action.data.recommendations
            }
         default:
            return state;
    }
    
}   

export default reducer;