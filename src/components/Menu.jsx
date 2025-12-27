import '../styles/Menu.css';

export default function Menu() {

  return (
    <div className="navbar">
      <div className="logo">
          <p>Zinland-Wiki</p>
      </div>
      <div className="choose">
          <a href="#instrction">How to play</a>
        <a href="/characters" target='_blank' rel='noopener noreferrer'>
          Characters
        </a>
      </div>
      <div className="random">
        <p>Your totem</p>
      </div>
    </div>
  );
}