import React, { useDebugValue } from 'react' 
import  Counter  from './Counter';
import ItemList from './ItemList';


export const ItemListContainer = () => {
  function onAdd(count){
    console.log(`Agregaste ${count} productos`)
  }
return (
<div>
 <Counter stock={20} onAdd={onAdd}/>
 <ItemList/>
</div>
  ) 
}