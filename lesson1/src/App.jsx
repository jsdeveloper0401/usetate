import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const [shag, setShag] = useState(0);
    const [login, setLogin] = useState(false);
    const [active, setActive] = useState(false);
    const [counters, setCounters] = useState([0, 1, 2, 3, 4]);

    const increaseCount = () => {
        setCount((prev) => prev + 1);
    };
    const decreaseCount = () => {
        if (count > 0) {
            setCount((prev) => prev - 1);
        }
    };
    const addCounter = () => {
        let item = counters[counters.length - 1];
        setCounters([...counters, item + 1]);
    };
    const updateCount = (index, type) => {
        const newCounters = [...counters];
        if (type === "plus") {
            newCounters[index] += 1;
        } else if (type === "minus" && newCounters[index] > 0) {
            newCounters[index] -= 1;
        }
        setCounters(newCounters);
    };

    return (
        <>
            <button
                onClick={increaseCount}
                className="btn btn-primary my-2 mx-2">
                +
            </button>
            <button
                onClick={decreaseCount}
                className="btn btn-secondary my-2 mx-2"
                disabled={count === 0}>
                -
            </button>

            <h2>Yurish: {count}</h2>

            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 offset-3 text-center">
                        <button
                            className="btn btn-success"
                            onClick={() => setActive(!active)}>
                            Change Active
                        </button>

                        {active ? (
                            <h1 className="mt-3">Active</h1>
                        ) : (
                            <h1 className="mt-3">Passive</h1>
                        )}

                        <button
                            className="btn btn-success d-block mx-auto mt-3"
                            onClick={addCounter}>
                            Add Counter
                        </button>

                        {counters.map((item, index) => (
                            <div key={index} className="d-flex">
                                <button
                                    className="btn btn-success my-2 m-2"
                                    onClick={() => updateCount(index, "plus")}>
                                    +
                                </button>
                                <p className="my-2 mx-2">{item}</p>
                                <button
                                    className="btn btn-warning my-2 m-2"
                                    onClick={() => updateCount(index, "minus")}>
                                    -
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <button onClick={() => setCount((item) => item + shag)}>+</button>
            <button onClick={() => setCount((item) => item - shag)}>-</button>

            <h2>Qadamlar kattaligi: {shag}</h2>
            <button onClick={() => setShag((item) => item + 1)}>
                Qadamni kattalashtirish
            </button>

            <h2 className="login">{login ? "Welcome" : "Please log in"}</h2>
            <button onClick={() => setLogin(!login)}>Login</button>
        </>
    );
}

export default App;
