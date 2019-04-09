const initialState = {
    mylist : [ 
        { 'title': 'Futurama',      'id': 1, 'img': 'http://cdn1.nflximg.net/webp/7621/3787621.webp'},
        { 'title': 'The Interview', 'id': 2, 'img': 'http://cdn1.nflximg.net/webp/1381/11971381.webp' },
        { 'title': 'Gilmore Girls', 'id': 3, 'img': 'http://cdn1.nflximg.net/webp/7451/11317451.webp'}
    ],
    recommendations : [
        { 'title': 'Family Guy', 'id': 4, 'img': 'http://cdn5.nflximg.net/webp/5815/2515815.webp'},
        { 'title': 'The Croods', 'id': 5, 'img': 'http://cdn3.nflximg.net/webp/2353/3862353.webp'},
        { 'title': 'Friends',    'id': 6, 'img': 'http://cdn0.nflximg.net/webp/3200/9163200.webp'}
    ],
    
}

const reducer = (state = initialState, action) => {
    const selectedItem = state.recommendations.find( ele => {
         return ele.id === action.itemId;
    });
     switch(action.type){
         case 'addItem':   
            if(state.mylist.find(ele => ele.id === action.itemId)){
                alert(action.itemTitle + " was in your list");
            }else{
                return {
                    ...state,
                   mylist: state.mylist.concat(selectedItem)
               }
            }
            return state; 
         case 'removeItem':
            if( state.mylist.find( ele => ele.id === action.id )){
                alert( action.itemTitle + " is not in your list");
            }else{
                return {
                    ...state,
                    mylist: state.mylist.filter( ele => ele.id !== action.itemId)
                };
            }
            return state;
         default:
            return state;
    }
    
}   

export default reducer;