import React from 'react'
import { useState } from 'react'

export default function Practice() {
  const [inputOne, setInputOne] = useState({
    FirstName : '',
    LastName : ''
  });
  const [inputTwo, setInputTwo] = useState('');
  const [List, setList] = useState([]);


  const Addlist = () => {
    if (inputOne === '' || inputTwo==='' ) {
      alert('noob')
    }
    else {
      const names = {
        firstname: inputOne,
        lastname: inputTwo
      }
      setInputOne('')
      setInputTwo('')
      setList(oldnames => [...oldnames, names])

    }

  }

  const ab = List.map((name) => {
    return (
      <tr>
        <td>{name.firstname}</td>
        <td>{name.lastname}</td>
      </tr>
    )

  })
  return (
    <div>
      <>
        <input type="text" onChange={(e) => setInputOne(e.target.value)} value={inputOne} placeholder='First name' />
        <input type="text" onChange={(e) => setInputTwo(e.target.value)} value={inputTwo} placeholder='Last name' />
        <button onClick={Addlist} >Add</button>
      </>
      <div className='tab'>
        <table>
          <thead>
            <tr>
              <th>First Name_____</th>
              <th>last Name</th>
            </tr>
          </thead>
          <tbody>
            {ab}
          </tbody>
        </table>
      </div>
    </div>
  )
}
