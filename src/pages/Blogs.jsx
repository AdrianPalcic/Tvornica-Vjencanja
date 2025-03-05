import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import SearchBar from '../components/SearchBar'
import useFetch from '../hooks/useFetch'
import BlogsPageCardContainer from '../components/Blogs Components/BlogsPageCardContainer';
import Footer from '../components/Footer';
import BrideStoriesCTA from '../components/Blogs Components/BrideStories';
import HeroNavbar from '../components/Navbars/HeroNavbar';

const Blogs = () => {
    const [active, setActive] = useState("Sve");
    const [searchTerm, setSearchTerm] = useState("");
    const { loading, error, data } = useFetch("http://localhost:1337/api/kategorije");
    const cats = data?.data || [];
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const category = params.get('category');
        if (category) {
            setActive(category);
        } else {
            setActive("Sve");
        }
    }, [location]);

    const handleClick = (e) => {
        const eventTarget = e.target.innerText;
        setActive(eventTarget)
    }

    const onSearch = (term) => {
        setSearchTerm(term);
    }

    return (
        <>
            <HeroNavbar />
            <div className="width">
                <div className="blogs-page-container">
                    <h1>Naš blog</h1>
                    <h3>Sve o vjenčanjima na jednom mjestu</h3>
                    <SearchBar onSearch={onSearch} />

                    <div className="allblogs-categories">
                        <h3>Kategorije</h3>
                        {loading ? <p>Loading...</p> : ""}
                        {error ? <p>error...</p> : ""}
                        <div className="blog-cats">
                            <div className={`cat ${active === "Sve" ? "active" : ""}`} onClick={handleClick}>Sve</div>
                            {cats.map((cat) => (
                                <div
                                    key={cat.id}
                                    className={`cat ${active === cat.Ime ? "active" : ""}`}
                                    onClick={handleClick}
                                >
                                    {cat.Ime}
                                </div>
                            ))}
                        </div>
                    </div>
                    <BlogsPageCardContainer filterBy={active} searchTerm={searchTerm} />
                </div>
                <BrideStoriesCTA />
            </div>
            <Footer />
        </>
    )
}

export default Blogs