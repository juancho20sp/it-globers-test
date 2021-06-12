import React, { useEffect, useState } from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getMenuOption } from '../../redux/actions/menu.actions';

// Interfaces
import { GlobalState } from '../../utils/interfaces/globalState';

export const MainTitle: React.FC = () => {
    const dispatch = useDispatch();

    const selectedOption = useSelector((state: GlobalState) => state.menuItem);

    const [selected, setSelected] = useState(selectedOption);


    useEffect(() => {
        dispatch(getMenuOption());

    }, [dispatch])

    useEffect(() => {
        console.log(selectedOption)
    }, [selectedOption])


    return (
        <div>
            {<h2>Este es mi título {selectedOption?.name}</h2>}
        </div>
    )
}

