import { ACTION_TYPES } from "../reducers/isLogged"

export const increment = payload => {
    return {
        type: 'INCREMENT',
        payload
    }
}
export const decrement = nr => {
    return {
        type: 'DECREMENT',
        payload: nr
    }
}
export const signIn = () => {
    return {
        type: ACTION_TYPES.SIGN_IN
    }
}
export const add = nr => {
    return {
        type: 'ADD',
        payload: nr
    }
}