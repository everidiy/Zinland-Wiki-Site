import { Link } from 'react-router-dom';
import '../styles/Characters.css';

export default function Characters() {
    document.title = "Which side will you choose?";

    return (
        <div className="characters-page">
            <Link to="/" className="back-link">← Back to Main</Link>
           <div className="whichOne">
                <Link to="/heroes">
                    <div className="block heroes">
                        <div className="imageWrapper">
                            <img src="/heroes/M_knight.jpeg" alt="Heroes" />
                        </div>
                        <p>Heroes</p>
                    </div>
                </Link>

                <Link to="/bosses">
                    <div className="block monsters">
                        <div className="imageWrapper">
                            <img src="/bosses/DARK PALLADIN.jpeg" alt="Bosses" />
                        </div>
                        <p>Bosses</p>
                    </div>
                </Link>
            </div> 
        </div>
        
    );
}
