import { Link } from 'react-router-dom';
import '../styles/Menu.css';

export default function Menu() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <p>Zinland-Wiki</p>
        </Link> 
      </div>
      <div className="choose">
        <Link to="/">
          <p>Main</p>
        </Link>
        <Link to="/characters">
          <p>Characters</p>
        </Link>
      </div>
      <div className="random">
        <p>Your totem</p>
      </div>
    </div>
  );
}