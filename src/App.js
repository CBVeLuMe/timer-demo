import './App.css';
import Timer from "./Timer";

function App() {
    const name = "Art";
    return (
        <div className="App" >
            <Timer></Timer>
            {/*<h1>This is a h1</h1>*/}
            {/*<h2>This is a h2 and the author is {name}</h2>*/}
        </div>

        // <div style={{border: '2px solid red'}}>
        //     London Clock
        //     <br/>
        //     <br/>
        //     01:05:10 AM
        //
        // </div>
    );
}

export default App;
