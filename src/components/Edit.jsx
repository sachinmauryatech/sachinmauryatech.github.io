import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function Edit() {
    const [posts, setPosts] = useState([])
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:3000/articles/${id}`)
            .then(res => {
                console.log(res);
                setPosts(res.data);
            })
    }, [])
  
    const sH = () => {
        axios.put(`http://localhost:3000/articles/${id}`,posts)
        console.log("ok");
    }
    return (
        <>
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
                            value={posts.title}
                            onChange={e => setPosts({ ...posts, title: e.target.value })}
                        />
                        <textarea
                            className="form-control mb-2"
                            placeholder='Enter Post information...'
                            value={posts.msg}
                            onChange={e => setPosts({ ...posts, msg: e.target.value
                             })}
                        />
                        <button className='btn btn-outline-primary'>Update Post</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Edit