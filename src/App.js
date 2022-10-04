import './index.scss';
import React from 'react';

function App() {
    let [count, setCount] = React.useState(0)
    const onPlus = () => { 
        setCount(count + 1); 
    }; 
    
    const onMinus = () => { 
        setCount(count - 1); 
    }; 
    const onReset = () => { 
        setCount(count = 0); 
    }; 

    return (
        <div className="App">
            <div>
                <h2>Счетчик:</h2>
                <h1>{count}</h1>
                <button className="minus" onClick={onMinus}>- Минус</button>
                <button className="plus" onClick={onPlus}>Плюс +</button>
                <button className="reset" onClick={onReset}>Обнулить!!</button>

            </div>
        </div>
    );
}

export default App;
