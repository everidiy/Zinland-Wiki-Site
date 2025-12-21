import '../styles/Characters.css';
import { Link } from 'react-router-dom';

export default function Characters() {

    return (
        <div className="whichOne">
            <Link to="/heroes">
            <div className="block heroes">
                <div className="imageWrapper">
                    <img src="/heroes/M_knight.jpeg" alt="" />
                </div>
                <p>Heroes</p>
            </div>
            </Link>
            <Link to="/bosses">
            <div className="block monsters">
                <div className="imageWrapper">
                    <img src="/bosses/DARK PALLADIN.jpeg" alt="" />
                </div>
                <p>Bosses</p>
            </div>
            </Link>
        </div>
    )
}