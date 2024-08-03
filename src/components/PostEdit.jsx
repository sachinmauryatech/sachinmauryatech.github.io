import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

import "bootstrap/dist/js/bootstrap.bundle.min.js"

function PostEdit() {
    const [post, setPost] = useState({ id: "", title: "", msg: "" })
    const [article, setArticle] = useState()

    const sH = () => {
        axios.post("http://localhost:3000/articles", post)
        console.log("ok");
    }
   

    useEffect(() => {
        axios.get("http://localhost:3000/articles")
            .then(res => {
                console.log(res);
                setArticle(res.data)
            })
    }, [])
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
                            placeholder={article.title}
                            onChange={e => setPost({ ...post, title: e.target.value })}
                        />
                        <textarea
                            className="form-control mb-2"
                            placeholder={article.msg}
                            onChange={e => setPost({ ...post, msg: e.target.value })}
                        />
                        <button className='btn btn-outline-primary'>Insert Post</button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default PostEdit