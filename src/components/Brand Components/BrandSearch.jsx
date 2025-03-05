import React, { useState, useEffect } from 'react'
import useFetch from '../../hooks/useFetch'

const BrandSearch = ({ onSearch, initialCategory }) => {
    const { data: kategorijeData } = useFetch("http://localhost:1337/api/brend-kategorijas")
    const { data: locationData } = useFetch("http://localhost:1337/api/brend-lokacijas")

    const kategorije = kategorijeData?.data || []
    const locations = locationData?.data || []

    const [selectedLocation, setSelectedLocation] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")

    useEffect(() => {
        if (initialCategory) {
            setSelectedCategory(initialCategory)
        }
    }, [initialCategory])

    const onSubmit = (e) => {
        e.preventDefault()
        onSearch(selectedLocation, selectedCategory)
    }

    return (
        <form className='select-form' onSubmit={onSubmit}>
            <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
            >
                <option value="">Odaberite Lokaciju</option>
                {locations.map((loc) => (
                    <option key={loc.id} value={loc.Lokacija}>{loc.Lokacija}</option>
                ))}
            </select>
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="">Odaberite Kategoriju</option>
                {kategorije.map((kat) => (
                    <option key={kat.id} value={kat.Ime}>{kat.Ime}</option>
                ))}
            </select>
            <button type="submit">Pretraži</button>
        </form>
    )
}

export default BrandSearch