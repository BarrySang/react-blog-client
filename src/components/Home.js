import Blog from "./Blog"
import Header from "./Header"

function Home ({blogs}) {
    return (
        <div>
            <Header />
            <h1>Home Component</h1>
            {
                blogs.map(blog => (
                    <Blog key={blog.id}
                        user={blog.user}
                        content={blog.content}
                        likes={blog.likes}
                        comments={blog.comments}
                    />
                ))
            }
        </div>
    )
}

export default Home