
const initialState = {
    username: '',
    password: '',
    isValid: true
}

const LoginReducer = (state, action) => {

    if (action.type === 'username_change') {
        return {
            ...state,
            username: action.value
        }
    }

    if (action.type === 'password_change') {
        return {
            ...state,
            password: action.value
        }
    }

    return { ...state }

}

export { LoginReducer, initialState }