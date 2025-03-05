import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import BlogCard2 from '../Homepage Components/cards/BlogCard2';
import { Link } from 'react-router-dom';

const BlogsPageCardContainer = ({ filterBy, searchTerm }) => {

    const { loading, error, data } = useFetch("http://localhost:1337/api/blogs?populate=*")

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading blogs</p>;

    const blogsToEdit = data?.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));




    const getMediumImageUrl = (blog) => {
        const mediumImagePath = blog?.Naslovna?.formats?.medium?.url;
        const baseUrl = "http://localhost:1337"; // Base URL for the images
        return mediumImagePath ? `${baseUrl}${mediumImagePath}` : null;
    };

    const blogs = blogsToEdit.map(blog => {

        const introText = blog.text?.slice(0, 150);
        const mediumImageUrl = getMediumImageUrl(blog);
        return {
            ...blog,
            introText,
            mediumImageUrl,
        };
    });

    const filteredBlogs =
        blogs.filter((blog) => {
            const matchesCategory = filterBy === "Sve" || blog.kategorija.Ime === filterBy;
            const matchesSearchTerm = blog.Naslov.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearchTerm;
        }

        )


    return (
        <div className="blog-page-card-container">
            {filteredBlogs.map((blog) => {
                return (


                    <BlogCard2
                        naslov={blog.Naslov}
                        image={blog.mediumImageUrl}
                        cat={blog.kategorija.Ime}
                        intro={blog.introText}
                        id={blog.documentId}
                    />

                )
            })}
        </div>
    )
}

export default BlogsPageCardContainer