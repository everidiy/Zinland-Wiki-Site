import '../styles/Menu.css';

export default function Menu() {

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="navbar">
      <div className="logo">
          <p>Zinland-Wiki</p>
      </div>
      <div className="choose">
          <p onClick={() => scrollTo("instruction")}>How to play</p>
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