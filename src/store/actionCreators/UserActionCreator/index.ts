import {Dispatch} from "redux";
import axios from "axios";
import { UserAction, UserActionTypes } from 'store/reducers/userReducer/type';

export const fetchMe = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.SET_IS_LOADING})
            const response = await axios.get('me')
            setTimeout(() => {
                dispatch({type: UserActionTypes.SET_USER, payload: response.data})
            }, 500)
        } catch (e) {
            dispatch({
                type: UserActionTypes.SET_ERROR,
                payload: 'Пользователь не найдей'
            })
        }
    }
}