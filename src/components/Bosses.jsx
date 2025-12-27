import { useEffect, useState } from "react"
import bossesData from '../data/bosses.json';
import '../styles/Bosses.css'

export default function Bosses() {
    const [bosses, setBosses] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedBoss, setSelectedBoss] = useState(null)

    useEffect(() => {
        setBosses(bossesData);
    }, []);

    const openModal = (boss) => {
        setSelectedBoss(boss)
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    }

    const closeModal = () => {
        setSelectedBoss(null);
        setModalOpen(false);
        document.body.style.overflow = 'auto'; 
    };

    document.title = "Bosses of Zinland"

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
                        openModal={() => openModal(boss)}
                    />
                ))}
            </div>

            {modalOpen && selectedBoss && (
                <BossModal
                    boss={selectedBoss}
                    closeModal={closeModal}
                />
            )}
        </div>
    );
}

export function BossCard({ boss, openModal }) {
    const { pers, img } = boss;

    return (
        <div className="boss-card" onClick={openModal}>
            <div className="boss-card-header">
                <img src={img} alt="" />
                <span className="boss-class-badge">{pers}</span>
            </div>
        </div>
    );
}

export function BossModal({ boss, closeModal }) {
    const { name, pers, sex, mission, desc, img, word } = boss;

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
                        <h3>Word</h3>
                        <div className="modal-words-text">
                            {word ? (
                                    <span className="word-badge">{
                                        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                                    }</span>
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
