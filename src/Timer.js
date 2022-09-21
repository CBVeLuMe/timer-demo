import React, {useEffect, useState} from "react";

function Timer() {
    // load local time
    // should be a box
    // css file
    // click any of them, enter a new number, set the new value
    // am pm changable
    const [second, setSecond] = useState(Number(new Date().toLocaleString("en-GB", {second: "numeric"})));
    const [minute, setMinute] = useState(Number(new Date().toLocaleString("en-GB", {minute: "numeric"})));
    const [hour, setHour] = useState(Number(new Date().toLocaleString("en-GB", {hour: "numeric"})));
    const [period, setPeriod] = useState(() => {
        if (hour > 12) {
            setHour(hour - 12);
            return "PM";
        } else {
            return "AM";
        }
    });
    const [isActive, setIsActive] = useState(true);
    const [h, setH] = useState(0);
    const [m, setM] = useState(0);
    const [s, setS] = useState(0);

    const handleClick = () => {
        setIsActive(false);
    }

    const handleHourChange = (event) => {
        let value = event.target.value;
        if (value >= 0 && value <= 23) {
            setHour(value);
        }
    }
    const handleMinuteChange = (event) => {
        let value = event.target.value;
        if (value >= 0 && value <= 59) {
            setMinute(value);
        }
    }
    const handleSecondChange = (event) => {
        let value = event.target.value;
        if (value >= 0 && value <= 59) {
            setSecond(value);
        }
    }

    const handleBlur = event => {
        setIsActive(true);
        h <= 12 ? setPeriod("AM") : setPeriod("PM");
    }

    const Time = () => (<div onClick={handleClick}>
        {hour} : {minute} : {second} {period}
    </div>)

    const Input = () => (<form style={{display: "inline"}} onBlur={handleBlur}>
        <input type="number" value={hour} min="0" max="23" onChange={handleHourChange}/>&nbsp;:&nbsp;
        <input type="number" value={minute} min="0" max="59" onChange={handleMinuteChange}/>&nbsp;:&nbsp;
        <input type="number" value={second} min="0" max="59" onChange={handleSecondChange}/>&nbsp;
        {period}
        {/*<input type="submit"/>*/}
    </form>)

    // Update the timer by seconds
    useEffect(() => {
        const interval = setInterval(() => {
            if (isActive) {
                setSecond(second => second + 1);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [isActive, second]);

    useEffect(() => {
        if (isActive) {
            if (second >= 60) {
                setSecond(0);
                setMinute(minute => minute + 1);
            }
            if (minute >= 60) {
                setMinute(0);
                setHour(hour => hour + 1);
                if (hour <= 12) {
                    setPeriod("AM");
                } else {
                    setHour(hour => hour - 12);
                    setPeriod("PM");
                }
            }
        }
    }, [second])

    // 1. click sec, min, hr -> stop the setInterval
    // 2. -> turns into a input area
    // 3. enter btn -> set new value to them.
    return (<div>
        <h2>London Clock</h2>
        <h2>
            {isActive ? <Time/> : <Input/>}
        </h2>
    </div>);
}

export default Timer;