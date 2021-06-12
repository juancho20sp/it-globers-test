import { GET_MENU_OPTION } from '../types';
import { SET_MENU_OPTION } from '../types';

// import { GlobalState } from '../../utils/interfaces/globalState';

export const getMenuOption = () => (dispatch: any, getState: any) => {
    const data = getState().menuItem;

    console.log(data);

    dispatch({
        type: GET_MENU_OPTION,
        payload: data
    })
}


export const setMenuOption = (payload: any) => ({
    type: SET_MENU_OPTION,
    payload
})