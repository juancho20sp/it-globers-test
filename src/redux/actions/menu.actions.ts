import { GET_MENU_OPTION } from '../types';
import { SET_MENU_OPTION } from '../types';

export const getMenuOption = () => (dispatch: any, getState: any) => {
    const data = getState().menuItem;

    dispatch({
        type: GET_MENU_OPTION,
        payload: data
    })
}


export const setMenuOption = (payload: any) => ({
    type: SET_MENU_OPTION,
    payload
})