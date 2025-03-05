import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Footer from '../components/Footer';
import { MdOutlineEmail } from "react-icons/md";
import { CiLink } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import OpenStreetMapEmbed from '../components/map/OpenStreetMapEmbed';
import HeroNavbar from '../components/Navbars/HeroNavbar';



const BrendDetails = () => {
    const { id } = useParams();
    const { loading, error, data } = useFetch(`http://localhost:1337/api/brends/${id}?populate=*`);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading brand data</p>;

    const brand = data?.data;


    const coverImageUrl = brand?.Naslovna?.formats?.large?.url
        ? `http://localhost:1337${brand.Naslovna.formats.large.url}`
        : "/placeholder.svg";

    const renderParagraphs = (paragraphs) => {
        if (!paragraphs) return null;

        const lines = paragraphs.split("\n");
        return lines.map((line, index) => {
            if (line.startsWith("**") && line.endsWith("**")) {
                const text = line.slice(2, -2);
                return (
                    <h4 key={`h4-${index}`} className="brand-details-body-subheanding">
                        {text}
                    </h4>
                )
            } else if (line.trim() !== "") {
                return (
                    <p key={`p-${index}`}>
                        {line}
                    </p>
                )
            } else if (line.trim() === "") {
                return (
                    <br key={`br-${index}`} />
                )
            }
            return null;
        })
    }

    return (
        <>
            <HeroNavbar />
            <div className="width">
                <div className="brand-details-container">
                    <div className="brand-details-title">
                        <img src="/brand-placeholder.png" alt="Brand placeholder"></img>
                        <div className="brand-details-left">
                            <div className="brand-details-title-cats">
                                <div className="category"><span>{brand?.kategorija?.Ime}</span></div>
                                <div className="category"><span>{brand?.brend_lokacija?.Lokacija || "Licko-senjska"}</span></div>
                            </div>
                            <div className="brand-details-title-name">
                                <h3>{brand?.Ime}</h3>
                                <h4>{brand?.adresa || "Ilica 93, Zagreb"}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="brand-details-image">
                        <img src={coverImageUrl} alt="Brand cover" loading='lazy'></img>
                        <p>Pogledaj sve slike (5)</p>
                    </div>
                    <div className="brand-details-body">
                        <div className="brand-details-body-start">
                            <h4>O Brendu</h4>
                        </div>
                        <div className="brand-details-body-text">
                            {renderParagraphs(brand.dugi_opis)}
                        </div>
                        <div className="brand-details-body-tags">
                            {
                                brand?.telefon ? <a href={`tel:${brand?.telefon}`}><MdOutlineLocalPhone size={22} />{brand?.telefon}</a> : ""
                            }
                            {
                                brand?.email ? <a href={`mailto:${brand?.email}`}><MdOutlineEmail size={22} />
                                    {brand?.email}</a> : ""
                            }
                            {
                                brand?.web ? <a href={brand?.web}><CiLink size={22} />
                                    {brand?.Ime}</a> : ""
                            }
                        </div>
                        <div className="brand-details-body-social-media">
                            {
                                brand?.Facebook ? <a target='_blank' href={brand?.Facebook}><FaFacebook size={28} /></a> : ""
                            }
                            {
                                brand?.Instagram ? <a target='_blank' href={brand?.Instagram}><FaInstagram size={28} /></a> : ""
                            }
                            {
                                brand?.Twitter ? <a target='_blank' href={brand?.Twitter}><FaXTwitter size={28} /></a> : ""
                            }
                            {
                                brand?.TikTok ? <a target='_blank' href={brand?.TikTok}><FaTiktok size={28} /></a> : ""
                            }
                        </div>
                        {
                            brand?.adresa ? <div className="brand-details-body-location">
                                <h3>Lokacija</h3>

                                <OpenStreetMapEmbed address={brand?.adresa} />
                            </div> : ""
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BrendDetails;
