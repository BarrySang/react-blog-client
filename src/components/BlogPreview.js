import Blog from "./Blog"

function BlogPreview ({blogs}) {

    // remove 'content' property from each blog
    blogs.map(blog => {
        if('content' in blog) {
            delete blog['content']
        }

        return blog    
    })

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