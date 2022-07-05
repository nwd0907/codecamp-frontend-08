import { useState } from 'react'

export default function CounterStatePage(){
    const [count, setCount] = useState(0)

    function counterUp(){
        setCount(count + 1)
    }

    function counterDown(){
        setCount(count - 1)
    }

    return (
        <>
            <div>{count}</div>
            <button onClick={counterUp}>카운트 올리기!!!</button>
            <button onClick={counterDown}>카운트 내리기!!!</button>
        </>
    )

}