import {useState} from 'react'


const Counter = ({stock, onAdd}) => {
    const [count, setCount] = useState (1)

function add () {
    if (count < 20){
    setCount (count + 1)}
}

function substract () {
    if (count > 0){
    setCount (count - 1)}
}

function reset () {
    setCount (1)
}


    return (
<div>
    <div className="contador text-center">
       <h1>Contador</h1>
        <p>Stock: {stock} </p>
        <p>Cantidad: {count}</p>
    <div>
    <button className="btn" onClick={substract}>-</button>
        <button className="btn"  onClick={reset}> Reset</button>
        <button className="btn"  onClick={add}>+</button>
    </div>
    <div>
    <button className="btn"  onClick={() => onAdd (count)}>Agregar</button>
 
    </div>
</div>
    </div>

    )
}

export default Counter