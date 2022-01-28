import { UserAction, UserActionTypes, UserState } from './type';

const InnitialState:UserState = {
  user: {
    email: "",
    phone: "",
    fullName: "",
    accountID: "",
  },
  isAuth: false,
  isLoading: false,
  error: null
};

export const userReducer = (state = InnitialState, action:UserAction):UserState => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return {...state, user:{...action.payload}}
    case UserActionTypes.SET_IS_LOADING:
      return {...state, isLoading:true}

    default:
      return state
  }
};
