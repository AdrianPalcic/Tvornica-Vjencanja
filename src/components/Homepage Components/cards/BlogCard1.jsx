import { FaCalendar } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { Link } from "react-router-dom"

const BlogCard1 = ({ image, naslov, cat, intro, id }) => {


    return (
        <>

            <Link to={`/blog/${id}`}>
                <div className="card">
                    <div className="card-hero">
                        <img src={image} alt="Card image" loading="lazy"></img>
                        <button className="view">Pogledaj</button>
                    </div>
                    <div className="card-content">
                        <div className="category">
                            <span>{cat}</span>
                        </div>
                        <h2 className='title'>{naslov}</h2>
                        <p className='text'>{intro}...</p>
                        <div className="misc">
                            <div className="left">
                                <FaCalendar className="misc-icon" size={"18px"} /><p>12.12.2021</p>
                            </div>
                            <div className="right">
                                <FaClock className="misc-icon" size={"18px"} /><p>5 min read</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>


        </>
    )
}

export default BlogCard1;
