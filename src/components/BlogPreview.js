import Blog from "./Blog"

function BlogPreview ({blogs}) {
    return (
        <div>
            <h1>Blog Preview</h1>
            {
                blogs.map(blog => (
                    
                    <Blog
                    key={blog.id}
                    blog={blog}
                    />
                ))
            }
        </div>
    )
}

export default BlogPreview