import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import heroesData from '../data/heroes.json';
import '../styles/Heroes.css'

export default function Heroes() {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        setHeroes(heroesData);
        document.title = "Heroes of Zinland"
    }, []);

    return (
        <div className="heroes-page">
            <button><a href="/characters">Back to Selection</a></button>
            <div className="heroes-page-header">
                <h1>Heroes of Zinland</h1>
                <p>Discover the brave heroes our world!</p>
            </div>
            
            <div className="heroes-grid">
                {heroes.map((hero, index) => (
                    <HeroCard
                        key={index}
                        hero={hero}
                    />
                ))}
            </div>
        </div>
    );
}

export function HeroCard({ hero }) {
    const { pers, img } = hero;

    return (
        <Link to={`/heroes/${hero.pers.toLowerCase()}`}>
        <div className="hero-card">
            <div className="hero-card-header">
                <div className="image">
                    <img src={img} alt={pers} />
                </div>
                <p className="hero-class-badge">{pers}</p>
            </div>
        </div>
        </Link>
    );
}
