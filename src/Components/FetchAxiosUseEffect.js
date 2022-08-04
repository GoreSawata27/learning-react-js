import axios from 'axios'
import React, { useState, useEffect } from 'react'


export default function FetchAxiosUseEffect() {
     const [posts, setPosts] = useState([])


     useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            setPosts(res.data);
        })
        .catch((error)=>{
            console.log(error);
        })
     } ,[])
   
    return (
        <div>
           {posts.map( post => <li key={post.id}>{post.title}</li> )}
        </div>
    )
}
