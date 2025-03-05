import React from 'react'
import StoNudimoCard from '../Homepage Components/cards/StoNudimoCard'
import { FaPenToSquare, FaRegHeart, FaRegNewspaper } from 'react-icons/fa6'

const StoNudimo = () => {

    const usluge = [
        {
            title: "Blog",
            desc: "Stručni uvidi i trendovi za vaše savršeno slavlje",
            list: [
                "Vodiči za stil i trendovi",
                "Savjeti za odabir dobavljača",
                "Upravljanje budžetom",
            ],
            icon: <FaPenToSquare size={30} className='give-me-color' />,
        },
        {
            title: "Priče sa Vjenčanja",
            desc: "Pogledajte kako su drugi proveli svoj poseban dan",
            list: [
                "Fotografije i videozapisi",
                "Iskustva i preporuke",
                "Savjeti za organizaciju",],
            icon: <FaRegHeart size={30} className='give-me-color' />,
        },
        {
            title: "Brendovi i Suradnje",
            desc: "Odabrane kolekcije pouzdanih profesionalaca za vjenčanja",
            list: [
                "Odjeća i obuća",
                "Nakit i dodaci",
                "Usluge i proizvodi",
            ],
            icon: <FaRegNewspaper size={30} className='give-me-color' />,
        },
    ]


    return (
        <div className="onama-sto-nudimo">
            <h2>Što Nudimo?</h2>
            <div className="onama-sto-nudimo-card-container">
                {usluge.map((usluga, index) => {
                    return (
                        <StoNudimoCard
                            key={index}
                            title={usluga.title}
                            desc={usluga.desc}
                            list={usluga.list}
                            icon={usluga.icon}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default StoNudimo