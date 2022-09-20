import React, {useEffect, useState} from "react";

// class Timer extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {seconds: 10, minutes: 10, hours: 10, isMorning: true};
//         this.state = {isActive: false};
//         this.state = {btn: document.getElementById("btn")};
//     }
//
//     setZero = () => {
//         this.setState({seconds: 0, minutes: 0, hours: 0});
//     }
//
//     setSeconds = (sec) => {
//         this.setState({seconds: sec});
//     }
//
//     setMinutes = (min) => {
//         this.setState({seconds: min});
//     }
//
//     setHours = (hr) => {
//         this.setState({seconds: hr});
//     }
//
//     handleClick = () => {
//         this.setState({isActive: !this.state.isActive});
//     }
//
//     Replace = () => {
//         return (<div>
//                 <button type="button" value="Search" onClick={this.Replace}/>
//             </div>)
//     }
//
//     // Change value by click
//     handleChange = event => {
//         this.setSeconds(event.target.value);
//     };
//
//     // handleClick = event => {
//     //     event.preventDefault();
//     //     console.log("old value", this.state.minutes)
//     //     console.log("new value", this.state.minutes)
//     // };
//
//     render() {
//         return (
//
//             <div id="container"
//                  style={{border: '2px solid red', backgroundColor: this.state.isActive ? "red" : "blue"}}>
//                 <h1>London Clock</h1>
//                 <br/>
//                 <h2>{this.state.hours}:{this.state.minutes}:{this.state.seconds} AM</h2>
//                 <button id="btn" onClick={this.handleClick}>Suet zero</button>
//             </div>);
//     }
// }

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(13);
    const [period, setPeriod] = useState("AM");
    const [isPausing, setIsPausing] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const setZero = () => {
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    };

    const onClick = () => {
        setIsActive(!isActive);
    }

    const onChange = () => {
        setIsActive(!isActive);
    }

    const Time = () => (<div onClick={onClick}>
            {hours} : {minutes} : {seconds} {period}
        </div>)

    const Input = () => (<div onChange={onChange}>
            <input type="number" value={hours}/> : <input type="number" placeholder={minutes}/> : <input type="number"
                                                                                                         placeholder={seconds}/> {period}
        </div>)

    // const pause = () => {
    //     if (isPausing) {
    //         return clearInterval(interval);
    //     }
    // }

    // Update the timer by seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Update the hours and minutes
    useEffect(() => {
        if (seconds > 60) {
            setSeconds(0);
            setMinutes(minutes => minutes + 1);
        }
        if (minutes > 60) {
            setMinutes(0);
            setHours(hours => hours + 1);
        }
        if (hours > 12) {
            setHours(1);
            if (period.charAt(0) === 'A') {
                setPeriod("PM");
            } else {
                setPeriod("AM")
            }
        }
    }, [seconds])

    // 1. click sec, min, hr -> stop the setInterval
    // 2. -> turns into a input area
    // 3. enter btn -> set new value to them.
    return (

        <div style={{border: '5px solid black'}}>
            <h2>London Clock</h2>
            {/*<h2>{hours}:{minutes}:{seconds} {period}</h2>*/}
            {/*<button onClick={setZero}>This is a setzero button</button>*/}
            <div>
                <h2>
                    {isActive ? <Input/> : <Time/>}
                </h2>
                {/*{isActive ? <Time/> : <Input/>}*/}
            </div>
        </div>);
}


// class Timer extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {seconds: 'sec'};
//         // this.state = {btn: document.getElementById("btn")};
//         this.state = {isActive: true};
//
//         this.handleClick = this.handleClick.bind(this);
//         // this.handleChange = this.handleChange.bind(this);
//         // this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleClick = () => {
//         // Show input box when focussed
//         // alert("You alarmed a button.");
//         this.setState({isActive: !this.state.isActive})
//         console.log(this.state.isActive)
//     }
//
//     render() {
//         return (<form>
//             <div style = {{
//                 backgroundColor: this.state.isActive ? "red" : 'blue',
//             }}>
//                 <button onClick={this.handleClick}>Change Color</button>
//                 <input type="password" placeholder="Password" name="password"/>
//             </div>
//         </form>);
//     }
// }
export default Timer;