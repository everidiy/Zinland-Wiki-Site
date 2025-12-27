import { useParams, Link } from 'react-router-dom';
import heroesData from '../data/heroes.json';
import '../styles/HeroPage.css';

export default function Hero() {
    const { pers } = useParams();
    const hero = heroesData.find(h => h.pers.toLowerCase() === pers.toLowerCase());

    if (!hero) return <div className="pers-notfound">Hero not found!</div>;

    const { name, sex, mission, desc, img, words } = hero;

    return (
        <div className={`pers-page ${pers.toLowerCase()}`}>
            <Link to="/heroes" className="back-btn">←</Link>
            
            <header className="pers-header">
                <img className="pers-image" src={img} alt={name} />
                <div className="pers-info">
                    <h1 className="pers-name">{name}</h1>
                    <div className="pers-meta">
                        <span className="pers-class">{pers}</span>
                        <span className="pers-sex">{sex}</span>
                    </div>
                </div>
            </header>

            <main className="pers-body">
                <section className="pers-section">
                    <h2>Mission</h2>
                    <p>{mission}</p>
                </section>

                <section className="pers-section">
                    <h2>Description</h2>
                    <p>{desc}</p>
                </section>

                <section className="pers-section">
                    <h2>Words</h2>
                    <div className="pers-words">
                        {words && words.length > 0 ? (
                            words.map((word, index) => (
                                <span key={index} className="word-badge">
                                    {word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()}
                                </span>
                            ))
                        ) : (
                            "No words yet!"
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
}
