import { useEffect, useState } from "react";

export default function MyComponent(){
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    const addClick = () => {
        setCount((prevCount) => prevCount + 1);
    }
    const tick = () => {
        console.log('ticking')
        setDate(new Date());
    }

    useEffect(() =>{
        console.log('updating document title');
        document.title = `Clicked ${count} times`;
    },[count]);

    useEffect(() => {
        console.log('starting timer')
        const interval =  setInterval(tick,1000);

        // stop the timer
        return () => {
            console.log('component unmount')
            clearInterval(interval);
        };
    },[]);

    return (
        <div>
            <p>Time : {date.toLocaleTimeString()}</p>
            
            <p>
                <button type="button" onClick={addClick}>Click</button>
            </p>
        </div>
    );
}