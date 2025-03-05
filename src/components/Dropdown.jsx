import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("");
    const { data } = useFetch("http://localhost:1337/api/kategorije");
    const categories = data?.data || [];
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleCategorySelect = (category) => {
        setSelected(category.Ime);
        setIsOpen(false);
        navigate(`/blogs?category=${encodeURIComponent(category.Ime)}`);
    };

    return (
        <div className="dropdown" ref={dropdownRef}>
            <div
                className={`select ${isOpen ? 'select-clicked' : ''}`}
                onClick={handleClick}
            >
                <span className="selected">{selected || "Pretražite po kategorijama"}</span>
                <div className={`caret ${isOpen ? 'caret-rotate' : ''}`}></div>
            </div>
            <ul className={`dropdown-menu ${isOpen ? 'dropdown-menu-open' : ''}`}>
                {categories.map((category) => (
                    <li
                        key={category.id}
                        onClick={() => handleCategorySelect(category)}
                    >
                        {category.Ime}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;