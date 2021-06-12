
import { MenuItem } from '../../utils/interfaces/menuItem';

// Declaramos los elementos del menú
// Se cambia la estructura de {[id, name]} a [{id, name}]
// Para facilitar el tipado y manejar un arreglo de objetos respetando la estructura de un archivo JSON
export const menuItems: MenuItem[] = [
    {
        id: 1,
        name: 'VivaAir'
    },
    {
        id: 2,
        name: 'Avianca'
    },
    {
        id: 3,
        name: 'Latam'
    },
    {
        id: 4,
        name: 'AeroITGlobers'
    }

]