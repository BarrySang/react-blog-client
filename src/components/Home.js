import Blog from "./Blog"
import Footer from "./Footer"
import Header from "./Header"

function Home ({blogs, goToPreviousPage, goToNextPage, currentPage}) {
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
            <Footer
                goToPreviousPage={goToPreviousPage}
                goToNextPage={goToNextPage}
                currentPage={currentPage}
            />
        </div>
    )
}

export default Home