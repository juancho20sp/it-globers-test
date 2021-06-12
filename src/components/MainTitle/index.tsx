import React, { useEffect } from 'react'
import './styles.scss';


// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getMenuOption } from '../../redux/actions/menu.actions';

// Interfaces
import { GlobalState } from '../../utils/interfaces/globalState';

export const MainTitle: React.FC = () => {
    const dispatch = useDispatch();

    const selectedOption = useSelector((state: GlobalState) => state.menuItem);


    useEffect(() => {
        dispatch(getMenuOption());

    }, [dispatch])


    return (
        <div className="mainTitle">
            {<h2>Hola, bienvenido, sabemos que quieres viajar en un <span className="selectedOption">{selectedOption?.name}</span>, por favor diligencia el siguiente formulario:
            </h2>}
        </div>
    )
}

