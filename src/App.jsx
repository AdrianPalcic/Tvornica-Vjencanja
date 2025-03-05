import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import BlogDetails from './pages/BlogDetails';
import BrendDetails from './pages/BrendDetails';
import Blogs from './pages/Blogs';
import Brands from './pages/Brands';
import BrideBlogDetails from './pages/BrideBlogDetails';
import BrideBlogs from './pages/BrideBlogs';
import Onama from './pages/Onama';
import ScrollToTop from './components/ScrollToTop';

function App() {


  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/brends" element={<Brands />} />
        <Route path="/brend/:id" element={<BrendDetails />} />
        <Route path="/brideDetails/:id" element={<BrideBlogDetails />} />
        <Route path="/brideBlogs" element={<BrideBlogs />} />
        <Route path="/onama" element={<Onama />} />
      </Routes>
    </Router>
  )
}

export default App
