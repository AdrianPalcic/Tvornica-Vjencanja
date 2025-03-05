import React from 'react'
import BlogCard1 from './cards/BlogCard1'
import useFetch from '../../hooks/useFetch'
import { Link } from 'react-router-dom'

const NewestBlogs = () => {

    const { loading, error, data } = useFetch("http://localhost:1337/api/blogs?populate=*")

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading blogs</p>;

    const blogs = data?.data || [];

    const getThreeNewestBlogs = (blogs) => {
        if (!Array.isArray(blogs) || blogs.length === 0) {
            return [];
        }

        return blogs
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 3);
    };

    const newestBlogs = getThreeNewestBlogs(blogs);

    const getMediumImageUrl = (blog) => {
        const mediumImagePath = blog?.Naslovna?.formats?.medium?.url;
        const baseUrl = "http://localhost:1337"; // Base URL for the images
        return mediumImagePath ? `${baseUrl}${mediumImagePath}` : null;
    };

    const blogsWithIntro = newestBlogs.map(blog => {
        const introText = blog.text?.slice(0, 100); // Get the first 150 characters
        const mediumImageUrl = getMediumImageUrl(blog); // Extract medium image URL
        return {
            ...blog,
            introText, // Add intro text to the blog
            mediumImageUrl, // Add medium image URL to the blog
        };
    });
    return (
        <div className='newest-blogs'>
            <h1>Najnovije</h1>
            <h3>iz našeg bloga</h3>
            <div className="card-container">
                {blogsWithIntro.map((blog) => (
                    <BlogCard1
                        naslov={blog.Naslov}
                        image={blog.mediumImageUrl}
                        cat={blog.kategorija.Ime}
                        intro={blog.introText}
                        key={blog.id}
                        id={blog.documentId}

                    />
                ))}
            </div>
            <Link to={"/blogs"}><button>Pogledaj više</button></Link>
        </div>
    )
}

export default NewestBlogs