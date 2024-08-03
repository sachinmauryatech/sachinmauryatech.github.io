import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function DeleteData() {
    const { id } = useParams();
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/articles/${id}`)
            .then(res => {
                console.log(res);
                setPosts(res.data);
            })
    }, [])

    const sH = () => {
        axios.delete(`http://localhost:3000/articles/${id}`)
        .then(response => {
            console.log('Data successfully deleted');
          })
          .catch(error => {
            console.error(error);
          });
    };

    return (
        <>
            <div key={posts.id} className='container'>
                <h1 className='bg-primary text-white p-2'>{posts.title}</h1>
                <p>{posts.msg}</p>
                <button className='btn btn-dark my-2' onClick={sH}>Delete Post</button>
            </div>
        </>
    )
}

export default DeleteData

