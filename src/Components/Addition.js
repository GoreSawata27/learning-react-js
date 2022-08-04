import { useState } from "react";

export default function Addition() {
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [add, setAdd] = useState(num1 + num2);

    const handelChange1 = (e) => {
        setNum1(+e.target.value);
    };
    const handelChange2 = (e) => {
        setNum2(+e.target.value);
    };

    const handelAddition = () => {
        setAdd(num1 + num2)
    };

    return (
        <div>
            <div className="App">
                <input
                    onChange={handelChange1} placeholder="0" type="number" value={num1}
                />
            </div>
            <div className="App">
                <input type="number" onChange={handelChange2}  placeholder="0"  value={num2}
                />
            </div>
            <div className="App">
                
                <button onClick={handelAddition}>Addition is </button>
                <h1>{add}</h1>
            </div>
        </div>
    );
}
