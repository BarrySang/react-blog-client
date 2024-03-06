import Blog from "./Blog"

function BlogPreview ({blogs}) {
    return (
        <div>
            <h1>Blog Preview</h1>
            {
                blogs.map(blog => (
                    
                    <Blog key={blog.id}
                        user={blog.user}
                        likes={blog.likes}
                        comments={blog.comments}
                        title={blog.title}
                    />
                ))
            }
        </div>
    )
}

export default BlogPreview