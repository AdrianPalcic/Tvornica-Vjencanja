import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import BrandSearch from '../components/Brand Components/BrandSearch'
import useFetch from '../hooks/useFetch'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import BrendCard1 from '../components/Homepage Components/cards/BrendCard1'
import HeroNavbar from '../components/Navbars/HeroNavbar'

const Brands = () => {
    const { loading, error, data } = useFetch("http://localhost:1337/api/brends?populate=*")
    const [location, setLocation] = useState("")
    const [cat, setCat] = useState("")
    const routerLocation = useLocation()

    useEffect(() => {
        const params = new URLSearchParams(routerLocation.search)
        const categoryParam = params.get('category')
        if (categoryParam) {
            setCat(categoryParam)
        }
    }, [routerLocation])

    const onSearch = (locationTerm, catTerm) => {
        setLocation(locationTerm)
        setCat(catTerm)
    }

    const brends = data?.data || []

    const brendsInOrder = brends.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const getMediumImageUrl = (brend) => {
        const mediumImagePath = brend?.Naslovna?.formats?.medium?.url
        const baseUrl = "http://localhost:1337"
        return mediumImagePath ? `${baseUrl}${mediumImagePath}` : null
    }

    const processedBrends = brendsInOrder.map(brend => ({
        ...brend,
        mediumImageUrl: getMediumImageUrl(brend),
    }))

    const filteredBrends = processedBrends.filter((brend) => {
        if (!location && !cat) {
            return true
        }

        const matchesLocation = !location || location === "none" || brend?.brend_lokacija?.Lokacija === location
        const matchesCat = !cat || cat === "none" || brend.kategorija.Ime === cat

        return matchesLocation && matchesCat
    })

    return (
        <>
            <HeroNavbar />
            <div className="width">
                <div className="brands-page-container">
                    <h1 className="brands-header-tag">Naše Ponude</h1>
                    <h3 className="brand-h3-tag">Kako bi vaše vjenčanje bilo kao iz snova</h3>
                    <BrandSearch onSearch={onSearch} initialCategory={cat} />
                    <div className="brand-card-container">
                        {filteredBrends.length === 0 ?
                            <p>No Brands of this kind : try reading about <Link to={"/brideBlogs"}>Bride stories</Link></p> :
                            filteredBrends.map((brend) => (
                                <BrendCard1
                                    key={brend.id}
                                    image={brend.mediumImageUrl}
                                    naslov={brend.Ime}
                                    id={brend.documentId}
                                    cat={brend.kategorija.Ime}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="blog-cta-container">
                    <div className="blog-cta">
                        <div className="left">
                            <h1>Planirate <span>savršen</span> dan?</h1>
                            <h3>Otkrijte stručne savjete, stvarne priče i kreativne ideje kako biste svoje vjenčanje učinili nezaboravnim. Od odabira pravog mjesta do izrade svakog detalja, naš blog ima sve savjete koji su vam potrebni da svoj san pretvorite u stvarnost.</h3>
                            <Link to={"/blogs"}><button>Pročitaj</button></Link>
                        </div>
                        <div className="right">
                            <img src="/public/image .png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Brands