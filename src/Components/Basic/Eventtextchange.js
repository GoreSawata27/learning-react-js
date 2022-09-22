import React, { useState } from 'react'

export default function Eventtextchange() {
   
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handlelpClick = ()=>{
        let a = text.toLowerCase();
        setText(a)
    }

    const handleClear = ()=>{
        setText('')
    }

    
    const handelOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('')

    return (<>
        <div>
            <div>
                <textarea placeholder='Type here...' value={text} className="form-control" onChange={handelOnChange} cols='80'  rows="8"></textarea>
            </div>
            <button type="button" onClick={handleUpClick}>Convert to UpperCase</button>
            <button type="button" onClick={handlelpClick}>Convert to lowerCase</button>
            <button type="button" onClick={handleClear}>Clear Text</button>


            <h1>{text.split(' ').length} Words and {text.length} Characters</h1>
           
        </div>

        </>
    )
}
