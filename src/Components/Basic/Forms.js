import React from 'react'
import { useState } from 'react'

export default function Forms() {
    const [name, setName] = useState('')
    const [number, setNumber] = useState()
    const handelChange = (e) => {
        setName(e.target.value)
    }
    const handelChangee = (e) => {
        setNumber(e.target.value)
    }
    const  handelSubmit = (e)=>{
     e.preventDeafult();
     console.log(name)
    
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input type="text"  placeholder='Name' value={name} onChange={handelChange} />
                <input type="number" placeholder='0'  value={number}  onChange={handelChangee}/>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}
