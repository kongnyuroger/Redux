const selectedItems = (state = [], action) => {
    console.log(this, action, state)
    switch(action.type){
        case 'ADD':
            return [...state, action.payload]
        case 'DECREMENT': {
            const newState = [...state];
            newState.splice(0, 1);
            return newState;
        }
        default:
            return state

            +
    }

}

export default selectedItems