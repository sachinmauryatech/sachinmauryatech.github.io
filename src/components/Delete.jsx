import axios from 'axios'
import React, { useEffect, useState } from 'react'

import DeleteData from './DeleteData'
import { Link } from 'react-router-dom'

function Delete() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/articles")
            .then(res => {
                console.log(res);
                setPosts(res.data)
            })
    }, [])
    return (
        <>
            <div className='container'>
                <h1 className='display-1'>View All Data</h1>
            </div>
            <hr />
            {
                posts.map(post => <div key={posts.id} className='container'>
                    <h1 className='bg-primary text-white p-2'>{post.title}</h1>
                    <p>{post.msg}</p>
                    <hr/>
                    <Link to={"../deleteData/" + post.id} className='btn btn-dark my-2'>Delete Post</Link>
                    <hr></hr>
                </div>)
            }
        </>
    )
}

export default Delete