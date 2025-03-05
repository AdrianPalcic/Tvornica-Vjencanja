import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import BrendCard1 from "./cards/BrendCard1"
import { Link } from "react-router-dom";

const PopularServices = () => {
    const { loading, error, data } = useFetch("http://localhost:1337/api/brends?populate=*");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setCardsToShow(1);
            } else if (window.innerWidth < 1024) {
                setCardsToShow(2);
            } else {
                setCardsToShow(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading blogs</p>;

    const brends = data?.data || [];

    const getMediumImageUrl = (brend) => {
        const mediumImagePath = brend?.Naslovna?.formats?.medium?.url;
        const baseUrl = "http://localhost:1337"; // Base URL for the images
        return mediumImagePath ? `${baseUrl}${mediumImagePath}` : null;
    };

    const processedBrends = brends.map(brend => ({
        ...brend,
        mediumImageUrl: getMediumImageUrl(brend), // Add medium image URL to each brend
    }));

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + cardsToShow) % processedBrends.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - cardsToShow + processedBrends.length) % processedBrends.length);
    };

    return (
        <div className="services">
            <h2>Najpopularnije usluge</h2>
            <h3>za vaše savršeno vjenčanje</h3>
            <div className="services-carousel">
                <div className="services-carousel-inner" style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}>
                    {processedBrends.map((brend) => (
                        <div key={brend.id} className="service-card" style={{ flex: `0 0 ${100 / cardsToShow}%` }}>
                            <BrendCard1
                                naslov={brend.Ime}
                                image={brend.mediumImageUrl}
                                id={brend.documentId}
                            />
                        </div>
                    ))}
                </div>
                <button className="carousel-button prev" onClick={prevSlide}>&#10094;</button>
                <button className="carousel-button next" onClick={nextSlide}>&#10095;</button>
            </div>
            <Link to="/brends"><button className="center">Pregledajte sve usluge</button></Link>
        </div>
    )
}

export default PopularServices