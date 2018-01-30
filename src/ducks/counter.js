//reducer that controls 
const INCREMENT= 'INCREMENT';
const DECREMENT = 'DECREMENT';



let initialState = {
    currentValue: 0
}

export function increment (amount){
    return {
    type: INCREMENT,
    payload: amount
    }
}

export function decrement (amount) {
    return {
    type: DECREMENT,
    payload: amount
    }
}

export default function(state=initialState, action) {
    switch(action.type) {
        case INCREMENT:
        return  {
            currentValue: state.currentValue + action.payload
        };
        case DECREMENT:
        return {
            currentValue: state.currentValue - action.payload
        };
        default:
        return state;
    }
}
