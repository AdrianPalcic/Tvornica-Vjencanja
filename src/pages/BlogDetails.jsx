import React from "react"
import { Link, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import Footer from "../components/Footer"
import { FaCalendar, FaClock, FaTag } from "react-icons/fa"
import HeroNavbar from "../components/Navbars/HeroNavbar"

const BlogDetails = () => {
    const { id } = useParams()
    const { loading, error, data } = useFetch(`http://localhost:1337/api/blogs/${id}?populate=*`)

    if (loading) return <div className="loading">Loading...</div>
    if (error) return <div className="error">Error loading blog post</div>

    const blog = data?.data

    if (!blog) return <div className="not-found">No blog post found</div>

    const coverImageUrl = blog.Naslovna?.formats?.medium?.url
        ? `http://localhost:1337${blog.Naslovna.formats.medium.url}`
        : "/placeholder.svg"

    const renderContent = (content) => {
        if (!content) return null
        const lines = content.split("\n")
        return lines.map((line, index) => {
            if (line.startsWith("![")) {
                const match = line.match(/!\[(.*?)\]\((https?:\/\/[^\s)]+)\)/)
                if (match) {
                    const alt = match[1]
                    const src = match[2]
                    return (
                        <img key={`img-${index}`} src={src} alt={alt} className="blog-content-image" />
                    )
                }
            } else if (line.startsWith("**") && line.endsWith("**")) {
                const text = line.slice(2, -2)
                return (
                    <h3 key={`h3-${index}`} className="blog-content-subheading">
                        {text}
                    </h3>
                )
            } else if (line.trim() !== "") {
                return (
                    <p key={`p-${index}`} className="blog-content-paragraph">
                        {line}
                    </p>
                )
            } else if (line.trim() === "") {
                return (
                    <br key={`br-${index}`} />
                )
            }
            return null
        })
    }

    return (
        <>
            <HeroNavbar />

            <div className="details-width">
                <div className="blog-details-container">
                    <div className="blog-naslovna">
                        <img src={coverImageUrl || "/placeholder.svg"} alt={blog.Naslov} />
                    </div>
                    <div className="blog-details-title">
                        <h1>{blog.Naslov}</h1>
                    </div>
                    <div className="blog-details-icons">
                        <div className="blog-details-date">
                            <FaCalendar className="misc-icon" size={20} />
                            <p>{new Date(blog.publishedAt).toLocaleDateString()}</p>
                        </div>
                        <div className="blog-details-readtime">
                            <FaClock className="misc-icon" size={20} />
                            <p>5 min read</p>
                        </div>
                        <div className="blog-details-category">
                            <FaTag className="misc-icon" size={20} />
                            <p>{blog.kategorija.Ime}</p>
                        </div>
                    </div>
                    <div className="blog-details-content">{renderContent(blog.text)}</div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default BlogDetails

