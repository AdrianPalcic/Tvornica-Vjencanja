import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const Footer = () => {
    const { data: blogdata } = useFetch("http://localhost:1337/api/kategorije")
    const { data: serviceData } = useFetch("http://localhost:1337/api/brend-kategorijas")
    const navigate = useNavigate()

    const blogs = blogdata?.data || []
    const services = serviceData?.data || []

    const slicedBlogs = blogs.slice(0, 6)

    const handleCategoryClick = (category) => {
        navigate(`/brends?category=${encodeURIComponent(category)}`)
    }

    return (
        <footer className='footer'>
            <div className="footer-content">
                <div className="footer-content-container">
                    <Link to={"/"}><img src='/logo (2).png' alt="Logo" /></Link>
                    <p>Since 2012</p>
                    <div className="social-media-icons">
                        <Link to="#"><FaFacebook size={35} className='icon' /></Link>
                        <Link to="#"><FaInstagram size={35} className='icon' /></Link>
                        <Link to="#"><FaTiktok size={35} className='icon' /></Link>
                    </div>
                </div>
                <div className="footer-content-container">
                    <Link to={"/blogs"}><h2>Blog</h2></Link>
                    {slicedBlogs.map((blog) => (
                        <Link
                            to={`/blogs?category=${encodeURIComponent(blog.Ime)}`}
                            key={blog.id}
                        >
                            {blog.Ime}
                        </Link>
                    ))}
                </div>
                <div className="footer-content-container">
                    <Link to={"/brends"}><h2>Ponude</h2></Link>
                    {services.map((service) => (
                        <Link
                            to={`/brends?category=${encodeURIComponent(service.Ime)}`}
                            key={service.id}
                            onClick={() => handleCategoryClick(service.Ime)}
                        >
                            {service.Ime}
                        </Link>
                    ))}
                </div>
                <div className="footer-content-container">
                    <div className="footer-links">
                        <Link to="/onama">O nama</Link>
                        <Link to="/cesta-pitanja">Česta Pitanja</Link>
                        <br></br>
                        <Link to="/kolacici">Kolačići</Link>
                        <Link to="/politika-privatnosti">Politika Privatnosti</Link>
                        <Link to="/uvjeti-koristenja">Uvjeti korištenja</Link>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>Copyright © {new Date().getFullYear()} Tvornica Vjenčanja</p>
            </div>
        </footer>
    )
}

export default Footer