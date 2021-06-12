import { GET_MENU_OPTION, SET_MENU_OPTION } from '../types';

import { MenuItem } from '../../utils/interfaces/menuItem';

const initialState: MenuItem = {
    id: 0,
    name: ''
}

export const menuReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_MENU_OPTION:
            return { ...action.payload };
        case SET_MENU_OPTION:
            return action.payload
        default:
            return state;
    }
}