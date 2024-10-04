// https://www.facebook.com/reel/1508186246456765
import { useState } from "react";
import "./Calculadora.css"
import BarraNav from "../../BarraNavegacion/BarraNav";


export const Calculadora = () => {

    const [input, setInput] = useState('');
    const [result, setResult] = useState(' ');

    const handleclick = (value) => {
        setInput((prev) => prev + value)
    }

    const handleClear = () => {
        setInput('')
        setResult('')
    }
    const handlCalculate = () => {
        try {
            setResult(eval(input))
        } catch (error) {
            setResult(error)
        }
    }
    return (
        <div>
            <header>
                <BarraNav />
            </header>
            <div className="calculator">
                <div className="display">
                    <input type="text" value={input} readOnly />
                    <div className="result">{result}</div>
                </div>
                <div className="buttons">
                    <button onClick={() => handleclick('1')}>1</button>
                    <button onClick={() => handleclick('2')}>2</button>
                    <button onClick={() => handleclick('3')}>3</button>
                    <button onClick={() => handleclick('/')}>/</button>
                    <button onClick={() => handleclick('4')}>4</button>
                    <button onClick={() => handleclick('5')}>5</button>
                    <button onClick={() => handleclick('6')}>6</button>
                    <button onClick={() => handleclick('*')}>*</button>
                    <button onClick={() => handleclick('7')}>7</button>
                    <button onClick={() => handleclick('8')}>8</button>
                    <button onClick={() => handleclick('9')}>9</button>
                    <button onClick={() => handleclick('-')}>-</button>
                    <button onClick={() => handleClear()}>C</button>
                    <button onClick={() => handleclick('0')}>0</button>
                    <button onClick={() => handleclick('.')}>.</button>
                    <button onClick={() => handleclick('+')}>+</button>
                    <button onClick={() => handlCalculate()}>=</button>
                </div>
            </div>
        </div>

    )
}