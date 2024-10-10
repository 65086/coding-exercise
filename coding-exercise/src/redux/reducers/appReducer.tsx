import { Action } from "../actions";

// States' definition
export interface IappCommonState {
  isFetching: boolean,
  accessToken:string,
  isLoggedIn:boolean
}

const initialState: IappCommonState = {
    isFetching: false, 
    accessToken: '',
    isLoggedIn:false
};

export interface State {
    appCommonState: IappCommonState
}

const appCommonState = (
    state=initialState,
    action: Action
    ): IappCommonState => {
    switch (action.type) {
        case 'SET':
            return { ...state, accessToken: action.accessToken,isLoggedIn:true }
        case 'SET_FETCHING':
            return { ...state, isFetching: action.isFetching }
        default:
            return state;
    }
}


export default appCommonState
