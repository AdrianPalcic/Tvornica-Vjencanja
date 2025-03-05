
import Footer from "../components/Footer";
import BrideHero from "../components/BrideBlogs Components/BrideHero";
import BrideBlogCard from "../components/Homepage Components/cards/BrideBlogCard";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
const BrideBlogs = () => {

    const { loading, error, data } = useFetch("http://localhost:1337/api/bride-blogs?populate=*");

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const blogData = data?.data || [];

    const getImageURL = (blog) => {
        const imagePath = blog?.Mlada?.url
        const baseUrl = "http://localhost:1337"
        return imagePath ? `${baseUrl}${imagePath}` : null
    }

    const blogsWithIntro = blogData.map(blog => {
        const introText = blog.body?.slice(0, 100); // Get the first 150 characters
        const imageURL = getImageURL(blog); // Extract medium image URL
        return {
            ...blog,
            introText, // Add intro text to the blog
            imageURL, // Add medium image URL to the blog
        };
    });

    return (
        <>
            <BrideHero />
            <div className="width">
                <div className="bride-blogs-container">
                    {blogsWithIntro.map((brideBlog) => {
                        return (
                            <BrideBlogCard
                                key={brideBlog.id}
                                id={brideBlog.documentId}
                                ime={brideBlog.Ime_mlade}
                                date={brideBlog.createdAt}
                                image={brideBlog.imageURL}
                                text={brideBlog.introText}
                            />
                        )
                    })}
                </div>
                <div className="bride-blogs-cta">
                    <div className="bride-blogs-cta-left">
                        <h2> Pronađite savršene usluge za vaše <span>vjenčanje</span></h2>
                        <h4>Od lokacija do fotografa – istražite najbolje opcije za vaš poseban dan!</h4>
                    </div>
                    <div className="bride-blogs-cta-right">
                        <Link to={"/brends"}><button>Pretraži</button></Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BrideBlogs