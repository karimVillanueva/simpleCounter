import React, {useState} from 'react';
import './board.sass';

const Board = () => {
    const [count,setCount] = useState(0);
    return (
        <div className='container'>
            <h3>Counter</h3>
            <div className='marker' >{count}</div>
            <div className="tablet">
            <button onClick = {()=>setCount(count +2)}>+</button>
            <button onClick = {()=>setCount(count -1)}>-</button>
            <button onClick = {()=>setCount(0)}>Reset</button>
            </div>
        </div>
    );
}

export default Board;
