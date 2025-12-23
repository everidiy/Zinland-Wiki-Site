import { useEffect, useState } from "react"
import heroesData from '../data/heroes.json';
import '../styles/Heroes.css'
import '../styles/Modal.css'

export default function Heroes() {
    const [heroes, setHeroes] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedHero, setSelectedHero] = useState(null)

    useEffect(() => {
        setHeroes(heroesData);
    }, []);

    const openModal = (hero) => {
        setSelectedHero(hero)
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    }

    const closeModal = () => {
        setSelectedHero(null);
        setModalOpen(false);
        document.body.style.overflow = 'auto'; 
    };

    document.title = "Heroes of Zinland"

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
                        openModal={() => openModal(hero)}
                    />
                ))}
            </div>

            {modalOpen && selectedHero && (
                <HeroModal 
                    hero={selectedHero}
                    closeModal={closeModal}
                />
            )}
        </div>
    );
}

export function HeroCard({ hero, openModal }) {
    const { pers, img } = hero;

    return (
        <div className="hero-card" onClick={openModal}>
            <div className="hero-card-header">
                <img src={img} alt={pers} />
                <p className="hero-class-badge">{pers}</p>
            </div>
        </div>
    );
}

export function HeroModal({ hero, closeModal }) {
    const { name, pers, sex, mission, desc, img, words } = hero;

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={closeModal}>×</button>
                
                <div className="modal-header">
                    <div className="modal-image">
                        <img src={img} alt={name} />
                    </div>
                    <div className="modal-title">
                        <h2>{name}</h2>
                        <div className="modal-subtitle">
                            <span className="modal-badge">{pers}</span>
                            <span className="modal-sex">{sex}</span>
                        </div>
                    </div>
                </div>
                <div className="modal-body">
                    <div className="modal-mission">
                        <h3>Mission</h3>
                        <p>{mission}</p>
                    </div>
                    <div className="modal-desc">
                        <h3>Description</h3>
                        <div className="modal-desc-text">
                            {desc}
                        </div>
                    </div>
                    <div className="modal-words">
                        <h3>Words</h3>
                        <div className="modal-words-text">
                            {words && words.length > 0 ? (
                                words.map((word, index) => (
                                    <span key={index} className="word-badge">{
                                        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                                    }</span>
                                ))
                            ) : (
                                "No words yet!"
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
