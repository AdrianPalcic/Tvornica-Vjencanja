import { FaPenToSquare } from "react-icons/fa6";

const StoNudimoCard = ({ title, desc, list, icon }) => {
    return (
        <div className="sto-nudimo-card">
            <div className="card-icon">
                {icon}
            </div>
            <h4>{title}</h4>
            <p className='sto-nudimo-card-desc'>{desc}</p>
            <ul className="card-list">
                {list.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default StoNudimoCard