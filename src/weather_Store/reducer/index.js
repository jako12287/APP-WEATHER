import { GET_NAME, DISPLAY} from "../action/types";

let initialState = {
    city:[],
    display:false
}

export const reducer = (state = initialState, action)=>{
    switch(action.type){

        case GET_NAME:
            return {
                ...state,
                city: [action.payload]
            }
        case DISPLAY:
            return {
                ...state,
                display:action.payload
            }

        default:
            return state

    }
}