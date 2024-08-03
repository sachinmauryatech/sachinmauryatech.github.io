import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

import "bootstrap/dist/js/bootstrap.bundle.min.js"


function View() {
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
                posts.map(post => <div key={post.id} className='container'>
                    <h1 className='bg-primary text-white p-2'>{post.title}</h1>
                    <p>{post.msg}</p>
                </div>)
            }
        </>



    )
}

export default View