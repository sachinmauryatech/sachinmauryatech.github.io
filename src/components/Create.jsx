import axios from 'axios'
import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

import "bootstrap/dist/js/bootstrap.bundle.min.js"

function Create() {
    const [post, setPost] = useState({ id: "", title: "", msg: "" })
    const sH = () => {
        axios.post("http://localhost:3000/articles", post)
        console.log("ok");
    }
    return (
        <div className='container my-2'>
            <div className='row d-flex justify-content-center '>
                <div className='col-6 border border-dark-subtle p-5'>
                    <hr />
                    <h1 className='text-primary'>Inset New Post</h1>
                    <hr />
                    <form onSubmit={sH}>
                        <input
                            className="form-control my-2"
                            placeholder='Enter Post Title'
                            onChange={e => setPost({ ...post, title: e.target.value })}
                        />
                        <textarea
                            className="form-control mb-2"
                            placeholder='Enter Post information...'
                            onChange={e => setPost({ ...post, msg: e.target.value })}
                        />
                        <button className='btn btn-outline-primary'>Insert Post</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create