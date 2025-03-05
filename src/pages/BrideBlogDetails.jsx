import Footer from "../components/Footer"
import HeroNavbar from "../components/Navbars/HeroNavbar"
import { Link, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { FaFacebook, FaInstagram, FaShare } from "react-icons/fa"

const BrideBlogPost = () => {

    const { id } = useParams();
    const { data, error, loading } = useFetch(`http://localhost:1337/api/bride-blogs/${id}?populate=*`);

    const blog = data?.data || "";

    const naslovna = blog?.Naslovna?.formats?.large?.url
        ? `http://localhost:1337${blog?.Naslovna?.formats?.large?.url}`
        : "/placeholder.svg"

    const formattedDate = new Date(blog.createdAt).toLocaleDateString("hr-HR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const listItems = blog?.tips?.split(/\n\s*\n/).map((item, index) => <li key={index}>{item.trim()}</li>);
    const brideImageURL = blog?.Mlada?.formats?.thumbnail.url ? `http://localhost:1337${blog?.Mlada?.formats?.thumbnail.url}` : "/placeholder.svg"

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
                        <figure className="bride-blog-image">
                            <img
                                key={`img-${index}`}
                                src={src}
                                alt={alt}
                                className="bride-content-image"
                            />
                            <figcaption>{blog.Venue}</figcaption>
                        </figure>
                    )
                }
            } else if (line.startsWith("**") && line.endsWith("**")) {
                const text = line.slice(2, -2)
                return (
                    <h2 key={`h2-${index}`}>
                        {text}
                    </h2>
                )
            } else if (line.trim() !== "") {
                return (
                    <p key={`p-${index}`} >
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
            <div className="width">

                <article className="bride-blog-post">
                    <div className="bride-hero-section">
                        <img
                            src={naslovna}
                            alt="Bride and groom on their wedding day"
                            className="bride-hero-image"
                        />
                    </div>

                    <header className="bride-blog-header">
                        <h1 className="bride-blog-title">{blog.Naslov}</h1>
                        <p className="bride-blog-meta">By {blog.Ime_mlade} | {formattedDate}</p>
                    </header>

                    {/* Blog Content Area */}
                    <div className="bride-blog-content">
                        <main className="bride-main-content">
                            <div className="bride-blog-text">
                                {renderContent(blog.body)}
                            </div>

                            {/* Bridal Tips & Lessons Learned Section */}
                            <div className="bride-bridal-tips">
                                <h3>
                                    Savjeti za mladenke i naučene lekcije</h3>
                                <ul>
                                    {listItems}
                                </ul>
                            </div>

                            {/* Call-to-Action (CTA) Section */}
                            <div className="bride-cta-section">
                                <Link to={"/brideBlogs"}>
                                    <button className="bride-cta-button">
                                        Svidjela vam se priča? Pročitajte još
                                    </button>
                                </Link>

                            </div>

                        </main>

                        {/* Sidebar */}
                        <aside className="bride-sidebar">
                            <div className="bride-author-bio">
                                <h3>O Mladoj</h3>
                                <img
                                    src={brideImageURL || ""}
                                    alt="Sarah Johnson"
                                    className="bride-author-image"
                                />
                                <p>
                                    {blog.omladi}
                                </p>

                            </div>
                        </aside>
                    </div>
                </article>
            </div>
            <Footer />
        </>
    )
}

export default BrideBlogPost

