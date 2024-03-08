import './App.css';
import Home from './components/Home';
import { generateBlogs, getBlog, getIndexRange } from '../src/lib/lib-functions/lib-functions'
import { useEffect, useState } from 'react';
import BlogPreview from './components/BlogPreview';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Blog from './components/Blog';

function App() {
  const blogsPerPage = 5

  const [blogs, setBlogs] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [blogsCurrentPage, setBlogsCurrentPage] = useState([])
  const [homeContent, setHomeContent] = useState(<BlogPreview blogs={blogs} />)

  // get all blogs
  useEffect(() => {
    let blogs = generateBlogs(20)
    setBlogs(blogs)
  }, [])

  // get blogs for the current page
  useEffect(() => {
    const blogsCurrentPageRetrieved = blogs.slice(getIndexRange(currentPage, blogsPerPage).startIndex, getIndexRange(currentPage, blogsPerPage).endIndex)
    setBlogsCurrentPage(blogsCurrentPageRetrieved)
    console.log(blogsCurrentPageRetrieved)
    
  }, [currentPage, blogs])

  // navigate to previous page
  function goToPreviousPage() {
    if (currentPage - 1 > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  // navigate to next page
  function goToNextPage() {
    if (blogs.length > (blogsPerPage * currentPage)) {
      setCurrentPage(currentPage + 1)
    }
  }
  

  return (

    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route
          path="/"
          exact
          element={<Home blogs={blogsCurrentPage}
          currentPage={currentPage}
          goToPreviousPage={goToPreviousPage}
          goToNextPage={goToNextPage}
          
          />} />
          <Route path="/blogs/:blogId" element={<Blog
          blogs={blogs}
          />} />
        </Routes>
        
      
      </HashRouter>
    </div>
  );
}

export default App;
