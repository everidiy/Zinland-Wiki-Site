import { Link } from 'react-router-dom';
import bossesData from '../data/bosses.json';
import '../styles/BossPage.css';

export default function Boss() {
    const nameParam = window.location.pathname.split("/").pop(); // получаем имя босса из URL
    const bossData = bossesData.find(b => b.pers.toLowerCase() === nameParam.toLowerCase());

    if (!bossData) return <div className="boss-notfound">Boss not found!</div>;

    const { name, sex, desc, img, word } = bossData;

    return (
        <div className="boss-page boss">
            <Link to="/bosses" className="back-btn-boss">←</Link>
            
            <header className="boss-header">
                <img className="boss-image" src={img} alt={name} />
                <div className="boss-info">
                    <h1 className="boss-name">{name}</h1>
                    <div className="boss-meta">
                        <span className="boss-class">{nameParam}</span>
                        <span className="boss-sex">{sex}</span>
                    </div>
                </div>
            </header>

            <main className="boss-body">

                <section className="boss-section">
                    <h2>Description</h2>
                    <p>{desc}</p>
                </section>

                <section className="boss-section">
                    <h2>Word</h2>
                    <div className="boss-words">
                        {word && word.length > 0 ? (
                                <span className="word-badge-boss">
                                    {word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()}
                                </span>
                        ) : (
                            "No word yet!"
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
}
