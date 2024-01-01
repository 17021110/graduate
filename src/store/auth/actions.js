import types from './type';

// LOGIN ACTION

export const loginActionResult = (result, isSuccess = true) => ({
    type: isSuccess ? types.LOGIN_SUCCESS : types.LOGIN_FAILED,
    payload: result,
});
