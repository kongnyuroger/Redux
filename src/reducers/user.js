const defaultState =  {
    firstName: "",
    lastName: "",
    email: "",
    age: 10
};

const ACTION_TYPES = Object.freeze({
    UPDATE_EMAIL: "user/update email",
    UPDATE_FIRST_NAME: "user/update first name",
    UPDATE_LAST_NAME: "user/update last name",
    RESET: "reset",
})


export default function userReducer(state = defaultState, {type, payload}) {
    switch(type) {
        case ACTION_TYPES.UPDATE_FIRST_NAME:
            return {
                ...state,
                firstName: payload
            };
        case ACTION_TYPES.UPDATE_LAST_NAME:
            return {
                ...state,
                lastName: payload
            };
        case ACTION_TYPES.UPDATE_EMAIL:
            return {
                ...state,
                email: payload
            };
        case ACTION_TYPES.RESET:
            return defaultState;
        case "INCREMENT":
            return {
                ...state,
                age: state.age + 1
            }; 
        default:
            return state;
        
    }
}