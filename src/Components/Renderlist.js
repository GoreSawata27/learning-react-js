import React from 'react'
// rendering list using map .

export default function Renderlist() {
    const greets = ['hii', 'hello', 'byee','hii'];
    const mapgreet = greets.map((greets,index) => <h1 key={index}> {index}  {greets}</h1>)
    const person = [
        {
            id: 1,
            name: 'gore',
            age: 22
        }, {
            id: 2,
            name: 'goree',
            age: 23
        }, {
            id: 3,
            name: 'goreee',
            age: 24
        }
    ];
    const mapPersons = person.map(person =>
        <h1>i am {person.name}. I am  {person.age} years old.  </h1>
    )
    return (
        <div>
            {mapgreet}
            {mapPersons}
        </div>
    )
}
