const initialState = [];

export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case "GET_CIUDAD":
            return state = [action.payload]
    
        default:
            return state;
    }
}