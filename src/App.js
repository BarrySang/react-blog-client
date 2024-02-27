import './App.css';
import Home from './components/Home';
import { generateBlogs } from '../src/lib/lib-functions/lib-functions'
import { useEffect, useState } from 'react';

function App() {
  const [blogs, setBlogs] = useState([])
  
  // get all blogs
  useEffect(() => {
    let blogs = generateBlogs(5)
    setBlogs(blogs)
  }, [])

  return (
    <div className="App">
      <Home blogs={blogs} />
    </div>
  );
}

export default App;
