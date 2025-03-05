import React, { useEffect, useState } from "react";
import axios from "axios";

const OpenStreetMapEmbed = ({ address }) => {
    const [coordinates, setCoordinates] = useState(null);

    useEffect(() => {
        const fetchCoordinates = async () => {
            try {
                const response = await axios.get(
                    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
                );

                if (response.data.length > 0) {
                    const { lat, lon } = response.data[0];
                    setCoordinates({ lat, lon });
                } else {
                    console.error("Address not found");
                }
            } catch (error) {
                console.error("Error fetching coordinates:", error);
            }
        };

        fetchCoordinates();
    }, [address]);

    return (
        <div>
            {coordinates ? (
                <iframe
                    width="100%"
                    height="400"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${coordinates.lon},${coordinates.lat},${coordinates.lon},${coordinates.lat}&layer=mapnik&marker=${coordinates.lat},${coordinates.lon}`}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            ) : (
                <p>Loading map...</p>
            )}
        </div>
    );
};

export default OpenStreetMapEmbed;
