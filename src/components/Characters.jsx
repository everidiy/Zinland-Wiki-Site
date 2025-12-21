import '../styles/Characters.css';

export default function Characters() {

    document.title = "Which side will you choose?"

    return (
        <div className="whichOne">
            <a href="/heroes" target="_blank" rel="noopener noreferrer">
                <div className="block heroes">
                    <div className="imageWrapper">
                    <img src="/heroes/M_knight.jpeg" alt="Heroes" />
                    </div>
                    <p>Heroes</p>
                </div>
                </a>

                <a href="/bosses" target="_blank" rel="noopener noreferrer">
                <div className="block monsters">
                    <div className="imageWrapper">
                    <img src="/bosses/DARK PALLADIN.jpeg" alt="Bosses" />
                    </div>
                    <p>Bosses</p>
                </div>
            </a>
        </div>
    )
}