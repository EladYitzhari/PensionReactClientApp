import * as actionTypes from '../acions/actionTypes'

const initialState = {
    stage:"opening",
    userId: null,
    version:null,
    chartData:{
        cycleNum:0,
        
    }
}


const reducer = (state = initialState ,action) => {
    switch(action.type){
        case actionTypes.INSERT_NEW_USER:
        {
            return {
               ...state,
               userId:action.val
               
            }
        }  
        case actionTypes.CHANGE_STAGE:
            {
                return {
                   ...state,
                   stage:action.val
                   
                }
            }
            case actionTypes.UPDATE_VERSION_NUMBER:
                {
                    return {
                       ...state,
                       version:action.val
                       
                    }
                }   
    }
    
    return state;
}


export default reducer;