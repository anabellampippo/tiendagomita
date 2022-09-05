import React, {useEffect, useState } from 'react' 
import  Counter  from './Counter';
import ItemList from './ItemList';
import Productos from './Productos';


export const ItemListContainer = () => {
const [productos, setProductos] = useState ([]);

useEffect(() => {

  const getproductos = new Promise ((resolve,reject) => {
  setTimeout (() => {  
    resolve(productos);
  },2000 )

  })

  getproductos.then((response) =>setProductos(response));

},[]);

  function onAdd(count){
    console.log(`Agregaste ${count} productos`)
  }
return (
<div>
 <Counter stock={20} onAdd={onAdd}/>
 <productos lista={Productos}/>
</div>
  ) 
}