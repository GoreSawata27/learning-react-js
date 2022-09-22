import React from 'react'
import { useState } from 'react'
import './todo.css'

export default function Todos() {
    const [NewItem, setNewItem] = useState("");
    
    const [items, setItems] = useState([]);

    const HandelClick = () => {
        if(!NewItem){
            alert('put something')
            return;
        }
        const item = {
            id: Math.floor(Math.random()*1000),
            value: NewItem
        }
        setItems(oldTods => [...oldTods, item]);
        setNewItem("")

    }
    const deleteItem = (id)=>{
        const newArray = items.filter(item => item.id!==id)
        console.log(newArray)
        setItems(newArray)
    }

    return (
        <>
            <h1>To Do List</h1>

            <input type="text"
                placeholder='add something...'
                value={NewItem}
                onChange={(e) => setNewItem(e.target.value)} />


            <button onClick={HandelClick} >Add</button>
            <ul>
                {
                    items.map((item) => {
                        return <li key={item.id}>{item.value} <button onClick={()=> deleteItem(item.id)}  >X</button></li>
                    })
                }
            </ul>
        </>
    )
}
