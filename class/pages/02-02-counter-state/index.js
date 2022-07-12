import { useState } from 'react'

export default function CounterStatePage(){
    const [count, setCount] = useState(0)

    function counterUp(){
        setCount(1)
        setCount(10)
        setCount(333)
        setCount(12312)
        setCount(355)
    }

    return (
        <>
            <div>{count}</div>
            <button onClick={counterUp}>카운트 올리기!!!</button>
        </>
    )

}