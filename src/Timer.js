import React, {useEffect, useState} from "react";

// class Timer extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {seconds: 10, minutes: 10, hours: 10};
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
//     // Change value by click
//     handleChange = event => {
//         this.setSeconds(event.target.value);
//     };
//     handleClick = event => {
//         event.preventDefault();
//         console.log("old value", this.state.minutes)
//         console.log("new value", this.state.minutes)
//     };
//
//     render() {
//         return (
//             <div style={{border: '2px solid red'}}>
//                 <h1>London Clock</h1>
//                 <br/>
//                 <h2>{this.state.hours}:{this.state.minutes}:{this.state.seconds} AM</h2>
//                 <button onClick={this.setZero}>Set zero</button>
//             </div>
//         );
//     }
// }

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

    const setZero = () => {
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (seconds > 60) {
            setSeconds(0);
            setMinutes(minutes => minutes + 1);
        }
        if (minutes > 60) {
            setMinutes(0);
            setHours(hours => hours + 1);
        }
        if (hours > 24) {
            setHours(0);
        }
    }, [seconds, minutes, hours])

    return (
        <div style={{border: '5px solid black'}}>
            <h2>London Clock</h2>
            <h2>{hours}:{minutes}:{seconds} AM</h2>
            <button onClick={setZero}>This is a setzero button</button>
            <form>
                <label>Enter your seconds:
                    <input
                        type="number"
                        value={seconds}
                        onChange={(e) => setSeconds(e.target.value)}
                    />
                </label>
            </form>
        </div>
    );
}

export default Timer;