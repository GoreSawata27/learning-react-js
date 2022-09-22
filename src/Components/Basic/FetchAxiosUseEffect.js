import axios from 'axios'
import React, { useState, useEffect } from 'react'


export default function FetchAxiosUseEffect() {
    const [posts, setPosts] = useState([])


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setPosts(res.data);
                console.log(res)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const listItems = posts.map((post) => {
       return <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td> {post.body} </td>
        </tr>

    })


    return (
        <table >
            <thead>
                <tr>
                    <th>no.</th>
                    <th>title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {
                    listItems
                }
            </tbody>
        </table>
    )
}
