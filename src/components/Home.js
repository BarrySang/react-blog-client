import Blog from "./Blog"
import BlogPreview from "./BlogPreview"
import Footer from "./Footer"
import Header from "./Header"

function Home ({blogs, goToPreviousPage, goToNextPage, currentPage, homeContent}) {
    return (
        <div>
            <h1>Home Component</h1>
            <BlogPreview blogs={blogs} />
            <Footer
                goToPreviousPage={goToPreviousPage}
                goToNextPage={goToNextPage}
                currentPage={currentPage}
            />
        </div>
    )
}

export default Home