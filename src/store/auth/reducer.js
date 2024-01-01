import types from './type';

const initState = {
    authenticated: false,
    loginLoading: false,
};

export default function authReducer(
    state = initState,
    action
) {
    switch (action.type) {
        case types.LOGIN: {
            return { ...state, loginLoading: true };
        }
        default:
            return state;
    }
}
