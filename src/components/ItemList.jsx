import react from 'react'
import item from './Item'

const ItemList = ({lista}) => {
return (
<ul>
    {lista.map ((productos) => (

<item productos={productos} key={productos.nombre} />

    )) }
</ul>

);

};


export default ItemList;