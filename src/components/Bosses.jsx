import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import bossesData from '../data/bosses.json';
import '../styles/Bosses.css'

export default function Bosses() {
    const [bosses, setBosses] = useState([]);

    useEffect(() => {
        setBosses(bossesData);
        document.title = "Bosses of Zinland"
    }, []);

    return (
        <div className="bosses-page">
            <button><a href="/characters">Back to Selection</a></button>
            <div className="bosses-page-header">
                <h1>Bosses of Zinland</h1>
                <p>Discover the powerful bosses in our world!</p>
            </div>
            
            <div className="bosses-grid">
                {bosses.map((boss, index) => (
                    <BossCard
                        key={index}
                        boss={boss}
                    />
                ))}
            </div>
        </div>
    );
}

export function BossCard({ boss }) {
    const { pers, img } = boss;

    return (
        <Link to={`/bosses/${boss.pers.toLowerCase()}`}>
        <div className="boss-card" >
            <div className="boss-card-header">
                <img src={img} alt="" />
                <span className="boss-class-badge">{pers}</span>
            </div>
        </div>
        </Link>
    );
}