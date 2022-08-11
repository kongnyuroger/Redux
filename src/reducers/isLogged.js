export const ACTION_TYPES = Object.freeze({
    SIGN_IN: 'SIGN_IN',
    SIGN_OUT: 'SIGN_OUT'
})

const loggedReducer = (state = false, action) => {
    console.log(this, action, state)
    switch(action.type){
        case ACTION_TYPES.SIGN_IN:
            return true;
        case ACTION_TYPES.SIGN_OUT:
            return false;
        default:
            return state;
    }
 }

 export default loggedReducer